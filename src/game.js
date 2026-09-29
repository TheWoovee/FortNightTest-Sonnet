// Game: owns every system, the main loop, and the match flow (bus → drop → fight → storm → victory).
import * as THREE from 'three';
import { Gfx } from './gfx/gfx.js';
import { Input } from './systems/input.js';
import { AudioEngine } from './systems/audio.js';
import { World } from './world/world.js';
import { Effects } from './systems/effects.js';
import { Combat } from './systems/combat.js';
import { Loot } from './systems/loot.js';
import { BuildSystem } from './systems/building.js';
import { CameraRig } from './systems/camera.js';
import { Storm } from './world/storm.js';
import { BattleBus } from './world/bus.js';
import { Cars } from './world/cars.js';
import { Player } from './entities/player.js';
import { Bot } from './entities/bot.js';
import { WeaponController } from './entities/weaponController.js';
import { Inventory } from './systems/inventory.js';
import { Hud } from './ui/hud.js';
import { Menus } from './ui/menus.js';
import { IconRenderer } from './ui/icons.js';
import { BOT_NAMES, WEAPONS, PICKAXE } from './data/items.js';
import { MATCH } from './config.js';
import { Rng } from './util/rng.js';
import { clamp, clamp01, damp } from './util/math.js';

export class Game {
  constructor(canvas, uiRoot, params) {
    this.params = params;
    this.canvas = canvas;
    this.uiRoot = uiRoot;
    this.time = 0;
    this.matchTime = 0;
    this.phase = 'loading';
    this.paused = false;
    this.uiBlocking = false;
    this.actors = [];
    this.bots = [];
    this.aliveCount = 0;
    this.finished = false;
    this.playerDead = false;
    this.spectating = false;
    this.expectUnlock = false;
    this.viewActor = null;
    this.frame = 0;
    this.fpsEma = 60;
    this.perfT = 0;
    this.lastNow = performance.now();
    this.menus = new Menus(this, uiRoot);
    const S = this.menus.settings;
    const q = params.get('quality') || (S.quality === 'auto' ? 'high' : S.quality);
    this.gfx = new Gfx(canvas, { quality: q, maxPixelRatio: params.get('dpr') ? +params.get('dpr') : 1.75 });
    this.input = new Input(canvas);
    this.audio = new AudioEngine(this);
    this.autoQuality = S.quality === 'auto' && !params.get('quality');
    this.input.onLockChange = (locked) => this.onLockChange(locked);
  }

