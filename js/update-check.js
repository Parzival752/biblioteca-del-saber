/**
 * Detecta despliegues nuevos y obliga a recargar.
 * Cruza: meta local, version.json, index.html (bundle) y commit de GitHub.
 */

/** PENDIENTE: bajar frecuencia o cachear GitHub API (rate limit ~60/h sin auth). Se mantiene alto para demos. */
const POLL_MS = 20_000;
const FIRST_CHECK_MS = 3_000;
const BUILD_ID = typeof __APP_BUILD_ID__ !== 'undefined' ? __APP_BUILD_ID__ : '';

/** Repo para sondeo (configurable con <meta name="github-repo" content="user/repo">). */
export function getGithubRepo() {
  const meta = document.querySelector('meta[name="github-repo"]')?.content?.trim();
  return meta || 'Parzival752/biblioteca-del-saber';
}

/** Momento absoluto (Date.now) de la próxima comprobación. */
let nextCheckAt = 0;
let scheduleTimer = null;
let updateCheckerStarted = false;
let isChecking = false;
let updatePrompted = false;

export function getUpdatePollMs() {
  return POLL_MS;
}

/** Ms restantes hasta nextCheckAt (reloj absoluto; no depende del setTimeout). */
export function getMsUntilNextUpdateCheck() {
  if (isChecking || updatePrompted || !nextCheckAt) return 0;
  return Math.max(0, nextCheckAt - Date.now());
}

/**
 * Segundos enteros que faltan (ceil): con 19.2 s muestra 20, con 0.1 s muestra 1.
 * Así el número llega a 0 solo cuando toca verificar de verdad.
 */
export function formatUpdateCountdown(ms = getMsUntilNextUpdateCheck()) {
  const totalSec = Math.max(0, Math.ceil(ms / 1000));
  if (totalSec <= 0) return '0s';
  if (totalSec < 60) return `${totalSec}s`;
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** Etiqueta completa para Ajustes (lee el mismo nextCheckAt que el programador). */
export function getUpdateCheckCountdownLabel() {
  if (updatePrompted) return 'Hay una actualización: recarga para aplicarla';
  if (isChecking) return 'Verificando ahora…';
  if (!updateCheckerStarted || !nextCheckAt) return 'Programando verificación…';
  const ms = nextCheckAt - Date.now();
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
    const res = await fetch(`https://api.github.com/repos/${getGithubRepo()}/commits/main`, {
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
    // Commit en GitHub pero Pages aún no: NO forzar recarga (evita bucle)
    outdated = false;
    reason = 'github-pending';
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
  overlay.setAttribute('aria-describedby', 'updateReloadDesc');
  overlay.innerHTML = `
    <div class="update-reload-card">
      <p class="update-reload-badge">Nueva versión</p>
      <h2 id="updateReloadTitle">Actualización realizada</h2>
      <p class="update-reload-msg" id="updateReloadDesc">
        Hay una versión nueva de La Biblioteca del Saber.
        Es necesario recargar la página para ver los cambios.
      </p>
      ${detail ? `<p class="update-reload-detail">${detail}</p>` : ''}
      <button type="button" class="btn btn--primary update-reload-btn" id="btnUpdateReloadOk">OK — recargar</button>
    </div>
  `;
  document.body.appendChild(overlay);
  const btn = document.getElementById('btnUpdateReloadOk');
  btn?.addEventListener('click', () => {
    hardReload();
  });
  btn?.focus();
  const onKey = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      btn?.focus();
    }
  };
  overlay.addEventListener('keydown', onKey);
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
      return {
        result: 'update',
        message: `Tu versión: <code>${s.localId}</code> · Servidor: <code>${remote}</code>. Hay una versión nueva publicada. Recarga para aplicarla.`,
        status: s,
      };
    }
    if (s.reason === 'github-pending') {
      return {
        result: 'pending',
        message: `Hay un commit nuevo en GitHub; GitHub Pages aún no lo sirve. Versión local: <code>${s.localId}</code>.`,
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

  const clearScheduleTimer = () => {
    if (scheduleTimer) {
      clearTimeout(scheduleTimer);
      scheduleTimer = null;
    }
  };

  const run = async () => {
    if (updatePrompted || isChecking || document.hidden) return false;
    isChecking = true;
    try {
      const result = await checkForUpdate();
      if (result === 'update') {
        updatePrompted = true;
        nextCheckAt = 0;
        clearScheduleTimer();
      }
      return true;
    } finally {
      isChecking = false;
    }
  };

  /** Programa la próxima marca absoluta; el contador lee nextCheckAt, no el setTimeout. */
  const scheduleAt = (atMs) => {
    if (updatePrompted) return;
    clearScheduleTimer();
    nextCheckAt = atMs;
    const wait = Math.max(0, atMs - Date.now());
    scheduleTimer = setTimeout(async () => {
      scheduleTimer = null;
      if (document.hidden) {
        // Mantener nextCheckAt vencido; al volver a la pestaña se dispara
        return;
      }
      await run();
      if (!updatePrompted) scheduleAt(Date.now() + POLL_MS);
    }, wait);
  };

  const scheduleIn = (delayMs) => scheduleAt(Date.now() + Math.max(0, delayMs));

  scheduleIn(FIRST_CHECK_MS);

  // Al volver: si ya tocó la hora, comprobar; si no, NO reiniciar el contador
  const checkIfDue = () => {
    if (updatePrompted || document.hidden || isChecking) return;
    if (!nextCheckAt || Date.now() >= nextCheckAt) {
      scheduleIn(0);
    } else if (!scheduleTimer) {
      // Había quedado diferida por pestaña oculta: rearmar el timer
      scheduleAt(nextCheckAt);
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') checkIfDue();
  });
  window.addEventListener('focus', checkIfDue);
}
