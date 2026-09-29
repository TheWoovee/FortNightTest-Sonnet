// Building: grid-snapped walls, floors, ramps and roofs in wood / stone / metal.
// Pieces snap to a 4 m lattice that anchors to nearby structures (or the ground), have HP, collide, and can be
// shot or harvested with the pickaxe.
import * as THREE from 'three';
import { BUILD } from '../config.js';
import { MATERIALS } from '../data/items.js';
import { GeoBuilder, lin } from '../gfx/geo.js';
import { clamp, clamp01, damp } from '../util/math.js';

const G = BUILD.grid, H = BUILD.height, T = BUILD.thickness;
const RISE = 2.4;
const LOOK = {
  wood:  { frame: 0x7a4a26, panel: 0xdcaa66, groove: 0x9a6a36, skirt: 0x8a5f34 },
  stone: { frame: 0x6a6a76, panel: 0xc07a5e, groove: 0xe4dfd4, skirt: 0x7c6a62 },
  metal: { frame: 0x46505f, panel: 0x93abc9, groove: 0x6b7f9b, skirt: 0x556072 },
};

// ---- geometry ----------------------------------------------------------------------------------------------------------------------------
function build(fn) { const b = new GeoBuilder(); fn(b); return b.build(); }

function wallGeo(mat, axis, skirt) {
  const L = LOOK[mat];
  return build((b) => {
    const bx = (x0, y0, z0, x1, y1, z1, c, o) => (axis === 'x' ? b.box(x0, y0, z0, x1, y1, z1, c, o) : b.box(z0, y0, x0, z1, y1, x1, c, o));
    const t = T / 2, f = 0.17;
    bx(f, f, -t, G - f, H - f, t, L.panel, { dark: 0.9 });
    // frame
    bx(0, 0, -t - 0.03, G, f, t + 0.03, L.frame, { dark: 0.8 });
    bx(0, H - f, -t - 0.03, G, H, t + 0.03, L.frame, { dark: 0.9 });
    bx(0, f, -t - 0.03, f, H - f, t + 0.03, L.frame, { dark: 0.85 });
    bx(G - f, f, -t - 0.03, G, H - f, t + 0.03, L.frame, { dark: 0.85 });
    if (mat === 'wood') {
      for (let i = 1; i < 5; i++) bx(f + i * (G - 2 * f) / 5 - 0.02, f, -t - 0.012, f + i * (G - 2 * f) / 5 + 0.02, H - f, t + 0.012, L.groove, { dark: 1 });
    } else if (mat === 'stone') {
      for (let i = 1; i < 7; i++) bx(f, f + i * (H - 2 * f) / 7 - 0.02, -t - 0.012, G - f, f + i * (H - 2 * f) / 7 + 0.02, t + 0.012, L.groove, { dark: 1 });
      for (let r = 0; r < 7; r++) for (let i = 1; i < 5; i++) {
        const x = f + (i + (r % 2 ? 0.5 : 0)) * (G - 2 * f) / 5;
        if (x < G - f - 0.1) bx(x - 0.02, f + r * (H - 2 * f) / 7, -t - 0.012, x + 0.02, f + (r + 1) * (H - 2 * f) / 7, t + 0.012, L.groove, { dark: 1 });
      }
    } else {
      bx(f, H / 2 - 0.03, -t - 0.02, G - f, H / 2 + 0.03, t + 0.02, L.groove, { dark: 1 });
      for (const [x, y] of [[0.3, 0.3], [G - 0.3, 0.3], [0.3, H - 0.3], [G - 0.3, H - 0.3]]) bx(x - 0.07, y - 0.07, -t - 0.04, x + 0.07, y + 0.07, t + 0.04, 0xd7e2f2, { dark: 1 });
    }
    if (skirt > 0.05) bx(0.05, -skirt, -t, G - 0.05, 0.02, t, L.skirt, { dark: 0.7 });
  });
}

