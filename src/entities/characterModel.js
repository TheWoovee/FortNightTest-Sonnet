// Stylised humanoid: procedural rig (merged parts → few draw calls), outfits, IK-driven hands, and a
// full procedural animation set (locomotion, aim, recoil, reload, pickaxe, heal, build, skydive, glide, swim, death).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { clamp, damp, lerp, smoothstep, angleDiff, clamp01 } from '../util/math.js';

const DOWN = new THREE.Vector3(0, -1, 0);
const _qDance = new THREE.Quaternion(), _eDance = new THREE.Euler();
const V = () => new THREE.Vector3();

// ---- geometry helpers --------------------------------------------------------------------------------------
function colored(geo, color, gradient = 0.0) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (g.attributes.uv) g.deleteAttribute('uv');
  const c = new THREE.Color(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  g.computeBoundingBox();
  const { min, max } = g.boundingBox;
  const h = Math.max(max.y - min.y, 1e-4);
  const pos = g.attributes.position;
  for (let i = 0; i < n; i++) {
    const k = 1 - gradient * (1 - (pos.getY(i) - min.y) / h);
    arr[i * 3] = c.r * k; arr[i * 3 + 1] = c.g * k; arr[i * 3 + 2] = c.b * k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}
function at(geo, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  geo.applyMatrix4(m);
  return geo;
}
const merge = (list) => {
  const m = mergeGeometries(list, false);
  m.computeBoundingSphere();
  return m;
};
const capsule = (r, len, seg = 4, rad = 8) => new THREE.CapsuleGeometry(r, len, seg, rad);
const sphere = (r, w = 10, h = 8) => new THREE.SphereGeometry(r, w, h);
const rbox = (w, h, d, r = 0.05, seg = 2) => new RoundedBoxGeometry(w, h, d, seg, r);

// ---- outfits ---------------------------------------------------------------------------------------------------
const SKINS = [0xf6cfa8, 0xe0b088, 0xc48a5a, 0x93603a, 0x6b4128, 0xffdcc0];
const SHIRTS = [0xff5a5f, 0x3aa0ff, 0x2ecc71, 0xffc93a, 0xb26cff, 0xff8a3d, 0x2ee6c8, 0xff6bb5, 0xf2f2f2, 0x7cd13a];
const PANTS = [0x2b3a55, 0x3a3f4a, 0x6a5238, 0x27496d, 0x55632a, 0x6b2f3a, 0x1f2430, 0x8b6f47];
const HAIRS = [0x2b1b0e, 0x6b3f1d, 0xd9b44a, 0x111111, 0xb5341c, 0x2a5fff, 0xe8d8b0, 0xff5fa2];
const HATS = [null, null, 'cap', 'beanie', 'helmet', 'bandana', 'headband'];
const HAIRSTYLES = ['short', 'spiky', 'long', 'bun', 'buzz', 'mohawk', 'none'];

export function randomOutfit(rng) {
  const shirt = rng.pick(SHIRTS);
  let accent = rng.pick(SHIRTS);
  while (accent === shirt) accent = rng.pick(SHIRTS);
  return {
    skin: rng.pick(SKINS), shirt, accent, pants: rng.pick(PANTS), shoes: rng.pick([0xf2f2f2, 0x222222, 0xd9483b, 0x3d8bd9, 0xf0c41c]),
    hair: rng.pick(HAIRS), hat: rng.pick(HATS), hatColor: rng.pick(SHIRTS), hairStyle: rng.pick(HAIRSTYLES),
    glasses: rng.chance(0.22), glove: rng.chance(0.35), vest: rng.chance(0.4), gliderColor: rng.pick(SHIRTS), gliderColor2: rng.pick(SHIRTS),
    scale: rng.range(0.96, 1.05),
  };
}

export const PLAYER_OUTFIT = {
  skin: 0xf0c49a, shirt: 0x2f8cff, accent: 0xffc93a, pants: 0x2b3a55, shoes: 0xf2f2f2, hair: 0x6b3f1d, hat: 'cap', hatColor: 0xffc93a,
  hairStyle: 'short', glasses: false, glove: true, vest: true, gliderColor: 0x2f8cff, gliderColor2: 0xffc93a, scale: 1,
};

function buildTorso(o) {
  const parts = [];
  parts.push(colored(at(rbox(0.40, 0.50, 0.24, 0.07), 0, 0.27, 0), o.shirt, 0.18));
  parts.push(colored(at(rbox(0.36, 0.22, 0.23, 0.06), 0, -0.01, 0), o.pants, 0.1));
  parts.push(colored(at(new THREE.BoxGeometry(0.375, 0.05, 0.235), 0, 0.10, 0), 0x3a2a1c));    // belt
  if (o.vest) parts.push(colored(at(rbox(0.43, 0.33, 0.27, 0.06), 0, 0.33, 0.005), o.accent, 0.12));
  parts.push(colored(at(rbox(0.30, 0.36, 0.14, 0.05), 0, 0.30, 0.19), o.accent, 0.2));           // backpack
  parts.push(colored(at(rbox(0.22, 0.14, 0.05, 0.03), 0, 0.42, 0.27), o.shirt, 0.15));            // pack flap
  parts.push(colored(at(capsule(0.05, 0.05, 3, 8), 0, 0.56, 0), o.skin));                          // neck
  return merge(parts);
}

function buildHead(o) {
  const parts = [];
  parts.push(colored(at(sphere(0.155, 14, 10), 0, 0.11, 0, 0, 0, 0, 1, 1.06, 1), o.skin, 0.06));
  // eyes (front is -Z)
  for (const s of [-1, 1]) {
    parts.push(colored(at(sphere(0.026, 6, 5), s * 0.058, 0.13, -0.138, 0, 0, 0, 1, 1.25, 0.6), 0x14161c));
    parts.push(colored(at(new THREE.BoxGeometry(0.06, 0.012, 0.02), s * 0.058, 0.172, -0.135, 0, 0, s * 0.12), o.hair));   // brows
  }
  parts.push(colored(at(new THREE.BoxGeometry(0.05, 0.011, 0.02), 0, 0.055, -0.15), 0x8a4a3a));       // mouth
  parts.push(colored(at(sphere(0.02, 6, 5), 0, 0.10, -0.157, 0, 0, 0, 1, 0.9, 0.9), o.skin));           // nose
  if (o.glasses) {
    parts.push(colored(at(new THREE.BoxGeometry(0.19, 0.05, 0.02), 0, 0.13, -0.15), 0x1a1a22));
  }
  const hs = o.hairStyle;
  const hairMat = o.hair;
  if (hs === 'short') {
    parts.push(colored(at(sphere(0.17, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), 0, 0.12, 0.012), hairMat));
  } else if (hs === 'buzz') {
    parts.push(colored(at(sphere(0.162, 12, 8), 0, 0.125, 0.012, 0, 0, 0, 1, 0.75, 1), hairMat));
  } else if (hs === 'spiky') {
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      parts.push(colored(at(new THREE.ConeGeometry(0.05, 0.13, 5), Math.cos(a) * 0.09, 0.27, Math.sin(a) * 0.09, Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4), hairMat));
    }
    parts.push(colored(at(sphere(0.162, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), 0, 0.125, 0.01), hairMat));
  } else if (hs === 'long') {
    parts.push(colored(at(sphere(0.17, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), 0, 0.12, 0.012), hairMat));
    parts.push(colored(at(rbox(0.3, 0.32, 0.1, 0.04), 0, 0.0, 0.12), hairMat));
  } else if (hs === 'bun') {
    parts.push(colored(at(sphere(0.17, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), 0, 0.12, 0.012), hairMat));
    parts.push(colored(at(sphere(0.07, 8, 6), 0, 0.3, 0.05), hairMat));
  } else if (hs === 'mohawk') {
    parts.push(colored(at(rbox(0.05, 0.13, 0.28, 0.02), 0, 0.28, 0.02), hairMat));
  }
  const hat = o.hat;
  if (hat === 'cap') {
    parts.push(colored(at(sphere(0.172, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), 0, 0.14, 0.005), o.hatColor));
    parts.push(colored(at(rbox(0.2, 0.02, 0.15, 0.01), 0, 0.15, -0.19), o.hatColor, 0.2));
  } else if (hat === 'beanie') {
    parts.push(colored(at(sphere(0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.56), 0, 0.14, 0.005), o.hatColor));
    parts.push(colored(at(sphere(0.045, 8, 6), 0, 0.33, 0), 0xffffff));
    parts.push(colored(at(new THREE.CylinderGeometry(0.182, 0.182, 0.045, 12), 0, 0.15, 0.005), o.accent));
  } else if (hat === 'helmet') {
    parts.push(colored(at(sphere(0.19, 12, 9, 0, Math.PI * 2, 0, Math.PI * 0.62), 0, 0.13, 0.005), o.hatColor));
    parts.push(colored(at(rbox(0.06, 0.03, 0.34, 0.012), 0, 0.31, 0.0), o.accent));
  } else if (hat === 'bandana') {
    parts.push(colored(at(new THREE.CylinderGeometry(0.165, 0.17, 0.055, 12), 0, 0.2, 0.005), o.hatColor));
    parts.push(colored(at(new THREE.BoxGeometry(0.06, 0.09, 0.02), 0.03, 0.14, 0.17, 0, 0, 0.3), o.hatColor));
  } else if (hat === 'headband') {
    parts.push(colored(at(new THREE.CylinderGeometry(0.163, 0.163, 0.035, 12), 0, 0.2, 0.005), o.hatColor));
  }
  return merge(parts);
}

