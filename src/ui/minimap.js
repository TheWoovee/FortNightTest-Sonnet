// Minimap (north-up, player-centred), compass bar and full-screen map, all drawn on 2D canvases.
import { WORLD } from '../config.js';
import { clamp, clamp01, lerp, smoothstep, TAU, DEG } from '../util/math.js';

const BASE = 1024;

export class MapView {
  constructor(game) {
    this.game = game;
    this.base = null;
    this.mini = null; this.compass = null; this.full = null;
    this.marker = null;
    this.miniSpan = 250;
    this._span = 250;
  }

  // ---- baked base image -----------------------------------------------------------------------------------------------------------------
  bake(world) {
    const S = BASE;
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(world.colorCanvas, 0, 0, S, S);
    const img = ctx.getImageData(0, 0, S, S);
    const d = img.data;
    const T = world.terrain;
    const step = WORLD.size / S;
    for (let j = 0; j < S; j++) {
      const z = -WORLD.half + (j + 0.5) * step;
      for (let i = 0; i < S; i++) {
        const x = -WORLD.half + (i + 0.5) * step;
        const o = (j * S + i) * 4;
        const h = T.heightAt(x, z);
        const wl = T.waterLevelAt(x, z);
        if (wl !== null) {
          const depth = wl - h;
          const t = clamp01(depth / 14);
          const sh = 1 - smoothstep(0, 1.2, depth);      // shoreline highlight
          let r = lerp(120, 22, t) + sh * 60, g = lerp(228, 110, t) + sh * 25, b = lerp(214, 205, t) + sh * 20;
          d[o] = Math.min(255, r); d[o + 1] = Math.min(255, g); d[o + 2] = Math.min(255, b);
        } else {
          const hl = T.heightAt(x - 7, z), hr = T.heightAt(x + 7, z), hu = T.heightAt(x, z - 7), hd = T.heightAt(x, z + 7);
          const sh = 1 + clamp(((hl - hr) + (hu - hd)) * 0.045, -0.35, 0.3);
          d[o] = Math.min(255, d[o] * sh * 1.04); d[o + 1] = Math.min(255, d[o + 1] * sh * 1.04); d[o + 2] = Math.min(255, d[o + 2] * sh);
        }
      }
    }
    ctx.putImageData(img, 0, 0);
    // buildings
    const k = S / WORLD.size;
    for (const b of world.buildings) {
      const r = b.rect;
      const x = (r.minX + 1.4 + WORLD.half) * k, z = (r.minZ + 1.4 + WORLD.half) * k;
      const w = (r.maxX - r.minX - 2.8) * k, h = (r.maxZ - r.minZ - 2.8) * k;
      ctx.fillStyle = 'rgba(30,34,50,.75)';
      ctx.fillRect(x - 1, z - 1, w + 2, h + 2);
      ctx.fillStyle = '#f5efe4';
      ctx.fillRect(x, z, w, h);
    }
    this.base = c;
  }

  attach(mini, compass, full) { this.mini = mini; this.compass = compass; this.full = full; }

  // ---- helpers ---------------------------------------------------------------------------------------------------------------------------------
  focus() {
    const g = this.game;
    const b = g.phase === 'match' && g.bus?.active && g.player.mode === 'bus';
    if (b) return { x: g.bus.position.x, z: g.bus.position.z, yaw: g.bus.yaw };
    const p = g.viewActor || g.player;
    return { x: p.pos.x, z: p.pos.z, yaw: g.camera?.mode === 'spectate' ? g.camera.yaw : p.aimYaw };
  }