function floorGeo(mat, skirt) {
  const L = LOOK[mat];
  return build((b) => {
    b.box(0, -T, 0, G, 0, G, L.panel, { bottom: true, dark: 0.85 });
    const f = 0.16;
    b.box(0, -T - 0.04, 0, G, 0.03, f, L.frame, { dark: 0.85 });
    b.box(0, -T - 0.04, G - f, G, 0.03, G, L.frame, { dark: 0.85 });
    b.box(0, -T - 0.04, f, f, 0.03, G - f, L.frame, { dark: 0.85 });
    b.box(G - f, -T - 0.04, f, G, 0.03, G - f, L.frame, { dark: 0.85 });
    for (let i = 1; i < 5; i++) b.box(f, 0.0, i * G / 5 - 0.02, G - f, 0.012, i * G / 5 + 0.02, L.groove, { dark: 1 });
    if (skirt > 0.3) {
      for (const [x, z] of [[0.25, 0.25], [G - 0.25, 0.25], [0.25, G - 0.25], [G - 0.25, G - 0.25]]) b.box(x - 0.14, -skirt, z - 0.14, x + 0.14, -T, z + 0.14, L.skirt, { dark: 0.7 });
    }
  });
}

/** Ramp rising along +x (dir=1 low at x=0) — mirrored/rotated by the caller through axis+dir. */
function rampGeo(mat, axis, dir, skirt) {
  const L = LOOK[mat];
  return build((b) => {
    // local: u along the slope [0,G] (low→high), v across [0,G]
    const P = (u, y, v) => {
      const uu = dir > 0 ? u : G - u;
      return axis === 'x' ? [uu, y, v] : [v, y, uu];
    };
    const k = H / G;
    const norm = (n) => (axis === 'x' ? [n[0] * (dir > 0 ? 1 : -1), n[1], n[2]] : [n[2], n[1], n[0] * (dir > 0 ? 1 : -1)]);
    const top = L.panel;
    // sloped surface
    b.quad(P(0, 0, 0), P(G, H, 0), P(G, H, G), P(0, 0, G), top, norm([-k, 1, 0]), 1, 1, 1, 1);
    // underside
    b.quad(P(0, -T, 0), P(G, H - T, 0), P(G, H - T, G), P(0, -T, G), L.skirt, norm([k, -1, 0]));
    // sides (frames)
    for (const v of [0, G]) {
      const sign = v === 0 ? -1 : 1;
      const h = axis === 'x' ? [0, 0, sign] : [sign, 0, 0];
      b.quad(P(0, -T, v), P(G, H - T, v), P(G, H, v), P(0, 0, v), L.frame, h, 0.85, 0.85, 1, 1);
    }
    // back + front faces
    b.quad(P(G, H - T, 0), P(G, H - T, G), P(G, H, G), P(G, H, 0), L.frame, norm([1, 0, 0]), 0.85, 0.85, 1, 1);
    b.quad(P(0, -T, 0), P(0, -T, G), P(0, 0, G), P(0, 0, 0), L.frame, norm([-1, 0, 0]), 0.85, 0.85, 1, 1);
    // stair grooves
    const steps = 8;
    for (let i = 1; i < steps; i++) {
      const u = (i / steps) * G, y = (i / steps) * H + 0.012;
      b.quad(P(u - 0.02, y - 0.02 * k, 0.16), P(u + 0.02, y + 0.02 * k, 0.16), P(u + 0.02, y + 0.02 * k, G - 0.16), P(u - 0.02, y - 0.02 * k, G - 0.16), L.groove, norm([-k, 1, 0]));
    }
    // side rails
    for (const v of [0.0, G - 0.16]) {
      b.quad(P(0, 0.012, v), P(G, H + 0.012, v), P(G, H + 0.012, v + 0.16), P(0, 0.012, v + 0.16), L.frame, norm([-k, 1, 0]));
    }
    if (skirt > 0.3) {
      for (const [u, v] of [[0.3, 0.3], [0.3, G - 0.3]]) {
        const [x, , z] = P(u, 0, v);
        b.box(x - 0.14, -skirt, z - 0.14, x + 0.14, -T, z + 0.14, L.skirt, { dark: 0.7 });
      }
    }
  });
}

