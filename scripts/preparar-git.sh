#!/usr/bin/env bash
# Prepara el repo git local (no hace push). Uso: ./scripts/preparar-git.sh
set -e
cd "$(dirname "$0")/.."

if [[ -d .git ]]; then
  echo "  Ya existe .git — estado:"
  git status -sb
  exit 0
fi

git init
git branch -M main
git add .
git status -sb
echo ""
echo "  Siguiente paso:"
echo "  git commit -m \"Initial commit: Biblioteca del Saber web\""
echo "  git remote add origin https://github.com/TU_USUARIO/biblioteca-del-saber.git"
echo "  git push -u origin main"
echo ""
echo "  Luego activa GitHub Pages → Source: GitHub Actions (ver PUBLICAR.md)"
