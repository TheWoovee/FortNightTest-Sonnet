// Sky dome (gradient + sun + soft procedural clouds) and chunky stylised 3D cloud puffs.
import * as THREE from 'three';
import { SKY } from '../gfx/gfx.js';
import { Rng } from '../util/rng.js';

const skyVert = /* glsl */`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * p;
    gl_Position.z = gl_Position.w * 0.99999;
  }
`;

const skyFrag = /* glsl */`
  uniform vec3 uZenith, uHorizon, uSunColor, uSunDir;
  uniform float uTime, uCloudiness, uStorm;
  varying vec3 vDir;

  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; }
    return s;
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.5));
    // warm haze band near the horizon on the sun side
    float sd = max(dot(d, uSunDir), 0.0);
    col = mix(col, uHorizon * vec3(1.05, 1.0, 0.92), smoothstep(0.25, 0.0, h) * 0.5);
    col = mix(col, uHorizon * 0.96, smoothstep(0.0, -0.25, h));
    // clouds on a projected plane
    if (h > 0.015) {
      vec2 uv = d.xz / (h + 0.22) * 0.9 + vec2(uTime * 0.006, uTime * 0.002);
      float n = fbm(uv * 1.3);
      float cover = mix(0.66, 0.5, uCloudiness);
      float c = smoothstep(cover, cover + 0.2, n);
      float shade = fbm(uv * 1.3 + vec2(0.05, 0.08) * 3.0);
      vec3 cc = mix(vec3(0.74, 0.82, 0.96), vec3(1.0, 0.99, 0.97), smoothstep(0.35, 0.75, 1.0 - shade + (n - 0.5)));
      c *= smoothstep(0.015, 0.22, h);
      col = mix(col, cc, c * 0.92);
    }
    // sun disc + glow
    col += uSunColor * (pow(sd, 1400.0) * 9.0 + pow(sd, 90.0) * 0.32 + pow(sd, 7.0) * 0.1);
    col = mix(col, vec3(0.34, 0.16, 0.56) * (0.55 + 0.6 * clamp(h + 0.2, 0.0, 1.0)), uStorm * 0.78);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export class Sky {
  constructor(scene) {
    this.scene = scene;
    const geo = new THREE.SphereGeometry(3500, 32, 20);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: skyVert,
      fragmentShader: skyFrag,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uZenith: { value: SKY.zenith },
        uHorizon: { value: SKY.horizon },
        uSunColor: { value: SKY.sun },
        uSunDir: { value: SKY.sunDir },
        uTime: { value: 0 },
        uCloudiness: { value: 0.45 },
        uStorm: { value: 0 },
      },
    });
    this.dome = new THREE.Mesh(geo, this.mat);
    this.dome.renderOrder = -10;
    this.dome.frustumCulled = false;
    scene.add(this.dome);

    this.puffs = this._buildPuffs();
    scene.add(this.puffs);
  }

  /** Stylised cloud banks made of chunky white blobs – visible from the bus / skydive. */
  _buildPuffs() {
    const rng = new Rng(4242);
    const group = new THREE.Group();
    const geo = new THREE.IcosahedronGeometry(1, 2);
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xdfeaff, emissiveIntensity: 0.55, fog: false });
    const banks = 46;
    const perBank = 9;
    const mesh = new THREE.InstancedMesh(geo, mat, banks * perBank);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    let k = 0;
    this.banks = [];
    for (let b = 0; b < banks; b++) {
      const ang = rng.range(0, Math.PI * 2), rad = Math.sqrt(rng.float()) * 1500;
      const cx = Math.cos(ang) * rad, cz = Math.sin(ang) * rad, cy = rng.range(190, 420);
      const size = rng.range(26, 62);
      this.banks.push({ x: cx, y: cy, z: cz, r: size * 2 });
      for (let i = 0; i < perBank; i++) {
        const sc = size * rng.range(0.5, 1.0);
        p.set(cx + rng.range(-1.6, 1.6) * size, cy + rng.range(-0.15, 0.35) * size, cz + rng.range(-1.2, 1.2) * size);
        s.set(sc * 1.3, sc * 0.62, sc);
        m.compose(p, q, s);
        mesh.setMatrixAt(k++, m);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    return mesh;
  }

  update(dt, cameraPos) {
    this.mat.uniforms.uTime.value += dt;
    this.dome.position.copy(cameraPos);
    // slow drift of the cloud banks
    this.puffs.position.x = Math.sin(this.mat.uniforms.uTime.value * 0.01) * 40;
  }
}