function roofGeo(mat, ridge) {
  const L = LOOK[mat];
  return build((b) => {
    b.gable(0, 0, G, G, 0, RISE, ridge, L.panel, L.frame, 0.0, 0.0, 0.0);
    // ridge cap + eave trim
    const c = ridge === 'x' ? [G / 2] : [G / 2];
    if (ridge === 'x') b.box(0, RISE - 0.06, G / 2 - 0.12, G, RISE + 0.08, G / 2 + 0.12, L.frame);
    else b.box(G / 2 - 0.12, RISE - 0.06, 0, G / 2 + 0.12, RISE + 0.08, G, L.frame);
  });
}

const geoCache = new Map();
function pieceGeometry(type, mat, axis, dir, skirt) {
  const sk = Math.round(clamp(skirt, 0, 3) * 2) / 2;
  const key = `${type}|${mat}|${axis}|${dir}|${sk}`;
  let g = geoCache.get(key);
  if (!g) {
    if (type === 'wall') g = wallGeo(mat, axis, sk);
    else if (type === 'floor') g = floorGeo(mat, sk);
    else if (type === 'ramp') g = rampGeo(mat, axis, dir, sk);
    else g = roofGeo(mat, axis);
    geoCache.set(key, g);
  }
  return g;
}

const _tmpV = new THREE.Vector3();

export class BuildSystem {
  constructor(game) {
    this.game = game;
    this.group = new THREE.Group();
    this.group.name = 'pieces';
    game.gfx.scene.add(this.group);
    this.pieces = new Map();
    this.cellIndex = new Map();            // "ci,cj" → [piece]
    this.list = [];
    this.piece = 'wall';
    this.mat = 'wood';
    this.cooldown = 0;
    this.active = false;
    this.target = null;
    this.baseMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    // ghost
    this.ghostMat = new THREE.MeshBasicMaterial({ color: 0x3ab8ff, transparent: true, opacity: 0.42, depthWrite: false, side: THREE.DoubleSide });
    this.ghost = new THREE.Mesh(new THREE.BufferGeometry(), this.ghostMat);
    this.ghost.visible = false; this.ghost.renderOrder = 4;
    this.ghost.frustumCulled = false;
    game.gfx.scene.add(this.ghost);
    this.ghostKey = '';
    this.ghostPulse = 0;
  }

  clear() {
    for (const p of [...this.list]) this._remove(p, false);
    this.list.length = 0; this.pieces.clear(); this.cellIndex.clear();
    this.ghost.visible = false;
    this.active = false;
  }

  selectPiece(id) { if (this.piece !== id) { this.piece = id; this.game.audio?.uiTick(); this.game.player.inv.touch(); } }
  cyclePiece(d) {
    const order = ['wall', 'floor', 'ramp', 'roof'];
    this.selectPiece(order[(order.indexOf(this.piece) + d + 4) % 4]);
  }
  cycleMaterial(d) {
    const order = ['wood', 'stone', 'metal'];
    this.mat = order[(order.indexOf(this.mat) + d + 3) % 3];
    this.game.audio?.uiTick();
    this.game.player.inv.touch();
  }

  setActive(actor, on) {
    if (!actor.isPlayer) return;
    this.active = on;
    this.game.hud?.setBuildMode(on);
    this.game.player.inv.touch();
    if (!on) this.ghost.visible = false;
    // pick a material we can afford
    if (on && actor.inv.mats[this.mat] < BUILD.cost) {
      for (const m of ['wood', 'stone', 'metal']) if (actor.inv.mats[m] >= BUILD.cost) { this.mat = m; break; }
    }
  }

  // ---- lattice / targeting -----------------------------------------------------------------------------------------------------------------------------
  _cellKey(i, j) { return `${i},${j}`; }

  _indexAdd(p) {
    const keys = p.cells;
    for (const k of keys) { let a = this.cellIndex.get(k); if (!a) this.cellIndex.set(k, (a = [])); a.push(p); }
  }
  _indexRemove(p) {
    for (const k of p.cells) { const a = this.cellIndex.get(k); if (!a) continue; const i = a.indexOf(p); if (i >= 0) a.splice(i, 1); if (!a.length) this.cellIndex.delete(k); }
  }

