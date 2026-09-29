// Trees, rocks and bushes: procedural low-poly geometry, rule-based placement, chunked instancing,
// wind sway, colliders and harvesting.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { GeoBuilder, lin } from '../gfx/geo.js';
import { Rng, hash2 } from '../util/rng.js';
import { WORLD } from '../config.js';
import { smoothstep, clamp01 } from '../util/math.js';

const CHUNK = 128;
const LOD_NEAR = 105;          // metres: full-detail geometry within this distance
const LOD_FAR = 1250;          // beyond this scatter is hidden (deep in fog)
const windUniform = { value: 0 };

// ------------------------------------------------------------------------------------------------
// geometry factories (all non-indexed, with `color` + `tintMask` attributes)
// ------------------------------------------------------------------------------------------------
function finish(parts) {
  const geos = parts.map((g) => (g.index ? g.toNonIndexed() : g));
  for (const g of geos) { if (g.attributes.uv) g.deleteAttribute('uv'); }
  const m = mergeGeometries(geos, false);
  m.computeBoundingBox(); m.computeBoundingSphere();
  return m;
}

function withMask(geo, mask) {
  const n = geo.attributes.position.count;
  geo.setAttribute('tintMask', new THREE.BufferAttribute(new Float32Array(n).fill(mask), 1));
  return geo;
}

