// Stylised water: depth-tinted turquoise shallows, animated ripple normals, shoreline foam and sun glints.
// Depth comes from a height texture baked from the terrain grid, so it works for the ocean and lakes alike.
import * as THREE from 'three';
import { SKY } from '../gfx/gfx.js';
import { WORLD } from '../config.js';

const vert = /* glsl */`
  varying vec3 vWorld;
  varying float vFogDepth;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vec4 mv = viewMatrix * w;
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const frag = /* glsl */`
  uniform sampler2D uHeight;
  uniform float uLevel, uTime, uHalf, uCell, uN;
  uniform vec3 uSunDir, uSunColor, uShallow, uMid, uDeep, uSkyColor, uFogColor;
  uniform float uFogNear, uFogFar;
  varying vec3 vWorld;
  varying float vFogDepth;

  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }

  vec2 waveGrad(vec2 p, float t) {
    vec2 g = vec2(0.0);
    g += vec2( 0.80,  0.60) * cos(dot(p, vec2( 0.80,  0.60)) * 0.42 + t * 0.95) * 0.060;
    g += vec2(-0.55,  0.83) * cos(dot(p, vec2(-0.55,  0.83)) * 0.77 + t * 1.30) * 0.040;
    g += vec2( 0.31, -0.95) * cos(dot(p, vec2( 0.31, -0.95)) * 1.31 + t * 1.85) * 0.028;
    g += vec2(-0.96, -0.28) * cos(dot(p, vec2(-0.96, -0.28)) * 2.10 + t * 2.40) * 0.018;
    return g;
  }

  void main() {
    vec2 uv = ((vWorld.xz + uHalf) / uCell + 0.5) / uN;
    float terr = texture2D(uHeight, uv).r;
    float depth = uLevel - terr;
    if (depth < -0.02) discard;

    vec3 view = normalize(cameraPosition - vWorld);
    vec2 g = waveGrad(vWorld.xz, uTime);
    float rip = vnoise(vWorld.xz * 0.9 + uTime * 0.25) - 0.5;
    g += vec2(rip, vnoise(vWorld.xz * 0.9 - uTime * 0.2 + 9.0) - 0.5) * 0.05;
    vec3 n = normalize(vec3(-g.x, 1.0, -g.y));

    float d = clamp(depth / 13.0, 0.0, 1.0);
    vec3 col = mix(uShallow, uMid, smoothstep(0.0, 0.22, d));
    col = mix(col, uDeep, smoothstep(0.18, 0.85, d));

    // simple lighting + sky reflection
    float ndl = max(dot(n, uSunDir), 0.0);
    col *= 0.78 + 0.32 * ndl;
    float fres = pow(1.0 - max(dot(n, view), 0.0), 3.0);
    col = mix(col, uSkyColor, fres * 0.55);
    vec3 refl = reflect(-uSunDir, n);
    float spec = pow(max(dot(refl, view), 0.0), 220.0);
    col += uSunColor * (smoothstep(0.35, 1.0, spec) * 1.6);

    // shoreline foam: a soft rim plus pulses of foam sliding shoreward
    float nz = vnoise(vWorld.xz * 0.55 + uTime * 0.05);
    float wave = 0.5 + 0.5 * sin(uTime * 0.85 - depth * 2.6 + nz * 3.0);
    float rim = 1.0 - smoothstep(0.0, 0.55 + 0.25 * sin(uTime * 0.7 + vWorld.x * 0.05), depth);
    float pulse = (1.0 - smoothstep(0.4, 2.6, depth)) * smoothstep(0.62, 0.95, wave) * smoothstep(0.25, 0.7, nz);
    float foam = clamp(rim * 0.95 + pulse * 0.55, 0.0, 1.0);
    col = mix(col, vec3(1.0), foam);

    float alpha = mix(0.42, 0.93, smoothstep(0.0, 4.5, depth));
    alpha = max(alpha, foam);
    alpha *= smoothstep(-0.02, 0.22, depth);

    // fog
    float fogF = smoothstep(uFogNear, uFogFar, vFogDepth);
    col = mix(col, uFogColor, fogF);
    gl_FragColor = vec4(col, alpha);
  }
`;

export class Water {
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;
    const n = terrain.n;
    const data = new Uint16Array(n * n);
    for (let i = 0; i < n * n; i++) data[i] = THREE.DataUtils.toHalfFloat(terrain.h[i]);
    this.heightTex = new THREE.DataTexture(data, n, n, THREE.RedFormat, THREE.HalfFloatType);
    this.heightTex.minFilter = this.heightTex.magFilter = THREE.LinearFilter;
    this.heightTex.wrapS = this.heightTex.wrapT = THREE.ClampToEdgeWrapping;
    this.heightTex.needsUpdate = true;

    this.uniforms = {
      uHeight: { value: this.heightTex },
      uLevel: { value: WORLD.seaLevel },
      uTime: { value: 0 },
      uHalf: { value: WORLD.half },
      uCell: { value: WORLD.cell },
      uN: { value: n },
      uSunDir: { value: SKY.sunDir },
      uSunColor: { value: SKY.sun },
      uShallow: { value: new THREE.Color('#5fe6d2') },
      uMid: { value: new THREE.Color('#1fa8e6') },
      uDeep: { value: new THREE.Color('#0b58c2') },
      uSkyColor: { value: new THREE.Color('#9fd3ff') },
      uFogColor: { value: SKY.horizon.clone() },
      uFogNear: { value: 260 },
      uFogFar: { value: 1900 },
    };

    this.meshes = [];
    const ocean = this._plane(9000, WORLD.seaLevel);
    ocean.position.y = WORLD.seaLevel;
    scene.add(ocean);
    this.meshes.push(ocean);

    for (const lk of terrain.layout.lakes) {
      const m = this._plane(lk.r * 3.4, lk.level);
      m.position.set(lk.x, lk.level, lk.z);
      scene.add(m);
      this.meshes.push(m);
    }
  }

  _plane(size, level) {
    const uniforms = {};
    for (const k in this.uniforms) uniforms[k] = { value: this.uniforms[k].value };
    uniforms.uLevel = { value: level };
    const mat = new THREE.ShaderMaterial({
      uniforms, vertexShader: vert, fragmentShader: frag,
      transparent: true, depthWrite: false,
    });
    const geo = new THREE.PlaneGeometry(size, size, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 2;
    mesh.frustumCulled = false;
    return mesh;
  }

  update(dt, scene) {
    this.uniforms.uTime.value += dt;
    for (const m of this.meshes) {
      const u = m.material.uniforms;
      u.uTime.value = this.uniforms.uTime.value;
      if (scene?.fog) {
        u.uFogColor.value.copy(scene.fog.color);
        u.uFogNear.value = scene.fog.near;
        u.uFogFar.value = scene.fog.far;
      }
    }
  }
}
