// Menus and overlays: loading, title, pause/settings/controls, inventory, full map, end screens.
import { SVG, AMMO_ICON, svgUrl, rarityRGB, cssRGB } from './icons.js';
import { WEAPONS, CONSUMABLES, AMMO, MATERIALS, MAT_ORDER, weaponStats, itemName } from '../data/items.js';
import { RARITY } from '../config.js';
import { fmtTime } from '../util/math.js';

const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; };

const TIPS = [
  'Build a ramp and wall to reach high ground — press Q to enter build mode.',
  'Shields absorb damage before health. Pop a shield potion when the coast is clear.',
  'Chests glow gold and hum when you are close. Press E to open them.',
  'Headshots deal bonus damage. Aim for the head!',
  'The storm shrinks in phases — keep an eye on the timer above the minimap.',
  'Hit trees, rocks and cars with your pickaxe to gather materials.',
  'Pump shotguns excel up close; snipers reward patience and a steady aim.',
  'Steer your skydive with the mouse. Look down to dive faster, level out to glide farther.',
  'Press M to open the map and place a waypoint.',
];

const CONTROLS = [
  ['Move', ['W', 'A', 'S', 'D']], ['Sprint', ['Shift']], ['Jump / Glider', ['Space']], ['Crouch', ['C']],
  ['Fire', ['LMB']], ['Aim', ['RMB']], ['Reload', ['R']], ['Pick up / Open', ['E']],
  ['Select item', ['1–6', 'Wheel']], ['Drop item', ['G']], ['Build mode', ['Q']], ['Wall / Floor / Ramp / Roof', ['Z', 'X', 'C', 'V']],
  ['Material (build)', ['R']], ['Inventory', ['Tab']], ['Map / Waypoint', ['M']], ['Pause', ['Esc']],
];

const DEFAULTS = { sens: 1.0, volume: 0.8, quality: 'auto', invertY: false, bots: 29, difficulty: 'normal', loadout: false };

export class Menus {
  constructor(game, root) {
    this.game = game;
    this.root = root;
    this.settings = this.loadSettings();
    this._build();
  }

