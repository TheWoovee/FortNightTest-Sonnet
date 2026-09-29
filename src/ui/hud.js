// In-match HUD: vitals, hotbar, ammo, materials, minimap/compass, kill feed, prompts, floaters, damage feedback.
import * as THREE from 'three';
import { SVG, AMMO_ICON, svgUrl, rarityRGB, cssRGB } from './icons.js';
import { MapView } from './minimap.js';
import { WEAPONS, CONSUMABLES, MATERIALS, MAT_ORDER, AMMO, weaponStats, itemName, PICKAXE } from '../data/items.js';
import { RARITY, BUILD } from '../config.js';
import { fmtTime, clamp, clamp01, damp, TAU } from '../util/math.js';

const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; };

const PIECES = [
  { id: 'wall', name: 'Wall', key: 'Z', icon: SVG.wall },
  { id: 'floor', name: 'Floor', key: 'X', icon: SVG.floor },
  { id: 'ramp', name: 'Ramp', key: 'C', icon: SVG.ramp },
  { id: 'roof', name: 'Roof', key: 'V', icon: SVG.roof },
];
const MAT_ICON = { wood: SVG.wood, stone: SVG.stone, metal: SVG.metal };

export class Hud {
  constructor(game, root) {
    this.game = game;
    this.root = root;
    this.map = new MapView(game);
    this.last = {};
    this.floaters = [];
    this.floaterPool = [];
    this.dmgArrows = [];
    this.toastTimer = 0;
    this._buildDom();
    this.inv = -1;
    this.hitT = 0;
    this._v = new THREE.Vector3();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const u = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    document.documentElement.style.setProperty('--u', `${Math.max(0.42, u)}px`);
  }

