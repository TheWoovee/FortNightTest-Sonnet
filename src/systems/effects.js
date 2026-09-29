// Visual effects: pooled particles (soft + additive), beam tracers, muzzle flashes, debris chips, rings.
import * as THREE from 'three';
import { clamp, clamp01, lerp } from '../util/math.js';

// ---- textures ------------------------------------------------------------------------------------------------------
function canvasTex(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const softTex = () => canvasTex(64, (g, s) => {
  const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.45, 'rgba(255,255,255,0.65)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, s, s);
});
const starTex = () => canvasTex(128, (g, s) => {
  g.translate(s / 2, s / 2);
  const glow = g.createRadialGradient(0, 0, 0, 0, 0, s / 2);
  glow.addColorStop(0, 'rgba(255,240,200,1)'); glow.addColorStop(0.3, 'rgba(255,190,80,0.7)'); glow.addColorStop(1, 'rgba(255,140,0,0)');
  g.fillStyle = glow; g.fillRect(-s / 2, -s / 2, s, s);
  g.fillStyle = 'rgba(255,255,235,0.95)';
  for (let i = 0; i < 4; i++) {
    g.rotate(Math.PI / 2);
    g.beginPath(); g.moveTo(0, -s * 0.06); g.lineTo(s * 0.48, 0); g.lineTo(0, s * 0.06); g.closePath(); g.fill();
  }
});
const ringTex = () => canvasTex(128, (g, s) => {
  g.strokeStyle = 'rgba(255,255,255,0.95)'; g.lineWidth = s * 0.06;
  g.beginPath(); g.arc(s / 2, s / 2, s * 0.44, 0, Math.PI * 2); g.stroke();
  const gr = g.createRadialGradient(s / 2, s / 2, s * 0.3, s / 2, s / 2, s * 0.5);
  gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.9, 'rgba(255,255,255,0.25)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, s, s);
});

// ---- point particle pool -----------------------------------------------------------------------------------------------
const pVert = /* glsl */`
  attribute float aSize; attribute vec4 aColor;
  uniform float uScale;
  varying vec4 vColor;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.1), 0.0, 220.0);
  }
`;
const pFrag = /* glsl */`
  uniform sampler2D uTex; varying vec4 vColor;
  void main() {
    vec4 t = texture2D(uTex, gl_PointCoord);
    gl_FragColor = vec4(vColor.rgb, vColor.a * t.a);
    if (gl_FragColor.a < 0.01) discard;
  }
`;

class ParticlePool {
  constructor(scene, n, additive, tex) {
    this.n = n;
    this.pos = new Float32Array(n * 3); this.vel = new Float32Array(n * 3);
    this.col = new Float32Array(n * 4); this.size = new Float32Array(n);
    this.life = new Float32Array(n); this.maxLife = new Float32Array(n);
    this.s0 = new Float32Array(n); this.s1 = new Float32Array(n);
    this.a0 = new Float32Array(n); this.a1 = new Float32Array(n);
    this.grav = new Float32Array(n); this.drag = new Float32Array(n);
    this.next = 0;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.uniforms = { uTex: { value: tex }, uScale: { value: 800 } };
    this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, vertexShader: pVert, fragmentShader: pFrag, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
    for (let i = 0; i < n; i++) this.life[i] = 0;
  }

  emit(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a0, a1, grav = 0, drag = 0) {
    const i = this.next; this.next = (this.next + 1) % this.n;
    const p = i * 3;
    this.pos[p] = x; this.pos[p + 1] = y; this.pos[p + 2] = z;
    this.vel[p] = vx; this.vel[p + 1] = vy; this.vel[p + 2] = vz;
    this.life[i] = life; this.maxLife[i] = life;
    this.s0[i] = s0; this.s1[i] = s1; this.a0[i] = a0; this.a1[i] = a1;
    const c = i * 4; this.col[c] = r; this.col[c + 1] = g; this.col[c + 2] = b; this.col[c + 3] = a0;
    this.size[i] = s0; this.grav[i] = grav; this.drag[i] = drag;
  }

  update(dt) {
    let any = false;
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.size[i] = 0; continue; }
      any = true;
      this.life[i] -= dt;
      const p = i * 3;
      const k = 1 - this.life[i] / this.maxLife[i];
      const drag = Math.exp(-this.drag[i] * dt);
      this.vel[p] *= drag; this.vel[p + 1] = this.vel[p + 1] * drag - this.grav[i] * dt; this.vel[p + 2] *= drag;
      this.pos[p] += this.vel[p] * dt; this.pos[p + 1] += this.vel[p + 1] * dt; this.pos[p + 2] += this.vel[p + 2] * dt;
      this.size[i] = lerp(this.s0[i], this.s1[i], k);
      this.col[i * 4 + 3] = lerp(this.a0[i], this.a1[i], k);
      if (this.life[i] <= 0) this.size[i] = 0;
    }
    if (any || this._dirty) {
      const g = this.points.geometry;
      g.attributes.position.needsUpdate = true; g.attributes.aColor.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
    }
    this._dirty = any;
  }
}