/** Smooth, slightly lumpy blob with a baked bottom-dark → top-light gradient. */
function blob(cx, cy, cz, rx, ry, rz, seed, detail = 1, dark = 0.62) {
  const rng = new Rng(seed);
  const g = new THREE.IcosahedronGeometry(1, detail);
  const pos = g.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const lump = [];
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const key = `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
    if (lump[key] === undefined) lump[key] = 0.9 + rng.float() * 0.2;
    const l = lump[key];
    pos.setXYZ(i, cx + x * rx * l, cy + y * ry * l, cz + z * rz * l);
    const t = clamp01((y + 1) / 2);
    const k = dark + (1.08 - dark) * t;
    col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeVertexNormals();
  // computeVertexNormals on non-indexed gives flat; re-smooth radially for a soft, round look
  const nor = g.attributes.normal;
  for (let i = 0; i < pos.count; i++) {
    const dx = (pos.getX(i) - cx) / rx, dy = (pos.getY(i) - cy) / ry, dz = (pos.getZ(i) - cz) / rz;
    const l = Math.hypot(dx, dy, dz) || 1;
    nor.setXYZ(i, dx / l, dy / l, dz / l);
  }
  return withMask(g, 1);
}

function trunkGeo(b, x, z, y0, h, r0, r1, color) {
  b.cylinder(x, y0, z, r0, h, 6, color, { r1, top: false, dark: 0.7 });
}

function makeOak(seed) {
  const b = new GeoBuilder();
  trunkGeo(b, 0, 0, -0.3, 2.9, 0.34, 0.2, 0x7a5230);
  // root flare + two little branches
  b.cylinder(0, -0.3, 0, 0.46, 0.5, 6, 0x6a4526, { r1: 0.34, top: false, dark: 0.6 });
  const trunk = withMask(b.build(), 0);
  const parts = [trunk];
  parts.push(blob(0, 4.4, 0, 2.5, 2.1, 2.5, seed + 1, 1, 0.6));
  parts.push(blob(1.5, 3.7, 0.5, 1.7, 1.4, 1.7, seed + 2, 1, 0.55));
  parts.push(blob(-1.4, 3.9, -0.6, 1.7, 1.45, 1.7, seed + 3, 1, 0.55));
  parts.push(blob(0.1, 5.7, 0.1, 1.7, 1.3, 1.7, seed + 4, 1, 0.75));
  return finish(parts);
}

function makePine() {
  const b = new GeoBuilder();
  trunkGeo(b, 0, 0, -0.3, 2.4, 0.28, 0.16, 0x6a4526);
  const trunk = withMask(b.build(), 0);
  const f = new GeoBuilder();
  const tiers = [[2.6, 1.7, 0.9], [2.05, 1.7, 2.15], [1.5, 1.7, 3.4], [0.95, 1.6, 4.6]];
  tiers.forEach(([r, h, y], i) => {
    // darker skirt at each tier's base, lighter tips
    f.cylinder(0, y, 0, r, h, 8, 0xffffff, { r1: 0.02, top: false, dark: 0.55 });
    f.cylinder(0, y - 0.02, 0, r * 0.98, 0.16, 8, 0xb8b8b8, { r1: r * 0.94, top: false, dark: 0.5 });
  });
  const foliage = withMask(f.build(), 1);
  return finish([trunk, foliage]);
}

function makePalm() {
  const b = new GeoBuilder();
  // curved trunk
  let x = 0, y = -0.2;
  const segs = 7;
  for (let i = 0; i < segs; i++) {
    const r0 = 0.3 - i * 0.02, r1 = 0.3 - (i + 1) * 0.02;
    const nx = x + 0.2 + i * 0.03;
    b.cylinder(x, y, 0, r0, 1.05, 6, i % 2 ? 0x8a6a45 : 0x7a5a3a, { r1, top: false, dark: 0.8 });
    x = nx; y += 1.0;
  }
  const trunk = withMask(b.build(), 0);
  const f = new GeoBuilder();
  const crown = [x, y + 0.1, 0];
  const nFronds = 9;
  for (let k = 0; k < nFronds; k++) {
    const a = (k / nFronds) * Math.PI * 2 + 0.2;
    const ca = Math.cos(a), sa = Math.sin(a);
    // each frond: 4 segments drooping
    let px = crown[0], py = crown[1], pz = crown[2];
    let w = 0.55;
    for (let s = 0; s < 4; s++) {
      const len = 1.05;
      const droop = -0.18 - s * 0.32;
      const nx2 = px + ca * len, nz2 = pz + sa * len, ny2 = py + droop + (s === 0 ? 0.55 : 0);
      const wn = w * 0.72;
      // perpendicular
      const pxv = -sa, pzv = ca;
      const A = [px + pxv * w, py, pz + pzv * w], B = [px - pxv * w, py, pz - pzv * w];
      const C = [nx2 - pxv * wn, ny2, nz2 - pzv * wn], D = [nx2 + pxv * wn, ny2, nz2 + pzv * wn];
      const shadeK = 1 - s * 0.06;
      f.quad(A, B, C, D, 0xffffff, [0, 1, 0], shadeK, shadeK, shadeK * 0.9, shadeK * 0.9);
      f.quad(A, B, C, D, 0xd0d0d0, [0, -1, 0], shadeK, shadeK, shadeK * 0.9, shadeK * 0.9);
      px = nx2; py = ny2; pz = nz2; w = wn;
    }
  }
  // coconuts
  f.cylinder(crown[0] - 0.15, crown[1] - 0.35, 0.1, 0.16, 0.3, 6, 0x5a3a20);
  const foliage = withMask(f.build(), 1);
  return finish([trunk, foliage]);
}

function makeOakLo() {
  const b = new GeoBuilder();
  trunkGeo(b, 0, 0, -0.3, 2.9, 0.34, 0.2, 0x7a5230);
  const trunk = withMask(b.build(), 0);
  return finish([trunk, blob(0, 4.3, 0, 2.7, 2.3, 2.7, 5, 0, 0.6), blob(0.9, 3.3, 0.6, 1.8, 1.4, 1.8, 6, 0, 0.55)]);
}
function makePineLo() {
  const b = new GeoBuilder();
  trunkGeo(b, 0, 0, -0.3, 2.4, 0.28, 0.16, 0x6a4526);
  const trunk = withMask(b.build(), 0);
  const f = new GeoBuilder();
  f.cylinder(0, 0.9, 0, 2.6, 3.6, 6, 0xffffff, { r1: 0.05, top: false, dark: 0.55 });
  f.cylinder(0, 3.4, 0, 1.6, 3.4, 6, 0xffffff, { r1: 0.02, top: false, dark: 0.6 });
  return finish([trunk, withMask(f.build(), 1)]);
}
function makeBushLo() { return finish([blob(0, 0.4, 0, 1.0, 0.7, 1.0, 91, 0, 0.55)]); }

function makeRock(seed) {
  const g = new THREE.IcosahedronGeometry(1, 1);
  const rng = new Rng(seed);
  const pos = g.attributes.position;
  const map = new Map();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const key = `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
    let m = map.get(key);
    if (!m) { m = 0.78 + rng.float() * 0.42; map.set(key, m); }
    pos.setXYZ(i, x * m, Math.max(y * m * 0.8, -0.35), z * m);
  }
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const t = clamp01((pos.getY(i) + 0.4) / 1.6);
    const k = 0.7 + 0.4 * t;
    col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeVertexNormals();      // flat facets → chunky stylised rock
  return withMask(finish([g]), 1);
}