  _buildDom() {
    const hud = this.hud = el(`<div id="hud">
      <div id="feed"></div>
      <div id="compass"><canvas></canvas></div>
      <div id="banner"><div class="a"></div><div class="b"></div></div>
      <div id="topRight">
        <div id="stats">
          <div class="chip" id="chipAlive">${SVG.person}<span class="n">30</span></div>
          <div class="chip" id="chipElims">${SVG.skull}<span class="n">0</span></div>
        </div>
        <div id="mapBox"><canvas></canvas></div>
        <div id="stormChip">${SVG.storm}<span class="t">0:00</span><span class="l">Storm</span></div>
      </div>
      <div id="vitals">
        <div class="bar shield"><div class="ghost"></div><div class="fill"></div><div class="seg"></div><span class="val">0</span></div>
        <div class="bar health"><div class="ghost"></div><div class="fill"></div><span class="val">100</span></div>
      </div>
      <div id="bottomRight">
        <div id="ammo" class="none"><img class="aicon" alt=""><span class="mag">0</span><span class="sep">/</span><span class="res">0</span><div class="rl"><i></i></div></div>
        <div id="buildHint">Q — Exit build &nbsp;•&nbsp; Click — Place &nbsp;•&nbsp; R — Material</div>
        <div id="mats"></div>
        <div id="hotbar"></div>
      </div>
      <div id="center">
        <div id="cross"><i class="h" style="left:0"></i><i class="h" style="left:0"></i><i class="v" style="top:0"></i><i class="v" style="top:0"></i><i class="dot"></i></div>
        <div id="hitmark"><i></i><i></i><i></i><i></i></div>
        <div id="reloadRing"><svg viewBox="0 0 70 70"><circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="6"/><circle class="arc" cx="35" cy="35" r="28" fill="none" stroke="#ffe93b" stroke-width="6" stroke-dasharray="176" stroke-dashoffset="176" stroke-linecap="butt"/></svg></div>
        <div id="useBar"><div class="lbl">Using</div><div class="trk"><i></i></div></div>
      </div>
      <div id="prompt"><div class="top"></div><div class="row"><img alt=""><div><div class="sub"></div><div class="nm"></div><div class="stats"></div></div></div><div class="key"><kbd>E</kbd><span></span></div></div>
      <div id="toasts"></div>
      <div id="elimBanner"><div class="a">Eliminated</div><div class="b"></div><div class="c"></div></div>
      <div id="dropPrompt"><div class="a"></div><div class="b"></div></div>
      <div id="altimeter"><div class="n">0</div><div class="l">METRES</div></div>
    </div>`);
    this.root.append(el('<div id="floaters"></div>'), el('<div id="scope"></div>'), el('<div id="stormVig"></div>'), el('<div id="dmgVig"></div>'), el('<div id="dmgArrows"></div>'), hud);
    const q = (s) => hud.querySelector(s);
    this.$ = {
      feed: q('#feed'), banner: q('#banner'), chipAlive: q('#chipAlive .n'), chipElims: q('#chipElims .n'), chipElimsBox: q('#chipElims'), chipAliveBox: q('#chipAlive'),
      shieldBar: q('.bar.shield'), healthBar: q('.bar.health'), shieldFill: q('.bar.shield .fill'), healthFill: q('.bar.health .fill'), shieldGhost: q('.bar.shield .ghost'), healthGhost: q('.bar.health .ghost'),
      shieldVal: q('.bar.shield .val'), healthVal: q('.bar.health .val'),
      ammo: q('#ammo'), ammoMag: q('#ammo .mag'), ammoRes: q('#ammo .res'), ammoIcon: q('#ammo .aicon'), ammoRl: q('#ammo .rl i'),
      mats: q('#mats'), hotbar: q('#hotbar'), cross: q('#cross'), hitmark: q('#hitmark'), reloadRing: q('#reloadRing'), reloadArc: q('#reloadRing .arc'),
      useBar: q('#useBar'), useLbl: q('#useBar .lbl'), useFill: q('#useBar .trk i'),
      prompt: q('#prompt'), promptImg: q('#prompt img'), promptSub: q('#prompt .sub'), promptNm: q('#prompt .nm'), promptStats: q('#prompt .stats'), promptKey: q('#prompt .key span'), promptTop: q('#prompt .top'),
      toasts: q('#toasts'), elim: q('#elimBanner'), elimB: q('#elimBanner .b'), elimC: q('#elimBanner .c'),
      dropPrompt: q('#dropPrompt'), dropA: q('#dropPrompt .a'), dropB: q('#dropPrompt .b'), altimeter: q('#altimeter'), altN: q('#altimeter .n'),
      stormChip: q('#stormChip'), stormT: q('#stormChip .t'), stormL: q('#stormChip .l'),
      scope: this.root.querySelector('#scope'), dmgVig: this.root.querySelector('#dmgVig'), stormVig: this.root.querySelector('#stormVig'), dmgArrows: this.root.querySelector('#dmgArrows'),
      floaters: this.root.querySelector('#floaters'),
      crossLines: [...q('#cross').children],
    };
    // build materials
    for (const m of MAT_ORDER) {
      const d = el(`<div class="mat" data-m="${m}">${MAT_ICON[m]}<span class="n">0</span></div>`);
      this.$.mats.append(d);
    }
    this.matEls = [...this.$.mats.children];
    this.map.attach(q('#mapBox canvas'), q('#compass canvas'), null);
    // build slots
    this.slotEls = [];
    for (let i = 0; i < 6; i++) {
      const s = el(`<div class="slot empty"><div class="in"><span class="num">${i + 1}</span><img alt="" style="display:none"><span class="cnt"></span><div class="rbar" style="display:none"></div></div></div>`);
      this.$.hotbar.append(s);
      this.slotEls.push({ root: s, img: s.querySelector('img'), cnt: s.querySelector('.cnt'), rbar: s.querySelector('.rbar') });
    }
    this.buildEls = [];
    for (let i = 0; i < 4; i++) {
      const P = PIECES[i];
      const s = el(`<div class="slot build" style="display:none"><div class="in">${P.icon}<span class="num">${P.key}</span><span class="cost">${BUILD.cost}</span></div></div>`);
      this.$.hotbar.append(s);
      this.buildEls.push(s);
    }
    // damage arrows pool
    for (let i = 0; i < 4; i++) { const a = el('<div class="dmgArrow"></div>'); this.$.dmgArrows.append(a); this.dmgArrows.push({ el: a, t: 0, yaw: 0 }); }
  }

