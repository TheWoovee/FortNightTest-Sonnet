// Town generator: lays streets, places building rows facing them, dresses the town with props
// and records loot/chest/navigation data for the gameplay systems.
import * as THREE from 'three';
import { GeoBuilder, solidMaterial } from '../gfx/geo.js';
import { Rng } from '../util/rng.js';
import { WORLD } from '../config.js';
import { buildBlock, tint } from './buildings.js';
import * as P from './props.js';

const hashStr = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

const PALETTES = {
  suburb: {
    walls: [0xf7c6cf, 0xbfe8d6, 0xfff1a8, 0xb9dbf7, 0xf9d9b6, 0xe5d1f6, 0xd8f0a8],
    roofs: [0xc4553a, 0x5c6f95, 0x7a4f3a, 0x4b5563, 0x2f7a6d],
    trim: 0xffffff, shutters: [0x3d6ea8, 0x2f7a6d, 0xc4553a, 0xe2b84a], chimney: 0xa5533d, base: 0xa2a4ab,
  },
  harbor: {
    walls: [0x5ba4cf, 0xe6a545, 0x6db38a, 0xe8685a, 0xc7ced6, 0xf0e0b0],
    roofs: [0x7f8b99, 0x5d6b7a, 0x9a4b3c, 0x3f6f8f],
    trim: 0xf4f4f4, shutters: [0xffffff], chimney: 0x6b6f78, base: 0x8a8d94, metal: true,
  },
  autumn: {
    walls: [0xa9744a, 0xb98552, 0x93643a, 0xc99358, 0x8a5a2b],
    roofs: [0x8c3524, 0xa63f28, 0x5a3a2a, 0x6d4d2c],
    trim: 0xf1e3c8, shutters: [0x3f6d3a, 0xa63f28], chimney: 0x8a8580, base: 0x77726c, log: true,
  },
  farm: {
    walls: [0xf3ead7, 0xf0dca0, 0xd9e6c8, 0xe8c7b0],
    roofs: [0x3f7a4a, 0x6b5b4d, 0x8c3524],
    trim: 0xffffff, shutters: [0x3f7a4a, 0xa63f28], chimney: 0x8a5a4a, base: 0x98948c,
  },
  fishing: {
    walls: [0xffb347, 0x4ecdc4, 0xff6b6b, 0xffe66d, 0xa06cd5, 0x6bc8ff],
    roofs: [0x2d6a8f, 0x8a3b3b, 0x3f7f5a, 0x5c4a8a],
    trim: 0xffffff, shutters: [0xffffff, 0x2d6a8f], chimney: 0x8a5a4a, base: 0x9a9aa2, metal: true,
  },
  lodge: {
    walls: [0x9c6b3f, 0xa9744a, 0x8a5a2b, 0xb0794a],
    roofs: [0x2f5f3f, 0x3d4f3a, 0x5a3a2a, 0x2a4a5a],
    trim: 0xe9d7b2, shutters: [0x2f5f3f, 0x8c3524], chimney: 0x8a8580, base: 0x77726c, log: true,
  },
};

const MIX = {
  suburb: [['cottage', 5], ['manor', 2.2], ['shop', 2]],
  harbor: [['warehouse', 3], ['shack', 3], ['cottage', 1.2], ['shop', 1]],
  autumn: [['cabin', 5], ['cottage', 1.5], ['manor', 0.8]],
  farm: [['barn', 2], ['cottage', 2], ['shack', 1.5]],
  fishing: [['shack', 5], ['cottage', 2], ['warehouse', 0.7]],
  lodge: [['cabin', 4], ['manor', 1.2]],
};

