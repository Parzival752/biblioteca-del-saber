#!/usr/bin/env bash
# Sube el proyecto a GitHub. Requiere SSH o token (ver AUTENTICACION-GITHUB.md).
# Importante: solo sube COMMITS. Si hay cambios sin "git commit", no irán a Pages.
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

# Evitar el caso "Everything up-to-date" con cambios locales sin commit
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo ""
  echo "  ERROR: Hay cambios SIN COMMIT. El push NO los sube a GitHub Pages."
  echo "  Estado:"
  git status -sb
  echo ""
  echo "  Primero haz commit (o pide al agente que lo haga) y vuelve a ejecutar:"
  echo "    ./subir-github.sh"
  exit 1
fi

untracked=$(git ls-files --others --exclude-standard)
if [[ -n "$untracked" ]]; then
  echo ""
  echo "  AVISO: Hay archivos sin seguimiento (no se subirán):"
  echo "$untracked" | sed 's/^/    /'
  echo ""
fi

git fetch origin main 2>/dev/null || true
ahead=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)
if [[ "$ahead" -eq 0 ]]; then
  echo ""
  echo "  No hay commits nuevos que subir (rama al día con origin/main)."
  echo "  Si esperabas ver cambios en la web, faltó hacer git commit antes."
  echo ""
  exit 0
fi

echo "  Subiendo $ahead commit(s) a main..."
if git push -u origin main; then
  echo ""
  echo "  Listo. Commits subidos: $ahead"
  echo "  1. GitHub → Actions → espera Deploy GitHub Pages (verde)"
  echo "  2. URL: https://Parzival752.github.io/biblioteca-del-saber/"
  echo "  3. Recarga fuerte (Ctrl+Shift+R) o Ajustes → Buscar actualización"
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
