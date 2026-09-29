// The human-controlled actor: maps input to intents, handles look/recoil and hotbar/build keys.
import { Actor } from './actor.js';
import { PLAYER_OUTFIT } from './characterModel.js';
import { WEAPONS } from '../data/items.js';
import { clamp, damp } from '../util/math.js';

export class Player extends Actor {
  constructor(game) {
    super(game, { name: 'You', outfit: PLAYER_OUTFIT, isPlayer: true });
    this.baseYaw = 0;
    this.basePitch = 0;
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.sens = 1;
    this.interact = null;
    this.emoteT = 0;
  }

  spawnAt(x, y, z, yaw = 0) {
    super.spawnAt(x, y, z, yaw);
    this.baseYaw = yaw; this.basePitch = -0.1;
    this.aimYaw = yaw; this.aimPitch = this.basePitch;
  }

  applyRecoil(W) {
    const k = W.recoil * 0.0095;
    this.recoilPitch += k * (0.8 + Math.random() * 0.4);
    this.recoilYaw += (Math.random() - 0.5) * k * 0.8;
    this.game.camera.addShake(W.id === 'sniper' ? 0.55 : W.id === 'pump' ? 0.4 : 0.07);
  }

  update(dt) {
    this.handleInput(dt);
    super.update(dt);
  }

  handleInput(dt) {
    const g = this.game, inp = g.input, I = this.intent;
    const alive = this.alive && g.phase === 'match';
    const active = inp.enabled && alive && !g.uiBlocking;
    // ---- look ---------------------------------------------------------------------------------------------------
    const look = inp.consumeLook();
    if (active || (!alive && inp.enabled)) {
      const cur = this.inv.current;
      const gun = cur?.kind === 'weapon' ? WEAPONS[cur.id] : null;
      const aiming = I.aim && gun;
      const fovRatio = aiming ? Math.tan((gun.fov * Math.PI) / 360) / Math.tan((78 * Math.PI) / 360) : 1;
      const k = 0.0022 * this.sens * (0.35 + 0.65 * fovRatio);
      let lx = look.x, ly = look.y;
      if (inp.key('ArrowLeft')) lx -= 900 * dt; if (inp.key('ArrowRight')) lx += 900 * dt;
      if (inp.key('ArrowUp')) ly -= 700 * dt; if (inp.key('ArrowDown')) ly += 700 * dt;
      this.baseYaw -= lx * k;
      this.basePitch = clamp(this.basePitch - ly * k * (inp.invertY ? -1 : 1), -1.45, 1.25);
    }
    this.recoilPitch = damp(this.recoilPitch, 0, 3.6, dt);
    this.recoilYaw = damp(this.recoilYaw, 0, 3.6, dt);
    this.aimYaw = this.baseYaw + this.recoilYaw;
    this.aimPitch = clamp(this.basePitch + this.recoilPitch, -1.5, 1.35);

    // ---- intents -------------------------------------------------------------------------------------------------------------
    for (const k of Object.keys(I)) if (typeof I[k] === 'boolean') I[k] = false;
    I.moveX = 0; I.moveZ = 0;
    if (!active) { inp.consumeWheel(); return; }      // don't bank wheel ticks while a menu is open

    let fx = 0, fz = 0;
    if (inp.key('KeyW')) fz += 1;
    if (inp.key('KeyS')) fz -= 1;
    if (inp.key('KeyD')) fx += 1;
    if (inp.key('KeyA')) fx -= 1;
    const sy = Math.sin(this.baseYaw), cy = Math.cos(this.baseYaw);
    // forward = (-sin, -cos), right = (cos, -sin)
    I.moveX = fz * -sy + fx * cy;
    I.moveZ = fz * -cy + fx * -sy;
    const len = Math.hypot(I.moveX, I.moveZ);
    if (len > 1) { I.moveX /= len; I.moveZ /= len; }

    I.sprint = inp.key('ShiftLeft') || inp.key('ShiftRight');
    I.crouch = inp.key('ControlLeft') || (inp.key('KeyC') && !this.building);
    I.jump = inp.key('Space');
    I.jumpPressed = inp.pressed('Space');
    I.glide = inp.pressed('Space') || inp.key('Space');
    I.fire = inp.mouse(0);
    I.firePressed = inp.mousePress(0);
    I.aim = inp.mouse(2) && !this.building;
    I.reload = inp.pressed('KeyR') && !this.building;

    // ---- hotbar --------------------------------------------------------------------------------------------------------------------
    if (this.mode === 'ground') {
      if (this.building) {
        const b = g.build;
        if (inp.pressed('KeyZ') || inp.pressed('Digit1')) b.selectPiece('wall');
        if (inp.pressed('KeyX') || inp.pressed('Digit2')) b.selectPiece('floor');
        if (inp.pressed('KeyC') || inp.pressed('Digit3')) b.selectPiece('ramp');
        if (inp.pressed('KeyV') || inp.pressed('Digit4')) b.selectPiece('roof');
        if (inp.pressed('KeyR')) b.cycleMaterial(1);
        const w = inp.consumeWheel();
        if (w) b.cyclePiece(w > 0 ? 1 : -1);
        if (inp.pressed('KeyQ')) this.setBuilding(false);
        // number keys 5/6 to leave build mode into weapons (Fortnite-style quick swap)
        if (inp.pressed('Digit5') || inp.pressed('Digit6')) { this.setBuilding(false); }
      } else {
        for (let i = 0; i < 6; i++) if (inp.pressed(`Digit${i + 1}`)) { if (this.inv.select(i)) g.audio?.uiTick(); }
        const w = inp.consumeWheel();
        if (w) { if (this.inv.cycle(w > 0 ? 1 : -1)) g.audio?.uiTick(); }
        if (inp.pressed('KeyQ')) this.setBuilding(true);
        if (inp.pressed('KeyE')) g.loot.interact(this);
        if (inp.pressed('KeyG')) g.dropSelected(this);
      }
      if (inp.pressed('KeyB') && this.onGround && this.speedH < 1.5 && !this.wc.using && !this.swimming) { this.emoteT = this.emoteT > 0 ? 0 : 60; g.audio?.uiTick(); }
    } else inp.consumeWheel();
  }

  setBuilding(on) {
    if (on === this.building) return;
    if (on && (this.mode !== 'ground' || this.swimming)) return;
    this.building = on;
    this.wc.cancelUse();
    this.game.build.setActive(this, on);
    this.game.audio?.uiTick();
  }
}
