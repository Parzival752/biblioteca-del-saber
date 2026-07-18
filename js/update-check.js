/**
 * Detecta despliegues nuevos y obliga a recargar.
 * Compara el build local (meta / bundle) con index.html y version.json frescos.
 */

const POLL_MS = 15_000;
const BUILD_ID = typeof __APP_BUILD_ID__ !== 'undefined' ? __APP_BUILD_ID__ : '';

function appBase() {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
}

export function getAppVersion() {
  const meta = document.querySelector('meta[name="app-build-id"]')?.content;
  if (meta && !meta.includes('__APP_')) return meta;
  return BUILD_ID || 'dev';
}

function localBuildId() {
  return getAppVersion();
}

function localBundleName() {
  const s = document.querySelector('script[type="module"][src*="assets/"]');
  if (!s?.src) return '';
  const m = s.src.match(/assets\/(index-[^/?#]+\.js)/);
  return m?.[1] || '';
}

async function fetchText(url) {
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
  });
  if (!res.ok) return null;
  return res.text();
}

async function fetchJson(url) {
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
  });
  if (!res.ok) return null;
  return res.json();
}

/** Lee el build id y el nombre del bundle desde un HTML recién descargado. */
function parseRemoteFromHtml(html) {
  if (!html) return { id: null, bundle: null };
  const id = html.match(/name=["']app-build-id["']\s+content=["']([^"']+)["']/i)?.[1]
    || html.match(/content=["']([^"']+)["']\s+name=["']app-build-id["']/i)?.[1]
    || null;
  const bundle = html.match(/assets\/(index-[^"'/?#]+\.js)/)?.[1] || null;
  return { id, bundle };
}

async function getRemoteSnapshot() {
  const base = appBase();
  const stamp = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  // version.json es la fuente principal; el HTML confirma el bundle desplegado
  const version = await fetchJson(`${base}version.json?_cb=${stamp}`);
  let fromHtml = { id: null, bundle: null };
  try {
    const html = await fetchText(`${base}index.html?_cb=${stamp}`)
      || await fetchText(`${base}?_cb=${stamp}`);
    fromHtml = parseRemoteFromHtml(html);
  } catch {
    /* version.json basta */
  }
  return {
    id: version?.id || fromHtml.id || null,
    bundle: fromHtml.bundle,
    builtAt: version?.builtAt || null,
  };
}

function isOutdated(remote) {
  const localId = localBuildId();
  const localBundle = localBundleName();
  if (!remote?.id && !remote?.bundle) return false;
  // Normaliza ids cortos (git short vs 12 chars de GITHUB_SHA)
  if (remote.id && localId) {
    const a = remote.id.toLowerCase();
    const b = localId.toLowerCase();
    if (a !== b && !a.startsWith(b) && !b.startsWith(a)) return true;
  }
  if (remote.bundle && localBundle && remote.bundle !== localBundle) return true;
  return false;
}

export async function hardReload() {
  try {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
  } catch {
    /* ignore */
  }
  const url = new URL(location.href);
  url.searchParams.set('_refresh', String(Date.now()));
  location.replace(url.pathname + url.search + url.hash);
}

export function showUpdateModal() {
  if (document.getElementById('updateReloadOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'updateReloadOverlay';
  overlay.className = 'update-reload-overlay';
  overlay.setAttribute('role', 'alertdialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'updateReloadTitle');
  overlay.innerHTML = `
    <div class="update-reload-card">
      <p class="update-reload-badge">Nueva versión</p>
      <h2 id="updateReloadTitle">Actualización realizada</h2>
      <p class="update-reload-msg">
        Hay una versión nueva de La Biblioteca del Saber.
        Es necesario recargar la página para ver los cambios.
      </p>
      <button type="button" class="btn btn--primary update-reload-btn" id="btnUpdateReloadOk">OK — recargar</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById('btnUpdateReloadOk')?.addEventListener('click', () => {
    hardReload();
  });
  document.getElementById('btnUpdateReloadOk')?.focus();
}

/**
 * @returns {'update'|'latest'|'error'}
 */
export async function checkForUpdate({ forcePrompt = false } = {}) {
  try {
    if (forcePrompt) {
      showUpdateModal();
      return 'update';
    }
    const remote = await getRemoteSnapshot();
    if (!remote?.id && !remote?.bundle) return 'error';
    if (isOutdated(remote)) {
      showUpdateModal();
      return 'update';
    }
    return 'latest';
  } catch (err) {
    console.warn('[update-check]', err);
    return 'error';
  }
}

export function startUpdateChecker() {
  const params = new URLSearchParams(location.search);
  // Prueba manual: ?forceUpdate=1 muestra el aviso al instante
  if (params.has('forceUpdate')) {
    setTimeout(() => showUpdateModal(), 600);
  }

  let prompted = false;
  let checking = false;

  const run = async () => {
    if (prompted || checking || document.hidden) return;
    checking = true;
    try {
      const result = await checkForUpdate();
      if (result === 'update') prompted = true;
    } finally {
      checking = false;
    }
  };

  setTimeout(run, 2_500);
  setInterval(run, POLL_MS);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') run();
  });
  window.addEventListener('focus', run);
}