const buildUpperArm = (o, sleeve) => merge([colored(at(capsule(0.056, 0.16, 3, 8), 0, -0.145, 0), sleeve, 0.12)]);
const buildForeArm = (o, sleeve) => merge([
  colored(at(capsule(0.05, 0.12, 3, 8), 0, -0.125, 0), o.glove ? sleeve : o.skin, 0.1),
  colored(at(sphere(0.058, 8, 6), 0, -0.275, 0), o.glove ? o.accent : o.skin),
]);
const buildThigh = (o) => merge([colored(at(capsule(0.076, 0.27, 3, 8), 0, -0.215, 0), o.pants, 0.12)]);
const buildShin = (o) => merge([
  colored(at(capsule(0.066, 0.26, 3, 8), 0, -0.215, 0), o.pants, 0.1),
  colored(at(rbox(0.125, 0.105, 0.27, 0.04), 0, -0.4, -0.055), o.shoes, 0.15),
  colored(at(rbox(0.13, 0.03, 0.28, 0.012), 0, -0.445, -0.055), 0xf5f5f5),
]);

function buildProxy(o) {
  return merge([
    colored(at(capsule(0.2, 0.72, 3, 8), 0, 0.85, 0), o.shirt, 0.3),
    colored(at(sphere(0.16, 8, 6), 0, 1.5, 0), o.skin),
    colored(at(capsule(0.16, 0.5, 2, 6), 0, 0.36, 0), o.pants, 0.2),
  ]);
}

