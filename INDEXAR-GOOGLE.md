# Indexar en Google — La Biblioteca del Saber

URL del sitio: **https://parzival752.github.io/biblioteca-del-saber/**

Sitemap: **https://parzival752.github.io/biblioteca-del-saber/sitemap.xml**

---

## Paso 1 — Google Search Console (5 min)

1. Entra con tu cuenta Google: [search.google.com/search-console](https://search.google.com/search-console)
2. **Agregar propiedad** → tipo **Prefijo de URL**
3. Pega exactamente:
   ```
   https://parzival752.github.io/biblioteca-del-saber/
   ```
4. **Continuar** → elige método de verificación:

### Opcion A — Metaetiqueta HTML (recomendada)

1. Google te da una linea como:
   ```html
   <meta name="google-site-verification" content="abc123..." />
   ```
2. En `index.html`, descomenta y reemplaza la linea de verificacion (cerca del `<head>`)
3. Sube el cambio:
   ```bash
   git add index.html && git commit -m "Verificacion Google Search Console" && git push
   ```
4. Espera 2 min, vuelve a Search Console y pulsa **Verificar**

### Opcion B — Archivo HTML

1. Google te da un archivo, ej. `google1234567890.html`
2. Copialo a la carpeta `public/` de este proyecto
3. `git add public/google....html && git commit -m "Verificacion Google" && git push`
4. Comprueba que abre en el navegador, luego **Verificar** en Search Console

---

## Paso 2 — Enviar el sitemap

1. En Search Console, menu **Sitemaps** (izquierda)
2. En "Agregar un sitemap nuevo", escribe solo:
   ```
   sitemap.xml
   ```
   (o la URL completa del sitemap)
3. **Enviar**
4. Estado deberia pasar a **Correcto** en unos minutos

---

## Paso 3 — Pedir indexacion de la portada

1. Menu **Inspeccion de URLs** (arriba)
2. Pega: `https://parzival752.github.io/biblioteca-del-saber/`
3. Enter → **Solicitar indexacion**

Google no garantiza indexar al instante; puede tardar **varios dias**.

---

## Paso 4 — Avisar a buscadores (opcional)

Desde este proyecto:

```bash
./scripts/ping-sitemap.sh
```

---

## Comprobar si ya apareces

Busca en Google:

```
site:parzival752.github.io/biblioteca-del-saber
```

Si no sale nada, es normal los primeros dias.

---

## Bing (opcional, 2 min)

1. [bing.com/webmasters](https://www.bing.com/webmasters)
2. Importar desde Google Search Console **o** anadir sitio manualmente
3. Enviar el mismo sitemap

---

## Contacto en el sitio

Reportes y legal: **bitacorapz.contacto@gmail.com**
