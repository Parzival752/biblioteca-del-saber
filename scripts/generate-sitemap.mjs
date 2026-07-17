#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let siteUrl = 'https://bibliotecadelsaber.mx';

const envPath = resolve(root, '.env');
if (existsSync(envPath)) {
  const m = readFileSync(envPath, 'utf8').match(/^VITE_SITE_URL=(.+)$/m);
  if (m) siteUrl = m[1].trim().replace(/\/$/, '');
}

const publicDir = resolve(root, 'public');

writeFileSync(resolve(publicDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
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
