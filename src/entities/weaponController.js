// Per-actor weapon state machine: firing, bloom/spread, reloading, pickaxe swings and consumable use.
import { WEAPONS, PICKAXE, CONSUMABLES, weaponStats } from '../data/items.js';
import { PLAYER } from '../config.js';
import { makeItemMesh } from './itemModels.js';
import { clamp } from '../util/math.js';

export class WeaponController {
  constructor(actor) {
    this.a = actor;
    this.fireCd = 0;
    this.bloom = 0;
    this.kick = 0;
    this.reloading = false; this.reloadT = 0; this.reloadDur = 1;
    this.swinging = false; this.swingT = 0; this.swingDur = 1 / PICKAXE.rate; this.swingHit = false;
    this.using = false; this.useT = 0; this.useDur = 1; this.useSlot = -1;
    this.lastFire = -99;
    this.heldKey = '';
    this.stats = null;
    this.autoReloadAt = -1;
    this.equipT = 0;
    this.needRelease = false;      // ignore a held fire button until it is released (e.g. after the last bandage is used)
  }

  get firingRecently() { return this.a.game.time - this.lastFire < 0.6; }
  get equipping() { return this.equipT > 0; }

  // ---- equipment ------------------------------------------------------------------------------------------------
  _keyOf(it) { return it ? `${it.kind}:${it.id}:${it.rarity ?? 0}` : 'none'; }

  _syncHeld() {
    const a = this.a;
    const cur = a.inv.current;
    const key = a.building ? 'build' : this._keyOf(cur);
    if (key === this.heldKey) return;
    this.heldKey = key;
    // switching weapons cancels in-flight actions
    this.reloading = false; this.using = false; this.swinging = false; this.autoReloadAt = -1;
    this.equipT = 0.22;
    if (a.building || !cur) { a.model.setHeld(null); this.stats = null; return; }
    let hold = 'none';
    if (cur.kind === 'weapon') { hold = WEAPONS[cur.id].hold; this.stats = weaponStats(cur); }
    else { this.stats = null; hold = cur.kind === 'pickaxe' ? 'melee' : 'consumable'; }
    const group = makeItemMesh(cur);
    a.model.setHeld({ group, data: group.userData, hold });
    if (a.isPlayer) a.game.audio?.equip(a, cur);
  }

  cancelReload() { this.reloading = false; }
  cancelUse() { if (this.using) { this.using = false; this.useT = 0; } }

  // ---- update ------------------------------------------------------------------------------------------------------------
  update(dt) {
    const a = this.a, g = a.game, I = a.intent;
    this.fireCd = Math.max(-0.06, this.fireCd - dt);   // a little negative carry keeps the fire rate frame-rate independent
    this.equipT = Math.max(0, this.equipT - dt);
    this.kick = Math.max(0, this.kick - dt * 7);
    this.bloom = Math.max(0, this.bloom - (this.stats?.bloomMax || 0.03) * 3.2 * dt);
    this._syncHeld();
    if (a.mode !== 'ground' || a.building) {
      this.reloading = false; this.using = false; this.swinging = false;
      return;
    }
    const cur = a.inv.current;
    if (a.swimming) { this.reloading = false; this.using = false; }
    if (!I.fire) this.needRelease = false;
    const fireHeld = I.fire && !this.needRelease;

    // reload progress
    if (this.reloading) {
      if (!cur || cur.kind !== 'weapon') this.reloading = false;
      else {
        this.reloadT += dt;
        if (this.reloadT >= this.reloadDur) this._finishReload(cur);
      }
    }
    if (this.autoReloadAt > 0 && g.time >= this.autoReloadAt) {
      this.autoReloadAt = -1;
      if (cur?.kind === 'weapon' && cur.mag <= 0) this.startReload();
    }

    if (!cur) return;
    if (cur.kind === 'weapon') {
      const W = this.stats;
      if (I.reload && !this.reloading) this.startReload();
      const want = W.auto ? fireHeld : I.firePressed && !this.needRelease;
      if (want && this.fireCd <= 0 && !this.using && !a.swimming && this.equipT <= 0.06) {
        if (this.reloading) {
          // shotgun/sniper can be interrupted by firing if there's a loaded round
          if (cur.mag > 0 && W.id === 'pump') { this.reloading = false; this._shoot(cur, W); }
        } else if (cur.mag > 0) this._shoot(cur, W);
        else if (a.inv.ammo[W.ammo] > 0) this.startReload();
        else if (I.firePressed) g.audio?.dryFire(a);
      }
    } else if (cur.kind === 'pickaxe') {
      if (fireHeld && !this.swinging && this.equipT <= 0.05 && !a.swimming) this.startSwing();
      if (this.swinging) {
        this.swingT += dt;
        if (!this.swingHit && this.swingT >= this.swingDur * 0.47) { this.swingHit = true; g.combat.melee(a); }
        if (this.swingT >= this.swingDur) this.swinging = false;
      }
    } else if (cur.kind === 'consumable') {
      if (this.using) {
        if (!I.fire && a.isPlayer) this.cancelUse();
        else {
          this.useT += dt;
          if (this.useT >= this.useDur) this._finishUse();
        }
      } else if (fireHeld && this.equipT <= 0.05 && !a.swimming) this.startUse(a.inv.selected);
    }
  }

