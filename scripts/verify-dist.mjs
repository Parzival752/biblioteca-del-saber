#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

const required = [
  'index.html',
  'robots.txt',
  'sitemap.xml',
  'version.json',
  'manifest.webmanifest',
  'favicon.svg',
  'assets/avatars/caballero.svg',
  'assets/courses/css.svg',
  'assets/alebrijes/maestro.svg',
];

const missing = required.filter((p) => !existsSync(resolve(dist, p)));

if (missing.length) {
  console.error('Build incompleto. Faltan en dist/:');
  missing.forEach((p) => console.error('  -', p));
  process.exit(1);
}

console.log('dist/ OK — listo para subir (' + required.length + ' rutas comprobadas).');
