import '../css/styles.css';
import { App } from './app.js';
import { startUpdateChecker } from './update-check.js';

// Limpia el marcador de recarga forzada para no ensuciar la URL
if (location.search.includes('_refresh=')) {
  const url = new URL(location.href);
  url.searchParams.delete('_refresh');
  history.replaceState(null, '', url.pathname + url.search + url.hash);
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  document.getElementById('btnCloseModal')?.addEventListener('click', () => app.closeModal());
  document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') app.closeModal();
  });
  startUpdateChecker();
});