  // =============================================================================================================================
  // boot
  // =============================================================================================================================
  async boot() {
    const menus = this.menus;
    this.world = new World(this.gfx, 20240517);
    await this.world.build((label, f) => menus.setLoading(label, f * 0.86));
    this.terrain = this.world.terrain;
    this.physics = this.world.physics;
    menus.setLoading('Preparing systems…', 0.88);
    await new Promise((r) => setTimeout(r, 0));
    this.fx = new Effects(this);
    this.combat = new Combat(this);
    this.loot = new Loot(this);
    this.build = new BuildSystem(this);
    this.storm = new Storm(this);
    this.bus = new BattleBus(this);
    this.camera = new CameraRig(this);
    this.cars = new Cars(this.world);
    this.cars.spawn(this.world.cars);
    this.player = new Player(this);
    this.gfx.scene.add(this.player.model.root);
    this.hud = new Hud(this, this.uiRoot);
    this.hud.map.bake(this.world);
    menus.setLoading('Rendering icons…', 0.95);
    await new Promise((r) => setTimeout(r, 0));
    this.icons = new IconRenderer(this.gfx.renderer);
    this.icons.prerender();
    this.world.scatter.onRemoved = (o) => { if (o.kind === 'tree') this.audio?.treeFall(o.x, o.y, o.z); };
    this.applySettings();
    this.phase = 'menu';
    this.camera.mode = 'menu';
    this.actors = [];
    menus.setLoading('Ready', 1);
    menus.showLoading(false);
    menus.showTitle(true);
    if (this.params.get('autostart')) this.onPlay();
    this.lastNow = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  applySettings() {
    const S = this.menus.settings;
    this.input.sensitivity = S.sens;
    this.input.invertY = S.invertY;
    if (this.player) this.player.sens = S.sens;
    this.audio.setVolume(S.volume);
    this.autoQuality = S.quality === 'auto' && !this.params.get('quality');
    const scale = { high: 1, medium: 0.85, low: 0.7, auto: this.gfx.renderScale }[S.quality] ?? 1;
    if (S.quality !== 'auto') this.gfx.setRenderScale(scale);
    if (this.gfx.bloom) this.gfx.bloom.enabled = S.quality === 'high' || S.quality === 'auto';
  }

  // =============================================================================================================================
  // flow: play / pause / menus
  // =============================================================================================================================
  onPlay() {
    this.audio.init();
    this.audio.uiPlay();
    this.menus.showTitle(false);
    this.menus.hideEnd();
    this.menus.hideOverlay();
    this.menus.showResume(false);
    this.startMatch();
    this.input.requestLock();
  }

  onLockChange(locked) {
    if (this.phase !== 'match' && this.phase !== 'over') return;
    if (!locked) {
      if (this.expectUnlock) { this.expectUnlock = false; return; }
      if (!this.paused && !this.uiBlocking && !this.playerDeadScreen && !this.finished) this.pause();
    } else {
      this.menus.showResume(false);
    }
  }

  pause() {
    if (this.paused || this.phase !== 'match') return;
    this.paused = true;
    this.input.enabled = false;
    this.menus.showPause();
    this.audio.suspend();
  }

  resume() {
    if (!this.paused) return;
    this.menus.hideOverlay();
    this.paused = false;
    this.input.enabled = true;
    this.audio.resume();
    this.input.requestLock();
    this.applySettings();
  }

  toMenu() {
    this.clearMatch();
    this.menus.hideEnd();
    this.menus.hideOverlay();
    this.menus.showResume(false);
    this.hud.setVisible(false);
    this.phase = 'menu';
    this.paused = false;
    this.camera.mode = 'menu';
    this.input.enabled = false;
    this.input.exitLock();
    this.menus.showTitle(true);
    this.audio.resume();
  }

  leaveMatch() { this.paused = false; this.toMenu(); }

  toggleInventory() {
    if (this.menus.inventoryOpen) { this.closeUi(); return; }
    this.closeUi();
    this.uiBlocking = true;
    this.expectUnlock = true;
    this.input.exitLock();
    this.menus.showInventory(true);
  }
  toggleMap() {
    if (this.menus.mapOpen) { this.closeUi(); return; }
    this.closeUi();
    this.uiBlocking = true;
    this.expectUnlock = true;
    this.input.exitLock();
    this.menus.showMap(true);
  }
  closeUi() {
    const open = this.menus.inventoryOpen || this.menus.mapOpen;
    this.menus.showInventory(false);
    this.menus.showMap(false);
    if (open) {
      this.uiBlocking = false;
      this.input.requestLock();
    }
  }

  setMarker(x, z) {
    this.hud.map.marker = x === null ? null : { x, z };
    this.world.setMarker?.(x, z);
    this.hud.map.drawFull();
    this.audio.uiClick();
  }

  spectate() {
    this.spectating = true;
    this.menus.hideEnd();
    this.playerDeadScreen = false;
    this.uiBlocking = false;
    this.camera.mode = 'spectate';
    this.camera.target = this.pickSpectateTarget();
    this.input.enabled = true;
    this.input.requestLock();
    this.hud.setVisible(true);
    this.hud.banner('Spectating', this.camera.target?.name || '', '', 3000);
  }

  pickSpectateTarget() {
    const p = this.player;
    if (p.lastDamager?.alive) return p.lastDamager;
    let best = null, bd = 1e9;
    for (const b of this.bots) if (b.alive) { const d = b.pos.distanceToSquared(p.pos); if (d < bd) { bd = d; best = b; } }
    return best || p;
  }

  // =============================================================================================================================
  // match lifecycle
  // =============================================================================================================================
  clearMatch() {
    for (const a of this.actors) {
      if (a === this.player) continue;
      this.gfx.scene.remove(a.model.root);
      a.model.root.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
      a.model.material.dispose();
    }
    this.actors = [];
    this.bots = [];
    this.loot?.clear();
    this.build?.clear();
    this.storm?.reset(1);
    if (this.bus) { this.bus.active = false; this.bus.model.visible = false; }
    this.finished = false;
    this.playerDead = false;
    this.playerDeadScreen = false;
    this.spectating = false;
    this.viewActor = null;
    this.hud?.map && (this.hud.map.marker = null);
    this.hud?.setBuildMode(false);
    this.hud?.dropPrompt(false);
    this.hud?.altimeter(false);
    this.uiBlocking = false;
    this.menus.showInventory(false);
    this.menus.showMap(false);
  }

  startMatch() {
    const S = this.menus.settings;
    this.clearMatch();
    this.menus.showTitle(false);
    this.phase = 'match';
    this.paused = false;
    this.matchTime = 0;
    const seed = this.params.get('seed') ? +this.params.get('seed') : (Math.random() * 1e9) | 0;
    this.matchSeed = seed;
    this.world.scatter.reset();
    this.cars.reset();
    this.loot.populate(this.world, seed);
    this.bus.begin(seed ^ 0x9e3779b9);
    this.storm.reset(seed ^ 0x51ed270b);
    this.storm.start(38);

    // player
    const p = this.player;
    p.inv = new Inventory();
    p.inv.mats.wood = 120; p.inv.mats.stone = 60; p.inv.mats.metal = 40;
    p.wc = new WeaponController(p);
    p.alive = true; p.health = 100; p.shield = 0; p.mode = 'bus';
    p.stats = { kills: 0, damageDealt: 0, shots: 0, hits: 0, placement: 0, survived: 0, heals: 0 };
    p.vel.set(0, 0, 0); p.deadT = 0; p.landImpact = 0; p.hitFlinch = 0; p.building = false; p.crouching = false; p.swimming = false;
    p.height = 1.8; p.speedH = 0; p.lastDamager = null; p.onGround = false;
    p.model.setFade(1); p.model.root.visible = false;
    p.model.root.rotation.set(0, 0, 0);
    p.pos.copy(this.bus.position);
    p.baseYaw = this.bus.yaw; p.basePitch = -0.2;
    p.sens = S.sens;
    this.actors = [p];
    this.viewActor = p;

    // bots
    const names = new Rng(seed).shuffle([...BOT_NAMES]);
    const N = clamp(S.bots, 1, 60);
    for (let i = 0; i < N; i++) {
      let name = names[i % names.length];
      if (i >= names.length) name += ' ' + (Math.floor(i / names.length) + 1);
      const b = new Bot(this, { name, seed: seed + i * 7919, difficulty: S.difficulty });
      this.gfx.scene.add(b.model.root);
      b.planDrop();
      b.mode = 'bus';
      b.pos.copy(this.bus.position);
      this.bots.push(b);
      this.actors.push(b);
    }
    this.aliveCount = this.actors.length;

    if (S.loadout || this.params.get('loadout')) this.giveLoadout(p);

    this.camera.mode = 'bus';
    this.camera.initialised = false;
    this.hud.setVisible(true);
    this.hud.setBuildMode(false);
    this.hud.dropPrompt(true, 'Press SPACE to jump', 'Steer with the mouse • Look down to dive');
    this.hud.banner('Sky Bus departing', 'Choose your landing spot', '', 4500);
    this.hud.map.marker = null;
    this.input.enabled = true;
    this.uiBlocking = false;
    this.menus.hideEnd();
    this.hud.toast('GOOD LUCK, HAVE FUN', '255,233,59');
  }

  giveLoadout(p) {
    const inv = p.inv;
    inv.add({ kind: 'weapon', id: 'ar', rarity: 3, mag: 30 });
    inv.add({ kind: 'weapon', id: 'pump', rarity: 2, mag: 5 });
    inv.add({ kind: 'weapon', id: 'sniper', rarity: 2, mag: 1 });
    inv.add({ kind: 'consumable', id: 'bandage', count: 8 });
    inv.add({ kind: 'consumable', id: 'shield', count: 2 });
    inv.ammo.medium = 180; inv.ammo.shells = 30; inv.ammo.heavy = 20; inv.ammo.light = 120;
    inv.mats.wood = 400; inv.mats.stone = 250; inv.mats.metal = 150;
    inv.select(1);
    inv.touch();
  }

  // =============================================================================================================================
  // eliminations & victory
  // =============================================================================================================================
  onDamaged(victim, total, shieldDmg, healthDmg, info) {
    if (victim.isPlayer) {
      const src = info.attacker && info.attacker !== victim ? info.attacker.pos : null;
      this.hud.damageFlash(src);
      this.audio.damageTaken(total, shieldDmg > 0 && victim.shield <= 0);
      this.camera.addShake(clamp(total / 40, 0.15, 0.7));
    }
  }

  eliminate(victim, info = {}) {
    if (!victim.alive) return;
    victim.alive = false;
    victim.mode = 'dead';
    victim.deadT = 0;
    victim.deadDir = Math.random() < 0.5 ? -1 : 1;
    victim.wc.cancelUse();
    victim.building = false;
    victim.stats.placement = this.aliveCount;
    victim.stats.survived = this.matchTime;
    this.aliveCount--;
    const killer = info.attacker && info.attacker !== victim ? info.attacker : null;
    if (killer) killer.stats.kills++;
    // loot drop
    const items = victim.inv.dropAll();
    for (const it of items) this.loot.drop(it, victim.pos.x, victim.pos.y, victim.pos.z, null);
    // effects
    this.fx.poof(victim.pos.x, victim.pos.y + 0.9, victim.pos.z, victim.model.outfit.shirt, 1);
    // feed
    const weapon = info.weapon || (info.cause === 'storm' ? 'Storm' : info.cause === 'fall' ? 'Fall damage' : '');
    if (killer) this.hud.killFeed(killer.name, victim.name, weapon, killer.isPlayer, victim.isPlayer);
    else this.hud.killFeed(null, victim.name, info.cause === 'storm' ? 'Storm' : info.cause === 'fall' ? 'Fall damage' : 'eliminated', false, victim.isPlayer);
    if (killer?.isPlayer) {
      this.hud.elimBanner(victim.name, weapon, killer.stats.kills);
      this.audio.hitConfirm(false, true, false);
    }
    if (victim.isPlayer) {
      this.playerDead = true;
      this.playerDeadAt = this.time;
      this.deathInfo = { by: killer?.name || null, weapon, cause: info.cause === 'storm' ? 'Consumed by the storm' : info.cause === 'fall' ? 'Fell to their death' : '' };
      this.audio.eliminated();
      this.camera.target = killer?.alive ? killer : null;
      this.camera.spectYaw = this.camera.yaw; this.camera.spectPitch = -0.3;
      this.camera.mode = 'spectate';
    }
    this.checkVictory();
  }

  checkVictory() {
    if (this.finished || this.phase !== 'match') return;
    if (this.aliveCount > 1) return;
    this.finished = true;
    const winner = this.actors.find((a) => a.alive) || null;
    this.winner = winner;
    this.finishAt = this.time;
    if (winner?.isPlayer) {
      winner.stats.placement = 1;
      winner.stats.survived = this.matchTime;
      winner.intent.moveX = winner.intent.moveZ = 0;
      winner.wc.cancelUse();
      winner.building = false;
      winner.emoteT = 60;
      winner.model.setHeld(null);
      winner.wc.heldKey = 'none';
    }
  }

  // =============================================================================================================================
  // helpers used by systems
  // =============================================================================================================================
  noise(pos, radius, source) {
    const r2 = radius * radius;
    for (const b of this.bots) {
      if (!b.alive || b === source || b.mode !== 'ground') continue;
      const dx = b.pos.x - pos.x, dz = b.pos.z - pos.z;
      if (dx * dx + dz * dz < r2) b.hear(pos, source);
    }
  }

  harvest(actor, owner, hit) {
    const W = this.world;
    let mat = owner.kind === 'rock' ? 'stone' : owner.kind === 'prop' ? (owner.harvest || 'metal') : 'wood';
    const crit = Math.random() < 0.18;
    const amt = Math.round((10 + Math.random() * 4) * (crit ? 1.8 : 1));
    if (owner.kind === 'prop') { this.cars.hit(owner, 1); }
    else {
      owner.hp -= (owner.maxHp || 100) / 8;
      owner.shake = 0.25;
      if (owner.hp <= 0) W.scatter.remove(owner);
    }
    const got = actor.inv.addMats(mat, amt);
    this.fx.impact(hit.x, hit.y, hit.z, hit.nx, hit.ny, hit.nz, mat === 'wood' ? 'wood' : mat === 'stone' ? 'stone' : 'metal', 'harvest');
    if (actor.isPlayer) this.hud.matTick?.(mat, got, crit);
  }

  dropSlot(actor, i) {
    if (i <= 0) return;
    const it = actor.inv.removeSlot(i);
    if (!it) return;
    this.loot.drop(it, actor.pos.x + Math.sin(-actor.aimYaw) * 0.6, actor.pos.y, actor.pos.z - Math.cos(actor.aimYaw) * 0.6, actor.vel);
    if (actor.isPlayer) this.audio.uiTick();
  }
  dropSelected(actor) { this.dropSlot(actor, actor.inv.selected); }

  onGlide(actor) {}
  onLanded(actor) {
    if (actor.isPlayer) {
      this.hud.altimeter(false);
      actor.basePitch = Math.max(actor.basePitch, -0.2);
      actor.baseYaw = actor.aimYaw;
      this.hud.banner('Landed', actor.inv.hasWeapon() ? 'Good luck!' : 'Find a weapon!', '', 2400);
    }
  }

  // ---- debug helpers (used by tests / console) ------------------------------------------------------------------
  debugGround(x, z, yaw = 0) {
    const p = this.player;
    this.bus.active = false; this.bus.model.visible = false;
    const y = this.physics.groundAt(x, z, 1e3).y;
    p.mode = 'ground'; p.onGround = true; p.spawnAt(x, y, z, yaw);
    p.baseYaw = yaw; p.basePitch = -0.1;
    p.model.root.visible = true;
    this.camera.mode = 'follow';
    this.hud.dropPrompt(false); this.hud.altimeter(false);
    for (const b of this.bots) { b.mode = 'bus'; b.model.root.visible = false; b.pos.set(0, 400, 0); b.jumpAt = 2; }
    return p;
  }

  debugBot(dx, dz, opts = {}) {
    const p = this.player;
    let b = this.bots.find((x) => x.alive && x.mode === 'bus') || this.bots[0];
    const x = p.pos.x + dx, z = p.pos.z + dz;
    const y = this.physics.groundAt(x, z, 1e3).y;
    b.mode = 'ground'; b.onGround = true; b.spawnAt(x, y, z, opts.yaw ?? Math.PI);
    b.model.root.visible = true; b.state = opts.state || 'idle'; b.jumpAt = 2;
    b.brain = opts.ai ? Object.getPrototypeOf(b).brain : function () { const I = this.intent; for (const k of Object.keys(I)) if (typeof I[k] === 'boolean') I[k] = false; I.moveX = I.moveZ = 0; };
    return b;
  }

  // =============================================================================================================================
  // main loop
  // =============================================================================================================================
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    const rawDt = (now - this.lastNow) / 1000;
    this.lastNow = now;
    const dt = Math.min(0.05, Math.max(0.0005, rawDt));
    this.fpsEma = damp(this.fpsEma, 1 / Math.max(rawDt, 0.0005), 2, Math.min(rawDt, 0.25));
    if (!this.params.get('manual')) {
      this.step(dt);
      this.render();
    }
    this.frame++;
    window.__frames = this.frame;
    this.adaptQuality(rawDt);
  }

