// Procedural building kit. Everything is authored in a local frame (u across the front wall, v depth from
// front→back) and mapped onto axis-aligned world boxes, so all colliders stay AABBs.
import * as THREE from 'three';

/** face: 0 = door faces -z (north), 1 = +x (east), 2 = +z (south), 3 = -x (west) */
export class Frame {
  constructor(cx, cz, face, w, d) {
    this.cx = cx; this.cz = cz; this.face = face; this.w = w; this.d = d;
  }
  map(u, v) {
    const { cx, cz, face: f, d } = this;
    switch (f) {
      case 0: return [cx - u, cz - d / 2 + v];
      case 1: return [cx + d / 2 - v, cz - u];
      case 2: return [cx + u, cz + d / 2 - v];
      default: return [cx - d / 2 + v, cz + u];
    }
  }
  rect(u0, u1, v0, v1) {
    const a = this.map(u0, v0), b = this.map(u1, v1);
    return { minX: Math.min(a[0], b[0]), maxX: Math.max(a[0], b[0]), minZ: Math.min(a[1], b[1]), maxZ: Math.max(a[1], b[1]) };
  }
  /** world axis ('x'|'z') that local axis 'u'|'v' lies along */
  axisOf(l) {
    const swap = this.face === 1 || this.face === 3;
    if (l === 'u') return swap ? 'z' : 'x';
    return swap ? 'x' : 'z';
  }
  /** outward world direction of the front (door) side */
  get front() { return [[0, -1], [1, 0], [0, 1], [-1, 0]][this.face]; }
  /** world footprint */
  footprint() { return this.rect(-this.w / 2, this.w / 2, 0, this.d); }
}

export function boxL(ctx, F, u0, u1, v0, v1, y0, y1, color, o = {}) {
  const r = F.rect(u0, u1, v0, v1);
  ctx.solid.box(r.minX, y0, r.minZ, r.maxX, y1, r.maxZ, color, o);
  if (o.collide !== false) {
    ctx.physics.addBox(r.minX, r.maxX, r.minZ, r.maxZ, y0, y1, {
      walkable: !!o.walkable, kind: 'building', material: o.mat || 'wood', blocksBullets: o.bullets !== false,
    });
  }
  return r;
}

/** World-space box helper (visual + collider). */
export function boxW(ctx, x0, x1, z0, z1, y0, y1, color, o = {}) {
  ctx.solid.box(x0, y0, z0, x1, y1, z1, color, o);
  if (o.collide !== false) {
    ctx.physics.addBox(x0, x1, z0, z1, y0, y1, {
      walkable: !!o.walkable, kind: o.kind || 'building', material: o.mat || 'wood', blocksBullets: o.bullets !== false,
    });
  }
}

const shade = (hex, k) => {
  const c = new THREE.Color(hex);
  c.multiplyScalar(k);
  return c;
};
export const tint = (hex, rng, amt = 0.06) => shade(hex, 1 + (rng.float() - 0.5) * 2 * amt);

/**
 * A wall run with openings. axis 'u': spans u∈[from,to] at v∈[lo,hi]; axis 'v': spans v∈[from,to] at u∈[lo,hi].
 * openings: [{c, w, y0, y1, glass, frame}] (c = centre along the run).
 */