function makeBush() {
  return finish([blob(0, 0.45, 0, 0.85, 0.62, 0.85, 91, 0, 0.55), blob(0.55, 0.32, 0.2, 0.55, 0.42, 0.55, 92, 0, 0.55), blob(-0.5, 0.3, -0.25, 0.5, 0.4, 0.5, 93, 0, 0.55)]);
}

// ------------------------------------------------------------------------------------------------
function foliageMaterial({ swayAmp = '0.05', ...matOpts } = {}) {
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, ...matOpts });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uWind = windUniform;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float tintMask;
        attribute vec3 instanceTint;
        uniform float uWind;`)
      .replace('#include <color_vertex>', `#include <color_vertex>
        vColor.xyz *= mix(vec3(1.0), instanceTint, tintMask);`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 ip = instanceMatrix[3].xyz;
          float sw = sin(uWind * 1.35 + ip.x * 0.31 + ip.z * 0.23) + 0.5 * sin(uWind * 2.7 + ip.x * 0.7);
          float amp = ${swayAmp} * max(position.y - 1.0, 0.0) * tintMask;
          transformed.x += sw * amp;
          transformed.z += sw * amp * 0.6;
        #endif`);
  };
  return mat;
}

const TINTS = {
  oak: [0x59b32e, 0x6cc236, 0x4aa02c, 0x86c93a, 0x3f9a3a, 0x74b82c],
  oakAutumn: [0xf08a1c, 0xe0501c, 0xf2b81e, 0xd9761a, 0xc8401c],
  oakPink: [0xff8fb8, 0xffa7c8, 0xf27aa8],
  pine: [0x2e8b57, 0x2a7d52, 0x3a9a5c, 0x27754e, 0x2f8f6a],
  palm: [0x4cc23c, 0x62d04a, 0x3fb04a],
  bush: [0x4fae2f, 0x62be3a, 0x3d9a35, 0xe5a13a, 0x9acb3a],
  rock: [0x9aa0a8, 0x8a8f98, 0xa8a49a, 0x7d838d, 0xb0aaa0],
};

export class Scatter {
  constructor(env) {
    this.env = env;
    this.terrain = env.terrain;
    this.painter = env.painter;
    this.physics = env.physics;
    this.group = new THREE.Group();
    this.group.name = 'scatter';
    env.scene.add(this.group);
    this.trees = [];
    this.rocks = [];
    this.bushes = [];
    this.falling = [];
    this.meshes = { oak: [], pine: [], palm: [], rock: [], bush: [] };
    this.geos = { oak: makeOak(3), pine: makePine(), palm: makePalm(), rock: makeRock(7), bush: makeBush() };
    this.geosLo = { oak: makeOakLo(), pine: makePineLo(), bush: makeBushLo() };
    this.chunks = [];
    this.mats = {
      oak: foliageMaterial({ swayAmp: '0.05' }), pine: foliageMaterial({ swayAmp: '0.03' }), palm: foliageMaterial({ swayAmp: '0.07' }),
      rock: foliageMaterial({ flatShading: true, swayAmp: '0.0' }), bush: foliageMaterial({ swayAmp: '0.03' }),
    };
  }

  blocked(x, z, m = 0) {
    for (const b of this.env.blocked) {
      if (b.type === 'rect') { if (x > b.minX - m && x < b.maxX + m && z > b.minZ - m && z < b.maxZ + m) return true; }
      else if (Math.hypot(x - b.x, z - b.z) < b.r + m) return true;
    }
    return false;
  }

  _onRoad(x, z, m = 3.5) {
    const r = this.terrain.nearestRoad(x, z, 14);
    return r && r.dist < r.width / 2 + m;
  }

