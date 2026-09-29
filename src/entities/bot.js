// Bot AI: drops from the bus, loots, heals, roams toward the safe zone and fights (with reaction time,
// aim error, strafing, weapon choice, healing and cover-building). Difficulty scales accuracy and reflexes.
import * as THREE from 'three';
import { Actor } from './actor.js';
import { randomOutfit } from './characterModel.js';
import { CameraRig } from '../systems/camera.js';
import { WEAPONS, CONSUMABLES, weaponStats } from '../data/items.js';
import { PLAYER, MATCH } from '../config.js';
import { Rng } from '../util/rng.js';
import { clamp, clamp01, angleDiff, dampAngle, damp, lerp } from '../util/math.js';

const TAU = Math.PI * 2;
const yawTo = (ax, az, bx, bz) => Math.atan2(-(bx - ax), -(bz - az));
const _v = new THREE.Vector3();
const _p = { x: 0, y: 0, z: 0 };

const DIFF = {
  easy:   { err: 1.9, react: 0.55, turn: 0.75, dmg: 0.7, view: 0.8, aggr: 0.6 },
  normal: { err: 1.0, react: 0.0, turn: 1.0, dmg: 0.9, view: 1.0, aggr: 1.0 },
  hard:   { err: 0.55, react: -0.12, turn: 1.3, dmg: 1.0, view: 1.15, aggr: 1.3 },
};

export class Bot extends Actor {
  constructor(game, { name, seed, difficulty = 'normal' }) {
    const rng = new Rng(seed);
    super(game, { name, outfit: randomOutfit(rng) });
    this.rng = rng;
    this.diffName = difficulty;
    this.D = DIFF[difficulty] || DIFF.normal;
    this.skill = clamp(0.3 + rng.float() * 0.6, 0, 1);
    this.damageScale = this.D.dmg;
    this.state = 'bus';
    this.thinkT = rng.float() * 0.3;
    this.enemy = null;
    this.enemyVisible = false;
    this.lastSeen = { x: 0, y: 0, z: 0, t: -99 };
    this.reactT = 0;
    this.burstLeft = 0;
    this.burstPause = 0;
    this.strafe = rng.chance(0.5) ? 1 : -1;
    this.strafeT = 0;
    this.aimErr = { yaw: 0, pitch: 0, ty: 0, tp: 0, t: 0 };
    this.lootTarget = null;
    this.path = null;
    this.pathIdx = 0;
    this.roamTarget = null;
    this.roamT = 0;
    this.alert = null;
    this.switchCd = 0;
    this.buildCd = rng.range(1, 4);
    this.stuckT = 0; this.stuckCheck = 0; this.lastPos = new THREE.Vector3(); this.unstick = 0; this.unstickDir = 0;
    this.dropTarget = null;
    this.jumpAt = 0.5;
    this.lootPhaseUntil = 0;
    this.healing = false;
    this.wantJump = 0;
    this.avoidDir = 0;
    this.avoidT = 0;
    this.giveUp = 0;
    this.pathGoal = { x: 0, z: 0 }; this.pathY = 0; this.pathRetryAt = 0; this.noRoute = 0;      // A* route following
    this.wpX = 0; this.wpZ = 0; this.wpSet = -9; this.wdT = 0; this.wdFail = 0; this.wdD = 0; this.wdX = 0; this.wdZ = 0;   // progress watchdog
    this.ignore = new Map();          // loot objects this bot has given up on → time until it may try again
    this.elevated = false;            // standing on a roof / platform well above the ground
    this.scanCd = rng.float();
    this.sprintMode = true;
    this.inv.mats.wood = 60 + Math.floor(rng.float() * 240);
    this.inv.mats.stone = Math.floor(rng.float() * 140);
    this.inv.mats.metal = Math.floor(rng.float() * 90);
    this.targetPref = rng.float();
  }

  // ---- match hooks -----------------------------------------------------------------------------------------------------------------------
  /** Choose where to land and when to jump. */
  planDrop() {
    const g = this.game, rng = this.rng, T = g.terrain;
    const towns = T.layout.towns;
    // weighted POI choice; the biggest town is the hot drop
    const wts = towns.map((t) => [t, (t.big ? 3.2 : 1.4) * (0.5 + rng.float())]);
    let tgt;
    if (rng.chance(0.18)) {
      const a = rng.range(0, TAU), r = Math.sqrt(rng.float()) * 340;
      tgt = { x: Math.cos(a) * r, z: Math.sin(a) * r, pad: 20 };
    } else tgt = rng.weighted(wts);
    const a = rng.range(0, TAU), r = Math.sqrt(rng.float()) * (tgt.pad || 30) * 0.7;
    this.dropTarget = { x: tgt.x + Math.cos(a) * r, z: tgt.z + Math.sin(a) * r };
    const { s, perp } = g.bus.approach(this.dropTarget.x, this.dropTarget.z);
    const dJump = clamp(perp * 0.92 + 70, 90, 560);
    const along = Math.sqrt(Math.max(0, dJump * dJump - perp * perp));
    this.jumpAt = clamp(s - along / g.bus.len, 0.06, 0.94) + (rng.float() - 0.5) * 0.02;
  }

