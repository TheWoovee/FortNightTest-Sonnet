// Ground-level navigation for bots: a lazily evaluated 1 m grid over the island plus A* with string-pulling.
// A cell is "free" when a character cylinder fits there (no collider in the way, not deep water). Cells are evaluated
// on first use and cached; building / destroying pieces invalidates the cells around them.
import { WORLD } from '../config.js';

const CS = 1;                         // cell size (m)
const N = WORLD.size / CS;
const HALF = WORLD.half;
const CLEAR_R = 0.36;                 // a hair under the actor radius (0.4) so 1.7 m doorways stay passable
const CLEAR_H = 1.7;
const STEP = 0.45;
const SQRT2 = Math.SQRT2;
const DX = [1, -1, 0, 0, 1, 1, -1, -1];
const DZ = [0, 0, 1, -1, 1, -1, 1, -1];

/** Binary min-heap of (priority, node) pairs stored in parallel arrays. */
class Heap {
  constructor() { this.k = []; this.v = []; }
  get size() { return this.k.length; }
  clear() { this.k.length = 0; this.v.length = 0; }
  push(key, val) {
    const k = this.k, v = this.v;
    let i = k.length;
    k.push(key); v.push(val);
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (k[p] <= key) break;
      k[i] = k[p]; v[i] = v[p]; i = p;
    }
    k[i] = key; v[i] = val;
  }
  pop() {
    const k = this.k, v = this.v;
    const top = v[0];
    const lk = k.pop(), lv = v.pop();
    const n = k.length;
    if (n > 0) {
      let i = 0;
      for (;;) {
        let c = 2 * i + 1;
        if (c >= n) break;
        if (c + 1 < n && k[c + 1] < k[c]) c++;
        if (k[c] >= lk) break;
        k[i] = k[c]; v[i] = v[c]; i = c;
      }
      k[i] = lk; v[i] = lv;
    }
    return top;
  }
}

export class Nav {
  constructor(game) {
    this.game = game;
    this.cell = new Uint8Array(N * N);        // 0 unknown, 1 free, 2 blocked
    this.gScore = new Float32Array(N * N);
    this.parent = new Int32Array(N * N);
    this.seen = new Uint32Array(N * N);       // A* generation stamps (avoids clearing the big arrays)
    this.gen = 0;
    this.heap = new Heap();
    this.queries = 0;                          // path queries this frame (bots defer when the budget is spent)
    this.stats = { queries: 0, expanded: 0, failed: 0 };
  }

  /** Forget everything (new match: pieces, harvested props and doors changed). */
  reset() { this.cell.fill(0); }

  /** Reset cells touched by a world box so they get re-evaluated (call when pieces appear / disappear). */
  invalidate(minX, maxX, minZ, maxZ, pad = 0.6) {
    const x0 = Math.max(0, this.ix(minX - pad)), x1 = Math.min(N - 1, this.ix(maxX + pad));
    const z0 = Math.max(0, this.ix(minZ - pad)), z1 = Math.min(N - 1, this.ix(maxZ + pad));
    for (let z = z0; z <= z1; z++) this.cell.fill(0, z * N + x0, z * N + x1 + 1);
  }

  ix(x) { return Math.floor((x + HALF) / CS); }
  wx(i) { return (i + 0.5) * CS - HALF; }

  canQuery() { return this.queries < 1; }

  // ---- cell evaluation ------------------------------------------------------------------------------------------------------
  free(ix, iz) {
    if (ix < 1 || iz < 1 || ix >= N - 1 || iz >= N - 1) return false;
    const i = iz * N + ix;
    let s = this.cell[i];
    if (s === 0) { s = this._eval(ix, iz) ? 1 : 2; this.cell[i] = s; }
    return s === 1;
  }

  _eval(ix, iz) {
    const g = this.game, T = g.terrain, P = g.physics;
    const x = this.wx(ix), z = this.wx(iz);
    const th = T.heightAt(x, z);
    if (th < -1.2) return false;
    const wl = T.waterLevelAt(x, z);
    if (wl !== null && wl - th > 0.7) return false;                   // too deep to wade
    const gy = P.groundAt(x, z, th + 1.4).y;                           // terrain or a slab / step within reach
    return !P.overlaps(x, gy + 0.02, z, CLEAR_R, CLEAR_H, STEP);
  }

  freeAt(x, z) { return this.free(this.ix(x), this.ix(z)); }