function makeSpec(kind, rng, pal) {
  const wall = rng.pick(pal.walls), roof = rng.pick(pal.roofs);
  switch (kind) {
    case 'manor': {
      const w = rng.range(9.5, 11.5), d = rng.range(8.6, 10);
      return {
        w, d, H: 3.05, stories: 2, wall, roof, trim: pal.trim, base: pal.base, roofType: 'gable',
        ridge: rng.chance(0.5) ? 'u' : 'v', rise: 0.36 * Math.min(w, d) + 0.5, windows: { front: 2, back: 2, left: 2, right: 2 },
        doorU: rng.range(-1, 1), porch: true, chimney: pal.chimney, shutters: rng.chance(0.6) && rng.pick(pal.shutters), flowers: rng.chance(0.4),
        interior: 'home', lootSpots: 3, chest: rng.chance(0.6), bands: pal.log ? 0x6b4423 : null, kind: 'manor',
      };
    }
    case 'shop': {
      const w = rng.range(9, 11), d = rng.range(7, 8);
      return {
        w, d, H: 3.3, wall, roof: rng.pick([0x7f8790, 0x5d6b7a, 0xb0654a]), trim: pal.trim, base: pal.base, roofType: 'flat',
        windows: { front: 2, back: 1, left: 1, right: 1 }, winW: 2.0, sill: 0.8, winH: 1.7, doorU: rng.range(-1.2, 1.2),
        awning: rng.pick([0xe8534a, 0x3d8bd9, 0x2fae6c, 0xf0a81c]), sign: rng.pick([0xf0a81c, 0x3d8bd9, 0xe8534a]), signU: 0,
        interior: 'shop', lootSpots: 3, chest: rng.chance(0.55), kind: 'shop',
      };
    }
    case 'cabin': {
      const w = rng.range(7.2, 9.2), d = rng.range(6.2, 7.6);
      return {
        w, d, H: 2.9, wall, roof, trim: pal.trim, base: pal.base, roofType: 'gable', ridge: rng.chance(0.6) ? 'u' : 'v',
        rise: 0.55 * Math.min(w, d), windows: { front: 1, back: 1, left: 1, right: 1 }, doorU: rng.range(-1, 1), porch: true, chimney: pal.chimney,
        shutters: rng.pick(pal.shutters), bands: 0x74472a, bandH: 0.4, interior: 'home', lootSpots: 3, chest: rng.chance(0.3), kind: 'cabin', corners: true, cornerColor: 0x5e3a20,
      };
    }
    case 'shack': {
      const w = rng.range(4.8, 6.2), d = rng.range(4.0, 5.2);
      return {
        w, d, H: 2.7, wall, roof, trim: pal.trim, base: pal.base, roofType: 'shed', rise: 1.0, windows: { front: 1, back: 0, left: 1, right: 0 },
        winW: 1.0, doorU: rng.range(-0.6, 0.6), interior: 'none', lootSpots: 2, chest: rng.chance(0.25), overhang: 0.4, kind: 'shack', mat: pal.metal ? 'metal' : 'wood',
      };
    }
    case 'warehouse': {
      const w = rng.range(13, 16), d = rng.range(10, 12);
      return {
        w, d, H: 4.6, wall, roof: rng.pick(pal.roofs), trim: pal.trim, base: pal.base, roofType: 'gable', ridge: 'u', rise: 2.0, overhang: 0.4,
        windows: { front: 0, back: 2, left: 2, right: 2 }, sill: 2.9, winH: 0.9, winW: 1.6, bigDoor: { w: 4.6, h: 3.7 }, doorU: rng.range(-2, 2),
        interior: 'warehouse', lootSpots: 4, chest: rng.chance(0.8), kind: 'warehouse', mat: 'metal', corners: false, backDoor: -3,
      };
    }
    case 'barn': {
      const w = rng.range(11, 13), d = rng.range(8.6, 10);
      return {
        w, d, H: 4.2, wall: 0xc0392b, roof: 0x6b5b4d, trim: 0xffffff, base: 0x8a8580, roofType: 'gable', ridge: 'v', rise: 3.6, overhang: 0.5,
        windows: { front: 0, back: 0, left: 1, right: 1 }, sill: 2.6, winH: 0.9, bigDoor: { w: 4.2, h: 3.5 }, doorU: 0,
        interior: 'barn', lootSpots: 3, chest: rng.chance(0.55), kind: 'barn', corners: true, cornerColor: 0xffffff, ridgeCap: false,
      };
    }
    default: {   // cottage
      const w = rng.range(7.4, 9.6), d = rng.range(6.2, 8.0);
      return {
        w, d, H: rng.range(2.9, 3.2), wall, roof, trim: pal.trim, base: pal.base, roofType: 'gable', ridge: rng.chance(0.5) ? 'u' : 'v',
        rise: 0.42 * Math.min(w, d) + 0.3, windows: { front: 2, back: 1, left: 1, right: 1 }, doorU: rng.range(-1.2, 1.2),
        porch: rng.chance(0.55), chimney: rng.chance(0.75) && pal.chimney, shutters: rng.chance(0.5) && rng.pick(pal.shutters), flowers: rng.chance(0.45),
        interior: 'home', lootSpots: 3, chest: rng.chance(0.3), bands: null, kind: 'cottage', mat: pal.metal ? 'metal' : 'wood',
      };
    }
  }
}

