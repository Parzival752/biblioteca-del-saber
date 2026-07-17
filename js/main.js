import '../css/styles.css';
import { App } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  document.getElementById('btnCloseModal')?.addEventListener('click', () => app.closeModal());
  document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') app.closeModal();
  });
});