  setVisible(on) { this.hud.classList.toggle('on', on); }
  setBuildMode(on) {
    this.hud.classList.toggle('building', on);
    this.slotEls.forEach((s) => (s.root.style.display = on ? 'none' : ''));
    this.buildEls.forEach((s) => (s.style.display = on ? '' : 'none'));
    this.inv = -1;
  }

  // ---- messages ---------------------------------------------------------------------------------------------------------------------------
  toast(text, rgb = '255,255,255') {
    const t = el(`<div class="toast" style="--r:${rgb}"><span class="dot"></span><span>${text}</span></div>`);
    this.$.toasts.append(t);
    while (this.$.toasts.children.length > 3) this.$.toasts.firstChild.remove();
    setTimeout(() => t.classList.add('fade'), 1700);
    setTimeout(() => t.remove(), 2200);
  }

  pickupToast(item, n) {
    let rgb = '255,255,255', name = itemName(item);
    if (item.kind === 'weapon') { rgb = rarityRGB(item.rarity); name = `${RARITY[item.rarity].name} ${name}`; }
    else if (item.kind === 'consumable') { rgb = cssRGB(CONSUMABLES[item.id].color); name = `${name}${n > 1 ? ` ×${n}` : ''}`; }
    else if (item.kind === 'ammo') { rgb = cssRGB(AMMO[item.id].color); name = `${AMMO[item.id].name} +${n}`; }
    this.toast(name, rgb);
  }

  banner(a, b = '', cls = '', ms = 4200) {
    const bn = this.$.banner;
    bn.querySelector('.a').textContent = a;
    bn.querySelector('.b').textContent = b;
    bn.className = `on ${cls}`;
    clearTimeout(this._bt);
    this._bt = setTimeout(() => bn.classList.remove('on'), ms);
  }

  feed(html, cls = '') {
    const l = el(`<div class="feedline ${cls}">${html}</div>`);
    this.$.feed.append(l);
    while (this.$.feed.children.length > 6) this.$.feed.firstChild.remove();
    setTimeout(() => l.classList.add('fade'), 6500);
    setTimeout(() => l.remove(), 7100);
  }

  killFeed(killer, victim, weapon, involvesYou, youDied) {
    const wtxt = weapon ? `<span class="w">${weapon}</span>` : '';
    if (!killer) this.feed(`<span class="v">${victim}</span><span class="w">${weapon || 'was eliminated'}</span>`, weapon === 'Storm' ? 'storm' : '');
    else this.feed(`<span class="k">${killer}</span><span class="w">›</span><span class="v">${victim}</span>${wtxt}`, involvesYou ? 'you' : youDied ? 'died' : '');
  }

  elimBanner(name, weapon, n) {
    const e = this.$.elim;
    this.$.elimB.textContent = name;
    this.$.elimC.textContent = `${weapon ? weapon.toUpperCase() : ''}${n ? ` • ${n} ELIM${n > 1 ? 'S' : ''}` : ''}`;
    e.classList.remove('on'); void e.offsetWidth; e.classList.add('on');
    this.$.chipElimsBox.classList.remove('bump'); void this.$.chipElimsBox.offsetWidth; this.$.chipElimsBox.classList.add('bump');
  }

  // ---- combat feedback --------------------------------------------------------------------------------------------------------------------------
  hitMarker(head, kill) {
    const h = this.$.hitmark;
    h.className = '';
    void h.offsetWidth;
    h.className = `on ${kill ? 'kill' : head ? 'head' : ''}`;
  }

