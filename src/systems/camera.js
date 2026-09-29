// Camera rig: over-the-shoulder third-person with ADS zoom, sprint FOV kick, wall/terrain collision,
// scope mode for the sniper, and cinematic modes (bus, skydive, spectate, menu orbit).
import * as THREE from 'three';
import { clamp, damp, lerp, dampAngle, clamp01 } from '../util/math.js';
import { WEAPONS } from '../data/items.js';
import { RayHit } from '../physics/physics.js';

const _fwd = new THREE.Vector3(), _right = new THREE.Vector3(), _piv = new THREE.Vector3(), _want = new THREE.Vector3(), _tmp = new THREE.Vector3();

export class CameraRig {
  constructor(game) {
    this.game = game;
    this.camera = game.gfx.camera;
    this.mode = 'menu';
    this.pivotY = 0;
    this.boom = 3.3;
    this.fov = 78;
    this.shake = 0;
    this.shakeT = 0;
    this.scoped = false;
    this.scopeT = 0;
    this.orbit = 0;
    this.target = null;
    this.spectYaw = 0; this.spectPitch = -0.25;
    this.busPos = new THREE.Vector3();
    this.smoothPos = new THREE.Vector3();
    this.initialised = false;
    this.pos = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0;
  }

  addShake(a) { this.shake = Math.min(1.2, this.shake + a); }

  /** Yaw/pitch → forward vector (three.js convention: yaw 0 looks -Z). */
  static forward(yaw, pitch, out) {
    const cp = Math.cos(pitch);
    return out.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
  }

  update(dt) {
    const g = this.game;
    const cam = this.camera;
    this.shake = Math.max(0, this.shake - dt * 2.4);
    this.shakeT += dt;
    switch (this.mode) {
      case 'menu': this._menu(dt); break;
      case 'bus': this._bus(dt); break;
      case 'air': this._air(dt); break;
      case 'spectate': this._spectate(dt); break;
      default: this._follow(dt); break;
    }
    // shake (positional + roll)
    if (this.shake > 0.001) {
      const s = this.shake * this.shake;
      const t = this.shakeT * 38;
      cam.position.x += Math.sin(t * 1.3) * 0.05 * s;
      cam.position.y += Math.sin(t * 1.7 + 1) * 0.05 * s;
      cam.rotation.z = Math.sin(t) * 0.012 * s;
    } else cam.rotation.z = 0;
    if (Math.abs(cam.fov - this.fov) > 0.01) { cam.fov = this.fov; cam.updateProjectionMatrix(); }
    cam.updateMatrixWorld(true);
    this.pos.copy(cam.position);
  }

  _setLook(pos, yaw, pitch) {
    this.camera.position.copy(pos);
    this.camera.rotation.set(pitch, yaw, 0);
    this.yaw = yaw; this.pitch = pitch;
  }

