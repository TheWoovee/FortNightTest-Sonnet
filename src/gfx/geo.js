// GeoBuilder: accumulates vertex-coloured, flat-shaded geometry (boxes, prisms, cylinders, cones, quads)
// so whole towns can be merged into a couple of draw calls.
import * as THREE from 'three';

const _c = new THREE.Color();

/** Colour input (hex number | css string | THREE.Color | [r,g,b] linear) → linear [r,g,b]. */
export function lin(color) {
  if (Array.isArray(color)) return color;
  if (color && color.isColor) return [color.r, color.g, color.b];
  _c.set(color);
  return [_c.r, _c.g, _c.b];
}

export class GeoBuilder {
  constructor() {
    this.pos = []; this.nor = []; this.col = []; this.idx = [];
    this.vc = 0;
  }

  get empty() { return this.vc === 0; }

  _vert(x, y, z, nx, ny, nz, c, k) {
    this.pos.push(x, y, z);
    this.nor.push(nx, ny, nz);
    this.col.push(c[0] * k, c[1] * k, c[2] * k);
    return this.vc++;
  }

  /**
   * Quad a→b→c→d. Winding is auto-corrected so the face normal points along `hint` (any vector).
   * ka/kb/kc/kd = per-vertex brightness multipliers (for cheap baked gradients).
   */
  quad(a, b, c, d, color, hint, ka = 1, kb = 1, kc = 1, kd = 1) {
    let ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    let vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    if (hint && nx * hint[0] + ny * hint[1] + nz * hint[2] < 0) {
      [b, d] = [d, b]; [kb, kd] = [kd, kb];
      nx = -nx; ny = -ny; nz = -nz;
    }
    const l = Math.hypot(nx, ny, nz) || 1;
    nx /= l; ny /= l; nz /= l;
    const col = lin(color);
    const i0 = this._vert(a[0], a[1], a[2], nx, ny, nz, col, ka);
    const i1 = this._vert(b[0], b[1], b[2], nx, ny, nz, col, kb);
    const i2 = this._vert(c[0], c[1], c[2], nx, ny, nz, col, kc);
    const i3 = this._vert(d[0], d[1], d[2], nx, ny, nz, col, kd);
    this.idx.push(i0, i1, i2, i0, i2, i3);
  }

  tri(a, b, c, color, hint, ka = 1, kb = 1, kc = 1) {
    let ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    let vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    if (hint && nx * hint[0] + ny * hint[1] + nz * hint[2] < 0) {
      [b, c] = [c, b]; [kb, kc] = [kc, kb];
      nx = -nx; ny = -ny; nz = -nz;
    }
    const l = Math.hypot(nx, ny, nz) || 1;
    nx /= l; ny /= l; nz /= l;
    const col = lin(color);
    const i0 = this._vert(a[0], a[1], a[2], nx, ny, nz, col, ka);
    const i1 = this._vert(b[0], b[1], b[2], nx, ny, nz, col, kb);
    const i2 = this._vert(c[0], c[1], c[2], nx, ny, nz, col, kc);
    this.idx.push(i0, i1, i2);
  }

