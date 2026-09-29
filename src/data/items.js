// Static game data: weapons, ammo types, consumables and loot tables.
import { RARITY } from '../config.js';

export const AMMO = {
  light:  { id: 'light',  name: 'Light Bullets',  short: 'LIGHT',  color: '#ffd84a', box: 0xffc93a, perBox: 36, cap: 250 },
  medium: { id: 'medium', name: 'Medium Bullets', short: 'MEDIUM', color: '#ff9a3a', box: 0xf08a30, perBox: 30, cap: 240 },
  shells: { id: 'shells', name: 'Shotgun Shells', short: 'SHELLS', color: '#ff5a4a', box: 0xe04a3a, perBox: 8,  cap: 60 },
  heavy:  { id: 'heavy',  name: 'Heavy Bullets',  short: 'HEAVY',  color: '#7ec8ff', box: 0x5ab0f0, perBox: 6,  cap: 40 },
};

/**
 * dmg: damage per bullet/pellet at Common. rate: shots/sec. spread: base cone half-angle (rad).
 * falloff: [full-damage range, min-damage range, min multiplier]
 * hold: animation stance. structDmg: damage to building pieces (per bullet/pellet).
 */
export const WEAPONS = {
  ar: {
    id: 'ar', name: 'Assault Rifle', ammo: 'medium', auto: true, dmg: 30, rate: 5.5, mag: 30, reload: 2.3, spread: 0.012,
    adsSpread: 0.4, bloom: 0.0035, bloomMax: 0.028, recover: 0.05, headMult: 1.5, pellets: 1, range: 400, falloff: [70, 260, 0.65],
    structDmg: 34, hold: 'rifle', fov: 52, recoil: 1.15, tracer: 0xffe6a0, sound: 'ar', icon: 'ar',
  },
  smg: {
    id: 'smg', name: 'Submachine Gun', ammo: 'light', auto: true, dmg: 17, rate: 11.5, mag: 30, reload: 2.1, spread: 0.02,
    adsSpread: 0.5, bloom: 0.0028, bloomMax: 0.04, recover: 0.05, headMult: 1.5, pellets: 1, range: 260, falloff: [35, 130, 0.55],
    structDmg: 20, hold: 'smg', fov: 58, recoil: 0.8, tracer: 0xffe6a0, sound: 'smg', icon: 'smg',
  },
  pump: {
    id: 'pump', name: 'Pump Shotgun', ammo: 'shells', auto: false, dmg: 12, rate: 0.9, mag: 5, reload: 4.4, spread: 0.06,
    adsSpread: 0.65, bloom: 0.0, bloomMax: 0, recover: 0.05, headMult: 2.0, pellets: 10, range: 120, falloff: [9, 34, 0.18],
    structDmg: 60, hold: 'shotgun', fov: 58, recoil: 3.6, tracer: 0xfff0c0, sound: 'shotgun', icon: 'pump',
  },
  sniper: {
    id: 'sniper', name: 'Bolt-Action Sniper', ammo: 'heavy', auto: false, dmg: 105, rate: 0.36, mag: 1, reload: 2.9, spread: 0.02,
    adsSpread: 0.0, bloom: 0, bloomMax: 0, recover: 0.05, headMult: 2.5, pellets: 1, range: 900, falloff: [400, 900, 0.9],
    structDmg: 105, hold: 'sniper', fov: 14, recoil: 4.5, tracer: 0xffffff, sound: 'sniper', icon: 'sniper',
  },
  pistol: {
    id: 'pistol', name: 'Pistol', ammo: 'light', auto: false, dmg: 24, rate: 6.5, mag: 16, reload: 1.5, spread: 0.014,
    adsSpread: 0.45, bloom: 0.006, bloomMax: 0.03, recover: 0.06, headMult: 2.0, pellets: 1, range: 220, falloff: [50, 160, 0.6],
    structDmg: 20, hold: 'pistol', fov: 60, recoil: 1.0, tracer: 0xffe6a0, sound: 'pistol', icon: 'pistol',
  },
};

