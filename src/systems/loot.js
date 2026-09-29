// Loot: floor items with rarity beams, chests, drops from eliminated players, and pickup/interaction rules.
import * as THREE from 'three';
import { GeoBuilder, solidMaterial } from '../gfx/geo.js';
import { RARITY } from '../config.js';
import { AMMO, CONSUMABLES, WEAPONS, LOOT_TABLES, itemName } from '../data/items.js';
import { makeItemMesh, modelMaterial } from '../entities/itemModels.js';
import { Rng } from '../util/rng.js';
import { clamp } from '../util/math.js';

const ACTIVATE = 85;          // metres: item model visible
const BEAM_NEAR = 170;        // metres: rarity beams visible
const BEAM_CHEST = 320;

// ---- shared visuals ---------------------------------------------------------------------------------------------------------------
const beamGeo = new THREE.CylinderGeometry(0.3, 0.3, 1, 10, 1, true);
beamGeo.translate(0, 0.5, 0);
const discGeo = new THREE.CircleGeometry(0.9, 24);
discGeo.rotateX(-Math.PI / 2);

const beamMats = new Map();
function beamMaterial(color) {
  const key = color;
  if (beamMats.has(key)) return beamMats.get(key);
  const c = new THREE.Color(color);
  const m = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Vector3(c.r, c.g, c.b) } },
    vertexShader: `varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; varying vec2 vUv; varying vec3 vN;
      void main(){
        float a = pow(1.0 - vUv.y, 1.6) * 0.75;
        float fres = pow(abs(vN.z), 1.2);
        gl_FragColor = vec4(uColor * 2.4, a * (0.25 + 0.75 * fres));
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
  });
  beamMats.set(key, m);
  return m;
}
const discMats = new Map();
function discMaterial(color) {
  if (discMats.has(color)) return discMats.get(color);
  const c = new THREE.Color(color);
  const m = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Vector3(c.r, c.g, c.b) } },
    vertexShader: `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uColor; varying vec2 vP;
      void main(){ float d = length(vP) / 0.9; float ring = smoothstep(0.62, 0.78, d) * (1.0 - smoothstep(0.86, 1.0, d)); float fill = (1.0 - smoothstep(0.0, 0.9, d)) * 0.35; gl_FragColor = vec4(uColor * 2.0, clamp(ring * 0.9 + fill, 0.0, 1.0) * 0.7); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  discMats.set(color, m);
  return m;
}

function makeChestModel() {
  const body = new GeoBuilder(), lid = new GeoBuilder();
  const gold = 0xf2a81c, dark = 0x7a4a1a, wood = 0xc47a24, metal = 0xffe08a;
  body.box(-0.5, 0, -0.3, 0.5, 0.42, 0.3, wood);
  body.box(-0.52, 0.0, -0.32, 0.52, 0.08, 0.32, dark);
  body.box(-0.52, 0.34, -0.32, 0.52, 0.42, 0.32, gold);
  for (const x of [-0.36, 0.36]) body.box(x - 0.045, 0.0, -0.325, x + 0.045, 0.42, 0.325, gold);
  body.box(-0.07, 0.24, 0.3, 0.07, 0.4, 0.34, metal);              // lock plate
  // lid (pivot at back-top edge z=-0.3)
  const zc = 0.3;
  lid.box(-0.5, 0, 0, 0.5, 0.12, zc * 2, wood);
  lid.box(-0.5, 0.12, 0.04, 0.5, 0.22, zc * 2 - 0.04, wood);
  lid.box(-0.44, 0.22, 0.1, 0.44, 0.27, zc * 2 - 0.1, wood);
  lid.box(-0.52, 0.0, -0.02, 0.52, 0.06, zc * 2 + 0.02, gold);
  for (const x of [-0.36, 0.36]) lid.box(x - 0.045, 0.0, -0.025, x + 0.045, 0.24, zc * 2 + 0.025, gold);
  const g = new THREE.Group();
  const bm = new THREE.Mesh(body.build(), modelMaterial());
  bm.castShadow = true; bm.receiveShadow = true;
  g.add(bm);
  const pivot = new THREE.Group();
  pivot.position.set(0, 0.42, -0.3);
  const lm = new THREE.Mesh(lid.build(), modelMaterial());
  lm.castShadow = true;
  pivot.add(lm);
  g.add(pivot);
  g.userData.lid = pivot;
  return g;
}

