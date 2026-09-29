// Builds and owns everything static about the island: terrain, water, sky, scenery, towns.
import * as THREE from 'three';
import { WORLD, TEXTURE_SIZE } from '../config.js';
import { Terrain } from './terrain.js';
import { TerrainPainter } from './terrainPaint.js';
import { TerrainMesh } from './terrainMesh.js';
import { Water } from './water.js';
import { Sky } from './sky.js';
import { Physics } from '../physics/physics.js';
import { generateTown, generateLandmark, paintTown } from './towns.js';
import { Scatter } from './scatter.js';
import { RoadDecals } from './roads.js';
import { GrassField } from './grass.js';

export class World {
  constructor(gfx, seed = 20240517) {
    this.gfx = gfx;
    this.scene = gfx.scene;
    this.seed = seed;
    this.time = 0;
  }

  /** Map world metres → canvas pixels of the baked colour texture. */
  texScale() { return TEXTURE_SIZE / WORLD.size; }

  async build(progress = () => {}) {
    const report = (label, from, span) => (f) => progress(label, from + f * span);

    progress('Shaping the island…', 0);
    this.terrain = new Terrain(this.seed);
    await this.terrain.generate(report('Shaping the island…', 0, 0.2));

    progress('Painting meadows…', 0.2);
    this.painter = new TerrainPainter(this.terrain);
    const base = await this.painter.paintBase(1024, report('Painting meadows…', 0.2, 0.15));

    // colour canvas (north-up: row 0 = z -640)
    const baseCanvas = document.createElement('canvas');
    baseCanvas.width = baseCanvas.height = 1024;
    baseCanvas.getContext('2d').putImageData(new ImageData(base, 1024, 1024), 0, 0);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = TEXTURE_SIZE;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(baseCanvas, 0, 0, TEXTURE_SIZE, TEXTURE_SIZE);
    this.baseCanvas = baseCanvas;
    this.basePixels = base;
    this.colorCanvas = canvas;
    this.colorCtx = ctx;

    progress('Laying roads…', 0.36);
    this.paintRoads(ctx);

    // ---- collision world + towns -------------------------------------------------------------------
    this.physics = new Physics(this.terrain);
    this.group = new THREE.Group();
    this.group.name = 'static-world';
    this.scene.add(this.group);
    this.animated = [];
    const env = { terrain: this.terrain, physics: this.physics, group: this.group, animated: this.animated, seed: this.seed, scene: this.scene, painter: this.painter };
    this.towns = [];
    this.buildings = [];
    this.outdoorSpots = [];
    this.chestSpots = [];
    this.cars = [];
    this.blocked = [];
    this.yardTrees = [];
    this.streetLights = [];
    const S = this.texScale();
    const layoutTowns = this.terrain.layout.towns;
    for (let i = 0; i < layoutTowns.length; i++) {
      progress(`Building ${layoutTowns[i].name}…`, 0.4 + (i / layoutTowns.length) * 0.25);
      await new Promise((r) => setTimeout(r, 0));
      const t = layoutTowns[i];
      const out = generateTown(env, t);
      paintTown(ctx, S, WORLD.half, t, out);
      this._absorb(out);
      this.towns.push(out);
    }
    for (const lm of this.terrain.layout.landmarks) {
      const out = generateLandmark(env, lm);
      this._absorb(out);
    }
    this.blockedAll = this.blocked;

    progress('Planting trees…', 0.7);
    await new Promise((r) => setTimeout(r, 0));
    this.scatter = new Scatter({ ...env, blocked: this.blocked, yardTrees: this.yardTrees });
    this.scatter.generate(this.seed + 5);
    this.scatter.build();
    console.log(`scatter: ${this.scatter.trees.length} trees, ${this.scatter.rocks.length} rocks, ${this.scatter.bushes.length} bushes, ${this.scatter.chunks.length} chunk meshes`);
    this.scatter.paintShadows(ctx, S);

    this.roadDecals = new RoadDecals(this);
    this.grass = new GrassField(this);

    this.colorTexture = new THREE.CanvasTexture(canvas);
    this.terrainMesh = new TerrainMesh(this.scene, this.terrain, this.colorTexture, this.gfx.renderer);
    this.water = new Water(this.scene, this.terrain);
    this.sky = new Sky(this.scene);
    progress('Ready', 1);
  }

  _absorb(out) {
    this.buildings.push(...out.buildings);
    this.outdoorSpots.push(...out.outdoorSpots);
    if (out.chestSpots) this.chestSpots.push(...out.chestSpots);
    this.cars.push(...out.cars);
    this.blocked.push(...out.blocked);
    this.yardTrees.push(...out.yardTrees);
    if (out.lights) this.streetLights.push(...out.lights);
    for (const b of out.buildings) if (b.chest) this.chestSpots.push(b.chest);
  }

  paintRoads(ctx) {
    const S = this.texScale();
    const X = (x) => (x + WORLD.half) * S, Z = (z) => (z + WORLD.half) * S;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const road of this.terrain.layout.roads) {
      const pts = road.samples;
      const path = () => {
        ctx.beginPath();
        pts.forEach((p, i) => (i ? ctx.lineTo(X(p.x), Z(p.z)) : ctx.moveTo(X(p.x), Z(p.z))));
      };
      const stroke = (w, style, dash) => {
        path();
        ctx.setLineDash(dash || []);
        ctx.lineWidth = w * S;
        ctx.strokeStyle = style;
        ctx.stroke();
      };
      if (road.kind === 'asphalt') {
        stroke(road.w + 4, 'rgba(150,140,120,0.28)');
        stroke(road.w + 1.4, '#9a9ca2');
        stroke(road.w, '#585c66');
        stroke(0.28, '#f2d24a', [3.2 * S, 4.2 * S]);
      } else {
        stroke(road.w + 4.5, 'rgba(140,110,70,0.30)');
        stroke(road.w + 0.8, '#bd935c');
        stroke(road.w * 0.6, 'rgba(206,166,110,0.7)');
      }
    }
    ctx.setLineDash([]);
  }

  /** Player waypoint: a tall additive beam so it can be spotted from across the island. Pass null to clear. */
  setMarker(x, z) {
    if (x === null || x === undefined) { if (this.markerMesh) this.markerMesh.visible = false; return; }
    if (!this.markerMesh) {
      const geo = new THREE.CylinderGeometry(1.1, 1.1, 1, 14, 1, true);
      geo.translate(0, 0.5, 0);
      const mat = new THREE.ShaderMaterial({
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader: 'varying vec2 vUv; void main(){ float a = pow(1.0 - vUv.y, 0.7) * 0.42; gl_FragColor = vec4(1.0, 0.86, 0.22, a); }',
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
      });
      this.markerMesh = new THREE.Mesh(geo, mat);
      this.markerMesh.scale.set(1, 320, 1);
      this.markerMesh.frustumCulled = false;
      this.markerMesh.renderOrder = 3;
      this.scene.add(this.markerMesh);
    }
    this.markerMesh.position.set(x, Math.max(0, this.terrain.heightAt(x, z)), z);
    this.markerMesh.visible = true;
  }

  update(dt, cameraPos) {
    this.time += dt;
    this.sky.update(dt, cameraPos);
    this.water.update(dt, this.scene);
    this.scatter.update(dt, this.time, cameraPos);
    this.grass.update(dt, cameraPos, this.time);
    for (const a of this.animated) a.obj.rotation[a.axis] += a.speed * dt;
  }
}