  generate(seed = 99) {
    const rng = new Rng(seed);
    const { terrain, painter } = this;
    const step = 5.5;
    const limit = 560;
    const ang = new THREE.Color();
    const pickTint = (arr) => new THREE.Color(rng.pick(arr));
    for (let gz = -limit; gz < limit; gz += step) {
      for (let gx = -limit; gx < limit; gx += step) {
        const x = gx + rng.range(0, step), z = gz + rng.range(0, step);
        const h = terrain.heightAt(x, z);
        if (h < 0.7 || h > 40) continue;
        const slope = terrain.slopeAt(x, z);
        if (slope > 0.78) continue;
        const forest = painter.forestAt(x, z);
        const autumn = painter.autumnAt(x, z);
        const tl = smoothstep(37, 27, h);
        const beach = h < 3.0;
        let p = (0.005 + 0.056 * forest * forest + 0.02 * forest) * tl;
        if (beach) p = 0.006 * smoothstep(0.7, 1.5, h);
        if (autumn > 0.4) p *= 1.5;
        if (rng.float() > p * step * step * 0.5) continue;
        if (this.blocked(x, z, 2.2) || this._onRoad(x, z, 3.8)) continue;
        const tooLake = terrain.layout.lakes.some((lk) => Math.hypot(x - lk.x, z - lk.z) < lk.r * 1.25 && h < lk.level + 0.9);
        if (tooLake) continue;
        this._addTree(x, z, h, forest, autumn, beach, rng, pickTint);
      }
    }
    // yard trees inside towns
    for (const yt of this.env.yardTrees) {
      const h = terrain.heightAt(yt.x, yt.z);
      this._addTree(yt.x, yt.z, h, 0.1, 0, false, rng, pickTint, true);
    }
    // rocks
    for (let gz = -limit; gz < limit; gz += 9) {
      for (let gx = -limit; gx < limit; gx += 9) {
        const x = gx + rng.range(0, 9), z = gz + rng.range(0, 9);
        const h = terrain.heightAt(x, z);
        if (h < 0.3 || h > 48) continue;
        const slope = terrain.slopeAt(x, z);
        const p = 0.028 + slope * 0.5 + smoothstep(22, 38, h) * 0.35;
        if (rng.float() > p * 0.22) continue;
        if (this.blocked(x, z, 3) || this._onRoad(x, z, 3.5)) continue;
        const cluster = rng.int(1, 3);
        for (let k = 0; k < cluster; k++) {
          const rx = x + rng.range(-2.2, 2.2), rz = z + rng.range(-2.2, 2.2);
          if (terrain.heightAt(rx, rz) < 0.4) continue;
          this._addRock(rx, rz, rng.chance(0.15) ? rng.range(2.4, 4.2) : rng.range(0.7, 2.0), rng);
        }
      }
    }
    // bushes
    for (let gz = -limit; gz < limit; gz += 7) {
      for (let gx = -limit; gx < limit; gx += 7) {
        const x = gx + rng.range(0, 7), z = gz + rng.range(0, 7);
        const h = terrain.heightAt(x, z);
        if (h < 1.6 || h > 32) continue;
        if (terrain.slopeAt(x, z) > 0.6) continue;
        const forest = painter.forestAt(x, z);
        if (rng.float() > 0.16 + forest * 0.25) continue;
        if (this.blocked(x, z, 1.2) || this._onRoad(x, z, 2.2)) continue;
        this.bushes.push({ x, y: h - 0.05, z, s: rng.range(0.7, 1.5), rot: rng.range(0, 6.28), tint: pickTint(TINTS.bush) });
      }
    }
  }

  _addTree(x, z, h, forest, autumn, beach, rng, pickTint, yard = false) {
    let type = 'oak';
    if (beach) type = 'palm';
    else if (!yard && (h > 19 || (forest > 0.5 && rng.chance(0.55)) || (autumn < 0.2 && forest > 0.25 && rng.chance(0.25)))) type = 'pine';
    const scale = type === 'pine' ? rng.range(0.85, 1.55) : type === 'palm' ? rng.range(0.9, 1.25) : rng.range(0.85, 1.4);
    let tint;
    if (type === 'oak') {
      if (autumn > 0.28 && rng.chance(0.4 + autumn * 0.6)) tint = pickTint(TINTS.oakAutumn);
      else if (rng.chance(0.05)) tint = pickTint(TINTS.oakPink);
      else tint = pickTint(TINTS.oak);
    } else tint = pickTint(TINTS[type]);
    const tree = { type, x, y: h - 0.05, z, scale, rot: rng.range(0, Math.PI * 2), tint, hp: 60 + scale * 40, maxHp: 60 + scale * 40, alive: true, kind: 'tree' };
    this.trees.push(tree);
  }

  _addRock(x, z, s, rng) {
    const y = this.terrain.heightAt(x, z);
    const tint = new THREE.Color(rng.pick(TINTS.rock));
    // slight moss/snow tint by altitude
    if (y > 38) tint.lerp(new THREE.Color(0xffffff), 0.6);
    this.rocks.push({ x, y: y - 0.25 * s, z, s, sy: rng.range(0.7, 1.25), rot: rng.range(0, 6.28), tint, hp: 40 + s * 35, maxHp: 40 + s * 35, alive: true, kind: 'rock' });
  }

