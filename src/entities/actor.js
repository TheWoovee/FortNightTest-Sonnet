// Actor: shared physical + combat state for the human player and bots.
import * as THREE from 'three';
import { PLAYER, MATCH, WORLD } from '../config.js';
import { CharacterModel } from './characterModel.js';
import { Inventory } from '../systems/inventory.js';
import { WeaponController } from './weaponController.js';
import { clamp, clamp01, damp, dampAngle, angleDiff, approach, lerp } from '../util/math.js';

const INF = 1e9;
const _tn = [0, 1, 0];
let _nextId = 1;

export class Actor {
  constructor(game, { name, outfit, isPlayer = false }) {
    this.game = game;
    this.id = _nextId++;
    this.name = name;
    this.isPlayer = isPlayer;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.aimYaw = 0;
    this.aimPitch = 0;
    this.mode = 'bus';                       // bus | freefall | glide | ground | dead
    this.onGround = false;
    this.crouching = false;
    this.sprinting = false;
    this.swimming = false;
    this.height = PLAYER.height;
    this.radius = PLAYER.radius;
    this.health = PLAYER.maxHealth;
    this.shield = 0;
    this.alive = true;
    this.inv = new Inventory();
    this.intent = {
      moveX: 0, moveZ: 0, sprint: false, jump: false, jumpPressed: false, crouch: false,
      fire: false, firePressed: false, aim: false, reload: false, glide: false,
    };
    this.aimRay = { origin: new THREE.Vector3(), dir: new THREE.Vector3(0, 0, -1), point: new THREE.Vector3() };
    this.model = new CharacterModel(outfit);
    this.model.root.visible = false;
    this.wc = new WeaponController(this);
    this.stats = { kills: 0, damageDealt: 0, shots: 0, hits: 0, placement: 0, survived: 0, heals: 0 };
    this.speedH = 0;
    this.landImpact = 0;
    this.hitFlinch = 0;
    this.deadT = 0;
    this.deadDir = 1;
    this.coyote = 0;
    this.jumpBuf = 0;
    this.airTime = 0;
    this.freefallT = 0;
    this.lastDamageTime = -99;
    this.lastDamager = null;
    this.stormTick = 0;
    this.lastMoveYaw = 0;
    this.building = false;
    this.buildPiece = 'wall';
    this.faceUntil = 0;
    this.kills = 0;
    this.groundCollider = null;
    this.footPhase = 0;
    this.footstepDist = 0;
    this.submerged = 0;
    this.invulnerable = false;
    this.emoteT = 0;
    this._vv = new THREE.Vector3();
  }

  // ---- convenience ----------------------------------------------------------------------------------------
  get eyeHeight() { return this.crouching ? 1.18 : PLAYER.eye; }
  eyePos(out = this._vv) { return out.set(this.pos.x, this.pos.y + this.eyeHeight, this.pos.z); }
  chestPos(out = this._vv) { return out.set(this.pos.x, this.pos.y + this.height * 0.62, this.pos.z); }
  get forward() { return this._fwd || (this._fwd = new THREE.Vector3()); }
  get isArmed() { const c = this.inv.current; return c && c.kind === 'weapon'; }
  get totalHp() { return this.health + this.shield; }

  spawnAt(x, y, z, yaw = 0) {
    this.pos.set(x, y, z);
    this.vel.set(0, 0, 0);
    this.yaw = this.aimYaw = yaw;
    this.model.root.position.copy(this.pos);
    this.model.root.rotation.y = yaw;
  }

  // ---- state transitions ---------------------------------------------------------------------------------------
  jumpFromBus(x, y, z, yaw, vx, vz) {
    this.pos.set(x, y, z);
    this.vel.set(vx * 0.4, -6, vz * 0.4);
    this.mode = 'freefall';
    this.freefallT = 0;
    this.onGround = false;
    this.aimYaw = this.yaw = yaw;
    this.model.root.visible = true;
  }

