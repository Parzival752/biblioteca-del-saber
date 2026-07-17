#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_SITE_URL = 'https://parzival752.github.io/biblioteca-del-saber';
let siteUrl = process.env.VITE_SITE_URL?.trim().replace(/\/$/, '') || DEFAULT_SITE_URL;

const envPath = resolve(root, '.env');
if (!process.env.VITE_SITE_URL && existsSync(envPath)) {
  const m = readFileSync(envPath, 'utf8').match(/^VITE_SITE_URL=(.+)$/m);
  if (m) siteUrl = m[1].trim().replace(/\/$/, '');
}

const lastmod = new Date().toISOString().slice(0, 10);

const publicDir = resolve(root, 'public');

writeFileSync(resolve(publicDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`);

writeFileSync(resolve(publicDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`);

console.log('Sitemap y robots actualizados para:', siteUrl);