let _lootId = 1;

export class Loot {
  constructor(game) {
    this.game = game;
    this.group = new THREE.Group();
    this.group.name = 'loot';
    game.gfx.scene.add(this.group);
    this.items = [];          // floor items
    this.chests = [];
    this.rng = new Rng(1234);
    this.visTimer = 0;
    this.interactTarget = null;
    this.time = 0;
    this.chestModelCache = null;
  }

  clear() {
    for (const it of this.items) this._despawnVisual(it);
    for (const c of this.chests) if (c.group) this.group.remove(c.group);
    this.items.length = 0;
    this.chests.length = 0;
    this.interactTarget = null;
  }

  // ---- generation ---------------------------------------------------------------------------------------------------------------------
  rollWeapon(rng, table) {
    const id = rng.weighted(table.weapon || LOOT_TABLES.floor.weapon);
    const rarity = rng.weighted(table.rarity);
    return { kind: 'weapon', id, rarity, mag: WEAPONS[id].mag };
  }

  rollFloorItem(rng, boost = 0) {
    const T = LOOT_TABLES.floor;
    const kind = rng.weighted(T.kind);
    if (kind === 'weapon') {
      const rarityTable = boost > 0 ? T.rarity.map(([r, w]) => [r, w * (1 + boost * r * 0.35)]) : T.rarity;
      return this.rollWeapon(rng, { weapon: T.weapon, rarity: rarityTable });
    }
    if (kind === 'ammo') {
      const type = rng.weighted([['light', 30], ['medium', 30], ['shells', 18], ['heavy', 8]]);
      return { kind: 'ammo', id: type, count: AMMO[type].perBox };
    }
    if (kind === 'heal') {
      const id = rng.weighted([['bandage', 66], ['medkit', 26], ['chug', 3]]);
      return { kind: 'consumable', id, count: id === 'bandage' ? rng.int(3, 5) : 1, rarity: 0 };
    }
    const id = rng.weighted([['minishield', 60], ['shield', 32], ['chug', 2]]);
    return { kind: 'consumable', id, count: id === 'minishield' ? rng.int(1, 3) : 1, rarity: 0 };
  }

  populate(world, seed) {
    this.rng = new Rng(seed);
    const rng = this.rng;
    // floor loot in buildings
    for (const b of world.buildings) {
      const boost = b.kindName === 'warehouse' || b.kindName === 'shop' || b.kindName === 'manor' ? 1 : 0.4;
      for (const s of b.spots) {
        if (!rng.chance(0.78)) continue;
        this.spawn(this.rollFloorItem(rng, boost), s.x, s.y, s.z, { floorLevel: s.floor, building: b });
      }
      for (const s of b.upper || []) if (rng.chance(0.85)) this.spawn(this.rollFloorItem(rng, 1.5), s.x, s.y, s.z, { floorLevel: 1, building: b });
    }
    for (const s of world.outdoorSpots) {
      if (!rng.chance(0.55)) continue;
      this.spawn(this.rollFloorItem(rng, 0), s.x, s.y, s.z, {});
    }
    for (const c of world.chestSpots) this.spawnChest(c.x, c.y, c.z, c.yaw || 0);
    // a few wild spawns: forest clearings
    for (let i = 0; i < 26; i++) {
      const a = rng.range(0, Math.PI * 2), r = Math.sqrt(rng.float()) * 380;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = world.terrain.heightAt(x, z);
      if (y < 2 || world.scatter.blocked(x, z, 0) || world.scatter._onRoad(x, z, 2)) continue;
      this.spawn(this.rollFloorItem(rng, 0), x, y, z, {});
    }
  }