  /** Test/debug helper: advance the simulation without rendering. */
  simulate(seconds, dt = 1 / 30) {
    const n = Math.max(1, Math.round(seconds / dt));
    for (let i = 0; i < n; i++) this.step(dt);
  }

  /** Compact state summary for tests. */
  snapshot() {
    const p = this.player;
    return {
      phase: this.phase, time: +this.time.toFixed(2), match: +this.matchTime.toFixed(2), alive: this.aliveCount,
      player: p && { mode: p.mode, alive: p.alive, pos: p.pos.toArray().map((v) => +v.toFixed(1)), hp: Math.round(p.health), sh: Math.round(p.shield), kills: p.stats.kills, sel: p.inv.selected, onGround: p.onGround, speed: +p.speedH.toFixed(2) },
      storm: this.storm && { state: this.storm.state, r: Math.round(this.storm.current.r), t: Math.round(this.storm.timer) },
      bus: this.bus && { active: this.bus.active, p: +this.bus.progress.toFixed(2) },
      bots: this.bots.map((b) => b.mode + ':' + (b.alive ? b.state : 'dead')).reduce((m, k) => ((m[k] = (m[k] || 0) + 1), m), {}),
    };
  }

  /** One simulation step (also used by the test harness). */
  step(dt) {
    if (this.paused) {
      this.world.update(dt * 0.3, this.gfx.camera.position);
      this.input.endFrame();
      return;
    }
    this.time += dt;
    if (this.phase === 'menu') this.updateMenu(dt);
    else if (this.phase === 'match') this.updateMatch(dt);
    this.input.endFrame();
  }

