// Ground-level navigation for bots: a lazily evaluated 1 m grid over the island plus A* with string-pulling.
// A cell is "free" when a character cylinder fits there (no collider in the way, not deep water). Because thin walls
// (0.26 m) can sit between two free cell centres, every step between neighbouring cells is also tested at its midpoint.
// Doorways get forced-free corridors and their path nodes are snapped onto the door's centre line. Cells are evaluated
// on first use and cached; building / destroying pieces invalidates the cells around them, and bots that get wedged
// can mark the cells ahead as blocked for a while ("learned" blocks).
import { WORLD } from '../config.js';

const CS = 1;                         // cell size (m)
const N = WORLD.size / CS;
const HALF = WORLD.half;
const CLEAR_R = 0.36;                 // a hair under the actor radius (0.4) so 1.7 m doorways stay passable
const CLEAR_H = 1.7;
const STEP = 0.45;
const _n = [0, 1, 0];
const SQRT2 = Math.SQRT2;
const FORCED = 3;                     // door corridor cell: always free, never re-evaluated
const DX = [1, -1, 0, 0, 1, 1, -1, -1];
const DZ = [0, 0, 1, -1, 1, -1, 1, -1];
const LOS = { bullets: false, terrain: false };

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
    this.cell = new Uint8Array(N * N);        // 0 unknown, 1 free, 2 blocked, 3 forced free (door corridor)
    this.edge = new Uint8Array(N * N);        // per cell: bit0/1 = east step computed/passable, bit2/3 = south step computed/passable
    this.gScore = new Float32Array(N * N);
    this.parent = new Int32Array(N * N);
    this.seen = new Uint32Array(N * N);       // A* generation stamps (avoids clearing the big arrays)
    this.gen = 0;
    this.heap = new Heap();
    this.queries = 0;                          // path queries this frame (bots defer when the budget is spent)
    this.doors = new Map();                    // forced cell index → door centre-line segment
    this.learned = [];                         // [{i, until}] cells bots found impassable (oldest first)
    this.stats = { queries: 0, expanded: 0, failed: 0, learned: 0 };
  }

  /** Forget everything (new match: pieces, harvested props and doors changed) and re-force the doorways. */
  reset() {
    this.cell.fill(0);
    this.edge.fill(0);
    this.learned.length = 0;
    this._forceDoors();
  }

  _forceDoors() {
    this.doors.clear();
    for (const b of this.game.world?.buildings || []) {
      const o = b.nav.doorOut, i = b.nav.doorIn;
      const dx = i.x - o.x, dz = i.z - o.z, len = Math.hypot(dx, dz);
      if (len < 0.5) continue;
      const seg = { ax: o.x, az: o.z, ux: dx / len, uz: dz / len, len };
      for (let s = 0; s <= len; s += 0.4) {
        const ix = this.ix(o.x + seg.ux * s), iz = this.ix(o.z + seg.uz * s);
        if (ix < 1 || iz < 1 || ix >= N - 1 || iz >= N - 1) continue;
        const k = iz * N + ix;
        this.cell[k] = FORCED;
        this.doors.set(k, seg);
      }
    }
  }

  /** Reset cells touched by a world box so they get re-evaluated (call when pieces appear / disappear). */
  invalidate(minX, maxX, minZ, maxZ, pad = 0.6) {
    const x0 = Math.max(0, this.ix(minX - pad) - 1), x1 = Math.min(N - 1, this.ix(maxX + pad));
    const z0 = Math.max(0, this.ix(minZ - pad) - 1), z1 = Math.min(N - 1, this.ix(maxZ + pad));
    const cell = this.cell, edge = this.edge;
    for (let z = z0; z <= z1; z++) {
      const row = z * N;
      for (let x = x0; x <= x1; x++) { if (cell[row + x] !== FORCED) cell[row + x] = 0; edge[row + x] = 0; }
    }
  }

  /** A bot found the way blocked: treat the cell containing (x, z) as impassable for a while. */
  learnBlock(x, z, until) {
    const ix = this.ix(x), iz = this.ix(z);
    if (ix < 1 || iz < 1 || ix >= N - 1 || iz >= N - 1) return;
    const i = iz * N + ix;
    if (this.cell[i] === FORCED) return;
    this.cell[i] = 2;
    this.learned.push({ i, until });
    this.stats.learned++;
  }

  /** Per-frame housekeeping: let learned blocks expire. */
  update(time) {
    const L = this.learned;
    while (L.length && L[0].until <= time) { const e = L.shift(); if (this.cell[e.i] === 2) this.cell[e.i] = 0; }
  }

  ix(x) { return Math.floor((x + HALF) / CS); }
  wx(i) { return (i + 0.5) * CS - HALF; }

  canQuery() { return this.queries < 1; }

  // ---- cell + edge evaluation ----------------------------------------------------------------------------------------------
  free(ix, iz) {
    if (ix < 1 || iz < 1 || ix >= N - 1 || iz >= N - 1) return false;
    const i = iz * N + ix;
    let s = this.cell[i];
    if (s === 0) { s = this._eval(ix, iz) ? 1 : 2; this.cell[i] = s; }
    return s !== 2;
  }

  _eval(ix, iz) {
    const g = this.game, T = g.terrain, P = g.physics;
    const x = this.wx(ix), z = this.wx(iz);
    const th = T.heightAt(x, z);
    if (th < -1.2) return false;
    const wl = T.waterLevelAt(x, z);
    if (wl !== null && wl - th > 0.7) return false;                   // too deep to wade
    const gr = P.groundAt(x, z, th + 1.4);                             // terrain or a slab / step within reach
    const gy = gr.y;
    if (!gr.collider && T.normalAt(x, z, _n)[1] < 0.6) return false;   // cliff face (> ~53°): the climb all but stalls
    return !P.overlaps(x, gy + 0.02, z, CLEAR_R, CLEAR_H, STEP);
  }

  /** Is the unit step between two orthogonally adjacent cells clear at its midpoint? (thin walls sit between cell centres) */
  _step(ax, az, bx, bz) {
    let ix = ax, iz = az, bit = 1;
    if (bx > ax) { /* east from a */ } else if (bx < ax) { ix = bx; iz = bz; } else if (bz > az) bit = 4; else { ix = bx; iz = bz; bit = 4; }
    const i = iz * N + ix;
    let e = this.edge[i];
    if (!(e & bit)) {
      const a = this.cell[iz * N + ix], b = bit === 1 ? this.cell[iz * N + ix + 1] : this.cell[(iz + 1) * N + ix];
      let ok;
      if (a === FORCED && b === FORCED) ok = true;
      else {
        const g = this.game, T = g.terrain, P = g.physics;
        const ax = this.wx(ix), az = this.wx(iz);
        const bx = bit === 1 ? ax + 1 : ax, bz = bit === 4 ? az + 1 : az;
        const x = (ax + bx) / 2, z = (az + bz) / 2;
        const ya = P.groundAt(ax, az, T.heightAt(ax, az) + 1.4).y, yb = P.groundAt(bx, bz, T.heightAt(bx, bz) + 1.4).y;
        const gy = P.groundAt(x, z, T.heightAt(x, z) + 1.4).y;
        // no thin wall between the centres, and no ledge taller than a character can step (steep slopes count: bots walk around them)
        ok = Math.abs(ya - yb) <= 0.6 && !P.overlaps(x, gy + 0.02, z, CLEAR_R, CLEAR_H, STEP);
      }
      e |= bit | (ok ? bit << 1 : 0);
      this.edge[i] = e;
    }
    return (e & (bit << 1)) !== 0;
  }

  freeAt(x, z) { return this.free(this.ix(x), this.ix(z)); }

  /** Nearest free cell to a world point within r rings that the point can actually reach (no wall between), as [ix, iz] or null. */
  _nearestFree(wxp, wzp, r) {
    const ix = this.ix(wxp), iz = this.ix(wzp);
    if (this.free(ix, iz)) return [ix, iz];
    const cand = [];
    for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
      if (!dx && !dz) continue;
      if (this.free(ix + dx, iz + dz)) cand.push([dx * dx + dz * dz, ix + dx, iz + dz]);
    }
    cand.sort((a, b) => a[0] - b[0]);
    const P = this.game.physics, T = this.game.terrain;
    const y = P.groundAt(wxp, wzp, T.heightAt(wxp, wzp) + 1.4).y;
    for (const [, cx, cz] of cand) {
      const x = this.wx(cx), z = this.wx(cz);
      // connected through open space at knee and chest height?
      if (P.lineClear(wxp, y + 0.5, wzp, x, y + 0.5, z, LOS) && P.lineClear(wxp, y + 1.2, wzp, x, y + 1.2, z, LOS)) return [cx, cz];
    }
    return cand.length ? [cand[0][1], cand[0][2]] : null;       // nothing verifiably connected: the nearest free cell will have to do
  }

  // ---- A* ------------------------------------------------------------------------------------------------------------------------------
  /**
   * Route from (sx, sz) to (gx, gz). Returns waypoints [{x, z}, …] (first waypoint is not the start) or null when there is
   * no route within the expansion budget. Endpoints in blocked cells snap to the nearest reachable free cell.
   */
  findPath(sx, sz, gx, gz, opts = {}) {
    this.queries++;
    this.stats.queries++;
    const maxExpand = opts.maxExpand ?? 4500;
    const s = this._nearestFree(sx, sz, 2);
    const e = this._nearestFree(gx, gz, opts.snap ?? 4);
    if (!s || !e) { this.stats.failed++; return null; }
    const sI = s[1] * N + s[0], eI = e[1] * N + e[0];
    if (sI === eI) return [{ x: gx, z: gz, last: true }];
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
        if (d < 4) { if (!this._step(cx, cz, nx, nz)) continue; }
        else {
          // diagonals need both L-shaped routes open (no corner cutting, no slipping through a thin wall's end)
          if (!(this.free(cx + DX[d], cz) && this.free(cx, cz + DZ[d]))) continue;
          if (!(this._step(cx, cz, cx + DX[d], cz) && this._step(cx, cz, cx, cz + DZ[d]) && this._step(cx + DX[d], cz, nx, nz) && this._step(cx, cz + DZ[d], nx, nz))) continue;
        }
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
    // reconstruct; nodes inside a doorway are snapped onto the door's centre line so bots thread the opening
    const cells = [];
    for (let i = endI; i !== -1; i = parent[i]) cells.push(i);
    cells.reverse();
    const pts = cells.map((i) => {
      const z = (i / N) | 0;
      let x = this.wx(i - z * N), zz = this.wx(z), door = false;
      const seg = this.doors.get(i);
      if (seg) {
        const t = Math.min(Math.max((x - seg.ax) * seg.ux + (zz - seg.az) * seg.uz, 0), seg.len);
        x = seg.ax + seg.ux * t; zz = seg.az + seg.uz * t; door = true;
      }
      return { x, z: zz, door };
    });
    const out = this._pull(pts);
    // end on the exact goal only if its own cell is walkable; a goal inside a wall / prop keeps the snapped cell centre instead
    if (found) out[out.length - 1] = this.freeAt(gx, gz) ? { x: gx, z: gz, last: true } : { ...out[out.length - 1], last: true };
    return out;
  }

  /** String-pulling: drop waypoints that a straight (clearance-checked) segment can skip; door nodes are kept. */
  _pull(pts) {
    if (pts.length <= 2) return pts.slice(1);
    const out = [];
    let i = 0;
    while (i < pts.length - 1) {
      // try the farthest anchors first (visibility isn't monotonic, but a handful of probes gets almost all the benefit)
      let j = i + 1;
      for (const k of [40, 24, 12, 6, 3, 2]) {
        const c = Math.min(pts.length - 1, i + k);
        if (c > i + 1 && this.lineFree(pts[i].x, pts[i].z, pts[c].x, pts[c].z) && !this._hasDoor(pts, i + 1, c - 1)) { j = c; break; }
      }
      out.push(pts[j]);
      i = j;
    }
    return out;
  }

  _hasDoor(pts, a, b) { for (let k = a; k <= b; k++) if (pts[k].door) return true; return false; }

  /** Straight segment is clear of colliders (rays at knee and chest height, three lanes wide) and stays over walkable cells. */
  lineFree(ax, az, bx, bz) {
    const dx = bx - ax, dz = bz - az;
    const len = Math.hypot(dx, dz);
    if (len < 1e-3) return true;
    const g = this.game, P = g.physics, T = g.terrain;
    const ux = dx / len, uz = dz / len, px = -uz, pz = ux;
    // walkable cells along the way (water / blocked cells; thin colliders are the rays' job)
    const n = Math.ceil(len / 1);
    for (let k = 0; k <= n; k++) {
      const t = (k / n) * len;
      if (!this.free(this.ix(ax + ux * t), this.ix(az + uz * t))) return false;
    }
    const ya = P.groundAt(ax, az, T.heightAt(ax, az) + 1.4).y, yb = P.groundAt(bx, bz, T.heightAt(bx, bz) + 1.4).y;
    for (const off of [-0.32, 0, 0.32]) {
      for (const h of [0.5, 1.3]) {
        if (!P.lineClear(ax + px * off, ya + h, az + pz * off, bx + px * off, yb + h, bz + pz * off, LOS)) return false;
      }
    }
    return true;
  }
}
