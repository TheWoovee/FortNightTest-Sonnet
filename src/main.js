import * as THREE from 'three';
import { Game } from './game.js';
import { Gfx } from './gfx/gfx.js';
import { charView } from './debug/charView.js';

const params = new URLSearchParams(location.search);
const canvas = document.getElementById('game');
const ui = document.getElementById('ui');

function showFatal(err) {
  console.error(err);
  const d = document.createElement('div');
  d.style.cssText = 'position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0b1230;color:#fff;font:600 22px "Barlow Condensed",Arial,sans-serif;text-align:center;padding:40px;z-index:999;pointer-events:auto';
  d.innerHTML = `<div style="font-size:54px;margin-bottom:12px">Something went wrong</div><div style="max-width:760px;opacity:.85">Stormfall Royale needs a browser with WebGL2 support (recent Chrome, Edge, Firefox or Safari) and hardware acceleration enabled.</div><pre style="margin-top:22px;max-width:900px;white-space:pre-wrap;font:14px monospace;opacity:.6">${String(err && err.stack || err).slice(0, 700)}</pre>`;
  document.body.append(d);
}

async function main() {
  if (params.get('view') === 'chars') {
    const gfx = new Gfx(canvas, { quality: params.get('quality') || 'high' });
    const only = params.get('only') ? params.get('only').split(',').map(Number) : null;
    const v = charView(gfx, only);
    const cam = (params.get('cam') || '0,1.6,4,0,-0.1').split(',').map(Number);
    gfx.camera.position.set(cam[0], cam[1], cam[2]);
    gfx.camera.rotation.set(cam[4] || 0, cam[3] || 0, 0);
    gfx.updateSun(new THREE.Vector3(0, 0, 0));
    window.__game = { gfx };
    const frame = () => { v.update(0.016); gfx.render(); window.__frames = (window.__frames || 0) + 1; requestAnimationFrame(frame); };
    frame();
    return;
  }
  const game = new Game(canvas, ui, params);
  window.__game = game;
  await game.boot();
}

window.addEventListener('error', (e) => { if (!window.__game?.phase || window.__game.phase === 'loading') showFatal(e.error || e.message); });
main().catch(showFatal);
