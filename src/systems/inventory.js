// Inventory: pickaxe + 5 item slots, ammo reserves by type, building materials.
import { AMMO, CONSUMABLES, WEAPONS, PICKAXE } from '../data/items.js';
import { BUILD } from '../config.js';

export const SLOT_COUNT = 6;   // slot 0 is always the pickaxe

export class Inventory {
  constructor() {
    this.slots = new Array(SLOT_COUNT).fill(null);
    this.slots[0] = { kind: 'pickaxe', id: 'pickaxe', rarity: 0 };
    this.selected = 0;
    this.ammo = { light: 0, medium: 0, shells: 0, heavy: 0 };
    this.mats = { wood: 0, stone: 0, metal: 0 };
    this.version = 0;             // bumps on any change so the HUD can diff cheaply
  }

  get current() { return this.slots[this.selected]; }
  touch() { this.version++; }

  select(i) {
    if (i < 0 || i >= SLOT_COUNT) return false;
    if (!this.slots[i]) return false;
    if (i === this.selected) return false;
    this.selected = i;
    this.touch();
    return true;
  }

  /** Cycle to the next/prev non-empty slot. */
  cycle(dir) {
    for (let k = 1; k <= SLOT_COUNT; k++) {
      const i = (this.selected + dir * k + SLOT_COUNT * 4) % SLOT_COUNT;
      if (this.slots[i]) { this.selected = i; this.touch(); return true; }
    }
    return false;
  }

  freeSlot() {
    for (let i = 1; i < SLOT_COUNT; i++) if (!this.slots[i]) return i;
    return -1;
  }

  weaponCount() { let n = 0; for (let i = 1; i < SLOT_COUNT; i++) if (this.slots[i]?.kind === 'weapon') n++; return n; }
  hasWeapon() { return this.weaponCount() > 0; }
  countOf(id) { let n = 0; for (const s of this.slots) if (s?.kind === 'consumable' && s.id === id) n += s.count; return n; }
  findConsumable(id) { for (let i = 1; i < SLOT_COUNT; i++) if (this.slots[i]?.kind === 'consumable' && this.slots[i].id === id) return i; return -1; }

  /** Best weapon slot (by rarity, then damage) or -1. */
  bestWeaponSlot() {
    let best = -1, score = -1;
    for (let i = 1; i < SLOT_COUNT; i++) {
      const s = this.slots[i];
      if (s?.kind !== 'weapon') continue;
      const sc = s.rarity * 100 + WEAPONS[s.id].dmg * WEAPONS[s.id].pellets * WEAPONS[s.id].rate * 0.05;
      if (sc > score) { score = sc; best = i; }
    }
    return best;
  }

  /** Reserve ammo added; returns amount actually taken. */
  addAmmo(type, n) {
    const cap = AMMO[type].cap;
    const take = Math.max(0, Math.min(n, cap - this.ammo[type]));
    this.ammo[type] += take;
    if (take) this.touch();
    return take;
  }

  addMats(type, n) {
    const before = this.mats[type];
    this.mats[type] = Math.min(BUILD.maxMats, before + n);
    this.touch();
    return this.mats[type] - before;
  }

  /** Non-mutating preview of add(): {ok, swap (would replace the selected slot), reason}. */
  canTake(item) {
    if (item.kind === 'ammo') return this.ammo[item.id] < AMMO[item.id].cap ? { ok: true, swap: false } : { ok: false, swap: false, reason: 'Ammo full' };
    if (item.kind === 'consumable') {
      const si = this.findConsumable(item.id);
      if (si >= 0) return this.slots[si].count < CONSUMABLES[item.id].stack ? { ok: true, swap: false } : { ok: false, swap: false, reason: 'Stack full' };
    } else if (item.kind === 'weapon') {
      for (let i = 1; i < SLOT_COUNT; i++) {
        const s = this.slots[i];
        if (s?.kind === 'weapon' && s.id === item.id && s.rarity === item.rarity) return { ok: false, swap: false, reason: 'Already carrying' };
      }
    }
    if (this.freeSlot() >= 0) return { ok: true, swap: false };
    return this.selected === 0 ? { ok: false, swap: false, reason: 'Inventory full' } : { ok: true, swap: true };
  }

