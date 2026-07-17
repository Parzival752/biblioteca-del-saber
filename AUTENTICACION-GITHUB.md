# Autenticacion con GitHub

GitHub **no acepta tu contraseña normal** al hacer `git push`. Opciones:

## Opcion A — SSH (recomendada, una sola vez)

### 1. Clave ya generada en tu PC

Ejecuta y **copia toda la linea** que empieza con `ssh-ed25519`:

```bash
cat ~/.ssh/id_ed25519.pub
```

### 2. Anadirla en GitHub

1. [github.com/settings/keys](https://github.com/settings/keys)
2. **New SSH key**
3. Title: `PC Biblioteca del Saber`
4. Key: pega la clave publica
5. **Add SSH key**

### 3. Subir el proyecto

```bash
cd BibliotecaDelSaber-web
git remote set-url origin git@github.com:Parzival752/biblioteca-del-saber.git
git push -u origin main
```

---

## Opcion B — Token HTTPS

1. [github.com/settings/tokens/new](https://github.com/settings/tokens/new) → **Generate new token (classic)**
2. **Generate new token (classic)**
3. Marca permisos:
   - **`repo`** (acceso completo al repositorio)
   - **`workflow`** (necesario para subir `.github/workflows/` — CI y GitHub Pages)
4. Copia el token (solo se muestra una vez)
4. Al hacer push:
   - **Username:** `Parzival752`
   - **Password:** pega el **token** (no tu contraseña de GitHub)

Si falla con *refusing to allow a Personal Access Token to create or update workflow*:
falta el permiso **`workflow`** en el token. Crea uno nuevo con **`repo` + `workflow`**.

```bash
git push -u origin main
```

---

## Despues del push

1. Repo → **Settings** → **Pages** → Source: **GitHub Actions**
2. URL: **https://Parzival752.github.io/biblioteca-del-saber/**
