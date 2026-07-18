#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function resolveBuildId() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 12);
  if (process.env.VITE_BUILD_ID) return String(process.env.VITE_BUILD_ID).trim();
  try {
    return execSync('git rev-parse --short HEAD', { cwd: root, encoding: 'utf8' }).trim();
  } catch {
    return `b${Date.now().toString(36)}`;
  }
}

const id = resolveBuildId();
const payload = {
  id,
  builtAt: new Date().toISOString(),
};

writeFileSync(resolve(root, 'public/version.json'), `${JSON.stringify(payload, null, 2)}\n`);
writeFileSync(resolve(root, '.build-id'), `${id}\n`);

console.log('version.json →', id);
