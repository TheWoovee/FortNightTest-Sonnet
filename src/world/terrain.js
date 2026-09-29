// Pure-data terrain: procedural island heightfield, roads, and fast height/normal queries.
// No THREE / DOM dependencies so it can also be exercised from Node.
import { createNoise } from '../util/noise.js';
import { WORLD } from '../config.js';
import { clamp, lerp, smoothstep, smootherstep, dist2 } from '../util/math.js';
import { buildLayout } from './layout.js';

const tick = () => new Promise((r) => setTimeout(r, 0));

/** Catmull-Rom through control points, returned as evenly-spaced samples. */
function sampleSpline(pts, spacing) {
  const out = [];
  const P = (i) => pts[clamp(i, 0, pts.length - 1)];
  for (let s = 0; s < pts.length - 1; s++) {
    const p0 = P(s - 1), p1 = P(s), p2 = P(s + 1), p3 = P(s + 2);
    const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    const steps = Math.max(2, Math.ceil(len / spacing));
    for (let k = 0; k < steps; k++) {
      const t = k / steps, t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  const last = pts[pts.length - 1];
  out.push([last[0], last[1]]);
  return out;
}

export class Terrain {
  constructor(seed = 20240517) {
    this.seed = seed;
    this.N = createNoise(seed);
    this.n = WORLD.nodes;
    this.cell = WORLD.cell;
    this.half = WORLD.half;
    this.h = new Float32Array(this.n * this.n);
    this.nrm = new Float32Array(this.n * this.n * 3);
    this.layout = buildLayout(this);
    this.roadPts = [];
    this.roadHash = new Map();
    this.ready = false;
  }

  // ---- shape -------------------------------------------------------------------
  coastRadius(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    const N = this.N;
    const v = 1 + 0.26 * N.fbm(c * 0.85 + 11.3, s * 0.85 - 4.7, 3, 2.0, 0.5) + 0.05 * N.noise2(c * 2.3 - 8, s * 2.3 + 21);
    return 452 * v;
  }

  /** Terrain without towns/roads carved in. */
  naturalHeight(x, z) {
    const N = this.N;
    const r = Math.hypot(x, z);
    const th = Math.atan2(z, x);
    const Rs = this.coastRadius(th);
    const d = r / Rs;
    if (d >= 1) {
      const off = (d - 1) * Rs;
      let hh = -26 * (1 - Math.exp(-off / 105));
      hh += 1.4 * N.noise2(x * 0.02 + 4, z * 0.02 - 9) * smoothstep(1, 1.15, d);
      return hh;
    }
    const p = smoothstep(1.0, 0.68, d);
    let h = 9.5 * Math.pow(p, 1.1);
    const env = smoothstep(0.985, 0.6, d);
    const hills = N.fbm(x * 0.0062 + 3.1, z * 0.0062 - 7.7, 4, 2.0, 0.5);
    const bumps = N.fbm(x * 0.021 - 5.5, z * 0.021 + 9.1, 3, 2.1, 0.5);
    h += env * (hills * 14 + bumps * 2.4);

    for (const pk of this.layout.peaks) {
      const q = dist2(x, z, pk.x, pk.z) / (pk.r * pk.r);
      if (q > 7) continue;
      const g = Math.exp(-q * 1.15);
      const rough = 0.82 + 0.42 * N.ridged(x * 0.013 + 20, z * 0.013 - 3, 4, 2.1, 0.5);
      h += pk.h * g * rough + g * g * N.noise2(x * 0.05, z * 0.05) * (pk.h * 0.06);
    }

    for (const lk of this.layout.lakes) {
      const dl = Math.hypot(x - lk.x, z - lk.z);
      const valley = 1 - smoothstep(lk.r * 0.9, lk.r * 3.4, dl);
      h = lerp(h, Math.min(h, lk.level + 3.4), valley * 0.9);
      const bowl = 1 - smoothstep(lk.r * 0.55, lk.r * 1.2, dl);
      h = lerp(h, lk.level - 3.2, bowl);
    }
    return h;
  }

  paddedHeight(x, z) {
    let h = this.naturalHeight(x, z);
    for (const t of this.layout.towns) {
      const d = Math.hypot(x - t.x, z - t.z);
      if (d > t.pad + 30) continue;
      const w = 1 - smootherstep(t.pad, t.pad + 30, d);
      h = lerp(h, t.padH + (h - t.padH) * 0.1, w);
    }
    for (const lm of this.layout.landmarks) {
      const d = Math.hypot(x - lm.x, z - lm.z);
      if (d > 50) continue;
      const w = 1 - smootherstep(14, 44, d);
      h = lerp(h, lm.padH ?? 2.5, w);
    }
    return h;
  }

  finalHeight(x, z) {
    let h = this.paddedHeight(x, z);
    const rn = this.nearestRoad(x, z, 18);
    if (rn) {
      const half = rn.width * 0.5;
      const w = 1 - smootherstep(half + 0.5, half + 11, rn.dist);
      if (w > 0) h = lerp(h, rn.h, w * 0.92);
    }
    return h;
  }

  // ---- roads -----------------------------------------------------------------------
  _buildRoads() {
    // Town pad heights first (average natural height over the pad core).
    for (const t of this.layout.towns) {
      let sum = 0, cnt = 0;
      for (let k = 0; k < 28; k++) {
        const a = (k / 28) * Math.PI * 2, rr = t.pad * 0.55 * Math.sqrt((k % 7 + 1) / 7);
        sum += this.naturalHeight(t.x + Math.cos(a) * rr, t.z + Math.sin(a) * rr);
        cnt++;
      }
      sum += this.naturalHeight(t.x, t.z) * 4; cnt += 4;
      t.padH = Math.max(sum / cnt, t.coastal ? 2.6 : 2.2);
    }
    for (const lm of this.layout.landmarks) lm.padH = Math.max(this.naturalHeight(lm.x, lm.z), 2.6);

    this.roadPts = [];
    this.roadHash.clear();
    this.layout.roads.forEach((road, ri) => {
      const pts = sampleSpline(road.pts, 3);
      // grade: smoothed padded height along the road
      const hs = pts.map((p) => Math.max(this.paddedHeight(p[0], p[1]), 1.0));
      const sm = hs.map((_, i) => {
        let s = 0, c = 0;
        for (let k = -12; k <= 12; k++) { const j = i + k; if (j >= 0 && j < hs.length) { s += hs[j]; c++; } }
        return s / c;
      });
      road.samples = pts.map((p, i) => ({ x: p[0], z: p[1], h: sm[i] }));
      pts.forEach((p, i) => {
        const idx = this.roadPts.length;
        this.roadPts.push({ x: p[0], z: p[1], h: sm[i], w: road.w, ri });
        const key = this._rk(p[0], p[1]);
        let arr = this.roadHash.get(key);
        if (!arr) this.roadHash.set(key, (arr = []));
        arr.push(idx);
      });
    });
  }
  _rk(x, z) { return ((Math.floor(x / 16) + 200) << 10) | (Math.floor(z / 16) + 200); }

  /** Nearest road sample within maxDist → {dist, h, width, ri} or null. */
  nearestRoad(x, z, maxDist = 20) {
    if (!this.roadPts.length) return null;
    const cx = Math.floor(x / 16), cz = Math.floor(z / 16);
    let best = null, bd = maxDist * maxDist;
    for (let dz = -2; dz <= 2; dz++) {
      for (let dx = -2; dx <= 2; dx++) {
        const arr = this.roadHash.get(((cx + dx + 200) << 10) | (cz + dz + 200));
        if (!arr) continue;
        for (const idx of arr) {
          const p = this.roadPts[idx];
          const d2 = dist2(x, z, p.x, p.z);
          if (d2 < bd) { bd = d2; best = p; }
        }
      }
    }
    return best ? { dist: Math.sqrt(bd), h: best.h, width: best.w, ri: best.ri } : null;
  }

  // ---- generation ---------------------------------------------------------------------
  async generate(onProgress) {
    this._buildRoads();
    const n = this.n, c = this.cell, half = this.half;
    for (let j = 0; j < n; j++) {
      const z = -half + j * c;
      for (let i = 0; i < n; i++) this.h[j * n + i] = this.finalHeight(-half + i * c, z);
      if (j % 24 === 23) { onProgress?.(j / n); await tick(); }
    }
    this._computeNormals();
    let top = 0;
    for (let i = 0; i < this.h.length; i++) if (this.h[i] > top) top = this.h[i];
    this.maxH = top + 2;
    this.ready = true;
  }

  _computeNormals() {
    const n = this.n, h = this.h, c = this.cell, nrm = this.nrm;
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        const l = h[j * n + Math.max(i - 1, 0)], r = h[j * n + Math.min(i + 1, n - 1)];
        const u = h[Math.max(j - 1, 0) * n + i], d = h[Math.min(j + 1, n - 1) * n + i];
        const nx = (l - r) / (2 * c), nz = (u - d) / (2 * c);
        const inv = 1 / Math.hypot(nx, 1, nz);
        const k = (j * n + i) * 3;
        nrm[k] = nx * inv; nrm[k + 1] = inv; nrm[k + 2] = nz * inv;
      }
    }
  }

  // ---- queries ---------------------------------------------------------------------------
  /** Height of the rendered (triangulated) surface. */
  heightAt(x, z) {
    const n = this.n, h = this.h;
    let fx = (x + this.half) / this.cell, fz = (z + this.half) / this.cell;
    fx = fx < 0 ? 0 : fx > n - 1.001 ? n - 1.001 : fx;
    fz = fz < 0 ? 0 : fz > n - 1.001 ? n - 1.001 : fz;
    const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j;
    const k = j * n + i;
    const a = h[k], b = h[k + 1], cc = h[k + n], d = h[k + n + 1];
    return u + v <= 1 ? a + u * (b - a) + v * (cc - a) : d + (1 - u) * (cc - d) + (1 - v) * (b - d);
  }

  /** Face normal of the rendered surface written into out[0..2]. */
  normalAt(x, z, out) {
    const n = this.n, h = this.h, c = this.cell;
    let fx = (x + this.half) / c, fz = (z + this.half) / c;
    fx = clamp(fx, 0, n - 1.001); fz = clamp(fz, 0, n - 1.001);
    const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j;
    const k = j * n + i;
    const a = h[k], b = h[k + 1], cc = h[k + n], d = h[k + n + 1];
    let dx, dz;
    if (u + v <= 1) { dx = (b - a) / c; dz = (cc - a) / c; } else { dx = (d - cc) / c; dz = (d - b) / c; }
    const inv = 1 / Math.hypot(dx, 1, dz);
    out[0] = -dx * inv; out[1] = inv; out[2] = -dz * inv;
    return out;
  }

  slopeAt(x, z) {
    const e = 2;
    const dx = this.heightAt(x + e, z) - this.heightAt(x - e, z);
    const dz = this.heightAt(x, z + e) - this.heightAt(x, z - e);
    return Math.hypot(dx, dz) / (2 * e);
  }

  /** True when (x,z) is on dry land at least `margin` above sea level. */
  isLand(x, z, margin = 0.5) { return this.heightAt(x, z) > margin; }

  /** Which body of water covers this point, if any → water surface height or null. */
  waterLevelAt(x, z) {
    const h = this.heightAt(x, z);
    for (const lk of this.layout.lakes) {
      if (Math.hypot(x - lk.x, z - lk.z) < lk.r * 1.6 && h < lk.level) return lk.level;
    }
    return h < WORLD.seaLevel ? WORLD.seaLevel : null;
  }

  townAt(x, z, extra = 0) {
    for (const t of this.layout.towns) if (Math.hypot(x - t.x, z - t.z) < t.pad + extra) return t;
    return null;
  }
}