  damageFlash(sourcePos) {
    this.$.dmgVig.style.transition = 'none';
    this.$.dmgVig.style.opacity = '0.9';
    requestAnimationFrame(() => { this.$.dmgVig.style.transition = 'opacity .5s'; this.$.dmgVig.style.opacity = '0'; });
    if (sourcePos) {
      const p = this.game.player, cam = this.game.camera;
      const ang = Math.atan2(-(sourcePos.x - p.pos.x), -(sourcePos.z - p.pos.z));    // yaw toward source
      const rel = ang - cam.yaw;
      const a = this.dmgArrows.find((x) => x.t <= 0) || this.dmgArrows[0];
      a.t = 1.6; a.rel = rel;
    }
    const bars = [this.$.healthBar, this.$.shieldBar];
    for (const b of bars) { b.classList.remove('flash'); void b.offsetWidth; b.classList.add('flash'); }
  }

  pulseHeal(C) {
    const b = C.shield ? this.$.shieldBar : this.$.healthBar;
    b.classList.remove('healpulse'); void b.offsetWidth; b.classList.add('healpulse');
  }

  addFloater(x, y, z, amount, head, shield) {
    let f = this.floaterPool.pop();
    if (!f) { f = { el: el('<div class="floater"></div>'), x: 0, y: 0, z: 0, t: 0, vx: 0 }; this.$.floaters.append(f.el); }
    f.el.textContent = amount;
    f.el.className = `floater${head ? ' head' : ''}${shield && !head ? ' shield' : ''}`;
    f.x = x; f.y = y + 0.3; f.z = z; f.t = 0; f.vx = (Math.random() - 0.5) * 30;
    f.el.style.display = '';
    this.floaters.push(f);
    if (this.floaters.length > 24) { const o = this.floaters.shift(); o.el.style.display = 'none'; this.floaterPool.push(o); }
  }

  /** "+12 wood" popup next to the materials tiles */
  matTick(mat, n, crit) {
    if (!n) return;
    const tile = this.matEls[MAT_ORDER.indexOf(mat)];
    if (!tile) return;
    const t = el(`<div class="mattick${crit ? ' crit' : ''}">+${n}</div>`);
    tile.append(t);
    setTimeout(() => t.remove(), 900);
  }

  // ---- drop UI ----------------------------------------------------------------------------------------------------------------------------------------
  dropPrompt(on, a = '', b = '') {
    this.$.dropPrompt.classList.toggle('on', on);
    if (on) { this.$.dropA.textContent = a; this.$.dropB.textContent = b; }
  }
  altimeter(on, v = 0) {
    this.$.altimeter.classList.toggle('on', on);
    if (on) this.$.altN.textContent = Math.max(0, Math.round(v));
  }

