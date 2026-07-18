/**
 * Detecta despliegues nuevos y obliga a recargar para no quedar con JS/CSS viejo.
 * Compara el BUILD_ID embebido en el bundle con public/version.json del servidor.
 */

const POLL_MS = 45_000;
const BUILD_ID = typeof __APP_BUILD_ID__ !== 'undefined' ? __APP_BUILD_ID__ : '';

function versionUrl() {
  const base = import.meta.env.BASE_URL || '/';
  const normalized = base.endsWith('/') ? base : `${base}/`;
  return `${normalized}version.json?t=${Date.now()}`;
}

async function fetchRemoteVersion() {
  const res = await fetch(versionUrl(), {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
  });
  if (!res.ok) return null;
  return res.json();
}

async function hardReload() {
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

function showUpdateModal() {
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

export function startUpdateChecker() {
  if (!BUILD_ID || BUILD_ID === 'dev') return;

  let prompted = false;

  const check = async () => {
    if (prompted || document.hidden) return;
    try {
      const remote = await fetchRemoteVersion();
      if (!remote?.id) return;
      if (remote.id !== BUILD_ID) {
        prompted = true;
        showUpdateModal();
      }
    } catch {
      /* red / offline */
    }
  };

  // Primera comprobación tras un momento (deja cargar la app)
  setTimeout(check, 4_000);
  setInterval(check, POLL_MS);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') check();
  });
  window.addEventListener('focus', check);
}
