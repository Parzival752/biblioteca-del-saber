import { defineConfig, loadEnv } from 'vite';
import { cpSync, existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/** Copia carpetas estáticas que Vite no empaqueta por sí solo. */
function copyStatic(...pairs) {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      for (const [from, to] of pairs) {
        if (!existsSync(from)) continue;
        cpSync(from, resolve('dist', to), { recursive: true });
      }
    },
  };
}

function readBuildId() {
  const path = resolve('.build-id');
  if (existsSync(path)) return readFileSync(path, 'utf8').trim();
  return process.env.GITHUB_SHA?.slice(0, 12) || `b${Date.now().toString(36)}`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_PATH || '/';
  const buildId = readBuildId();

  return {
    root: '.',
    base,
    publicDir: 'public',
    define: {
      __APP_BUILD_ID__: JSON.stringify(buildId),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
    },
    plugins: [
      copyStatic(['assets', 'assets']),
      {
        name: 'inject-build-id',
        transformIndexHtml(html) {
          return html.replaceAll('__APP_BUILD_ID__', buildId);
        },
      },
    ],
  };
});
