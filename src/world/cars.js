// Parked cars: individually removable props that give metal when harvested with the pickaxe.
import * as THREE from 'three';
import { GeoBuilder, solidMaterial } from '../gfx/geo.js';

const geoCache = new Map();
function carGeometry(color) {
  if (geoCache.has(color)) return geoCache.get(color);
  const b = new GeoBuilder();
  const dark = 0x22262e;
  // long axis = X
  b.box(-2.15, 0.32, -0.92, 2.15, 0.95, 0.92, color, { bottom: true });           // body
  b.box(-1.25, 0.95, -0.82, 0.95, 1.55, 0.82, color, { dark: 0.9 });               // cabin
  b.box(-1.2, 1.0, -0.85, 0.9, 1.5, 0.85, 0x8fd8ff, { dark: 1, top: false });      // windows band
  b.box(-1.3, 1.5, -0.86, 1.0, 1.62, 0.86, color, { dark: 1 });                    // roof
  b.box(2.1, 0.5, -0.7, 2.2, 0.8, -0.35, 0xfff6b0, { dark: 1 }); b.box(2.1, 0.5, 0.35, 2.2, 0.8, 0.7, 0xfff6b0, { dark: 1 });   // lights
  b.box(-2.2, 0.5, -0.7, -2.1, 0.75, -0.4, 0xd93a3a, { dark: 1 }); b.box(-2.2, 0.5, 0.4, -2.1, 0.75, 0.7, 0xd93a3a, { dark: 1 });
  b.box(-2.2, 0.3, -0.95, 2.2, 0.42, 0.95, dark);                                   // bumpers/underside
  for (const [x, z] of [[-1.4, -0.95], [1.4, -0.95], [-1.4, 0.95], [1.4, 0.95]]) b.box(x - 0.42, 0.0, z - 0.14, x + 0.42, 0.84, z + 0.14, dark, { dark: 1 });
  const g = b.build();
  geoCache.set(color, g);
  return g;
}

export class Cars {
  constructor(world) {
    this.world = world;
    this.group = new THREE.Group();
    world.scene.add(this.group);
    this.mat = solidMaterial();
    this.list = [];
  }

  spawn(list) {
    const P = this.world.physics;
    for (const c of list) {
      const mesh = new THREE.Mesh(carGeometry(c.color), this.mat);
      mesh.position.set(c.x, c.y, c.z);
      mesh.castShadow = true; mesh.receiveShadow = true;
      this.group.add(mesh);
      const owner = { kind: 'prop', mat: 'metal', harvest: 'metal', hp: 8, maxHp: 8, alive: true, mesh, x: c.x, y: c.y, z: c.z, color: c.color };
      owner.collider = P.addBox(c.x - 2.2, c.x + 2.2, c.z - 1.0, c.z + 1.0, c.y + 0.25, c.y + 1.62, { walkable: true, owner, kind: 'prop', material: 'metal' });
      this.list.push(owner);
    }
  }

  hit(owner, dmg = 1) {
    owner.hp -= dmg;
    owner.mesh.position.y = owner.y + 0.03;
    setTimeout(() => { if (owner.alive) owner.mesh.position.y = owner.y; }, 50);
    if (owner.hp <= 0) this.remove(owner);
    return owner.hp <= 0;
  }

  remove(owner) {
    if (!owner.alive) return;
    owner.alive = false;
    this.world.physics.remove(owner.collider);
    this.group.remove(owner.mesh);
  }

  reset() {
    for (const o of this.list) {
      if (o.alive) continue;
      o.alive = true; o.hp = o.maxHp;
      this.group.add(o.mesh);
      o.mesh.position.y = o.y;
      o.collider = this.world.physics.addBox(o.x - 2.2, o.x + 2.2, o.z - 1.0, o.z + 1.0, o.y + 0.25, o.y + 1.62, { walkable: true, owner: o, kind: 'prop', material: 'metal' });
    }
  }
}