  /** nearest structure piece near (ci,cj) whose level is close to y → lattice anchor */
  _anchor(ci, cj, y) {
    let best = null, bd = 1e9;
    for (let di = -2; di <= 2; di++) for (let dj = -2; dj <= 2; dj++) {
      const a = this.cellIndex.get(this._cellKey(ci + di, cj + dj));
      if (!a) continue;
      for (const p of a) {
        const dy = Math.abs(p.y - y);
        if (dy > H * 2.6) continue;
        const d = Math.abs(di) + Math.abs(dj) + dy * 0.1;
        if (d < bd) { bd = d; best = p; }
      }
    }
    return best;
  }

  /**
   * Work out where `type` would go for an actor at pos looking along yaw/pitch.
   * Returns {type, axis, dir, ci, cj, y, key, cells, minX,maxX,minZ,maxZ, valid, reason}
   */
  resolve(type, pos, yaw, pitch, mat, actorInv) {
    const g = this.game;
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
    const dirAxis = Math.abs(fx) > Math.abs(fz) ? 'x' : 'z';
    const sgn = dirAxis === 'x' ? Math.sign(fx) || 1 : Math.sign(fz) || 1;
    const ci = Math.floor(pos.x / G), cj = Math.floor(pos.z / G);
    let feetY = pos.y;
    // near-ground snapping so small hops don't shift the level
    const gr = g.physics.groundAt(pos.x, pos.z, feetY + 0.7).y;
    const airborne = feetY - gr > 0.9;
    const anchor = this._anchor(ci, cj, feetY);
    let baseY;
    if (anchor) {
      const rel = (feetY - anchor.y) / H;
      baseY = anchor.y + (airborne ? Math.floor(rel + 0.12) : Math.round(rel)) * H;
    } else baseY = airborne ? gr : gr;
    const out = { type, axis: dirAxis, dir: sgn, ci, cj, y: baseY, valid: true, reason: '', mat };
    if (type === 'wall') {
      if (dirAxis === 'x') { out.axis = 'z'; out.ci = sgn > 0 ? ci + 1 : ci; out.cj = cj; }     // wall plane perpendicular to x, spans z
      else { out.axis = 'x'; out.ci = ci; out.cj = sgn > 0 ? cj + 1 : cj; }
    } else if (type === 'floor') {
      if (pitch < -0.85) { out.ci = ci; out.cj = cj; if (airborne) out.y = anchor ? baseY : feetY - 0.06 >= gr ? Math.max(gr, feetY - 0.06) : gr; }
      else { out.ci = dirAxis === 'x' ? ci + sgn : ci; out.cj = dirAxis === 'z' ? cj + sgn : cj; }
      out.axis = dirAxis;
    } else if (type === 'ramp') {
      out.ci = dirAxis === 'x' ? ci + sgn : ci; out.cj = dirAxis === 'z' ? cj + sgn : cj;
      out.axis = dirAxis; out.dir = sgn;
    } else if (type === 'roof') {
      out.ci = ci; out.cj = cj; out.y = baseY + H; out.axis = dirAxis;
    }
    // geometry bounds + key
    const i = out.ci, j = out.cj, y = out.y;
    const lk = Math.round(y * 4);
    if (type === 'wall') {
      if (out.axis === 'x') { out.minX = i * G; out.maxX = (i + 1) * G; out.minZ = j * G - T / 2; out.maxZ = j * G + T / 2; out.cells = [this._cellKey(i, j), this._cellKey(i, j - 1)]; out.key = `w|x|${i}|${j}|${lk}`; }
      else { out.minX = i * G - T / 2; out.maxX = i * G + T / 2; out.minZ = j * G; out.maxZ = (j + 1) * G; out.cells = [this._cellKey(i, j), this._cellKey(i - 1, j)]; out.key = `w|z|${i}|${j}|${lk}`; }
      out.y0 = y; out.y1 = y + H;
    } else {
      out.minX = i * G; out.maxX = (i + 1) * G; out.minZ = j * G; out.maxZ = (j + 1) * G; out.cells = [this._cellKey(i, j)];
      out.key = `c|${i}|${j}|${lk}`;
      out.y0 = y - T; out.y1 = type === 'roof' ? y + RISE : type === 'ramp' ? y + H : y;
    }
    // ---- validity ----
    const cx = (out.minX + out.maxX) / 2, cz = (out.minZ + out.maxZ) / 2;
    if (this.pieces.has(out.key)) { out.valid = false; out.reason = 'occupied'; }
    else if (type === 'floor' || type === 'ramp' || type === 'roof') {
      // cells occupied by another cell-piece at this level
      if (this.pieces.has(out.key)) { out.valid = false; }
    }
    if (out.valid && Math.hypot(cx - pos.x, cz - pos.z) > 13) { out.valid = false; out.reason = 'far'; }
    if (out.valid && g.terrain.heightAt(cx, cz) > out.y1 + 0.2) { out.valid = false; out.reason = 'buried'; }
    if (out.valid && out.y < -6) { out.valid = false; out.reason = 'water'; }
    if (out.valid) {
      const wl = g.terrain.waterLevelAt(cx, cz);
      if (wl !== null && g.terrain.heightAt(cx, cz) < wl - 1.4 && !anchor) { out.valid = false; out.reason = 'water'; }
    }
    if (out.valid && g.physics.overlapsSolid(out.minX, out.maxX, out.minZ, out.maxZ, out.y0 + 0.02, out.y1 - 0.02, ['piece'])) { out.valid = false; out.reason = 'blocked'; }
    out.skirt = anchor && Math.abs(anchor.y - out.y) < 0.01 && anchor.skirt < 0.3 ? 0 : this._skirtFor(out);
    if (actorInv && out.valid && actorInv.mats[mat] < BUILD.cost) { out.valid = false; out.reason = 'mats'; }
    return out;
  }

