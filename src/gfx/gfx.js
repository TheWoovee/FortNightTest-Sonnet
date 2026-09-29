// Renderer, lighting rig and post-processing chain (bloom → colour grade → tone-map).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

// Shared palette so sky, fog and water all agree on the horizon colour.
export const SKY = {
  horizon: new THREE.Color('#bfe4ff'),
  zenith: new THREE.Color('#2f86ea'),
  sun: new THREE.Color('#fff1c9'),
  sunDir: new THREE.Vector3(0.52, 0.66, 0.42).normalize(),
};

const GradeShader = {
  name: 'GradeShader',
  uniforms: {
    tDiffuse: { value: null },
    uVignette: { value: 0.32 },
    uSaturation: { value: 1.16 },
    uContrast: { value: 1.06 },
    uStorm: { value: 0 },
    uDamage: { value: 0 },
    uHeal: { value: 0 },
    uUnderwater: { value: 0 },
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float uVignette, uSaturation, uContrast, uStorm, uDamage, uHeal, uUnderwater, uTime;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSaturation);
      col = (col - 0.18) * uContrast + 0.18;
      col = max(col, 0.0);
      vec2 q = vUv - 0.5;
      float edge = smoothstep(0.22, 0.78, length(q * vec2(1.15, 1.0)));   // 0 centre → 1 corners
      col *= 1.0 - edge * uVignette;
      // storm: desaturate towards violet, pulsing purple edges
      float pulse = 0.85 + 0.15 * sin(uTime * 2.2);
      col = mix(col, vec3(l) * vec3(0.78, 0.5, 1.2), uStorm * 0.32);
      col += vec3(0.38, 0.08, 0.78) * uStorm * (0.08 + edge * 0.55) * pulse;
      // damage flash / heal glow
      col = mix(col, vec3(0.95, 0.04, 0.04), uDamage * (0.12 + edge * 0.65));
      col += vec3(0.1, 0.55, 0.9) * uHeal * edge * 0.25;
      // underwater tint
      col = mix(col, col * vec3(0.35, 0.75, 1.0) + vec3(0.0, 0.05, 0.12), uUnderwater);
      gl_FragColor = vec4(col, c.a);
    }
  `,
};

export class Gfx {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.quality = opts.quality || 'high';
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer = renderer;
    this.basePixelRatio = Math.min(window.devicePixelRatio || 1, opts.maxPixelRatio ?? 1.75);
    this.renderScale = 1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = this.quality !== 'low';
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.info.autoReset = false;

    this.scene = new THREE.Scene();
    this.scene.background = SKY.horizon.clone();
    this.scene.fog = new THREE.Fog(SKY.horizon.clone(), 260, 1900);
    this.fogBase = SKY.horizon.clone();
    this.fogStorm = new THREE.Color('#6a3fb8');

    this.camera = new THREE.PerspectiveCamera(78, 1, 0.08, 6000);
    this.camera.rotation.order = 'YXZ';

    this._buildLights();
    this._buildComposer();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  _buildLights() {
    const scene = this.scene;
    this.hemi = new THREE.HemisphereLight(0xcfe8ff, 0x9a8a58, 1.15);
    scene.add(this.hemi);

    const sun = new THREE.DirectionalLight(0xfff0d0, 2.75);
    sun.castShadow = this.renderer.shadowMap.enabled;
    const sh = sun.shadow;
    this.shadowSize = this.quality === 'high' ? 2048 : 1024;
    sh.mapSize.set(this.shadowSize, this.shadowSize);
    this.shadowExtent = 62;
    const e = this.shadowExtent;
    sh.camera.left = -e; sh.camera.right = e; sh.camera.top = e; sh.camera.bottom = -e;
    sh.camera.near = 1; sh.camera.far = 420;
    sh.bias = -0.0006;
    sh.normalBias = 0.06;
    sh.radius = 2.4;
    scene.add(sun, sun.target);
    this.sun = sun;
  }

  _buildComposer() {
    const r = this.renderer;
    const size = r.getSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: this.quality === 'low' ? 0 : 4 });
    this.composer = new EffectComposer(r, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.32, 0.65, 0.92);
    this.bloom.enabled = this.quality === 'high';
    this.composer.addPass(this.bloom);
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);
    this.composer.addPass(new OutputPass());
    this.post = this.grade.uniforms;
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const pr = this.basePixelRatio * this.renderScale;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.composer.setPixelRatio(pr);
    this.composer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  setRenderScale(s) {
    s = Math.max(0.5, Math.min(1, s));
    if (Math.abs(s - this.renderScale) < 0.01) return;
    this.renderScale = s;
    this.resize();
  }

  /** Follow a focus point with the sun's shadow frustum (texel-snapped to avoid shimmer). */
  updateSun(focus) {
    const sun = this.sun;
    const texel = (this.shadowExtent * 2) / this.shadowSize;
    // Build light-space basis to snap in.
    const dir = SKY.sunDir;
    const up = Math.abs(dir.y) > 0.95 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, dir).normalize();
    const realUp = new THREE.Vector3().crossVectors(dir, right).normalize();
    const px = Math.round(focus.dot(right) / texel) * texel;
    const py = Math.round(focus.dot(realUp) / texel) * texel;
    const pz = focus.dot(dir);
    const snapped = new THREE.Vector3().addScaledVector(right, px).addScaledVector(realUp, py).addScaledVector(dir, pz);
    sun.target.position.copy(snapped);
    sun.position.copy(snapped).addScaledVector(dir, 240);
    sun.target.updateMatrixWorld();
  }

  render() {
    this.renderer.info.reset();
    this.composer.render();
  }
}