  // ---- floor items ------------------------------------------------------------------------------------------------------------------------
  spawn(item, x, y, z, opts = {}) {
    const it = {
      id: _lootId++, item, x, y, z, vx: 0, vy: 0, vz: 0, alive: true, group: null, visible: false, floorLevel: opts.floorLevel || 0,
      building: opts.building || null, bornAt: this.game.time, phase: Math.random() * 6.28, settled: !opts.vel, noPickupUntil: opts.noPickupUntil || 0,
    };
    if (opts.vel) { it.vx = opts.vel[0]; it.vy = opts.vel[1]; it.vz = opts.vel[2]; }
    this.items.push(it);
    return it;
  }

  drop(item, x, y, z, actorVel) {
    const a = Math.random() * Math.PI * 2, s = 1.5 + Math.random() * 1.8;
    return this.spawn(item, x, y + 0.6, z, { vel: [Math.cos(a) * s + (actorVel?.x || 0) * 0.2, 3.2 + Math.random() * 1.5, Math.sin(a) * s + (actorVel?.z || 0) * 0.2], noPickupUntil: this.game.time + 0.7 });
  }

  colorOf(item) {
    if (item.kind === 'weapon') return RARITY[item.rarity].glow;
    if (item.kind === 'ammo') return new THREE.Color(AMMO[item.id].color).getHex();
    if (item.kind === 'consumable') return new THREE.Color(CONSUMABLES[item.id].color).getHex();
    return 0xffffff;
  }
  rarityOf(item) { return item.kind === 'weapon' ? item.rarity : item.kind === 'consumable' ? (item.id === 'chug' ? 4 : item.id === 'medkit' || item.id === 'shield' ? 2 : 1) : 0; }

  _spawnVisual(it) {
    const g = new THREE.Group();
    const model = makeItemMesh(it.item);
    const s = it.item.kind === 'weapon' ? 1.25 : it.item.kind === 'ammo' ? 1.15 : 1.35;
    model.scale.setScalar(s);
    // lay weapons flat, centred on their length
    const holder = new THREE.Group();
    holder.add(model);
    if (it.item.kind === 'weapon') {
      const len = model.userData.len || 0.8;
      model.position.set(0, 0, len * 0.4 * s);
      holder.rotation.z = 0.0;
    }
    holder.position.y = 0.55;
    g.add(holder);
    g.userData.holder = holder;
    const color = this.colorOf(it.item);
    const disc = new THREE.Mesh(discGeo, discMaterial(color));
    disc.position.y = 0.06; disc.renderOrder = 2; disc.frustumCulled = false;
    g.add(disc);
    g.userData.disc = disc;
    const beam = new THREE.Mesh(beamGeo, beamMaterial(color));
    beam.scale.set(1, 6 + this.rarityOf(it.item) * 2.2, 1);
    beam.frustumCulled = false; beam.renderOrder = 3;
    beam.visible = false;
    g.add(beam);
    g.userData.beam = beam;
    g.position.set(it.x, it.y, it.z);
    this.group.add(g);
    it.group = g;
    it.visible = true;
  }
  _despawnVisual(it) {
    if (it.group) { this.group.remove(it.group); it.group = null; }
    it.visible = false;
  }

  // ---- chests -----------------------------------------------------------------------------------------------------------------------------------
  spawnChest(x, y, z, yaw) {
    const c = { x, y, z, yaw, opened: false, openT: 0, group: null, id: _lootId++, sparkleT: Math.random() * 2, beam: null };
    this.chests.push(c);
    return c;
  }
  _chestVisual(c) {
    if (c.group) return;
    const g = makeChestModel();
    g.position.set(c.x, c.y, c.z);
    g.rotation.y = c.yaw;
    g.scale.setScalar(1.15);
    const beam = new THREE.Mesh(beamGeo, beamMaterial(0xffc233));
    beam.scale.set(1.3, 16, 1.3); beam.frustumCulled = false; beam.renderOrder = 3;
    g.add(beam);
    g.userData.beam = beam;
    const disc = new THREE.Mesh(discGeo, discMaterial(0xffc233));
    disc.scale.setScalar(1.5); disc.position.y = 0.05; disc.renderOrder = 2; disc.frustumCulled = false;
    g.add(disc);
    this.group.add(g);
    c.group = g;
    if (c.opened) g.userData.lid.rotation.x = -1.9;
  }