function buildGlider(o) {
  const parts = [];
  const canopy = new THREE.SphereGeometry(1.55, 20, 8, 0, Math.PI * 2, 0, Math.PI * 0.5);
  canopy.scale(1.35, 0.62, 1.0);
  const g = canopy.toNonIndexed();
  const pos = g.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const c1 = new THREE.Color(o.gliderColor), c2 = new THREE.Color(o.gliderColor2);
  for (let i = 0; i < pos.count; i++) {
    const a = Math.atan2(pos.getZ(i), pos.getX(i));
    const seg = Math.floor(((a + Math.PI) / (Math.PI * 2)) * 10);
    const c = seg % 2 ? c1 : c2;
    const shade = 0.75 + 0.25 * (pos.getY(i) / 1.0);
    col[i * 3] = c.r * shade; col[i * 3 + 1] = c.g * shade; col[i * 3 + 2] = c.b * shade;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  if (g.attributes.uv) g.deleteAttribute('uv');
  parts.push(g);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const line = new THREE.CylinderGeometry(0.012, 0.012, 1.9, 4);
    at(line, Math.cos(a) * 1.0 * 0.5, -0.9, Math.sin(a) * 0.72 * 0.5, Math.sin(a) * 0.32, 0, -Math.cos(a) * 0.32);
    parts.push(colored(line, 0xe8e8e8));
  }
  parts.push(colored(at(new THREE.BoxGeometry(0.5, 0.04, 0.04), 0, -1.75, 0), 0x3a3f4a));
  return merge(parts);
}

// ---- material ------------------------------------------------------------------------------------------------------
let _sharedProgram = 0;
export function createCharacterMaterial() {
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
  const uniforms = { uFlash: { value: 0 }, uFade: { value: 1 } };
  mat.userData.uniforms = uniforms;
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uFlash = uniforms.uFlash;
    shader.uniforms.uFade = uniforms.uFade;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uFlash;\nuniform float uFade;')
      .replace('#include <opaque_fragment>', /* glsl */`
        {
          // soft fresnel rim + damage flash
          vec3 vdir = normalize(vViewPosition);
          float rim = pow(1.0 - clamp(dot(normalize(normal), vdir), 0.0, 1.0), 2.6);
          outgoingLight += vec3(0.42, 0.55, 0.75) * rim * 0.32;
          outgoingLight = mix(outgoingLight, vec3(1.0, 0.25, 0.2), uFlash * 0.55);
        }
        #include <opaque_fragment>
        gl_FragColor.a *= uFade;`);
  };
  mat.customProgramCacheKey = () => 'character-mat-v1';
  return mat;
}

// ---- IK ---------------------------------------------------------------------------------------------------------------------
const _d = V(), _p = V(), _e = V(), _u = V(), _f = V(), _t = V();
const _qU = new THREE.Quaternion(), _qF = new THREE.Quaternion();
function solveArm(S, T, pole, a, b, upper, fore) {
  _d.subVectors(T, S);
  let L = _d.length();
  const maxL = a + b - 0.004, minL = Math.abs(a - b) + 0.03;
  L = clamp(L, minL, maxL);
  _d.normalize();
  _t.copy(S).addScaledVector(_d, L);
  const cosA = (a * a + L * L - b * b) / (2 * a * L);
  const ang = Math.acos(clamp(cosA, -1, 1));
  _p.copy(pole).addScaledVector(_d, -pole.dot(_d));
  if (_p.lengthSq() < 1e-6) _p.set(0, -1, 0);
  _p.normalize();
  _e.copy(S).addScaledVector(_d, a * Math.cos(ang)).addScaledVector(_p, a * Math.sin(ang));
  _u.subVectors(_e, S).normalize();
  _f.subVectors(_t, _e).normalize();
  _qU.setFromUnitVectors(DOWN, _u);
  upper.quaternion.copy(_qU);
  _qF.setFromUnitVectors(DOWN, _f);
  fore.quaternion.copy(_qU).invert().multiply(_qF);
}

const ARM_UP = 0.29, ARM_FORE = 0.275;
const HIP_H = 0.88, THIGH = 0.43;

