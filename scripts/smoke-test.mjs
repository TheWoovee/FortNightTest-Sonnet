// Headless smoke test: boots the built game in Chromium (software WebGL is fine), drives a scripted match through the
// public debug hooks and asserts basic invariants. Usage:  npm run build && npm test  [-- --shot out.png]
import { chromium } from 'playwright-core';
import { existsSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = existsSync(join(root, 'dist/stormfall.html')) ? join(root, 'dist/stormfall.html') : null;
if (!target) { console.error('dist/stormfall.html missing — run `npm run build` first.'); process.exit(2); }
const shotIdx = process.argv.indexOf('--shot');
const shotPath = shotIdx > 0 ? process.argv[shotIdx + 1] : null;

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const bases = [process.env.PLAYWRIGHT_BROWSERS_PATH, '/opt/pw-browsers', join(process.env.HOME || '', '.cache/ms-playwright')].filter(Boolean);
  for (const b of bases) {
    if (!existsSync(b)) continue;
    for (const d of readdirSync(b).filter((x) => x.startsWith('chromium-')).sort().reverse()) {
      for (const rel of ['chrome-linux/chrome', 'chrome-mac/Chromium.app/Contents/MacOS/Chromium', 'chrome-win/chrome.exe']) {
        const p = join(b, d, rel);
        if (existsSync(p)) return p;
      }
    }
  }
  return undefined;   // let Playwright resolve its own default
}

const results = [];
const check = (name, ok, extra = '') => { results.push({ name, ok }); console.log(`${ok ? '  ✔' : '  ✘'} ${name}${extra ? '  ' + extra : ''}`); };

const browser = await chromium.launch({
  executablePath: findChrome(),
  headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox', '--autoplay-policy=no-user-gesture-required'],
});
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
const errors = [];
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error') errors.push(`console.error: ${m.text()}`); });

console.log(`Stormfall smoke test → ${pathToFileURL(target).href}`);
await page.goto(`${pathToFileURL(target).href}?manual=1&quality=low`);
await page.waitForFunction(() => window.__game && window.__game.phase === 'menu', null, { timeout: 120000 });
check('boots to the title screen', true);

const sim = (s, dt) => page.evaluate(([a, b]) => window.__game.simulate(a, b), [s, dt]);
const snap = () => page.evaluate(() => window.__game.snapshot());

// --- match start: bus, jump, land -----------------------------------------------------------------------------------------
await page.evaluate(() => { const g = window.__game; g.input.enabled = true; g.params.set('loadout', '1'); g.startMatch(); });
let s = await snap();
check('match starts on the sky bus with 30 players', s.phase === 'match' && s.player.mode === 'bus' && s.alive === 30, JSON.stringify(s.bots));
await sim(3, 1 / 30);
await page.evaluate(() => window.__game.input.simulateKey('Space', true));
await sim(0.1, 1 / 30);
await page.evaluate(() => window.__game.input.simulateKey('Space', false));
await sim(2, 1 / 30);
s = await snap();
check('player jumps into freefall', s.player.mode === 'freefall');
await sim(20, 1 / 30);
s = await snap();
check('player glides and lands', s.player.mode === 'ground' && s.player.onGround, `pos ${s.player.pos}`);

// --- systems exercised on the ground ------------------------------------------------------------------------------------------
const r = await page.evaluate(() => {
  const g = window.__game, p = g.player, out = {};
  g.debugGround(-25, 46.5, -Math.PI / 2);
  p.inv.select(1);
  g.simulate(0.5, 1 / 30);
  // shooting: hold fire for a second
  const shotsBefore = p.stats.shots;
  g.input.mouseDown[0] = true; g.input.mousePressed[0] = true;
  g.simulate(1.0, 1 / 30);
  g.input.mouseDown[0] = false;
  out.shots = p.stats.shots - shotsBefore;
  out.mag = p.inv.current.mag;
  // building
  p.inv.mats.wood = 100;
  p.aimYaw = p.baseYaw = -Math.PI / 2; p.aimPitch = p.basePitch = -0.1;
  const w = g.build.tryPlace(p, 'wall', 'wood');
  const f = g.build.tryPlace(p, 'ramp', 'wood');
  out.pieces = g.build.list.length; out.wood = p.inv.mats.wood;
  // loot + chest
  const item = { kind: 'weapon', id: 'smg', rarity: 1, mag: 30 };
  const it = g.loot.spawn(item, p.pos.x + 0.5, p.pos.y, p.pos.z, {});
  const n0 = p.inv.weaponCount();
  g.loot.interact(p);
  out.pickedUp = p.inv.weaponCount() > n0;
  g.loot.spawnChest(p.pos.x + 1.2, p.pos.y, p.pos.z, 0);
  const n1 = g.loot.items.filter((i) => i.alive).length;
  g.loot.interact(p);
  out.chestItems = g.loot.items.filter((i) => i.alive).length - n1;
  // pickaxe harvest
  p.inv.select(0);
  const woodBefore = p.inv.mats.wood;
  const tree = g.world.scatter.trees.find((t) => t.alive);
  p.pos.set(tree.x - 1.4, g.terrain.heightAt(tree.x - 1.4, tree.z), tree.z); p.onGround = true; p.aimYaw = p.baseYaw = -Math.PI / 2;
  g.harvest(p, tree, { x: tree.x, y: tree.y + 1, z: tree.z, nx: -1, ny: 0, nz: 0 });
  out.harvested = p.inv.mats.wood > woodBefore;
  return out;
});
check('weapon fires and consumes ammo', r.shots >= 3, `${r.shots} shots`);
check('building places pieces and spends materials', r.pieces >= 2 && r.wood === 80, `${r.pieces} pieces, wood ${r.wood}`);
check('item pickup works', r.pickedUp);
check('chest opens and drops loot', r.chestItems >= 3, `${r.chestItems} items`);
check('pickaxe harvests trees', r.harvested);

// --- long soak: bots fight, storm shrinks ---------------------------------------------------------------------------------------------
await page.evaluate(() => { const g = window.__game; g.player.invulnerable = true; g.debugGround(-25, 46.5, 0); });
await sim(90, 1 / 15);
s = await snap();
check('bots loot, fight and get eliminated', s.alive < 30, `alive ${s.alive}`);
const sane = await page.evaluate(() => {
  const g = window.__game;
  return g.actors.every((a) => Number.isFinite(a.pos.x + a.pos.y + a.pos.z) && Math.abs(a.pos.x) < 700 && a.pos.y > -60);
});
check('no NaN / out-of-bounds actors', sane);
check('storm is active', s.storm && s.storm.state !== 'idle', JSON.stringify(s.storm));

if (shotPath) { await page.evaluate(() => window.__game.render()); await page.screenshot({ path: shotPath }); console.log(`  screenshot → ${shotPath}`); }

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));
await browser.close();
const failed = results.filter((x) => !x.ok);
console.log(failed.length ? `\n${failed.length} check(s) failed` : `\nAll ${results.length} checks passed`);
process.exit(failed.length ? 1 : 0);
