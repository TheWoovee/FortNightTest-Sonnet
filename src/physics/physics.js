// Collision world: terrain + a spatial hash of axis-aligned solids (boxes, cylinders, sloped ramps).
// Provides ground/ceiling queries, circle push-out for characters and ray casting for bullets/camera/AI.
import { WORLD } from '../config.js';

const CELL = 8;
const keyOf = (cx, cz) => ((cx + 512) << 10) | (cz + 512);
const cellOf = (v) => Math.floor(v / CELL);
const INF = 1e9;

let _uid = 1;

/** Result object reused by raycasts to avoid per-call allocation when callers don't keep it. */
export class RayHit {
  constructor() { this.reset(); }
  reset() {
    this.hit = false; this.t = INF; this.x = 0; this.y = 0; this.z = 0;
    this.nx = 0; this.ny = 1; this.nz = 0; this.collider = null; this.terrain = false;
    return this;
  }
  copy(o) {
    this.hit = o.hit; this.t = o.t; this.x = o.x; this.y = o.y; this.z = o.z;
    this.nx = o.nx; this.ny = o.ny; this.nz = o.nz; this.collider = o.collider; this.terrain = o.terrain;
    return this;
  }
}

export class Physics {
  constructor(terrain) {
    this.terrain = terrain;
    this.grid = new Map();
    this.stamp = 1;
    this.count = 0;
    this._tmpN = [0, 0, 0];
    this._res = { y: 0, collider: null };
    this._best = new RayHit();
    this._cand = new RayHit();
  }

  // ---- registration -----------------------------------------------------------------
  _register(c) {
    c.id = _uid++;
    c.stamp = 0;
    c.cells = [];
    const x0 = cellOf(c.minX), x1 = cellOf(c.maxX), z0 = cellOf(c.minZ), z1 = cellOf(c.maxZ);
    for (let cz = z0; cz <= z1; cz++) {
      for (let cx = x0; cx <= x1; cx++) {
        const k = keyOf(cx, cz);
        let arr = this.grid.get(k);
        if (!arr) this.grid.set(k, (arr = []));
        arr.push(c);
        c.cells.push(k);
      }
    }
    c.alive = true;
    this.count++;
    return c;
  }

  remove(c) {
    if (!c || !c.alive) return;
    for (const k of c.cells) {
      const arr = this.grid.get(k);
      if (!arr) continue;
      const i = arr.indexOf(c);
      if (i >= 0) { arr[i] = arr[arr.length - 1]; arr.pop(); }
      if (!arr.length) this.grid.delete(k);
    }
    c.alive = false;
    this.count--;
  }

  /**
   * Axis-aligned box. walkable: can be stood on. blocksBullets: stops shots. owner: arbitrary back-reference.
   */
  addBox(minX, maxX, minZ, maxZ, y0, y1, o = {}) {
    return this._register({
      type: 'box', minX, maxX, minZ, maxZ, y0, y1,
      walkable: o.walkable ?? true, blocksBullets: o.blocksBullets ?? true, blocksMove: o.blocksMove ?? true,
      owner: o.owner || null, kind: o.kind || 'static', material: o.material || null,
    });
  }

  addCylinder(x, z, r, y0, y1, o = {}) {
    return this._register({
      type: 'cyl', x, z, r, minX: x - r, maxX: x + r, minZ: z - r, maxZ: z + r, y0, y1,
      walkable: o.walkable ?? false, blocksBullets: o.blocksBullets ?? true, blocksMove: o.blocksMove ?? true,
      owner: o.owner || null, kind: o.kind || 'static', material: o.material || null,
    });
  }

  /**
   * Sloped solid. Surface rises along `axis` ('x'|'z'); dir=+1 means low end at min, high end at max.
   * The solid occupies y0 .. surface(x,z).
   */
  addRamp(minX, maxX, minZ, maxZ, y0, lowY, highY, axis, dir, o = {}) {
    const c = {
      type: 'ramp', minX, maxX, minZ, maxZ, y0, lowY, highY, axis, dir,
      walkable: o.walkable ?? true, blocksBullets: o.blocksBullets ?? true, blocksMove: o.blocksMove ?? true,
      owner: o.owner || null, kind: o.kind || 'static', material: o.material || null,
    };
    // slope plane y = c0 + kx*x + kz*z
    const len = axis === 'x' ? maxX - minX : maxZ - minZ;
    const k = ((highY - lowY) / len) * dir;
    if (axis === 'x') { c.kx = k; c.kz = 0; c.c0 = lowY - k * (dir > 0 ? minX : maxX); }
    else { c.kx = 0; c.kz = k; c.c0 = lowY - k * (dir > 0 ? minZ : maxZ); }
    c.top = Math.max(lowY, highY);
    return this._register(c);
  }