  /**
   * Try to add an item. Returns {ok, taken, dropped, slot, reason}.
   *  - weapons: identical (id+rarity) duplicates are declined; full inventory swaps with the selected slot.
   *  - consumables stack; full stacks leave the remainder on the ground.
   */
  add(item, opts = {}) {
    const res = { ok: false, taken: 0, dropped: null, slot: -1, reason: '' };
    if (item.kind === 'ammo') {
      const t = this.addAmmo(item.id, item.count);
      res.ok = t > 0; res.taken = t; res.reason = t ? '' : 'Ammo full';
      return res;
    }
    if (item.kind === 'consumable') {
      const C = CONSUMABLES[item.id];
      const si = this.findConsumable(item.id);
      if (si >= 0) {
        const s = this.slots[si];
        const t = Math.min(item.count, C.stack - s.count);
        if (t <= 0) { res.reason = 'Stack full'; return res; }
        s.count += t; res.ok = true; res.taken = t; res.slot = si;
        this.touch();
        return res;
      }
      let slot = this.freeSlot();
      if (slot < 0) {
        if (opts.noSwap || this.selected === 0) { res.reason = 'Inventory full'; return res; }
        slot = this.selected;
        res.dropped = this.slots[slot];
      }
      const t = Math.min(item.count, C.stack);
      this.slots[slot] = { kind: 'consumable', id: item.id, count: t, rarity: 0 };
      res.ok = true; res.taken = t; res.slot = slot;
      this.touch();
      return res;
    }
    if (item.kind === 'weapon') {
      // duplicate → just take the ammo (handled by caller); refuse otherwise identical
      for (let i = 1; i < SLOT_COUNT; i++) {
        const s = this.slots[i];
        if (s?.kind === 'weapon' && s.id === item.id && s.rarity === item.rarity) { res.reason = 'Already carrying'; return res; }
      }
      let slot = this.freeSlot();
      if (slot < 0) {
        if (opts.noSwap || this.selected === 0) { res.reason = 'Inventory full'; return res; }
        slot = this.selected;
        res.dropped = this.slots[slot];
      }
      this.slots[slot] = { kind: 'weapon', id: item.id, rarity: item.rarity, mag: item.mag ?? WEAPONS[item.id].mag };
      res.ok = true; res.taken = 1; res.slot = slot;
      this.touch();
      return res;
    }
    return res;
  }

  removeSlot(i) {
    if (i <= 0 || i >= SLOT_COUNT) return null;
    const it = this.slots[i];
    this.slots[i] = null;
    if (this.selected === i) this.selected = 0;
    this.touch();
    return it;
  }

  /** Consume one of a stack (returns true when the stack became empty). */
  consumeOne(i) {
    const s = this.slots[i];
    if (!s || s.kind !== 'consumable') return false;
    s.count--;
    let empty = false;
    if (s.count <= 0) { this.slots[i] = null; if (this.selected === i) this.selected = 0; empty = true; }
    this.touch();
    return empty;
  }

  /** Everything the actor is carrying, as droppable item descriptors (used on elimination). */
  dropAll() {
    const out = [];
    for (let i = 1; i < SLOT_COUNT; i++) {
      const s = this.slots[i];
      if (!s) continue;
      out.push({ ...s });
      this.slots[i] = null;
    }
    for (const t of Object.keys(this.ammo)) {
      const n = this.ammo[t];
      if (n > 0) { out.push({ kind: 'ammo', id: t, count: Math.min(n, AMMO[t].perBox * 2) }); this.ammo[t] = 0; }
    }
    this.selected = 0;
    this.touch();
    return out;
  }

  canAfford(cost, mat) { return this.mats[mat] >= cost; }
  spend(cost, mat) { if (this.mats[mat] < cost) return false; this.mats[mat] -= cost; this.touch(); return true; }
}

export { PICKAXE };
