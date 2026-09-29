// The Storm: shrinking safe zone in phases, damage ticks, and the animated purple wall.
import * as THREE from 'three';
import { STORM_PHASES, STORM_START_RADIUS } from '../config.js';
import { Rng } from '../util/rng.js';
import { clamp, clamp01, lerp, smoothstep } from '../util/math.js';

const wallVert = /* glsl */`
  varying vec3 vW; varying vec2 vUv;
  void main() { vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
`;
const wallFrag = /* glsl */`
  uniform float uTime; uniform vec3 uColor; uniform float uRadius; uniform float uIntensity;
  varying vec3 vW; varying vec2 vUv;
  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
  void main() {
    float circ = uRadius * 6.2831853;
    vec2 p = vec2(vUv.x * circ * 0.035, vW.y * 0.028);
    float n = vnoise(p * vec2(1.0, 0.6) + vec2(0.0, -uTime * 0.35)) * 0.6 + vnoise(p * 2.7 + vec2(uTime * 0.12, -uTime * 0.6)) * 0.4;
    float bands = smoothstep(0.35, 0.8, n);
    float streak = pow(vnoise(vec2(vUv.x * circ * 0.09, uTime * 0.2)), 3.0);
    // far away the curtain reads as a soft violet haze band on the horizon, up close it is the full churning wall
    float far = smoothstep(120.0, 650.0, distance(vW.xz, cameraPosition.xz));
    bands = mix(bands, 0.45, far * 0.7);
    streak *= 1.0 - far * 0.6;
    float h = clamp(vW.y / 240.0, 0.0, 1.0);
    float a = (0.34 + bands * 0.42 + streak * 0.35) * (1.0 - smoothstep(0.3, 1.0, h));
    a *= smoothstep(-40.0, 12.0, vW.y);
    a *= mix(1.0, 0.5, far) * uIntensity;
    vec3 col = uColor * (0.85 + bands * 0.9 + streak * 0.8);
    col += vec3(0.35, 0.1, 0.6) * (1.0 - h) * 0.6;
    gl_FragColor = vec4(col, a);
  }
`;