  /** Top surface height of a collider at (x,z) (assumes point inside its footprint). */
  topAt(c, x, z) {
    if (c.type === 'ramp') return c.c0 + c.kx * x + c.kz * z;
    return c.y1;
  }

  // ---- ground / ceiling ------------------------------------------------------------------
  /** Highest walkable surface at (x,z) that is ≤ maxY. Falls back to terrain. Returns shared {y, collider}. */
  groundAt(x, z, maxY, res = this._res) {
    let best = this.terrain.heightAt(x, z), bc = null;
    const arr = this.grid.get(keyOf(cellOf(x), cellOf(z)));
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (!c.walkable || !c.alive) continue;
        if (x < c.minX || x > c.maxX || z < c.minZ || z > c.maxZ) continue;
        if (c.type === 'cyl') { const dx = x - c.x, dz = z - c.z; if (dx * dx + dz * dz > c.r * c.r) continue; }
        const top = c.type === 'ramp' ? c.c0 + c.kx * x + c.kz * z : c.y1;
        if (top <= maxY && top > best) { best = top; bc = c; }
      }
    }
    res.y = best; res.collider = bc;
    return res;
  }

  /** Lowest solid underside above `minY` at (x,z) – used to stop upward motion (head bump). */
  ceilingAt(x, z, minY) {
    let best = INF;
    const arr = this.grid.get(keyOf(cellOf(x), cellOf(z)));
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (!c.alive || !c.blocksMove) continue;
        if (x < c.minX || x > c.maxX || z < c.minZ || z > c.maxZ) continue;
        if (c.type === 'cyl') { const dx = x - c.x, dz = z - c.z; if (dx * dx + dz * dz > c.r * c.r) continue; }
        if (c.y0 >= minY - 0.001 && c.y0 < best) best = c.y0;
      }
    }
    return best;
  }

  // ---- character push-out ---------------------------------------------------------------------
  /**
   * Resolve a vertical cylinder (pos = feet centre) out of any solids that block at its height.
   * Returns true when pushed.
   */
  depenetrate(pos, radius, height, stepUp) {
    let pushed = false;
    const feet = pos.y;
    const cx0 = cellOf(pos.x - radius), cx1 = cellOf(pos.x + radius);
    const cz0 = cellOf(pos.z - radius), cz1 = cellOf(pos.z + radius);
    this.stamp++;
    const stamp = this.stamp;
    for (let iter = 0; iter < 3; iter++) {
      let moved = false;
      for (let cz = cz0; cz <= cz1; cz++) {
        for (let cx = cx0; cx <= cx1; cx++) {
          const arr = this.grid.get(keyOf(cx, cz));
          if (!arr) continue;
          for (let i = 0; i < arr.length; i++) {
            const c = arr[i];
            if (!c.blocksMove || !c.alive) continue;
            if (pos.x + radius < c.minX || pos.x - radius > c.maxX || pos.z + radius < c.minZ || pos.z - radius > c.maxZ) continue;
            if (c.y0 >= feet + height - 0.001) continue;
            let dx, dz, d2, pen;
            if (c.type === 'cyl') {
              if (c.y1 <= feet + stepUp) continue;
              dx = pos.x - c.x; dz = pos.z - c.z;
              d2 = dx * dx + dz * dz;
              const rr = radius + c.r;
              if (d2 >= rr * rr) continue;
              const d = Math.sqrt(d2);
              if (d < 1e-5) { dx = 1; dz = 0; pen = rr; } else { dx /= d; dz /= d; pen = rr - d; }
              pos.x += dx * pen; pos.z += dz * pen;
              moved = pushed = true;
              continue;
            }
            const qx = pos.x < c.minX ? c.minX : pos.x > c.maxX ? c.maxX : pos.x;
            const qz = pos.z < c.minZ ? c.minZ : pos.z > c.maxZ ? c.maxZ : pos.z;
            const top = c.type === 'ramp' ? c.c0 + c.kx * qx + c.kz * qz : c.y1;
            if (top <= feet + stepUp) continue;
            dx = pos.x - qx; dz = pos.z - qz;
            d2 = dx * dx + dz * dz;
            if (d2 >= radius * radius) continue;
            if (d2 > 1e-10) {
              const d = Math.sqrt(d2);
              pen = radius - d;
              pos.x += (dx / d) * pen; pos.z += (dz / d) * pen;
            } else {
              // centre inside the footprint: exit through the nearest face
              const dl = pos.x - c.minX, dr = c.maxX - pos.x, du = pos.z - c.minZ, dd = c.maxZ - pos.z;
              const m = Math.min(dl, dr, du, dd);
              if (m === dl) pos.x = c.minX - radius; else if (m === dr) pos.x = c.maxX + radius;
              else if (m === du) pos.z = c.minZ - radius; else pos.z = c.maxZ + radius;
            }
            moved = pushed = true;
          }
        }
      }
      if (!moved) break;
    }
    return pushed;
  }

  /** True if a character cylinder placed here would intersect a blocking solid. */
  overlaps(x, y, z, radius, height, stepUp = 0.1) {
    const p = { x, y, z };
    const ox = x, oz = z;
    this.depenetrate(p, radius, height, stepUp);
    return Math.abs(p.x - ox) > 1e-4 || Math.abs(p.z - oz) > 1e-4;
  }

  /** First blocking solid overlapping the given world box (ignoring the listed collider kinds), or null. */
  overlapsSolid(minX, maxX, minZ, maxZ, y0, y1, ignoreKinds = []) {
    const x0 = cellOf(minX), x1 = cellOf(maxX), z0 = cellOf(minZ), z1 = cellOf(maxZ);
    for (let cz = z0; cz <= z1; cz++) {
      for (let cx = x0; cx <= x1; cx++) {
        const arr = this.grid.get(keyOf(cx, cz));
        if (!arr) continue;
        for (let i = 0; i < arr.length; i++) {
          const c = arr[i];
          if (!c.alive || !c.blocksMove || ignoreKinds.includes(c.kind)) continue;
          if (c.minX >= maxX || c.maxX <= minX || c.minZ >= maxZ || c.maxZ <= minZ) continue;
          const top = c.type === 'ramp' ? c.top : c.y1;
          if (c.y0 < y1 && top > y0) return c;
        }
      }
    }
    return null;
  }

  // ---- ray casting ---------------------------------------------------------------------------------
  _rayBox(c, ox, oy, oz, dx, dy, dz, maxT, out) {
    let t0 = 0, t1 = maxT, nx = 0, ny = 0, nz = 0;
    // x
    if (Math.abs(dx) < 1e-9) { if (ox < c.minX || ox > c.maxX) return false; }
    else {
      const inv = 1 / dx;
      let ta = (c.minX - ox) * inv, tb = (c.maxX - ox) * inv, s = -1;
      if (ta > tb) { const t = ta; ta = tb; tb = t; s = 1; }
      if (ta > t0) { t0 = ta; nx = s; ny = 0; nz = 0; }
      if (tb < t1) t1 = tb;
      if (t0 > t1) return false;
    }
    if (Math.abs(dy) < 1e-9) { if (oy < c.y0 || oy > c.y1) return false; }
    else {
      const inv = 1 / dy;
      let ta = (c.y0 - oy) * inv, tb = (c.y1 - oy) * inv, s = -1;
      if (ta > tb) { const t = ta; ta = tb; tb = t; s = 1; }
      if (ta > t0) { t0 = ta; nx = 0; ny = s; nz = 0; }
      if (tb < t1) t1 = tb;
      if (t0 > t1) return false;
    }
    if (Math.abs(dz) < 1e-9) { if (oz < c.minZ || oz > c.maxZ) return false; }
    else {
      const inv = 1 / dz;
      let ta = (c.minZ - oz) * inv, tb = (c.maxZ - oz) * inv, s = -1;
      if (ta > tb) { const t = ta; ta = tb; tb = t; s = 1; }
      if (ta > t0) { t0 = ta; nx = 0; ny = 0; nz = s; }
      if (tb < t1) t1 = tb;
      if (t0 > t1) return false;
    }
    if (t0 <= 1e-4) return false;         // origin inside / behind → ignore
    out.t = t0; out.nx = nx; out.ny = ny; out.nz = nz;
    return true;
  }

  _rayCyl(c, ox, oy, oz, dx, dy, dz, maxT, out) {
    // side
    const fx = ox - c.x, fz = oz - c.z;
    const a = dx * dx + dz * dz;
    let bestT = INF, nx = 0, ny = 0, nz = 0;
    if (a > 1e-12) {
      const b = 2 * (fx * dx + fz * dz);
      const cc = fx * fx + fz * fz - c.r * c.r;
      const disc = b * b - 4 * a * cc;
      if (disc >= 0) {
        const sq = Math.sqrt(disc);
        const t = (-b - sq) / (2 * a);
        if (t > 1e-4 && t < maxT) {
          const y = oy + dy * t;
          if (y >= c.y0 && y <= c.y1) {
            bestT = t; const px = fx + dx * t, pz = fz + dz * t;
            nx = px / c.r; nz = pz / c.r; ny = 0;
          }
        }
      }
    }
    // top cap
    if (Math.abs(dy) > 1e-9) {
      const t = (c.y1 - oy) / dy;
      if (t > 1e-4 && t < bestT && t < maxT) {
        const px = fx + dx * t, pz = fz + dz * t;
        if (px * px + pz * pz <= c.r * c.r) { bestT = t; nx = 0; ny = 1; nz = 0; }
      }
    }
    if (bestT >= INF) return false;
    out.t = bestT; out.nx = nx; out.ny = ny; out.nz = nz;
    return true;
  }

  _rayRamp(c, ox, oy, oz, dx, dy, dz, maxT, out) {
    let t0 = 0, t1 = maxT, nx = 0, ny = 0, nz = 0;
    const clip = (px, py, pz, off) => {   // half-space  n·p ≤ off
      const nd = px * dx + py * dy + pz * dz;
      const no = px * ox + py * oy + pz * oz - off;
      if (Math.abs(nd) < 1e-9) return no <= 0;
      const t = -no / nd;
      if (nd < 0) { if (t > t0) { t0 = t; nx = px; ny = py; nz = pz; } } else if (t < t1) t1 = t;
      return t0 <= t1;
    };
    if (!clip(-1, 0, 0, -c.minX)) return false;
    if (!clip(1, 0, 0, c.maxX)) return false;
    if (!clip(0, 0, -1, -c.minZ)) return false;
    if (!clip(0, 0, 1, c.maxZ)) return false;
    if (!clip(0, -1, 0, -c.y0)) return false;
    // slope: y - kx x - kz z ≤ c0
    const n = Math.hypot(c.kx, 1, c.kz);
    if (!clip(-c.kx / n, 1 / n, -c.kz / n, c.c0 / n)) return false;
    if (t0 <= 1e-4 || t0 > t1) return false;
    out.t = t0; out.nx = nx; out.ny = ny; out.nz = nz;
    return true;
  }

  _rayCollider(c, ox, oy, oz, dx, dy, dz, maxT, out) {
    if (c.type === 'box') return this._rayBox(c, ox, oy, oz, dx, dy, dz, maxT, out);
    if (c.type === 'cyl') return this._rayCyl(c, ox, oy, oz, dx, dy, dz, maxT, out);
    return this._rayRamp(c, ox, oy, oz, dx, dy, dz, maxT, out);
  }

  /**
   * Cast a ray (dx,dy,dz must be normalised). opts.bullets → only bullet-blocking solids,
   * opts.terrain (default true), opts.ignore → collider or owner to skip.
   */
  raycast(ox, oy, oz, dx, dy, dz, maxT = 300, opts = {}, out = this._best) {
    out.reset();
    let bestT = maxT;
    const cand = this._cand;
    const bulletsOnly = !!opts.bullets;
    const ignore = opts.ignore;

    // --- colliders via 2D DDA over the hash ---
    this.stamp++;
    const stamp = this.stamp;
    let cx = cellOf(ox), cz = cellOf(oz);
    const sx = dx > 0 ? 1 : -1, sz = dz > 0 ? 1 : -1;
    const tDx = Math.abs(dx) > 1e-9 ? CELL / Math.abs(dx) : INF;
    const tDz = Math.abs(dz) > 1e-9 ? CELL / Math.abs(dz) : INF;
    let tMx = Math.abs(dx) > 1e-9 ? ((dx > 0 ? (cx + 1) * CELL - ox : ox - cx * CELL) / Math.abs(dx)) : INF;
    let tMz = Math.abs(dz) > 1e-9 ? ((dz > 0 ? (cz + 1) * CELL - oz : oz - cz * CELL) / Math.abs(dz)) : INF;
    let steps = 0;
    while (steps++ < 400) {
      const arr = this.grid.get(keyOf(cx, cz));
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          const c = arr[i];
          if (c.stamp === stamp || !c.alive) continue;
          c.stamp = stamp;
          if (bulletsOnly && !c.blocksBullets) continue;
          if (ignore && (c === ignore || c.owner === ignore)) continue;
          if (this._rayCollider(c, ox, oy, oz, dx, dy, dz, bestT, cand) && cand.t < bestT) {
            bestT = cand.t;
            out.hit = true; out.t = cand.t; out.nx = cand.nx; out.ny = cand.ny; out.nz = cand.nz;
            out.collider = c; out.terrain = false;
          }
        }
      }
      const tNext = Math.min(tMx, tMz);
      if (tNext > bestT) break;
      if (tMx < tMz) { cx += sx; tMx += tDx; } else { cz += sz; tMz += tDz; }
    }

    // --- terrain ---
    if (opts.terrain !== false) {
      const T = this.terrain;
      const maxH = 60;
      if (!(oy > maxH && dy >= 0)) {
        let t = 0, prevT = 0;
        const half = WORLD.half - 1;
        let prevAbove = oy - T.heightAt(ox, oz) >= 0;
        // starting below terrain (e.g. camera in a hillside) → skip terrain test near origin
        if (prevAbove) {
          const stepBase = 1.6;
          while (t < bestT) {
            prevT = t;
            // adaptive step: larger when high above ground
            const px = ox + dx * t, py = oy + dy * t, pz = oz + dz * t;
            const gh = T.heightAt(px, pz);
            const clearance = py - gh;
            t += Math.max(stepBase, Math.min(clearance * 0.5, 14));
            if (t > bestT) t = bestT;
            const x = ox + dx * t, y = oy + dy * t, z = oz + dz * t;
            if (x < -half || x > half || z < -half || z > half) break;
            const h = T.heightAt(x, z);
            if (y - h < 0) {
              // refine between prevT and t
              let lo = prevT, hi = t;
              for (let k = 0; k < 9; k++) {
                const mid = (lo + hi) * 0.5;
                const mh = T.heightAt(ox + dx * mid, oz + dz * mid);
                if (oy + dy * mid - mh < 0) hi = mid; else lo = mid;
              }
              if (hi < bestT) {
                bestT = hi;
                out.hit = true; out.t = hi; out.collider = null; out.terrain = true;
                const n = T.normalAt(ox + dx * hi, oz + dz * hi, this._tmpN);
                out.nx = n[0]; out.ny = n[1]; out.nz = n[2];
              }
              break;
            }
            if (t >= bestT) break;
          }
        }
      }
    }
    if (out.hit) { out.x = ox + dx * out.t; out.y = oy + dy * out.t; out.z = oz + dz * out.t; }
    return out;
  }

  /** True when nothing solid lies between the two points (used for AI line of sight). */
  lineClear(ax, ay, az, bx, by, bz, opts = { bullets: true }) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const len = Math.hypot(dx, dy, dz);
    if (len < 1e-4) return true;
    const h = this.raycast(ax, ay, az, dx / len, dy / len, dz / len, len - 0.05, opts, this._cand2 || (this._cand2 = new RayHit()));
    return !h.hit;
  }
}
