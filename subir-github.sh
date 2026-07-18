#!/usr/bin/env bash
# Sube el proyecto a GitHub. Requiere SSH o token (ver AUTENTICACION-GITHUB.md).
set -e
cd "$(dirname "$0")"

REMOTE_SSH="git@github.com:Parzival752/biblioteca-del-saber.git"
REMOTE_HTTPS="https://github.com/Parzival752/biblioteca-del-saber.git"

if [[ -f "$HOME/.ssh/id_ed25519.pub" ]]; then
  git remote set-url origin "$REMOTE_SSH"
  echo "  Usando SSH: $REMOTE_SSH"
else
  git remote set-url origin "$REMOTE_HTTPS"
  echo "  Usando HTTPS (necesitas token como contraseña)"
  echo "  Ver AUTENTICACION-GITHUB.md"
fi

echo "  Subiendo rama main..."
if git push -u origin main; then
  echo ""
  echo "  Listo."
  echo "  1. GitHub → Settings → Pages → Source: GitHub Actions"
  echo "  2. URL: https://Parzival752.github.io/biblioteca-del-saber/"
else
  echo ""
  echo "  Fallo la autenticacion."
  echo ""
  if [[ ! -f "$HOME/.ssh/id_ed25519.pub" ]]; then
    echo "  Genera SSH: ssh-keygen -t ed25519 -C tu@email -f ~/.ssh/id_ed25519"
    echo "  Anade la clave en: https://github.com/settings/keys"
  else
    echo "  Anade esta clave en GitHub → Settings → SSH keys:"
    echo ""
    cat "$HOME/.ssh/id_ed25519.pub"
    echo ""
    echo "  Luego vuelve a ejecutar: ./subir-github.sh"
  fi
  exit 1
fi