export class Storm {
  constructor(game) {
    this.game = game;
    this.phases = STORM_PHASES;
    this.active = false;
    this.state = 'idle';
    this.timer = 0;
    this.index = 0;
    this.current = { x: 0, z: 0, r: STORM_START_RADIUS };
    this.from = { x: 0, z: 0, r: STORM_START_RADIUS };
    this.next = null;
    this.dps = 1;
    this.rng = new Rng(7);
    this.tickAcc = 0;

    const geo = new THREE.CylinderGeometry(1, 1, 900, 96, 1, true);
    geo.translate(0, 300, 0);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: wallVert, fragmentShader: wallFrag, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color('#a24dff') }, uRadius: { value: 600 }, uIntensity: { value: 0.6 } }, fog: false,
    });
    this.wall = new THREE.Mesh(geo, this.mat);
    this.wall.renderOrder = 8;
    this.wall.frustumCulled = false;
    this.wall.visible = false;
    game.gfx.scene.add(this.wall);
    this.outsideK = 0;
    this.intensity = 0.6;
  }

  reset(seed) {
    this.rng = new Rng(seed);
    this.active = false;
    this.state = 'idle';
    this.index = 0;
    this.current = { x: 0, z: 0, r: STORM_START_RADIUS };
    this.next = null;
    this.wall.visible = false;
    this.outsideK = 0;
    this.intensity = 0.6;
    this.mat.uniforms.uIntensity.value = 0.6;
  }

  start(initialDelay = 40) {
    this.active = true;
    this.index = 0;
    this.current = { x: 0, z: 0, r: STORM_START_RADIUS };
    this.from = { ...this.current };
    this._pickNext();
    this.state = 'wait';
    this.timer = this.phases[0].wait + initialDelay;
    this.dps = this.phases[0].dps;
    this.wall.visible = true;
    this._syncWall();
  }

  _pickNext() {
    const ph = this.phases[this.index];
    const c = this.current, T = this.game.terrain;
    const r = ph.radius;
    if (r <= 0) { this.next = { x: c.x, z: c.z, r: 0 }; return; }
    let best = null, bestScore = -1;
    for (let k = 0; k < 24; k++) {
      const maxOff = Math.max(0, c.r - r - 8);
      const a = this.rng.range(0, Math.PI * 2), d = Math.sqrt(this.rng.float()) * maxOff;
      const x = c.x + Math.cos(a) * d, z = c.z + Math.sin(a) * d;
      // score: how much of the new circle is dry land + a bonus for towns
      let land = 0, n = 0;
      for (let i = 0; i < 14; i++) {
        const aa = (i / 14) * Math.PI * 2, rr = r * (i % 2 ? 0.55 : 0.95);
        if (T.heightAt(x + Math.cos(aa) * rr, z + Math.sin(aa) * rr) > 0.6) land++;
        n++;
      }
      if (T.heightAt(x, z) > 1.5) land += 4;
      let towns = 0;
      for (const t of T.layout.towns) if (Math.hypot(t.x - x, t.z - z) < r) towns++;
      const score = land + towns * 1.5 + this.rng.float() * 2;
      if (score > bestScore) { bestScore = score; best = { x, z, r }; }
    }
    this.next = best;
  }

  // ---- queries -------------------------------------------------------------------------------------------------------------------------------------
  isOutside(x, z) {
    if (!this.active) return false;
    return Math.hypot(x - this.current.x, z - this.current.z) > this.current.r;
  }
  /** positive inside, negative outside (metres from the wall) */
  distanceToEdge(x, z) { return this.current.r - Math.hypot(x - this.current.x, z - this.current.z); }
  /** point inside the *next* (or current final) zone closest to (x,z) — used by bots */
  targetCenter() { return this.next || this.current; }

  // ---- update -------------------------------------------------------------------------------------------------------------------------------------
  update(dt) {
    const g = this.game;
    this.mat.uniforms.uTime.value += dt;
    if (!this.active) return;
    // the wall is only a faint haze until the first shrink begins
    const wantI = this.index === 0 && this.state === 'wait' ? 0.6 : 1;
    this.intensity += (wantI - this.intensity) * Math.min(1, dt * 0.7);
    this.mat.uniforms.uIntensity.value = this.intensity;
    const ph = this.phases[this.index];
    this.timer -= dt;
    if (this.state === 'wait') {
      if (this.timer <= 0) {
        this.state = 'shrink';
        this.timer = ph.shrink;
        this.from = { ...this.current };
        this.dps = ph.dps;
        g.hud?.banner('The storm is shrinking', 'Get to the safe zone', 'storm', 5000);
        g.audio?.stormWarn();
      }
    } else if (this.state === 'shrink') {
      const k = clamp01(1 - this.timer / ph.shrink);
      const e = k * k * (3 - 2 * k) * 0.35 + k * 0.65;      // slightly eased, mostly linear
      this.current.x = lerp(this.from.x, this.next.x, e);
      this.current.z = lerp(this.from.z, this.next.z, e);
      this.current.r = lerp(this.from.r, this.next.r, e);
      if (this.timer <= 0) {
        this.current = { ...this.next };
        if (this.index + 1 < this.phases.length) {
          this.index++;
          this._pickNext();
          this.state = 'wait';
          this.timer = this.phases[this.index].wait;
          this.dps = this.phases[this.index].dps;
          g.hud?.banner('New safe zone marked', `Storm forms in ${Math.round(this.timer)}s`, 'storm', 4200);
          if (this.next.r <= 0) this.state = 'final';
        } else { this.state = 'final'; this.next = null; }
      }
    } else if (this.state === 'final') {
      this.next = null;
    }
    this._syncWall();
  }

  _syncWall() {
    const c = this.current;
    const r = Math.max(c.r, 0.5);
    this.wall.position.set(c.x, 0, c.z);
    this.wall.scale.set(r, 1, r);
    this.mat.uniforms.uRadius.value = r;
  }

  /** Apply per-second damage to everyone outside. */
  applyDamage(dt, actors) {
    if (!this.active) return;
    this.tickAcc += dt;
    if (this.tickAcc < 1) return;
    this.tickAcc -= 1;
    for (const a of actors) {
      if (!a.alive || a.mode === 'bus') continue;
      if (this.isOutside(a.pos.x, a.pos.z)) {
        a.takeDamage(this.dps, { cause: 'storm', attacker: null });
        if (a.isPlayer) this.game.audio?.stormZap();
      }
    }
  }

  /** Fog / grade tint depending on whether the camera is outside the safe zone. */
  applyVisuals(dt) {
    const g = this.game;
    const gfx = g.gfx;
    const cam = gfx.camera.position;
    const out = this.active && this.isOutside(cam.x, cam.z) ? 1 : 0;
    this.outsideK += (out - this.outsideK) * (1 - Math.exp(-3 * dt));
    const k = this.outsideK;
    const fog = gfx.scene.fog;
    fog.color.copy(gfx.fogBase).lerp(gfx.fogStorm, k * 0.85);
    fog.near = lerp(260, 20, k); fog.far = lerp(1900, 380, k);
    gfx.scene.background.copy(fog.color);
    gfx.post.uStorm.value = k;
    if (g.world?.sky) g.world.sky.mat.uniforms.uStorm.value = k;
    // wall opacity slightly higher when the player is close
    return k;
  }
}
