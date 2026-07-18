# Publicar La Biblioteca del Saber (paso a paso)

## Opcion A — GitHub Pages (gratis, la mas rapida)

### 1. Crear repo en GitHub

1. Entra a [github.com/new](https://github.com/new)
2. Nombre sugerido: `biblioteca-del-saber`
3. **Public** o Private (Pages funciona en ambos con la config correcta)
4. **No** marques "Add README" (ya tienes uno)
5. Crear repositorio

### 2. Subir este proyecto

En la carpeta `BibliotecaDelSaber-web`:

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit: Biblioteca del Saber web"
git remote add origin https://github.com/Parzival752/biblioteca-del-saber.git
git push -u origin main
```

(Sustituye `TU_USUARIO` por tu usuario de GitHub.)

### 3. Activar GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Tras el primer push, entra a **Actions** y espera el workflow **Deploy GitHub Pages** (verde)
4. Tu URL sera: `https://Parzival752.github.io/biblioteca-del-saber/`

### 4. Actualizar dominio en el proyecto

Cuando tengas la URL final (GitHub Pages o dominio propio):

1. Copia `.env.example` → `.env`:
   ```
   VITE_SITE_URL=https://TU_USUARIO.github.io/biblioteca-del-saber
   ```
2. Edita `js/legal.js` → `SITE_PUBLIC.url` y `contactEmail`
3. Edita `index.html` → `canonical`, `og:url`, `og:image` con esa URL base
4. Commit y push → se regenera solo

---

## Opcion B — Cloudflare Pages (dominio propio)

1. Sube el repo a GitHub (pasos 1–2 arriba)
2. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
3. Conecta el repo
4. Build command: `npm run build`
5. Output directory: `dist`
6. Node: **20**
7. En **Custom domains** anade tu dominio (ej. `bibliotecadelsaber.mx`)

Ver tambien `cloudflare-pages.md`.

---

## Probar en tu PC antes de subir

```bash
./desplegar-preview.sh
# Abre http://localhost:8773
```

---

## Checklist legal antes de anunciar

- [ ] Email de contacto real en `js/legal.js`
- [ ] Revisar descargos (primeros auxilios, supervivencia)
- [ ] Dominio y HTTPS activos
- [ ] Probar en movil
