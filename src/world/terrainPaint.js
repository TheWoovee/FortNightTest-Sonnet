// Biome colouring for the terrain. Pure JS (typed arrays only) so both the in-game texture bake
// and the Node preview script can share it. Colours are sRGB 0..255.
import { createNoise } from '../util/noise.js';
import { WORLD } from '../config.js';
import { clamp01, smoothstep, lerp } from '../util/math.js';

const tick = () => new Promise((r) => setTimeout(r, 0));

const C = {
  grassA: [128, 210, 56], grassB: [96, 186, 50], grassC: [160, 222, 74],
  dry: [190, 212, 86], forest: [58, 138, 52], deep: [74, 152, 56],
  autumnA: [222, 158, 56], autumnB: [200, 112, 46],
  sand: [242, 219, 158], wetSand: [214, 190, 126], seabed: [232, 212, 152],
  rock: [148, 152, 162], rockDark: [112, 116, 128], moss: [110, 140, 84],
  snow: [246, 250, 255],
};

function mix(o, a, b, t) {
  o[0] = a[0] + (b[0] - a[0]) * t;
  o[1] = a[1] + (b[1] - a[1]) * t;
  o[2] = a[2] + (b[2] - a[2]) * t;
}

export class TerrainPainter {
  constructor(terrain) {
    this.t = terrain;
    this.N = createNoise(terrain.seed + 101);
    this.FN = 256;                        // coarse field resolution
    this.dryF = new Float32Array(this.FN * this.FN);
    this.forestF = new Float32Array(this.FN * this.FN);
    this.autumnF = new Float32Array(this.FN * this.FN);
    this._fields();
  }

  _fields() {
    const { N, FN, t } = this;
    const cs = WORLD.size / FN;
    const maple = t.layout.towns.find((x) => x.id === 'maple');
    for (let j = 0; j < FN; j++) {
      for (let i = 0; i < FN; i++) {
        const x = -WORLD.half + (i + 0.5) * cs, z = -WORLD.half + (j + 0.5) * cs;
        const k = j * FN + i;
        this.dryF[k] = clamp01(0.5 + 1.1 * N.fbm(x * 0.008 + 50, z * 0.008 + 12, 3, 2, 0.5));
        this.forestF[k] = smoothstep(0.02, 0.32, N.fbm(x * 0.0065 - 31, z * 0.0065 + 77, 3, 2.05, 0.5));
        let a = 0;
        if (maple) {
          const d = Math.hypot(x - maple.x, z - maple.z);
          a = smoothstep(210, 90, d) * (0.65 + 0.35 * N.noise2(x * 0.01, z * 0.01 + 3));
        }
        // a second, smaller autumn grove for variety
        const d2 = Math.hypot(x - 20, z + 250);
        a = Math.max(a, smoothstep(85, 40, d2) * 0.8);
        this.autumnF[k] = clamp01(a);
      }
    }
  }

  _field(arr, x, z) {
    const FN = this.FN, cs = WORLD.size / FN;
    let fx = (x + WORLD.half) / cs - 0.5, fz = (z + WORLD.half) / cs - 0.5;
    fx = Math.min(Math.max(fx, 0), FN - 1.001); fz = Math.min(Math.max(fz, 0), FN - 1.001);
    const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j, k = j * FN + i;
    return lerp(lerp(arr[k], arr[k + 1], u), lerp(arr[k + FN], arr[k + FN + 1], u), v);
  }
  dryAt(x, z) { return this._field(this.dryF, x, z); }
  /** 0..1 forest density (drives tree scatter and forest-floor tint). */
  forestAt(x, z) { return this._field(this.forestF, x, z); }
  autumnAt(x, z) { return this._field(this.autumnF, x, z); }