  updateMenu(dt) {
    this.camera.update(dt);
    this.world.update(dt, this.gfx.camera.position);
    this.fx.update(dt);
    this.storm.applyVisuals(dt);
    this.updateIndoor(dt);
    this.gfx.post.uTime.value = this.time;
    this.audio.updateAmbient(dt);
  }

  updateMatch(dt) {
    const p = this.player;
    const inp = this.input;
    this.matchTime += dt;

    // global keys
    if (inp.enabled && !this.playerDeadScreen) {
      if (inp.pressed('Tab') && p.alive) this.toggleInventory();
      if (inp.pressed('KeyM')) this.toggleMap();
      if (inp.freeLook && inp.pressed('Escape')) { if (this.uiBlocking) this.closeUi(); else this.pause(); }
    }
    if (this.uiBlocking && inp.pressed('Escape')) this.closeUi();
    if (this.menus.inventoryOpen && this.frame % 20 === 0) this.menus.refreshInventory();
    if (this.menus.mapOpen && this.frame % 6 === 0) this.hud.map.drawFull();

    // bus + storm
    this.bus.update(dt);
    this.storm.update(dt);
    this.storm.applyDamage(dt, this.actors);

    // bus phase for the player
    if (p.mode === 'bus' && p.alive) {
      p.pos.copy(this.bus.position);
      p.aimYaw = p.baseYaw;
      const left = Math.max(0, (1 - this.bus.progress) * this.bus.len / this.bus.speed);
      this.hud.dropPrompt(true, 'Press SPACE to jump', `Bus leaves the island in ${Math.ceil(left)}s • look down to dive`);
      p.handleInput(dt);       // look + hotbar-free input
      if ((inp.pressed('Space') && inp.enabled && !this.uiBlocking) || this.bus.progress > 0.965 || this.params.get('jumpnow')) this.playerJump();
      this.camera.mode = 'bus';
    }

    // actors
    for (const a of this.actors) a.update(dt);
    this.separateActors();
    this.actorSafety();

    // camera + aim ray
    if (p.mode === 'freefall' || p.mode === 'glide') { this.camera.mode = 'air'; this.hud.altimeter(true, p.pos.y - Math.max(0, this.terrain.heightAt(p.pos.x, p.pos.z))); }
    else if (p.mode === 'ground' && p.alive) { if (this.camera.mode !== 'follow') { this.camera.mode = 'follow'; } }
    else if (p.mode === 'dead' && this.camera.mode !== 'spectate') this.camera.mode = 'spectate';
    this.camera.update(dt);
    if (p.alive && p.mode !== 'bus') this.camera.computeAimRay(p);
    this.updateMeleeRay(p);

    this.build.update(dt);
    this.loot.update(dt, this.gfx.camera.position);
    this.world.update(dt, this.gfx.camera.position);
    this.fx.update(dt);
    this.storm.applyVisuals(dt);
    this.updateIndoor(dt);
    this.gfx.post.uTime.value = this.time;
    this.updateLod();
    this.hud.update(dt);
    this.audio.updateAmbient(dt);

    // end-of-match sequencing
    if (this.playerDead && !this.playerDeadScreen && !this.spectating && this.time - this.playerDeadAt > 2.0) {
      this.playerDeadScreen = true;
      this.uiBlocking = true;
      this.hud.setVisible(false);
      this.expectUnlock = true;
      this.input.exitLock();
      const st = p.stats;
      this.menus.showEnd('lose', { place: st.placement || this.aliveCount + 1, kills: st.kills, damage: st.damageDealt, time: st.survived || this.matchTime, shots: st.shots, hits: st.hits, players: this.actors.length, ...this.deathInfo });
    }
    if (this.finished && !this.endShown && this.time - this.finishAt > 1.4) {
      this.endShown = true;
      if (this.winner?.isPlayer) {
        this.playerDeadScreen = true;
        this.uiBlocking = true;
        this.expectUnlock = true;
        this.input.exitLock();
        this.audio.victory();
        const st = p.stats;
        this.hud.setVisible(false);
        this.menus.showEnd('win', { kills: st.kills, damage: st.damageDealt, time: this.matchTime, shots: st.shots, hits: st.hits, players: this.actors.length });
      } else if (this.winner) {
        this.hud.banner(`${this.winner.name} wins`, 'Match over', '', 6000);
      }
    }
    if (!this.finished) this.endShown = false;
  }

