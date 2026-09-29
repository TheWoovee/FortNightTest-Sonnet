// Debug view: lines up characters in different poses. Open with ?view=chars
import * as THREE from 'three';
import { CharacterModel, randomOutfit, PLAYER_OUTFIT } from '../entities/characterModel.js';
import { makeWeaponMesh, makePickaxeMesh, makeConsumableMesh } from '../entities/itemModels.js';
import { Rng } from '../util/rng.js';

export function charView(gfx, only = null) {
  const scene = gfx.scene;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshLambertMaterial({ color: 0x7fd13b }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const rng = new Rng(7);
  const poses = [
    { name: 'idle-ar', hold: 'rifle', w: ['ar', 3], s: {} },
    { name: 'run-ar', hold: 'rifle', w: ['ar', 2], s: { speed: 5.2, sprint: false } },
    { name: 'ads-ar', hold: 'rifle', w: ['ar', 4], s: { ads: 1, speed: 0 } },
    { name: 'reload', hold: 'rifle', w: ['ar', 1], s: { reloadT: 0.45 } },
    { name: 'sprint', hold: 'rifle', w: ['smg', 0], s: { speed: 7.4, sprint: true } },
    { name: 'pump', hold: 'shotgun', w: ['pump', 3], s: {} },
    { name: 'sniper-ads', hold: 'sniper', w: ['sniper', 4], s: { ads: 1 } },
    { name: 'pistol', hold: 'pistol', w: ['pistol', 2], s: {} },
    { name: 'pickaxe', hold: 'melee', w: 'pickaxe', s: {} },
    { name: 'swing', hold: 'melee', w: 'pickaxe', s: { swingT: 0.42 } },
    { name: 'heal', hold: 'consumable', w: 'medkit', s: { useT: 0.3 } },
    { name: 'build', hold: 'none', w: null, s: { building: true } },
    { name: 'crouch', hold: 'rifle', w: ['ar', 1], s: { crouch: true } },
    { name: 'jump', hold: 'rifle', w: ['ar', 1], s: { onGround: false } },
    { name: 'freefall', hold: 'none', w: null, s: { mode: 'freefall' } },
    { name: 'glide', hold: 'none', w: null, s: { mode: 'glide' } },
    { name: 'swim', hold: 'none', w: null, s: { swim: true, speed: 2 } },
    { name: 'dead', hold: 'none', w: null, s: { mode: 'dead', deadT: 1 } },
  ];
  const chars = [];
  const cols = only ? only.length : 6;
  const list = only ? only.map((i) => ({ p: poses[i], i })) : poses.map((p, i) => ({ p, i }));
  list.forEach(({ p, i }, n) => {
    const outfit = i === 0 ? PLAYER_OUTFIT : randomOutfit(rng);
    const m = new CharacterModel(outfit);
    m.root.position.set((n % cols - (cols - 1) / 2) * (only ? 1.6 : 2.4), p.s.mode === 'glide' ? 1.5 : p.s.mode === 'freefall' ? 1.2 : 0, -Math.floor(n / cols) * 3.2);
    let group = null;
    if (p.w === 'pickaxe') group = makePickaxeMesh();
    else if (p.w === 'medkit') group = makeConsumableMesh('medkit');
    else if (p.w) group = makeWeaponMesh(p.w[0], p.w[1]);
    m.setHeld(group ? { group, data: group.userData, hold: p.hold } : null);
    m.root.rotation.y = only ? Math.PI * 0.72 : Math.PI * 0.78;
    scene.add(m.root);
    chars.push({ m, p });
  });
  return {
    update(dt) {
      for (const { m, p } of chars) {
        m.update(dt, { speed: 0, moveAngle: 0, onGround: true, crouch: false, sprint: false, swim: false, mode: 'ground', aimPitch: 0, aimYawRel: 0, ads: 0, fireKick: 0, reloadT: -1, swingT: -1, useT: -1, building: false, landImpact: 0, hitFlinch: 0, deadT: 0, ...p.s });
        m.setDetail(0);
      }
    },
  };
}
