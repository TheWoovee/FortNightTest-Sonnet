// Renders the Terrain as culled chunks with one shared baked colour texture + tiled detail overlay.
import * as THREE from 'three';
import { WORLD } from '../config.js';
import { Rng } from '../util/rng.js';

/** Tileable greyscale grass-blade detail texture (mean ≈ 0.5, multiplied ×2 in the shader). */
function makeDetailTexture(size, seed, blades) {
  const rng = new Rng(seed);
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = '#808080';
  g.fillRect(0, 0, size, size);
  const wrap = (fn) => {
    for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) fn(ox * size, oy * size);
  };
  // soft blotches
  for (let i = 0; i < size * 0.6; i++) {
    const x = rng.range(0, size), y = rng.range(0, size), r = rng.range(size * 0.03, size * 0.12);
    const v = rng.chance(0.5) ? 255 : 0;
    wrap((dx, dy) => {
      const gr = g.createRadialGradient(x + dx, y + dy, 0, x + dx, y + dy, r);
      gr.addColorStop(0, `rgba(${v},${v},${v},0.10)`);
      gr.addColorStop(1, `rgba(${v},${v},${v},0)`);
      g.fillStyle = gr;
      g.fillRect(x + dx - r, y + dy - r, r * 2, r * 2);
    });
  }
  // blades
  g.lineCap = 'round';
  for (let i = 0; i < blades; i++) {
    const x = rng.range(0, size), y = rng.range(0, size);
    const len = rng.range(2, 6), ang = -Math.PI / 2 + rng.range(-0.7, 0.7);
    const v = rng.chance(0.55) ? rng.range(176, 255) : rng.range(40, 100);
    g.strokeStyle = `rgba(${v | 0},${v | 0},${v | 0},${rng.range(0.25, 0.6)})`;
    g.lineWidth = rng.range(0.8, 1.6);
    wrap((dx, dy) => {
      g.beginPath();
      g.moveTo(x + dx, y + dy);
      g.lineTo(x + dx + Math.cos(ang) * len, y + dy + Math.sin(ang) * len);
      g.stroke();
    });
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  tex.colorSpace = THREE.NoColorSpace;
  return tex;
}

export class TerrainMesh {
  /**
   * @param {THREE.Scene} scene
   * @param {import('./terrain.js').Terrain} terrain
   * @param {THREE.Texture} colorTex baked colour map (canvas, north-up)
   */
  constructor(scene, terrain, colorTex, renderer) {
    this.terrain = terrain;
    this.group = new THREE.Group();
    this.group.name = 'terrain';
    colorTex.colorSpace = THREE.SRGBColorSpace;
    colorTex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    colorTex.wrapS = colorTex.wrapT = THREE.ClampToEdgeWrapping;
    colorTex.generateMipmaps = true;
    colorTex.minFilter = THREE.LinearMipmapLinearFilter;
    colorTex.needsUpdate = true;

    this.detailA = makeDetailTexture(256, 11, 2600);
    this.detailB = makeDetailTexture(256, 23, 900);
    this.material = this._material(colorTex);
    this._build();
    scene.add(this.group);
  }

  _material(colorTex) {
    const mat = new THREE.MeshLambertMaterial({ map: colorTex });
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uDetailA = { value: this.detailA };
      shader.uniforms.uDetailB = { value: this.detailB };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nuniform sampler2D uDetailA;\nuniform sampler2D uDetailB;')
        .replace('#include <map_fragment>', /* glsl */`
          #include <map_fragment>
          {
            float camDist = length(vWPos - cameraPosition);
            float fade = 1.0 - smoothstep(40.0, 230.0, camDist);
            float fadeB = 1.0 - smoothstep(150.0, 520.0, camDist);
            vec3 dA = texture2D(uDetailA, vWPos.xz * 0.31).rgb * 2.0;
            vec3 dB = texture2D(uDetailB, vWPos.xz * 0.045).rgb * 2.0;
            diffuseColor.rgb *= mix(vec3(1.0), dA, fade * 0.55) * mix(vec3(1.0), dB, fadeB * 0.6);
          }
        `);
    };
    return mat;
  }

  _build() {
    const t = this.terrain;
    const cc = WORLD.chunkCells;
    const chunks = WORLD.cells / cc;
    const vs = cc + 1;
    // shared index buffer
    const idx = new Uint16Array(cc * cc * 6);
    let k = 0;
    for (let j = 0; j < cc; j++) {
      for (let i = 0; i < cc; i++) {
        const a = j * vs + i, b = a + 1, c = a + vs, d = c + 1;
        idx[k++] = a; idx[k++] = c; idx[k++] = b;
        idx[k++] = b; idx[k++] = c; idx[k++] = d;
      }
    }
    const indexAttr = new THREE.BufferAttribute(idx, 1);
    this.chunks = [];
    for (let cz = 0; cz < chunks; cz++) {
      for (let cx = 0; cx < chunks; cx++) {
        const pos = new Float32Array(vs * vs * 3);
        const nor = new Float32Array(vs * vs * 3);
        const uv = new Float32Array(vs * vs * 2);
        let p = 0, u = 0;
        for (let j = 0; j < vs; j++) {
          for (let i = 0; i < vs; i++) {
            const gi = cx * cc + i, gj = cz * cc + j;
            const gk = gj * t.n + gi;
            const x = -WORLD.half + gi * WORLD.cell, z = -WORLD.half + gj * WORLD.cell;
            pos[p] = x; pos[p + 1] = t.h[gk]; pos[p + 2] = z;
            nor[p] = t.nrm[gk * 3]; nor[p + 1] = t.nrm[gk * 3 + 1]; nor[p + 2] = t.nrm[gk * 3 + 2];
            p += 3;
            uv[u++] = (x + WORLD.half) / WORLD.size;
            uv[u++] = 1 - (z + WORLD.half) / WORLD.size;
          }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
        geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
        geo.setIndex(indexAttr);
        geo.computeBoundingBox();
        geo.computeBoundingSphere();
        const mesh = new THREE.Mesh(geo, this.material);
        mesh.receiveShadow = true;
        mesh.castShadow = false;
        mesh.matrixAutoUpdate = false;
        this.group.add(mesh);
        this.chunks.push(mesh);
      }
    }
  }
}
