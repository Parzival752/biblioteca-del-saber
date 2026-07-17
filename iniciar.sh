#!/usr/bin/env bash
# Inicia La Biblioteca del Saber (copia WEB / produccion) en puerto 8773.
# Para probar el build: ./desplegar-preview.sh
# Uso desarrollo fuente: ./iniciar.sh

set -e
cd "$(dirname "$0")"

DEFAULT_PORT=8773
PORT="${BIBLIOTECA_PORT:-$DEFAULT_PORT}"
APP_MARKER="Biblioteca del Saber"
APP_TITLE="La Biblioteca del Saber"

PY=""
if command -v python3 >/dev/null 2>&1; then
  PY=python3
elif command -v python >/dev/null 2>&1; then
  PY=python
fi

if [[ -z "$PY" ]]; then
  echo "Error: Python no está instalado (python3 o python)."
  read -r -p "Pulsa Enter para cerrar…" _ 2>/dev/null || true
  exit 1
fi

if [[ ! -f index.html ]]; then
  echo "Error: no se encontró index.html. ¿Estás en BibliotecaDelSaber?"
  exit 1
fi

port_open() {
  local p="$1"
  if command -v ss >/dev/null 2>&1; then
    ss -tlnH 2>/dev/null | awk '{print $4}' | grep -qE ":${p}$"
  elif command -v netstat >/dev/null 2>&1; then
    netstat -tln 2>/dev/null | grep -qE ":${p}[[:space:]]"
  else
    return 1
  fi
}

is_biblioteca() {
  local p="$1"
  curl -sf --max-time 2 "http://127.0.0.1:${p}/" 2>/dev/null | grep -q "$APP_MARKER"
}

open_browser() {
  local url="$1"
  if command -v firefox >/dev/null 2>&1; then
    firefox --new-window "$url" >/dev/null 2>&1 &
  elif command -v chromium >/dev/null 2>&1; then
    chromium --new-window "$url" >/dev/null 2>&1 &
  elif command -v google-chrome >/dev/null 2>&1; then
    google-chrome --new-window "$url" >/dev/null 2>&1 &
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$url" >/dev/null 2>&1 &
  else
    echo ""
    echo "  Abre manualmente: $url"
    echo ""
  fi
}

pick_port() {
  local p="$PORT"
  local tries=0
  while (( tries < 20 )); do
    if ! port_open "$p"; then
      PORT="$p"
      return 0
    fi
    if is_biblioteca "$p"; then
      PORT="$p"
      echo "  La Biblioteca del Saber ya estaba corriendo en puerto ${PORT}."
      return 0
    fi
    echo "  ⚠ Puerto ${p} ocupado por otra aplicación, probando $((p + 1))…"
    p=$((p + 1))
    tries=$((tries + 1))
  done
  echo "Error: no se encontró un puerto libre cerca de ${PORT}."
  exit 1
}

pick_port
URL="http://localhost:${PORT}"

if port_open "$PORT" && is_biblioteca "$PORT"; then
  echo ""
  echo "  🎨 La Biblioteca del Saber → $URL"
  echo "  (Aprende-JS: 8766 · Super Maestro: 8770)"
  echo ""
  open_browser "$URL"
  exit 0
fi

"$PY" -m http.server "$PORT" &
SERVER_PID=$!
sleep 0.8

if ! is_biblioteca "$PORT"; then
  kill "$SERVER_PID" 2>/dev/null || true
  echo "Error: el servidor arrancó pero no responde con La Biblioteca del Saber."
  exit 1
fi

open_browser "$URL"

echo ""
echo "  ✓ La Biblioteca del Saber corriendo en $URL"
echo "  Aprende-JS: http://localhost:8766 · Super Maestro: http://localhost:8770"
echo "  Pulsa Ctrl+C aquí para detener el servidor."
echo ""

cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM
wait "$SERVER_PID"
