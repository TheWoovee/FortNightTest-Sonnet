// Build script: bundles src/main.js into dist/game.js (IIFE), generates the embedded
// font stylesheet, and emits a fully self-contained single-file build (dist/stormfall.html)
// that can be opened straight from disk, hosted anywhere, or dropped into an iframe.
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');
const dev = watch || process.argv.includes('--dev');
const outArg = process.argv.find((a) => a.startsWith('--out='));
const outFile = outArg ? resolve(outArg.slice(6)) : null;
const p = (...s) => resolve(root, ...s);

mkdirSync(p('dist'), { recursive: true });

// ---- fonts: embed as base64 so the game works offline / from file:// ----
function fontFace(family, weight, style, pkg, file) {
  const b64 = readFileSync(p('node_modules/@fontsource', pkg, 'files', file)).toString('base64');
  return `@font-face{font-family:'${family}';font-weight:${weight};font-style:${style};font-display:swap;` +
    `src:url(data:font/woff2;base64,${b64}) format('woff2');}`;
}
function buildFonts() {
  const css = [
    fontFace('Anton', 400, 'normal', 'anton', 'anton-latin-400-normal.woff2'),
    fontFace('Barlow Condensed', 600, 'normal', 'barlow-condensed', 'barlow-condensed-latin-600-normal.woff2'),
    fontFace('Barlow Condensed', 700, 'italic', 'barlow-condensed', 'barlow-condensed-latin-700-italic.woff2'),
    fontFace('Barlow Condensed', 800, 'italic', 'barlow-condensed', 'barlow-condensed-latin-800-italic.woff2'),
  ].join('\n');
  writeFileSync(p('dist/fonts.css'), css);
  return css;
}

function buildSingleFile() {
  const fonts = readFileSync(p('dist/fonts.css'), 'utf8');
  const css = readFileSync(p('styles/main.css'), 'utf8');
  const js = readFileSync(p('dist/game.js'), 'utf8').replace(/<\/script/gi, '<\\/script');
  let html = readFileSync(p('index.html'), 'utf8');
  html = html.replace(/<!--build:css-->[\s\S]*?<!--\/build:css-->/, () => `<style>\n${fonts}\n${css}\n</style>`);
  html = html.replace(/<!--build:js-->[\s\S]*?<!--\/build:js-->/, () => `<script>\n${js}\n</script>`);
  writeFileSync(p('dist/stormfall.html'), html);
  return html.length;
}

const options = {
  entryPoints: [p('src/main.js')],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  outfile: outFile || p('dist/game.js'),
  minify: !dev,
  sourcemap: dev ? 'inline' : false,
  legalComments: 'none',
  logLevel: 'info',
  define: { __DEV__: dev ? 'true' : 'false' },
  plugins: [{
    name: 'post-build',
    setup(build) {
      build.onEnd((res) => {
        if (res.errors.length || outFile) return;
        try {
          buildFonts();
          const n = buildSingleFile();
          console.log(`single-file build: dist/stormfall.html (${(n / 1024).toFixed(0)} KB)`);
        } catch (e) { console.error(e); }
      });
    },
  }],
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log('watching for changes…');
} else {
  await esbuild.build(options);
}
