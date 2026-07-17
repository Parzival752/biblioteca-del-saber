import { defineConfig, loadEnv } from 'vite';
import { cpSync, existsSync } from 'node:fs';
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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_PATH || '/';

  return {
    root: '.',
    base,
    publicDir: 'public',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
    },
    plugins: [
      copyStatic(['assets', 'assets']),
    ],
  };
});