  // ---- reload ----------------------------------------------------------------------------------------------------------------
  startReload() {
    const a = this.a, cur = a.inv.current;
    if (this.reloading || !cur || cur.kind !== 'weapon') return false;
    const W = this.stats;
    if (cur.mag >= W.mag || a.inv.ammo[W.ammo] <= 0) return false;
    this.reloading = true;
    this.reloadT = 0;
    this.reloadDur = W.reload;
    a.game.audio?.reloadStart(a, W);
    return true;
  }

  _finishReload(cur) {
    const a = this.a, W = this.stats;
    const need = W.mag - cur.mag;
    const take = Math.min(need, a.inv.ammo[W.ammo]);
    cur.mag += take;
    a.inv.ammo[W.ammo] -= take;
    a.inv.touch();
    this.reloading = false;
    a.game.audio?.reloadEnd(a, W);
  }

  // ---- shooting ------------------------------------------------------------------------------------------------------------------
  currentSpread(W) {
    const a = this.a;
    const aim = a.intent.aim && a.isArmed;
    let s = W.spread + this.bloom;
    if (aim) s *= W.adsSpread;
    if (a.crouching) s *= 0.75;
    if (!a.onGround && !a.swimming) s += 0.03;
    else s += clamp(a.speedH / PLAYER.sprintSpeed, 0, 1) * 0.014 * (aim ? 0.4 : 1);
    return s;
  }

  _shoot(cur, W) {
    const a = this.a, g = a.game;
    cur.mag--;
    a.inv.touch();
    this.fireCd = Math.max(this.fireCd, -0.06) + 1 / W.rate;
    this.lastFire = g.time;
    this.kick = 1;
    a.stats.shots++;
    const spread = this.currentSpread(W);
    g.combat.fireWeapon(a, cur, W, spread);
    this.bloom = Math.min(W.bloomMax, this.bloom + W.bloom);
    if (a.isPlayer) a.applyRecoil?.(W);
    if (cur.mag <= 0) this.autoReloadAt = g.time + 0.35;
  }

  // ---- melee -------------------------------------------------------------------------------------------------------------------------
  startSwing() {
    this.swinging = true;
    this.swingT = 0;
    this.swingDur = 1 / PICKAXE.rate;
    this.swingHit = false;
    this.lastFire = this.a.game.time;
    this.a.game.audio?.swing(this.a);
  }

  // ---- consumables -----------------------------------------------------------------------------------------------------------------------
  startUse(slot) {
    const a = this.a;
    const it = a.inv.slots[slot];
    if (!it || it.kind !== 'consumable') return false;
    const C = CONSUMABLES[it.id];
    const needHp = C.heal && a.health < (C.healCap ?? 100);
    const needSh = C.shield && a.shield < (C.shieldCap ?? 100);
    if (!needHp && !needSh) {
      if (a.isPlayer && a.game.time - (this._lastMsg || 0) > 1.2) {
        this._lastMsg = a.game.time;
        const capHp = C.healCap ?? 100, capSh = C.shieldCap ?? 100;
        const msg = C.kind === 'shield' ? (capSh < 100 && a.shield < 100 ? `${C.name.toUpperCase()} ONLY FILLS TO ${capSh}` : 'SHIELD FULL')
          : C.kind === 'heal' ? (capHp < 100 && a.health < 100 ? `${C.name.toUpperCase()} ONLY HEALS TO ${capHp}` : 'HEALTH AT MAX') : 'FULLY HEALED';
        a.game.hud?.toast(msg);
      }
      return false;
    }
    this.using = true;
    this.useT = 0;
    this.useDur = C.use;
    this.useSlot = slot;
    a.game.audio?.useStart(a, C);
    return true;
  }

  _finishUse() {
    const a = this.a;
    const it = a.inv.slots[this.useSlot];
    this.using = false;
    if (!it || it.kind !== 'consumable') return;
    const C = CONSUMABLES[it.id];
    if (C.heal) a.health = Math.max(a.health, Math.min(C.healCap ?? 100, a.health + C.heal));
    if (C.shield) a.shield = Math.max(a.shield, Math.min(C.shieldCap ?? 100, a.shield + C.shield));
    a.stats.heals++;
    if (a.inv.consumeOne(this.useSlot)) this.needRelease = true;     // stack gone → the pickaxe is auto-selected; don't swing until fire is released
    a.game.audio?.useEnd(a, C);
    a.game.fx?.healPulse(a, C.color);
    if (a.isPlayer) a.game.hud?.pulseHeal(C);
  }
}
