// Static decoration + landmarks built into the shared town geometry buckets.
import * as THREE from 'three';
import { GeoBuilder, solidMaterial } from '../gfx/geo.js';
import { boxW } from './buildings.js';

const shade = (hex, k) => new THREE.Color(hex).multiplyScalar(k);

export function lamp(ctx, x, z, y, o = {}) {
  const h = 4.6;
  ctx.solid.cylinder(x, y, z, 0.13, h, 6, o.pole ?? 0x3b4252, { dark: 0.9 });
  ctx.solid.cylinder(x, y, z, 0.24, 0.35, 6, 0x2a2f3a);
  // arm + lamp head
  ctx.solid.box(x - 0.6, y + h - 0.12, z - 0.06, x + 0.06, y + h, z + 0.06, o.pole ?? 0x3b4252);
  ctx.solid.box(x - 0.85, y + h - 0.22, z - 0.2, x - 0.4, y + h - 0.06, z + 0.2, 0xfff4c2, { dark: 1 });
  ctx.physics.addCylinder(x, z, 0.2, y - 0.3, y + h, { kind: 'prop', material: 'metal' });
  ctx.lights?.push({ x: x - 0.6, y: y + h - 0.3, z });
}

export function bench(ctx, x, z, y, alongX = true) {
  const c = 0x9b6a3c, l = 0x3b4252;
  const hx = alongX ? 0.95 : 0.3, hz = alongX ? 0.3 : 0.95;
  ctx.solid.box(x - hx, y + 0.42, z - hz, x + hx, y + 0.5, z + hz, c);
  if (alongX) {
    ctx.solid.box(x - hx, y + 0.5, z + hz - 0.06, x + hx, y + 1.0, z + hz, c);
    for (const sx of [-0.8, 0.8]) ctx.solid.box(x + sx - 0.05, y, z - hz, x + sx + 0.05, y + 0.42, z + hz, l);
  } else {
    ctx.solid.box(x + hx - 0.06, y + 0.5, z - hz, x + hx, y + 1.0, z + hz, c);
    for (const sz of [-0.8, 0.8]) ctx.solid.box(x - hx, y, z + sz - 0.05, x + hx, y + 0.42, z + sz + 0.05, l);
  }
  ctx.physics.addBox(x - hx, x + hx, z - hz, z + hz, y, y + 0.5, { walkable: true, kind: 'prop', material: 'wood' });
}

export function mailbox(ctx, x, z, y, color = 0xd94a4a) {
  ctx.solid.box(x - 0.04, y, z - 0.04, x + 0.04, y + 1.0, z + 0.04, 0x6b4a2a);
  ctx.solid.box(x - 0.2, y + 1.0, z - 0.14, x + 0.2, y + 1.3, z + 0.14, color);
}

/** Decorative picket fence (no collision so AI never gets snagged). */
export function fence(ctx, x0, z0, x1, z1, y, color = 0xffffff, h = 0.95) {
  const len = Math.hypot(x1 - x0, z1 - z0);
  const n = Math.max(1, Math.round(len / 0.9));
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
    ctx.solid.box(x - 0.04, y, z - 0.04, x + 0.04, y + h, z + 0.04, color, { dark: 0.9 });
  }
  // rails
  const horiz = Math.abs(x1 - x0) > Math.abs(z1 - z0);
  for (const ry of [0.3, 0.7]) {
    if (horiz) ctx.solid.box(Math.min(x0, x1), y + ry, z0 - 0.02, Math.max(x0, x1), y + ry + 0.08, z0 + 0.02, color, { dark: 0.95 });
    else ctx.solid.box(x0 - 0.02, y + ry, Math.min(z0, z1), x0 + 0.02, y + ry + 0.08, Math.max(z0, z1), color, { dark: 0.95 });
  }
}