// pose presets for holding weapons: holder position/rotation in spine space
const HOLD = {
  rifle:   { hip: [0.14, 0.16, -0.20, 0, -0.05], ads: [0.05, 0.40, -0.24, 0, 0] },
  smg:     { hip: [0.13, 0.17, -0.18, 0, -0.05], ads: [0.05, 0.40, -0.22, 0, 0] },
  shotgun: { hip: [0.14, 0.15, -0.19, 0, -0.05], ads: [0.05, 0.40, -0.24, 0, 0] },
  sniper:  { hip: [0.14, 0.15, -0.18, 0, -0.05], ads: [0.04, 0.42, -0.22, 0, 0] },
  pistol:  { hip: [0.08, 0.27, -0.28, 0, 0], ads: [0.03, 0.42, -0.30, 0, 0] },
};

export class CharacterModel {
  constructor(outfit) {
    this.outfit = outfit;
    this.material = createCharacterMaterial();
    const o = outfit;
    const sleeve = o.shirt;
    const mesh = (geo) => { const m = new THREE.Mesh(geo, this.material); m.castShadow = true; m.frustumCulled = true; return m; };

    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.hips = new THREE.Group();
    this.spine = new THREE.Group();
    this.headPivot = new THREE.Group();
    this.holder = new THREE.Group();
    this.rig = new THREE.Group();          // everything (hidden when LOD swaps to proxy)
    this.root.add(this.rig);
    this.rig.add(this.body);
    this.body.add(this.hips);
    this.hips.position.y = HIP_H;
    this.hips.add(this.spine);
    this.spine.add(mesh(buildTorso(o)));
    this.spine.add(this.headPivot);
    this.headPivot.position.y = 0.58;
    this.headPivot.add(mesh(buildHead(o)));
    this.spine.add(this.holder);

    // arms
    this.shoulder = [new THREE.Group(), new THREE.Group()];   // 0 = left, 1 = right
    this.fore = [new THREE.Group(), new THREE.Group()];
    this.shoulderPos = [new THREE.Vector3(-0.255, 0.45, 0), new THREE.Vector3(0.255, 0.45, 0)];
    for (let i = 0; i < 2; i++) {
      this.shoulder[i].position.copy(this.shoulderPos[i]);
      this.shoulder[i].add(mesh(buildUpperArm(o, sleeve)));
      this.fore[i].position.y = -ARM_UP;
      this.fore[i].add(mesh(buildForeArm(o, sleeve)));
      this.shoulder[i].add(this.fore[i]);
      this.spine.add(this.shoulder[i]);
    }
    // legs
    this.thigh = [new THREE.Group(), new THREE.Group()];
    this.shin = [new THREE.Group(), new THREE.Group()];
    for (let i = 0; i < 2; i++) {
      this.thigh[i].position.set(i ? 0.1 : -0.1, 0, 0);
      this.thigh[i].add(mesh(buildThigh(o)));
      this.shin[i].position.y = -THIGH;
      this.shin[i].add(mesh(buildShin(o)));
      this.thigh[i].add(this.shin[i]);
      this.hips.add(this.thigh[i]);
    }
    // LOD proxy
    this.proxy = mesh(buildProxy(o));
    this.proxy.visible = false;
    this.proxy.castShadow = false;
    this.root.add(this.proxy);
    // glider
    this.glider = mesh(buildGlider(o));
    this.glider.visible = false;
    this.glider.castShadow = false;
    this.root.add(this.glider);

    this.root.scale.setScalar(o.scale || 1);

    // weapon handling
    this.weapon = null;       // { group, data, hold, kind }
    this.holderPos = new THREE.Vector3(0.14, 0.16, -0.2);
    this.holderRot = new THREE.Euler(0, 0, 0);
    this.holderQ = new THREE.Quaternion();
    this.phase = 0;
    this.time = Math.random() * 10;
    this.k = { emote: 0, crouch: 0, air: 0, sprint: 0, move: 0, ads: 0, armed: 0, swim: 0, fall: 0, glide: 0, dive: 0, dead: 0, lean: 0, twist: 0, ik: 0, squat: 0, use: 0 };
    this.detail = 0;
    this._tmp = { g: V(), f: V(), m: V(), pole: V() };
    this.flash = 0;
  }

  setDetail(level) {
    if (level === this.detail) return;
    this.detail = level;
    this.rig.visible = level === 0;
    this.proxy.visible = level === 1;
  }

  setShadows(on) {
    this.rig.traverse((o) => { if (o.isMesh) o.castShadow = on; });
  }

  /** Swap the held item model. item: {group, hold: 'rifle'|...|'melee'|'consumable'|'none'} */
  setHeld(item) {
    if (this.weapon?.group) this.holder.remove(this.weapon.group);
    this.weapon = item;
    if (item?.group) this.holder.add(item.group);
  }

  /** World-space muzzle position. */
  muzzleWorld(out) {
    const w = this.weapon;
    if (w?.data?.muzzle) out.set(...w.data.muzzle);
    else out.set(0, 0.04, -0.6);
    this.holder.localToWorld(out);
    return out;
  }
  headWorld(out) { out.set(0, 0.12, 0); this.headPivot.localToWorld(out); return out; }
  chestWorld(out) { out.set(0, 0.3, 0); this.spine.localToWorld(out); return out; }

