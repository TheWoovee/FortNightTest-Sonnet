// Fully synthesised audio (WebAudio, zero asset files): weapons, footsteps, impacts, UI, ambience.
import { clamp, clamp01, lerp } from '../util/math.js';

export class AudioEngine {
  constructor(game) {
    this.game = game;
    this.ctx = null;
    this.volume = 0.8;
    this.muted = false;
    this.active = 0;
    this.loops = {};
    this._lastFoot = 0;
  }

  init() {
    if (this.ctx) { this.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC({ latencyHint: 'interactive' });
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : this.volume;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.knee.value = 18; comp.ratio.value = 4; comp.attack.value = 0.003; comp.release.value = 0.2;
    this.master.connect(comp); comp.connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.gain.value = 1; this.sfx.connect(this.master);
    this.amb = ctx.createGain(); this.amb.gain.value = 0.55; this.amb.connect(this.master);
    // noise buffers
    const sr = ctx.sampleRate;
    this.noiseBuf = ctx.createBuffer(1, sr * 2, sr);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.pinkBuf = ctx.createBuffer(1, sr * 4, sr);
    const p = this.pinkBuf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < p.length; i++) { const w = Math.random() * 2 - 1; b0 = 0.99765 * b0 + w * 0.099046; b1 = 0.963 * b1 + w * 0.2965164; b2 = 0.57 * b2 + w * 1.0526913; p[i] = (b0 + b1 + b2 + w * 0.1848) * 0.2; }
    // simple echo bus for big guns
    this.echo = ctx.createDelay(1); this.echo.delayTime.value = 0.23;
    const fb = ctx.createGain(); fb.gain.value = 0.28;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400;
    this.echo.connect(lp); lp.connect(fb); fb.connect(this.echo);
    const eo = ctx.createGain(); eo.gain.value = 0.35; lp.connect(eo); eo.connect(this.sfx);
    this.resume();
  }