  /**
   * Boulder collider: radius of the mesh's equator; tall enough that nobody can step *into* it (low stones and uphill sides
   * of slopes would otherwise sit under the step-up tolerance and swallow the player).
   */
  _rockCollider(r) {
    const rad = r.s * 0.94, dome = r.s * 0.9 * r.sy;
    const top = r.y + Math.max(dome, 0.8) + rad * this.terrain.slopeAt(r.x, r.z);
    return this.physics.addCylinder(r.x, r.z, rad, r.y - 0.4, top, { kind: 'rock', material: 'stone', owner: r, walkable: false });
  }

  /** Create colliders, chunked instanced meshes and (optionally) paint ground shadows. */
  build() {
    const physics = this.physics;
    const byChunk = new Map();
    const chunkKey = (x, z) => `${Math.floor((x + WORLD.half) / CHUNK)},${Math.floor((z + WORLD.half) / CHUNK)}`;
    const add = (type, obj) => {
      const key = `${type}:${chunkKey(obj.x, obj.z)}`;
      let arr = byChunk.get(key);
      if (!arr) byChunk.set(key, (arr = { type, items: [] }));
      arr.items.push(obj);
    };
    for (const t of this.trees) {
      t.collider = physics.addCylinder(t.x, t.z, t.type === 'palm' ? 0.3 : 0.42 * Math.max(1, t.scale * 0.85), t.y - 0.4, t.y + 6 * t.scale, { kind: 'tree', material: 'wood', owner: t, walkable: false });
      add(t.type, t);
    }
    for (const r of this.rocks) {
      r.collider = this._rockCollider(r);
      add('rock', r);
    }
    for (const b of this.bushes) add('bush', b);

    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    for (const [key, { type, items }] of byChunk) {
      const tint = new Float32Array(items.length * 3);
      const mats = new Array(items.length);
      items.forEach((it, i) => {
        q.setFromAxisAngle(up, it.rot);
        const sc = type === 'rock' ? it.s : type === 'bush' ? it.s : it.scale;
        s.set(sc, type === 'rock' ? it.s * it.sy : sc, sc);
        p.set(it.x, it.y, it.z);
        m.compose(p, q, s);
        mats[i] = m.clone();
        tint[i * 3] = it.tint.r; tint[i * 3 + 1] = it.tint.g; tint[i * 3 + 2] = it.tint.b;
      });
      const make = (geoSrc, castShadow) => {
        const mesh = new THREE.InstancedMesh(geoSrc, this.mats[type], items.length);
        const geo = geoSrc.clone();
        geo.setAttribute('instanceTint', new THREE.InstancedBufferAttribute(tint, 3));
        mesh.geometry = geo;
        for (let i = 0; i < items.length; i++) mesh.setMatrixAt(i, mats[i]);
        mesh.instanceMatrix.needsUpdate = true;
        mesh.castShadow = castShadow;
        mesh.receiveShadow = true;
        mesh.matrixAutoUpdate = false;
        mesh.computeBoundingSphere();
        mesh.boundingSphere.radius += 4;      // sway padding
        this.group.add(mesh);
        return mesh;
      };
      const hi = make(this.geos[type], type !== 'bush');
      const lo = this.geosLo[type] ? make(this.geosLo[type], false) : null;
      items.forEach((it, i) => { it.mesh = hi; it.meshLo = lo; it.index = i; });
      hi.visible = true; if (lo) lo.visible = false;
      const bs = hi.boundingSphere;
      this.chunks.push({ type, hi, lo, cx: bs.center.x, cz: bs.center.z, r: bs.radius });
      this.meshes[type].push(hi);
    }
  }

  /** Distance-based LOD switching between chunk meshes. */
  updateLod(camPos) {
    for (const c of this.chunks) {
      const d = Math.hypot(camPos.x - c.cx, camPos.z - c.cz) - c.r;
      if (c.lo) { c.hi.visible = d < LOD_NEAR; c.lo.visible = d >= LOD_NEAR && d < LOD_FAR; }
      else c.hi.visible = d < (c.type === 'bush' ? LOD_NEAR * 0.9 : c.type === 'rock' ? 900 : LOD_FAR);
    }
  }