  updateMeleeRay(p) {
    if (!p.alive || p.mode !== 'ground') return;
    const ray = p.aimRay;
    // direction from the character's eye toward what the crosshair sees (for pickaxe reach)
    const eye = p.eyePos(this._eye || (this._eye = new THREE.Vector3()));
    const hit = this.physics.raycast(ray.origin.x, ray.origin.y, ray.origin.z, ray.dir.x, ray.dir.y, ray.dir.z, 40, { bullets: false });
    const pt = this._pt || (this._pt = new THREE.Vector3());
    if (hit.hit) pt.set(hit.x, hit.y, hit.z); else pt.copy(ray.origin).addScaledVector(ray.dir, 40);
    ray.point.copy(pt);
    ray.dirFromEye = (ray.dirFromEye || new THREE.Vector3()).subVectors(pt, eye).normalize();
  }

  playerJump() {
    const p = this.player, b = this.bus;
    if (p.mode !== 'bus') return;
    p.jumpFromBus(b.position.x, b.position.y - 3, b.position.z, p.baseYaw, b.dir.x * b.speed, b.dir.z * b.speed);
    p.basePitch = -0.75;
    p.model.root.visible = true;
    this.hud.dropPrompt(false);
    this.hud.altimeter(true, b.position.y);
    this.camera.mode = 'air';
    this.audio.noiseJump?.();
  }