// ---- debris chips (instanced cubes with gravity) -------------------------------------------------------------------------
class DebrisPool {
  constructor(scene, n) {
    this.n = n;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    this.mesh = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ color: 0xffffff }), n);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    scene.add(this.mesh);
    this.p = new Float32Array(n * 3); this.v = new Float32Array(n * 3); this.rot = new Float32Array(n * 3); this.spin = new Float32Array(n * 3);
    this.life = new Float32Array(n); this.sz = new Float32Array(n);
    this.next = 0;
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._e = new THREE.Euler(); this._s = new THREE.Vector3(); this._pp = new THREE.Vector3();
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < n; i++) { this.mesh.setMatrixAt(i, zero); this.mesh.setColorAt(i, new THREE.Color(1, 1, 1)); }
    this.mesh.instanceColor.needsUpdate = true;
    this.terrain = null;
  }
  emit(x, y, z, vx, vy, vz, size, color, life = 1.1) {
    const i = this.next; this.next = (this.next + 1) % this.n;
    const p = i * 3;
    this.p[p] = x; this.p[p + 1] = y; this.p[p + 2] = z;
    this.v[p] = vx; this.v[p + 1] = vy; this.v[p + 2] = vz;
    this.rot[p] = Math.random() * 6; this.rot[p + 1] = Math.random() * 6; this.rot[p + 2] = Math.random() * 6;
    this.spin[p] = (Math.random() - 0.5) * 16; this.spin[p + 1] = (Math.random() - 0.5) * 16; this.spin[p + 2] = (Math.random() - 0.5) * 16;
    this.life[i] = life; this.sz[i] = size;
    this.mesh.setColorAt(i, color);
    this.mesh.instanceColor.needsUpdate = true;
  }
  update(dt) {
    const t = this.terrain;
    let dirty = false;
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) continue;
      dirty = true;
      this.life[i] -= dt;
      const p = i * 3;
      this.v[p + 1] -= 18 * dt;
      this.p[p] += this.v[p] * dt; this.p[p + 1] += this.v[p + 1] * dt; this.p[p + 2] += this.v[p + 2] * dt;
      const gh = t ? t.heightAt(this.p[p], this.p[p + 2]) : 0;
      if (this.p[p + 1] < gh + this.sz[i] * 0.5) {
        this.p[p + 1] = gh + this.sz[i] * 0.5;
        this.v[p + 1] *= -0.35; this.v[p] *= 0.6; this.v[p + 2] *= 0.6;
        this.spin[p] *= 0.5; this.spin[p + 1] *= 0.5; this.spin[p + 2] *= 0.5;
      }
      this.rot[p] += this.spin[p] * dt; this.rot[p + 1] += this.spin[p + 1] * dt; this.rot[p + 2] += this.spin[p + 2] * dt;
      const sc = this.life[i] > 0 ? this.sz[i] * Math.min(1, this.life[i] * 3) : 0;
      this._e.set(this.rot[p], this.rot[p + 1], this.rot[p + 2]);
      this._q.setFromEuler(this._e);
      this._pp.set(this.p[p], this.p[p + 1], this.p[p + 2]);
      this._s.set(sc, sc * 0.7, sc);
      this._m.compose(this._pp, this._q, this._s);
      this.mesh.setMatrixAt(i, this._m);
    }
    if (dirty) this.mesh.instanceMatrix.needsUpdate = true;
  }
}