  // ---- main third-person follow --------------------------------------------------------------------------------------------
  _follow(dt) {
    const g = this.game, p = g.player;
    const phys = g.physics;
    const wc = p.wc;
    const cur = p.inv.current;
    const gun = cur?.kind === 'weapon' ? WEAPONS[cur.id] : null;
    const aiming = p.intent.aim && gun && !wc.reloading && p.mode === 'ground';
    const sniperScope = aiming && gun.id === 'sniper';
    this.scoped = sniperScope;
    this.scopeT = damp(this.scopeT, sniperScope ? 1 : 0, 18, dt);

    // target fov
    let tfov = 78;
    if (p.sprinting) tfov = 84;
    if (p.building) tfov = 82;
    if (aiming) tfov = gun.fov;
    if (p.mode === 'ground' && p.swimming) tfov = 80;
    this.fov = damp(this.fov, tfov, aiming ? 16 : 9, dt);

    // pivot (shoulder height), Y smoothed to hide stair/ramp stepping
    const eyeY = p.pos.y + (p.crouching ? 1.25 : 1.6) - (p.swimming ? 0.6 : 0);
    if (!this.initialised) { this.pivotY = eyeY; this.initialised = true; }
    this.pivotY = damp(this.pivotY, eyeY, p.onGround ? 22 : 30, dt);
    if (Math.abs(this.pivotY - eyeY) > 1.2) this.pivotY = eyeY;
    _piv.set(p.pos.x, this.pivotY, p.pos.z);

    const yaw = p.aimYaw, pitch = p.aimPitch;
    CameraRig.forward(yaw, pitch, _fwd);
    _right.set(Math.cos(yaw), 0, -Math.sin(yaw));

    // boom parameters
    let back = 3.25, side = 0.78, up = 0.22;
    if (p.building) { back = 3.9; side = 0.55; up = 0.5; }
    if (p.sprinting) { back = 3.6; side = 0.7; up = 0.22; }
    if (aiming) { back = 1.55; side = 0.62; up = 0.1; }
    if (p.crouching) back -= 0.2;
    if (sniperScope) { back = 0; side = 0; up = 0; }
    this.boomTarget = back;
    // camera flips shoulder when a wall is close on the right
    const sideNow = side;
    // desired position
    _want.copy(_piv).addScaledVector(_fwd, -back).addScaledVector(_right, sideNow);
    _want.y += up;
    // collision: cast from pivot toward the wanted point
    let dist = _tmp.subVectors(_want, _piv).length();
    if (dist > 0.05 && !sniperScope) {
      _tmp.divideScalar(dist);
      const hit = phys.raycast(_piv.x, _piv.y, _piv.z, _tmp.x, _tmp.y, _tmp.z, dist + 0.3, { bullets: false }, (this._rh ||= new RayHit()));
      if (hit.hit) dist = Math.max(0.35, hit.t - 0.28);
    }
    // smooth: retract instantly, extend gently
    if (dist < this.boom || !this._boomSet) this.boom = dist;
    else this.boom = damp(this.boom, dist, 7, dt);
    this._boomSet = true;
    const full = Math.max(1e-3, Math.hypot(_want.x - _piv.x, _want.y - _piv.y, _want.z - _piv.z));
    const s = clamp(this.boom / full, 0, 1);
    _want.lerpVectors(_piv, _want, s);
    // never dip under the terrain
    const gh = g.terrain.heightAt(_want.x, _want.z);
    if (_want.y < gh + 0.25) _want.y = gh + 0.25;
    if (sniperScope) _want.copy(_piv).addScaledVector(_fwd, 0.35);
    this._setLook(_want, yaw, pitch);
    // hide own model when scoped
    p.model.root.visible = !(this.scopeT > 0.85) && p.alive && p.mode !== 'bus';
  }

  // ---- menu orbit ------------------------------------------------------------------------------------------------------------------
  _menu(dt) {
    const g = this.game;
    this.orbit += dt * 0.055;
    const tw = g.terrain.layout.towns[0];
    const cx = tw.x, cz = tw.z;
    const r = 210 + Math.sin(this.orbit * 0.7) * 30;
    const px = cx + Math.cos(this.orbit) * r, pz = cz + Math.sin(this.orbit) * r;
    const py = g.terrain.heightAt(px, pz) + 55 + Math.sin(this.orbit * 1.3) * 14;
    _tmp.set(px, Math.max(py, 60), pz);
    const dx = cx - px, dz = cz - pz, dy = (g.terrain.heightAt(cx, cz) + 14) - _tmp.y;
    const yaw = Math.atan2(-dx, -dz), pitch = Math.atan2(dy, Math.hypot(dx, dz));
    this._setLook(_tmp, yaw, pitch);
    this.fov = 62;
    this.game.gfx.updateSun(_fwd.set(cx, 0, cz));
  }

