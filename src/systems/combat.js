// Hitscan combat: bullet traces against the world + actor hit volumes, damage falloff, structure damage,
// pickaxe melee/harvesting and the event hooks that drive effects, audio and the HUD.
import * as THREE from 'three';
import { PICKAXE, WEAPONS } from '../data/items.js';
import { RayHit } from '../physics/physics.js';
import { clamp, clamp01 } from '../util/math.js';

const _o = new THREE.Vector3(), _d = new THREE.Vector3(), _mz = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3();

function raySphere(ox, oy, oz, dx, dy, dz, cx, cy, cz, r) {
  const lx = cx - ox, ly = cy - oy, lz = cz - oz;
  const tca = lx * dx + ly * dy + lz * dz;
  const d2 = lx * lx + ly * ly + lz * lz - tca * tca;
  const r2 = r * r;
  if (d2 > r2) return -1;
  const thc = Math.sqrt(r2 - d2);
  const t0 = tca - thc, t1 = tca + thc;
  if (t1 < 0) return -1;
  return t0 >= 0 ? t0 : 0;
}

function rayCylY(ox, oy, oz, dx, dy, dz, cx, cz, r, y0, y1) {
  const fx = ox - cx, fz = oz - cz;
  const a = dx * dx + dz * dz;
  let best = -1;
  if (a > 1e-9) {
    const b = 2 * (fx * dx + fz * dz);
    const c = fx * fx + fz * fz - r * r;
    const disc = b * b - 4 * a * c;
    if (disc >= 0) {
      const sq = Math.sqrt(disc);
      let t = (-b - sq) / (2 * a);
      if (t < 0) t = c <= 0 ? 0 : -1;    // origin inside
      if (t >= 0) {
        const y = oy + dy * t;
        if (y >= y0 && y <= y1) best = t;
      }
    }
  }
  if (Math.abs(dy) > 1e-9) {
    for (const py of [y1, y0]) {
      const t = (py - oy) / dy;
      if (t >= 0 && (best < 0 || t < best)) {
        const x = ox + dx * t - cx, z = oz + dz * t - cz;
        if (x * x + z * z <= r * r) best = t;
      }
    }
  }
  return best;
}

export class Combat {
  constructor(game) {
    this.game = game;
    this.rh = new RayHit();
    this.res = { type: 'none', t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 1, nz: 0, actor: null, head: false, collider: null, terrain: false };
  }

  /**
   * Trace a bullet: world first, then actors nearer than the world hit. Returns the shared result object.
   */
  trace(shooter, ox, oy, oz, dx, dy, dz, range) {
    const g = this.game;
    const res = this.res;
    const wh = g.physics.raycast(ox, oy, oz, dx, dy, dz, range, { bullets: true }, this.rh);
    let bestT = wh.hit ? wh.t : range;
    res.type = wh.hit ? 'world' : 'none';
    res.t = bestT; res.actor = null; res.head = false;
    res.collider = wh.collider; res.terrain = wh.terrain;
    res.nx = wh.nx; res.ny = wh.ny; res.nz = wh.nz;
    for (const a of g.actors) {
      if (a === shooter || !a.alive || a.mode === 'bus') continue;
      // cheap reject by distance to ray
      const cx = a.pos.x - ox, cy = a.pos.y + 0.9 - oy, cz = a.pos.z - oz;
      const proj = cx * dx + cy * dy + cz * dz;
      if (proj < -1 || proj > bestT + 2) continue;
      const px = cx - dx * proj, py = cy - dy * proj, pz = cz - dz * proj;
      if (px * px + py * py + pz * pz > 4) continue;
      const v = a.hitVolumes();
      const th = raySphere(ox, oy, oz, dx, dy, dz, v.head.x, v.head.y, v.head.z, v.head.r);
      const tb = rayCylY(ox, oy, oz, dx, dy, dz, v.body.x, v.body.z, v.body.r, v.body.y0, v.body.y1);
      let t = -1, head = false;
      if (th >= 0 && (tb < 0 || th <= tb + 0.06)) { t = th; head = true; }
      else if (tb >= 0) { t = tb; }
      if (t >= 0 && t < bestT) {
        bestT = t; res.type = 'actor'; res.t = t; res.actor = a; res.head = head; res.collider = null; res.terrain = false;
      }
    }
    res.x = ox + dx * bestT; res.y = oy + dy * bestT; res.z = oz + dz * bestT;
    return res;
  }

  falloff(W, dist) {
    const f = W.falloff;
    if (dist <= f[0]) return 1;
    if (dist >= f[1]) return f[2];
    return 1 + (f[2] - 1) * ((dist - f[0]) / (f[1] - f[0]));
  }