export function waterTower(ctx, x, z, y) {
  const legH = 11, r = 3.0;
  const leg = 0x8a929c;
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    ctx.solid.box(x + sx * 2.0 - 0.18, y - 0.4, z + sz * 2.0 - 0.18, x + sx * 2.0 + 0.18, y + legH, z + sz * 2.0 + 0.18, leg);
    ctx.physics.addCylinder(x + sx * 2.0, z + sz * 2.0, 0.28, y - 0.4, y + legH, { kind: 'prop', material: 'metal' });
  }
  // cross braces (visual)
  for (const yy of [3.5, 7.0]) {
    ctx.solid.box(x - 2.0, y + yy, z - 2.05, x + 2.0, y + yy + 0.12, z - 1.95, leg);
    ctx.solid.box(x - 2.0, y + yy, z + 1.95, x + 2.0, y + yy + 0.12, z + 2.05, leg);
    ctx.solid.box(x - 2.05, y + yy, z - 2.0, x - 1.95, y + yy + 0.12, z + 2.0, leg);
    ctx.solid.box(x + 1.95, y + yy, z - 2.0, x + 2.05, y + yy + 0.12, z + 2.0, leg);
  }
  ctx.solid.cylinder(x, y + legH, z, r, 4.6, 14, 0x4aa3d9, { bottom: true });
  ctx.solid.cylinder(x, y + legH + 4.6, z, r + 0.2, 0.3, 14, 0x2e78a8, { dark: 1 });
  ctx.solid.cone(x, y + legH + 4.85, z, r + 0.25, 1.8, 14, 0xd94a4a);
  ctx.physics.addCylinder(x, z, r, y + legH, y + legH + 5, { kind: 'prop', material: 'metal', walkable: true });
  // ladder stripe
  ctx.solid.box(x + 2.05, y, z - 0.15, x + 2.25, y + legH, z + 0.15, 0x444a55);
}

export function silo(ctx, x, z, y, color = 0xcfd6dd) {
  ctx.solid.cylinder(x, y - 0.3, z, 2.7, 11, 14, color, { dark: 0.85 });
  for (let i = 1; i < 5; i++) ctx.solid.cylinder(x, y + i * 2.2, z, 2.76, 0.16, 14, 0x9aa3ad, { dark: 1 });
  ctx.solid.cone(x, y + 10.7, z, 2.9, 2.2, 14, 0xb0432f);
  ctx.physics.addCylinder(x, z, 2.7, y - 0.3, y + 10.7, { kind: 'prop', material: 'metal', walkable: false });
}

export function hayBale(ctx, x, z, y, r = 0.9) {
  ctx.solid.cylinder(x, y, z, r, 1.3, 10, 0xe8c25a, { bottom: true, dark: 0.85 });
  ctx.solid.cylinder(x, y + 0.42, z, r + 0.02, 0.08, 10, 0xc99a3a, { dark: 1 });
  ctx.solid.cylinder(x, y + 0.86, z, r + 0.02, 0.08, 10, 0xc99a3a, { dark: 1 });
  ctx.physics.addCylinder(x, z, r, y, y + 1.3, { kind: 'prop', material: 'wood', walkable: true });
}