// ---- beam tracers ----------------------------------------------------------------------------------------------------------
const tVert = /* glsl */`
  attribute vec3 aStart; attribute vec3 aEnd; attribute vec4 aCol; attribute float aWidth;
  varying vec2 vUv; varying vec4 vCol;
  void main() {
    vUv = uv; vCol = aCol;
    vec4 s = viewMatrix * vec4(aStart, 1.0);
    vec4 e = viewMatrix * vec4(aEnd, 1.0);
    vec3 dir = e.xyz - s.xyz;
    float len = length(dir);
    dir = len > 1e-5 ? dir / len : vec3(0.0, 0.0, 1.0);
    vec3 mid = mix(s.xyz, e.xyz, 0.5);
    vec3 side = normalize(cross(dir, mid));
    vec3 p = mix(s.xyz, e.xyz, uv.x) + side * (uv.y - 0.5) * aWidth;
    gl_Position = projectionMatrix * vec4(p, 1.0);
  }
`;
const tFrag = /* glsl */`
  varying vec2 vUv; varying vec4 vCol;
  void main() {
    float across = 1.0 - pow(abs(vUv.y * 2.0 - 1.0), 2.0);
    float along = pow(vUv.x, 1.6);
    float a = vCol.a * across * along;
    gl_FragColor = vec4(vCol.rgb * (1.0 + across), a);
  }
`;

class TracerPool {
  constructor(scene, n) {
    this.n = n;
    const base = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = base.index;
    geo.setAttribute('position', base.attributes.position);
    geo.setAttribute('uv', base.attributes.uv);
    this.start = new Float32Array(n * 3); this.end = new Float32Array(n * 3); this.col = new Float32Array(n * 4); this.width = new Float32Array(n);
    geo.setAttribute('aStart', new THREE.InstancedBufferAttribute(this.start, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aEnd', new THREE.InstancedBufferAttribute(this.end, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aCol', new THREE.InstancedBufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aWidth', new THREE.InstancedBufferAttribute(this.width, 1).setUsage(THREE.DynamicDrawUsage));
    geo.instanceCount = n;
    this.mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({
      vertexShader: tVert, fragmentShader: tFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    }));
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 6;
    scene.add(this.mesh);
    this.items = [];
    for (let i = 0; i < n; i++) this.items.push({ t: 99, life: 0, ax: 0, ay: 0, az: 0, bx: 0, by: 0, bz: 0, len: 0, speed: 0, r: 1, g: 1, b: 1, w: 0.05, tail: 8 });
    this.next = 0;
  }
  add(ax, ay, az, bx, by, bz, color, player) {
    const it = this.items[this.next]; this.next = (this.next + 1) % this.n;
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    it.len = Math.hypot(dx, dy, dz);
    it.ax = ax; it.ay = ay; it.az = az; it.bx = bx; it.by = by; it.bz = bz;
    it.dx = dx / (it.len || 1); it.dy = dy / (it.len || 1); it.dz = dz / (it.len || 1);
    it.t = 0; it.speed = 520; it.tail = Math.min(14, Math.max(2, it.len * 0.35));
    const c = new THREE.Color(color);
    it.r = c.r * 2.6; it.g = c.g * 2.6; it.b = c.b * 2.6;
    it.w = player ? 0.07 : 0.055;
    it.life = it.len / it.speed + 0.09;
    it.alpha = player ? 1 : 0.85;
  }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      const it = this.items[i];
      const a = i * 3, c = i * 4;
      if (it.t > it.life) { this.col[c + 3] = 0; this.width[i] = 0; continue; }
      it.t += dt;
      const head = Math.min(it.len, it.t * it.speed);
      const tailPos = Math.max(0, head - it.tail);
      this.start[a] = it.ax + it.dx * tailPos; this.start[a + 1] = it.ay + it.dy * tailPos; this.start[a + 2] = it.az + it.dz * tailPos;
      this.end[a] = it.ax + it.dx * head; this.end[a + 1] = it.ay + it.dy * head; this.end[a + 2] = it.az + it.dz * head;
      const fadeOut = it.t * it.speed > it.len ? clamp01(1 - (it.t - it.len / it.speed) / 0.09) : 1;
      this.col[c] = it.r; this.col[c + 1] = it.g; this.col[c + 2] = it.b; this.col[c + 3] = it.alpha * fadeOut;
      this.width[i] = it.w;
    }
    const g = this.mesh.geometry;
    g.attributes.aStart.needsUpdate = true; g.attributes.aEnd.needsUpdate = true; g.attributes.aCol.needsUpdate = true; g.attributes.aWidth.needsUpdate = true;
  }
}

