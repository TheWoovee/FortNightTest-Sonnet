// Island layout: towns, lakes, peaks and roads. Positions of coastal POIs are derived from
// the (noisy) coastline so they always sit on the shore, whatever the seed.
import { DEG } from '../util/math.js';

export function buildLayout(t) {
  const polar = (deg, frac) => {
    const a = deg * DEG;
    const R = t.coastRadius(a);
    return [Math.cos(a) * R * frac, Math.sin(a) * R * frac];
  };

  const mk = (o) => ({ pad: 55, ...o });
  const [hx, hz] = polar(96, 0.905);
  const [mx, mz] = polar(-6, 0.70);
  const [wx, wz] = polar(-138, 0.64);
  const [px, pz] = polar(172, 0.885);
  const [lx, lz] = polar(-72, 0.58);

  const towns = [
    mk({ id: 'meadowbrook', name: 'Meadowbrook', x: 10, z: 45, pad: 66, houses: 16, style: 'suburb', big: true }),
    mk({ id: 'harbor', name: 'Sunny Harbor', x: hx, z: hz, pad: 50, houses: 9, style: 'harbor', coastal: true }),
    mk({ id: 'maple', name: 'Maple Hollow', x: mx, z: mz, pad: 52, houses: 10, style: 'autumn' }),
    mk({ id: 'windy', name: 'Windy Acres', x: wx, z: wz, pad: 58, houses: 7, style: 'farm' }),
    mk({ id: 'pebble', name: 'Pebble Cove', x: px, z: pz, pad: 46, houses: 8, style: 'fishing', coastal: true }),
    mk({ id: 'pine', name: 'Pinecrest Lodge', x: lx, z: lz, pad: 46, houses: 7, style: 'lodge' }),
  ];

  const [lhx, lhz] = polar(38, 0.955);
  const landmarks = [
    { id: 'lighthouse', name: 'Beacon Point', x: lhx, z: lhz, type: 'lighthouse' },
  ];

  const [pkx, pkz] = polar(-52, 0.42);
  const peaks = [
    { x: pkx, z: pkz, r: 120, h: 44, name: 'Cloudpeak' },
    { x: wx - 30, z: wz + 20, r: 80, h: 13, name: 'Windy Ridge' },
    { x: -40, z: -180, r: 90, h: 10 },
    { x: 150, z: 200, r: 85, h: 9 },
  ];

  const lakes = [
    { x: -150, z: -20, r: 46, level: 1.6, name: 'Mirror Lake' },
  ];

  // Roads: control points (Catmull-Rom). kind: 'asphalt' | 'dirt'
  const T = Object.fromEntries(towns.map((x) => [x.id, x]));
  const roads = [
    { kind: 'asphalt', w: 6.5, pts: [[T.harbor.x, T.harbor.z], [T.harbor.x + 20, T.harbor.z - 90], [T.meadowbrook.x - 15, T.meadowbrook.z + 70], [T.meadowbrook.x, T.meadowbrook.z]] },
    { kind: 'asphalt', w: 6.5, pts: [[T.meadowbrook.x, T.meadowbrook.z], [90, 20], [190, -20], [T.maple.x, T.maple.z]] },
    { kind: 'asphalt', w: 6.5, pts: [[T.meadowbrook.x, T.meadowbrook.z], [-90, 60], [-200, 90], [T.pebble.x, T.pebble.z]] },
    { kind: 'dirt', w: 5, pts: [[T.meadowbrook.x, T.meadowbrook.z], [-40, -60], [-120, -140], [T.windy.x, T.windy.z]] },
    { kind: 'dirt', w: 5, pts: [[T.maple.x, T.maple.z], [T.maple.x - 20, T.maple.z - 90], [T.pine.x + 60, T.pine.z + 40], [T.pine.x, T.pine.z]] },
    { kind: 'dirt', w: 5, pts: [[T.windy.x, T.windy.z], [-120, -250], [-20, -240], [T.pine.x, T.pine.z]] },
    { kind: 'dirt', w: 4.5, pts: [[T.harbor.x, T.harbor.z], [lhx - 60, lhz - 40], [lhx, lhz]] },
  ];

  return { towns, landmarks, peaks, lakes, roads };
}