  loadSettings() {
    try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem('stormfall.settings.v1') || '{}') }; } catch { return { ...DEFAULTS }; }
  }
  saveSettings() { try { localStorage.setItem('stormfall.settings.v1', JSON.stringify(this.settings)); } catch { /* ignore */ } }

  _build() {
    const r = this.root;
    this.loading = el(`<div id="loading" class="screen on"><div class="logo">STORMFALL</div><div class="bar2"><i></i></div><div class="lbl">Loading…</div><div class="tip"></div></div>`);
    this.title = el(`<div id="title" class="screen"><div class="wrap">
        <div class="logo">Stormfall<small>Royale</small></div>
        <div class="modes">Solo &nbsp;•&nbsp; <span id="tPlayers">30</span> players &nbsp;•&nbsp; Last one standing</div>
        <div class="row"><div class="btn primary" id="btnPlay"><span>Play</span></div></div>
        <div class="row" style="margin-top:calc(var(--u)*16)">
          <div class="btn small" id="btnDiff"><span>Bots: Normal</span></div>
          <div class="btn small" id="btnLoad"><span>Loadout: Fresh drop</span></div>
        </div>
        <div class="row" style="margin-top:calc(var(--u)*6)">
          <div class="btn small" id="btnSettings"><span>Settings</span></div>
          <div class="btn small" id="btnControls"><span>How to play</span></div>
        </div>
      </div>
      <div class="foot">Unofficial fan-made browser game • Best on desktop with keyboard &amp; mouse</div></div>`);
    this.overlay = el(`<div id="overlay" class="screen"><div class="panel" id="overlayPanel"></div></div>`);
    this.end = el(`<div id="endScreen" class="screen"></div>`);
    this.inv = el(`<div id="invScreen" class="screen"><div class="panel"><h2>Inventory</h2><div class="invgrid"></div><div class="invfoot"><div class="ammoRow"></div><div class="ammoRow mats"></div></div><div class="hint" style="margin-top:calc(var(--u)*14);font-size:calc(var(--u)*22);letter-spacing:.12em;color:#a8c4ff;text-transform:uppercase">Tab to close • Click DROP to discard an item</div></div></div>`);
    this.map = el(`<div id="mapScreen" class="screen"><div class="panel"><canvas></canvas><div class="hint">Click to place a waypoint • Right-click to clear • M to close</div></div></div>`);
    this.resume = el(`<div id="resume" class="screen"><div class="a">Paused</div><div>Click to resume</div></div>`);
    this.confetti = el(`<canvas id="confetti" class="hidden"></canvas>`);
    r.append(this.confetti, this.inv, this.map, this.end, this.overlay, this.resume, this.title, this.loading);
    this.q = (s) => this.root.querySelector(s);
    this.tip = this.loading.querySelector('.tip');
    this.bar = this.loading.querySelector('.bar2 i');
    this.lbl = this.loading.querySelector('.lbl');
    this.tip.textContent = TIPS[Math.floor(Math.random() * TIPS.length)];

    this.q('#btnPlay').onclick = () => this.game.onPlay();
    this.q('#btnDiff').onclick = () => { const o = ['easy', 'normal', 'hard']; this.settings.difficulty = o[(o.indexOf(this.settings.difficulty) + 1) % 3]; this.saveSettings(); this.refreshTitle(); this.game.audio?.uiClick(); };
    this.q('#btnLoad').onclick = () => { this.settings.loadout = !this.settings.loadout; this.saveSettings(); this.refreshTitle(); this.game.audio?.uiClick(); };
    this.q('#btnSettings').onclick = () => { this.game.audio?.uiClick(); this.showSettings('title'); };
    this.q('#btnControls').onclick = () => { this.game.audio?.uiClick(); this.showControls('title'); };
    this.resume.onclick = () => this.game.resume();
    this.map.querySelector('canvas').addEventListener('click', (e) => {
      const w = this.game.hud.map.fullToWorld(e.clientX, e.clientY);
      this.game.setMarker(w.x, w.z);
    });
    this.map.querySelector('canvas').addEventListener('contextmenu', (e) => { e.preventDefault(); this.game.setMarker(null); });
    this.refreshTitle();
  }

  refreshTitle() {
    const s = this.settings;
    this.q('#btnDiff span').textContent = `Bots: ${s.difficulty[0].toUpperCase()}${s.difficulty.slice(1)}`;
    this.q('#btnLoad span').textContent = `Loadout: ${s.loadout ? 'Practice' : 'Fresh drop'}`;
    this.q('#tPlayers').textContent = s.bots + 1;
  }

  // ---- loading / title ------------------------------------------------------------------------------------------------------------------------------
  setLoading(label, f) {
    this.lbl.textContent = label;
    this.bar.style.width = `${Math.round(f * 100)}%`;
  }
  showLoading(on) { this.loading.classList.toggle('on', on); }
  showTitle(on) { this.title.classList.toggle('on', on); if (on) this.refreshTitle(); }
  showResume(on) { this.resume.classList.toggle('on', on); }

  // ---- overlay panels ------------------------------------------------------------------------------------------------------------------------------------
  _panel(html) {
    const p = this.q('#overlayPanel');
    p.innerHTML = html;
    this.overlay.classList.add('on');
    return p;
  }
  hideOverlay() { this.overlay.classList.remove('on'); }
  get overlayOpen() { return this.overlay.classList.contains('on'); }

  showPause() {
    const p = this._panel(`<h2>Paused</h2>
      <div class="row" style="flex-direction:column;align-items:flex-start;gap:calc(var(--u)*14)">
        <div class="btn" id="pResume"><span>Resume</span></div>
        <div class="btn" id="pSettings"><span>Settings</span></div>
        <div class="btn" id="pControls"><span>Controls</span></div>
        <div class="btn danger" id="pLeave"><span>Leave match</span></div>
      </div>`);
    p.querySelector('#pResume').onclick = () => this.game.resume();
    p.querySelector('#pSettings').onclick = () => { this.game.audio?.uiClick(); this.showSettings('pause'); };
    p.querySelector('#pControls').onclick = () => { this.game.audio?.uiClick(); this.showControls('pause'); };
    p.querySelector('#pLeave').onclick = () => this.game.leaveMatch();
  }

  showControls(from) {
    const rows = CONTROLS.map(([a, keys]) => `<div><span>${a}</span><span>${keys.map((k) => `<kbd>${k}</kbd>`).join('')}</span></div>`).join('');
    const p = this._panel(`<h2>How to play</h2><div class="controls">${rows}</div>
      <h3>Goal</h3><div style="font-size:calc(var(--u)*24);line-height:1.25;color:#dbe6ff;max-width:calc(var(--u)*900)">Jump from the Sky Bus, land, loot weapons, shields and healing, build cover with wood/stone/metal, and stay inside the shrinking storm circle. Eliminate every bot to earn the Victory Royale.</div>
      <div class="row" style="margin-top:calc(var(--u)*24)"><div class="btn small" id="back"><span>Back</span></div></div>`);
    p.querySelector('#back').onclick = () => { this.game.audio?.uiClick(); from === 'pause' ? this.showPause() : this.hideOverlay(); };
  }

  showSettings(from) {
    const s = this.settings;
    const p = this._panel(`<h2>Settings</h2>
      <div class="field"><span>Mouse sensitivity</span><div class="ctl"><input type="range" id="sSens" min="0.2" max="3" step="0.05" value="${s.sens}"><b id="vSens">${s.sens.toFixed(2)}</b></div></div>
      <div class="field"><span>Volume</span><div class="ctl"><input type="range" id="sVol" min="0" max="1" step="0.05" value="${s.volume}"><b id="vVol">${Math.round(s.volume * 100)}</b></div></div>
      <div class="field"><span>Invert Y</span><div class="ctl"><div class="toggle ${s.invertY ? 'on' : ''}" id="sInv"></div></div></div>
      <div class="field"><span>Graphics</span><div class="ctl"><select id="sQual"><option value="auto">Auto</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select></div></div>
      <div class="field"><span>Bots (next match)</span><div class="ctl"><input type="range" id="sBots" min="5" max="49" step="1" value="${s.bots}"><b id="vBots">${s.bots}</b></div></div>
      <div class="field"><span>Bot difficulty</span><div class="ctl"><select id="sDiff"><option value="easy">Easy</option><option value="normal">Normal</option><option value="hard">Hard</option></select></div></div>
      <div class="field"><span>Practice loadout</span><div class="ctl"><div class="toggle ${s.loadout ? 'on' : ''}" id="sLoad"></div></div></div>
      <div class="row" style="margin-top:calc(var(--u)*24)"><div class="btn small" id="back"><span>Back</span></div></div>`);
    p.querySelector('#sQual').value = s.quality;
    p.querySelector('#sDiff').value = s.difficulty;
    const g = this.game;
    p.querySelector('#sSens').oninput = (e) => { s.sens = +e.target.value; p.querySelector('#vSens').textContent = s.sens.toFixed(2); g.applySettings(); };
    p.querySelector('#sVol').oninput = (e) => { s.volume = +e.target.value; p.querySelector('#vVol').textContent = Math.round(s.volume * 100); g.applySettings(); };
    p.querySelector('#sBots').oninput = (e) => { s.bots = +e.target.value; p.querySelector('#vBots').textContent = s.bots; };
    p.querySelector('#sInv').onclick = (e) => { s.invertY = !s.invertY; e.currentTarget.classList.toggle('on', s.invertY); g.applySettings(); };
    p.querySelector('#sLoad').onclick = (e) => { s.loadout = !s.loadout; e.currentTarget.classList.toggle('on', s.loadout); };
    p.querySelector('#sQual').onchange = (e) => { s.quality = e.target.value; g.applySettings(); };
    p.querySelector('#sDiff').onchange = (e) => { s.difficulty = e.target.value; };
    p.querySelector('#back').onclick = () => { this.saveSettings(); this.refreshTitle(); g.audio?.uiClick(); from === 'pause' ? this.showPause() : this.hideOverlay(); };
  }

  // ---- inventory --------------------------------------------------------------------------------------------------------------------------------------------
  showInventory(on) {
    this.inv.classList.toggle('on', on);
    if (on) this.refreshInventory();
  }
  get inventoryOpen() { return this.inv.classList.contains('on'); }

  refreshInventory() {
    const g = this.game, p = g.player, icons = g.icons;
    const grid = this.inv.querySelector('.invgrid');
    grid.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const it = p.inv.slots[i];
      let html;
      if (!it) html = `<div class="invitem empty"><span class="sn">${i + 1}</span><div class="in"><div class="st">Empty slot</div></div></div>`;
      else {
        let rgb = '160,170,190', nm = itemName(it), st = '', url = icons?.get(it);
        if (it.kind === 'weapon') {
          const S = weaponStats(it);
          rgb = rarityRGB(it.rarity); nm = `${RARITY[it.rarity].name} ${S.name}`;
          st = `DMG ${Math.round(S.dmg)}${S.pellets > 1 ? '×' + S.pellets : ''} • MAG ${it.mag}/${S.mag} • ${S.rate.toFixed(1)}/s`;
        } else if (it.kind === 'consumable') {
          const C = CONSUMABLES[it.id]; rgb = cssRGB(C.color); nm = `${C.name} ×${it.count}`;
          st = `${C.heal ? '+' + C.heal + ' HP ' : ''}${C.shield ? '+' + C.shield + ' SH ' : ''}• ${C.use}s`;
        } else { st = 'Harvesting tool'; }
        html = `<div class="invitem" style="--r:${rgb}"><span class="sn">${i + 1}</span><div class="in"><img src="${url || ''}" alt=""><div><div class="nm">${nm}</div><div class="st">${st}</div></div></div>${it.kind !== 'pickaxe' ? '<div class="drop" data-i="' + i + '">Drop</div>' : ''}</div>`;
      }
      grid.append(el(html));
    }
    grid.querySelectorAll('.drop').forEach((d) => { d.onclick = () => { this.game.dropSlot(p, +d.dataset.i); this.refreshInventory(); }; });
    const ar = this.inv.querySelector('.ammoRow');
    ar.innerHTML = Object.keys(AMMO).map((k) => `<div class="ammoPill"><img src="${svgUrl(AMMO_ICON[k])}" style="width:calc(var(--u)*26)" alt=""><b>${p.inv.ammo[k]}</b></div>`).join('');
    const mr = this.inv.querySelector('.mats');
    mr.innerHTML = MAT_ORDER.map((m) => `<div class="ammoPill" style="border-color:${MATERIALS[m].color}88">${m === 'wood' ? SVG.wood : m === 'stone' ? SVG.stone : SVG.metal.replace('<svg', '<svg style="width:26px;height:26px"')}<b>${p.inv.mats[m]}</b></div>`).join('');
    mr.querySelectorAll('svg').forEach((s) => { s.style.width = 'calc(var(--u)*26)'; s.style.height = 'calc(var(--u)*26)'; });
  }

  // ---- map ---------------------------------------------------------------------------------------------------------------------------------------------------------
  showMap(on) {
    this.map.classList.toggle('on', on);
    if (on) { this.game.hud.map.full = this.map.querySelector('canvas'); this.game.hud.map.drawFull(); }
  }
  get mapOpen() { return this.map.classList.contains('on'); }

  // ---- end screens -----------------------------------------------------------------------------------------------------------------------------------------------
  showEnd(kind, s) {
    const e = this.end;
    e.className = `screen on ${kind}`;
    const stat = (n, l) => `<div class="stat"><div class="n">${n}</div><div class="l">${l}</div></div>`;
    const acc = s.shots ? Math.round((s.hits / s.shots) * 100) : 0;
    const stats = `<div class="statrow">${stat(s.kills, 'Eliminations')}${stat(Math.round(s.damage), 'Damage dealt')}${stat(fmtTime(s.time), 'Survived')}${stat(acc + '%', 'Accuracy')}</div>`;
    if (kind === 'win') {
      e.innerHTML = `<div class="big">Victory<br>Royale</div><div class="place">#<b>1</b></div><div class="sub">You outlasted ${s.players - 1} players</div>${stats}
        <div class="row"><div class="btn primary" id="eAgain" style="font-size:calc(var(--u)*46)"><span>Play again</span></div><div class="btn" id="eMenu"><span>Main menu</span></div></div>`;
      this.startConfetti(true);
    } else {
      e.innerHTML = `<div class="big">Eliminated</div><div class="place">You placed #<b>${s.place}</b></div><div class="sub">${s.by ? `Eliminated by <span style="color:#ffe93b">${s.by}</span>${s.weapon ? ' • ' + s.weapon : ''}` : s.cause || 'Better luck next time'}</div>${stats}
        <div class="row"><div class="btn primary" id="eAgain" style="font-size:calc(var(--u)*46)"><span>Play again</span></div><div class="btn" id="eSpec"><span>Spectate</span></div><div class="btn" id="eMenu"><span>Main menu</span></div></div>`;
    }
    e.querySelector('#eAgain').onclick = () => this.game.onPlay();
    e.querySelector('#eMenu').onclick = () => this.game.toMenu();
    const sp = e.querySelector('#eSpec');
    if (sp) sp.onclick = () => this.game.spectate();
  }
  hideEnd() { this.end.className = 'screen'; this.startConfetti(false); }

  startConfetti(on) {
    const c = this.confetti;
    if (this._confettiRaf) cancelAnimationFrame(this._confettiRaf);
    if (!on) { c.classList.add('hidden'); return; }
    c.classList.remove('hidden');
    c.width = window.innerWidth; c.height = window.innerHeight;
    const g = c.getContext('2d');
    const cols = ['#ffe93b', '#ff5a5f', '#3aa0ff', '#5fe36a', '#c25bff', '#ffffff', '#ffa726'];
    const P = Array.from({ length: 220 }, () => ({ x: Math.random() * c.width, y: -Math.random() * c.height, vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 4, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.3, w: 6 + Math.random() * 8, h: 10 + Math.random() * 12, c: cols[(Math.random() * cols.length) | 0] }));
    const tick = () => {
      g.clearRect(0, 0, c.width, c.height);
      for (const p of P) {
        p.x += p.vx + Math.sin(p.y * 0.01) * 0.8; p.y += p.vy; p.r += p.vr;
        if (p.y > c.height + 20) { p.y = -20; p.x = Math.random() * c.width; }
        g.save(); g.translate(p.x, p.y); g.rotate(p.r); g.fillStyle = p.c; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)) + 2); g.restore();
      }
      this._confettiRaf = requestAnimationFrame(tick);
    };
    tick();
  }
}