export function windmill(ctx, x, z, y, rng) {
  const base = 0xf0e6d2, cap = 0xb0432f;
  const h = 13;
  ctx.solid.cylinder(x, y - 0.4, z, 3.2, h, 10, base, { r1: 1.9, dark: 0.82 });
  ctx.solid.cylinder(x, y + h - 0.4, z, 2.05, 0.4, 10, 0x8a6a4a, { dark: 1 });
  ctx.solid.cone(x, y + h, z, 2.3, 2.6, 10, cap);
  // door + windows
  ctx.solid.box(x - 0.6, y - 0.1, z + 2.95, x + 0.6, y + 2.0, z + 3.35, 0x7a4a26, { dark: 1 });
  ctx.physics.addCylinder(x, z, 3.0, y - 0.4, y + h, { kind: 'prop', material: 'wood', walkable: false });
  // blades group (rotates)
  const b = new GeoBuilder();
  const bladeC = 0xf5f0e6, frameC = 0x8a5a2b;
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const ca = Math.cos(a), sa = Math.sin(a);
    // long spar
    const spar = (len, w, ox, oy) => {
      // quad in XY plane at z=0 rotated by angle a
      const p = (px, py) => [ox + px * ca - py * sa, oy + px * sa + py * ca, 0];
      const zf = 0.18;
      const v = [p(0.4, -w / 2), p(len, -w / 2), p(len, w / 2), p(0.4, w / 2)];
      const front = v.map((q) => [q[0], q[1], zf]), back = v.map((q) => [q[0], q[1], -zf]);
      b.quad(front[0], front[1], front[2], front[3], frameC, [0, 0, 1]);
      b.quad(back[0], back[1], back[2], back[3], frameC, [0, 0, -1]);
      return p;
    };
    spar(8.6, 0.28, 0, 0);
    // sail panel offset from spar
    const pp = (px, py) => [px * ca - py * sa, px * sa + py * ca, 0.06];
    const sail = [pp(1.8, 0.14), pp(8.4, 0.14), pp(8.4, 1.7), pp(1.8, 1.7)];
    b.quad(sail[0], sail[1], sail[2], sail[3], bladeC, [0, 0, 1]);
    b.quad(sail[0], sail[1], sail[2], sail[3], bladeC, [0, 0, -1]);
  }
  b.box(-0.45, -0.45, -0.5, 0.45, 0.45, 0.6, 0x6b4a2a);
  const mesh = new THREE.Mesh(b.build(), solidMaterial({ side: THREE.DoubleSide }));
  mesh.position.set(x, y + h - 1.2, z + 3.1);
  mesh.castShadow = true;
  ctx.group.add(mesh);
  ctx.animated.push({ obj: mesh, axis: 'z', speed: 0.55 + rng.float() * 0.2 });
}

export function lighthouse(ctx, x, z, y) {
  const segs = 5, segH = 4.4;
  for (let i = 0; i < segs; i++) {
    const r0 = 3.3 - i * 0.28, r1 = 3.3 - (i + 1) * 0.28;
    ctx.solid.cylinder(x, y + i * segH, z, r0, segH, 14, i % 2 ? 0xd94a4a : 0xffffff, { r1, dark: 0.9 });
  }
  const top = y + segs * segH;
  ctx.solid.cylinder(x, top, z, 3.2, 0.5, 14, 0x2b3038, { dark: 1 });                 // gallery deck
  ctx.solid.cylinder(x, top + 0.5, z, 2.0, 2.6, 12, 0xffe9a0, { dark: 1 });           // lamp room glow
  ctx.solid.cylinder(x, top + 3.1, z, 2.3, 0.35, 12, 0x2b3038, { dark: 1 });
  ctx.solid.cone(x, top + 3.45, z, 2.3, 2.2, 12, 0xd94a4a);
  ctx.physics.addCylinder(x, z, 3.2, y - 0.5, top + 0.5, { kind: 'prop', material: 'stone', walkable: true });
  // base hut
  ctx.solid.box(x + 4.5, y - 0.5, z - 2.2, x + 9.5, y + 3.0, z + 2.2, 0xf0e6d2);
  ctx.solid.box(x + 4.3, y + 3.0, z - 2.4, x + 9.7, y + 3.35, z + 2.4, 0xb0432f);
  ctx.physics.addBox(x + 4.5, x + 9.5, z - 2.2, z + 2.2, y - 0.5, y + 3.35, { kind: 'building', material: 'wood', walkable: true });
}