  // ---- per-frame update ---------------------------------------------------------------------------------------------------------------------------------
  update(dt) {
    const g = this.game;
    const p = g.player;
    if (!p) return;
    const L = this.last;
    const view = g.viewActor || p;

    // vitals
    const hp = Math.ceil(view.health), sh = Math.ceil(view.shield);
    if (L.hp !== hp) {
      L.hp = hp;
      this.$.healthVal.textContent = hp;
      this.$.healthFill.style.width = `${clamp(hp, 0, 100)}%`;
      this.$.healthGhost.style.width = `${clamp(hp, 0, 100)}%`;
      this.$.healthBar.classList.toggle('low', hp <= 30);
    }
    if (L.sh !== sh) {
      L.sh = sh;
      this.$.shieldVal.textContent = sh;
      this.$.shieldFill.style.width = `${clamp(sh, 0, 100)}%`;
      this.$.shieldGhost.style.width = `${clamp(sh, 0, 100)}%`;
    }
    // stats
    const alive = g.aliveCount, elims = p.stats.kills;
    if (L.alive !== alive) { L.alive = alive; this.$.chipAlive.textContent = alive; }
    if (L.elims !== elims) { L.elims = elims; this.$.chipElims.textContent = elims; }

    // hotbar / mats / ammo (diff on inventory version)
    const inv = p.inv;
    const buildSig = `${p.building}|${g.build?.piece}|${g.build?.mat}`;
    if (L.invVer !== inv.version || L.buildSig !== buildSig || L.iconsReady !== !!g.icons) {
      L.invVer = inv.version; L.buildSig = buildSig; L.iconsReady = !!g.icons;
      this.refreshInventory();
    }
    this.refreshAmmo(p);

    // crosshair
    this.updateCrosshair(p, dt);

    // use bar
    const wc = p.wc;
    if (wc.using) {
      const C = CONSUMABLES[p.inv.slots[wc.useSlot]?.id] || {};
      this.$.useBar.classList.add('on');
      this.$.useLbl.textContent = `${C.name || 'Using'}`;
      this.$.useFill.style.width = `${clamp01(wc.useT / wc.useDur) * 100}%`;
    } else this.$.useBar.classList.remove('on');

    // reload ring
    if (wc.reloading && p.alive) {
      this.$.reloadRing.classList.add('on');
      this.$.reloadArc.style.strokeDashoffset = `${176 * (1 - clamp01(wc.reloadT / wc.reloadDur))}`;
      this.$.ammo.classList.add('reloading');
      this.$.ammoRl.style.width = `${clamp01(wc.reloadT / wc.reloadDur) * 100}%`;
    } else { this.$.reloadRing.classList.remove('on'); this.$.ammo.classList.remove('reloading'); }

    // scope overlay
    this.$.scope.classList.toggle('on', g.camera.scopeT > 0.85 && p.alive);

    // storm chip
    this.updateStorm(p);

    // pickup prompt
    this.updatePrompt(p);

    // minimap + compass
    this.map.drawMini(dt);
    this.map.drawCompass();

    // floaters
    this.updateFloaters(dt);
    // damage arrows
    for (const a of this.dmgArrows) {
      if (a.t > 0) { a.t -= dt; a.el.style.opacity = clamp01(a.t / 1.2); a.el.style.transform = `rotate(${(a.rel ?? 0) * 180 / Math.PI}deg)`; }
      else a.el.style.opacity = 0;
    }
  }

  refreshInventory() {
    const g = this.game, p = g.player, inv = p.inv, icons = g.icons;
    if (p.building) {
      const b = g.build;
      this.buildEls.forEach((s, i) => {
        const P = PIECES[i];
        s.classList.toggle('sel', b.piece === P.id);
        s.style.setProperty('--r', cssRGB(MATERIALS[b.mat].color));
        s.classList.remove('empty');
        const ok = inv.mats[b.mat] >= BUILD.cost;
        s.querySelector('.cost').style.color = ok ? '#fff' : '#ff7a7a';
        s.querySelector('.cost').textContent = BUILD.cost;
      });
    } else {
      for (let i = 0; i < 6; i++) {
        const it = inv.slots[i], S = this.slotEls[i];
        const root = S.root;
        root.classList.toggle('sel', inv.selected === i);
        if (!it) { root.classList.add('empty'); S.img.style.display = 'none'; S.cnt.textContent = ''; S.rbar.style.display = 'none'; root.style.removeProperty('--r'); continue; }
        root.classList.remove('empty');
        let rgb = '160,170,190', url = null, cnt = '';
        if (it.kind === 'weapon') { rgb = rarityRGB(it.rarity); url = icons?.get(it); }
        else if (it.kind === 'pickaxe') { rgb = '170,180,200'; url = icons?.get(it); }
        else { rgb = cssRGB(CONSUMABLES[it.id].color); url = icons?.get(it); cnt = it.count > 1 ? it.count : (it.count === 1 ? '1' : ''); }
        root.style.setProperty('--r', rgb);
        S.rbar.style.display = it.kind === 'pickaxe' ? 'none' : '';
        if (url) { S.img.src = url; S.img.style.display = ''; }
        S.cnt.textContent = cnt;
      }
    }
    MAT_ORDER.forEach((m, i) => {
      const e = this.matEls[i];
      e.querySelector('.n').textContent = inv.mats[m];
      e.classList.toggle('sel', p.building && g.build.mat === m);
      e.classList.toggle('empty', inv.mats[m] < BUILD.cost);
    });
  }

