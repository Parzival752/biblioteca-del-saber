/**
 * Detecta despliegues nuevos y obliga a recargar.
 * Cruza: meta local, version.json, index.html (bundle) y commit de GitHub.
 */

const POLL_MS = 20_000;
const FIRST_CHECK_MS = 3_000;
const BUILD_ID = typeof __APP_BUILD_ID__ !== 'undefined' ? __APP_BUILD_ID__ : '';
const GITHUB_REPO = 'Parzival752/biblioteca-del-saber';

/** Timestamp (ms) de la próxima comprobación automática. */
let nextCheckAt = 0;
let scheduleTimer = null;
let updateCheckerStarted = false;
let isChecking = false;
let updatePrompted = false;

export function getUpdatePollMs() {
  return POLL_MS;
}

/** Ms restantes hasta la próxima verificación automática (0 si toca ya o está comprobando). */
export function getMsUntilNextUpdateCheck() {
  if (isChecking || updatePrompted || !nextCheckAt) return 0;
  return Math.max(0, nextCheckAt - Date.now());
}

/** Texto corto tipo "18s" o "1:05" (segundos enteros hacia abajo). */
export function formatUpdateCountdown(ms = getMsUntilNextUpdateCheck()) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  if (totalSec <= 0) return '0s';
  if (totalSec < 60) return `${totalSec}s`;
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** Etiqueta completa para Ajustes (sincronizada con el programador real). */
export function getUpdateCheckCountdownLabel() {
  if (updatePrompted) return 'Hay una actualización: recarga para aplicarla';
  if (isChecking) return 'Verificando ahora…';
  if (!updateCheckerStarted || !nextCheckAt) return 'Programando verificación…';
  const ms = getMsUntilNextUpdateCheck();
  if (ms <= 0) return 'Verificando ahora…';
  return `Próxima verificación en ${formatUpdateCountdown(ms)}`;
}

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

/** Compara ids de git (7–12 hex) sin falsos positivos por prefijo. */
export function normalizeVersionId(id) {
  const hex = String(id || '').toLowerCase().replace(/[^a-f0-9]/g, '');
  return hex.slice(0, 7);
}

function sameVersion(a, b) {
  const na = normalizeVersionId(a);
  const nb = normalizeVersionId(b);
  return Boolean(na && nb && na === nb);
}

async function fetchText(url) {
  const res = await fetch(url, { cache: 'no-store', headers: { Pragma: 'no-cache' } });
  if (!res.ok) return null;
  return res.text();
}

async function fetchJson(url) {
  const res = await fetch(url, { cache: 'no-store', headers: { Pragma: 'no-cache' } });
  if (!res.ok) return null;
  return res.json();
}