export function wallRun(ctx, F, axis, lo, hi, from, to, yb, yt, color, openings = [], o = {}) {
  const emit = (a0, a1, y0, y1) => {
    if (a1 - a0 < 0.02 || y1 - y0 < 0.02) return;
    if (axis === 'u') boxL(ctx, F, a0, a1, lo, hi, y0, y1, color, { mat: o.mat, ...o.box });
    else boxL(ctx, F, lo, hi, a0, a1, y0, y1, color, { mat: o.mat, ...o.box });
  };
  const ops = [...openings].sort((a, b) => a.c - b.c);
  let cur = from;
  for (const op of ops) {
    const a0 = op.c - op.w / 2, a1 = op.c + op.w / 2;
    emit(cur, a0, yb, yt);
    emit(a0, a1, yb, op.y0);
    emit(a0, a1, op.y1, yt);
    cur = a1;
    // frame + glass
    const trim = o.trim ?? 0xffffff;
    const fw = 0.09, mid = (lo + hi) / 2;
    const f0 = lo - 0.04, f1 = hi + 0.04;
    const face = (x0, x1, y0, y1) => {
      if (axis === 'u') boxL(ctx, F, x0, x1, f0, f1, y0, y1, trim, { collide: false, dark: 0.95 });
      else boxL(ctx, F, f0, f1, x0, x1, y0, y1, trim, { collide: false, dark: 0.95 });
    };
    if (op.frame !== false) {
      face(a0 - 0.02, a0 + fw, op.y0, op.y1);
      face(a1 - fw, a1 + 0.02, op.y0, op.y1);
      face(a0 - 0.02, a1 + 0.02, op.y1 - fw, op.y1 + 0.03);
      if (op.y0 > yb + 0.3) face(a0 - 0.02, a1 + 0.02, op.y0 - 0.03, op.y0 + fw * 0.6);
    }
    if (op.glass) {
      const pane = (uu, vv) => { const p = F.map(uu, vv); return p; };
      const y0 = op.y0 + 0.06, y1 = op.y1 - 0.06;
      let A, B;
      if (axis === 'u') { A = pane(a0 + 0.05, mid); B = pane(a1 - 0.05, mid); } else { A = pane(mid, a0 + 0.05); B = pane(mid, a1 - 0.05); }
      const q = [[A[0], y0, A[1]], [B[0], y0, B[1]], [B[0], y1, B[1]], [A[0], y1, A[1]]];
      ctx.glass.quad(q[0], q[1], q[2], q[3], 0xbfe6ff, [0, 0, 1]);
      ctx.glass.quad(q[0], q[1], q[2], q[3], 0xbfe6ff, [0, 0, -1]);
      ctx.glass.quad(q[0], q[1], q[2], q[3], 0xbfe6ff, [1, 0, 0]);
      ctx.glass.quad(q[0], q[1], q[2], q[3], 0xbfe6ff, [-1, 0, 0]);
    }
  }
  emit(cur, to, yb, yt);
}

function distributeWindows(n, from, to, avoid, w) {
  const out = [];
  if (n <= 0) return out;
  for (let i = 0; i < n; i++) {
    const c = from + ((i + 1) / (n + 1)) * (to - from);
    if (avoid != null && Math.abs(c - avoid) < (w + 1.9) / 2) continue;
    out.push(c);
  }
  return out;
}

/**
 * Generic building: walls with openings, floor, ceiling, roof, optional porch/chimney/shutters/stairs.
 * Returns metadata for nav/loot.
 */