  refreshAmmo(p) {
    const cur = p.inv.current;
    const A = this.$;
    if (cur?.kind === 'weapon' && !p.building) {
      const W = WEAPONS[cur.id];
      const res = p.inv.ammo[W.ammo];
      const key = `${cur.mag}|${res}|${W.ammo}`;
      if (this.last.ammoKey !== key) {
        this.last.ammoKey = key;
        A.ammoMag.textContent = cur.mag;
        A.ammoRes.textContent = res;
        A.ammoIcon.src = svgUrl(AMMO_ICON[W.ammo]);
        A.ammo.classList.toggle('low', W.mag > 1 ? cur.mag <= Math.ceil(W.mag * 0.25) : cur.mag === 0);
      }
      A.ammo.classList.remove('none');
    } else A.ammo.classList.add('none');
  }

  updateCrosshair(p, dt) {
    const g = this.game;
    const cur = p.inv.current;
    const A = this.$;
    const isGun = cur?.kind === 'weapon';
    const aiming = p.intent.aim && isGun && g.camera.scopeT < 0.5;
    const hide = !p.alive || p.building || p.mode !== 'ground' || g.camera.scopeT > 0.5 || p.swimming || p.wc.using;
    A.cross.classList.toggle('hide', hide);
    if (hide) return;
    const dot = A.crossLines[4];
    let gap = 7;
    if (isGun) {
      const W = weaponStats(cur);
      const spread = p.wc.currentSpread(W);
      const H = window.innerHeight;
      const px = Math.tan(spread) / Math.tan((g.camera.fov * Math.PI) / 360) * (H / 2);
      gap = Math.max(5, px + 4);
    } else gap = 3;
    this.gapS = damp(this.gapS ?? gap, gap, 22, dt);
    const gs = this.gapS;
    const u = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--u')) || 1;
    const [h1, h2, v1, v2] = A.crossLines;
    const show = isGun ? '' : 'none';
    h1.style.display = h2.style.display = v1.style.display = v2.style.display = show;
    h1.style.left = `${-gs - 11 * u}px`; h2.style.left = `${gs}px`;
    v1.style.top = `${-gs - 11 * u}px`; v2.style.top = `${gs}px`;
    dot.style.display = '';
    dot.style.opacity = aiming || !isGun ? 1 : 0.9;
  }

  updateStorm(p) {
    const st = this.game.storm;
    const A = this.$;
    if (!st || !st.active) { A.stormT.textContent = '--'; A.stormL.textContent = 'Storm'; A.stormChip.classList.remove('out'); return; }
    const t = fmtTime(st.timer);
    const label = st.state === 'wait' ? 'Storm forms' : st.state === 'shrink' ? 'Shrinking' : 'Final circle';
    const out = st.isOutside(p.pos.x, p.pos.z);
    const key = `${t}|${label}|${out}`;
    if (this.last.stormKey !== key) {
      this.last.stormKey = key;
      A.stormT.textContent = st.state === 'final' ? '--' : t;
      A.stormL.textContent = out ? `In storm  ${st.dps} dmg` : label;
      A.stormChip.classList.toggle('out', out);
    }
    const vig = out && p.alive ? 1 : 0;
    if (this.last.vig !== vig) { this.last.vig = vig; A.stormVig.style.opacity = vig; }
  }