  openChest(c, by) {
    if (c.opened) return;
    c.opened = true; c.openT = 0;
    const g = this.game;
    g.audio?.chestOpen(c);
    g.fx.sparkle(c.x, c.y + 0.6, c.z, 0xffc233, 26, 2.4, 4);
    const rng = this.rng;
    const items = [];
    items.push(this.rollWeapon(rng, LOOT_TABLES.chest));
    const w = WEAPONS[items[0].id];
    items.push({ kind: 'ammo', id: w.ammo, count: AMMO[w.ammo].perBox });
    items.push(rng.chance(0.5) ? this.rollFloorItem(rng, 0.5) : { kind: 'consumable', id: rng.pick(['bandage', 'minishield', 'medkit', 'shield']), count: 2, rarity: 0 });
    if (c.group) c.group.userData.beam.visible = false;
    items.forEach((item, i) => {
      const a = c.yaw + Math.PI + (i - 1) * 0.9;
      const it = this.spawn(item, c.x, c.y + 0.5, c.z, { vel: [Math.sin(a) * 2.6, 4.2 + i * 0.3, Math.cos(a) * 2.6], noPickupUntil: g.time + 0.5 });
      it.bornAt = g.time;
    });
  }

  // ---- interaction ----------------------------------------------------------------------------------------------------------------------------------
  /** Nearest interactable in reach and roughly in front. */
  findInteract(actor) {
    const fx = -Math.sin(actor.aimYaw), fz = -Math.cos(actor.aimYaw);
    let best = null, bestScore = 1e9;
    const px = actor.pos.x, py = actor.pos.y, pz = actor.pos.z;
    const t = this.game.time;
    for (const it of this.items) {
      if (!it.alive || t < it.noPickupUntil) continue;
      const dx = it.x - px, dz = it.z - pz, dy = it.y - py;
      const d2 = dx * dx + dz * dz;
      if (d2 > 2.5 * 2.5 || Math.abs(dy) > 2.4) continue;
      const d = Math.sqrt(d2);
      const facing = d > 0.3 ? (dx * fx + dz * fz) / d : 1;
      const score = d - facing * 0.9;
      if (score < bestScore) { bestScore = score; best = { type: 'loot', it }; }
    }
    for (const c of this.chests) {
      if (c.opened) continue;
      const dx = c.x - px, dz = c.z - pz;
      const d2 = dx * dx + dz * dz;
      if (d2 > 2.9 * 2.9 || Math.abs(c.y - py) > 2.4) continue;
      const d = Math.sqrt(d2);
      const facing = d > 0.3 ? (dx * fx + dz * fz) / d : 1;
      const score = d - facing * 0.9 - 0.5;
      if (score < bestScore) { bestScore = score; best = { type: 'chest', c }; }
    }
    return best;
  }

  interact(actor) {
    const tgt = this.findInteract(actor);
    if (!tgt) return false;
    if (tgt.type === 'chest') { this.openChest(tgt.c, actor); return true; }
    return this.pickup(actor, tgt.it);
  }

  /** Try to pick an item up. Returns true when at least part of it was taken. */
  pickup(actor, it) {
    if (!it.alive) return false;
    const g = this.game;
    const item = it.item;
    const res = actor.inv.add(item);
    if (!res.ok) {
      if (actor.isPlayer) g.hud?.toast(res.reason.toUpperCase());
      return false;
    }
    // side effects of adding
    if (item.kind === 'weapon') {
      if (res.dropped) this.drop(res.dropped, actor.pos.x, actor.pos.y, actor.pos.z, actor.vel);
      if (actor.isPlayer && actor.inv.current?.kind === 'pickaxe') actor.inv.select(res.slot);
      else if (actor.isPlayer && res.dropped) actor.inv.select(res.slot);
    } else if (item.kind === 'consumable') {
      if (res.dropped) this.drop(res.dropped, actor.pos.x, actor.pos.y, actor.pos.z, actor.vel);
      item.count -= res.taken;
    } else if (item.kind === 'ammo') {
      item.count -= res.taken;
    }
    const done = item.kind === 'weapon' || item.count <= 0;
    if (done) { it.alive = false; this._despawnVisual(it); }
    if (actor.isPlayer) {
      g.audio?.pickup(item);
      g.hud?.pickupToast(item, res.taken);
      g.fx.sparkle(it.x, it.y + 0.6, it.z, this.colorOf(item), 8, 1.2, 2);
    }
    return true;
  }

