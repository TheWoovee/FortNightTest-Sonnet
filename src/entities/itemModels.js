// Low-poly 3D models for weapons, pickaxe, consumables and ammo. Forward is -Z, origin at the grip.
// Weapons are tinted with their rarity colour (as in the real game), which also drives the UI icons.
import * as THREE from 'three';
import { GeoBuilder, solidMaterial } from '../gfx/geo.js';
import { RARITY } from '../config.js';
import { AMMO, CONSUMABLES } from '../data/items.js';

const DARK = 0x2b2f38, MID = 0x4a505c, LIGHT = 0x8a92a0, WOOD = 0x9a6a3c, WOOD_D = 0x6e4626;

let _mat = null;
export const modelMaterial = () => (_mat ||= solidMaterial());

const cache = new Map();

/** Returns {geometry, muzzle:[x,y,z], grip, fore, mag, len} for a weapon at a rarity (geometry cached). */
export function weaponModelData(id, rarity = 0) {
  const key = `w:${id}:${rarity}`;
  if (cache.has(key)) return cache.get(key);
  const c = new THREE.Color(RARITY[rarity].color).multiplyScalar(0.92);
  const acc = new THREE.Color(RARITY[rarity].color).multiplyScalar(0.55);
  const b = new GeoBuilder();
  let meta;
  switch (id) {
    case 'ar':
      b.box(-0.028, -0.025, -0.30, 0.028, 0.075, 0.10, c);                 // receiver
      b.box(-0.032, -0.015, -0.54, 0.032, 0.062, -0.30, MID);              // handguard
      b.box(-0.014, 0.028, -0.80, 0.014, 0.056, -0.54, DARK);              // barrel
      b.box(-0.02, 0.022, -0.86, 0.02, 0.062, -0.80, DARK);                // muzzle brake
      b.box(-0.024, -0.075, 0.10, 0.024, 0.05, 0.36, acc);                 // stock
      b.box(-0.02, -0.13, 0.02, 0.02, -0.025, 0.075, DARK);                // grip
      b.box(-0.02, -0.18, -0.19, 0.02, -0.025, -0.125, DARK);              // magazine
      b.box(-0.022, -0.185, -0.195, 0.022, -0.16, -0.12, acc);
      b.box(-0.012, 0.075, -0.24, 0.012, 0.09, 0.05, DARK);                // top rail
      b.box(-0.018, 0.09, -0.06, 0.018, 0.125, 0.0, DARK);                 // rear sight
      b.box(-0.01, 0.056, -0.66, 0.01, 0.10, -0.64, DARK);                 // front sight
      meta = { grip: [0, -0.06, 0.05], fore: [0, -0.015, -0.42], mag: [0, -0.16, -0.155], muzzle: [0, 0.042, -0.88], len: 1.2 };
      break;
    case 'smg':
      b.box(-0.03, -0.02, -0.22, 0.03, 0.07, 0.07, c);
      b.box(-0.016, 0.022, -0.36, 0.016, 0.052, -0.22, DARK);
      b.box(-0.02, -0.27, -0.13, 0.02, -0.02, -0.075, DARK);              // stick mag
      b.box(-0.022, -0.275, -0.135, 0.022, -0.24, -0.07, acc);
      b.box(-0.02, -0.12, 0.0, 0.02, -0.02, 0.05, DARK);
      b.box(-0.008, -0.03, 0.07, 0.008, 0.05, 0.24, MID);                 // wire stock
      b.box(-0.02, 0.05, 0.22, 0.02, 0.06, 0.26, DARK);
      b.box(-0.012, 0.07, -0.16, 0.012, 0.1, 0.02, DARK);
      b.box(-0.02, -0.06, -0.29, 0.02, -0.02, -0.22, MID);                // fore grip
      meta = { grip: [0, -0.06, 0.03], fore: [0, -0.05, -0.25], mag: [0, -0.22, -0.10], muzzle: [0, 0.037, -0.4], len: 0.75 };
      break;
    case 'pump':
      b.box(-0.03, -0.03, -0.14, 0.03, 0.06, 0.10, c);
      b.box(-0.013, 0.02, -0.78, 0.013, 0.052, -0.14, DARK);              // barrel
      b.box(-0.016, -0.014, -0.7, 0.016, 0.02, -0.14, MID);               // tube
      b.box(-0.034, -0.04, -0.56, 0.034, 0.018, -0.36, WOOD);             // pump
      b.box(-0.026, -0.09, 0.10, 0.026, 0.05, 0.44, WOOD_D);              // stock
      b.box(-0.02, -0.12, 0.03, 0.02, -0.03, 0.08, DARK);
      b.box(-0.01, 0.052, -0.78, 0.01, 0.07, -0.76, LIGHT);
      meta = { grip: [0, -0.06, 0.05], fore: [0, -0.02, -0.46], mag: [0, -0.04, -0.06], muzzle: [0, 0.036, -0.8], len: 1.25 };
      break;
    case 'sniper':
      b.box(-0.026, -0.025, -0.30, 0.026, 0.07, 0.12, c);
      b.box(-0.012, 0.025, -1.05, 0.012, 0.05, -0.30, DARK);
      b.box(-0.018, 0.02, -1.1, 0.018, 0.056, -1.05, DARK);
      b.box(-0.026, -0.09, 0.12, 0.026, 0.06, 0.5, acc);
      b.box(-0.02, -0.13, 0.03, 0.02, -0.025, 0.08, DARK);
      b.box(-0.022, 0.07, -0.40, 0.022, 0.13, 0.06, DARK);                // scope
      b.box(-0.03, 0.075, -0.42, 0.03, 0.135, -0.38, MID);
      b.box(-0.03, 0.075, 0.02, 0.03, 0.135, 0.06, MID);
      b.box(0.026, 0.02, -0.02, 0.06, 0.04, 0.01, DARK);                  // bolt handle
      b.box(0.055, 0.015, -0.03, 0.07, 0.05, 0.02, LIGHT);
      b.box(-0.016, -0.11, -0.24, 0.016, -0.025, -0.19, DARK);
      meta = { grip: [0, -0.06, 0.05], fore: [0, -0.02, -0.42], mag: [0, -0.07, -0.21], muzzle: [0, 0.038, -1.12], len: 1.6 };
      break;
    case 'pistol':
      b.box(-0.02, 0.0, -0.20, 0.02, 0.05, 0.03, c);                       // slide
      b.box(-0.018, -0.03, -0.15, 0.018, 0.0, 0.03, DARK);                 // frame
      b.box(-0.018, -0.14, 0.0, 0.018, -0.03, 0.055, DARK);                // grip
      b.box(-0.02, -0.15, -0.005, 0.02, -0.12, 0.06, acc);
      b.box(-0.008, 0.05, -0.19, 0.008, 0.065, -0.17, LIGHT);
      b.box(-0.008, 0.05, 0.005, 0.008, 0.068, 0.03, LIGHT);
      b.box(-0.01, 0.005, -0.23, 0.01, 0.04, -0.20, DARK);
      meta = { grip: [0, -0.075, 0.03], fore: [0.0, -0.085, 0.035], mag: [0, -0.15, 0.03], muzzle: [0, 0.028, -0.24], len: 0.42 };
      break;
    default: throw new Error('unknown weapon ' + id);
  }
  const geometry = b.build();
  const out = { geometry, ...meta };
  cache.set(key, out);
  return out;
}