function parseRemoteFromHtml(html) {
  if (!html) return { id: null, bundle: null };
  const id = html.match(/name=["']app-build-id["']\s+content=["']([^"']+)["']/i)?.[1]
    || html.match(/content=["']([^"']+)["']\s+name=["']app-build-id["']/i)?.[1]
    || null;
  const bundle = html.match(/assets\/(index-[^"'/?#]+\.js)/)?.[1] || null;
  return { id, bundle };
}

async function fetchGithubMainId() {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/commits/main`, {
      cache: 'no-store',
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.sha ? String(data.sha).slice(0, 12) : null;
  } catch {
    return null;
  }
}

/**
 * @returns {{ localId: string, localBundle: string, pagesId: string|null, pagesBundle: string|null, githubId: string|null, outdated: boolean, reason: string }}
 */
export async function getUpdateStatus() {
  const localId = localBuildId();
  const localBundle = localBundleName();
  const base = appBase();
  const stamp = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const [version, html, githubId] = await Promise.all([
    fetchJson(`${base}version.json?_=${stamp}`),
    fetchText(`${base}index.html?_=${stamp}`).then(async (t) => t || fetchText(`${base}?_=${stamp}`)),
    fetchGithubMainId(),
  ]);

  const fromHtml = parseRemoteFromHtml(html);
  const pagesId = version?.id || fromHtml.id || null;
  const pagesBundle = fromHtml.bundle || null;

  let outdated = false;
  let reason = 'latest';

  if (pagesBundle && localBundle && pagesBundle !== localBundle) {
    outdated = true;
    reason = 'bundle';
  } else if (pagesId && localId && !sameVersion(pagesId, localId)) {
    outdated = true;
    reason = 'pages';
  } else if (githubId && localId && !sameVersion(githubId, localId)) {
    // Commit nuevo en GitHub (Pages a veces tarda 1–2 min por caché CDN)
    outdated = true;
    reason = 'github';
  }

  return {
    localId,
    localBundle,
    pagesId,
    pagesBundle,
    githubId,
    outdated,
    reason,
  };
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

export function showUpdateModal({ detail = '' } = {}) {
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
      ${detail ? `<p class="update-reload-detail">${detail}</p>` : ''}
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
    const status = await getUpdateStatus();
    if (!status.pagesId && !status.githubId && !status.pagesBundle) return 'error';
    if (status.outdated) {
      const remote = status.pagesId || status.githubId || '?';
      showUpdateModal({
        detail: `Tu versión: ${status.localId || '?'} · Servidor: ${remote}`,
      });
      return 'update';
    }
    return 'latest';
  } catch (err) {
    console.warn('[update-check]', err);
    return 'error';
  }
}

/** Para el panel de Ajustes: texto legible del último chequeo. */
export async function describeUpdateCheck() {
  try {
    const s = await getUpdateStatus();
    const remote = s.pagesId || s.githubId || '—';
    if (!s.pagesId && !s.githubId) {
      return { result: 'error', message: 'No se pudo contactar al servidor.', status: s };
    }
    if (s.outdated) {
      const hint = s.reason === 'github'
        ? 'Hay un commit nuevo; si acabas de publicar, espera 1–2 min y vuelve a buscar.'
        : 'Hay una versión nueva. Recarga para aplicarla.';
      return {
        result: 'update',
        message: `Tu versión: <code>${s.localId}</code> · Servidor: <code>${remote}</code>. ${hint}`,
        status: s,
      };
    }
    return {
      result: 'latest',
      message: `✓ Estás al día. Versión: <code>${s.localId}</code>`,
      status: s,
    };
  } catch (err) {
    console.warn('[update-check]', err);
    return { result: 'error', message: 'No se pudo comprobar la actualización.', status: null };
  }
}

export function startUpdateChecker() {
  if (updateCheckerStarted) return;
  updateCheckerStarted = true;

  const params = new URLSearchParams(location.search);
  if (params.has('forceUpdate')) {
    setTimeout(() => showUpdateModal(), 600);
  }

  const run = async () => {
    if (updatePrompted || isChecking || document.hidden) return false;
    isChecking = true;
    try {
      const result = await checkForUpdate();
      if (result === 'update') {
        updatePrompted = true;
        nextCheckAt = 0;
        if (scheduleTimer) {
          clearTimeout(scheduleTimer);
          scheduleTimer = null;
        }
      }
      return true;
    } finally {
      isChecking = false;
    }
  };

  const schedule = (delayMs) => {
    if (updatePrompted) return;
    if (scheduleTimer) clearTimeout(scheduleTimer);
    const wait = Math.max(0, delayMs);
    nextCheckAt = Date.now() + wait;
    scheduleTimer = setTimeout(async () => {
      scheduleTimer = null;
      // Marca “tocó ahora” mientras corre la petición
      nextCheckAt = Date.now();
      await run();
      if (!updatePrompted) schedule(POLL_MS);
    }, wait);
  };

  schedule(FIRST_CHECK_MS);

  // Solo comprobar al volver si ya pasó la hora (no reiniciar el contador al enfocar)
  const checkIfDue = () => {
    if (updatePrompted || document.hidden || isChecking) return;
    if (!nextCheckAt || Date.now() >= nextCheckAt) {
      schedule(0);
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') checkIfDue();
  });
  window.addEventListener('focus', checkIfDue);
}