export function container(ctx, x, z, y, alongX, color, stack = 1) {
  const L = 6.0, W = 2.4, Hh = 2.6;
  const hx = alongX ? L / 2 : W / 2, hz = alongX ? W / 2 : L / 2;
  for (let i = 0; i < stack; i++) {
    const y0 = y + i * Hh;
    ctx.solid.box(x - hx, y0, z - hz, x + hx, y0 + Hh, z + hz, color, { dark: 0.85, bottom: true });
    // corrugation ribs (visual)
    const rc = shade(color, 0.86);
    for (let k = 0; k < 8; k++) {
      const t = -L / 2 + 0.4 + k * (L - 0.8) / 7;
      if (alongX) {
        ctx.solid.box(x + t - 0.06, y0 + 0.1, z - hz - 0.03, x + t + 0.06, y0 + Hh - 0.1, z - hz, rc, { dark: 1 });
        ctx.solid.box(x + t - 0.06, y0 + 0.1, z + hz, x + t + 0.06, y0 + Hh - 0.1, z + hz + 0.03, rc, { dark: 1 });
      } else {
        ctx.solid.box(x - hx - 0.03, y0 + 0.1, z + t - 0.06, x - hx, y0 + Hh - 0.1, z + t + 0.06, rc, { dark: 1 });
        ctx.solid.box(x + hx, y0 + 0.1, z + t - 0.06, x + hx + 0.03, y0 + Hh - 0.1, z + t + 0.06, rc, { dark: 1 });
      }
    }
  }
  ctx.physics.addBox(x - hx, x + hx, z - hz, z + hz, y, y + Hh * stack, { kind: 'prop', material: 'metal', walkable: true });
}

/** Wooden pier extending from (x0,z0) to (x1,z1) over water (axis-aligned). */
export function dock(ctx, x0, z0, x1, z1, deckY = 1.15, width = 3.2) {
  const horiz = Math.abs(x1 - x0) > Math.abs(z1 - z0);
  const minX = horiz ? Math.min(x0, x1) : x0 - width / 2, maxX = horiz ? Math.max(x0, x1) : x0 + width / 2;
  const minZ = horiz ? z0 - width / 2 : Math.min(z0, z1), maxZ = horiz ? z0 + width / 2 : Math.max(z0, z1);
  ctx.solid.box(minX, deckY - 0.22, minZ, maxX, deckY, maxZ, 0xb98a52, { bottom: true, dark: 0.9 });
  ctx.physics.addBox(minX, maxX, minZ, maxZ, deckY - 0.3, deckY, { kind: 'prop', material: 'wood', walkable: true });
  // plank lines
  const len = horiz ? maxX - minX : maxZ - minZ;
  for (let s = 0.6; s < len; s += 0.6) {
    if (horiz) ctx.solid.box(minX + s - 0.02, deckY, minZ, minX + s + 0.02, deckY + 0.015, maxZ, 0x8a6236, { dark: 1 });
    else ctx.solid.box(minX, deckY, minZ + s - 0.02, maxX, deckY + 0.015, minZ + s + 0.02, 0x8a6236, { dark: 1 });
  }
  // posts
  for (let s = 0; s <= len; s += 3.2) {
    for (const side of [-1, 1]) {
      const px = horiz ? minX + s : x0 + side * (width / 2 - 0.1);
      const pz = horiz ? z0 + side * (width / 2 - 0.1) : minZ + s;
      ctx.solid.box(px - 0.14, -3.0, pz - 0.14, px + 0.14, deckY + 0.7, pz + 0.14, 0x6b4a2a, { dark: 0.85 });
      ctx.solid.box(px - 0.18, deckY + 0.7, pz - 0.18, px + 0.18, deckY + 0.78, pz + 0.18, 0x8a8f99, { dark: 1 });
    }
  }
}