const rectsOverlap = (a, b, m = 0) => a.minX - m < b.maxX && a.maxX + m > b.minX && a.minZ - m < b.maxZ && a.maxZ + m > b.minZ;

export function generateTown(env, town) {
  const { terrain, physics } = env;
  const rng = new Rng(env.seed ^ hashStr(town.id));
  const pal = PALETTES[town.style] || PALETTES.suburb;
  const solid = new GeoBuilder(), glass = new GeoBuilder();
  const ctx = { solid, glass, physics, rng, group: env.group, animated: env.animated, lights: [] };
  const out = { town, buildings: [], outdoorSpots: [], blocked: [], streets: [], plazas: [], paths: [], fields: [], yardTrees: [], cars: [] };
  const R = town.pad * 0.9;

  // ---- streets ------------------------------------------------------------------------------------
  const mainZ = town.z + rng.range(-3, 3);
  const crossX = town.x + rng.range(-12, 12);
  const streets = [{ axis: 'x', pos: mainZ, from: town.x - R, to: town.x + R, w: town.big ? 7.5 : 6.5 }];
  if (town.big || town.houses > 8) streets.push({ axis: 'z', pos: crossX, from: town.z - R * 0.85, to: town.z + R * 0.85, w: 6.5 });
  out.streets = streets;
  const corridor = (s, m = 0) => (s.axis === 'x'
    ? { minX: s.from, maxX: s.to, minZ: s.pos - s.w / 2 - m, maxZ: s.pos + s.w / 2 + m }
    : { minX: s.pos - s.w / 2 - m, maxX: s.pos + s.w / 2 + m, minZ: s.from, maxZ: s.to });
  for (const st of streets) out.blocked.push({ type: 'rect', ...corridor(st, 2.2) });
  const lots = [];
  const groundOK = (r, doorPt) => {
    let hmin = 1e9, hmax = -1e9;
    const pts = [[r.minX, r.minZ], [r.maxX, r.minZ], [r.minX, r.maxZ], [r.maxX, r.maxZ], [(r.minX + r.maxX) / 2, (r.minZ + r.maxZ) / 2]];
    if (doorPt) pts.push(doorPt);
    for (const [x, z] of pts) { const h = terrain.heightAt(x, z); hmin = Math.min(hmin, h); hmax = Math.max(hmax, h); }
    return { ok: hmin > 1.4 && hmax - hmin < 0.85, hmin, hmax };
  };

  const pickKind = () => rng.weighted(MIX[town.style] || MIX.suburb);
  let placed = 0;
  const maxHouses = town.houses;
  for (let pass = 0; pass < 2 && placed < maxHouses; pass++) {
    for (const st of streets) {
      for (const side of rng.shuffle([-1, 1])) {
        let cursor = st.from + rng.range(1, 7);
        let guard = 0;
        while (cursor < st.to - 5 && placed < maxHouses && guard++ < 40) {
          let kind = pickKind();
          if (kind === 'shop' && st !== streets[0]) kind = 'cottage';
          const spec = makeSpec(kind, rng, pal);
          const w = spec.w, d = spec.d;
          const along = cursor + w / 2;
          const off = st.w / 2 + rng.range(3.4, 4.6) + d / 2;
          let x, z, face;
          if (st.axis === 'x') { x = along; z = st.pos + side * off; face = side > 0 ? 0 : 2; }
          else { z = along; x = st.pos + side * off; face = side > 0 ? 3 : 1; }
          // footprint rect (world)
          const swap = face === 1 || face === 3;
          const hx = (swap ? d : w) / 2, hz = (swap ? w : d) / 2;
          const rect = { minX: x - hx, maxX: x + hx, minZ: z - hz, maxZ: z + hz };
          // reject: overlaps other lots, other streets, outside the pad, on water or too steep
          const dTown = Math.hypot(x - town.x, z - town.z);
          const front = [[0, -1], [1, 0], [0, 1], [-1, 0]][face];
          const doorPt = [x + front[0] * (hx + 1.7), z + front[1] * (hz + 1.7)];
          const gnd = groundOK(rect, doorPt);
          const rn = terrain.nearestRoad(x, z, 24);
          const bad = dTown > town.pad * 0.95 || !gnd.ok || lots.some((l) => rectsOverlap(l.rect, rect, 2.6)) ||
            streets.some((o) => o !== st && rectsOverlap(corridor(o, 1.2), rect)) ||
            (rn && rn.dist < Math.hypot(hx, hz) + rn.width / 2 + 1);
          if (bad) { cursor += 5; continue; }
          const floorY = gnd.hmax + 0.14;
          const b = buildBlock(ctx, {
            ...spec, x, z, face, floorY, groundMin: gnd.hmin,
            wall: tint(spec.wall, rng, 0.05), kind: spec.kind,
          });
          b.town = town.id;
          b.kindName = kind;
          lots.push({ rect, b });
          out.buildings.push(b);
          out.blocked.push({ type: 'rect', ...b.rect });
          placed++;
          // mailbox + front path + fences
          const [px, pz] = [x + front[0] * (hx + 0.2), z + front[1] * (hz + 0.2)];
          out.paths.push({ x0: px, z0: pz, x1: st.axis === 'x' ? px : st.pos, z1: st.axis === 'x' ? st.pos : pz, w: 1.8 });
          if (town.style === 'suburb' && rng.chance(0.5)) {
            const gy = terrain.heightAt(x, z);
            const fx0 = rect.minX - 1.6, fx1 = rect.maxX + 1.6, fz0 = rect.minZ - 1.6, fz1 = rect.maxZ + 1.6;
            // low front-yard fences on the two lateral sides only (keeps door path open)
            if (st.axis === 'x') { P.fence(ctx, fx0, fz0 + (side > 0 ? 0 : 0), fx0, fz1, gy); P.fence(ctx, fx1, fz0, fx1, fz1, gy); }
            else { P.fence(ctx, fx0, fz0, fx1, fz0, gy); P.fence(ctx, fx0, fz1, fx1, fz1, gy); }
          }
          cursor += w + rng.range(3.2, 8.5);
        }
      }
    }
  }

  // ---- outdoor props ------------------------------------------------------------------------------------
  const groundAt = (x, z) => terrain.heightAt(x, z);
  const freeSpot = (x, z, m = 2.5) => !lots.some((l) => rectsOverlap(l.rect, { minX: x - 0.6, maxX: x + 0.6, minZ: z - 0.6, maxZ: z + 0.6 }, m));

  // lamps along streets
  for (const st of streets) {
    for (let a = st.from + 8; a < st.to - 4; a += 19) {
      for (const side of [-1, 1]) {
        const off = side * (st.w / 2 + 0.9);
        const x = st.axis === 'x' ? a + (side > 0 ? 6 : 0) : st.pos + off;
        const z = st.axis === 'x' ? st.pos + off : a + (side > 0 ? 6 : 0);
        if (!freeSpot(x, z, 0.5)) continue;
        if (Math.hypot(x - town.x, z - town.z) > town.pad) continue;
        const cl = streets.find((o) => o !== st && rectsOverlap(corridor(o, 0.5), { minX: x - .3, maxX: x + .3, minZ: z - .3, maxZ: z + .3 }));
        if (cl) continue;
        P.lamp(ctx, x, z, groundAt(x, z));
      }
    }
  }
  // benches
  for (let i = 0; i < (town.big ? 5 : 2); i++) {
    const st = rng.pick(streets), a = rng.range(st.from + 10, st.to - 10), side = rng.chance(0.5) ? 1 : -1;
    const x = st.axis === 'x' ? a : st.pos + side * (st.w / 2 + 1.6), z = st.axis === 'x' ? st.pos + side * (st.w / 2 + 1.6) : a;
    if (!freeSpot(x, z, 1) || streets.some((o) => o !== st && rectsOverlap(corridor(o, 1), { minX: x - 1, maxX: x + 1, minZ: z - 1, maxZ: z + 1 }))) continue;
    P.bench(ctx, x, z, groundAt(x, z), st.axis === 'x');
  }
  // plaza / well at the street crossing
  if (streets.length > 1) {
    const px = streets[1].pos, pz = streets[0].pos, gy = groundAt(px, pz);
    out.plazas.push({ x: px, z: pz, r: 10 });
    out.blocked.push({ type: 'circle', x: px, z: pz, r: 12 });
    if (town.big) P.fountain(ctx, px, pz, gy); else P.well(ctx, px, pz, gy);
  }

  // parked cars (harvestable metal) – positions recorded for the dynamic prop set
  const carCount = town.big ? 4 : 2;
  for (let i = 0; i < carCount; i++) {
    const st = streets[0], a = rng.range(st.from + 12, st.to - 12), side = rng.chance(0.5) ? 1 : -1;
    const x = a, z = st.pos + side * (st.w / 2 - 1.6);
    if (streets.some((o) => o !== st && rectsOverlap(corridor(o, 3), { minX: x - 3, maxX: x + 3, minZ: z - 2, maxZ: z + 2 }))) continue;
    out.cars.push({ x, z, y: groundAt(x, z), alongX: true, color: rng.pick([0xe8534a, 0x3d8bd9, 0xf0c41c, 0x2fae6c, 0xffffff, 0x8a5ad9]) });
  }

  // ---- style specials ------------------------------------------------------------------------------------------
  const special = (x, z, w = 8, h = 8) => ({ minX: x - w, maxX: x + w, minZ: z - h, maxZ: z + h });
  const tryPlace = (fn, x, z, hw, hh) => {
    const r = special(x, z, hw, hh);
    if (Math.hypot(x - town.x, z - town.z) > town.pad + 14) return false;
    if (lots.some((l) => rectsOverlap(l.rect, r, 1)) || streets.some((o) => rectsOverlap(corridor(o, 1), r))) return false;
    const g = terrain.heightAt(x, z);
    if (g < 1.4) return false;
    fn(g);
    out.blocked.push({ type: 'rect', ...r });
    lots.push({ rect: r, b: null });
    return true;
  };
  if (town.style === 'suburb') {
    for (let k = 0; k < 30; k++) {
      const a = rng.range(0, Math.PI * 2), rr = town.pad * rng.range(0.85, 1.05);
      if (tryPlace((g) => P.waterTower(ctx, town.x + Math.cos(a) * rr, town.z + Math.sin(a) * rr, g), town.x + Math.cos(a) * rr, town.z + Math.sin(a) * rr, 5, 5)) break;
    }
  }
  if (town.style === 'farm') {
    let ws = 0;
    for (let k = 0; k < 60 && ws < 3; k++) {
      const a = rng.range(0, Math.PI * 2), rr = rng.range(12, town.pad * 0.9);
      const x = town.x + Math.cos(a) * rr, z = town.z + Math.sin(a) * rr;
      const kind = ws === 0 ? 'windmill' : 'silo';
      if (tryPlace((g) => (kind === 'windmill' ? P.windmill(ctx, x, z, g, rng) : P.silo(ctx, x, z, g)), x, z, kind === 'windmill' ? 6 : 4.5, kind === 'windmill' ? 6 : 4.5)) ws++;
    }
    for (let k = 0; k < 8; k++) {
      const a = rng.range(0, Math.PI * 2), rr = rng.range(10, town.pad * 0.9);
      const x = town.x + Math.cos(a) * rr, z = town.z + Math.sin(a) * rr;
      tryPlace((g) => P.hayBale(ctx, x, z, g), x, z, 1.6, 1.6);
    }
    // crop fields on the outskirts
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + rng.range(-0.3, 0.3), rr = town.pad + rng.range(18, 40);
      const fx = town.x + Math.cos(a) * rr, fz = town.z + Math.sin(a) * rr;
      if (terrain.heightAt(fx, fz) < 3) continue;
      out.fields.push({ x: fx, z: fz, w: rng.range(30, 46), d: rng.range(24, 36), kind: k % 3, horizontal: rng.chance(0.5) });
    }
  }
  if (town.style === 'harbor' || town.style === 'fishing') {
    // pier(s) running out to sea from the shore nearest the town centre (sea = away from island centre)
    const ang = Math.atan2(town.z, town.x);
    const dirx = Math.cos(ang), dirz = Math.sin(ang);
    const horiz = Math.abs(dirx) > Math.abs(dirz);
    const sx = Math.sign(horiz ? dirx : dirz) || 1;
    for (let k = 0; k < (town.style === 'harbor' ? 2 : 1); k++) {
      // find the shore along this axis
      let px = town.x + (horiz ? 0 : (k ? 16 : -12)), pz = town.z + (horiz ? (k ? 16 : -12) : 0);
      let steps = 0;
      while (terrain.heightAt(px, pz) > 0.2 && steps++ < 200) { if (horiz) px += sx * 2; else pz += sx * 2; }
      const len = 30 + rng.range(0, 14);
      const ex = horiz ? px + sx * len : px, ez = horiz ? pz : pz + sx * len;
      P.dock(ctx, horiz ? px - sx * 6 : px, horiz ? pz : pz - sx * 6, ex, ez, 1.15, 3.4);
      out.blocked.push({ type: 'rect', minX: Math.min(px, ex) - 6, maxX: Math.max(px, ex) + 6, minZ: Math.min(pz, ez) - 6, maxZ: Math.max(pz, ez) + 6 });
      // boats alongside
      for (let b = 0; b < 2; b++) {
        const t = 0.35 + b * 0.35;
        const bx = horiz ? px + sx * len * t : px + (b ? 4.2 : -4.2), bz = horiz ? pz + (b ? 4.2 : -4.2) : pz + sx * len * t;
        P.boat(ctx, bx, bz, horiz, rng.pick([0xe8534a, 0x3d8bd9, 0xffffff, 0xf0c41c]));
      }
      out.dockEnd = { x: ex, z: ez };
    }
    if (town.style === 'harbor') {
      // container yard
      for (let k = 0; k < 8; k++) {
        const a = rng.range(0, Math.PI * 2), rr = rng.range(14, town.pad * 0.8);
        const x = town.x + Math.cos(a) * rr, z = town.z + Math.sin(a) * rr, alongX = rng.chance(0.5);
        const stack = rng.chance(0.4) ? 2 : 1;
        const r = special(x, z, alongX ? 4 : 2.6, alongX ? 2.6 : 4);
        if (lots.some((l) => rectsOverlap(l.rect, r, 1.5)) || streets.some((o) => rectsOverlap(corridor(o, 1.5), r)) || terrain.heightAt(x, z) < 1.6) continue;
        P.container(ctx, x, z, terrain.heightAt(x, z), alongX, rng.pick([0xd9483b, 0x2f7fc4, 0xf0a81c, 0x2fae6c, 0x7a5ad9, 0xe8e8e8]), stack);
        lots.push({ rect: r, b: null });
        out.blocked.push({ type: 'rect', ...r });
      }
    }
  }
  if (town.style === 'lodge' || town.style === 'autumn') {
    for (let k = 0; k < 4; k++) {
      const a = rng.range(0, Math.PI * 2), rr = rng.range(10, town.pad * 0.85);
      const x = town.x + Math.cos(a) * rr, z = town.z + Math.sin(a) * rr;
      tryPlace((g) => P.tent(ctx, x, z, g, rng.pick([0xe8534a, 0x3d8bd9, 0xf0a81c, 0x2fae6c])), x, z, 2.4, 2.4);
    }
  }

  // outdoor loot spots (streets + yards)
  for (let k = 0; k < Math.round(town.houses * 0.9); k++) {
    const st = rng.pick(streets), a = rng.range(st.from + 6, st.to - 6), side = rng.chance(0.5) ? 1 : -1;
    const off = side * (st.w / 2 + rng.range(1.2, 6));
    const x = st.axis === 'x' ? a : st.pos + off, z = st.axis === 'x' ? st.pos + off : a;
    if (!freeSpot(x, z, 0.4)) continue;
    if (streets.some((o) => o !== st && rectsOverlap(corridor(o, 0.5), { minX: x - .3, maxX: x + .3, minZ: z - .3, maxZ: z + .3 }))) continue;
    const y = groundAt(x, z);
    if (y < 1.4) continue;
    out.outdoorSpots.push({ x, z, y });
  }

  // yard trees (fed to the scatter system)
  for (let k = 0; k < Math.round(town.pad * 0.28); k++) {
    const a = rng.range(0, Math.PI * 2), rr = Math.sqrt(rng.float()) * town.pad * 1.02;
    const x = town.x + Math.cos(a) * rr, z = town.z + Math.sin(a) * rr;
    if (!freeSpot(x, z, 3.4)) continue;
    if (streets.some((s) => rectsOverlap(corridor(s, 3.5), { minX: x - .5, maxX: x + .5, minZ: z - .5, maxZ: z + .5 }))) continue;
    if (out.plazas.some((p) => Math.hypot(x - p.x, z - p.z) < p.r + 3)) continue;
    if (terrain.heightAt(x, z) < 1.8) continue;
    out.yardTrees.push({ x, z });
  }

  // ---- meshes ---------------------------------------------------------------------------------------------------
  const mesh = solid.build(solidMaterial());
  mesh.castShadow = true; mesh.receiveShadow = true;
  mesh.name = `town-${town.id}`;
  env.group.add(mesh);
  if (!glass.empty) {
    const gm = glass.build(new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.32, depthWrite: false, side: THREE.DoubleSide }));
    gm.renderOrder = 3;
    env.group.add(gm);
  }
  out.lights = ctx.lights;
  return out;
}