export function buildBlock(ctx, s) {
  const { rng } = ctx;
  const F = new Frame(s.x, s.z, s.face, s.w, s.d);
  const t = s.t ?? 0.26;
  const H = s.H;
  const stories = s.stories || 1;
  const floorY = s.floorY;
  const top = floorY + H * stories;
  const halfW = s.w / 2;
  const wallC = s.wall, trimC = s.trim ?? 0xf7f3ea;
  const woodMat = s.mat || 'wood';

  // foundation + floor
  const fx = boxL(ctx, F, -halfW - 0.12, halfW + 0.12, -0.12, s.d + 0.12, s.groundMin - 0.6, floorY, s.base ?? 0x9a9a9f, { mat: 'stone', dark: 0.8, collide: true, walkable: false });
  boxL(ctx, F, -halfW + t, halfW - t, t, s.d - t, floorY - 0.02, floorY + 0.12, s.floor ?? 0xc79a5f, { walkable: true, dark: 1, mat: 'wood', collide: false });
  // walkable floor collider spanning the whole footprint (incl. under the walls) so thresholds are stepable
  const fr = F.rect(-halfW, halfW, 0, s.d);
  ctx.physics.addBox(fr.minX, fr.maxX, fr.minZ, fr.maxZ, floorY - 0.5, floorY + 0.12, { walkable: true, kind: 'building', material: 'wood' });

  // door / windows
  const doorW = s.bigDoor ? s.bigDoor.w : 1.7, doorH = s.bigDoor ? s.bigDoor.h : 2.45;
  const doorU = s.doorU ?? 0;
  const doorOp = { c: doorU, w: doorW, y0: floorY + 0.12, y1: floorY + 0.12 + doorH, frame: true };
  const wm = s.winW ?? 1.4, sill = s.sill ?? 0.95, wh = s.winH ?? 1.2;
  const mkWin = (c, level = 0) => ({ c, w: wm, y0: floorY + level * H + sill, y1: floorY + level * H + sill + wh, glass: true });
  const wins = s.windows || { front: 1, back: 1, left: 1, right: 1 };
  const frontOps = [doorOp];
  const backOps = [], leftOps = [], rightOps = [];
  for (let lvl = 0; lvl < stories; lvl++) {
    for (const c of distributeWindows(wins.front, -halfW + t, halfW - t, lvl === 0 ? doorU : null, wm)) frontOps.push(mkWin(c, lvl));
    for (const c of distributeWindows(wins.back, -halfW + t, halfW - t, null, wm)) backOps.push(mkWin(c, lvl));
    for (const c of distributeWindows(wins.left, t, s.d - t, null, wm)) leftOps.push(mkWin(c, lvl));
    for (const c of distributeWindows(wins.right, t, s.d - t, null, wm)) rightOps.push(mkWin(c, lvl));
  }
  if (s.backDoor) backOps.push({ c: s.backDoor, w: 1.5, y0: floorY + 0.12, y1: floorY + 0.12 + 2.3, frame: true });

  const yb = floorY + 0.12, yt = top;
  const wo = { trim: trimC, mat: woodMat };
  wallRun(ctx, F, 'u', 0, t, -halfW, halfW, yb, yt, wallC, frontOps, wo);
  wallRun(ctx, F, 'u', s.d - t, s.d, -halfW, halfW, yb, yt, wallC, backOps, wo);
  wallRun(ctx, F, 'v', -halfW, -halfW + t, t, s.d - t, yb, yt, wallC, leftOps, wo);
  wallRun(ctx, F, 'v', halfW - t, halfW, t, s.d - t, yb, yt, wallC, rightOps, wo);

  // log stripes / siding bands (cheap visual detail on the outer faces)
  if (s.bands) {
    const bandH = s.bandH ?? 0.42;
    const bc = s.bands;
    for (let y = yb + bandH * 0.5; y < yt - 0.2; y += bandH) {
      // thin protruding bands on the 4 outer faces, skipped where openings are (approx: only on solid pillars is too fiddly → draw full bands behind trim)
      const y1 = Math.min(y + 0.09, yt);
      // front/back faces
      const cut = (ops, u0, u1) => {
        // split [u0,u1] around openings whose vertical span intersects the band
        const segs = []; let cur = u0;
        const hit = ops.filter((o) => y1 > o.y0 - 0.02 && y < o.y1 + 0.02).sort((a, b) => a.c - b.c);
        for (const o of hit) { segs.push([cur, o.c - o.w / 2 - 0.1]); cur = o.c + o.w / 2 + 0.1; }
        segs.push([cur, u1]);
        return segs.filter((sg) => sg[1] - sg[0] > 0.05);
      };
      for (const [a, b] of cut(frontOps, -halfW - 0.02, halfW + 0.02)) boxL(ctx, F, a, b, -0.035, 0, y, y1, bc, { collide: false, dark: 1 });
      for (const [a, b] of cut(backOps, -halfW - 0.02, halfW + 0.02)) boxL(ctx, F, a, b, s.d, s.d + 0.035, y, y1, bc, { collide: false, dark: 1 });
      for (const [a, b] of cut(leftOps, 0, s.d)) boxL(ctx, F, -halfW - 0.035, -halfW, a, b, y, y1, bc, { collide: false, dark: 1 });
      for (const [a, b] of cut(rightOps, 0, s.d)) boxL(ctx, F, halfW, halfW + 0.035, a, b, y, y1, bc, { collide: false, dark: 1 });
    }
  }

  // corner posts
  if (s.corners !== false) {
    const cc = s.cornerColor ?? trimC;
    for (const [u, v] of [[-halfW, 0], [halfW - 0.2, 0], [-halfW, s.d - 0.2], [halfW - 0.2, s.d - 0.2]]) {
      boxL(ctx, F, u - 0.03, u + 0.23, v - 0.03, v + 0.23, floorY + 0.1, top, cc, { collide: false, dark: 0.92 });
    }
  }

  // ceiling(s) + intermediate floor
  const ceilColor = s.ceiling ?? 0xf3ead8;
  boxL(ctx, F, -halfW + t, halfW - t, t, s.d - t, top - 0.16, top, ceilColor, { collide: false, bottom: true, dark: 1 });
  const cr = F.rect(-halfW + t, halfW - t, t, s.d - t);
  ctx.physics.addBox(cr.minX, cr.maxX, cr.minZ, cr.maxZ, top - 0.16, top, { walkable: false, kind: 'building', material: 'wood' });

  let stairs = null;
  if (stories === 2) {
    const fy = floorY + H;
    const holeV0 = s.d - t - 3.7, holeU1 = -halfW + t + 1.25;
    // upper floor pieces (with stairwell hole)
    boxL(ctx, F, -halfW + t, halfW - t, t, holeV0, fy - 0.14, fy, s.floor ?? 0xc79a5f, { walkable: true, bottom: true, dark: 1, mat: 'wood' });
    boxL(ctx, F, holeU1, halfW - t, holeV0, s.d - t, fy - 0.14, fy, s.floor ?? 0xc79a5f, { walkable: true, bottom: true, dark: 1, mat: 'wood' });
    // stairs: smooth ramp collider + stepped visual
    const r = F.rect(-halfW + t, holeU1, holeV0, s.d - t);
    const axis = F.axisOf('v');
    // low end at v = holeV0. Determine dir: world direction of +v along axis
    const p0 = F.map(0, holeV0), p1 = F.map(0, s.d - t);
    const dirPos = axis === 'x' ? p1[0] > p0[0] : p1[1] > p0[1];
    ctx.physics.addRamp(r.minX, r.maxX, r.minZ, r.maxZ, floorY + 0.1, floorY + 0.12, fy, axis, dirPos ? 1 : -1, { kind: 'building', material: 'wood' });
    const steps = 13;
    for (let i = 0; i < steps; i++) {
      const v0 = holeV0 + (i / steps) * (s.d - t - holeV0), v1 = holeV0 + ((i + 1) / steps) * (s.d - t - holeV0);
      boxL(ctx, F, -halfW + t, holeU1, v0, v1, floorY + 0.12, floorY + 0.12 + ((i + 1) / steps) * (H - 0.12), 0xb98a52, { collide: false, dark: 0.9 });
    }
    // banister
    boxL(ctx, F, holeU1 - 0.04, holeU1 + 0.04, holeV0, s.d - t, fy + 0.05, fy + 0.95, 0x8a5a2b, { collide: false });
    stairs = { fy };
  }

  // roof
  const overhang = s.overhang ?? 0.6;
  const roofC = s.roof;
  const fp = F.footprint();
  const rt = s.roofType || 'gable';
  if (rt === 'gable') {
    const ridgeWorld = F.axisOf(s.ridge || 'u');
    const rise = s.rise ?? Math.min(s.w, s.d) * 0.38;
    const oh = overhang, go = 0.35, drop = 0.25;
    ctx.solid.gable(fp.minX, fp.minZ, fp.maxX, fp.maxZ, top, rise, ridgeWorld, roofC, wallC, oh, go, drop);
    // colliders: two sloped slabs
    if (ridgeWorld === 'x') {
      const zc = (fp.minZ + fp.maxZ) / 2;
      ctx.physics.addRamp(fp.minX - go, fp.maxX + go, fp.minZ - oh, zc, top - drop - 0.3, top - drop, top + rise, 'z', 1, { kind: 'building', material: 'wood' });
      ctx.physics.addRamp(fp.minX - go, fp.maxX + go, zc, fp.maxZ + oh, top - drop - 0.3, top - drop, top + rise, 'z', -1, { kind: 'building', material: 'wood' });
    } else {
      const xc = (fp.minX + fp.maxX) / 2;
      ctx.physics.addRamp(fp.minX - oh, xc, fp.minZ - go, fp.maxZ + go, top - drop - 0.3, top - drop, top + rise, 'x', 1, { kind: 'building', material: 'wood' });
      ctx.physics.addRamp(xc, fp.maxX + oh, fp.minZ - go, fp.maxZ + go, top - drop - 0.3, top - drop, top + rise, 'x', -1, { kind: 'building', material: 'wood' });
    }
    s._rise = rise;
    // ridge cap
    if (s.ridgeCap !== false) {
      const rc = shade(roofC, 0.8);
      if (ridgeWorld === 'x') ctx.solid.box(fp.minX - go, top + rise - 0.08, (fp.minZ + fp.maxZ) / 2 - 0.16, fp.maxX + go, top + rise + 0.1, (fp.minZ + fp.maxZ) / 2 + 0.16, rc);
      else ctx.solid.box((fp.minX + fp.maxX) / 2 - 0.16, top + rise - 0.08, fp.minZ - go, (fp.minX + fp.maxX) / 2 + 0.16, top + rise + 0.1, fp.maxZ + go, rc);
    }
  } else if (rt === 'flat') {
    const oh = s.flatOverhang ?? 0.3;
    ctx.solid.box(fp.minX - oh, top, fp.minZ - oh, fp.maxX + oh, top + 0.28, fp.maxZ + oh, roofC, { bottom: true });
    ctx.physics.addBox(fp.minX - oh, fp.maxX + oh, fp.minZ - oh, fp.maxZ + oh, top - 0.05, top + 0.28, { walkable: true, kind: 'building', material: 'stone' });
    // parapet (visual)
    const pc = shade(roofC, 0.85);
    const pw = 0.14, ph = 0.5;
    ctx.solid.box(fp.minX - oh, top + 0.28, fp.minZ - oh, fp.maxX + oh, top + 0.28 + ph, fp.minZ - oh + pw, pc);
    ctx.solid.box(fp.minX - oh, top + 0.28, fp.maxZ + oh - pw, fp.maxX + oh, top + 0.28 + ph, fp.maxZ + oh, pc);
    ctx.solid.box(fp.minX - oh, top + 0.28, fp.minZ - oh + pw, fp.minX - oh + pw, top + 0.28 + ph, fp.maxZ + oh - pw, pc);
    ctx.solid.box(fp.maxX + oh - pw, top + 0.28, fp.minZ - oh + pw, fp.maxX + oh, top + 0.28 + ph, fp.maxZ + oh - pw, pc);
  } else if (rt === 'shed') {
    // single slope rising toward the back
    const rise = s.rise ?? 1.3;
    const c = lin3(roofC);
    const oh = 0.5;
    const A = F.map(-halfW - oh, -oh), B = F.map(halfW + oh, -oh), C = F.map(halfW + oh, s.d + oh), D = F.map(-halfW - oh, s.d + oh);
    ctx.solid.quad([A[0], top - 0.1, A[1]], [B[0], top - 0.1, B[1]], [C[0], top + rise, C[1]], [D[0], top + rise, D[1]], c, [0, 1, 0], 0.9, 0.9, 1, 1);
    ctx.solid.quad([A[0], top - 0.2, A[1]], [B[0], top - 0.2, B[1]], [C[0], top + rise - 0.1, C[1]], [D[0], top + rise - 0.1, D[1]], c.map((v) => v * 0.5), [0, -1, 0]);
    const rr = F.rect(-halfW - oh, halfW + oh, -oh, s.d + oh);
    const axis = F.axisOf('v');
    const pa = F.map(0, -oh), pb = F.map(0, s.d + oh);
    const dirPos = axis === 'x' ? pb[0] > pa[0] : pb[1] > pa[1];
    ctx.physics.addRamp(rr.minX, rr.maxX, rr.minZ, rr.maxZ, top - 0.3, top - 0.1, top + rise, axis, dirPos ? 1 : -1, { kind: 'building', material: 'metal' });
    // fill the triangular side walls
    for (const sgn of [-1, 1]) {
      const u = sgn * halfW;
      const p0 = F.map(u, 0), p1 = F.map(u, s.d);
      ctx.solid.tri([p0[0], top, p0[1]], [p1[0], top, p1[1]], [p1[0], top + rise - 0.1, p1[1]], wallC, [sgn * (F.front[1] ? 1 : 0), 0, sgn * (F.front[0] ? 1 : 0)]);
    }
  }

  // porch
  if (s.porch) {
    const pu = doorU, pw = s.porchW ?? 3.4, pd = s.porchD ?? 1.7;
    boxL(ctx, F, pu - pw / 2, pu + pw / 2, -pd, 0, floorY - 0.02, floorY + 0.14, s.porchColor ?? 0xb98a52, { walkable: true, mat: 'wood', dark: 0.95 });
    // steps
    boxL(ctx, F, pu - 0.9, pu + 0.9, -pd - 0.55, -pd, floorY - 0.32, floorY - 0.02, 0xa9a9ad, { walkable: true, mat: 'stone' });
    if (s.porchRoof !== false) {
      const y = floorY + 2.75;
      boxL(ctx, F, pu - pw / 2 - 0.15, pu + pw / 2 + 0.15, -pd - 0.15, 0.05, y, y + 0.16, s.porchRoof ?? s.roof, { walkable: true, dark: 0.9, mat: 'wood' });
      for (const uu of [pu - pw / 2 + 0.1, pu + pw / 2 - 0.2]) boxL(ctx, F, uu, uu + 0.12, -pd + 0.05, -pd + 0.17, floorY + 0.14, y, trimC, { collide: false });
    } else {
      // low picket rail
    }
  } else if (!s.bigDoor) {
    // simple stoop
    boxL(ctx, F, doorU - 1.1, doorU + 1.1, -0.9, 0, floorY - 0.02, floorY + 0.1, 0xb9b9be, { walkable: true, mat: 'stone', dark: 0.9 });
    boxL(ctx, F, doorU - 1.1, doorU + 1.1, -1.7, -0.9, floorY - 0.45, floorY - 0.02, 0xa5a5aa, { walkable: true, mat: 'stone', dark: 0.9 });
  }
  if (s.bigDoor) {
    boxL(ctx, F, doorU - s.bigDoor.w / 2 - 1.0, doorU + s.bigDoor.w / 2 + 1.0, -1.6, 0, floorY - 0.1, floorY + 0.1, 0xb9b9be, { walkable: true, mat: 'stone', dark: 0.9 });
  }

  // chimney
  if (s.chimney && rt === 'gable') {
    const cu = (s.chimneyU ?? -halfW * 0.5), cv = s.d * 0.62;
    const rise = s._rise ?? 2;
    const ridgeAlongU = (s.ridge || 'u') === 'u';
    // place chimney at the ridge line
    const cuu = ridgeAlongU ? cu : 0, cvv = ridgeAlongU ? s.d / 2 : cv;
    boxL(ctx, F, cuu - 0.4, cuu + 0.4, cvv - 0.4, cvv + 0.4, top + 0.2, top + rise + 1.0, s.chimney, { collide: false, dark: 0.85 });
    boxL(ctx, F, cuu - 0.5, cuu + 0.5, cvv - 0.5, cvv + 0.5, top + rise + 0.95, top + rise + 1.15, 0x555560, { collide: false });
  }

  // shutters + flower boxes on front windows
  if (s.shutters || s.flowers) {
    for (const op of frontOps) {
      if (!op.glass || op.y0 > floorY + H) continue;
      if (s.shutters) {
        for (const sg of [-1, 1]) {
          const uu = op.c + sg * (op.w / 2 + 0.22);
          boxL(ctx, F, uu - 0.2, uu + 0.2, -0.09, 0, op.y0 - 0.02, op.y1 + 0.02, s.shutters, { collide: false, dark: 0.95 });
        }
      }
      if (s.flowers) {
        boxL(ctx, F, op.c - op.w / 2, op.c + op.w / 2, -0.32, -0.04, op.y0 - 0.3, op.y0 - 0.02, 0x7a4a26, { collide: false });
        for (let i = 0; i < 5; i++) {
          const uu = op.c - op.w / 2 + 0.15 + i * (op.w - 0.3) / 4;
          boxL(ctx, F, uu - 0.11, uu + 0.11, -0.3, -0.08, op.y0 - 0.03, op.y0 + 0.16, rng.pick([0xff6b9a, 0xffd23f, 0xff8a3d, 0xc06bff, 0xffffff]), { collide: false, dark: 1 });
        }
      }
    }
  }

  // awning (shops)
  if (s.awning) {
    const aw = s.awningW ?? s.w - 1.2;
    const y = floorY + 2.85;
    const stripes = 8;
    for (let i = 0; i < stripes; i++) {
      const u0 = -aw / 2 + (i / stripes) * aw, u1 = -aw / 2 + ((i + 1) / stripes) * aw;
      const col = i % 2 ? s.awning : 0xffffff;
      const p0 = F.map(u0, -0.05), p1 = F.map(u1, -0.05), p2 = F.map(u1, -1.7), p3 = F.map(u0, -1.7);
      ctx.solid.quad([p0[0], y, p0[1]], [p1[0], y, p1[1]], [p2[0], y - 0.55, p2[1]], [p3[0], y - 0.55, p3[1]], col, [0, 1, 0], 1, 1, 0.95, 0.95);
      ctx.solid.quad([p0[0], y - 0.06, p0[1]], [p1[0], y - 0.06, p1[1]], [p2[0], y - 0.61, p2[1]], [p3[0], y - 0.61, p3[1]], shade(col, 0.6), [0, -1, 0]);
    }
  }
  if (s.sign) {
    const su = s.signU ?? 0;
    boxL(ctx, F, su - 1.6, su + 1.6, -0.12, 0.02, floorY + H + 0.2, floorY + H + 1.05, s.sign, { collide: false });
    boxL(ctx, F, su - 1.45, su + 1.45, -0.14, -0.1, floorY + H + 0.32, floorY + H + 0.93, 0xffffff, { collide: false, dark: 1 });
  }

  // ---- interior ---------------------------------------------------------------------------------------------
  const spots = [];
  const props = [];
  const inner = { u0: -halfW + t + 0.25, u1: halfW - t - 0.25, v0: t + 0.4, v1: s.d - t - 0.25 };
  const fy0 = floorY + 0.12;
  const addProp = (u0, u1, v0, v1, h, color, o = {}) => {
    boxL(ctx, F, u0, u1, v0, v1, fy0 + (o.lift || 0), fy0 + (o.lift || 0) + h, color, { walkable: true, mat: 'wood', collide: o.collide !== false, dark: o.dark ?? 0.9 });
    props.push({ u0, u1, v0, v1 });
  };
  const kind = s.interior || 'home';
  const stairBlock = stories === 2 ? { u0: -halfW + t, u1: -halfW + t + 1.3, v0: s.d - t - 3.75, v1: s.d - t } : null;
  if (stairBlock) props.push(stairBlock);
  if (kind === 'home') {
    const pal = [0xb85c38, 0x5a7fb5, 0xd9b44a, 0x6ea36b];
    const rugC = rng.pick(pal);
    boxL(ctx, F, -1.3, 1.3, s.d * 0.35, s.d * 0.35 + 2.2, fy0, fy0 + 0.02, rugC, { collide: false, dark: 1 });
    // sofa against the back wall
    const sofaU = halfW * 0.35;
    addProp(sofaU - 1.0, sofaU + 1.0, s.d - t - 0.95, s.d - t - 0.1, 0.55, 0x5b6fb5);
    addProp(sofaU - 1.0, sofaU + 1.0, s.d - t - 0.28, s.d - t - 0.1, 1.0, 0x4c5e9c);
    // table + chairs
    const tu = -halfW * 0.4, tv = s.d * 0.42;
    addProp(tu - 0.6, tu + 0.6, tv - 0.4, tv + 0.4, 0.76, 0x9b6a3c);
    addProp(tu - 0.95, tu - 0.65, tv - 0.2, tv + 0.2, 0.45, 0x7a4a26);
    addProp(tu + 0.65, tu + 0.95, tv - 0.2, tv + 0.2, 0.45, 0x7a4a26);
    // shelf on the right wall
    addProp(halfW - t - 0.5, halfW - t - 0.05, s.d * 0.3, s.d * 0.3 + 1.6, 1.9, 0x7c4f2a);
    // bed in back-left corner (single-storey only, else stairs are there)
    if (!stairBlock) addProp(-halfW + t + 0.05, -halfW + t + 1.1, s.d - t - 2.1, s.d - t - 0.05, 0.5, 0xe8e0d0);
    if (stories === 2) {
      const fy = floorY + H + 0.0;
      boxL(ctx, F, halfW * 0.2, halfW * 0.2 + 1.0, t + 0.2, t + 2.2, fy, fy + 0.5, 0xe6dcc8, { walkable: true, collide: true, dark: 0.9 });
    }
  } else if (kind === 'shop') {
    // counter and shelves
    addProp(-halfW + t + 0.4, -halfW + t + 3.6, s.d * 0.45, s.d * 0.45 + 0.7, 1.05, 0x8a5a2b);
    for (let i = 0; i < 3; i++) addProp(halfW - t - 0.55, halfW - t - 0.05, 1.2 + i * 1.8, 2.5 + i * 1.8, 1.9, 0x6f6f78);
    addProp(-halfW + t + 0.05, -halfW + t + 0.55, s.d - t - 2.6, s.d - t - 0.05, 2.0, 0x8a5a2b);
  } else if (kind === 'warehouse') {
    const cols = [0xb87333, 0x8a6a3c, 0xc08a45];
    for (let i = 0; i < 5; i++) {
      const u = -halfW + t + 1.1 + (i % 3) * 2.0, v = s.d - t - 1.4 - Math.floor(i / 3) * 1.6;
      addProp(u - 0.7, u + 0.7, v - 0.7, v + 0.7, 1.4, rng.pick(cols), { dark: 0.95 });
    }
    addProp(halfW - t - 1.6, halfW - t - 0.1, s.d * 0.3, s.d * 0.3 + 4.0, 0.9, 0x6b6f78);
  } else if (kind === 'barn') {
    for (let i = 0; i < 4; i++) {
      const u = -halfW + t + 1.3 + i * 1.7, v = s.d - t - 1.2;
      addProp(u - 0.7, u + 0.7, v - 0.7, v + 0.7, 1.1, 0xe3c35a, { dark: 0.95 });
    }
    addProp(halfW - t - 2.4, halfW - t - 0.1, 0.7, 2.6, 1.0, 0x8a5a2b);
  }

  // loot spots on a coarse grid, skipping props
  const cand = [];
  for (let iu = 0; iu <= 4; iu++) for (let iv = 0; iv <= 4; iv++) {
    cand.push([inner.u0 + (iu / 4) * (inner.u1 - inner.u0), inner.v0 + (iv / 4) * (inner.v1 - inner.v0)]);
  }
  rng.shuffle(cand);
  const free = (u, v) => !props.some((p) => u > p.u0 - 0.5 && u < p.u1 + 0.5 && v > p.v0 - 0.5 && v < p.v1 + 0.5) && !(Math.abs(u - doorU) < 1.3 && v < 1.8);
  for (const [u, v] of cand) {
    if (spots.length >= (s.lootSpots ?? 3)) break;
    if (!free(u, v)) continue;
    const [x, z] = F.map(u, v);
    spots.push({ x, z, y: floorY + 0.12, floor: 0 });
  }
  // chest spot: a corner
  let chest = null;
  if (s.chest) {
    const corners = [[inner.u1 - 0.35, inner.v1 - 0.3], [inner.u0 + 0.35, inner.v1 - 0.3], [inner.u1 - 0.35, inner.v0 + 0.9]];
    for (const [u, v] of corners) {
      if (free(u, v) && !(stairBlock && u < stairBlock.u1 + 0.8 && v > stairBlock.v0 - 0.8)) {
        const [x, z] = F.map(u, v);
        // face the chest toward the room centre
        const [cxr, czr] = F.map(0, s.d / 2);
        chest = { x, z, y: floorY + 0.12, yaw: Math.atan2(cxr - x, czr - z) };
        break;
      }
    }
  }
  const upper = [];
  if (stories === 2) {
    const [x, z] = F.map(halfW * 0.5, s.d * 0.55);
    upper.push({ x, z, y: floorY + H + 0.02, floor: 1 });
  }

  // navigation hints for bots
  const [dx0, dz0] = F.map(doorU, -1.6);
  const [dx1, dz1] = F.map(doorU, 1.4);
  const nav = { doorOut: { x: dx0, z: dz0 }, doorIn: { x: dx1, z: dz1 } };
  if (s.bigDoor) {
    const [ox, oz] = F.map(doorU, -2.6); nav.doorOut = { x: ox, z: oz };
    const [ix, iz] = F.map(doorU, 2.4); nav.doorIn = { x: ix, z: iz };
  }
  const fpw = F.footprint();
  return {
    kind: s.kind || 'house', x: s.x, z: s.z, face: s.face, floorY, top: top, w: s.w, d: s.d,
    rect: { minX: fpw.minX - 1.4, maxX: fpw.maxX + 1.4, minZ: fpw.minZ - 1.4, maxZ: fpw.maxZ + 1.4 },
    spots, upper, chest, nav, stories,
  };
}

const lin3 = (c) => { const k = new THREE.Color(c); return [k.r, k.g, k.b]; };