  // ---- update ----------------------------------------------------------------------------------------------------------
  update(dt) {
    if (!this.alive) { this._updateDead(dt); return; }
    const g = this.game;
    this.wc.update(dt);
    this.hitFlinch = Math.max(0, this.hitFlinch - dt * 4);
    this.landImpact = Math.max(0, this.landImpact - dt * 3.2);
    const px = this.pos.x, pz = this.pos.z;
    switch (this.mode) {
      case 'freefall': this._freefall(dt); break;
      case 'glide': this._glide(dt); break;
      case 'ground': this._ground(dt); break;
      default: break;
    }
    if (this.mode === 'ground' || this.mode === 'glide' || this.mode === 'freefall') {
      const inst = Math.hypot(this.pos.x - px, this.pos.z - pz) / Math.max(dt, 1e-4);
      this.speedH = damp(this.speedH, this.mode === 'ground' ? inst : 0, 14, dt);
    }
    this._facing(dt);
    this._syncModel(dt);
  }

  _ground(dt) {
    const P = PLAYER, I = this.intent, phys = g_phys(this), terrain = this.game.terrain;
    const wc = this.wc;
    // ---- crouch ----
    const wantCrouch = I.crouch && !this.swimming;
    if (wantCrouch !== this.crouching) {
      if (!wantCrouch) {
        // only stand if there's headroom
        const c = phys.ceilingAt(this.pos.x, this.pos.z, this.pos.y + P.crouchHeight);
        if (c > this.pos.y + P.height) this.crouching = false;
      } else this.crouching = true;
    }
    this.height = damp(this.height, this.crouching ? P.crouchHeight : P.height, 16, dt);

    if (this.emoteT > 0 && (Math.hypot(I.moveX, I.moveZ) > 0.1 || I.jump || I.fire || I.aim || this.swimming || !this.onGround)) this.emoteT = 0;
    // ---- desired velocity ----
    let mx = I.moveX, mz = I.moveZ;
    const rawLen = Math.hypot(mx, mz);
    const inLen = Math.min(1, rawLen);
    if (rawLen > 1e-3) { mx /= rawLen; mz /= rawLen; }
    const fwdDot = inLen > 0 ? -(mx * Math.sin(this.aimYaw) + mz * Math.cos(this.aimYaw)) : 0;
    const aiming = I.aim && this.isArmed && !wc.reloading;
    const canSprint = I.sprint && inLen > 0 && fwdDot > -0.25 && !this.crouching && !aiming && !wc.firingRecently && !wc.using && !this.building;
    this.sprinting = canSprint;
    let speed = this.crouching ? P.crouchSpeed : canSprint ? P.sprintSpeed : P.walkSpeed;
    if (aiming) speed *= P.adsSpeedMul;
    if (wc.using) speed *= 0.55;
    if (this.swimming) speed *= 0.55;
    if (fwdDot < -0.25) speed *= 0.8;         // backpedal slower
    // steep bare ground: the climb slows from ~26° and all but stops on cliff faces (≈57°)
    if (this.onGround && !this.swimming && !this.groundCollider && inLen > 0) {
      const n = terrain.normalAt(this.pos.x, this.pos.z, _tn);
      const hl = Math.hypot(n[0], n[2]);
      if (n[1] < 0.9 && hl > 1e-4) {
        const uphill = -(mx * n[0] + mz * n[2]) / hl;
        if (uphill > 0) speed *= 1 - clamp01((Math.acos(n[1]) - 0.45) / 0.55) * uphill * 0.88;
      }
    }
    const tx = mx * speed * inLen, tz = mz * speed * inLen;
    const accel = (this.onGround || this.swimming ? P.groundAccel : P.airAccel) * (inLen > 0 ? 1 : 1.25);
    // approach as a vector so diagonal accel is isotropic
    let dvx = tx - this.vel.x, dvz = tz - this.vel.z;
    const dl = Math.hypot(dvx, dvz), step = accel * dt;
    if (dl > step) { dvx = (dvx / dl) * step; dvz = (dvz / dl) * step; }
    this.vel.x += dvx; this.vel.z += dvz;

    // ---- jump ----
    if (I.jumpPressed) this.jumpBuf = 0.12;
    this.jumpBuf = Math.max(0, this.jumpBuf - dt);
    if (this.onGround) this.coyote = 0.1; else this.coyote = Math.max(0, this.coyote - dt);
    if (this.jumpBuf > 0 && this.coyote > 0 && !this.swimming && !this.crouching) {
      this.vel.y = P.jumpSpeed;
      this.onGround = false;
      this.coyote = 0; this.jumpBuf = 0;
      this.game.audio?.jump(this);
      this.stepUpTaken = false;
    }

    // ---- horizontal move with collision ----
    const dx = this.vel.x * dt, dz = this.vel.z * dt;
    const dist = Math.hypot(dx, dz);
    const n = Math.max(1, Math.ceil(dist / 0.22));
    for (let i = 0; i < n; i++) {
      this.pos.x += dx / n; this.pos.z += dz / n;
      phys.depenetrate(this.pos, this.radius, this.height, P.stepUp);
    }
    const lim = WORLD.half - 6;
    this.pos.x = clamp(this.pos.x, -lim, lim); this.pos.z = clamp(this.pos.z, -lim, lim);

    // ---- vertical ----
    const gr = phys.groundAt(this.pos.x, this.pos.z, this.pos.y + P.stepUp);
    let gy = gr.y;
    this.groundCollider = gr.collider;
    const wl = terrain.waterLevelAt(this.pos.x, this.pos.z);
    const depth = wl !== null ? wl - gy : 0;
    const wasSwim = this.swimming;
    this.swimming = wl !== null && depth > 1.15 && (this.onGround || this.swimming || this.pos.y < wl);
    if (this.swimming) {
      const target = wl - 1.05;
      this.pos.y = damp(this.pos.y, target, 9, dt);
      this.vel.y = 0;
      this.onGround = true;
      if (!wasSwim) { this.game.fx?.splash(this.pos.x, wl, this.pos.z, 1.4); this.game.audio?.splash(this); }
    } else {
      if (this.onGround) {
        if (gy >= this.pos.y - (P.stepUp + 0.05)) { this.pos.y = gy; this.vel.y = 0; }
        else this.onGround = false;
      }
      if (!this.onGround) {
        this.vel.y = Math.max(this.vel.y - P.gravity * dt, -P.maxFallSpeed);
        let ny = this.pos.y + this.vel.y * dt;
        if (this.vel.y > 0) {
          const c = phys.ceilingAt(this.pos.x, this.pos.z, this.pos.y + this.height);
          if (c < INF && ny + this.height > c) { ny = c - this.height; this.vel.y = 0; }
        }
        if (ny <= gy && this.vel.y <= 0) {
          const impact = -this.vel.y;
          ny = gy; this.vel.y = 0; this.onGround = true;
          this._landed(impact);
        }
        this.pos.y = ny;
        this.airTime += dt;
      } else this.airTime = 0;
      if (wasSwim && !this.swimming) this.onGround = true;
    }
    // footsteps
    if (this.onGround && !this.swimming && this.speedH > 1.2) {
      this.footstepDist += this.speedH * dt;
      const stride = canSprint ? 2.6 : this.crouching ? 2.4 : 2.0;
      if (this.footstepDist > stride) { this.footstepDist = 0; this.game.audio?.footstep(this); }
    }
  }

