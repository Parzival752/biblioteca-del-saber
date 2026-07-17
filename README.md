# La Biblioteca del Saber — Web (produccion)

Copia del proyecto preparada para **publicar en internet**.  
La version original de desarrollo sigue en `../BibliotecaDelSaber/` sin cambios.

## Que incluye esta copia

- Build Vite que empaqueta JS/CSS y copia `assets/` a `dist/`
- Favicon, PWA (`manifest.webmanifest`), Open Graph y Twitter cards
- `robots.txt` y `sitemap.xml` (generados con tu dominio)
- CI en GitHub Actions (tests + build)
- Config para **Netlify** y guia **Cloudflare Pages**
- Textos legales con email y URL de ejemplo (editar antes de publicar)
- Script `desplegar-preview.sh` para ver exactamente lo que subiras

## Requisitos

- Node.js 18+
- npm

## Desarrollo local (codigo fuente)

```bash
npm install
npm run dev
# http://localhost:8773
```

## Probar build de produccion

```bash
npm install
./desplegar-preview.sh
# o: npm run build && npm run serve:dist
```

## Publicar en internet

### 1. Antes de subir — checklist

1. Copia `.env.example` a `.env` y pon tu dominio real:
   ```
   VITE_SITE_URL=https://tudominio.mx
   ```
2. Edita `js/legal.js` → `SITE_PUBLIC` (email y URL reales)
3. Edita `index.html` → `canonical`, `og:url`, `og:image` si cambiaste dominio
4. (Opcional) Sustituye `public/og.svg` por una imagen PNG 1200×630 para redes sociales
5. Revisa descargos en cursos de salud/supervivencia

### 2. Cloudflare Pages (recomendado, gratis)

1. Sube este folder a un repo de GitHub
2. En [Cloudflare Pages](https://pages.cloudflare.com): **Create project** → conecta el repo
3. Configuracion:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20
4. Anade tu dominio en Cloudflare (DNS) y activa HTTPS (automatico)

Ver `cloudflare-pages.md`.

### 3. Netlify (alternativa)

1. Conecta el repo o arrastra la carpeta `dist/` tras `npm run build`
2. Usa `netlify.toml` incluido (build + headers de seguridad)

### 4. GitHub Pages

```bash
npm run build
# Sube el contenido de dist/ a rama gh-pages o usa GitHub Actions
```

## Scripts

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Servidor desarrollo (fuente) puerto 8773 |
| `npm run build` | Genera `dist/` + verifica assets |
| `npm run preview` | Vite preview del build |
| `npm test` | Tests |
| `npm run build:check` | Build + tests |
| `./desplegar-preview.sh` | Build y sirve `dist/` |

## Estructura

```
BibliotecaDelSaber-web/
  public/          → favicon, robots, sitemap, manifest, og
  assets/          → iconos y avatares (copiados a dist/)
  dist/            → salida del build (esto subes al hosting)
  scripts/         → verify-dist, generate-sitemap
```

## Coste estimado

- Hosting estatico: **gratis** (Cloudflare Pages / Netlify / GitHub Pages)
- Dominio `.mx` o `.com`: ~150–300 MXN/anio

## Notas

- No hay backend: el progreso vive en `localStorage` del navegador
- No emite certificados (ver terminos legales)
- Los textos legales no sustituyen asesoria de un abogado
