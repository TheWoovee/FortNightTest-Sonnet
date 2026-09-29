// The Sky Bus: a colourful bus slung under a striped hot-air balloon that carries everyone across the island.
import * as THREE from 'three';
import { GeoBuilder, solidMaterial } from '../gfx/geo.js';
import { MATCH, WORLD } from '../config.js';
import { Rng } from '../util/rng.js';

function buildBusModel() {
  const b = new GeoBuilder();
  const body = 0x2f8cff, trim = 0xffe93b, dark = 0x1a2340, white = 0xf4f7ff;
  // chassis + body (length along -Z = forward)
  b.box(-1.5, 0.5, -4.6, 1.5, 3.0, 4.6, body, { bottom: true });
  b.box(-1.55, 0.5, -4.65, 1.55, 1.05, 4.65, trim, { dark: 1 });                 // lower stripe
  b.box(-1.52, 2.35, -4.62, 1.52, 3.05, 4.62, white, { dark: 1 });                // roof band
  b.box(-1.3, 3.0, -4.0, 1.3, 3.25, 3.9, 0xdfe7f5);                               // roof cap
  // windows
  for (let i = 0; i < 5; i++) {
    const z = -3.4 + i * 1.65;
    b.box(-1.56, 1.35, z - 0.55, -1.5, 2.25, z + 0.55, 0x9fe3ff, { dark: 1 });
    b.box(1.5, 1.35, z - 0.55, 1.56, 2.25, z + 0.55, 0x9fe3ff, { dark: 1 });
  }
  // windshield + grille
  b.box(-1.25, 1.35, -4.66, 1.25, 2.4, -4.6, 0x9fe3ff, { dark: 1 });
  b.box(-1.0, 0.65, -4.68, 1.0, 1.0, -4.6, dark);
  b.box(-1.4, 0.6, -4.72, -1.0, 0.95, -4.6, 0xfff6b0, { dark: 1 }); b.box(1.0, 0.6, -4.72, 1.4, 0.95, -4.6, 0xfff6b0, { dark: 1 });
  // wheels
  for (const [x, z] of [[-1.55, -2.9], [1.55, -2.9], [-1.55, 2.9], [1.55, 2.9]]) {
    b.cylinder(x, 0.0, z, 0.62, 0.5, 10, dark, { dark: 1 });
  }
  const g = new THREE.Group();
  const bus = new THREE.Mesh(b.build(), solidMaterial());
  bus.castShadow = true;
  // wheels need rotating cylinders horizontally: approximate with boxes (already cylinders vertical) → rotate mesh parts is overkill; fake with dark discs
  g.add(bus);

  // balloon
  const rad = 6.2;
  const geo = new THREE.SphereGeometry(rad, 28, 20).toNonIndexed();
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const palette = [new THREE.Color('#2f8cff'), new THREE.Color('#ffe93b'), new THREE.Color('#ffffff'), new THREE.Color('#ff5a5f')];
  for (let i = 0; i < pos.count; i++) {
    const a = Math.atan2(pos.getZ(i), pos.getX(i));
    const seg = Math.floor(((a + Math.PI) / (Math.PI * 2)) * 12);
    const c = palette[seg % palette.length];
    const sh = 0.72 + 0.28 * ((pos.getY(i) / rad + 1) / 2);
    col[i * 3] = c.r * sh; col[i * 3 + 1] = c.g * sh; col[i * 3 + 2] = c.b * sh;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.deleteAttribute('uv');
  geo.scale(1, 1.18, 1);
  const balloon = new THREE.Mesh(geo, solidMaterial());
  balloon.position.y = 15.5;
  balloon.castShadow = true;
  g.add(balloon);
  // ropes
  const rb = new GeoBuilder();
  for (const [x, z] of [[-1.2, -3.2], [1.2, -3.2], [-1.2, 3.2], [1.2, 3.2]]) {
    rb.box(x - 0.05, 3.2, z - 0.05, x + 0.05, 10.4, z + 0.05, 0x3a2a1c);
  }
  rb.box(-1.8, 3.25, -3.6, 1.8, 3.4, 3.6, 0x3a2a1c);
  const ropes = new THREE.Mesh(rb.build(), solidMaterial());
  g.add(ropes);
  g.userData.balloon = balloon;
  return g;
}

export class BattleBus {
  constructor(game) {
    this.game = game;
    this.model = buildBusModel();
    this.model.visible = false;
    game.gfx.scene.add(this.model);
    this.position = new THREE.Vector3();
    this.start = new THREE.Vector3();
    this.end = new THREE.Vector3();
    this.dir = new THREE.Vector3(0, 0, -1);
    this.yaw = 0;
    this.active = false;
    this.t = 0;
    this.len = 1;
    this.speed = MATCH.busSpeed;
    this.altitude = MATCH.busAltitude;
  }

  /** Pick a route across the island. */
  begin(seed) {
    const rng = new Rng(seed);
    const a = rng.range(0, Math.PI * 2);
    const dx = Math.cos(a), dz = Math.sin(a);
    const off = rng.range(-110, 110);
    const px = -dz, pz = dx;
    const R = 560;
    this.start.set(-dx * R + px * off, this.altitude, -dz * R + pz * off);
    this.end.set(dx * R + px * off, this.altitude, dz * R + pz * off);
    this.len = this.start.distanceTo(this.end);
    this.dir.subVectors(this.end, this.start).normalize();
    this.yaw = Math.atan2(-this.dir.x, -this.dir.z);
    this.position.copy(this.start);
    this.t = 0;
    this.active = true;
    this.model.visible = true;
    this.model.rotation.y = this.yaw;
    this.model.position.copy(this.position);
  }

  get progress() { return this.t / this.len; }

  /** Closest-approach progress (0..1) along the route to a world point, and the perpendicular distance. */
  approach(x, z) {
    const sx = this.start.x, sz = this.start.z;
    const vx = x - sx, vz = z - sz;
    const along = vx * this.dir.x + vz * this.dir.z;
    const perp = Math.abs(vx * -this.dir.z + vz * this.dir.x);
    return { s: clamp01(along / this.len), perp };
  }

  update(dt) {
    if (!this.active) return;
    this.t += this.speed * dt;
    this.position.copy(this.start).addScaledVector(this.dir, this.t);
    this.position.y = this.altitude + Math.sin(this.t * 0.05) * 1.2;
    const m = this.model;
    m.position.copy(this.position);
    m.rotation.y = this.yaw;
    m.rotation.z = Math.sin(this.t * 0.03) * 0.03;
    m.userData.balloon.rotation.y += dt * 0.05;
    if (this.progress >= 1.02) { this.active = false; m.visible = false; }
  }
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
