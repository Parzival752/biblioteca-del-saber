#!/usr/bin/env bash
# Genera dist/ y sirve la version de PRODUCCION (como quedara en internet).
set -e
cd "$(dirname "$0")"

echo "  Generando build de produccion..."
npm run build

PORT="${BIBLIOTECA_PORT:-8773}"
URL="http://localhost:${PORT}"

echo ""
echo "  Sirviendo dist/ en $URL"
echo "  (Ctrl+C para detener)"
echo ""

python3 -m http.server "$PORT" --directory dist