  /**
   * Advance the animation. s = {
   *  speed, moveAngle (world move dir relative to body yaw), onGround, crouch, sprint, swim,
   *  mode: 'ground'|'freefall'|'glide'|'dead', aimPitch, aimYawRel (upper-body twist),
   *  ads (0..1 target), fireKick, reloadT (-1 none | 0..1), swingT (-1 | 0..1), useT (-1|0..1), building (bool),
   *  landImpact (0..1), hitFlinch (0..1), deadT, emote
   * }
   */
  update(dt, s) {
    this.time += dt;
    const k = this.k;
    const mode = s.mode;
    const armed = this.weapon && this.weapon.hold !== 'none';
    const hold = this.weapon?.hold || 'none';
    const isGun = HOLD[hold] !== undefined;

    k.crouch = damp(k.crouch, s.crouch ? 1 : 0, 14, dt);
    k.air = damp(k.air, !s.onGround && mode === 'ground' && !s.swim ? 1 : 0, 12, dt);
    k.sprint = damp(k.sprint, s.sprint && s.speed > 3.5 ? 1 : 0, 9, dt);
    k.move = damp(k.move, clamp01(s.speed / 5.2), 11, dt);
    k.ads = damp(k.ads, s.ads || 0, 16, dt);
    k.swim = damp(k.swim, s.swim ? 1 : 0, 8, dt);
    k.fall = damp(k.fall, mode === 'freefall' ? 1 : 0, 6, dt);
    k.glide = damp(k.glide, mode === 'glide' ? 1 : 0, 6, dt);
    k.dead = damp(k.dead, mode === 'dead' ? 1 : 0, 9, dt);
    k.use = damp(k.use, s.useT >= 0 ? 1 : 0, 12, dt);
    k.squat = damp(k.squat, s.landImpact || 0, 16, dt);
    k.armed = damp(k.armed, armed || s.building ? 1 : 0, 10, dt);
    k.emote = damp(k.emote, s.emote && mode === 'ground' ? 1 : 0, 9, dt);

    // ---- locomotion phase ---------------------------------------------------------------------------------
    const spd = s.speed;
    // direction of travel relative to facing → fold into leg yaw, reverse phase when moving backward
    let rel = s.moveAngle || 0;
    let legYaw = rel, dirSign = 1;
    if (Math.abs(rel) > Math.PI / 2) { legYaw = rel > 0 ? rel - Math.PI : rel + Math.PI; dirSign = -1; }
    if (spd < 0.4) legYaw = 0;
    this.k.lean = damp(this.k.lean, legYaw, 10, dt);
    this.phase += dt * spd * 3.0 * dirSign * (s.onGround || s.swim ? 1 : 0.2);
    const ph = this.phase;
    const sw = Math.sin(ph), cw = Math.cos(ph);
    const runAmt = k.move * (1 - k.crouch * 0.4);
    const A = lerp(0.42, 0.95, k.sprint) * runAmt;
    const bend = lerp(0.35, 1.25, k.sprint) * runAmt;

    // ---- legs + hips (ground) ------------------------------------------------------------------------------------
    const hipsY0 = HIP_H;
    const crouchDrop = k.crouch * 0.3 + k.squat * 0.18;
    let hipY = hipsY0 - crouchDrop + Math.abs(Math.sin(ph)) * 0.035 * runAmt;
    const airSpread = k.air;
    const squatTheta = Math.acos(clamp((hipsY0 - crouchDrop) / (2 * THIGH), 0, 1));
    for (let i = 0; i < 2; i++) {
      const side = i ? 1 : -1;
      const p = i ? sw : -sw;              // opposite legs
      const c = i ? cw : -cw;
      let tx = p * A + squatTheta * 1.0;
      let sx = -(0.06 + bend * Math.max(0, c) * 1.0) - squatTheta * 2.0 + (0.0);
      // running knee lift uses the swing derivative sign; keep planted-leg straighter
      tx += 0;
      // airborne pose: one leg forward, one back
      tx = lerp(tx, (i ? 0.55 : -0.25) + squatTheta * 0.5, airSpread * 0.85);
      sx = lerp(sx, i ? -0.6 : -1.1, airSpread * 0.85);
      this.thigh[i].rotation.set(tx, 0, side * 0.03 * (1 + k.crouch));
      this.shin[i].rotation.set(sx, 0, 0);
    }
    this.hips.position.y = hipY;
    this.hips.rotation.set(0, this.k.lean * (1 - k.fall - k.glide) * 0.9, Math.sin(ph) * 0.03 * runAmt);
    this.body.rotation.set(0, 0, 0);
    this.body.position.set(0, 0, 0);

    // ---- spine / aiming ----------------------------------------------------------------------------------------------------
    const pitch = clamp(s.aimPitch || 0, -1.1, 1.1);
    const twist = s.aimYawRel || 0;
    let spineX = pitch * 0.5 + runAmt * 0.06 + k.sprint * 0.16 + s.landImpact * 0.1 + (s.hitFlinch || 0) * 0.18;
    let spineY = -this.hips.rotation.y + twist;
    let spineZ = -Math.sin(ph) * 0.03 * runAmt;
    if (s.fireKick) spineX -= s.fireKick * 0.03;
    this.spine.rotation.set(spineX, spineY, spineZ);
    this.headPivot.rotation.set(pitch * 0.35 - 0.05, 0, 0);

    // ---- default arm targets (swinging) ---------------------------------------------------------------------------------
    const T = this._tmp;
    const armSwing = -p0(sw) * 0.75 * runAmt;
    // ---- holder (weapon pose) ----------------------------------------------------------------------------------------------------
    let hp = this.holderPos, hr = this.holderRot;
    let tgtPos = V(), tgtRot = [0, 0, 0];
    let useGunIK = false, useRightOnly = false, useBoth = false;
    let leftTarget = null, rightTarget = null;

    if (mode === 'ground' && !s.swim) {
      if (isGun) {
        const H = HOLD[hold];
        const hipP = H.hip, adsP = H.ads;
        const m = k.ads;
        let px = lerp(hipP[0], adsP[0], m), py = lerp(hipP[1], adsP[1], m), pz = lerp(hipP[2], adsP[2], m);
        let rx = 0, ry = lerp(hipP[4], adsP[4], m), rz = 0;
        // sprint: lower the weapon across the body
        px -= k.sprint * 0.04; py -= k.sprint * 0.06; pz += k.sprint * 0.03;
        rx -= k.sprint * 0.55 * (1 - m); ry += k.sprint * 0.25 * (1 - m);
        // idle sway / breathing + move bob
        py += Math.sin(this.time * 1.6) * 0.004 + Math.abs(sw) * 0.012 * runAmt;
        px += Math.sin(this.time * 1.1) * 0.003 + cw * 0.008 * runAmt;
        // recoil
        const kick = s.fireKick || 0;
        pz += kick * 0.06; rx += kick * 0.1; py += kick * 0.01;
        // reload dip
        let reloadPull = 0;
        if (s.reloadT >= 0) {
          const t = s.reloadT;
          const dip = Math.sin(clamp01(t / 0.2) * Math.PI * 0.5) * (1 - smoothstep(0.8, 1.0, t));
          rx -= dip * 0.5; py -= dip * 0.08; px -= dip * 0.04;
          rz += dip * 0.25;
          reloadPull = dip;
        }
        // ADS raises the weapon; hip pitch follows aim
        rx += pitch * 0.5;
        tgtPos.set(px, py, pz); tgtRot = [rx, ry, rz];
        useBoth = true;
        // left hand target: fore-grip, or magazine during reload
        const d = this.weapon.data;
        rightTarget = d.grip; leftTarget = d.fore;
        if (s.reloadT >= 0) {
          const t = s.reloadT;
          // 0-.2 move to mag, .2-.55 pull/insert, .55-.8 slap, .8-1 return
          const mag = d.mag;
          let w = 0;
          if (t < 0.2) w = smoothstep(0, 0.2, t);
          else if (t < 0.8) w = 1;
          else w = 1 - smoothstep(0.8, 1.0, t);
          const wob = t > 0.25 && t < 0.6 ? Math.sin((t - 0.25) / 0.35 * Math.PI) * 0.09 : 0;
          const tx = lerp(d.fore[0], mag[0], w), ty = lerp(d.fore[1], mag[1], w) - wob, tz = lerp(d.fore[2], mag[2], w);
          leftTarget = [tx, ty, tz];
          if (hold === 'shotgun' && t > 0.2 && t < 0.85) {
            // pump loading: hand works back and forth
            const cyc = Math.sin(((t - 0.2) / 0.65) * Math.PI * 5);
            leftTarget = [d.fore[0], d.fore[1] - 0.04, d.fore[2] + 0.16 * (0.5 + 0.5 * cyc)];
          }
        }
      } else if (hold === 'melee') {
        // pickaxe: carried on the right, chopping swing driven by swingT
        let px = 0.24, py = 0.12, pz = -0.16, rx = 0.45, ry = 0, rz = 0.1;
        px += Math.sin(this.time * 1.2) * 0.003; py += Math.abs(sw) * 0.01 * runAmt;
        rx += k.sprint * -0.2;
        if (s.swingT >= 0) {
          const t = s.swingT;
          let a;
          if (t < 0.32) a = lerp(0.45, 1.05, smoothstep(0, 0.32, t));
          else if (t < 0.5) a = lerp(1.05, -1.5, smoothstep(0.32, 0.5, t));
          else a = lerp(-1.5, 0.45, smoothstep(0.5, 1.0, t));
          rx = a;
          const lift = t < 0.32 ? smoothstep(0, 0.32, t) : t < 0.5 ? 1 - smoothstep(0.32, 0.5, t) : 0;
          py += lift * 0.2; pz += (t >= 0.32 && t < 0.62 ? -0.16 * smoothstep(0.32, 0.5, t) * (1 - smoothstep(0.55, 0.62, t)) : 0);
          ry = -0.15 * lift;
        }
        tgtPos.set(px, py, pz); tgtRot = [rx, ry, rz];
        useRightOnly = true;
        rightTarget = this.weapon.data.grip;
      } else if (hold === 'consumable') {
        tgtPos.set(0.04, 0.3 + Math.sin(this.time * 6) * 0.004 * k.use, -0.26); tgtRot = [0.1, 0, 0];
        useBoth = true;
        rightTarget = [0.09, 0.03, 0.02]; leftTarget = [-0.09, 0.03, 0.02];
        if (s.useT >= 0) { tgtPos.y += Math.sin(s.useT * Math.PI * 4) * 0.012; }
      }
    }

    // holder smoothing
    const kh = 1 - Math.exp(-(s.ads ? 26 : 16) * dt);
    hp.lerp(tgtPos.length() || tgtPos.x || tgtPos.y ? tgtPos : hp, kh);
    hr.x = lerp(hr.x, tgtRot[0], kh); hr.y = lerp(hr.y, tgtRot[1], kh); hr.z = lerp(hr.z, tgtRot[2], kh);
    this.holder.position.copy(hp);
    this.holder.rotation.set(hr.x, hr.y, hr.z);
    this.holder.updateMatrix();
    this.holder.visible = !!this.weapon?.group && mode === 'ground' && !s.swim && !s.building;

    // ---- arms ---------------------------------------------------------------------------------------------------------------
    const poleR = T.pole.set(0.55, -1, 0.35).normalize();
    const poleL = new THREE.Vector3(-0.55, -1, 0.35).normalize();
    if (mode === 'ground' && !s.swim && (useBoth || useRightOnly) && this.weapon?.group) {
      const gR = T.g.set(...rightTarget).applyMatrix4(this.holder.matrix);
      solveArm(this.shoulderPos[1], gR, poleR, ARM_UP, ARM_FORE, this.shoulder[1], this.fore[1]);
      if (useBoth) {
        const gL = T.f.set(...leftTarget).applyMatrix4(this.holder.matrix);
        solveArm(this.shoulderPos[0], gL, poleL, ARM_UP, ARM_FORE, this.shoulder[0], this.fore[0]);
      } else {
        const sl = armSwing;
        this.shoulder[0].rotation.set(sl, 0, 0.08);
        this.fore[0].rotation.set(0.25 + Math.max(0, -sl) * 0.6, 0, 0);
        this.shoulder[0].quaternion.setFromEuler(this.shoulder[0].rotation);
        this.fore[0].quaternion.setFromEuler(this.fore[0].rotation);
      }
    } else if (mode === 'ground' && !s.swim) {
      // unarmed / building: swinging arms or hands-forward building pose
      const bld = s.building ? 1 : 0;
      for (let i = 0; i < 2; i++) {
        const sgn = i ? 1 : -1;
        const swing = (i ? -1 : 1) * armSwing;
        if (bld) {
          const tgt = T.g.set(sgn * 0.13, 0.30, -0.42 + Math.sin(this.time * 3 + i) * 0.01);
          solveArm(this.shoulderPos[i], tgt, i ? poleR : poleL, ARM_UP, ARM_FORE, this.shoulder[i], this.fore[i]);
        } else {
          this.shoulder[i].quaternion.setFromEuler(new THREE.Euler(swing, 0, sgn * (0.06 + k.crouch * 0.05 + airSpread * 0.9)));
          this.fore[i].quaternion.setFromEuler(new THREE.Euler(0.22 + Math.max(0, swing * (i ? 1 : 1)) * 0.5 + k.sprint * 0.6 + airSpread * 0.3, 0, 0));
        }
      }
    }

    // ---- special modes ---------------------------------------------------------------------------------------------------------------
    this.glider.visible = mode === 'glide' || (k.glide > 0.05 && mode !== 'dead');
    if (mode === 'freefall') {
      // spread-eagle, belly down
      this.body.rotation.x = lerp(this.body.rotation.x, -1.32 + pitch * 0.15, 1 - Math.exp(-6 * dt));
      this.hips.position.y = HIP_H - 0.1;
      const flap = Math.sin(this.time * 14) * 0.05;
      for (let i = 0; i < 2; i++) {
        const sgn = i ? 1 : -1;
        this.shoulder[i].quaternion.setFromEuler(new THREE.Euler(0.55 + flap, 0, sgn * 1.15));
        this.fore[i].quaternion.setFromEuler(new THREE.Euler(0.25, 0, 0));
        this.thigh[i].rotation.set(-0.35 + flap, 0, sgn * 0.42);
        this.shin[i].rotation.set(-0.5, 0, 0);
      }
      this.spine.rotation.set(0.25, 0, 0);
      this.holder.visible = false;
      this.hips.rotation.set(0, 0, 0);
    } else if (mode === 'glide') {
      this.body.rotation.x = lerp(this.body.rotation.x, 0.08 + Math.sin(this.time * 1.5) * 0.02, 1 - Math.exp(-8 * dt));
      this.hips.position.y = HIP_H + 0.02;
      for (let i = 0; i < 2; i++) {
        const sgn = i ? 1 : -1;
        const tgt = T.g.set(sgn * 0.2, 0.98 + Math.sin(this.time * 2) * 0.01, -0.05);
        solveArm(this.shoulderPos[i], tgt, i ? poleR : poleL, ARM_UP, ARM_FORE, this.shoulder[i], this.fore[i]);
        this.thigh[i].rotation.set(0.15 + i * 0.12, 0, sgn * 0.07);
        this.shin[i].rotation.set(-0.25 - i * 0.12, 0, 0);
      }
      this.spine.rotation.set(0.03, 0, 0);
      this.holder.visible = false;
      this.hips.rotation.set(0, 0, 0);
      this.glider.position.set(0, 2.05, 0);
      this.glider.rotation.set(0, 0, 0);
    } else if (s.swim) {
      // prone crawl
      this.body.rotation.x = lerp(this.body.rotation.x, -1.25, 1 - Math.exp(-7 * dt));
      const stroke = this.time * (3 + spd * 0.8);
      this.hips.position.y = HIP_H - 0.22;
      for (let i = 0; i < 2; i++) {
        const sgn = i ? 1 : -1;
        const a = Math.sin(stroke + i * Math.PI);
        this.shoulder[i].quaternion.setFromEuler(new THREE.Euler(2.4 + a * 0.9, 0, sgn * (0.35 + Math.max(0, a) * 0.4)));
        this.fore[i].quaternion.setFromEuler(new THREE.Euler(0.4 + Math.max(0, -a) * 0.5, 0, 0));
        this.thigh[i].rotation.set(Math.sin(stroke * 1.6 + i * Math.PI) * 0.35, 0, sgn * 0.06);
        this.shin[i].rotation.set(-0.25 - Math.max(0, Math.sin(stroke * 1.6 + i * Math.PI)) * 0.4, 0, 0);
      }
      this.spine.rotation.set(0.35 + pitch * 0.2, 0, 0);
      this.hips.rotation.set(0, 0, 0);
      this.holder.visible = false;
    } else if (mode === 'dead') {
      const t = clamp01((s.deadT || 0) / 0.55);
      const e = 1 - Math.pow(1 - t, 3);
      this.body.rotation.x = e * 1.5 * (s.deadDir ?? 1);
      this.hips.position.y = lerp(hipY, 0.28, e);
      for (let i = 0; i < 2; i++) {
        const sgn = i ? 1 : -1;
        this.shoulder[i].quaternion.setFromEuler(new THREE.Euler(-0.3 * e, 0, sgn * (0.5 + 0.9 * e)));
        this.fore[i].quaternion.setFromEuler(new THREE.Euler(0.3, 0, 0));
        this.thigh[i].rotation.set(0.15 * e, 0, sgn * 0.25 * e);
        this.shin[i].rotation.set(-0.3 * e, 0, 0);
      }
      this.holder.visible = false;
    } else {
      // ground: ease body tilt back to neutral
      this.body.rotation.x = lerp(this.body.rotation.x, 0, 1 - Math.exp(-10 * dt));
    }

    // ---- dance emote (blended over the base pose) ----------------------------------------------------------
    if (k.emote > 0.01 && mode === 'ground') {
      const e = k.emote, tt = this.time * 7.2;
      const bounce = Math.abs(Math.sin(tt)) * 0.07;
      this.hips.position.y = lerp(this.hips.position.y, HIP_H - 0.07 + bounce, e);
      this.hips.rotation.y = lerp(this.hips.rotation.y, Math.sin(tt * 0.5) * 0.6, e);
      this.hips.rotation.z = lerp(this.hips.rotation.z, Math.sin(tt) * 0.09, e);
      this.spine.rotation.z = lerp(this.spine.rotation.z, -Math.sin(tt) * 0.13, e);
      this.spine.rotation.y = lerp(this.spine.rotation.y, -Math.sin(tt * 0.5) * 0.4, e);
      this.headPivot.rotation.x = lerp(this.headPivot.rotation.x, Math.sin(tt * 2) * 0.14, e);
      const qa = _qDance, eu = _eDance;
      for (let i = 0; i < 2; i++) {
        const sgn = i ? 1 : -1, ph = i * Math.PI;
        eu.set(2.5 + Math.sin(tt + ph) * 0.45, 0, sgn * (0.35 + Math.abs(Math.sin(tt * 0.5 + ph)) * 0.3));
        qa.setFromEuler(eu);
        this.shoulder[i].quaternion.slerp(qa, e);
        eu.set(0.5 + Math.abs(Math.sin(tt + ph)) * 0.9, 0, 0);
        qa.setFromEuler(eu);
        this.fore[i].quaternion.slerp(qa, e);
        this.thigh[i].rotation.x = lerp(this.thigh[i].rotation.x, Math.sin(tt + ph) * 0.45, e);
        this.thigh[i].rotation.z = lerp(this.thigh[i].rotation.z, sgn * 0.12, e);
        this.shin[i].rotation.x = lerp(this.shin[i].rotation.x, -Math.abs(Math.sin(tt + ph)) * 0.7 - 0.1, e);
      }
      if (e > 0.4) this.holder.visible = false;
    }

    // material effects
    this.flash = damp(this.flash, 0, 10, dt);
    this.material.userData.uniforms.uFlash.value = this.flash;
  }

  hitFlash(v = 1) { this.flash = Math.max(this.flash, v); }
  setFade(v) { this.material.userData.uniforms.uFade.value = v; this.material.transparent = v < 0.999; this.material.needsUpdate = false; }
}

const p0 = (x) => x;