  // ---- frame update -----------------------------------------------------------------------------------------------------------------------
  update(dt) {
    if (this.alive) this.brain(dt);
    super.update(dt);
    if (this.alive) this.syncAim();
  }

  syncAim() {
    const r = this.aimRay;
    this.eyePos(r.origin);
    CameraRig.forward(this.aimYaw, this.aimPitch, r.dir);
    r.dirFromEye = r.dir;
  }

  brain(dt) {
    const g = this.game, I = this.intent;
    for (const k of Object.keys(I)) if (typeof I[k] === 'boolean') I[k] = false;
    I.moveX = 0; I.moveZ = 0;

    if (this.mode === 'bus') {
      this.state = 'bus';
      this.pos.copy(g.bus.position);
      if (g.bus.progress >= this.jumpAt) this.leaveBus();
      return;
    }
    if (this.mode === 'freefall' || this.mode === 'glide') { this.dropSteer(dt); return; }
    if (this.mode !== 'ground') return;
    if (this.state === 'bus' || this.state === 'drop') { this.state = 'loot'; this.lootPhaseUntil = g.time + 28 + this.rng.range(0, 40); }

    this.switchCd = Math.max(0, this.switchCd - dt);
    this.buildCd = Math.max(0, this.buildCd - dt);
    this.thinkT -= dt;
    if (this.thinkT <= 0) { this.thinkT = 0.18 + this.rng.float() * 0.12; this.think(); }
    this.act(dt);
  }

  leaveBus() {
    const g = this.game, b = g.bus;
    const p = b.position;
    this.jumpFromBus(p.x + this.rng.range(-2, 2), p.y - 4, p.z + this.rng.range(-2, 2), b.yaw, b.dir.x * b.speed, b.dir.z * b.speed);
    this.model.root.visible = true;
    this.state = 'drop';
    this.aimYaw = yawTo(this.pos.x, this.pos.z, this.dropTarget.x, this.dropTarget.z);
  }

  dropSteer(dt) {
    const T = this.dropTarget;
    const dx = T.x - this.pos.x, dz = T.z - this.pos.z;
    const dH = Math.hypot(dx, dz);
    const ground = this.game.terrain.heightAt(T.x, T.z);
    const alt = this.pos.y - ground - 4;
    const want = yawTo(this.pos.x, this.pos.z, T.x, T.z);
    this.aimYaw = dampAngle(this.aimYaw, want, 3.0, dt);
    const need = Math.atan2(Math.max(alt, 1), Math.max(dH, 4));
    const lo = this.mode === 'freefall' ? 0.42 : 0.06, hi = this.mode === 'freefall' ? 1.38 : 1.0;
    this.aimPitch = damp(this.aimPitch, -clamp(need, lo, hi), 4, dt);
    // open the glider on time (the physics also does it automatically)
    if (this.mode === 'freefall' && alt < MATCH.glideOpenAltitude + 25 && this.freefallT > 3) this.intent.glide = true;
  }

  // ---- decision layer (≈5 Hz) --------------------------------------------------------------------------------------------------------------
  think() {
    const g = this.game;
    this.perceive();
    const t = g.time;
    this.elevated = this.onGround && this.pos.y - g.terrain.heightAt(this.pos.x, this.pos.z) > 2.2;
    // enemy memory
    const haveEnemy = this.enemy && this.enemy.alive && (this.enemyVisible || t - this.lastSeen.t < 3.5);
    const storm = g.storm;
    const outside = storm.active && storm.isOutside(this.pos.x, this.pos.z);

    if (outside && !this.enemyVisible) { this.state = 'storm'; return; }
    if (this.enemyVisible && this.hasUsableWeapon()) {
      if (this.state !== 'combat') { this.reactT = Math.max(0.12, 0.28 + (1 - this.skill) * 0.55 + this.D.react); this.strafeT = 0; }
      this.state = 'combat';
      this.wc.cancelUse();
      this.healing = false;
      return;
    }
    if (haveEnemy && this.hasUsableWeapon() && this.state === 'combat') {
      // lost sight: push toward last seen position for a moment
      this.state = 'hunt';
      return;
    }
    if (this.state === 'hunt' && !haveEnemy) this.state = 'roam';

    // heal when hurt and nobody is around
    if (!this.enemyVisible && this.needsHealing()) { this.state = 'heal'; return; }
    if (this.state === 'heal' && !this.needsHealing()) this.state = 'roam';

    if (this.state === 'combat' || this.state === 'hunt' || this.state === 'storm') this.state = 'roam';
    if (this.state === 'loot') {
      if (this.game.time > this.lootPhaseUntil && this.inv.hasWeapon()) this.state = 'roam';
      else if (!this.lootTarget || !this.lootTargetValid()) {
        this.lootTarget = this.chooseLoot();
        this.path = null;
        if (!this.lootTarget) { if (this.inv.hasWeapon() || g.time > this.lootPhaseUntil) this.state = 'roam'; else this.wander(); }
        else this.planPath(this.lootTarget);
      }
    } else if (this.state === 'roam') {
      // opportunistic loot if something valuable is close
      if (!this.lootTarget || !this.lootTargetValid()) {
        const near = this.chooseLoot(28);
        if (near && (!this.inv.hasWeapon() || near.score > 40)) { this.lootTarget = near; this.planPath(near); this.state = 'loot'; this.lootPhaseUntil = g.time + 14; }
      }
    }
    if (!this.inv.hasWeapon() && this.state === 'roam' && g.time < this.lootPhaseUntil + 60) this.state = 'loot';
    if (this.alert && this.state === 'roam' && t - this.alert.t < 8 && !this.enemyVisible) {
      this.roamTarget = { x: this.alert.x + this.rng.range(-8, 8), z: this.alert.z + this.rng.range(-8, 8) };
      this.roamT = 6;
    }
    this.equipBest();
  }