  resume() { if (this.ctx && this.ctx.state !== 'running') this.ctx.resume().catch(() => {}); }
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {}); }
  setVolume(v) { this.volume = v; if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : v, this.ctx.currentTime, 0.05); }
  setMuted(m) { this.muted = m; this.setVolume(this.volume); }
  get t() { return this.ctx.currentTime; }
  get ok() { return !!this.ctx && this.ctx.state === 'running' && this.active < 36; }

  // ---- primitives ----------------------------------------------------------------------------------------------------------------------------
  _out(pan, gain, echoSend = 0) {
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = gain;
    let node = g;
    if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = clamp(pan, -1, 1); g.connect(p); node = p; }
    node.connect(this.sfx);
    if (echoSend > 0) { const e = ctx.createGain(); e.gain.value = echoSend; node.connect(e); e.connect(this.echo); }
    return g;
  }

  _track(src, dur) { this.active++; src.onended = () => { this.active--; }; return src; }

  /** Filtered noise burst with attack/decay envelope. */
  noise({ dur = 0.1, f0 = 1500, f1 = f0, q = 1, type = 'bandpass', gain = 0.5, attack = 0.002, pan = 0, pink = false, at = 0, echo = 0, curve = 2 }) {
    const ctx = this.ctx, t = this.t + at;
    const src = ctx.createBufferSource();
    src.buffer = pink ? this.pinkBuf : this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const env = this._out(pan, 0, echo);
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(gain, t + attack);
    env.gain.setTargetAtTime(0, t + attack, dur / (curve * 1.6));
    src.connect(f); f.connect(env);
    src.start(t, Math.random() * 1.5); src.stop(t + dur * 1.6 + 0.05);
    this._track(src);
  }

  tone({ type = 'sine', f0 = 440, f1 = f0, dur = 0.15, gain = 0.3, attack = 0.003, pan = 0, at = 0, echo = 0, vib = 0 }) {
    const ctx = this.ctx, t = this.t + at;
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    if (vib) { const l = ctx.createOscillator(); l.frequency.value = 6; const lg = ctx.createGain(); lg.gain.value = vib; l.connect(lg); lg.connect(o.frequency); l.start(t); l.stop(t + dur + 0.05); }
    const env = this._out(pan, 0, echo);
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(gain, t + attack);
    env.gain.setTargetAtTime(0, t + attack, dur / 3);
    o.connect(env);
    o.start(t); o.stop(t + dur * 1.5 + 0.05);
    this._track(o);
  }

  /** distance/pan parameters for a world position relative to the camera */
  spatial(x, y, z, ref = 10, maxD = 350) {
    const cam = this.game.gfx.camera;
    const dx = x - cam.position.x, dy = y - cam.position.y, dz = z - cam.position.z;
    const d = Math.hypot(dx, dy, dz);
    if (d > maxD) return null;
    const gain = 1 / (1 + Math.pow(d / ref, 1.6));
    // camera right vector
    const yaw = this.game.camera.yaw;
    const rx = Math.cos(yaw), rz = -Math.sin(yaw);
    const pan = d > 0.5 ? (dx * rx + dz * rz) / d : 0;
    return { gain, pan: pan * 0.85, d, far: clamp01(d / 220) };
  }

  // ---- weapons -----------------------------------------------------------------------------------------------------------------------------------------
  shot(actor, W, p) {
    if (!this.ok) return;
    const mine = actor.isPlayer;
    let sp = { gain: 1, pan: 0, d: 0, far: 0 };
    if (!mine) { sp = this.spatial(p.x, p.y, p.z, 14, 420); if (!sp) return; }
    const g = sp.gain * (mine ? 1 : 0.85);
    const far = sp.far;
    const pan = sp.pan;
    const lp = lerp(9000, 900, far);
    const r = 0.94 + Math.random() * 0.12;
    switch (W.sound) {
      case 'ar':
        this.noise({ dur: 0.11, f0: 2400 * r, f1: 500, q: 0.8, gain: 0.55 * g, pan, type: 'bandpass' });
        this.noise({ dur: 0.02, f0: 6500, f1: 3000, q: 0.5, gain: 0.35 * g, pan, type: 'highpass' });
        this.tone({ type: 'sine', f0: 170 * r, f1: 55, dur: 0.09, gain: 0.55 * g, pan });
        break;
      case 'smg':
        this.noise({ dur: 0.07, f0: 3000 * r, f1: 900, q: 0.9, gain: 0.42 * g, pan });
        this.noise({ dur: 0.015, f0: 7000, f1: 3500, q: 0.5, gain: 0.25 * g, pan, type: 'highpass' });
        this.tone({ type: 'sine', f0: 210 * r, f1: 80, dur: 0.06, gain: 0.35 * g, pan });
        break;
      case 'pistol':
        this.noise({ dur: 0.1, f0: 2800 * r, f1: 700, q: 0.8, gain: 0.5 * g, pan, echo: 0.1 });
        this.noise({ dur: 0.02, f0: 6000, f1: 2600, q: 0.5, gain: 0.3 * g, pan, type: 'highpass' });
        this.tone({ type: 'sine', f0: 190 * r, f1: 70, dur: 0.08, gain: 0.45 * g, pan });
        break;
      case 'shotgun':
        this.noise({ dur: 0.34, f0: 3400 * r, f1: 260, q: 0.6, gain: 0.85 * g, pan, type: 'lowpass', echo: 0.25, curve: 1.6 });
        this.noise({ dur: 0.03, f0: 5000, f1: 2000, q: 0.5, gain: 0.5 * g, pan, type: 'highpass' });
        this.tone({ type: 'sine', f0: 120 * r, f1: 34, dur: 0.22, gain: 0.85 * g, pan });
        break;
      case 'sniper':
        this.noise({ dur: 0.55, f0: 4000, f1: 200, q: 0.5, gain: 0.95 * g, pan, type: 'lowpass', echo: 0.5, curve: 1.4 });
        this.noise({ dur: 0.04, f0: 7500, f1: 2500, q: 0.5, gain: 0.7 * g, pan, type: 'highpass' });
        this.tone({ type: 'sine', f0: 100 * r, f1: 28, dur: 0.34, gain: 1.0 * g, pan });
        this.tone({ type: 'triangle', f0: 1800, f1: 600, dur: 0.12, gain: 0.25 * g, pan, echo: 0.3 });
        if (mine) this.noise({ dur: 0.5, f0: 900, f1: 300, q: 1, gain: 0.12, at: 0.5, type: 'bandpass', pan: 0 });
        break;
      default: break;
    }
  }

  dryFire(actor) { if (!this.ok) return; this.tone({ type: 'square', f0: 900, f1: 500, dur: 0.03, gain: 0.12 }); this.noise({ dur: 0.02, f0: 3000, gain: 0.15 }); }

  reloadStart(actor, W) {
    if (!this.ok) return;
    const mine = actor.isPlayer;
    let sp = { gain: 1, pan: 0 };
    if (!mine) { sp = this.spatial(actor.pos.x, actor.pos.y, actor.pos.z, 6, 40); if (!sp) return; }
    const g = sp.gain * (mine ? 0.9 : 0.6), pan = sp.pan;
    const dur = W.reload;
    if (W.sound === 'shotgun') {
      for (let i = 0; i < 3; i++) this.noise({ dur: 0.05, f0: 1800, f1: 900, q: 3, gain: 0.35 * g, pan, at: dur * (0.15 + i * 0.2) });
      this.noise({ dur: 0.08, f0: 900, f1: 500, q: 2, gain: 0.5 * g, pan, at: dur * 0.85 });
      this.tone({ type: 'square', f0: 260, f1: 140, dur: 0.06, gain: 0.2 * g, pan, at: dur * 0.85 });
    } else {
      this.noise({ dur: 0.05, f0: 2200, f1: 1200, q: 4, gain: 0.35 * g, pan, at: dur * 0.18 });   // mag out
      this.tone({ type: 'square', f0: 700, f1: 400, dur: 0.04, gain: 0.12 * g, pan, at: dur * 0.18 });
      this.noise({ dur: 0.06, f0: 1600, f1: 900, q: 4, gain: 0.45 * g, pan, at: dur * 0.62 });   // mag in
      this.noise({ dur: 0.05, f0: 2600, f1: 1400, q: 3, gain: 0.4 * g, pan, at: dur * 0.9 });    // slide
      this.tone({ type: 'square', f0: 520, f1: 260, dur: 0.05, gain: 0.15 * g, pan, at: dur * 0.9 });
    }
  }
  reloadEnd() {}

  equip(actor, item) {
    if (!this.ok) return;
    this.noise({ dur: 0.09, f0: 900, f1: 2200, q: 1.2, gain: 0.2 });
    this.noise({ dur: 0.03, f0: 2400, f1: 1200, q: 4, gain: 0.25, at: 0.05 });
  }

  swing(actor) {
    if (!this.ok) return;
    let sp = { gain: 1, pan: 0 };
    if (!actor.isPlayer) { sp = this.spatial(actor.pos.x, actor.pos.y, actor.pos.z, 6, 40); if (!sp) return; }
    this.noise({ dur: 0.16, f0: 500, f1: 2200, q: 1.5, gain: 0.3 * sp.gain, pan: sp.pan, attack: 0.05, at: 0.07 });
  }

  pickaxeHit(actor, mat) {
    if (!this.ok) return;
    let sp = { gain: 1, pan: 0 };
    if (!actor.isPlayer) { sp = this.spatial(actor.pos.x, actor.pos.y, actor.pos.z, 6, 45); if (!sp) return; }
    const g = sp.gain, pan = sp.pan;
    switch (mat) {
      case 'wood':
        this.tone({ type: 'sine', f0: 210, f1: 80, dur: 0.11, gain: 0.55 * g, pan });
        this.noise({ dur: 0.09, f0: 1400, f1: 500, q: 1, gain: 0.5 * g, pan });
        break;
      case 'stone': case 'brick':
        this.tone({ type: 'triangle', f0: 900, f1: 500, dur: 0.14, gain: 0.3 * g, pan });
        this.noise({ dur: 0.1, f0: 3500, f1: 1200, q: 1.5, gain: 0.5 * g, pan });
        this.tone({ type: 'sine', f0: 130, f1: 60, dur: 0.1, gain: 0.4 * g, pan });
        break;
      case 'metal':
        this.tone({ type: 'sine', f0: 1350, f1: 1250, dur: 0.32, gain: 0.35 * g, pan });
        this.tone({ type: 'sine', f0: 2100, f1: 1900, dur: 0.2, gain: 0.2 * g, pan });
        this.noise({ dur: 0.05, f0: 5000, f1: 2500, q: 1, gain: 0.35 * g, pan, type: 'highpass' });
        break;
      case 'flesh':
        this.tone({ type: 'sine', f0: 160, f1: 60, dur: 0.12, gain: 0.55 * g, pan });
        this.noise({ dur: 0.07, f0: 700, f1: 300, q: 1, gain: 0.4 * g, pan });
        break;
      default:
        this.noise({ dur: 0.12, f0: 700, f1: 250, q: 0.8, gain: 0.5 * g, pan, type: 'lowpass' });
        this.tone({ type: 'sine', f0: 110, f1: 55, dur: 0.1, gain: 0.35 * g, pan });
    }
  }

  impact(x, y, z, mat) {
    if (!this.ok) return;
    const sp = this.spatial(x, y, z, 8, 150); if (!sp) return;
    const g = sp.gain * 0.7, pan = sp.pan;
    if (mat === 'metal') { this.tone({ type: 'sine', f0: 1700, f1: 1500, dur: 0.14, gain: 0.2 * g, pan }); this.noise({ dur: 0.04, f0: 5000, q: 1, gain: 0.25 * g, pan, type: 'highpass' }); }
    else if (mat === 'stone' || mat === 'brick') { this.noise({ dur: 0.06, f0: 3800, f1: 1400, q: 1.4, gain: 0.35 * g, pan }); this.tone({ type: 'triangle', f0: 1100, f1: 700, dur: 0.06, gain: 0.12 * g, pan }); }
    else if (mat === 'wood') { this.noise({ dur: 0.07, f0: 1500, f1: 600, q: 1, gain: 0.35 * g, pan }); }
    else this.noise({ dur: 0.09, f0: 800, f1: 300, q: 0.8, gain: 0.3 * g, pan, type: 'lowpass' });
  }

  hitConfirm(head, kill, shield) {
    if (!this.ok) return;
    if (kill) {
      this.tone({ type: 'triangle', f0: 880, f1: 1320, dur: 0.18, gain: 0.3 });
      this.tone({ type: 'sine', f0: 1760, f1: 1760, dur: 0.3, gain: 0.16, at: 0.06 });
      this.tone({ type: 'sine', f0: 140, f1: 60, dur: 0.25, gain: 0.35 });
    } else if (head) {
      this.tone({ type: 'sine', f0: 2200, f1: 1900, dur: 0.07, gain: 0.3 });
      this.tone({ type: 'sine', f0: 1500, f1: 1300, dur: 0.07, gain: 0.2, at: 0.035 });
    } else if (shield) {
      this.tone({ type: 'triangle', f0: 1700, f1: 1400, dur: 0.05, gain: 0.22 });
      this.noise({ dur: 0.03, f0: 6000, q: 1, gain: 0.12, type: 'highpass' });
    } else {
      this.tone({ type: 'sine', f0: 1250, f1: 950, dur: 0.06, gain: 0.26 });
    }
  }

  damageTaken(amount, shieldBroke) {
    if (!this.ok) return;
    this.tone({ type: 'sine', f0: 120, f1: 55, dur: 0.2, gain: 0.4 * clamp(amount / 30, 0.4, 1.2) });
    this.noise({ dur: 0.1, f0: 900, f1: 300, q: 1, gain: 0.25, type: 'lowpass' });
    if (shieldBroke) { this.noise({ dur: 0.4, f0: 7000, f1: 2500, q: 1.5, gain: 0.35, type: 'bandpass' }); this.tone({ type: 'triangle', f0: 2400, f1: 900, dur: 0.3, gain: 0.2 }); }
  }

  // ---- movement --------------------------------------------------------------------------------------------------------------------------------------
  footstep(actor) {
    if (!this.ok) return;
    let sp = { gain: 1, pan: 0 };
    if (!actor.isPlayer) { sp = this.spatial(actor.pos.x, actor.pos.y, actor.pos.z, 4, 42); if (!sp) return; sp.gain *= 0.9; }
    const surface = actor.groundCollider ? (actor.groundCollider.material || 'wood') : (this.game.terrain.heightAt(actor.pos.x, actor.pos.z) < 2.3 ? 'sand' : 'grass');
    const g = 0.28 * sp.gain * (actor.sprinting ? 1.25 : actor.crouching ? 0.45 : 1);
    if (surface === 'wood' || surface === 'stone') this.noise({ dur: 0.06, f0: 600 + Math.random() * 200, f1: 250, q: 1.5, gain: g * 1.4, pan: sp.pan, type: 'bandpass' });
    else if (surface === 'metal') { this.noise({ dur: 0.05, f0: 1800, f1: 900, q: 3, gain: g, pan: sp.pan }); this.tone({ type: 'sine', f0: 900, dur: 0.06, gain: g * 0.2, pan: sp.pan }); }
    else this.noise({ dur: 0.07, f0: 1300 + Math.random() * 400, f1: 500, q: 0.7, gain: g, pan: sp.pan, type: surface === 'sand' ? 'lowpass' : 'bandpass', pink: true });
  }

  jump(actor) { if (!this.ok || !actor.isPlayer) return; this.noise({ dur: 0.1, f0: 500, f1: 1500, q: 0.8, gain: 0.14, pink: true }); }
  land(actor, impact) {
    if (!this.ok) return;
    let sp = { gain: 1, pan: 0 };
    if (!actor.isPlayer) { sp = this.spatial(actor.pos.x, actor.pos.y, actor.pos.z, 6, 60); if (!sp) return; }
    const k = clamp01(impact / 20);
    this.tone({ type: 'sine', f0: 110, f1: 45, dur: 0.16, gain: (0.25 + 0.5 * k) * sp.gain, pan: sp.pan });
    this.noise({ dur: 0.12, f0: 700, f1: 250, q: 0.8, gain: (0.2 + 0.4 * k) * sp.gain, pan: sp.pan, type: 'lowpass', pink: true });
  }
  splash(actor) {
    if (!this.ok) return;
    let sp = { gain: 1, pan: 0 };
    if (!actor.isPlayer) { sp = this.spatial(actor.pos.x, actor.pos.y, actor.pos.z, 6, 60); if (!sp) return; }
    this.noise({ dur: 0.4, f0: 2600, f1: 700, q: 0.6, gain: 0.4 * sp.gain, pan: sp.pan, pink: true });
  }
  gliderOpen(actor) {
    if (!this.ok || !actor.isPlayer) return;
    this.noise({ dur: 0.5, f0: 300, f1: 1400, q: 0.7, gain: 0.5, attack: 0.05, pink: true });
    this.tone({ type: 'sawtooth', f0: 90, f1: 60, dur: 0.3, gain: 0.12 });
    for (let i = 0; i < 3; i++) this.noise({ dur: 0.08, f0: 800, f1: 500, q: 1, gain: 0.25, at: 0.12 + i * 0.09, pink: true });
  }

  // ---- items / ui ----------------------------------------------------------------------------------------------------------------------------------------
  pickup(item) {
    if (!this.ok) return;
    const r = item.kind === 'weapon' ? item.rarity : 0;
    const base = [523, 587, 659, 740, 880][r];
    this.tone({ type: 'sine', f0: base, f1: base * 1.02, dur: 0.16, gain: 0.22 });
    this.tone({ type: 'sine', f0: base * 1.5, f1: base * 1.5, dur: 0.22, gain: 0.16, at: 0.06 });
    if (r >= 3) this.tone({ type: 'sine', f0: base * 2, dur: 0.3, gain: 0.14, at: 0.12 });
    if (r >= 4) this.tone({ type: 'triangle', f0: base * 3, dur: 0.4, gain: 0.08, at: 0.16 });
    this.noise({ dur: 0.05, f0: 2400, f1: 1200, q: 3, gain: 0.15 });
  }
  chestOpen(c) {
    if (!this.ok) return;
    const sp = this.spatial(c.x, c.y, c.z, 10, 100); if (!sp) return;
    this.tone({ type: 'sawtooth', f0: 90, f1: 180, dur: 0.4, gain: 0.16 * sp.gain, pan: sp.pan, vib: 8 });
    this.noise({ dur: 0.3, f0: 600, f1: 1400, q: 2, gain: 0.2 * sp.gain, pan: sp.pan });
    [1046, 1318, 1568, 2093, 2637].forEach((f, i) => this.tone({ type: 'sine', f0: f, dur: 0.5, gain: 0.14 * sp.gain, pan: sp.pan, at: 0.12 + i * 0.07, echo: 0.2 }));
  }
  useStart(actor, C) {
    if (!this.ok || !actor.isPlayer) return;
    if (C.kind === 'shield' || C.kind === 'both') { this.tone({ type: 'sine', f0: 300, f1: 900, dur: 0.6, gain: 0.12 }); }
    else this.noise({ dur: 0.25, f0: 1400, f1: 800, q: 1, gain: 0.18, pink: true });
  }
  useEnd(actor, C) {
    if (!this.ok) return;
    if (!actor.isPlayer) return;
    [659, 880, 1175].forEach((f, i) => this.tone({ type: 'sine', f0: f, dur: 0.25, gain: 0.14, at: i * 0.07 }));
  }
  uiTick() { if (!this.ok) return; this.tone({ type: 'square', f0: 1100, f1: 900, dur: 0.025, gain: 0.06 }); }
  uiClick() { if (!this.ok) return; this.tone({ type: 'triangle', f0: 700, f1: 1100, dur: 0.08, gain: 0.18 }); this.noise({ dur: 0.03, f0: 3000, q: 2, gain: 0.1 }); }
  uiPlay() {
    if (!this.ok) return;
    [392, 494, 587, 784].forEach((f, i) => this.tone({ type: 'triangle', f0: f, dur: 0.35, gain: 0.16, at: i * 0.08, echo: 0.3 }));
    this.noise({ dur: 0.6, f0: 400, f1: 3000, q: 0.6, gain: 0.25, attack: 0.3, pink: true });
  }

  // ---- building ---------------------------------------------------------------------------------------------------------------------------------------------
  buildPlace(mat, x, y, z) {
    if (!this.ok) return;
    const sp = this.spatial(x, y, z, 8, 120); if (!sp) return;
    const g = sp.gain;
    if (mat === 'metal') { this.tone({ type: 'triangle', f0: 500, f1: 300, dur: 0.12, gain: 0.25 * g, pan: sp.pan }); this.noise({ dur: 0.08, f0: 3000, f1: 1500, q: 2, gain: 0.3 * g, pan: sp.pan }); }
    else if (mat === 'stone') { this.tone({ type: 'sine', f0: 140, f1: 70, dur: 0.14, gain: 0.5 * g, pan: sp.pan }); this.noise({ dur: 0.1, f0: 1800, f1: 700, q: 1, gain: 0.35 * g, pan: sp.pan }); }
    else { this.tone({ type: 'sine', f0: 190, f1: 90, dur: 0.12, gain: 0.5 * g, pan: sp.pan }); this.noise({ dur: 0.08, f0: 1200, f1: 500, q: 1, gain: 0.35 * g, pan: sp.pan }); }
    this.tone({ type: 'sine', f0: 500, f1: 900, dur: 0.1, gain: 0.08 * g, pan: sp.pan, at: 0.02 });
  }
  buildFail() { if (!this.ok) return; this.tone({ type: 'square', f0: 180, f1: 110, dur: 0.1, gain: 0.14 }); }
  pieceBreak(x, y, z, mat) {
    if (!this.ok) return;
    const sp = this.spatial(x, y, z, 10, 150); if (!sp) return;
    this.noise({ dur: 0.35, f0: 2200, f1: 350, q: 0.7, gain: 0.7 * sp.gain, pan: sp.pan, curve: 1.4 });
    this.tone({ type: 'sine', f0: 120, f1: 40, dur: 0.3, gain: 0.55 * sp.gain, pan: sp.pan });
    if (mat === 'metal') this.tone({ type: 'sine', f0: 1200, f1: 800, dur: 0.4, gain: 0.15 * sp.gain, pan: sp.pan });
  }
  treeFall(x, y, z) {
    if (!this.ok) return;
    const sp = this.spatial(x, y, z, 10, 120); if (!sp) return;
    this.noise({ dur: 0.6, f0: 900, f1: 200, q: 0.7, gain: 0.5 * sp.gain, pan: sp.pan, pink: true, attack: 0.15 });
    this.tone({ type: 'sine', f0: 90, f1: 40, dur: 0.4, gain: 0.5 * sp.gain, pan: sp.pan, at: 0.8 });
  }

  // ---- storm / match events ------------------------------------------------------------------------------------------------------------------------------
  stormZap() { if (!this.ok) return; this.noise({ dur: 0.2, f0: 4200, f1: 1200, q: 2, gain: 0.25, type: 'bandpass' }); this.tone({ type: 'sawtooth', f0: 220, f1: 90, dur: 0.18, gain: 0.14 }); }
  stormWarn() { if (!this.ok) return; [392, 330, 262].forEach((f, i) => this.tone({ type: 'sawtooth', f0: f, dur: 0.45, gain: 0.14, at: i * 0.32, echo: 0.3 })); }
  eliminated() { if (!this.ok) return; [392, 330, 262, 196].forEach((f, i) => this.tone({ type: 'triangle', f0: f, dur: 0.5, gain: 0.2, at: i * 0.22, echo: 0.3 })); }
  victory() {
    if (!this.ok) return;
    const seq = [523, 659, 784, 1046, 784, 1046, 1318];
    seq.forEach((f, i) => { this.tone({ type: 'triangle', f0: f, dur: 0.5, gain: 0.2, at: i * 0.14, echo: 0.3 }); this.tone({ type: 'sine', f0: f * 2, dur: 0.4, gain: 0.08, at: i * 0.14 }); });
    this.noise({ dur: 1.2, f0: 4000, f1: 9000, q: 0.5, gain: 0.15, at: 0.9, attack: 0.5, type: 'highpass' });
  }
  killShot(actor) { /* reserved */ }

  // ---- continuous loops ---------------------------------------------------------------------------------------------------------------------------------------
  _loop(name, make) {
    if (this.loops[name]) return this.loops[name];
    const l = make(); this.loops[name] = l; return l;
  }

  /** Called every frame with game state to drive ambience loops. */
  updateAmbient(dt) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const g = this.game;
    const ctx = this.ctx, t = ctx.currentTime;
    const p = g.player;
    // wind (freefall/glide)
    const wind = this._loop('wind', () => {
      const s = ctx.createBufferSource(); s.buffer = this.pinkBuf; s.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.6; f.frequency.value = 500;
      const gn = ctx.createGain(); gn.gain.value = 0;
      s.connect(f); f.connect(gn); gn.connect(this.amb); s.start();
      return { s, f, g: gn };
    });
    const air = p.mode === 'freefall' ? clamp01(-p.vel.y / 70) : p.mode === 'glide' ? 0.35 : 0;
    wind.g.gain.setTargetAtTime(air * 0.8, t, 0.15);
    wind.f.frequency.setTargetAtTime(400 + air * 1500, t, 0.2);
    // ocean / coast
    const ocean = this._loop('ocean', () => {
      const s = ctx.createBufferSource(); s.buffer = this.pinkBuf; s.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.11; const lg = ctx.createGain(); lg.gain.value = 250; lfo.connect(lg); lg.connect(f.frequency); lfo.start();
      const gn = ctx.createGain(); gn.gain.value = 0;
      s.connect(f); f.connect(gn); gn.connect(this.amb); s.start();
      return { s, g: gn };
    });
    const h = g.terrain.heightAt(p.pos.x, p.pos.z);
    const dist = Math.hypot(p.pos.x, p.pos.z);
    const coast = clamp01(1 - (h - 1) / 14);
    ocean.g.gain.setTargetAtTime(g.phase === 'match' || g.phase === 'menu' ? 0.07 + coast * 0.3 : 0.05, t, 0.4);
    // storm rumble
    const storm = this._loop('storm', () => {
      const s = ctx.createBufferSource(); s.buffer = this.pinkBuf; s.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 220; f.Q.value = 2;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.35; const lg = ctx.createGain(); lg.gain.value = 120; lfo.connect(lg); lg.connect(f.frequency); lfo.start();
      const gn = ctx.createGain(); gn.gain.value = 0;
      s.connect(f); f.connect(gn); gn.connect(this.amb); s.start();
      return { s, g: gn };
    });
    let stormK = 0;
    if (g.storm?.active && g.phase === 'match') {
      const d = g.storm.distanceToEdge(p.pos.x, p.pos.z);          // + inside, - outside
      stormK = d < 0 ? 1 : clamp01(1 - d / 90) * 0.5;
    }
    storm.g.gain.setTargetAtTime(stormK * 0.85, t, 0.3);
    // bus engine
    const bus = this._loop('bus', () => {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 62;
      const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 31;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 260;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 7; const lg = ctx.createGain(); lg.gain.value = 3; lfo.connect(lg); lg.connect(o.frequency); lfo.start();
      const gn = ctx.createGain(); gn.gain.value = 0;
      o.connect(f); o2.connect(f); f.connect(gn); gn.connect(this.amb); o.start(); o2.start();
      return { g: gn };
    });
    bus.g.gain.setTargetAtTime(p.mode === 'bus' && g.phase === 'match' ? 0.16 : 0, t, 0.3);
    // chest hum
    const hum = this._loop('hum', () => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 262;
      const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = 393;
      const tr = ctx.createOscillator(); tr.frequency.value = 5; const tg = ctx.createGain(); tg.gain.value = 0.5;
      const gn = ctx.createGain(); gn.gain.value = 0; const am = ctx.createGain(); am.gain.value = 0.5;
      tr.connect(tg); tg.connect(am.gain);
      o.connect(am); o2.connect(am); am.connect(gn); gn.connect(this.amb); o.start(); o2.start(); tr.start();
      return { g: gn };
    });
    let humK = 0;
    if (g.phase === 'match' && p.mode === 'ground' && p.alive) {
      let best = 1e9;
      for (const c of g.loot.chests) { if (c.opened) continue; const d = Math.hypot(c.x - p.pos.x, c.z - p.pos.z); if (d < best) best = d; }
      humK = best < 28 ? clamp01(1 - best / 28) : 0;
    }
    hum.g.gain.setTargetAtTime(humK * humK * 0.1, t, 0.2);
  }
}