  separateActors() {
    const A = this.actors;
    for (let i = 0; i < A.length; i++) {
      const a = A[i];
      if (!a.alive || a.mode !== 'ground') continue;
      for (let j = i + 1; j < A.length; j++) {
        const b = A[j];
        if (!b.alive || b.mode !== 'ground') continue;
        const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
        if (Math.abs(dy(a, b)) > 1.5) continue;
        const d2 = dx * dx + dz * dz, r = a.radius + b.radius;
        if (d2 < r * r && d2 > 1e-6) {
          const d = Math.sqrt(d2), push = (r - d) * 0.5;
          a.pos.x -= (dx / d) * push; a.pos.z -= (dz / d) * push;
          b.pos.x += (dx / d) * push; b.pos.z += (dz / d) * push;
        }
      }
    }
    function dy(a, b) { return a.pos.y - b.pos.y; }
  }

  actorSafety() {
    for (const a of this.actors) {
      if (!a.alive) continue;
      if (a.pos.y < -40) {
        const gy = this.terrain.heightAt(a.pos.x, a.pos.z);
        a.pos.y = Math.max(gy, 0) + 1; a.vel.set(0, 0, 0);
      }
      if (!Number.isFinite(a.pos.x + a.pos.y + a.pos.z)) { a.pos.set(0, 20, 0); a.vel.set(0, 0, 0); }
    }
  }

