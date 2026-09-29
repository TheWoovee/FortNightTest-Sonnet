// UI icons: inline SVGs + item icons rendered from the actual 3D models (so the HUD matches the world).
import * as THREE from 'three';
import { RARITY } from '../config.js';
import { WEAPONS, WEAPON_ORDER, CONSUMABLES, AMMO } from '../data/items.js';
import { makeItemMesh } from '../entities/itemModels.js';

const svg = (body, vb = '0 0 32 32') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">${body}</svg>`;

export const SVG = {
  person: svg('<circle cx="16" cy="10" r="6" fill="#fff"/><path d="M4 28c0-7 5-11 12-11s12 4 12 11z" fill="#fff"/>'),
  skull: svg('<path d="M16 2C8.8 2 4 7 4 13.5c0 4 2 6.6 4.5 8.2V27h4v-3h2v3h3v-3h2v3h4v-5.3c2.5-1.6 4.5-4.2 4.5-8.2C28 7 23.2 2 16 2z" fill="#fff"/><circle cx="11" cy="14" r="3.3" fill="#151a33"/><circle cx="21" cy="14" r="3.3" fill="#151a33"/><path d="M16 17l-2 4h4z" fill="#151a33"/>'),
  storm: svg('<path d="M16 3C9 3 4 8.4 4 14.6c0 5.6 4 9 8.6 9.4L10 30l9-8h2.6C26 22 29 18.6 29 14.4 29 8.2 23.5 3 16 3z" fill="#e9c9ff"/><path d="M17.5 7l-5 8h4l-2 7 7-9h-4z" fill="#7a2bd6"/>'),
  wood: svg('<rect x="3" y="7" width="26" height="8" rx="4" fill="#c98a3f"/><rect x="3" y="17" width="26" height="8" rx="4" fill="#e0a552"/><circle cx="25" cy="11" r="2.6" fill="#f3d39a"/><circle cx="25" cy="21" r="2.6" fill="#f3d39a"/><path d="M6 9.5h14M6 19.5h14" stroke="#a86a2a" stroke-width="1.5" stroke-linecap="round"/>'),
  stone: svg('<path d="M4 22l4-11 9-6 10 7 2 12-8 5H10z" fill="#c9ccd4"/><path d="M8 11l9-6 10 7-9 4z" fill="#eceef3"/><path d="M18 16l9-4 2 12-8 5z" fill="#9aa0ad"/>'),
  metal: svg('<path d="M16 3l3 2.5 3.8-.6 1.5 3.6 3.6 1.5-.6 3.8L29 16l-2.7 2.7.6 3.8-3.6 1.5-1.5 3.6-3.8-.6L16 29l-2.5-2.5-3.8.6-1.5-3.6-3.6-1.5.6-3.8L3 16l2.7-2.7-.6-3.8 3.6-1.5 1.5-3.6 3.8.6z" fill="#7fb4ff"/><circle cx="16" cy="16" r="5.2" fill="#0e1a3a"/><circle cx="16" cy="16" r="3" fill="#a9cfff"/>'),
  bulletLight: svg('<rect x="12" y="4" width="8" height="18" rx="4" fill="#ffd84a"/><rect x="11" y="21" width="10" height="6" rx="1" fill="#c9a12c"/>'),
  bulletMedium: svg('<path d="M12 4h8v10l-1 3h-6l-1-3z" fill="#ff9a3a"/><rect x="11" y="17" width="10" height="9" rx="1" fill="#c96f1c"/>'),
  bulletHeavy: svg('<path d="M16 2l5 8v14a2 2 0 01-2 2h-6a2 2 0 01-2-2V10z" fill="#7ec8ff"/><rect x="10" y="22" width="12" height="6" rx="1" fill="#3f8ec9"/>'),
  bulletShells: svg('<rect x="8" y="5" width="16" height="22" rx="3" fill="#ff5a4a"/><rect x="8" y="21" width="16" height="6" rx="2" fill="#e0b23b"/><rect x="8" y="12" width="16" height="2" fill="#a83326"/>'),
  wall: svg('<rect x="6" y="3" width="20" height="26" fill="#e9eef8" stroke="#0e1a3a" stroke-width="2"/><path d="M6 11h20M6 19h20M14 3v8M22 11v8M14 19v10" stroke="#0e1a3a" stroke-width="1.6" fill="none"/>'),
  floor: svg('<path d="M3 18l13-9 13 9-13 9z" fill="#e9eef8" stroke="#0e1a3a" stroke-width="2" stroke-linejoin="round"/><path d="M9.5 13.5l13 9M22.5 13.5l-13 9" stroke="#0e1a3a" stroke-width="1.4"/>'),
  ramp: svg('<path d="M4 26V22L24 6h4v20z" fill="#e9eef8" stroke="#0e1a3a" stroke-width="2" stroke-linejoin="round"/><path d="M9 20l0 6M14 16l0 10M19 12l0 14" stroke="#0e1a3a" stroke-width="1.5"/>'),
  roof: svg('<path d="M3 24L16 5l13 19z" fill="#e9eef8" stroke="#0e1a3a" stroke-width="2" stroke-linejoin="round"/><path d="M16 5v19M3 24l13-6 13 6" stroke="#0e1a3a" stroke-width="1.5" fill="none"/>'),
  build: svg('<path d="M5 27V13l11-8 11 8v14z" fill="none" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>'),
};

export const AMMO_ICON = { light: SVG.bulletLight, medium: SVG.bulletMedium, heavy: SVG.bulletHeavy, shells: SVG.bulletShells };
export const svgUrl = (s) => 'data:image/svg+xml;utf8,' + encodeURIComponent(s);