// ---- main ------------------------------------------------------------------------------------------------------------------
const PAL = {
  dirt: [[0.55, 0.42, 0.26], [0.42, 0.55, 0.22]],
  stone: [[0.62, 0.64, 0.68], [0.5, 0.52, 0.56]],
  wood: [[0.85, 0.62, 0.33], [0.66, 0.45, 0.22]],
  metal: [[0.75, 0.78, 0.85], [0.5, 0.55, 0.65]],
  brick: [[0.75, 0.4, 0.3], [0.6, 0.3, 0.22]],
};

export class Effects {
  constructor(game) {
    this.game = game;
    const scene = game.gfx.scene;
    this.soft = new ParticlePool(scene, 1800, false, softTex());
    this.glow = new ParticlePool(scene, 900, true, starTex());
    this.debris = new DebrisPool(scene, 260);
    this.debris.terrain = game.terrain;
    this.tracers = new TracerPool(scene, 48);
    this.flashTex = starTex();
    this.flashes = [];
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.flashTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
      m.visible = false; m.renderOrder = 7;
      scene.add(m);
      this.flashes.push({ s: m, t: 0, life: 0.05 });
    }
    this.nextFlash = 0;
    this.rings = [];
    const rt = ringTex();
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: rt, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
      m.rotation.x = -Math.PI / 2; m.visible = false; m.renderOrder = 4;
      scene.add(m);
      this.rings.push({ m, t: 0, life: 0.7, s0: 0.3, s1: 3, color: new THREE.Color(1, 1, 1), active: false });
    }
    this.nextRing = 0;
    this._c = new THREE.Color();
  }

  update(dt) {
    const cam = this.game.gfx.camera;
    const h = this.game.gfx.renderer.domElement.height;
    const scale = h / (2 * Math.tan((cam.fov * Math.PI) / 360));
    this.soft.uniforms.uScale.value = scale; this.glow.uniforms.uScale.value = scale;
    this.soft.update(dt); this.glow.update(dt); this.debris.update(dt); this.tracers.update(dt);
    for (const f of this.flashes) {
      if (!f.s.visible) continue;
      f.t += dt;
      if (f.t > f.life) f.s.visible = false;
      else f.s.material.opacity = 1 - f.t / f.life;
    }
    for (const r of this.rings) {
      if (!r.active) continue;
      r.t += dt;
      const k = r.t / r.life;
      if (k >= 1) { r.active = false; r.m.visible = false; continue; }
      const s = lerp(r.s0, r.s1, 1 - Math.pow(1 - k, 2));
      r.m.scale.set(s, s, 1);
      r.m.material.opacity = (1 - k) * 0.9;
    }
  }

  // ---- tracers + muzzle -------------------------------------------------------------------------------------------------
  tracer(ax, ay, az, bx, by, bz, color, isPlayer) {
    this.tracers.add(ax, ay, az, bx, by, bz, color, isPlayer);
  }

  muzzleFlash(actor, p, W) {
    const f = this.flashes[this.nextFlash]; this.nextFlash = (this.nextFlash + 1) % this.flashes.length;
    f.s.visible = true; f.t = 0; f.life = W.id === 'sniper' ? 0.09 : 0.055;
    f.s.position.copy(p);
    const sc = (W.id === 'pump' ? 1.5 : W.id === 'sniper' ? 1.7 : W.id === 'pistol' ? 0.7 : 1.0) * (0.7 + Math.random() * 0.4);
    f.s.scale.set(sc, sc, 1);
    f.s.material.rotation = Math.random() * 6.28;
    f.s.material.opacity = 1;
    // smoke wisp
    this.soft.emit(p.x, p.y, p.z, (Math.random() - 0.5) * 0.4, 0.5 + Math.random() * 0.3, (Math.random() - 0.5) * 0.4, 0.7, 0.12, 0.5, 0.8, 0.8, 0.8, 0.22, 0, -0.3, 1.5);
  }

  // ---- impacts ------------------------------------------------------------------------------------------------------------
  impact(x, y, z, nx, ny, nz, material = 'dirt', kind) {
    const T = this.game.terrain;
    const wl = T.waterLevelAt(x, z);
    if (wl !== null && y < wl + 0.3) { this.splash(x, wl, z, 0.6); return; }
    const pal = PAL[material] || PAL.dirt;
    const c = pal[Math.random() < 0.5 ? 0 : 1];
    const n = 4 + (Math.random() * 2) | 0;
    for (let i = 0; i < n; i++) {
      this.soft.emit(x + nx * 0.05, y + ny * 0.05, z + nz * 0.05,
        (nx + (Math.random() - 0.5)) * 1.4, (ny + Math.random() * 0.6) * 1.4, (nz + (Math.random() - 0.5)) * 1.4,
        0.45 + Math.random() * 0.25, 0.1, 0.5 + Math.random() * 0.25, c[0], c[1], c[2], 0.75, 0, -0.5, 2.5);
    }
    if (material === 'metal' || material === 'stone') {
      for (let i = 0; i < 7; i++) {
        this.glow.emit(x, y, z, (nx + (Math.random() - 0.5) * 1.6) * 5, (ny + Math.random()) * 4, (nz + (Math.random() - 0.5) * 1.6) * 5,
          0.22 + Math.random() * 0.15, 0.13, 0.04, 1.0, 0.85, 0.4, 1, 0, 10, 0.6);
      }
    }
    const chips = material === 'wood' || material === 'stone' || material === 'brick' ? 3 : 2;
    for (let i = 0; i < chips; i++) {
      this._c.setRGB(c[0], c[1], c[2]);
      this.debris.emit(x, y, z, (nx + (Math.random() - 0.5)) * 3, (ny + Math.random()) * 3, (nz + (Math.random() - 0.5)) * 3, 0.07 + Math.random() * 0.05, this._c, 0.8);
    }
  }

  impactActor(x, y, z, head) {
    for (let i = 0; i < 6; i++) {
      this.glow.emit(x, y, z, (Math.random() - 0.5) * 4, Math.random() * 3, (Math.random() - 0.5) * 4, 0.28, 0.16, 0.03, 1, head ? 0.75 : 0.95, head ? 0.25 : 0.7, 1, 0, 6, 1);
    }
    this.soft.emit(x, y, z, 0, 0.3, 0, 0.3, 0.2, 0.55, 1, 1, 1, 0.5, 0, 0, 1);
  }

  dust(x, y, z, strength = 1) {
    const n = 6 + (strength * 6) | 0;
    const T = this.game.terrain;
    const wl = T.waterLevelAt(x, z);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + Math.random() * 0.5;
      this.soft.emit(x, y + 0.08, z, Math.cos(a) * (1.4 + strength * 1.6), 0.5 + Math.random() * 0.6, Math.sin(a) * (1.4 + strength * 1.6),
        0.55 + Math.random() * 0.35, 0.25, 0.9 + strength * 0.5, 0.75, 0.7, 0.6, 0.5, 0, -0.5, 3);
    }
  }

  splash(x, y, z, s = 1) {
    for (let i = 0; i < 10 * s; i++) {
      const a = Math.random() * Math.PI * 2, sp = 1 + Math.random() * 2.2 * s;
      this.soft.emit(x, y + 0.1, z, Math.cos(a) * sp, 2.5 + Math.random() * 3 * s, Math.sin(a) * sp, 0.7 + Math.random() * 0.4, 0.16, 0.06, 0.85, 0.95, 1, 0.9, 0, 12, 0.2);
    }
    this.ring(x, y + 0.06, z, 0.3 * s, 2.6 * s, 0.7, 1, 1, 1);
  }

  ring(x, y, z, s0, s1, life, r, g, b) {
    const R = this.rings[this.nextRing]; this.nextRing = (this.nextRing + 1) % this.rings.length;
    R.active = true; R.t = 0; R.life = life; R.s0 = s0; R.s1 = s1;
    R.m.visible = true; R.m.position.set(x, y, z); R.m.material.color.setRGB(r, g, b);
  }

  healPulse(actor, color) {
    const c = this._c.set(color);
    const p = actor.pos;
    this.ring(p.x, p.y + 0.05, p.z, 0.4, 2.4, 0.8, c.r, c.g, c.b);
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2, r = 0.3 + Math.random() * 0.5;
      this.glow.emit(p.x + Math.cos(a) * r, p.y + 0.2 + Math.random() * 0.5, p.z + Math.sin(a) * r, 0, 1.4 + Math.random(), 0, 0.9, 0.22, 0.06, c.r * 1.4, c.g * 1.4, c.b * 1.4, 1, 0, 0, 0.5);
    }
  }

  /** Burst of coloured sparkles (pickups, chest opening, level-ups). */
  sparkle(x, y, z, color, n = 16, spread = 2, up = 3) {
    const c = this._c.set(color);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, s = Math.random() * spread;
      this.glow.emit(x, y, z, Math.cos(a) * s, up * (0.5 + Math.random()), Math.sin(a) * s, 0.7 + Math.random() * 0.5, 0.2, 0.04, c.r * 1.5, c.g * 1.5, c.b * 1.5, 1, 0, 5, 1);
    }
  }

  /** Cartoon "poof" when a player is eliminated or a piece breaks. */
  poof(x, y, z, color = 0xffffff, size = 1) {
    const c = this._c.set(color);
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2, s = 1 + Math.random() * 3 * size;
      this.soft.emit(x, y + Math.random(), z, Math.cos(a) * s, Math.random() * 2.5, Math.sin(a) * s, 0.8 + Math.random() * 0.4, 0.3 * size, 1.2 * size, c.r, c.g, c.b, 0.8, 0, -0.3, 2.2);
    }
    this.sparkle(x, y + 1, z, color, 10, 2.5 * size, 2);
  }

  pieceBreak(x, y, z, hex, size = 1.5) {
    const c = new THREE.Color(hex);
    for (let i = 0; i < 14; i++) {
      this._c.copy(c).multiplyScalar(0.7 + Math.random() * 0.5);
      this.debris.emit(x + (Math.random() - 0.5) * size, y + (Math.random() - 0.3) * size, z + (Math.random() - 0.5) * size,
        (Math.random() - 0.5) * 6, 2 + Math.random() * 5, (Math.random() - 0.5) * 6, 0.16 + Math.random() * 0.2, this._c, 1.4);
    }
    for (let i = 0; i < 8; i++) {
      this.soft.emit(x + (Math.random() - 0.5) * size, y + (Math.random() - 0.3) * size, z + (Math.random() - 0.5) * size, (Math.random() - 0.5) * 2, Math.random() * 1.5, (Math.random() - 0.5) * 2, 0.9, 0.4, 1.4, 0.8, 0.78, 0.72, 0.55, 0, -0.2, 1.8);
    }
  }

  damageNumber(x, y, z, amount, head, shield) {
    this.game.hud?.addFloater(x, y, z, Math.round(amount), head, shield);
  }
}