  _skirtFor(t) {
    // how far below the piece the ground lies (so ground-level pieces don't float)
    const T_ = this.game.terrain;
    const pts = [[t.minX, t.minZ], [t.maxX, t.minZ], [t.minX, t.maxZ], [t.maxX, t.maxZ], [(t.minX + t.maxX) / 2, (t.minZ + t.maxZ) / 2]];
    let low = 1e9;
    for (const [x, z] of pts) low = Math.min(low, this.game.physics.groundAt(x, z, t.y + 0.4).y);
    return clamp(t.y - low + 0.2, 0, 3);
  }

  // ---- placement ---------------------------------------------------------------------------------------------------------------------------------------------
  place(t, actor) {
    const g = this.game;
    const mat = t.mat;
    const M = MATERIALS[mat];
    const p = {
      kind: 'piece', type: t.type, mat, key: t.key, ci: t.ci, cj: t.cj, y: t.y, axis: t.axis, dir: t.dir, skirt: t.skirt,
      hp: M.hp * 0.33, maxHp: M.hp, cells: t.cells, colliders: [], owner: actor, builtT: 0, flash: 0, mesh: null, alive: true,
      minX: t.minX, maxX: t.maxX, minZ: t.minZ, maxZ: t.maxZ,
    };
    const geo = pieceGeometry(t.type, mat, t.axis, t.dir, t.skirt);
    const material = this.baseMat.clone();
    const mesh = new THREE.Mesh(geo, material);
    let ox = t.type === 'wall' ? (t.axis === 'x' ? t.ci * G : t.ci * G) : t.ci * G;
    let oz = t.type === 'wall' ? (t.axis === 'x' ? t.cj * G : t.cj * G) : t.cj * G;
    mesh.position.set(ox, t.y, oz);
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.userData.piece = p;
    material.transparent = true; material.opacity = 0.5;
    p.mesh = mesh;
    p.ox = ox; p.oz = oz;
    this.group.add(mesh);
    // colliders
    const P = g.physics;
    const opt = (walk) => ({ walkable: walk, owner: p, kind: 'piece', material: mat === 'stone' ? 'stone' : mat });
    if (t.type === 'wall') {
      p.colliders.push(P.addBox(t.minX, t.maxX, t.minZ, t.maxZ, t.y - Math.max(0.2, t.skirt), t.y + H, opt(false)));
    } else if (t.type === 'floor') {
      p.colliders.push(P.addBox(t.minX, t.maxX, t.minZ, t.maxZ, t.y - T - (t.skirt > 0.3 ? t.skirt * 0.5 : 0), t.y, opt(true)));
    } else if (t.type === 'ramp') {
      p.colliders.push(P.addRamp(t.minX, t.maxX, t.minZ, t.maxZ, t.y - T, t.y, t.y + H, t.axis, t.dir, opt(true)));
    } else {
      const xc = (t.minX + t.maxX) / 2, zc = (t.minZ + t.maxZ) / 2;
      if (t.axis === 'x') {
        p.colliders.push(P.addRamp(t.minX, t.maxX, t.minZ, zc, t.y - 0.2, t.y, t.y + RISE, 'z', 1, opt(true)));
        p.colliders.push(P.addRamp(t.minX, t.maxX, zc, t.maxZ, t.y - 0.2, t.y, t.y + RISE, 'z', -1, opt(true)));
      } else {
        p.colliders.push(P.addRamp(t.minX, xc, t.minZ, t.maxZ, t.y - 0.2, t.y, t.y + RISE, 'x', 1, opt(true)));
        p.colliders.push(P.addRamp(xc, t.maxX, t.minZ, t.maxZ, t.y - 0.2, t.y, t.y + RISE, 'x', -1, opt(true)));
      }
    }
    this.pieces.set(p.key, p);
    this._indexAdd(p);
    this.list.push(p);
    // cap the number of pieces (oldest go first)
    if (this.list.length > 1100) this._destroy(this.list[0], false);
    g.fx.sparkle(( t.minX + t.maxX) / 2, t.y + 1, (t.minZ + t.maxZ) / 2, 0x9ad8ff, 5, 1.2, 1);
    g.audio?.buildPlace(mat, (t.minX + t.maxX) / 2, t.y + 1, (t.minZ + t.maxZ) / 2);
    return p;
  }