  fireWeapon(actor, item, W, spread) {
    const g = this.game;
    const ray = actor.aimRay;
    _o.copy(ray.origin);
    const d0 = ray.dir;
    // orthonormal basis for the spread cone
    _r.set(d0.z, 0, -d0.x);
    if (_r.lengthSq() < 1e-6) _r.set(1, 0, 0);
    _r.normalize();
    _u.crossVectors(d0, _r).normalize();
    actor.model.muzzleWorld(_mz);
    if (actor.mode !== 'ground') _mz.copy(actor.pos).y += 1.4;
    const isPlayer = actor.isPlayer;
    let hitActors = null;
    let anyHit = false;
    for (let p = 0; p < W.pellets; p++) {
      const ang = Math.random() * Math.PI * 2;
      const rr = Math.sqrt(Math.random()) * spread;
      _d.copy(d0).addScaledVector(_r, Math.cos(ang) * rr).addScaledVector(_u, Math.sin(ang) * rr).normalize();
      const hit = this.trace(actor, _o.x, _o.y, _o.z, _d.x, _d.y, _d.z, W.range);
      const dist = hit.t;
      // tracer from the muzzle toward the impact point
      if (W.pellets === 1 || p < 4) g.fx.tracer(_mz.x, _mz.y, _mz.z, hit.x, hit.y, hit.z, W.tracer, isPlayer, hit.type !== 'none');
      if (hit.type === 'actor') {
        const victim = hit.actor;
        const dmg = W.dmg * this.falloff(W, dist) * (hit.head ? W.headMult : 1) * (actor.damageScale ?? 1);
        if (!hitActors) hitActors = new Map();
        const rec = hitActors.get(victim) || { dmg: 0, head: false, x: hit.x, y: hit.y, z: hit.z };
        rec.dmg += dmg; rec.head = rec.head || hit.head;
        hitActors.set(victim, rec);
        g.fx.impactActor(hit.x, hit.y, hit.z, hit.head);
        anyHit = true;
      } else if (hit.type === 'world') {
        const col = hit.collider;
        g.fx.impact(hit.x, hit.y, hit.z, hit.nx, hit.ny, hit.nz, col?.material || (hit.terrain ? 'dirt' : 'stone'), col?.kind);
        if (col?.owner?.kind === 'piece') g.build.damagePiece(col.owner, W.structDmg * this.falloff(W, dist), actor, false);
        if (isPlayer && p === 0) g.audio?.impact(hit.x, hit.y, hit.z, col?.material || 'dirt');
      }
    }
    if (hitActors) {
      for (const [victim, rec] of hitActors) {
        const dmg = Math.round(rec.dmg);
        const shieldBefore = victim.shield;
        const applied = victim.takeDamage(dmg, { attacker: actor, weapon: W.name, weaponId: W.id, headshot: rec.head, cause: 'weapon', point: rec });
        actor.stats.damageDealt += applied;
        actor.stats.hits++;
        if (isPlayer) {
          const killed = !victim.alive;
          g.hud?.hitMarker(rec.head, killed, applied);
          g.fx.damageNumber(rec.x, rec.y, rec.z, applied, rec.head, shieldBefore > 0);
          g.audio?.hitConfirm(rec.head, killed, shieldBefore > 0);
        }
      }
    }
    g.fx.muzzleFlash(actor, _mz, W);
    g.audio?.shot(actor, W, _mz);
    g.noise(actor.pos, W.id === 'sniper' ? 160 : 110, actor);
    return anyHit;
  }

  /** Pickaxe: hit an actor, harvest scenery or damage structures. */
  melee(actor) {
    const g = this.game;
    const eye = actor.eyePos(_o);
    const ray = actor.aimRay;
    _d.copy(ray.dirFromEye || ray.dir);
    const reach = PICKAXE.reach;
    const hit = this.trace(actor, eye.x, eye.y - 0.2, eye.z, _d.x, _d.y, _d.z, reach);
    if (hit.type === 'actor') {
      const v = hit.actor;
      const applied = v.takeDamage(PICKAXE.dmg * (hit.head ? 1.5 : 1), { attacker: actor, weapon: 'Pickaxe', weaponId: 'pickaxe', headshot: hit.head, cause: 'melee', point: hit });
      actor.stats.damageDealt += applied;
      g.fx.impactActor(hit.x, hit.y, hit.z, hit.head);
      if (actor.isPlayer) { g.hud?.hitMarker(hit.head, !v.alive, applied); g.fx.damageNumber(hit.x, hit.y, hit.z, applied, hit.head, false); g.audio?.hitConfirm(hit.head, !v.alive, false); }
      g.audio?.pickaxeHit(actor, 'flesh');
      return;
    }
    if (hit.type === 'world') {
      const col = hit.collider;
      const owner = col?.owner;
      if (owner?.kind === 'piece') {
        g.build.damagePiece(owner, PICKAXE.structDmg, actor, true);
        g.fx.impact(hit.x, hit.y, hit.z, hit.nx, hit.ny, hit.nz, owner.mat, 'piece');
        g.audio?.pickaxeHit(actor, owner.mat);
      } else if (owner && (owner.kind === 'tree' || owner.kind === 'rock' || owner.kind === 'prop')) {
        g.harvest(actor, owner, hit);
        g.audio?.pickaxeHit(actor, owner.kind === 'rock' ? 'stone' : owner.kind === 'prop' ? 'metal' : 'wood');
      } else {
        g.fx.impact(hit.x, hit.y, hit.z, hit.nx, hit.ny, hit.nz, col?.material || 'dirt', col?.kind);
        g.audio?.pickaxeHit(actor, col?.material || 'dirt');
      }
    }
  }
}