export function boat(ctx, x, z, alongX, color, y = 0.05) {
  const L = 5.2, W = 2.0;
  const hx = alongX ? L / 2 : W / 2, hz = alongX ? W / 2 : L / 2;
  ctx.solid.box(x - hx, y - 0.5, z - hz, x + hx, y + 0.65, z + hz, color, { dark: 0.8, bottom: true });
  ctx.solid.box(x - hx - 0.02, y + 0.5, z - hz - 0.02, x + hx + 0.02, y + 0.68, z + hz + 0.02, 0xffffff, { dark: 1 });
  // cabin
  const cx = alongX ? x - 0.5 : x, cz = alongX ? z : z - 0.5;
  ctx.solid.box(cx - 0.7, y + 0.68, cz - 0.6, cx + 0.7, y + 1.7, cz + 0.6, 0xf5f2ea);
  ctx.solid.box(cx - 0.8, y + 1.7, cz - 0.7, cx + 0.8, y + 1.82, cz + 0.7, shade(color, 0.7));
  ctx.physics.addBox(x - hx, x + hx, z - hz, z + hz, y - 0.5, y + 0.68, { kind: 'prop', material: 'wood', walkable: true });
  ctx.physics.addBox(cx - 0.7, cx + 0.7, cz - 0.6, cz + 0.6, y + 0.68, y + 1.82, { kind: 'prop', material: 'wood', walkable: true });
}

export function well(ctx, x, z, y) {
  ctx.solid.cylinder(x, y, z, 1.1, 0.9, 10, 0x9a9aa2, { bottom: true });
  ctx.solid.cylinder(x, y + 0.85, z, 0.85, 0.06, 10, 0x2a6d9c, { dark: 1 });
  for (const s of [-1, 1]) ctx.solid.box(x + s * 1.0 - 0.07, y + 0.9, z - 0.07, x + s * 1.0 + 0.07, y + 2.3, z + 0.07, 0x7a4a26);
  ctx.solid.box(x - 1.25, y + 2.3, z - 0.12, x + 1.25, y + 2.42, z + 0.12, 0x7a4a26);
  ctx.solid.pyramid(x - 1.45, z - 0.9, x + 1.45, z + 0.9, y + 2.42, 0.8, 0xb0432f);
  ctx.physics.addCylinder(x, z, 1.1, y, y + 0.95, { kind: 'prop', material: 'stone', walkable: true });
}

export function fountain(ctx, x, z, y) {
  ctx.solid.cylinder(x, y, z, 3.4, 0.75, 16, 0xcfd4dc, { bottom: true });
  ctx.solid.cylinder(x, y + 0.7, z, 3.0, 0.1, 16, 0x37b6e6, { dark: 1 });
  ctx.solid.cylinder(x, y, z, 0.7, 2.4, 10, 0xe4e7ec, { r1: 0.5 });
  ctx.solid.cylinder(x, y + 2.2, z, 1.5, 0.3, 12, 0xcfd4dc, { r1: 1.1 });
  ctx.solid.cylinder(x, y + 2.5, z, 0.2, 1.0, 8, 0x8fd8ff, { r1: 0.06, dark: 1 });
  ctx.physics.addCylinder(x, z, 3.4, y, y + 0.75, { kind: 'prop', material: 'stone', walkable: true });
  ctx.physics.addCylinder(x, z, 0.7, y + 0.75, y + 2.6, { kind: 'prop', material: 'stone' });
}

export function tent(ctx, x, z, y, color) {
  ctx.solid.pyramid(x - 1.6, z - 1.6, x + 1.6, z + 1.6, y, 2.0, color);
  ctx.physics.addCylinder(x, z, 1.5, y, y + 1.4, { kind: 'prop', material: 'wood' });
}

export function signPost(ctx, x, z, y, color = 0xffd23f) {
  ctx.solid.box(x - 0.06, y, z - 0.06, x + 0.06, y + 2.1, z + 0.06, 0x6b4a2a);
  ctx.solid.box(x - 0.6, y + 1.5, z - 0.05, x + 0.6, y + 2.05, z + 0.05, color);
}

export function bush(ctx, x, z, y, color) {
  ctx.solid.cylinder(x, y, z, 0.55, 0.55, 7, color, { r1: 0.36, dark: 0.7 });
}