  /** Try to build at the actor's aim. Returns the piece or null. */
  tryPlace(actor, type, mat = this.mat) {
    if (this.game.phase !== 'match' || actor.mode !== 'ground') return null;
    const t = this.resolve(type, actor.pos, actor.aimYaw, actor.aimPitch, mat, actor.inv);
    if (!t.valid) {
      if (actor.isPlayer && t.reason === 'mats') { this.game.hud?.toast(`NOT ENOUGH ${mat.toUpperCase()}`, '255,120,120'); this.game.audio?.buildFail(); }
      else if (actor.isPlayer) this.game.audio?.buildFail();
      return null;
    }
    if (!actor.inv.spend(BUILD.cost, mat)) return null;
    const p = this.place(t, actor);
    // don't leave the builder stuck inside their own wall
    if (type === 'wall') this.game.physics.depenetrate(actor.pos, actor.radius, actor.height, 0.5);
    return p;
  }

  // ---- damage --------------------------------------------------------------------------------------------------------------------------------------------------------
  damagePiece(p, dmg, attacker, harvest) {
    if (!p.alive) return;
    const before = p.hp;
    p.hp -= dmg;
    p.flash = 1;
    if (harvest && attacker) {
      const gain = Math.max(1, Math.round(Math.min(dmg, before) * 0.35));
      const got = attacker.inv.addMats(p.mat, gain);
      if (attacker.isPlayer && got > 0) this.game.hud?.matTick?.(p.mat, got);
    }
    if (p.hp <= 0) this._destroy(p, true);
  }

  _destroy(p, fx) {
    if (!p.alive) return;
    const g = this.game;
    const cx = (p.minX + p.maxX) / 2, cz = (p.minZ + p.maxZ) / 2, cy = p.y + (p.type === 'wall' ? H / 2 : 0.4);
    if (fx) {
      g.fx.pieceBreak(cx, cy, cz, LOOK[p.mat].panel, p.type === 'wall' ? 2.4 : 1.8);
      g.audio?.pieceBreak(cx, cy, cz, p.mat);
    }
    this._remove(p, true);
  }