  drawStorm(ctx, tx, ty, scale, W, H) {
    const st = this.game.storm;
    if (!st || !st.active) return;
    const c = st.current;
    const mx = tx(c.x), my = ty(c.z), r = c.r * scale;
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    ctx.arc(mx, my, Math.max(r, 0.01), 0, TAU, true);
    ctx.fillStyle = 'rgba(150,50,235,.42)';
    ctx.fill('evenodd');
    ctx.restore();
    ctx.lineWidth = Math.max(2, W * 0.008);
    ctx.strokeStyle = 'rgba(190,110,255,.95)';
    ctx.beginPath(); ctx.arc(mx, my, Math.max(r, 0.01), 0, TAU); ctx.stroke();
    const n = st.next;
    if (n) {
      ctx.lineWidth = Math.max(2, W * 0.007);
      ctx.strokeStyle = '#fff';
      ctx.setLineDash([W * 0.03, W * 0.018]);
      ctx.beginPath(); ctx.arc(tx(n.x), ty(n.z), Math.max(n.r * scale, 0.01), 0, TAU); ctx.stroke();
      ctx.setLineDash([]);
    }
  }

  drawArrow(ctx, x, y, yaw, size, cone = true) {
    const a = Math.atan2(-Math.cos(yaw), -Math.sin(yaw));
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(a);
    if (cone) {
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 4.2);
      g.addColorStop(0, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, size * 4.2, -0.62, 0.62); ctx.closePath(); ctx.fill();
    }
    ctx.beginPath();
    ctx.moveTo(size * 1.15, 0); ctx.lineTo(-size * 0.8, size * 0.78); ctx.lineTo(-size * 0.35, 0); ctx.lineTo(-size * 0.8, -size * 0.78); ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#0b1230'; ctx.lineWidth = size * 0.32; ctx.lineJoin = 'round';
    ctx.stroke(); ctx.fill();
    ctx.restore();
  }

  drawMarker(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath(); ctx.moveTo(0, -s * 1.3); ctx.lineTo(s * 0.8, 0); ctx.lineTo(0, s * 1.3); ctx.lineTo(-s * 0.8, 0); ctx.closePath();
    ctx.fillStyle = '#ffe93b'; ctx.strokeStyle = '#0b1230'; ctx.lineWidth = s * 0.35; ctx.stroke(); ctx.fill();
    ctx.restore();
  }

  drawBus(ctx, tx, ty, W, s) {
    const bus = this.game.bus;
    if (!bus || !bus.active) return;
    ctx.save();
    ctx.setLineDash([W * 0.02, W * 0.016]);
    ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = Math.max(2, W * 0.006);
    ctx.beginPath(); ctx.moveTo(tx(bus.start.x), ty(bus.start.z)); ctx.lineTo(tx(bus.end.x), ty(bus.end.z)); ctx.stroke();
    ctx.setLineDash([]);
    // bus icon
    const bx = tx(bus.position.x), by = ty(bus.position.z);
    ctx.translate(bx, by); ctx.rotate(Math.atan2(-Math.cos(bus.yaw), -Math.sin(bus.yaw)));
    ctx.fillStyle = '#4aa8ff'; ctx.strokeStyle = '#0b1230'; ctx.lineWidth = s * 0.3;
    ctx.beginPath(); ctx.roundRect(-s * 1.3, -s * 0.7, s * 2.6, s * 1.4, s * 0.4); ctx.stroke(); ctx.fill();
    ctx.fillStyle = '#ffe93b'; ctx.beginPath(); ctx.arc(s * 0.9, 0, s * 0.3, 0, TAU); ctx.fill();
    ctx.restore();
  }

  // ---- minimap ---------------------------------------------------------------------------------------------------------------------------------
  drawMini(dt) {
    const cvs = this.mini;
    if (!cvs || !this.base) return;
    const g = this.game;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const size = Math.round(cvs.clientWidth * dpr);
    if (size < 10) return;
    if (cvs.width !== size) { cvs.width = size; cvs.height = size; }
    const ctx = cvs.getContext('2d');
    const f = this.focus();
    const inBus = g.player.mode === 'bus' && g.bus?.active;
    const spanT = inBus ? 1150 : (g.player.mode === 'freefall' || g.player.mode === 'glide') ? 420 : 250;
    this._span = lerp(this._span, spanT, 1 - Math.exp(-4 * (dt || 0.016)));
    const span = this._span;
    const scale = size / span;
    const tx = (x) => (x - f.x) * scale + size / 2, ty = (z) => (z - f.z) * scale + size / 2;
    ctx.fillStyle = '#12508a';
    ctx.fillRect(0, 0, size, size);
    const k = BASE / WORLD.size;
    const sx = (f.x + WORLD.half - span / 2) * k, sy = (f.z + WORLD.half - span / 2) * k, sw = span * k;
    // manual clipping of the source rect (some browsers reject out-of-range sources)
    const csx = Math.max(0, sx), csy = Math.max(0, sy), cex = Math.min(BASE, sx + sw), cey = Math.min(BASE, sy + sw);
    if (cex > csx && cey > csy) {
      ctx.drawImage(this.base, csx, csy, cex - csx, cey - csy, (csx - sx) / sw * size, (csy - sy) / sw * size, (cex - csx) / sw * size, (cey - csy) / sw * size);
    }
    this.drawBus(ctx, tx, ty, size, size * 0.03);
    this.drawStorm(ctx, tx, ty, scale, size, size);
    if (this.marker) {
      let mx = tx(this.marker.x), my = ty(this.marker.z);
      const m = size * 0.06;
      mx = clamp(mx, m, size - m); my = clamp(my, m, size - m);
      this.drawMarker(ctx, mx, my, size * 0.032);
    }
    this.drawArrow(ctx, size / 2, size / 2, f.yaw, size * 0.035);
  }

  // ---- compass ---------------------------------------------------------------------------------------------------------------------------------
  drawCompass() {
    const cvs = this.compass;
    if (!cvs) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.round(cvs.clientWidth * dpr), H = Math.round(cvs.clientHeight * dpr);
    if (W < 10) return;
    if (cvs.width !== W || cvs.height !== H) { cvs.width = W; cvs.height = H; }
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    const g = this.game;
    const f = this.focus();
    let bearing = ((-f.yaw / DEG) % 360 + 360) % 360;
    const range = 62, ppd = W / (range * 2);
    ctx.font = `400 ${Math.round(H * 0.44)}px Anton, Impact, sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const cards = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };
    // backing
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, 'rgba(8,14,38,0)'); grad.addColorStop(0.15, 'rgba(8,14,38,.55)'); grad.addColorStop(0.85, 'rgba(8,14,38,.55)'); grad.addColorStop(1, 'rgba(8,14,38,0)');
    ctx.fillStyle = grad; ctx.fillRect(0, H * 0.12, W, H * 0.62);
    for (let a = Math.floor(bearing - range - 1); a <= Math.ceil(bearing + range + 1); a++) {
      if (a % 5 !== 0) continue;
      const x = W / 2 + (a - bearing) * ppd;
      const edge = 1 - smoothstep(0.55, 1, Math.abs(x - W / 2) / (W / 2));
      const norm = ((a % 360) + 360) % 360;
      const major = norm % 45 === 0, mid = norm % 15 === 0;
      ctx.globalAlpha = edge;
      ctx.strokeStyle = '#fff'; ctx.lineWidth = Math.max(1.5, H * 0.045);
      ctx.beginPath(); ctx.moveTo(x, H * (major ? 0.16 : mid ? 0.24 : 0.32)); ctx.lineTo(x, H * 0.42); ctx.stroke();
      if (major) {
        ctx.fillStyle = norm % 90 === 0 ? '#ffe93b' : '#fff';
        ctx.fillText(cards[norm], x, H * 0.7);
      } else if (mid) {
        ctx.font = `400 ${Math.round(H * 0.3)}px Anton, Impact, sans-serif`;
        ctx.fillStyle = 'rgba(255,255,255,.8)';
        ctx.fillText(String(norm), x, H * 0.66);
        ctx.font = `400 ${Math.round(H * 0.44)}px Anton, Impact, sans-serif`;
      }
    }
    ctx.globalAlpha = 1;
    // centre pointer
    ctx.fillStyle = '#ffe93b';
    ctx.beginPath(); ctx.moveTo(W / 2 - H * 0.12, 0); ctx.lineTo(W / 2 + H * 0.12, 0); ctx.lineTo(W / 2, H * 0.17); ctx.closePath(); ctx.fill();
    // markers
    const bearingTo = (x, z) => { const dx = x - f.x, dz = z - f.z; return ((Math.atan2(dx, -dz) / DEG) % 360 + 360) % 360; };
    const drawAt = (b, draw) => {
      let d = ((b - bearing + 540) % 360) - 180;
      const x = W / 2 + clamp(d, -range + 4, range - 4) * ppd;
      draw(x, Math.abs(d) > range - 4);
    };
    if (this.marker) drawAt(bearingTo(this.marker.x, this.marker.z), (x) => { this.drawMarker(ctx, x, H * 0.5, H * 0.16); });
    const st = g.storm;
    if (st?.active) {
      const t = st.next || st.current;
      drawAt(bearingTo(t.x, t.z), (x, off) => {
        ctx.fillStyle = off ? '#d5a1ff' : '#b45cff'; ctx.strokeStyle = '#0b1230'; ctx.lineWidth = H * 0.05;
        ctx.beginPath(); ctx.arc(x, H * 0.5, H * 0.12, 0, TAU); ctx.stroke(); ctx.fill();
      });
    }
  }

  // ---- full map ---------------------------------------------------------------------------------------------------------------------------------
  drawFull() {
    const cvs = this.full;
    if (!cvs || !this.base) return;
    const g = this.game;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const size = Math.round(cvs.clientWidth * dpr);
    if (size < 10) return;
    if (cvs.width !== size) { cvs.width = size; cvs.height = size; }
    const ctx = cvs.getContext('2d');
    ctx.drawImage(this.base, 0, 0, size, size);
    const tx = (x) => (x + WORLD.half) / WORLD.size * size, ty = (z) => (z + WORLD.half) / WORLD.size * size;
    const scale = size / WORLD.size;
    this.drawBus(ctx, tx, ty, size, size * 0.012);
    this.drawStorm(ctx, tx, ty, scale, size, size);
    // POI names
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const fs = Math.round(size * 0.026);
    ctx.font = `italic 800 ${fs}px "Barlow Condensed", Impact, sans-serif`;
    ctx.lineJoin = 'round';
    for (const t of g.terrain.layout.towns) {
      const x = tx(t.x), y = ty(t.z) - (t.big ? size * 0.05 : size * 0.035);
      ctx.lineWidth = fs * 0.28; ctx.strokeStyle = 'rgba(8,14,38,.95)';
      ctx.strokeText(t.name.toUpperCase(), x, y);
      ctx.fillStyle = '#fff'; ctx.fillText(t.name.toUpperCase(), x, y);
    }
    ctx.font = `italic 700 ${Math.round(fs * 0.8)}px "Barlow Condensed", Impact, sans-serif`;
    for (const lm of g.terrain.layout.landmarks.concat(g.terrain.layout.peaks.filter((p) => p.name).map((p) => ({ x: p.x, z: p.z, name: p.name })))) {
      const x = tx(lm.x), y = ty(lm.z) - size * 0.02;
      ctx.lineWidth = fs * 0.24; ctx.strokeStyle = 'rgba(8,14,38,.9)';
      ctx.strokeText(lm.name.toUpperCase(), x, y);
      ctx.fillStyle = '#ffe8a0'; ctx.fillText(lm.name.toUpperCase(), x, y);
    }
    if (this.marker) this.drawMarker(ctx, tx(this.marker.x), ty(this.marker.z), size * 0.014);
    const p = g.player;
    if (p.alive) this.drawArrow(ctx, tx(p.pos.x), ty(p.pos.z), p.aimYaw, size * 0.014, false);
  }

  /** map click → world coordinates */
  fullToWorld(px, py) {
    const r = this.full.getBoundingClientRect();
    const x = ((px - r.left) / r.width) * WORLD.size - WORLD.half;
    const z = ((py - r.top) / r.height) * WORLD.size - WORLD.half;
    return { x, z };
  }
}
