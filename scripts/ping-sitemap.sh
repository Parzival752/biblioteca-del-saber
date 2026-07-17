#!/usr/bin/env bash
# Avisa a Google y Bing que existe el sitemap (no sustituye Search Console).
set -e
SITEMAP="https://parzival752.github.io/biblioteca-del-saber/sitemap.xml"

echo "  Ping Google..."
curl -s -o /dev/null -w "  Google: HTTP %{http_code}\n" \
  "https://www.google.com/ping?sitemap=${SITEMAP}" || true

echo "  Ping Bing..."
curl -s -o /dev/null -w "  Bing: HTTP %{http_code}\n" \
  "https://www.bing.com/ping?sitemap=${SITEMAP}" || true

echo ""
echo "  Sitemap: $SITEMAP"
echo "  Sigue INDEXAR-GOOGLE.md para Search Console y solicitar indexacion."
