/** Diálogos personalizados */

export function confirmDialog({
  title = 'Confirmar',
  message = '',
  html = '',
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  danger = false,
} = {}) {
  return new Promise((resolve) => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay confirm-dialog';
    overlay.innerHTML = `
      <div class="modal confirm-dialog__box">
        <h2>${title}</h2>
        ${html || `<p class="confirm-dialog__msg">${message}</p>`}
        <div class="modal-actions">
          <button type="button" class="btn btn--ghost" data-action="cancel">${cancelText}</button>
          <button type="button" class="btn ${danger ? 'btn--danger' : 'btn--primary'}" data-action="ok">${confirmText}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const close = (val) => {
      overlay.remove();
      resolve(val);
    };

    overlay.querySelector('[data-action="cancel"]')?.addEventListener('click', () => close(false));
    overlay.querySelector('[data-action="ok"]')?.addEventListener('click', () => close(true));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(false); });
    overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(false); });
    overlay.querySelector('[data-action="ok"]')?.focus();
  });
}

export function alertDialog({ title = 'Aviso', message, html = '' } = {}) {
  return new Promise((resolve) => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay confirm-dialog';
    overlay.innerHTML = `
      <div class="modal confirm-dialog__box">
        <h2>${title}</h2>
        ${html || `<p class="confirm-dialog__msg">${message}</p>`}
        <div class="modal-actions">
          <button type="button" class="btn btn--primary" data-action="ok">Entendido</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    const close = () => { overlay.remove(); resolve(); };
    overlay.querySelector('[data-action="ok"]')?.addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  });
}