  /** True while (x, y, z) is under a building's roof. */
  isIndoors(x, y, z) {
    for (const b of this.world.buildings) {
      const f = b.foot;
      if (x > f.minX && x < f.maxX && z > f.minZ && z < f.maxZ && y > b.floorY - 0.4 && y < b.top - 0.1) return true;
    }
    return false;
  }

  /** Smoothly lift the ambient light while the viewed player stands inside a building. */
  updateIndoor(dt) {
    const p = this.player;
    const at = this.phase === 'match' && p && p.alive && p.mode === 'ground' ? p.pos : this.gfx.camera.position;
    const target = this.isIndoors(at.x, at.y + 0.9, at.z) ? 1 : 0;
    const I = this.gfx._indoor;
    this.gfx.setIndoor(I.k + (target - I.k) * (1 - Math.exp(-6 * dt)));
  }

  updateLod() {
    const cam = this.gfx.camera.position;
    for (const a of this.actors) {
      if (a.isPlayer || !a.alive) continue;
      if (a.mode === 'bus') { a.model.root.visible = false; continue; }
      const d = a.pos.distanceTo(cam);
      a.model.root.visible = true;
      a.model.setDetail(d > 120 ? 1 : 0);
      const shadow = d < 55;
      if (a._shadow !== shadow) { a._shadow = shadow; a.model.setShadows(shadow); }
    }
  }