  _remove(p, splice) {
    p.alive = false;
    for (const c of p.colliders) this.game.physics.remove(c);
    p.colliders.length = 0;
    this.group.remove(p.mesh);
    p.mesh.material.dispose();
    this._indexRemove(p);
    this.pieces.delete(p.key);
    if (splice) { const i = this.list.indexOf(p); if (i >= 0) this.list.splice(i, 1); }
  }

  // ---- update -----------------------------------------------------------------------------------------------------------------------------------------------------------
  update(dt) {
    const g = this.game;
    const p = g.player;
    this.cooldown = Math.max(0, this.cooldown - dt);
    // build-in animation + damage flash
    for (const pc of this.list) {
      if (pc.builtT < 1) {
        pc.builtT = Math.min(1, pc.builtT + dt * 2.2);
        const e = pc.builtT;
        const m = pc.mesh.material;
        const s = 0.9 + 0.1 * (1 - Math.pow(1 - e, 3));
        pc.mesh.scale.set(1, pc.type === 'wall' ? s : 1, 1);
        m.opacity = 0.5 + 0.5 * e;
        m.color.setRGB(0.6 + 0.4 * e, 0.85 + 0.15 * e, 1);
        pc.hp = Math.max(pc.hp, pc.maxHp * (0.33 + 0.67 * e) - (pc.maxHp - pc.hp > 0 ? 0 : 0));
        if (e >= 1) { m.transparent = false; m.opacity = 1; m.color.setRGB(1, 1, 1); pc.hp = Math.min(pc.hp, pc.maxHp); }
      }
      if (pc.flash > 0) {
        pc.flash = Math.max(0, pc.flash - dt * 6);
        const k = 1 + pc.flash * 1.2;
        const hurt = 1 - clamp01(pc.hp / pc.maxHp);
        pc.mesh.material.color.setRGB(k * (1 - hurt * 0.25), k * (1 - hurt * 0.3), k * (1 - hurt * 0.3));
        pc.mesh.position.x = pc.ox + (Math.random() - 0.5) * 0.03 * pc.flash;
      } else if (pc.builtT >= 1 && pc.hp < pc.maxHp) {
        const hurt = 1 - clamp01(pc.hp / pc.maxHp);
        pc.mesh.material.color.setRGB(1 - hurt * 0.25, 1 - hurt * 0.3, 1 - hurt * 0.3);
      }
    }
    if (!this.active || !p.alive || !p.building) { this.ghost.visible = false; return; }
    // ghost preview
    const t = this.resolve(this.piece, p.pos, p.aimYaw, p.aimPitch, this.mat, p.inv);
    this.target = t;
    const gk = `${t.type}|${t.mat}|${t.axis}|${t.dir}|${Math.round(t.skirt * 2)}`;
    if (gk !== this.ghostKey) {
      this.ghostKey = gk;
      this.ghost.geometry = pieceGeometry(t.type, t.mat, t.axis, t.dir, t.skirt);
    }
    this.ghost.visible = true;
    this.ghost.position.set(t.type === 'wall' ? t.ci * G : t.ci * G, t.y, t.type === 'wall' ? t.cj * G : t.cj * G);
    this.ghostPulse += dt * 6;
    this.ghostMat.color.set(t.valid ? 0x3ab8ff : 0xff4a4a);
    this.ghostMat.opacity = (t.valid ? 0.34 : 0.4) + Math.sin(this.ghostPulse) * 0.05;
    // click to place (hold to keep placing)
    const inp = g.input;
    if (inp.enabled && !g.uiBlocking && (inp.mousePress(0) || (inp.mouse(0) && this.cooldown <= 0)) && this.cooldown <= 0) {
      this.cooldown = 0.13;
      this.tryPlace(p, this.piece, this.mat);
    }
  }
}
