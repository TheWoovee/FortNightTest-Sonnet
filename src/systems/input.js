// Keyboard / mouse / pointer-lock handling with per-frame edge detection.
const GAME_KEYS = new Set([
  'KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'ShiftLeft', 'ShiftRight', 'KeyC', 'KeyR', 'KeyE', 'KeyQ', 'KeyF', 'KeyG', 'KeyZ', 'KeyX', 'KeyV', 'KeyB', 'KeyM', 'KeyT',
  'Tab', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ControlLeft', 'AltLeft',
]);

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.down = new Set();
    this.pressedNow = new Set();
    this.releasedNow = new Set();
    this.mouseDown = [false, false, false];
    this.mousePressed = [false, false, false];
    this.lookX = 0;
    this.lookY = 0;
    this.wheel = 0;
    this.locked = false;
    this.lockSupported = !!canvas.requestPointerLock;
    this.freeLook = false;          // fallback when pointer lock is unavailable / refused
    this.enabled = false;           // gameplay input active
    this.sensitivity = 1.0;
    this.invertY = false;
    this.onLockChange = null;
    this.onEscape = null;
    this.mouseX = 0; this.mouseY = 0;
    this._bind();
  }

  _bind() {
    const c = this.canvas;
    window.addEventListener('keydown', (e) => {
      if (e.repeat) { if (this.enabled && GAME_KEYS.has(e.code)) e.preventDefault(); return; }
      if (this.enabled && GAME_KEYS.has(e.code)) e.preventDefault();
      if (!this.down.has(e.code)) this.pressedNow.add(e.code);
      this.down.add(e.code);
    });
    window.addEventListener('keyup', (e) => {
      this.down.delete(e.code);
      this.releasedNow.add(e.code);
    });
    window.addEventListener('blur', () => { this.down.clear(); this.mouseDown.fill(false); });
    window.addEventListener('mousedown', (e) => {
      if (!this.enabled) return;
      if (this.locked || this.freeLook || e.target === c) {
        this.mouseDown[e.button] = true;
        this.mousePressed[e.button] = true;
        e.preventDefault();
      }
    });
    window.addEventListener('mouseup', (e) => { this.mouseDown[e.button] = false; });
    window.addEventListener('contextmenu', (e) => { if (this.enabled) e.preventDefault(); });
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX; this.mouseY = e.clientY;
      if (!this.enabled) return;
      if (this.locked || this.freeLook) {
        this.lookX += e.movementX || 0;
        this.lookY += e.movementY || 0;
      }
    });
    window.addEventListener('wheel', (e) => {
      if (!this.enabled) return;
      this.wheel += Math.sign(e.deltaY);
      e.preventDefault();
    }, { passive: false });
    document.addEventListener('pointerlockchange', () => {
      const was = this.locked;
      this.locked = document.pointerLockElement === c;
      if (was && !this.locked) this.onLockChange?.(false);
      if (!was && this.locked) this.onLockChange?.(true);
    });
    document.addEventListener('pointerlockerror', () => {
      // Sandboxed iframes etc.: fall back to free-look so the game stays playable.
      this.freeLook = true;
      this.onLockChange?.(true);
    });
  }

  requestLock() {
    if (!this.lockSupported) { this.freeLook = true; this.onLockChange?.(true); return; }
    try {
      const p = this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => { this.freeLook = true; this.onLockChange?.(true); });
    } catch { this.freeLook = true; this.onLockChange?.(true); }
  }
  exitLock() { if (document.pointerLockElement) document.exitPointerLock(); }

  /** true while the key is held */
  key(code) { return this.down.has(code); }
  /** true only on the frame the key went down */
  pressed(code) { return this.pressedNow.has(code); }
  released(code) { return this.releasedNow.has(code); }
  mouse(btn) { return this.mouseDown[btn]; }
  mousePress(btn) { return this.mousePressed[btn]; }

  consumeLook() {
    const l = { x: this.lookX, y: this.lookY };
    this.lookX = 0; this.lookY = 0;
    return l;
  }
  consumeWheel() { const w = this.wheel; this.wheel = 0; return w; }

  /** call at the end of every frame */
  endFrame() {
    this.pressedNow.clear();
    this.releasedNow.clear();
    this.mousePressed.fill(false);
  }

  /** Synthetic input for tests / scripted control. */
  simulateKey(code, down) {
    if (down) { if (!this.down.has(code)) this.pressedNow.add(code); this.down.add(code); } else { this.down.delete(code); this.releasedNow.add(code); }
  }
}