  _landed(impact) {
    this.landImpact = clamp01((impact - 5) / 16);
    if (impact > 9) this.game.audio?.land(this, impact);
    if (impact > 8) this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, clamp01(impact / 20));
    if (impact > MATCH.fallDamageSpeed) {
      const dmg = Math.round((impact - MATCH.fallDamageSpeed) * 5);
      this.takeDamage(dmg, { cause: 'fall', attacker: null });
    }
  }

  /** Integrate an airborne move in short hops so thin walls can't be skipped; the glider bounces off buildings and trees and stays over the map. */
  _airMove(dt, radius, height) {
    const phys = g_phys(this);
    const n = clamp(Math.ceil(this.vel.length() * dt / 0.3), 1, 8);
    const h = dt / n, lim = WORLD.half - 6;
    for (let i = 0; i < n; i++) {
      this.pos.addScaledVector(this.vel, h);
      phys.depenetrate(this.pos, radius, height, 0.3);
    }
    this.pos.x = clamp(this.pos.x, -lim, lim); this.pos.z = clamp(this.pos.z, -lim, lim);
  }

  _freefall(dt) {
    const I = this.intent, phys = g_phys(this), terrain = this.game.terrain;
    this.freefallT += dt;
    // descent angle from the camera pitch: looking down = steeper, faster
    const pitch = clamp(-this.aimPitch, 0.42, 1.38);
    const sp = 54 + 28 * Math.sin(pitch);
    const hs = sp * Math.cos(pitch) * 0.95, vs = -sp * Math.sin(pitch);
    const fx = -Math.sin(this.aimYaw), fz = -Math.cos(this.aimYaw);
    const k = 1 - Math.exp(-1.6 * dt);
    this.vel.x += (fx * hs - this.vel.x) * k;
    this.vel.z += (fz * hs - this.vel.z) * k;
    this.vel.y += (vs - this.vel.y) * (1 - Math.exp(-2.2 * dt));
    this._airMove(dt, 0.5, 1.4);
    const gy = Math.max(phys.groundAt(this.pos.x, this.pos.z, this.pos.y + 2).y, 0);
    const alt = this.pos.y - gy;
    if ((I.glide && this.freefallT > 0.8) || alt < MATCH.glideOpenAltitude) {
      this.mode = 'glide';
      this.game.audio?.gliderOpen(this);
      this.game.onGlide?.(this);
    }
  }

  _glide(dt) {
    const phys = g_phys(this);
    const pitch = clamp(-this.aimPitch, 0.05, 1.0);
    const s = Math.sin(pitch);
    const hs = lerp(21, 12, s), vs = -lerp(7.2, 19, s);
    const fx = -Math.sin(this.aimYaw), fz = -Math.cos(this.aimYaw);
    const k = 1 - Math.exp(-2.2 * dt);
    this.vel.x += (fx * hs - this.vel.x) * k;
    this.vel.z += (fz * hs - this.vel.z) * k;
    this.vel.y += (vs - this.vel.y) * k;
    this._airMove(dt, this.radius, PLAYER.height);
    const gr = phys.groundAt(this.pos.x, this.pos.z, this.pos.y + 1.2);
    const gy = gr.y;
    const wl = this.game.terrain.waterLevelAt(this.pos.x, this.pos.z);
    const floor = wl !== null ? Math.max(gy, wl - 1.0) : gy;
    if (this.pos.y <= floor + 0.05) {
      this.pos.y = floor;
      this.mode = 'ground';
      this.onGround = true;
      this.vel.set(this.vel.x * 0.3, 0, this.vel.z * 0.3);
      this.landImpact = 0.4;
      this.game.audio?.land(this, 6);
      this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 0.8);
      this.game.onLanded?.(this);
    }
  }

  // ---- facing -----------------------------------------------------------------------------------------------------------
  _facing(dt) {
    const g = this.game;
    if (this.mode === 'freefall' || this.mode === 'glide') {
      this.yaw = dampAngle(this.yaw, this.aimYaw, 6, dt);
      return;
    }
    const wc = this.wc;
    const faceAim = (this.intent.aim && this.isArmed) || g.time < this.faceUntil || this.building || wc.swinging || wc.firingRecently || wc.reloading;
    if (faceAim) {
      this.yaw = dampAngle(this.yaw, this.aimYaw, 16, dt);
    } else if (this.speedH > 0.6) {
      const my = Math.atan2(-this.vel.x, -this.vel.z);
      this.yaw = dampAngle(this.yaw, my, 12, dt);
    } else {
      // idle: turn feet once the camera has swung far enough away
      const d = angleDiff(this.yaw, this.aimYaw);
      if (Math.abs(d) > 1.7) this.yaw = dampAngle(this.yaw, this.aimYaw, 6, dt);
    }
  }

  // ---- model ----------------------------------------------------------------------------------------------------------------
  _syncModel(dt) {
    const m = this.model;
    m.root.position.copy(this.pos);
    m.root.rotation.y = this.yaw;
    const wc = this.wc;
    const moveDir = Math.atan2(-this.vel.x, -this.vel.z);
    const rel = this.speedH > 0.4 ? angleDiff(this.yaw, moveDir) : 0;
    const twist = clamp(angleDiff(this.yaw, this.aimYaw), -1.9, 1.9);
    const S = this._anim || (this._anim = {});
    S.speed = this.speedH;
    S.moveAngle = rel;
    S.onGround = this.onGround;
    S.crouch = this.crouching;
    S.sprint = this.sprinting;
    S.swim = this.swimming;
    S.mode = this.mode;
    S.aimPitch = this.aimPitch;
    S.aimYawRel = twist;
    S.ads = this.intent.aim && this.isArmed && !wc.reloading ? 1 : 0;
    S.fireKick = wc.kick;
    S.reloadT = wc.reloading ? wc.reloadT / wc.reloadDur : -1;
    S.swingT = wc.swinging ? wc.swingT / wc.swingDur : -1;
    S.useT = wc.using ? wc.useT / wc.useDur : -1;
    S.building = this.building;
    S.emote = this.emoteT > 0;
    S.landImpact = this.landImpact;
    S.hitFlinch = this.hitFlinch;
    S.deadT = this.deadT;
    S.deadDir = this.deadDir;
    m.update(dt, S);
  }

  // ---- damage ---------------------------------------------------------------------------------------------------------------------
  /** Returns the total damage actually applied. info: {attacker, weapon, headshot, cause, point} */
  takeDamage(amount, info = {}) {
    if (!this.alive || this.invulnerable || amount <= 0) return 0;
    const g = this.game;
    if (g.phase !== 'match') return 0;
    let dmg = amount;
    const sd = Math.min(this.shield, dmg);
    this.shield -= sd; dmg -= sd;
    const hd = Math.min(this.health, dmg);
    this.health -= hd;
    this.hitFlinch = 1;
    this.model.hitFlash(0.8);
    this.lastDamageTime = g.time;
    if (info.attacker && info.attacker !== this) this.lastDamager = info.attacker;
    if (this.wc.using && info.cause !== 'storm') this.wc.cancelUse?.();
    g.onDamaged?.(this, sd + hd, sd, hd, info);
    if (this.health <= 0.0001) { this.health = 0; g.eliminate(this, info); }
    return sd + hd;
  }

  heal(hp, shield) {
    if (hp > 0) this.health = Math.min(PLAYER.maxHealth, this.health + hp);
    if (shield > 0) this.shield = Math.min(PLAYER.maxShield, this.shield + shield);
  }

  /** Hit volumes for bullets: head sphere + body cylinder (world space). */
  hitVolumes() {
    const h = this.height;
    let head, body;
    if (this.mode === 'freefall') {
      head = { x: this.pos.x, y: this.pos.y + 1.2, z: this.pos.z, r: 0.28 };
      body = { x: this.pos.x, z: this.pos.z, r: 0.5, y0: this.pos.y + 0.2, y1: this.pos.y + 1.3 };
    } else {
      head = { x: this.pos.x, y: this.pos.y + h - 0.2, z: this.pos.z, r: 0.25 };
      body = { x: this.pos.x, z: this.pos.z, r: 0.42, y0: this.pos.y, y1: this.pos.y + h - 0.32 };
    }
    return { head, body };
  }

  _updateDead(dt) {
    this.deadT += dt;
    const m = this.model;
    const S = this._anim || (this._anim = {});
    S.mode = 'dead'; S.deadT = this.deadT; S.deadDir = this.deadDir; S.speed = 0; S.moveAngle = 0; S.onGround = true;
    S.crouch = false; S.sprint = false; S.swim = false; S.aimPitch = 0; S.aimYawRel = 0; S.ads = 0; S.fireKick = 0;
    S.reloadT = -1; S.swingT = -1; S.useT = -1; S.building = false; S.landImpact = 0; S.hitFlinch = 0;
    m.update(dt, S);
    if (this.deadT > 0.8) {
      const f = clamp01(1 - (this.deadT - 0.8) / 0.6);
      m.setFade(f);
      if (f <= 0) m.root.visible = false;
    }
  }
}

function g_phys(a) { return a.game.physics; }
