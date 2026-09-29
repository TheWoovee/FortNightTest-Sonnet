// Road detail decals: ribbons draped over the terrain carrying crisp lane markings (asphalt) or wheel tracks (dirt).
// The soft asphalt/dirt base is baked into the terrain colour texture; these add the high-frequency detail on top.
import * as THREE from 'three';
import { Rng } from '../util/rng.js';

function markingsTexture(kind) {
  const W = 128, H = 128;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const rng = new Rng(kind === 'asphalt' ? 5 : 9);
  if (kind === 'asphalt') {
    // speckle
    for (let i = 0; i < 900; i++) {
      const v = rng.chance(0.5) ? 255 : 0;
      g.fillStyle = `rgba(${v},${v},${v},${rng.range(0.03, 0.12)})`;
      g.fillRect(rng.range(0, W), rng.range(0, H), rng.range(1, 2.5), rng.range(1, 2.5));
    }
    // hairline cracks
    g.strokeStyle = 'rgba(20,22,28,.28)'; g.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      let x = rng.range(10, W - 10), y = rng.range(0, H);
      g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 4; k++) { x += rng.range(-6, 6); y += rng.range(4, 12); g.lineTo(x, y); }
      g.stroke();
    }
    // edge lines
    g.fillStyle = 'rgba(238,238,232,.95)';
    g.fillRect(W * 0.055, 0, 3, H);
    g.fillRect(W * 0.945 - 3, 0, 3, H);
    // centre dashes
    g.fillStyle = 'rgba(255,214,60,.98)';
    g.fillRect(W * 0.5 - 2.5, 0, 5, H * 0.5);
    // worn edges on the dashes
    g.fillStyle = 'rgba(0,0,0,.18)';
    for (let i = 0; i < 8; i++) g.fillRect(W * 0.5 - 2.5, rng.range(0, H * 0.5), 5, rng.range(1, 3));
  } else {
    // wheel ruts
    for (const cx of [W * 0.32, W * 0.68]) {
      const gr = g.createLinearGradient(cx - 16, 0, cx + 16, 0);
      gr.addColorStop(0, 'rgba(70,45,22,0)'); gr.addColorStop(0.5, 'rgba(70,45,22,.34)'); gr.addColorStop(1, 'rgba(70,45,22,0)');
      g.fillStyle = gr; g.fillRect(cx - 16, 0, 32, H);
    }
    for (let i = 0; i < 260; i++) {
      const light = rng.chance(0.5);
      g.fillStyle = light ? `rgba(235,214,170,${rng.range(0.25, 0.6)})` : `rgba(80,55,30,${rng.range(0.2, 0.5)})`;
      const r = rng.range(0.8, 2.2);
      g.beginPath(); g.arc(rng.range(6, W - 6), rng.range(0, H), r, 0, 6.28); g.fill();
    }
    // grass fringe on the very edge
    g.fillStyle = 'rgba(96,150,50,.5)';
    for (let i = 0; i < 90; i++) { const left = rng.chance(0.5); g.fillRect(left ? rng.range(0, 8) : rng.range(W - 8, W), rng.range(0, H), 2, rng.range(3, 8)); }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = THREE.ClampToEdgeWrapping; t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

class Ribbons {
  constructor() { this.pos = []; this.uv = []; this.idx = []; this.nor = []; this.vc = 0; }

  addPolyline(pts, width, terrain, yOff, tile = 8) {
    // resample to <= 3 m spacing
    const P = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
      const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, z1 - z0) / 3));
      for (let k = 0; k < n; k++) P.push([x0 + (x1 - x0) * (k / n), z0 + (z1 - z0) * (k / n)]);
    }
    P.push(pts[pts.length - 1]);
    let dist = 0;
    const base = this.vc;
    for (let i = 0; i < P.length; i++) {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)];
      let tx = b[0] - a[0], tz = b[1] - a[1];
      const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
      const nx = -tz, nz = tx;
      if (i > 0) dist += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]);
      for (const s of [1, -1]) {
        const x = P[i][0] + nx * (width / 2) * s, z = P[i][1] + nz * (width / 2) * s;
        this.pos.push(x, terrain.heightAt(x, z) + yOff, z);
        this.nor.push(0, 1, 0);
        this.uv.push(s > 0 ? 0 : 1, dist / tile);
        this.vc++;
      }
    }
    for (let i = 0; i < P.length - 1; i++) {
      const a = base + i * 2, b = a + 1, c = a + 2, d = a + 3;
      // wound so the face normal points up
      this.idx.push(a, c, b, b, c, d);
    }
  }

  build(material) {
    if (!this.vc) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.vc > 65535 ? new THREE.Uint32BufferAttribute(this.idx, 1) : new THREE.Uint16BufferAttribute(this.idx, 1));
    g.computeBoundingSphere();
    const m = new THREE.Mesh(g, material);
    m.receiveShadow = true;
    m.renderOrder = 1;
    return m;
  }
}

export class RoadDecals {
  /** @param {import('./world.js').World} world */
  constructor(world) {
    const T = world.terrain;
    const asphalt = new Ribbons(), dirt = new Ribbons();
    for (const r of T.layout.roads) {
      (r.kind === 'asphalt' ? asphalt : dirt).addPolyline(r.samples.map((s) => [s.x, s.z]), r.w * 0.96, T, 0.07);
    }
    for (const t of world.towns) {
      const isDirt = ['farm', 'lodge', 'autumn'].includes(t.town.style);
      const target = isDirt ? dirt : asphalt;
      const main = t.streets[0];
      for (const s of t.streets) {
        // keep cross streets from overlapping the main street's dashes: split around it
        if (s !== main && main) {
          const cut0 = main.pos - main.w / 2 - 0.2, cut1 = main.pos + main.w / 2 + 0.2;
          const seg = (a, b) => { if (b - a > 1) target.addPolyline(s.axis === 'z' ? [[s.pos, a], [s.pos, b]] : [[a, s.pos], [b, s.pos]], s.w * 0.96, T, 0.09); };
          if (s.axis === 'z') { seg(s.from, cut0); seg(cut1, s.to); } else seg(s.from, s.to);
        } else {
          target.addPolyline(s.axis === 'x' ? [[s.from, s.pos], [s.to, s.pos]] : [[s.pos, s.from], [s.pos, s.to]], s.w * 0.96, T, 0.08);
        }
      }
    }
    const mk = (kind) => new THREE.MeshLambertMaterial({
      map: markingsTexture(kind), transparent: true, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    });
    this.meshes = [];
    for (const [rb, kind] of [[asphalt, 'asphalt'], [dirt, 'dirt']]) {
      const m = rb.build(mk(kind));
      if (m) { world.group.add(m); this.meshes.push(m); }
    }
  }
}