  hasUsableWeapon() {
    for (let i = 1; i < 6; i++) {
      const s = this.inv.slots[i];
      if (s?.kind === 'weapon' && (s.mag > 0 || this.inv.ammo[WEAPONS[s.id].ammo] > 0)) return true;
    }
    return false;
  }

  needsHealing() {
    const tot = this.health + this.shield;
    if (this.health < 60 && (this.inv.countOf('bandage') || this.inv.countOf('medkit') || this.inv.countOf('chug'))) return true;
    if (this.shield < 40 && (this.inv.countOf('minishield') || this.inv.countOf('shield') || this.inv.countOf('chug')) && this.game.time - this.lastDamageTime > 3) return true;
    return false;
  }

  perceive() {
    const g = this.game;
    const t = g.time;
    const myEye = this.eyePos(_v);
    const cur = this.inv.current;
    const sniper = cur?.kind === 'weapon' && cur.id === 'sniper';
    const range = (sniper ? 240 : 115) * this.D.view;
    let best = null, bestScore = 1e9;
    let tests = 0;
    const fx = -Math.sin(this.aimYaw), fz = -Math.cos(this.aimYaw);
    const cands = [];
    for (const a of g.actors) {
      if (a === this || !a.alive || a.mode === 'bus') continue;
      const dx = a.pos.x - this.pos.x, dz = a.pos.z - this.pos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 > range * range) continue;
      const d = Math.sqrt(d2);
      const facing = (dx * fx + dz * fz) / Math.max(d, 0.1);
      if (d > 30 && facing < -0.2 && this.enemy !== a) continue;          // can't see behind at range
      cands.push([d, a]);
    }
    cands.sort((p, q) => p[0] - q[0]);
    let vis = null;
    for (const [d, a] of cands) {
      if (tests++ >= 4) break;
      const ch = a.chestPos(new THREE.Vector3());
      // hidden in storm fog / very far bots are harder to notice
      if (g.physics.lineClear(myEye.x, myEye.y, myEye.z, ch.x, ch.y, ch.z)) { vis = a; break; }
    }
    if (vis) {
      this.enemy = vis; this.enemyVisible = true;
      this.lastSeen.x = vis.pos.x; this.lastSeen.y = vis.pos.y; this.lastSeen.z = vis.pos.z; this.lastSeen.t = t;
    } else {
      this.enemyVisible = false;
      if (this.enemy && !this.enemy.alive) this.enemy = null;
    }
  }

  hear(pos, source) {
    if (this.enemyVisible || source === this) return;
    this.alert = { x: pos.x, z: pos.z, t: this.game.time, src: source };
    // sometimes react immediately to a close shooter
    if (this.state === 'roam' || this.state === 'loot') {
      const d = Math.hypot(pos.x - this.pos.x, pos.z - this.pos.z);
      if (d < 60 && this.rng.chance(0.55 * this.D.aggr) && this.inv.hasWeapon()) { this.roamTarget = { x: pos.x, z: pos.z }; this.roamT = 8; if (this.state === 'loot' && this.lootTarget && this.rng.chance(0.5)) { this.lootTarget = null; this.state = 'roam'; } }
    }
  }

  // ---- looting -----------------------------------------------------------------------------------------------------------------------------------
  lootTargetValid() {
    const t = this.lootTarget;
    if (!t) return false;
    const ty = t.type === 'chest' ? t.c.y : t.it.y;
    if (this.onGround && Math.abs(ty - this.pos.y) > 3.2) return false;        // e.g. we landed on the roof above it
    if (t.type === 'chest') return !t.c.opened;
    return t.it.alive;
  }

  chooseLoot(maxDist = 65) {
    const g = this.game, L = g.loot;
    const px = this.pos.x, py = this.pos.y, pz = this.pos.z;
    let best = null, bs = 0;
    const hasW = this.inv.hasWeapon();
    for (const it of L.items) {
      if (!it.alive || g.time < it.noPickupUntil || this.ignore.get(it) > g.time) continue;
      if (it.floorLevel > 0 && Math.abs(it.y - py) > 1.5) continue;
      const dx = it.x - px, dz = it.z - pz;
      const d = Math.hypot(dx, dz);
      if (d > maxDist || Math.abs(it.y - py) > 4) continue;
      const v = this.valueOf(it.item, hasW);
      if (v <= 0) continue;
      const score = v * 10 / (d + 6);
      if (score > bs) { bs = score; best = { type: 'loot', it, score: v }; }
    }
    if (!hasW || this.inv.weaponCount() < 2) {
      for (const c of L.chests) {
        if (c.opened || this.ignore.get(c) > g.time || Math.abs(c.y - py) > 3.2) continue;
        const d = Math.hypot(c.x - px, c.z - pz);
        if (d > maxDist) continue;
        const score = 95 * 10 / (d + 6);
        if (score > bs) { bs = score; best = { type: 'chest', c, score: 95 }; }
      }
    }
    return best;
  }

  valueOf(item, hasW) {
    const inv = this.inv;
    if (item.kind === 'weapon') {
      if (!hasW) return 100 + item.rarity * 12;
      const ownSame = inv.slots.some((s) => s?.kind === 'weapon' && s.id === item.id && s.rarity >= item.rarity);
      if (ownSame) return 0;
      if (inv.freeSlot() >= 0 && inv.weaponCount() < 3) return 70 + item.rarity * 10;
      // replace a clearly worse weapon
      const worst = Math.min(...inv.slots.filter((s) => s?.kind === 'weapon').map((s) => s.rarity));
      return item.rarity > worst + 1 ? 30 : 0;
    }
    if (item.kind === 'ammo') {
      const need = inv.slots.some((s) => s?.kind === 'weapon' && WEAPONS[s.id].ammo === item.id);
      return need && inv.ammo[item.id] < 90 ? 55 : 8;
    }
    if (item.kind === 'consumable') {
      const C = CONSUMABLES[item.id];
      if (inv.freeSlot() < 0 && inv.findConsumable(item.id) < 0) return 0;
      if (C.kind === 'shield' || C.kind === 'both') return inv.countOf('shield') + inv.countOf('minishield') < 4 ? 50 : 14;
      return inv.countOf('bandage') + inv.countOf('medkit') < 8 ? 42 : 12;
    }
    return 0;
  }

  /** New loot target → forget the old route; followGoal() plans lazily. */
  planPath(target) {
    this.path = null; this.pathIdx = 0; this.noRoute = 0; this.pathRetryAt = 0;
  }

  /** Compute an A* route toward (gx, gz); long trips are planned in ~80 m legs. */
  computePath(gx, gz) {
    const g = this.game, nav = g.nav;
    if (!nav.canQuery()) { this.pathRetryAt = g.time + 0.05; return; }        // another bot planned this frame
    let tx = gx, tz = gz;
    const dx = gx - this.pos.x, dz = gz - this.pos.z, d = Math.hypot(dx, dz);
    if (d > 100) { tx = this.pos.x + (dx / d) * 80; tz = this.pos.z + (dz / d) * 80; }
    const path = nav.findPath(this.pos.x, this.pos.z, tx, tz, { snap: this.state === 'storm' ? 14 : 4 });     // storm goals may fall in the sea: settle for the nearest dry cell
    this.pathGoal = { x: gx, z: gz }; this.pathY = this.pos.y; this.pathIdx = 0;
    if (path) { this.path = path; this.noRoute = 0; this.pathRetryAt = 0; }
    else { this.path = null; this.noRoute++; this.pathRetryAt = g.time + 1.5; }
  }

  /** Walk toward (gx, gz) along an A* route (re-planned when the goal moves, the level changes or a leg ends). Returns the distance left. */
  followGoal(gx, gz, opts = {}) {
    const g = this.game, stop = opts.stop ?? 0.9;
    const stale = !this.path || Math.hypot(this.pathGoal.x - gx, this.pathGoal.z - gz) > 2.5 || Math.abs(this.pos.y - this.pathY) > 2.4;
    if (stale && g.time >= this.pathRetryAt && Math.hypot(gx - this.pos.x, gz - this.pos.z) > stop + 0.5) this.computePath(gx, gz);
    if (this.path) {
      let node = this.path[this.pathIdx];
      while (node && Math.hypot(node.x - this.pos.x, node.z - this.pos.z) < (node.last ? stop : 1.0)) node = this.path[++this.pathIdx];
      if (node) {
        this.moveTo(node.x, node.z, { ...opts, stop: node.last ? stop : 0.3 });
        return Math.hypot(gx - this.pos.x, gz - this.pos.z);
      }
      this.path = null;         // leg finished
    }
    return this.moveTo(gx, gz, { ...opts, stop });      // no route (yet): steer directly, the watchdog will give up if it goes nowhere
  }

  /** No meaningful progress toward the current waypoint for several seconds. */
  noProgress() {
    this.path = null; this.pathRetryAt = 0;
    this.unstick = 1.0; this.unstickDir = this.rng.chance(0.5) ? 1 : -1; this.wantJump = 0.5;
    if (++this.giveUp >= 3) { this.giveUp = 0; this.abandonTarget(); }
  }

  abandonTarget() {
    const t = this.game.time, lt = this.lootTarget;
    if (lt) this.ignore.set(lt.type === 'chest' ? lt.c : lt.it, t + 120);
    this.lootTarget = null; this.path = null; this.roamTarget = null; this.roamT = 0; this.thinkT = 0;
  }

  buildingAt(x, z) {
    for (const b of this.game.world.buildings) if (this.insideRect(x, z, b.rect)) return b;
    return null;
  }
  insideRect(x, z, r) { return x > r.minX && x < r.maxX && z > r.minZ && z < r.maxZ; }

  wander() {
    if (this.roamT > 0 && this.roamTarget) return;
    const a = this.rng.range(0, TAU), r = 20 + this.rng.float() * 40;
    this.roamTarget = { x: this.pos.x + Math.cos(a) * r, z: this.pos.z + Math.sin(a) * r };
    this.roamT = 5;
  }

  pickRoamTarget() {
    const g = this.game, T = g.terrain, rng = this.rng, st = g.storm;
    const zone = st.next || st.current;
    // inside/near the next safe zone
    let x, z;
    const mode = rng.float();
    if (mode < 0.35 * this.D.aggr && g.player.alive && g.player.mode === 'ground') {
      const p = g.player;
      const d = Math.hypot(p.pos.x - this.pos.x, p.pos.z - this.pos.z);
      if (d < 220) { x = p.pos.x + rng.range(-25, 25); z = p.pos.z + rng.range(-25, 25); }
    }
    if (x === undefined) {
      if (mode < 0.65) {
        const town = rng.pick(T.layout.towns);
        x = town.x + rng.range(-25, 25); z = town.z + rng.range(-25, 25);
      } else {
        const a = rng.range(0, TAU), r = Math.sqrt(rng.float()) * Math.max(zone.r * 0.8, 6);
        x = zone.x + Math.cos(a) * r; z = zone.z + Math.sin(a) * r;
      }
    }
    // stay inside the storm circle we're heading for
    const dz = Math.hypot(x - zone.x, z - zone.z);
    if (dz > zone.r * 0.85) { const k = (zone.r * 0.7) / dz; x = zone.x + (x - zone.x) * k; z = zone.z + (z - zone.z) * k; }
    if (T.heightAt(x, z) < 1.0) { x = zone.x; z = zone.z; }
    this.roamTarget = { x, z }; this.roamT = 14 + rng.range(0, 14);
  }

  // ---- weapons ------------------------------------------------------------------------------------------------------------------------------------
  /** Index of the best weapon slot for the given distance (or -1). */
  bestSlotFor(dist) {
    let best = -1, bs = -1e9;
    for (let i = 1; i < 6; i++) {
      const s = this.inv.slots[i];
      if (s?.kind !== 'weapon') continue;
      const W = WEAPONS[s.id];
      const ammo = this.inv.ammo[W.ammo];
      if (s.mag <= 0 && ammo <= 0) continue;
      let sc = s.rarity * 6 + W.dmg * W.pellets * W.rate * 0.02;
      if (W.id === 'pump') sc += dist < 14 ? 55 : dist > 30 ? -60 : 0;
      else if (W.id === 'sniper') sc += dist > 85 ? 60 : dist < 30 ? -70 : -10;
      else if (W.id === 'smg') sc += dist < 25 ? 22 : -5;
      else if (W.id === 'ar') sc += dist > 20 && dist < 120 ? 30 : 8;
      else if (W.id === 'pistol') sc += dist < 20 ? 8 : -10;
      if (s.mag <= 0) sc -= 25;
      if (sc > bs) { bs = sc; best = i; }
    }
    return best;
  }

  equipBest(dist = 40) {
    if (this.switchCd > 0 || this.wc.using || this.wc.reloading) return;
    const i = this.bestSlotFor(dist);
    if (i >= 0 && this.inv.selected !== i) { this.inv.select(i); this.switchCd = 1.2; }
  }

  // ---- per-frame behaviour ------------------------------------------------------------------------------------------------------------------------
  act(dt) {
    const g = this.game, I = this.intent, t = g.time;
    const cur = this.inv.current;
    this.unstick = Math.max(0, this.unstick - dt);

    switch (this.state) {
      case 'combat': this.actCombat(dt); break;
      case 'hunt': this.actHunt(dt); break;
      case 'heal': this.actHeal(dt); break;
      case 'storm': this.actStorm(dt); break;
      case 'loot': this.actLoot(dt); break;
      default: this.actRoam(dt); break;
    }

    // Stuck handling runs after the state has set this frame's intent (brain() clears it beforehand, so checking earlier
    // would always see a bot that "isn't trying to move").
    const trying = Math.hypot(I.moveX, I.moveZ) > 0.1;
    this.stuckCheck -= dt;
    if (this.stuckCheck <= 0) {
      this.stuckCheck = 0.5;
      const moved = Math.hypot(this.pos.x - this.lastPos.x, this.pos.z - this.lastPos.z);
      this.stuckT = trying && moved < 0.3 ? this.stuckT + 0.5 : 0;
      this.lastPos.copy(this.pos);
      if (this.stuckT >= 1.0) { this.stuckT = 0; this.noProgress(); }
    }
    // progress watchdog: bumping around near a waypoint without getting closer (the position check above can't see that);
    // fights strafe in place and snipers hold still, so only count while walking somewhere
    this.wdT -= dt;
    if (this.wdT <= 0) {
      this.wdT = 1.5;
      const live = trying && this.state !== 'combat' && t - this.wpSet < 0.4;
      if (live && Math.hypot(this.wpX - this.wdX, this.wpZ - this.wdZ) < 0.75) {
        const d = Math.hypot(this.wpX - this.pos.x, this.wpZ - this.pos.z);
        this.wdFail = this.wdD - d < 0.8 && d > 1.2 ? this.wdFail + 1 : 0;
        this.wdD = d;
        if (this.wdFail >= 3) { this.wdFail = 0; this.noProgress(); }
      } else { this.wdFail = 0; this.wdD = Math.hypot(this.wpX - this.pos.x, this.wpZ - this.pos.z); }
      this.wdX = this.wpX; this.wdZ = this.wpZ;
    }

    if (this.wantJump > 0) { this.wantJump -= dt; I.jump = true; I.jumpPressed = true; }
    // spare time: reload when nothing is going on
    if (this.state !== 'combat' && cur?.kind === 'weapon') {
      const W = WEAPONS[cur.id];
      if (cur.mag < W.mag * 0.5 && this.inv.ammo[W.ammo] > 0 && !this.wc.reloading) I.reload = true;
    }
  }

  // steer toward a point; sets intent.move* (world space)
  moveTo(x, z, opts = {}) {
    const I = this.intent;
    let dx = x - this.pos.x, dz = z - this.pos.z;
    const d = Math.hypot(dx, dz);
    this.wpX = x; this.wpZ = z; this.wpSet = this.game.time;
    if (d < (opts.stop ?? 0.6)) return d;
    dx /= d; dz /= d;
    let ang = Math.atan2(dz, dx);
    // obstacle probing
    const phys = this.game.physics, T = this.game.terrain;
    const probe = (a, dist) => {
      const px = this.pos.x + Math.cos(a) * dist, pz = this.pos.z + Math.sin(a) * dist;
      if (phys.overlaps(px, this.pos.y + 0.05, pz, this.radius * 0.95, this.height, 0.5)) return 'blocked';
      const h = phys.groundAt(px, pz, this.pos.y + 0.6).y;
      const wl = T.waterLevelAt(px, pz);
      if (wl !== null && wl - h > 0.9 && !opts.swim) return 'water';
      if (this.pos.y - h > 3.2 && !opts.reckless && !this.elevated) return 'drop';
      return 'ok';
    };
    let res = probe(ang, 1.5);
    if (res !== 'ok') {
      // can we hop it?
      if (res === 'blocked' && !phys.overlaps(this.pos.x + Math.cos(ang) * 1.5, this.pos.y + 1.05, this.pos.z + Math.sin(ang) * 1.5, this.radius * 0.95, this.height, 0.5) && this.onGround) {
        this.wantJump = Math.max(this.wantJump, 0.25);
      } else {
        const order = [0.6, -0.6, 1.2, -1.2, 1.9, -1.9];
        if (this.avoidT > 0) order.sort((a, b) => (Math.sign(a) === this.avoidDir ? -1 : 1));
        let found = false;
        for (const off of order) {
          if (probe(ang + off, 1.5) === 'ok') { ang += off; this.avoidDir = Math.sign(off); this.avoidT = 0.8; found = true; break; }
        }
        if (!found) ang += this.avoidDir * 2.2;
      }
    }
    this.avoidT = Math.max(0, this.avoidT - 0.016);
    if (this.unstick > 0) ang += this.unstickDir * 1.6;
    I.moveX = Math.cos(ang) * (opts.speed ?? 1);
    I.moveZ = Math.sin(ang) * (opts.speed ?? 1);
    return d;
  }

  facePoint(x, z, dt, rate = 7) {
    const want = yawTo(this.pos.x, this.pos.z, x, z);
    this.aimYaw = dampAngle(this.aimYaw, want, rate, dt);
  }

  actRoam(dt) {
    const I = this.intent, g = this.game;
    this.roamT -= dt;
    if (!this.roamTarget || this.roamT <= 0 || Math.hypot(this.roamTarget.x - this.pos.x, this.roamTarget.z - this.pos.z) < 5) this.pickRoamTarget();
    const d = this.followGoal(this.roamTarget.x, this.roamTarget.z, { stop: 3 });
    if (this.noRoute >= 2) { this.noRoute = 0; this.roamTarget = null; this.roamT = 0; }     // unreachable: pick another spot
    I.sprint = d > 14;
    // look where we walk
    this.faceMove(dt);
    this.aimPitch = damp(this.aimPitch, -0.05, 6, dt);
    // shield up / heal when hurt and safe
  }

  faceMove(dt) {
    const I = this.intent;
    if (Math.hypot(I.moveX, I.moveZ) > 0.1) {
      const want = Math.atan2(-I.moveX, -I.moveZ);
      this.aimYaw = dampAngle(this.aimYaw, want, 8, dt);
    }
  }

  actLoot(dt) {
    const I = this.intent, g = this.game;
    const tgt = this.lootTarget;
    if (!tgt) { this.actRoam(dt); return; }
    const tx = tgt.type === 'chest' ? tgt.c.x : tgt.it.x, tz = tgt.type === 'chest' ? tgt.c.z : tgt.it.z;
    const d = this.followGoal(tx, tz, { stop: 0.9 });
    if (this.noRoute >= 3) { this.noRoute = 0; this.abandonTarget(); return; }
    I.sprint = d > 10;
    this.faceMove(dt);
    const dd = Math.hypot(tx - this.pos.x, tz - this.pos.z);
    if (dd < 1.6 && Math.abs((tgt.type === 'chest' ? tgt.c.y : tgt.it.y) - this.pos.y) < 2.2) {
      if (tgt.type === 'chest') g.loot.openChest(tgt.c, this);
      else {
        const ok = g.loot.pickup(this, tgt.it);
        if (ok && tgt.it.item.kind === 'weapon') this.onWeaponPickup(tgt.it.item);
        if (!ok) tgt.it.noPickupUntil = g.time + 20;      // can't take it: ignore for a while
      }
      this.lootTarget = null; this.path = null; this.thinkT = 0;
    }
  }

  onWeaponPickup(item) {
    const W = WEAPONS[item.id];
    this.inv.addAmmo(W.ammo, Math.round(W.mag * (1.4 + this.rng.float())));
    // bots get a bit of ammo for every new gun so they aren't helpless
    if (this.inv.current?.kind === 'pickaxe' || this.rng.chance(0.4)) this.equipBest(30);
  }

  actHeal(dt) {
    const I = this.intent;
    this.aimPitch = damp(this.aimPitch, 0, 5, dt);
    if (this.wc.using) { I.fire = true; I.crouch = true; return; }
    // choose an item
    let slot = -1;
    const prefShield = this.shield < 40 && this.health >= 50;
    const order = prefShield ? ['shield', 'minishield', 'chug', 'medkit', 'bandage'] : ['medkit', 'bandage', 'chug', 'minishield', 'shield'];
    for (const id of order) {
      const s = this.inv.findConsumable(id);
      if (s < 0) continue;
      const C = CONSUMABLES[id];
      if ((C.heal && this.health < (C.healCap ?? 100)) || (C.shield && this.shield < (C.shieldCap ?? 100))) { slot = s; break; }
    }
    if (slot < 0) { this.state = 'roam'; return; }
    if (this.inv.selected !== slot) { this.inv.select(slot); return; }
    I.fire = true; I.crouch = true;
  }

  actStorm(dt) {
    const I = this.intent, st = this.game.storm;
    const c = st.current;
    // run for a point 60 % of the way out from the zone centre (the centre itself once we're close), routed around lakes and buildings
    const dx = c.x - this.pos.x, dz = c.z - this.pos.z;
    const d = Math.hypot(dx, dz) || 1;
    const want = Math.min(d, c.r * 0.6);
    this.followGoal(c.x - (dx / d) * want, c.z - (dz / d) * want, { stop: 2, reckless: true });
    I.sprint = true;
    this.faceMove(dt);
    if (this.wc.using) this.wc.cancelUse();
  }

  actHunt(dt) {
    const I = this.intent;
    this.moveTo(this.lastSeen.x, this.lastSeen.z, { stop: 6 });
    I.sprint = false;
    this.facePoint(this.lastSeen.x, this.lastSeen.z, dt, 6);
    this.aimPitch = damp(this.aimPitch, 0, 5, dt);
  }

  actCombat(dt) {
    const g = this.game, I = this.intent, D = this.D;
    const e = this.enemy;
    if (!e || !e.alive) { this.state = 'roam'; return; }
    const chest = e.chestPos(_v);
    const dx = e.pos.x - this.pos.x, dz = e.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    // weapon for the range
    this.equipBest(dist);
    const cur = this.inv.current;
    if (cur?.kind !== 'weapon') { if (this.switchCd <= 0) this.equipBest(dist); }
    const W = cur?.kind === 'weapon' ? WEAPONS[cur.id] : null;
    const pref = !W ? 10 : W.id === 'pump' ? 7 : W.id === 'smg' ? 13 : W.id === 'pistol' ? 15 : W.id === 'sniper' ? 75 : 26;
    // ---- aim with error ----
    const eyeY = this.pos.y + this.eyeHeight;
    const wantYaw = yawTo(this.pos.x, this.pos.z, e.pos.x + (e.vel.x * 0.05), e.pos.z + (e.vel.z * 0.05));
    const wantPitch = Math.atan2(chest.y + 0.12 - eyeY, Math.max(dist, 0.5));
    const ae = this.aimErr;
    ae.t -= dt;
    if (ae.t <= 0) {
      ae.t = 0.28 + this.rng.float() * 0.3;
      const spd = Math.hypot(e.vel.x, e.vel.z);
      const mag = (0.012 + dist * 0.00042) * (1.6 - this.skill) * D.err * (1 + spd * 0.06) * (this.wc.firingRecently ? 1.2 : 1);
      ae.ty = (this.rng.float() - 0.5) * 2 * mag; ae.tp = (this.rng.float() - 0.5) * 1.4 * mag;
    }
    ae.yaw = damp(ae.yaw, ae.ty, 5, dt); ae.pitch = damp(ae.pitch, ae.tp, 5, dt);
    const turn = (5.2 + this.skill * 7) * D.turn;
    this.aimYaw = dampAngle(this.aimYaw, wantYaw + ae.yaw, turn, dt);
    this.aimPitch = damp(this.aimPitch, clamp(wantPitch + ae.pitch, -1.2, 1.2), turn, dt);
    const yawErr = Math.abs(angleDiff(this.aimYaw, wantYaw));

    // ---- movement ----
    this.strafeT -= dt;
    if (this.strafeT <= 0) { this.strafeT = 0.6 + this.rng.float() * 1.5; if (this.rng.chance(0.65)) this.strafe *= -1; if (this.rng.chance(0.12 * (0.4 + this.skill))) this.wantJump = 0.2; }
    const nx = dx / Math.max(dist, 0.01), nz = dz / Math.max(dist, 0.01);
    let fwd = 0;
    if (dist > pref + 9) fwd = 1; else if (dist < pref - 6) fwd = -0.8; else if (W?.id === 'pump' && dist > 6) fwd = 0.6;
    const sx = -nz * this.strafe, sz = nx * this.strafe;
    const wantX = nx * fwd + sx * 0.85, wantZ = nz * fwd + sz * 0.85;
    const wl = Math.hypot(wantX, wantZ) || 1;
    this.moveTo(this.pos.x + wantX / wl * 3, this.pos.z + wantZ / wl * 3, { stop: 0.1, speed: 1 });
    I.sprint = false;
    I.crouch = W?.id === 'sniper' && dist > 60;
    if (W?.id === 'sniper' && dist > 40) { I.moveX = I.moveZ = 0; }
    I.aim = !!W && dist > 16 && this.reactT <= 0.25;

    // ---- shooting ----
    this.reactT -= dt;
    if (!W) return;
    // build cover when being shot at range
    if (this.buildCd <= 0 && g.time - this.lastDamageTime < 1.2 && dist > 7 && (this.inv.mats.wood + this.inv.mats.stone + this.inv.mats.metal) >= 20 && this.rng.chance(0.55)) {
      this.buildCover(e);
      this.buildCd = 6 + this.rng.range(0, 8);
      return;
    }
    if (cur.mag <= 0 && !this.wc.reloading) { if (this.inv.ammo[W.ammo] > 0) I.reload = true; return; }
    if (this.wc.reloading || this.wc.equipping) return;
    const maxYaw = 0.05 + 0.35 / Math.max(dist, 4) + (W.id === 'pump' ? 0.05 : 0);
    const inRange = dist < W.range * 0.6 && (W.id !== 'pump' || dist < 24) && (W.id !== 'sniper' || dist > 20);
    if (this.reactT > 0 || !inRange) { I.fire = false; return; }
    if (yawErr > maxYaw + 0.02) return;
    // burst discipline
    this.burstPause -= dt;
    if (this.burstLeft <= 0 && this.burstPause <= 0) {
      this.burstLeft = W.auto ? Math.round((3 + this.rng.float() * 6) * (W.id === 'smg' ? 1.8 : 1)) : W.id === 'sniper' ? 1 : W.id === 'pump' ? 1 : 1 + Math.round(this.rng.float());
      this.burstPause = 0;
    }
    if (this.burstLeft > 0) {
      if (W.auto) { I.fire = true; const before = cur.mag; if (this.wc.fireCd <= 0 && before > 0) { /* firing this frame */ } }
      else if (this.wc.fireCd <= 0) { I.fire = true; I.firePressed = true; }
      if (this.wc.fireCd <= 0 || W.auto) {
        // approximate shots by counting cooldown restarts
        if (this._lastMag !== undefined && cur.mag < this._lastMag) this.burstLeft -= this._lastMag - cur.mag;
        if (this.burstLeft <= 0) { this.burstPause = (W.auto ? 0.25 + this.rng.float() * 0.6 : 0.2) + (1 - this.skill) * 0.5 + (W.id === 'sniper' ? 1.3 : W.id === 'pump' ? 0.6 : 0) - D.react * 0.3; }
      }
    }
    this._lastMag = cur.mag;
  }

  buildCover(enemy) {
    const g = this.game;
    const mat = this.inv.mats.stone >= 10 ? 'stone' : this.inv.mats.wood >= 10 ? 'wood' : 'metal';
    const savedPitch = this.aimPitch;
    this.aimPitch = -0.1;
    const p = g.build.tryPlace(this, 'wall', mat);
    if (p && this.rng.chance(0.35)) g.build.tryPlace(this, 'floor', mat);
    this.aimPitch = savedPitch;
  }

  // ---- damage hook ------------------------------------------------------------------------------------------------------------------------------
  takeDamage(amount, info = {}) {
    const applied = super.takeDamage(amount, info);
    if (applied > 0 && this.alive && info.attacker && info.attacker !== this) {
      const a = info.attacker;
      // turn on the attacker
      if (!this.enemyVisible && a.alive) {
        this.alert = { x: a.pos.x, z: a.pos.z, t: this.game.time, src: a };
        this.enemy = a;
        this.lastSeen.x = a.pos.x; this.lastSeen.y = a.pos.y; this.lastSeen.z = a.pos.z; this.lastSeen.t = this.game.time;
        if (this.state === 'loot' || this.state === 'roam' || this.state === 'heal') { this.state = 'hunt'; this.wc.cancelUse(); }
      }
      if (this.rng.chance(0.25 + this.skill * 0.3)) this.wantJump = 0.15;
    }
    return applied;
  }
}