  /** Bake soft contact shadows under trees/rocks/bushes into the terrain colour canvas. */
  paintShadows(ctx, S) {
    const half = WORLD.half;
    const blobShadow = (x, z, r, a) => {
      const cx = (x + half) * S, cy = (z + half) * S, rr = r * S;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr);
      g.addColorStop(0, `rgba(20,40,10,${a})`);
      g.addColorStop(0.6, `rgba(20,40,10,${a * 0.5})`);
      g.addColorStop(1, 'rgba(20,40,10,0)');
      ctx.fillStyle = g;
      ctx.fillRect(cx - rr, cy - rr, rr * 2, rr * 2);
    };
    for (const t of this.trees) blobShadow(t.x, t.z, (t.type === 'pine' ? 2.4 : 3.0) * t.scale, 0.34);
    for (const r of this.rocks) blobShadow(r.x, r.z, r.s * 1.5, 0.3);
    for (const b of this.bushes) blobShadow(b.x, b.z, b.s * 1.2, 0.22);
  }

  /** Restore everything harvested during the previous match. */
  reset() {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    const restore = (obj, kind) => {
      if (obj.alive) { obj.hp = obj.maxHp; return; }
      obj.alive = true; obj.hp = obj.maxHp;
      const sc = kind === 'rock' ? obj.s : obj.scale;
      q.setFromAxisAngle(up, obj.rot);
      s.set(sc, kind === 'rock' ? obj.s * obj.sy : sc, sc);
      p.set(obj.x, obj.y, obj.z);
      m.compose(p, q, s);
      obj.mesh.setMatrixAt(obj.index, m);
      obj.mesh.instanceMatrix.needsUpdate = true;
      if (obj.meshLo) { obj.meshLo.setMatrixAt(obj.index, m); obj.meshLo.instanceMatrix.needsUpdate = true; }
      obj.collider = kind === 'rock'
        ? this._rockCollider(obj)
        : this.physics.addCylinder(obj.x, obj.z, obj.type === 'palm' ? 0.3 : 0.42 * Math.max(1, obj.scale * 0.85), obj.y - 0.4, obj.y + 6 * obj.scale, { kind: 'tree', material: 'wood', owner: obj, walkable: false });
    };
    for (const t of this.trees) restore(t, 'tree');
    for (const r of this.rocks) restore(r, 'rock');
    for (const f of this.falling) { if (f.mesh) this.group.remove(f.mesh); }
    this.falling.length = 0;
  }

  /** Damage a tree/rock; returns true if it was depleted. */
  hit(obj, dmg) {
    obj.hp -= dmg;
    obj.shake = 0.25;
    if (obj.hp <= 0 && obj.alive) { this.remove(obj); return true; }
    return false;
  }

  remove(obj) {
    if (!obj.alive) return;
    obj.alive = false;
    if (obj.collider) this.physics.remove(obj.collider);
    const m = new THREE.Matrix4().makeScale(0, 0, 0);
    obj.mesh.setMatrixAt(obj.index, m);
    obj.mesh.instanceMatrix.needsUpdate = true;
    if (obj.meshLo) { obj.meshLo.setMatrixAt(obj.index, m); obj.meshLo.instanceMatrix.needsUpdate = true; }
    if (obj.kind === 'tree') this.falling.push({ obj, t: 0, dir: Math.random() * Math.PI * 2 });
    this.onRemoved?.(obj);
  }

  update(dt, time, camPos) {
    windUniform.value = time;
    this._lodT = (this._lodT || 0) - dt;
    if (camPos && this._lodT <= 0) { this._lodT = 0.2; this.updateLod(camPos); }
    // falling-tree animation: temporary mesh that topples and fades
    for (let i = this.falling.length - 1; i >= 0; i--) {
      const f = this.falling[i];
      f.t += dt;
      if (!f.mesh) {
        const o = f.obj;
        const geo = this.geos[o.type].clone();
        const n = geo.attributes.position.count;
        geo.setAttribute('instanceTint', new THREE.BufferAttribute(new Float32Array(n * 3).map((_, k) => [o.tint.r, o.tint.g, o.tint.b][k % 3]), 3));
        f.mesh = new THREE.Mesh(geo, this.mats[o.type]);
        f.mesh.position.set(o.x, o.y, o.z);
        f.mesh.scale.setScalar(o.scale);
        f.mesh.castShadow = true;
        this.group.add(f.mesh);
      }
      const k = Math.min(f.t / 1.1, 1);
      const ease = k * k;
      f.mesh.rotation.set(Math.sin(f.dir) * ease * 1.45, 0, -Math.cos(f.dir) * ease * 1.45);
      if (f.t > 2.2) {
        const s = Math.max(0, 1 - (f.t - 2.2) / 0.5) * f.obj.scale;
        f.mesh.scale.setScalar(s);
        if (s <= 0.01) { this.group.remove(f.mesh); f.mesh.geometry.dispose(); this.falling.splice(i, 1); }
      }
    }
  }
}