  /** Cheap bilinear height (not triangulated) – good enough for colouring. */
  _h(x, z) {
    const t = this.t, n = t.n;
    let fx = (x + WORLD.half) / WORLD.cell, fz = (z + WORLD.half) / WORLD.cell;
    fx = Math.min(Math.max(fx, 0), n - 1.001); fz = Math.min(Math.max(fz, 0), n - 1.001);
    const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j, k = j * n + i, h = t.h;
    return (h[k] * (1 - u) + h[k + 1] * u) * (1 - v) + (h[k + n] * (1 - u) + h[k + n + 1] * u) * v;
  }
  _slope(x, z) {
    const t = this.t, n = t.n;
    let fx = (x + WORLD.half) / WORLD.cell, fz = (z + WORLD.half) / WORLD.cell;
    fx = Math.min(Math.max(Math.round(fx), 0), n - 1); fz = Math.min(Math.max(Math.round(fz), 0), n - 1);
    const k = (fz * n + fx) * 3;
    const ny = t.nrm[k + 1];
    return Math.sqrt(Math.max(0, 1 - ny * ny)) / Math.max(ny, 0.01);
  }

  /** Writes the terrain colour at (x,z) into out[0..2]. Returns the height for reuse. */
  colorAt(x, z, out, h = this._h(x, z), slope = this._slope(x, z)) {
    const N = this.N;
    const n1 = N.noise2(x * 0.03 + 7, z * 0.03 - 3);
    const n2 = N.noise2(x * 0.13 - 11, z * 0.13 + 5);
    // meadow base
    mix(out, C.grassB, C.grassA, 0.5 + 0.5 * n1);
    mix(out, out, C.grassC, clamp01(0.5 + 0.7 * n2) * 0.3);
    mix(out, out, C.dry, this.dryAt(x, z) * 0.5);
    mix(out, out, C.forest, this.forestAt(x, z) * 0.65);
    mix(out, out, C.deep, smoothstep(9, 24, h) * 0.45);
    // autumn tint
    const au = this.autumnAt(x, z);
    if (au > 0.02) mix(out, out, n2 > 0 ? C.autumnA : C.autumnB, au * (0.55 + 0.25 * n1));
    // rock + snow on steep / high ground
    const rockF = Math.max(smoothstep(0.5, 0.85, slope), smoothstep(27, 37, h + n1 * 5));
    if (rockF > 0) {
      const rc = [0, 0, 0];
      mix(rc, C.rock, C.rockDark, clamp01(0.5 + 0.8 * n2));
      mix(rc, rc, C.moss, clamp01(0.4 - h * 0.012) * 0.5);
      mix(out, out, rc, rockF);
    }
    const snowF = smoothstep(39, 44, h + n1 * 2.5 + n2);
    if (snowF > 0) mix(out, out, C.snow, snowF * (1 - smoothstep(0.7, 1.1, slope) * 0.6));
    // beaches / seabed
    const shore = h + n1 * 0.4 + n2 * 0.15;
    const sandF = 1 - smoothstep(1.2, 2.6, shore);
    if (sandF > 0) {
      const sc = [0, 0, 0];
      mix(sc, C.wetSand, C.sand, smoothstep(-0.1, 0.9, h));
      mix(out, out, h < 0 ? C.seabed : sc, sandF);
    }
    return h;
  }

  /** Bakes the base colour map (no roads/props) → RGBA Uint8ClampedArray, size×size. */
  async paintBase(size = 1024, onProgress) {
    const px = new Uint8ClampedArray(size * size * 4);
    const out = [0, 0, 0];
    const step = WORLD.size / size;
    for (let j = 0; j < size; j++) {
      const z = -WORLD.half + (j + 0.5) * step;
      for (let i = 0; i < size; i++) {
        const x = -WORLD.half + (i + 0.5) * step;
        this.colorAt(x, z, out);
        const o = (j * size + i) * 4;
        px[o] = out[0]; px[o + 1] = out[1]; px[o + 2] = out[2]; px[o + 3] = 255;
      }
      if (j % 32 === 31) { onProgress?.(j / size); await tick(); }
    }
    return px;
  }
}
