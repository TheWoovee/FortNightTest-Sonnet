// Camera-centred field of grass tufts and flowers. Placement is hashed per grid cell (stable, no swimming),
// masked by terrain suitability, and tinted from the baked ground colour so tufts blend with the terrain.
import * as THREE from 'three';
import { WORLD } from '../config.js';
import { hash2 } from '../util/rng.js';
import { smoothstep } from '../util/math.js';

const RADIUS = 44;
const CELL = 1.3;
const windU = { value: 0 };

function tuftGeometry() {
  // 8 single-triangle blades (double-sided by duplicated reversed faces so lighting stays upward-facing)
  const pos = [], col = [], nor = [], idx = [];
  const blades = 8;
  let vc = 0;
  for (let b = 0; b < blades; b++) {
    const a = (b / blades) * Math.PI * 2 + (b % 2) * 0.5;
    const ca = Math.cos(a), sa = Math.sin(a);
    const r = 0.04 + (b % 3) * 0.045;
    const h = 0.26 + ((b * 37) % 5) * 0.05;
    const lean = 0.08 + (b % 2) * 0.1;
    const w = 0.075;
    const bx = ca * r, bz = sa * r;
    const px = -sa * w, pz = ca * w;
    pos.push(bx - px, 0, bz - pz, bx + px, 0, bz + pz, bx + ca * lean, h, bz + sa * lean);
    col.push(0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 1.2, 1.2, 1.2);
    nor.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
    idx.push(vc, vc + 1, vc + 2, vc, vc + 2, vc + 1);
    vc += 3;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return g;
}

function flowerGeometry() {
  const cup = new THREE.CylinderGeometry(0.11, 0.03, 0.07, 7).toNonIndexed();
  cup.translate(0, 0.34, 0);
  const stem = new THREE.CylinderGeometry(0.012, 0.012, 0.34, 4).toNonIndexed();
  stem.translate(0, 0.17, 0);
  const parts = [cup, stem];
  for (const p of parts) { if (p.attributes.uv) p.deleteAttribute('uv'); }
  const posArr = [], norArr = [], colArr = [];
  parts.forEach((p, i) => {
    const pa = p.attributes.position, na = p.attributes.normal;
    for (let k = 0; k < pa.count; k++) {
      posArr.push(pa.getX(k), pa.getY(k), pa.getZ(k));
      norArr.push(na.getX(k), na.getY(k), na.getZ(k));
      // stem is green (independent of instance colour → keep it neutral & let material colour tint; we bake stem dark)
      const c = i === 0 ? 1 : 0.35;
      colArr.push(c, c, c);
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(posArr, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(norArr, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colArr, 3));
  return g;
}

const FLOWERS = [0xff6fa5, 0xffd93b, 0xffffff, 0xb56bff, 0xff8a3d, 0x6ec8ff, 0xff4f6a];

export class GrassField {
  constructor(world) {
    this.world = world;
    this.terrain = world.terrain;
    this.basePixels = world.basePixels;    // 1024² RGBA of baked ground colour
    this._buildMask();
    const mat = (side) => {
      const m = new THREE.MeshLambertMaterial({ vertexColors: true, side });
      m.onBeforeCompile = (sh) => {
        sh.uniforms.uWind = windU;
        sh.vertexShader = sh.vertexShader
          .replace('#include <common>', '#include <common>\nuniform float uWind;')
          .replace('#include <begin_vertex>', `#include <begin_vertex>
            #ifdef USE_INSTANCING
              vec3 ip = instanceMatrix[3].xyz;
              float sw = sin(uWind * 1.9 + ip.x * 0.9 + ip.z * 0.7) + 0.5 * sin(uWind * 3.3 + ip.x * 1.7);
              transformed.x += sw * 0.06 * position.y * 2.0;
              transformed.z += sw * 0.04 * position.y * 2.0;
            #endif`);
      };
      return m;
    };
    this.maxGrass = 5200; this.maxFlowers = 320;
    this.grass = new THREE.InstancedMesh(tuftGeometry(), mat(THREE.FrontSide), this.maxGrass);
    this.flowers = new THREE.InstancedMesh(flowerGeometry(), mat(THREE.FrontSide), this.maxFlowers);
    for (const m of [this.grass, this.flowers]) {
      m.frustumCulled = false; m.castShadow = false; m.receiveShadow = false;
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      world.scene.add(m);
      m.count = 0;
    }
    this.grass.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(this.maxGrass * 3), 3);
    this.flowers.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(this.maxFlowers * 3), 3);
    this.center = new THREE.Vector2(1e9, 1e9);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3();
    this._c = new THREE.Color();
    this.up = new THREE.Vector3(0, 1, 0);
  }

  _buildMask() {
    const T = this.terrain, n = T.n, W = this.world;
    const mask = new Uint8Array(n * n);
    for (let j = 0; j < n; j++) {
      const z = -WORLD.half + j * WORLD.cell;
      for (let i = 0; i < n; i++) {
        const x = -WORLD.half + i * WORLD.cell;
        const k = j * n + i;
        const h = T.h[k];
        if (h < 1.9 || h > 34) continue;
        if (T.nrm[k * 3 + 1] < 0.86) continue;
        const wl = T.waterLevelAt(x, z);
        if (wl !== null) continue;
        const r = T.nearestRoad(x, z, 12);
        if (r && r.dist < r.width / 2 + 1.6) continue;
        if (W.scatter.blocked(x, z, 0.8)) continue;
        mask[k] = 1;
      }
    }
    this.mask = mask;
  }

  ok(x, z) {
    const T = this.terrain, n = T.n;
    const i = Math.round((x + WORLD.half) / WORLD.cell), j = Math.round((z + WORLD.half) / WORLD.cell);
    if (i < 0 || j < 0 || i >= n || j >= n) return false;
    return this.mask[j * n + i] === 1;
  }

  groundColor(x, z, out) {
    const S = 1024;
    const px = Math.min(S - 1, Math.max(0, Math.floor(((x + WORLD.half) / WORLD.size) * S)));
    const pz = Math.min(S - 1, Math.max(0, Math.floor(((z + WORLD.half) / WORLD.size) * S)));
    const o = (pz * S + px) * 4;
    out.setRGB(this.basePixels[o] / 255, this.basePixels[o + 1] / 255, this.basePixels[o + 2] / 255, THREE.SRGBColorSpace);
    return out;
  }

  update(dt, cam, time) {
    windU.value = time;
    const T = this.terrain;
    const gh = T.heightAt(cam.x, cam.z);
    const high = cam.y - gh > 55;
    this.grass.visible = this.flowers.visible = !high;
    if (high) return;
    const dx = cam.x - this.center.x, dz = cam.z - this.center.y;
    if (dx * dx + dz * dz < 5 * 5) return;
    this.center.set(cam.x, cam.z);
    this.rebuild(cam.x, cam.z);
  }

  rebuild(cx, cz) {
    const T = this.terrain;
    const x0 = Math.floor((cx - RADIUS) / CELL), x1 = Math.ceil((cx + RADIUS) / CELL);
    const z0 = Math.floor((cz - RADIUS) / CELL), z1 = Math.ceil((cz + RADIUS) / CELL);
    let g = 0, f = 0;
    const m = this._m, q = this._q, s = this._s, p = this._p, col = this._c, up = this.up;
    for (let iz = z0; iz <= z1; iz++) {
      for (let ix = x0; ix <= x1; ix++) {
        const h1 = hash2(ix, iz, 11), h2 = hash2(ix, iz, 23), h3 = hash2(ix, iz, 37);
        const x = (ix + h1) * CELL, z = (iz + h2) * CELL;
        const dxx = x - cx, dzz = z - cz;
        const d = Math.sqrt(dxx * dxx + dzz * dzz);
        if (d > RADIUS) continue;
        // clumping: low-frequency density
        const clump = 0.5 + 0.5 * Math.sin(x * 0.11 + Math.sin(z * 0.07) * 2) * Math.sin(z * 0.09 + Math.cos(x * 0.05) * 2);
        if (h3 > 0.5 + clump * 0.55) continue;
        if (!this.ok(x, z)) continue;
        const y = T.heightAt(x, z);
        const fade = 1 - smoothstep(RADIUS - 14, RADIUS, d);
        const sc = (0.85 + hash2(ix, iz, 51) * 0.7) * fade;
        if (sc < 0.06) continue;
        q.setFromAxisAngle(up, hash2(ix, iz, 61) * 6.283);
        if (g < this.maxGrass) {
          p.set(x, y - 0.02, z); s.set(sc, sc * (0.9 + h2 * 0.5), sc);
          m.compose(p, q, s);
          this.grass.setMatrixAt(g, m);
          this.groundColor(x, z, col);
          col.multiplyScalar(1.3);
          this.grass.setColorAt(g, col);
          g++;
        }
        if (h1 > 0.93 && f < this.maxFlowers && fade > 0.4) {
          p.set(x + 0.3, y - 0.02, z + 0.2); s.set(sc, sc, sc);
          m.compose(p, q, s);
          this.flowers.setMatrixAt(f, m);
          col.setHex(FLOWERS[Math.floor(hash2(ix, iz, 71) * FLOWERS.length)]);
          this.flowers.setColorAt(f, col);
          f++;
        }
      }
    }
    this.grass.count = g; this.flowers.count = f;
    this.grass.instanceMatrix.needsUpdate = true; this.flowers.instanceMatrix.needsUpdate = true;
    if (this.grass.instanceColor) this.grass.instanceColor.needsUpdate = true;
    if (this.flowers.instanceColor) this.flowers.instanceColor.needsUpdate = true;
  }
}