  render() {
    const cam = this.gfx.camera;
    const focus = this._sunFocus || (this._sunFocus = new THREE.Vector3());
    if (this.phase === 'match' && this.camera.mode !== 'menu') focus.set(this.camera.pos.x, 0, this.camera.pos.z);
    else focus.set(cam.position.x, 0, cam.position.z);
    this.gfx.updateSun(focus);
    // underwater tint when the camera dips below the surface
    this.gfx.post.uUnderwater.value = cam.position.y < 0.0 && this.terrain.heightAt(cam.position.x, cam.position.z) < cam.position.y ? 0.55 : 0;
    // flash for healing/damage handled in hud css
    this.gfx.render();
  }

  adaptQuality(rawDt) {
    if (!this.autoQuality) return;
    this.perfT += rawDt;
    if (this.perfT < 2.0) return;
    this.perfT = 0;
    const fps = this.fpsEma;
    const gfx = this.gfx;
    if (fps < 38 && gfx.renderScale > 0.56) gfx.setRenderScale(gfx.renderScale - 0.1);
    else if (fps > 62 && gfx.renderScale < 1) gfx.setRenderScale(Math.min(1, gfx.renderScale + 0.05));
    if (fps < 26 && gfx.bloom?.enabled) gfx.bloom.enabled = false;
  }
}