  // ---- bus ------------------------------------------------------------------------------------------------------------------------------
  _bus(dt) {
    const bus = this.game.bus;
    const bp = bus.position;
    const yaw = bus.yaw;
    // trail the bus from behind and slightly to the side so the island is visible
    const back = 26, height = 9;
    _want.set(bp.x + Math.sin(yaw) * back + Math.cos(yaw) * 9, bp.y + height, bp.z + Math.cos(yaw) * back - Math.sin(yaw) * 9);
    _fwd.subVectors(bp, _want);
    const look = Math.atan2(-_fwd.x, -_fwd.z);
    const pit = Math.atan2(_fwd.y - 1.5, Math.hypot(_fwd.x, _fwd.z));
    this._setLook(_want, look, pit);
    this.fov = damp(this.fov, 70, 4, dt);
    this.game.player.model.root.visible = false;
    this.game.gfx.updateSun(bp);
  }

  // ---- skydive / glide --------------------------------------------------------------------------------------------------------------
  _air(dt) {
    const p = this.game.player;
    const yaw = p.aimYaw, pitch = p.aimPitch;
    CameraRig.forward(yaw, pitch, _fwd);
    _right.set(Math.cos(yaw), 0, -Math.sin(yaw));
    const gliding = p.mode === 'glide';
    const back = gliding ? 6.2 : 5.8, up = gliding ? 1.6 : 1.0;
    _piv.set(p.pos.x, p.pos.y + (gliding ? 1.4 : 0.9), p.pos.z);
    _want.copy(_piv).addScaledVector(_fwd, -back).addScaledVector(_right, 0.4);
    _want.y += up;
    const gh = this.game.terrain.heightAt(_want.x, _want.z);
    if (_want.y < gh + 0.5) _want.y = gh + 0.5;
    this._setLook(_want, yaw, pitch);
    this.fov = damp(this.fov, gliding ? 82 : 92 + clamp(-pitch, 0, 1.2) * 6, 3, dt);
    p.model.root.visible = true;
  }

  // ---- spectate (after elimination) / victory orbit -----------------------------------------------------------------------------------
  _spectate(dt) {
    const g = this.game;
    let t = this.target;
    if (!t || (!t.alive && t !== g.player)) t = this.target = g.pickSpectateTarget?.() || g.player;
    const look = g.input.consumeLook();
    this.spectYaw -= look.x * 0.0022; this.spectPitch = clamp(this.spectPitch - look.y * 0.0022, -1.3, 0.9);
    if (!g.input.enabled) this.spectYaw += dt * 0.3;
    CameraRig.forward(this.spectYaw, this.spectPitch, _fwd);
    _piv.set(t.pos.x, t.pos.y + 1.4, t.pos.z);
    _want.copy(_piv).addScaledVector(_fwd, -5.2);
    const hit = g.physics.raycast(_piv.x, _piv.y, _piv.z, -_fwd.x, -_fwd.y, -_fwd.z, 5.4, { bullets: false });
    if (hit.hit) _want.copy(_piv).addScaledVector(_fwd, -Math.max(0.5, hit.t - 0.3));
    const gh = g.terrain.heightAt(_want.x, _want.z);
    if (_want.y < gh + 0.3) _want.y = gh + 0.3;
    this.pivotY = _piv.y;
    this._setLook(_want, this.spectYaw, this.spectPitch);
    this.fov = damp(this.fov, 74, 6, dt);
    g.gfx.updateSun(_piv);
  }

  /** Aim ray for shooting: from the camera, shifted forward to the player's depth so nothing behind them blocks shots. */
  computeAimRay(actor) {
    const cam = this.camera;
    const ray = actor.aimRay;
    CameraRig.forward(this.yaw, this.pitch, ray.dir);
    const eye = actor.eyePos(_tmp);
    const along = clamp((eye.x - cam.position.x) * ray.dir.x + (eye.y - cam.position.y) * ray.dir.y + (eye.z - cam.position.z) * ray.dir.z, 0, 8);
    ray.origin.copy(cam.position).addScaledVector(ray.dir, along);
    return ray;
  }
}