export function makeWeaponMesh(id, rarity = 0) {
  const d = weaponModelData(id, rarity);
  const mesh = new THREE.Mesh(d.geometry, modelMaterial());
  mesh.castShadow = true;
  const g = new THREE.Group();
  g.add(mesh);
  g.userData = d;
  return g;
}

export function pickaxeData() {
  const key = 'pickaxe';
  if (cache.has(key)) return cache.get(key);
  const b = new GeoBuilder();
  b.box(-0.02, -0.14, -0.02, 0.02, 0.78, 0.02, 0xd9d0c0);          // handle (light wood/bone)
  b.box(-0.024, -0.14, -0.024, 0.024, -0.02, 0.024, 0xd9483b);     // red grip wrap
  b.box(-0.03, 0.74, -0.03, 0.03, 0.82, 0.03, MID);                // collar
  // curved pick head: stepped tapers on both sides
  const steps = [[0.0, 0.12, 0.05, 0.075], [0.12, 0.22, 0.04, 0.05], [0.22, 0.31, 0.03, 0.02], [0.31, 0.38, 0.02, -0.05]];
  for (const s of [-1, 1]) {
    for (const [a, c2, th, yOff] of steps) {
      const x0 = s > 0 ? a : -c2, x1 = s > 0 ? c2 : -a;
      b.box(x0, 0.74 + yOff - 0.03, -th / 2, x1, 0.74 + yOff + 0.05 + th * 0.5, th / 2, LIGHT);
    }
  }
  b.box(-0.05, 0.76, -0.045, 0.05, 0.85, 0.045, MID);
  const out = { geometry: b.build(), grip: [0, 0.05, 0], tip: [0.36, 0.72, 0], len: 0.9 };
  cache.set(key, out);
  return out;
}
export function makePickaxeMesh() {
  const d = pickaxeData();
  const mesh = new THREE.Mesh(d.geometry, modelMaterial());
  mesh.castShadow = true;
  const g = new THREE.Group();
  g.add(mesh);
  g.userData = d;
  return g;
}