  /** Nearest free cell to (ix, iz) within `r` rings, as [ix, iz] or null. */
  _nearestFree(ix, iz, r) {
    if (this.free(ix, iz)) return [ix, iz];
    for (let k = 1; k <= r; k++) {
      let best = null, bd = 1e9;
      for (let dz = -k; dz <= k; dz++) {
        for (let dx = -k; dx <= k; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== k) continue;
          if (!this.free(ix + dx, iz + dz)) continue;
          const d = dx * dx + dz * dz;
          if (d < bd) { bd = d; best = [ix + dx, iz + dz]; }
        }
      }
      if (best) return best;
    }
    return null;
  }

  // ---- A* ------------------------------------------------------------------------------------------------------------------------------
  /**
   * Route from (sx, sz) to (gx, gz). Returns waypoints [{x, z}, …] (first waypoint is not the start) or null when there is
   * no route within the expansion budget. Goals in blocked cells snap to the nearest free cell.
   */
  findPath(sx, sz, gx, gz, opts = {}) {
    this.queries++;
    this.stats.queries++;
    const maxExpand = opts.maxExpand ?? 4500;
    const s = this._nearestFree(this.ix(sx), this.ix(sz), 2);
    const e = this._nearestFree(this.ix(gx), this.ix(gz), opts.snap ?? 4);
    if (!s || !e) { this.stats.failed++; return null; }
    const sI = s[1] * N + s[0], eI = e[1] * N + e[0];
    if (sI === eI) return [{ x: gx, z: gz }];
    const gen = ++this.gen;
    const { gScore, parent, seen, heap } = this;
    heap.clear();
    seen[sI] = gen; gScore[sI] = 0; parent[sI] = -1;
    const ex = e[0], ez = e[1];
    const hFn = (x, z) => { const dx = Math.abs(x - ex), dz = Math.abs(z - ez); return (dx + dz) + (SQRT2 - 2) * Math.min(dx, dz); };
    heap.push(hFn(s[0], s[1]), sI);
    let expanded = 0, found = false, bestI = sI, bestH = hFn(s[0], s[1]);
    while (heap.size) {
      const cur = heap.pop();
      const cz = (cur / N) | 0, cx = cur - cz * N;
      if (cur === eI) { found = true; break; }
      if (++expanded > maxExpand) break;
      const cg = gScore[cur];
      for (let d = 0; d < 8; d++) {
        const nx = cx + DX[d], nz = cz + DZ[d];
        if (!this.free(nx, nz)) continue;
        if (d >= 4 && !(this.free(cx + DX[d], cz) && this.free(cx, cz + DZ[d]))) continue;     // no corner cutting
        const ni = nz * N + nx;
        // keep some distance from walls where there is room (doorways are still fine, just costlier)
        const hug = !this.free(nx + 1, nz) || !this.free(nx - 1, nz) || !this.free(nx, nz + 1) || !this.free(nx, nz - 1) ? 0.7 : 0;
        const ng = cg + (d < 4 ? 1 : SQRT2) + hug;
        if (seen[ni] === gen && ng >= gScore[ni]) continue;
        seen[ni] = gen; gScore[ni] = ng; parent[ni] = cur;
        const h = hFn(nx, nz);
        if (h < bestH) { bestH = h; bestI = ni; }
        heap.push(ng + h * 1.001, ni);
      }
    }
    this.stats.expanded += expanded;
    let endI = eI;
    if (!found) {
      // budget exhausted: head for the closest node we reached (still useful as an intermediate goal), unless we got nowhere
      if (bestI === sI) { this.stats.failed++; return null; }
      endI = bestI;
    }
    // reconstruct
    const cells = [];
    for (let i = endI; i !== -1; i = parent[i]) cells.push(i);
    cells.reverse();
    const pts = cells.map((i) => { const z = (i / N) | 0; return { x: this.wx(i - z * N), z: this.wx(z) }; });
    const out = this._pull(pts);
    if (found) out[out.length - 1] = { x: gx, z: gz, last: true };
    return out;
  }

  /** String-pulling: drop waypoints that a straight (clearance-checked) segment can skip. */
  _pull(pts) {
    if (pts.length <= 2) return pts.slice(1);
    const out = [];
    let i = 0;
    while (i < pts.length - 1) {
      let j = Math.min(pts.length - 1, i + 40);
      while (j > i + 1 && !this.lineFree(pts[i].x, pts[i].z, pts[j].x, pts[j].z)) j--;
      out.push(pts[j]);
      i = j;
    }
    return out;
  }

  /** Straight segment stays inside free cells (with a little side clearance). */
  lineFree(ax, az, bx, bz) {
    const dx = bx - ax, dz = bz - az;
    const len = Math.hypot(dx, dz);
    if (len < 1e-3) return true;
    const ux = dx / len, uz = dz / len, px = -uz * 0.34, pz = ux * 0.34;
    const n = Math.ceil(len / 0.5);
    for (let k = 0; k <= n; k++) {
      const t = (k / n) * len, x = ax + ux * t, z = az + uz * t;
      if (!this.free(this.ix(x), this.ix(z)) || !this.free(this.ix(x + px), this.ix(z + pz)) || !this.free(this.ix(x - px), this.ix(z - pz))) return false;
    }
    return true;
  }
}