/** Non-town landmarks (lighthouse etc.). */
export function generateLandmark(env, lm) {
  const { terrain, physics } = env;
  const rng = new Rng(env.seed ^ hashStr(lm.id));
  const solid = new GeoBuilder();
  const ctx = { solid, glass: new GeoBuilder(), physics, rng, group: env.group, animated: env.animated, lights: [] };
  const y = terrain.heightAt(lm.x, lm.z);
  const out = { lm, buildings: [], outdoorSpots: [], blocked: [{ type: 'circle', x: lm.x, z: lm.z, r: 13 }], yardTrees: [], cars: [], paths: [], fields: [], streets: [], plazas: [] };
  if (lm.type === 'lighthouse') {
    P.lighthouse(ctx, lm.x, lm.z, y);
    out.outdoorSpots.push({ x: lm.x - 5.5, z: lm.z + 1.5, y: terrain.heightAt(lm.x - 5.5, lm.z + 1.5) }, { x: lm.x + 3, z: lm.z + 6, y: terrain.heightAt(lm.x + 3, lm.z + 6) });
    const cx = lm.x + 11.5;      // outside the base hut (which spans x+4.5 … x+9.5)
    out.chestSpots = [{ x: cx, z: lm.z, y: terrain.heightAt(cx, lm.z) + 0.02, yaw: Math.PI / 2 }];
  }
  const mesh = solid.build(solidMaterial());
  mesh.castShadow = true; mesh.receiveShadow = true;
  env.group.add(mesh);
  return out;
}