  removeItem(it) { it.alive = false; this._despawnVisual(it); }

  // ---- per-frame ---------------------------------------------------------------------------------------------------------------------------------------------
  update(dt, camPos) {
    this.time += dt;
    const g = this.game;
    const phys = g.physics;
    // physics for dropped items
    for (const it of this.items) {
      if (!it.alive || it.settled) continue;
      it.vy -= 16 * dt;
      it.x += it.vx * dt; it.y += it.vy * dt; it.z += it.vz * dt;
      const gr = phys.groundAt(it.x, it.z, it.y + 0.6).y;
      if (it.y < gr) {
        it.y = gr;
        if (it.vy < -2) { it.vy *= -0.35; it.vx *= 0.6; it.vz *= 0.6; }
        else { it.vx = it.vy = it.vz = 0; it.settled = true; }
      }
      if (it.group) it.group.position.set(it.x, it.y, it.z);
    }
    // visual LOD
    this.visTimer -= dt;
    if (this.visTimer <= 0) {
      this.visTimer = 0.35;
      for (const it of this.items) {
        if (!it.alive) continue;
        const d2 = (it.x - camPos.x) ** 2 + (it.z - camPos.z) ** 2 + (it.y - camPos.y) ** 2;
        const near = d2 < ACTIVATE * ACTIVATE;
        const wantBeam = d2 < (this.rarityOf(it.item) >= 2 ? BEAM_NEAR : BEAM_NEAR * 0.5) ** 2;
        if (near || wantBeam) {
          if (!it.group) this._spawnVisual(it);
          const u = it.group.userData;
          u.holder.visible = near;
          u.beam.visible = wantBeam;
          u.disc.visible = near || d2 < 130 * 130;
        } else if (it.group) this._despawnVisual(it);
      }
      for (const c of this.chests) {
        const d2 = (c.x - camPos.x) ** 2 + (c.z - camPos.z) ** 2;
        const show = d2 < BEAM_CHEST * BEAM_CHEST;
        if (show && !c.group) this._chestVisual(c);
        else if (!show && c.group) { this.group.remove(c.group); c.group = null; }
        if (c.group) c.group.userData.beam.visible = !c.opened && d2 > 12 * 12 * 0 ;
      }
    }
    // animate visible items
    const t = this.time;
    for (const it of this.items) {
      if (!it.alive || !it.group) continue;
      const h = it.group.userData.holder;
      h.rotation.y = t * 1.3 + it.phase;
      h.position.y = 0.55 + Math.sin(t * 2.2 + it.phase) * 0.06;
      if (!it.settled) it.group.position.set(it.x, it.y, it.z);
    }
    for (const c of this.chests) {
      if (!c.group) continue;
      if (c.opened && c.openT < 1) {
        c.openT = Math.min(1, c.openT + dt * 2.6);
        const e = 1 - Math.pow(1 - c.openT, 3);
        c.group.userData.lid.rotation.x = -1.9 * e;
      }
      if (!c.opened) {
        c.sparkleT -= dt;
        if (c.sparkleT <= 0 && (c.x - camPos.x) ** 2 + (c.z - camPos.z) ** 2 < 60 * 60) {
          c.sparkleT = 0.35 + Math.random() * 0.4;
          g.fx.sparkle(c.x + (Math.random() - 0.5) * 0.8, c.y + 0.3 + Math.random() * 0.6, c.z + (Math.random() - 0.5) * 0.8, 0xffc233, 1, 0.2, 1.2);
        }
      }
    }
    // cleanup dead items occasionally
    if (this.items.length > 600) this.items = this.items.filter((i) => i.alive);
  }

  /** Describe what the player would interact with (for the HUD prompt). */
  promptFor(actor) {
    const tgt = this.findInteract(actor);
    this.interactTarget = tgt;
    return tgt;
  }
}