  updatePrompt(p) {
    const g = this.game;
    const A = this.$;
    let tgt = null;
    if (p.alive && p.mode === 'ground' && !p.building && !g.uiBlocking && !p.wc.using) tgt = g.loot.promptFor(p);
    if (!tgt) { if (this.last.promptKey) { this.last.promptKey = ''; A.prompt.classList.remove('on'); } return; }
    let rgb, sub, nm, stats, url, action = 'Pick up', ok = true;
    if (tgt.type === 'chest') {
      rgb = '255,194,51'; sub = 'Treasure'; nm = 'Chest'; stats = 'Contains loot'; url = svgUrl(SVG.build); action = 'Open';
    } else {
      const it = tgt.it.item;
      ok = tgt.ok;
      if (it.kind === 'weapon') {
        const S = weaponStats(it);
        rgb = rarityRGB(it.rarity); sub = RARITY[it.rarity].name; nm = S.name;
        const dps = Math.round(S.dmg * S.pellets * S.rate);
        const mag = it.mag != null && it.mag < S.mag ? `${it.mag}/${S.mag}` : S.mag;
        stats = `DMG ${Math.round(S.dmg)}${S.pellets > 1 ? '×' + S.pellets : ''} • MAG ${mag} • DPS ${dps}`;
        url = g.icons?.get(it);
      } else if (it.kind === 'consumable') {
        const C = CONSUMABLES[it.id];
        rgb = cssRGB(C.color); sub = C.kind === 'shield' ? 'Shield' : C.kind === 'both' ? 'Full restore' : 'Healing'; nm = `${C.name}${it.count > 1 ? ' ×' + it.count : ''}`;
        stats = `${C.heal ? '+' + C.heal + ' HP ' : ''}${C.shield ? '+' + C.shield + ' Shield ' : ''}• ${C.use}s`;
        url = g.icons?.get(it);
      } else {
        const a = AMMO[it.id];
        rgb = cssRGB(a.color); sub = 'Ammo'; nm = `${a.name} ×${it.count}`; stats = `Reserve ${p.inv.ammo[it.id]} / ${a.cap}`; url = g.icons?.get(it);
      }
      if (!ok) action = tgt.reason || "Can't pick up";
      else if (tgt.swap) action = 'Swap';
    }
    const key = `${sub}|${nm}|${stats}|${action}|${ok}|${url ? url.length : 0}`;
    if (this.last.promptKey !== key) {
      this.last.promptKey = key;
      A.prompt.style.setProperty('--r', rgb);
      A.promptSub.textContent = sub; A.promptNm.textContent = nm; A.promptStats.textContent = stats;
      A.promptImg.src = url || '';
      A.promptKey.textContent = action;
      A.prompt.classList.toggle('blocked', !ok);
      A.prompt.classList.add('on');
    }
  }

  updateFloaters(dt) {
    const cam = this.game.gfx.camera;
    const W = window.innerWidth, H = window.innerHeight;
    for (let i = this.floaters.length - 1; i >= 0; i--) {
      const f = this.floaters[i];
      f.t += dt;
      if (f.t > 0.9) { f.el.style.display = 'none'; this.floaterPool.push(f); this.floaters.splice(i, 1); continue; }
      this._v.set(f.x, f.y + f.t * 1.1, f.z).project(cam);
      if (this._v.z > 1 || this._v.z < -1) { f.el.style.opacity = 0; continue; }
      const x = (this._v.x * 0.5 + 0.5) * W + f.vx * f.t * 4, y = (-this._v.y * 0.5 + 0.5) * H - f.t * 30;
      const k = f.t < 0.12 ? 0.6 + f.t / 0.12 * 0.7 : 1.3 - Math.min(0.3, (f.t - 0.12) * 0.5);
      f.el.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%) scale(${k})`;
      f.el.style.opacity = f.t > 0.55 ? 1 - (f.t - 0.55) / 0.35 : 1;
    }
  }
}