/** Paint streets, plazas, front paths and fields into the terrain colour canvas. */
export function paintTown(ctx2d, S, half, town, out) {
  const X = (x) => (x + half) * S, Z = (z) => (z + half) * S;
  ctx2d.lineCap = 'butt';
  const dirt = town.style === 'farm' || town.style === 'lodge' || town.style === 'autumn';

  // fields first (under everything else)
  const fieldCols = [['#e2b93f', '#c9962b'], ['#69b83a', '#4a9a2c'], ['#d9772b', '#b85c1e']];
  for (const f of out.fields) {
    const [c1, c2] = fieldCols[f.kind % 3];
    const x0 = f.x - f.w / 2, z0 = f.z - f.d / 2;
    ctx2d.fillStyle = '#6b4a2a';
    ctx2d.fillRect(X(x0 - 1), Z(z0 - 1), (f.w + 2) * S, (f.d + 2) * S);
    const rows = Math.floor((f.horizontal ? f.d : f.w) / 1.6);
    for (let i = 0; i < rows; i++) {
      ctx2d.fillStyle = i % 2 ? c1 : c2;
      if (f.horizontal) ctx2d.fillRect(X(x0), Z(z0 + i * 1.6), f.w * S, 1.3 * S);
      else ctx2d.fillRect(X(x0 + i * 1.6), Z(z0), 1.3 * S, f.d * S);
    }
  }

  for (const s of out.streets) {
    const draw = (w, style, dash) => {
      ctx2d.beginPath();
      if (s.axis === 'x') { ctx2d.moveTo(X(s.from), Z(s.pos)); ctx2d.lineTo(X(s.to), Z(s.pos)); }
      else { ctx2d.moveTo(X(s.pos), Z(s.from)); ctx2d.lineTo(X(s.pos), Z(s.to)); }
      ctx2d.setLineDash(dash || []);
      ctx2d.lineWidth = w * S;
      ctx2d.strokeStyle = style;
      ctx2d.stroke();
    };
    if (dirt) { draw(s.w + 3, 'rgba(140,110,70,0.28)'); draw(s.w + 0.6, '#bd935c'); draw(s.w * 0.55, 'rgba(206,166,110,0.65)'); }
    else {
      draw(s.w + 5.2, '#c9c6bd');          // sidewalk
      draw(s.w + 3.6, '#a6a49d');          // kerb
      draw(s.w, '#585c66');                // asphalt
      draw(0.26, '#f2d24a', [3 * S, 4 * S]);
    }
  }
  ctx2d.setLineDash([]);
  for (const p of out.plazas) {
    ctx2d.fillStyle = dirt ? '#c9a878' : '#cfc9bb';
    ctx2d.beginPath(); ctx2d.arc(X(p.x), Z(p.z), p.r * S, 0, Math.PI * 2); ctx2d.fill();
    ctx2d.strokeStyle = dirt ? '#b08c5c' : '#b3ad9f'; ctx2d.lineWidth = 0.35 * S;
    for (const r of [p.r * 0.62, p.r * 0.85]) { ctx2d.beginPath(); ctx2d.arc(X(p.x), Z(p.z), r * S, 0, Math.PI * 2); ctx2d.stroke(); }
  }
  for (const pth of out.paths) {
    ctx2d.beginPath(); ctx2d.moveTo(X(pth.x0), Z(pth.z0)); ctx2d.lineTo(X(pth.x1), Z(pth.z1));
    ctx2d.lineWidth = pth.w * S; ctx2d.strokeStyle = dirt ? '#c9a878' : '#d6d1c4'; ctx2d.stroke();
  }
  // soft foundations / yards under buildings
  for (const b of out.buildings) {
    const r = b.rect;
    ctx2d.fillStyle = dirt ? 'rgba(170,140,95,0.55)' : 'rgba(205,200,186,0.5)';
    ctx2d.fillRect(X(r.minX + 0.2), Z(r.minZ + 0.2), (r.maxX - r.minX - 0.4) * S, (r.maxZ - r.minZ - 0.4) * S);
  }
}