export const WEAPON_ORDER = ['ar', 'smg', 'pump', 'sniper', 'pistol'];
export const RARITY_RELOAD = [1, 0.97, 0.94, 0.9, 0.86];

export const PICKAXE = { id: 'pickaxe', name: 'Pickaxe', dmg: 20, structDmg: 45, rate: 1.9, reach: 2.8, hold: 'melee', icon: 'pickaxe' };

/** Consumables. use = seconds to consume; heal/shield amounts; cap = max stat it can raise to. */
export const CONSUMABLES = {
  bandage:    { id: 'bandage',    name: 'Bandage',       use: 3.5, heal: 15, healCap: 75, stack: 15, color: '#ffffff', kind: 'heal' },
  medkit:     { id: 'medkit',     name: 'Med Kit',       use: 7.0, heal: 100, healCap: 100, stack: 3, color: '#ff4a55', kind: 'heal' },
  minishield: { id: 'minishield', name: 'Mini Shield',   use: 2.2, shield: 25, shieldCap: 50, stack: 6, color: '#5ec8ff', kind: 'shield' },
  shield:     { id: 'shield',     name: 'Shield Potion', use: 4.5, shield: 50, shieldCap: 100, stack: 2, color: '#2f7dff', kind: 'shield' },
  chug:       { id: 'chug',       name: 'Chug Jug',      use: 9.0, heal: 100, healCap: 100, shield: 100, shieldCap: 100, stack: 1, color: '#b26cff', kind: 'both' },
};

export const MATERIALS = {
  wood:  { id: 'wood',  name: 'Wood',  color: '#e0a552', hp: 150, hex: 0xd9a05b },
  stone: { id: 'stone', name: 'Stone', color: '#c9ccd4', hp: 300, hex: 0xb7bcc6 },
  metal: { id: 'metal', name: 'Metal', color: '#7fb4ff', hp: 450, hex: 0x8ea6c4 },
};
export const MAT_ORDER = ['wood', 'stone', 'metal'];

export function weaponStats(item) {
  const w = WEAPONS[item.id];
  const r = RARITY[item.rarity];
  return {
    ...w,
    dmg: Math.round(w.dmg * r.dmg * 10) / 10,
    reload: w.reload * RARITY_RELOAD[item.rarity],
  };
}

export const LOOT_TABLES = {
  floor: {
    kind: [['weapon', 40], ['ammo', 22], ['heal', 26], ['shield', 12]],
    rarity: [[0, 46], [1, 32], [2, 15], [3, 5.5], [4, 1.5]],
    weapon: [['ar', 22], ['smg', 16], ['pump', 18], ['pistol', 16], ['sniper', 7]],
  },
  chest: {
    rarity: [[0, 8], [1, 32], [2, 34], [3, 20], [4, 6]],
    weapon: [['ar', 24], ['smg', 16], ['pump', 22], ['pistol', 8], ['sniper', 12]],
  },
  drop: {   // bot inventories
    rarity: [[0, 40], [1, 34], [2, 18], [3, 7], [4, 1]],
  },
};

export const BOT_NAMES = [
  'Blaze', 'Nova', 'Pixel', 'Rogue', 'Zephyr', 'Maverick', 'Comet', 'Viper', 'Echo', 'Jinx', 'Onyx', 'Sunny', 'Bandit', 'Ripley', 'Turbo',
  'Skye', 'Mango', 'Ghost', 'Dash', 'Cinder', 'Tango', 'Quill', 'Ranger', 'Frost', 'Hazel', 'Lynx', 'Orbit', 'Sable', 'Vortex', 'Wren',
  'Rocket', 'Pebbles', 'Tempest', 'Fable', 'Mocha', 'Titan', 'Jade', 'Bolt', 'Cricket', 'Dusty',
];

export const itemName = (it) => {
  if (!it) return '';
  if (it.kind === 'weapon') return WEAPONS[it.id].name;
  if (it.kind === 'consumable') return CONSUMABLES[it.id].name;
  if (it.kind === 'pickaxe') return PICKAXE.name;
  return it.id;
};