export function consumableData(id) {
  const key = `c:${id}`;
  if (cache.has(key)) return cache.get(key);
  const b = new GeoBuilder();
  const C = CONSUMABLES[id];
  switch (id) {
    case 'bandage':
      b.box(-0.09, 0, -0.06, 0.09, 0.06, 0.06, 0xffffff);
      b.box(-0.095, 0.02, -0.065, 0.095, 0.04, 0.065, 0xe6e9f0);
      b.box(-0.03, 0.058, -0.01, 0.03, 0.066, 0.01, 0xe8344a);
      b.box(-0.01, 0.058, -0.03, 0.01, 0.066, 0.03, 0xe8344a);
      break;
    case 'medkit':
      b.box(-0.14, 0, -0.09, 0.14, 0.15, 0.09, 0xf4f4f6);
      b.box(-0.145, 0.06, -0.095, 0.145, 0.09, 0.095, 0xe8344a);
      b.box(-0.06, 0.15, -0.015, 0.06, 0.19, 0.015, 0x888c96);      // handle
      b.box(-0.04, 0.152, -0.093, 0.04, 0.156, 0.093, 0xe8344a);
      b.box(-0.014, 0.152, -0.093, 0.014, 0.156, 0.093, 0xe8344a);
      break;
    case 'minishield':
      b.cylinder(0, 0, 0, 0.045, 0.09, 8, 0x4cc8ff, { dark: 0.9 });
      b.cylinder(0, 0.09, 0, 0.02, 0.05, 8, 0xbfeaff);
      b.cylinder(0, 0.14, 0, 0.026, 0.025, 8, 0x8a5a2b);
      break;
    case 'shield':
      b.cylinder(0, 0, 0, 0.06, 0.13, 8, 0x2f7dff, { dark: 0.9 });
      b.cylinder(0, 0.13, 0, 0.025, 0.07, 8, 0x9fc4ff);
      b.cylinder(0, 0.2, 0, 0.032, 0.03, 8, 0x8a5a2b);
      break;
    case 'chug':
      b.cylinder(0, 0, 0, 0.085, 0.2, 10, 0xb26cff, { dark: 0.85 });
      b.cylinder(0, 0.2, 0, 0.05, 0.06, 10, 0xd9b8ff);
      b.cylinder(0, 0.26, 0, 0.055, 0.03, 10, 0xffd23f);
      b.box(0.08, 0.06, -0.015, 0.14, 0.16, 0.015, 0xd9b8ff);
      break;
    default: throw new Error('unknown consumable ' + id);
  }
  const geometry = b.build();
  const out = { geometry, color: C.color };
  cache.set(key, out);
  return out;
}
export function makeConsumableMesh(id) {
  const d = consumableData(id);
  const mesh = new THREE.Mesh(d.geometry, modelMaterial());
  mesh.castShadow = true;
  const g = new THREE.Group();
  g.add(mesh);
  g.userData = d;
  return g;
}

export function ammoData(type) {
  const key = `a:${type}`;
  if (cache.has(key)) return cache.get(key);
  const A = AMMO[type];
  const b = new GeoBuilder();
  b.box(-0.13, 0, -0.08, 0.13, 0.13, 0.08, 0x3a3f4a);
  b.box(-0.135, 0.09, -0.085, 0.135, 0.13, 0.085, A.box);
  b.box(-0.05, 0.13, -0.05, 0.05, 0.15, 0.05, 0x2b2f38);
  // bullets poking out
  for (let i = -1; i <= 1; i++) b.box(i * 0.07 - 0.02, 0.15, -0.02, i * 0.07 + 0.02, 0.21, 0.02, 0xd9a441);
  const out = { geometry: b.build(), color: A.color };
  cache.set(key, out);
  return out;
}
export function makeAmmoMesh(type) {
  const d = ammoData(type);
  const mesh = new THREE.Mesh(d.geometry, modelMaterial());
  mesh.castShadow = true;
  const g = new THREE.Group();
  g.add(mesh);
  g.userData = d;
  return g;
}

/** Mesh for any inventory-style item {kind,id,rarity,ammoType}. */
export function makeItemMesh(item) {
  switch (item.kind) {
    case 'weapon': return makeWeaponMesh(item.id, item.rarity);
    case 'pickaxe': return makePickaxeMesh();
    case 'consumable': return makeConsumableMesh(item.id);
    case 'ammo': return makeAmmoMesh(item.id);
    default: return new THREE.Group();
  }
}
