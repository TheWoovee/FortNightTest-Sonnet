// Global tunables. Distances are metres, times seconds.
export const WORLD = {
  size: 1280,
  half: 640,
  cell: 4,          // heightmap cell size
  cells: 320,
  nodes: 321,
  chunkCells: 32,   // terrain mesh chunk = 32 cells = 128 m
  seaLevel: 0,
};

export const TEXTURE_SIZE = 2048;   // baked terrain colour texture

export const PLAYER = {
  radius: 0.4,
  height: 1.8,
  crouchHeight: 1.3,
  eye: 1.62,
  stepUp: 0.55,
  walkSpeed: 5.2,
  sprintSpeed: 7.4,
  crouchSpeed: 2.6,
  adsSpeedMul: 0.6,
  jumpSpeed: 7.2,
  gravity: 24,
  maxFallSpeed: 55,
  groundAccel: 46,
  airAccel: 9,
  maxHealth: 100,
  maxShield: 100,
};

export const BUILD = {
  grid: 4,        // piece width
  height: 3,      // piece height (one storey)
  thickness: 0.28,
  cost: 10,
  maxMats: 999,
};

export const MATCH = {
  botCount: 29,               // + you = 30 players
  busAltitude: 340,
  busSpeed: 34,
  busRoutePad: 120,
  glideOpenAltitude: 95,
  fallDamageSpeed: 21,
};

// Storm phases: wait (safe), then shrink to `radius` over `shrink` seconds. dps = damage per second.
export const STORM_PHASES = [
  { wait: 50,  shrink: 55, radius: 330, dps: 1 },
  { wait: 45,  shrink: 50, radius: 215, dps: 2 },
  { wait: 40,  shrink: 45, radius: 130, dps: 3 },
  { wait: 35,  shrink: 40, radius: 72,  dps: 5 },
  { wait: 30,  shrink: 35, radius: 34,  dps: 8 },
  { wait: 25,  shrink: 30, radius: 12,  dps: 10 },
  { wait: 15,  shrink: 25, radius: 0,   dps: 12 },
];
export const STORM_START_RADIUS = 640;

export const RARITY = [
  { id: 'common',    name: 'Common',    color: '#b7bcc4', glow: 0xb7bcc4, dmg: 1.0 },
  { id: 'uncommon',  name: 'Uncommon',  color: '#5fcf3a', glow: 0x5fcf3a, dmg: 1.05 },
  { id: 'rare',      name: 'Rare',      color: '#3aa0ff', glow: 0x3aa0ff, dmg: 1.10 },
  { id: 'epic',      name: 'Epic',      color: '#c25bff', glow: 0xc25bff, dmg: 1.15 },
  { id: 'legendary', name: 'Legendary', color: '#ffb428', glow: 0xffb428, dmg: 1.21 },
];