// CSS "r,g,b" strings from #rrggbb (plain parse – no colour-management involved)
export function cssRGB(hexStr) {
  const h = hexStr.replace('#', '');
  return `${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)}`;
}
export const rarityRGB = (r) => cssRGB(RARITY[r].color);

/** Renders 3D item models to PNG data-URLs (cached). */
export class IconRenderer {
  constructor(renderer) {
    this.renderer = renderer;
    this.cache = new Map();
    this.W = 256; this.H = 160;
    this.rt = new THREE.WebGLRenderTarget(this.W * 2, this.H * 2, { type: THREE.UnsignedByteType, samples: 4 });
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a94a8, 1.55));
    const key = new THREE.DirectionalLight(0xffffff, 2.6);
    key.position.set(2, 3, 4);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x9ac8ff, 1.0);
    rim.position.set(-3, 1, -2);
    this.scene.add(rim);
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 50);
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.W; this.canvas.height = this.H;
    this.ctx = this.canvas.getContext('2d');
    this.tmp = document.createElement('canvas');
    this.tmp.width = this.W * 2; this.tmp.height = this.H * 2;
    this.tctx = this.tmp.getContext('2d');
  }

  keyOf(item) {
    if (item.kind === 'weapon') return `w:${item.id}:${item.rarity}`;
    if (item.kind === 'pickaxe') return 'pickaxe';
    return `${item.kind}:${item.id}`;
  }

  get(item) {
    const key = this.keyOf(item);
    let url = this.cache.get(key);
    if (!url) { url = this.render(item); this.cache.set(key, url); }
    return url;
  }

  render(item) {
    const r = this.renderer;
    const model = makeItemMesh(item);
    // orient: weapons point right, pickaxe head up-right
    const wrap = new THREE.Group();
    wrap.add(model);
    if (item.kind === 'weapon') wrap.rotation.set(0.0, 0.0, 0.0);
    if (item.kind === 'pickaxe') wrap.rotation.z = -0.9;
    if (item.kind === 'consumable' || item.kind === 'ammo') wrap.rotation.set(0.35, -0.6, 0);
    this.scene.add(wrap);
    wrap.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(wrap);
    const size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
    // camera: from +X (so -Z points right), slightly above / in front
    const dir = item.kind === 'weapon' || item.kind === 'pickaxe' ? new THREE.Vector3(1, 0.32, 0.5) : new THREE.Vector3(0.6, 0.55, 1);
    dir.normalize();
    this.cam.position.copy(ctr).addScaledVector(dir, 6);
    this.cam.up.set(0, 1, 0);
    this.cam.lookAt(ctr);
    this.cam.updateMatrixWorld(true);
    // fit
    const inv = this.cam.matrixWorldInverse;
    let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
    const p = new THREE.Vector3();
    for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) {
      p.set(x, y, z).applyMatrix4(inv);
      minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
    }
    const w = maxX - minX, h = maxY - minY, aspect = this.W / this.H;
    let hw = w / 2 * 1.14, hh = h / 2 * 1.14;
    if (hw / hh < aspect) hw = hh * aspect; else hh = hw / aspect;
    const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
    this.cam.left = cx - hw; this.cam.right = cx + hw; this.cam.top = cy + hh; this.cam.bottom = cy - hh;
    this.cam.updateProjectionMatrix();

    const prevTarget = r.getRenderTarget();
    const prevClear = r.getClearColor(new THREE.Color()); const prevAlpha = r.getClearAlpha();
    r.setRenderTarget(this.rt);
    r.setClearColor(0x000000, 0);
    r.clear();
    r.render(this.scene, this.cam);
    const buf = new Uint8Array(this.W * 2 * this.H * 2 * 4);
    r.readRenderTargetPixels(this.rt, 0, 0, this.W * 2, this.H * 2, buf);
    r.setRenderTarget(prevTarget);
    r.setClearColor(prevClear, prevAlpha);
    this.scene.remove(wrap);

    // linear premultiplied → sRGB straight alpha, flipped vertically
    const img = this.tctx.createImageData(this.W * 2, this.H * 2);
    const W2 = this.W * 2, H2 = this.H * 2;
    for (let y = 0; y < H2; y++) {
      const src = (H2 - 1 - y) * W2 * 4, dst = y * W2 * 4;
      for (let x = 0; x < W2; x++) {
        const a = buf[src + x * 4 + 3];
        if (a === 0) continue;
        const af = a / 255;
        for (let c = 0; c < 3; c++) {
          let v = buf[src + x * 4 + c] / 255 / af;
          v = Math.min(1, v);
          v = v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
          img.data[dst + x * 4 + c] = v * 255;
        }
        img.data[dst + x * 4 + 3] = a;
      }
    }
    this.tctx.putImageData(img, 0, 0);
    this.ctx.clearRect(0, 0, this.W, this.H);
    this.ctx.imageSmoothingQuality = 'high';
    this.ctx.drawImage(this.tmp, 0, 0, this.W, this.H);
    return this.canvas.toDataURL('image/png');
  }

  prerender() {
    this.get({ kind: 'pickaxe', id: 'pickaxe' });
    for (const id of WEAPON_ORDER) for (let r = 0; r < RARITY.length; r++) this.get({ kind: 'weapon', id, rarity: r });
    for (const id of Object.keys(CONSUMABLES)) this.get({ kind: 'consumable', id });
    for (const id of Object.keys(AMMO)) this.get({ kind: 'ammo', id });
  }
}