  /**
   * Axis-aligned box. opts: bottom (draw underside, default false), dark (brightness of lower verts, default 0.86),
   * top / sides (default true).
   */
  box(x0, y0, z0, x1, y1, z1, color, opts = {}) {
    const dark = opts.dark ?? 0.86;
    const col = lin(color);
    const kb = dark, kt = 1;
    const P = (x, y, z) => [x, y, z];
    // +x
    this.quad(P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0), col, [1, 0, 0], kb, kb, kt, kt);
    // -x
    this.quad(P(x0, y0, z1), P(x0, y0, z0), P(x0, y1, z0), P(x0, y1, z1), col, [-1, 0, 0], kb, kb, kt, kt);
    // +z
    this.quad(P(x1, y0, z1), P(x0, y0, z1), P(x0, y1, z1), P(x1, y1, z1), col, [0, 0, 1], kb, kb, kt, kt);
    // -z
    this.quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x0, y1, z0), col, [0, 0, -1], kb, kb, kt, kt);
    if (opts.top !== false) this.quad(P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1), col, [0, 1, 0], 1, 1, 1, 1);
    if (opts.bottom) this.quad(P(x0, y0, z0), P(x0, y0, z1), P(x1, y0, z1), P(x1, y0, z0), col, [0, -1, 0], kb * 0.8, kb * 0.8, kb * 0.8, kb * 0.8);
  }

  boxC(cx, cy, cz, sx, sy, sz, color, opts) {
    this.box(cx - sx / 2, cy - sy / 2, cz - sz / 2, cx + sx / 2, cy + sy / 2, cz + sz / 2, color, opts);
  }

  /** Vertical cylinder / truncated cone. */
  cylinder(cx, y0, cz, r0, h, segs, color, opts = {}) {
    const r1 = opts.r1 ?? r0;
    const col = lin(color);
    const dark = opts.dark ?? 0.88;
    const y1 = y0 + h;
    for (let i = 0; i < segs; i++) {
      const a0 = (i / segs) * Math.PI * 2, a1 = ((i + 1) / segs) * Math.PI * 2;
      const c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      const am = (a0 + a1) / 2;
      const hint = [Math.cos(am), (r0 - r1) / Math.max(h, 1e-3), Math.sin(am)];
      this.quad([cx + c0 * r0, y0, cz + s0 * r0], [cx + c1 * r0, y0, cz + s1 * r0],
        [cx + c1 * r1, y1, cz + s1 * r1], [cx + c0 * r1, y1, cz + s0 * r1], col, hint, dark, dark, 1, 1);
      if (opts.top !== false && r1 > 0.001) {
        this.tri([cx, y1, cz], [cx + c0 * r1, y1, cz + s0 * r1], [cx + c1 * r1, y1, cz + s1 * r1], col, [0, 1, 0]);
      }
      if (opts.bottom) this.tri([cx, y0, cz], [cx + c0 * r0, y0, cz + s0 * r0], [cx + c1 * r0, y0, cz + s1 * r0], col, [0, -1, 0], 0.7, 0.7, 0.7);
    }
  }

  cone(cx, y0, cz, r, h, segs, color, opts = {}) {
    this.cylinder(cx, y0, cz, r, h, segs, color, { ...opts, r1: 0.001, top: false });
  }

  /** Four-sided pyramid roof over the rectangle. */
  pyramid(x0, z0, x1, z1, y, rise, color, ax, az) {
    const cx = ax ?? (x0 + x1) / 2, cz = az ?? (z0 + z1) / 2, apex = [cx, y + rise, cz];
    const col = lin(color);
    this.tri([x0, y, z0], [x1, y, z0], apex, col, [0, 1, -1], 0.9, 0.9, 1);
    this.tri([x1, y, z0], [x1, y, z1], apex, col, [1, 1, 0], 0.9, 0.9, 1);
    this.tri([x1, y, z1], [x0, y, z1], apex, col, [0, 1, 1], 0.9, 0.9, 1);
    this.tri([x0, y, z1], [x0, y, z0], apex, col, [-1, 1, 0], 0.9, 0.9, 1);
  }

  /**
   * Gable roof over [x0,x1]×[z0,z1] starting at height y. ridgeAlong = 'x' | 'z'.
   * oh = eave overhang, go = gable-end overhang, drop = how far the eave hangs below y.
   */
  gable(x0, z0, x1, z1, y, rise, ridgeAlong, roofColor, wallColor, oh = 0.6, go = 0.35, drop = 0.25) {
    const rc = lin(roofColor), wc = lin(wallColor);
    const under = rc.map((v) => v * 0.55);
    if (ridgeAlong === 'x') {
      const zc = (z0 + z1) / 2;
      const ya = y - drop;
      // slopes
      this.quad([x0 - go, ya, z0 - oh], [x1 + go, ya, z0 - oh], [x1 + go, y + rise, zc], [x0 - go, y + rise, zc], rc, [0, 1, -1], 0.92, 0.92, 1, 1);
      this.quad([x0 - go, ya, z1 + oh], [x1 + go, ya, z1 + oh], [x1 + go, y + rise, zc], [x0 - go, y + rise, zc], rc, [0, 1, 1], 0.92, 0.92, 1, 1);
      // soffits (underside)
      this.quad([x0 - go, ya - 0.05, z0 - oh], [x1 + go, ya - 0.05, z0 - oh], [x1 + go, y + rise - 0.12, zc], [x0 - go, y + rise - 0.12, zc], under, [0, -1, 1]);
      this.quad([x0 - go, ya - 0.05, z1 + oh], [x1 + go, ya - 0.05, z1 + oh], [x1 + go, y + rise - 0.12, zc], [x0 - go, y + rise - 0.12, zc], under, [0, -1, -1]);
      // gable ends
      this.tri([x0, y - 0.02, z0], [x0, y - 0.02, z1], [x0, y + rise - 0.06, zc], wc, [-1, 0, 0]);
      this.tri([x1, y - 0.02, z0], [x1, y - 0.02, z1], [x1, y + rise - 0.06, zc], wc, [1, 0, 0]);
    } else {
      const xc = (x0 + x1) / 2;
      const ya = y - drop;
      this.quad([x0 - oh, ya, z0 - go], [x0 - oh, ya, z1 + go], [xc, y + rise, z1 + go], [xc, y + rise, z0 - go], rc, [-1, 1, 0], 0.92, 0.92, 1, 1);
      this.quad([x1 + oh, ya, z0 - go], [x1 + oh, ya, z1 + go], [xc, y + rise, z1 + go], [xc, y + rise, z0 - go], rc, [1, 1, 0], 0.92, 0.92, 1, 1);
      this.quad([x0 - oh, ya - 0.05, z0 - go], [x0 - oh, ya - 0.05, z1 + go], [xc, y + rise - 0.12, z1 + go], [xc, y + rise - 0.12, z0 - go], under, [1, -1, 0]);
      this.quad([x1 + oh, ya - 0.05, z0 - go], [x1 + oh, ya - 0.05, z1 + go], [xc, y + rise - 0.12, z1 + go], [xc, y + rise - 0.12, z0 - go], under, [-1, -1, 0]);
      this.tri([x0, y - 0.02, z0], [x1, y - 0.02, z0], [xc, y + rise - 0.06, z0], wc, [0, 0, -1]);
      this.tri([x0, y - 0.02, z1], [x1, y - 0.02, z1], [xc, y + rise - 0.06, z1], wc, [0, 0, 1]);
    }
  }

  build(material) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.vc > 65535 ? new THREE.Uint32BufferAttribute(this.idx, 1) : new THREE.Uint16BufferAttribute(this.idx, 1));
    g.computeBoundingBox();
    g.computeBoundingSphere();
    return material ? new THREE.Mesh(g, material) : g;
  }
}

/** Shared vertex-coloured Lambert material. */
export function solidMaterial(opts = {}) {
  return new THREE.MeshLambertMaterial({ vertexColors: true, ...opts });
}
