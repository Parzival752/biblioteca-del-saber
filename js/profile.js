/** Perfil del explorador — La Biblioteca del Saber · Alebrijes */
import { renderCourseIcon } from './courses/registry.js';
import { avatarConfigToSrc, isCustomAvatarId, normalizeAvatarConfig } from './avatar-builder.js';
import { getCustomAvatars, getCustomAvatar } from './storage.js';

const ALEBRIJE_BASE = 'assets/alebrijes';
const AVATAR_BASE = 'assets/avatars';
const MAESTRO_ICON = `${ALEBRIJE_BASE}/maestro.svg?v=2`;

const LEGACY_AVATAR_MAP = { wolf: 'alebrije', fox: 'alebrije2', egg: 'alebrije' };

export const AVATARS = [
  { id: 'alebrije', label: 'Maestro Alebrije', src: MAESTRO_ICON },
  { id: 'alebrije5', label: 'Alebrije Luna', src: `${ALEBRIJE_BASE}/luna.svg` },
  { id: 'alebrije6', label: 'Alebrije Sol', src: `${ALEBRIJE_BASE}/sol.svg` },
  { id: 'caballero', label: 'Caballero épico', src: `${AVATAR_BASE}/caballero.svg` },
  { id: 'alebrije2', label: 'Alebrije Fuego', src: `${AVATAR_BASE}/phoenix.svg` },
  { id: 'alebrije3', label: 'Alebrije Agua', src: `${AVATAR_BASE}/dragon.svg` },
  { id: 'alebrije4', label: 'Alebrije Tierra', src: `${AVATAR_BASE}/fox.svg` },
  { id: 'wolf', label: 'Lobo', src: `${AVATAR_BASE}/wolf.svg` },
  { id: 'eagle', label: 'Águila', src: `${AVATAR_BASE}/eagle.svg` },
  { id: 'lion', label: 'León', src: `${AVATAR_BASE}/lion.svg` },
  { id: 'viking', label: 'Vikingo', src: `${AVATAR_BASE}/viking.svg` },
  { id: 'ninja', label: 'Ninja', src: `${AVATAR_BASE}/ninja.svg` },
  { id: 'astronaut', label: 'Astronauta', src: `${AVATAR_BASE}/astronaut.svg` },
  { id: 'phoenix', label: 'Fénix', src: `${AVATAR_BASE}/phoenix.svg` },
  { id: 'lightning', label: 'Rayo', src: `${AVATAR_BASE}/lightning.svg` },
];

export const LEVEL_TIERS = ['novato', 'aprendiz', 'explorador', 'sabio', 'alebrije'];

const MESSAGES = {
  complete: [
    (n) => `¡Excelente, ${n}! El Maestro Alebrije está orgulloso de ti.`,
    (n) => `${n}, cada lección llena un estante más en tu biblioteca del saber.`,
    (n) => `¡Bravo ${n}! Código, naturaleza o supervivencia — tú dominas.`,
    (n) => `${n}, el alebrije dice: ¡sigue explorando!`,
  ],
  welcome: [
    (n) => `¡Hola de nuevo, ${n}! La biblioteca te espera.`,
    (n) => `${n}, retoma donde lo dejaste — el alebrije te acompaña.`,
  ],
  first: [
    (n) => `¡Bienvenido/a, ${n}! El Maestro Alebrije te guiará por todos los saberes.`,
  ],
  levelUp: [(n, lvl) => `¡${n} subió de nivel! Ahora eres ${lvl}. 🎉`],
};

export function resolveAvatarId(avatarId) {
  return LEGACY_AVATAR_MAP[avatarId] || avatarId;
}

export function getCustomAvatarMeta(id) {
  const custom = getCustomAvatar(id);
  if (!custom) return null;
  return {
    id: custom.id,
    label: custom.label,
    src: avatarConfigToSrc(normalizeAvatarConfig(custom.config)),
    isCustom: true,
  };
}

export function getAvatarMeta(avatarId) {
  const id = resolveAvatarId(avatarId);
  if (isCustomAvatarId(id)) {
    return getCustomAvatarMeta(id) || AVATARS[0];
  }
  return AVATARS.find((a) => a.id === id) || AVATARS[0];
}

export function getAvatarSrc(avatarId) {
  return getAvatarMeta(avatarId).src;
}

export function getDisplayName(name) {
  const trimmed = (name || '').trim();
  return trimmed || 'Explorador/a';
}

export function getMotivationalMessage(name, context = 'complete', extra = '') {
  const n = getDisplayName(name);
  if (context === 'levelUp' && extra) {
    return MESSAGES.levelUp[0](n, extra);
  }
  const list = MESSAGES[context] || MESSAGES.complete;
  const fn = list[Math.floor(Math.random() * list.length)];
  return fn(n);
}

function renderCustomAvatarPick(custom, selectedId) {
  const src = avatarConfigToSrc(normalizeAvatarConfig(custom.config));
  const active = custom.id === selectedId ? ' avatar-pick--active' : '';
  const safeLabel = custom.label.replace(/"/g, '&quot;');
  return `
    <div class="avatar-pick-wrap avatar-pick-wrap--custom">
      <button type="button" class="avatar-pick avatar-pick--custom${active}"
        data-avatar-id="${custom.id}" title="${safeLabel}" aria-label="Avatar ${safeLabel}">
        <img class="avatar-pick__img" src="${src}" alt="" width="48" height="48" loading="lazy" decoding="async">
      </button>
      <div class="avatar-pick__actions">
        <button type="button" class="avatar-pick__action avatar-pick__edit" data-avatar-edit="${custom.id}" title="Editar" aria-label="Editar ${safeLabel}">✎</button>
        <button type="button" class="avatar-pick__action avatar-pick__delete" data-avatar-delete="${custom.id}" title="Eliminar" aria-label="Eliminar ${safeLabel}">×</button>
      </div>
    </div>`;
}

export function renderAvatarPicker(selectedId = 'alebrije', { showCreate = true } = {}) {
  const resolved = resolveAvatarId(selectedId);
  const customAvatars = getCustomAvatars();
  const defaults = AVATARS.map((a) => `
    <button type="button" class="avatar-pick${a.id === resolved ? ' avatar-pick--active' : ''}"
      data-avatar-id="${a.id}" title="${a.label}" aria-label="Avatar ${a.label}">
      <img class="avatar-pick__img" src="${a.src}" alt="" width="48" height="48" loading="lazy" decoding="async">
    </button>
  `).join('');

  const customs = customAvatars.map((c) => renderCustomAvatarPick(c, resolved)).join('');
  const createBtn = showCreate ? `
    <button type="button" class="avatar-pick avatar-pick--create" data-avatar-action="create"
      title="Crear avatar personalizado" aria-label="Crear avatar personalizado">
      <span class="avatar-pick__plus">+</span>
      <span class="avatar-pick__create-label">Crear</span>
    </button>` : '';

  return `
    <p class="avatar-picker__section-label">Predeterminados</p>
    <div class="avatar-picker__group">${defaults}</div>
    ${customAvatars.length || showCreate ? `
      <p class="avatar-picker__section-label">Tus avatares <span class="avatar-picker__hint">— ✎ editar · × borrar</span></p>
      <div class="avatar-picker__group avatar-picker__group--custom">${customs}${createBtn}</div>
    ` : ''}
  `;
}

export function renderAvatarHtml(avatarId, tier = 'novato', size = 'md') {
  const meta = getAvatarMeta(avatarId);
  const tierClass = LEVEL_TIERS.includes(tier) ? tier : 'novato';
  return `<span class="avatar avatar--${size} avatar--tier-${tierClass}" aria-hidden="true">
    <img class="avatar__img" src="${meta.src}" alt="${meta.label}" width="64" height="64" loading="lazy" decoding="async">
  </span>`;
}

export function bindAvatarPicker(container, onSelect, { onCreate, onEdit, onDelete } = {}) {
  if (!container) return;
  container.querySelectorAll('[data-avatar-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.avatar-pick').forEach((b) => b.classList.remove('avatar-pick--active'));
      btn.classList.add('avatar-pick--active');
      onSelect?.(btn.dataset.avatarId);
    });
  });
  container.querySelector('[data-avatar-action="create"]')?.addEventListener('click', () => onCreate?.());
  container.querySelectorAll('[data-avatar-edit]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      onEdit?.(btn.dataset.avatarEdit);
    });
  });
  container.querySelectorAll('[data-avatar-delete]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      onDelete?.(btn.dataset.avatarDelete);
    });
  });
}

export function getLevelTier(levelInfo) {
  const idx = levelInfo?.tier ?? 0;
  return LEVEL_TIERS[idx] || 'novato';
}

const COURSE_STATUS_LABEL = {
  completado: 'Completado',
  en_progreso: 'En progreso',
  nuevo: 'Recién empezado',
};

export function renderStudyingCoursesHtml(overview) {
  if (!overview.length) {
    return '<p class="modal-tip">Elige un saber desde la bienvenida o el botón Añadir.</p>';
  }
  return overview.map((c) => `
    <article class="course-progress-item${c.isActive ? ' course-progress-item--active' : ''}" style="--course-color:${c.color}">
      <div class="course-progress-item__head">
        <span class="course-progress-item__icon">${renderCourseIcon({ icon: c.icon }, 32)}</span>
        <div class="course-progress-item__info">
          <strong>${c.name}</strong>
          <span>${c.completed}/${c.total} lecciones · ${c.xp} XP</span>
        </div>
        <span class="course-progress-item__pct">${c.percent}%</span>
      </div>
      <div class="course-progress-bar" role="progressbar" aria-valuenow="${c.percent}" aria-valuemin="0" aria-valuemax="100">
        <div class="course-progress-bar__fill" style="width:${c.percent}%"></div>
      </div>
      <div class="course-progress-item__foot">
        <span class="course-progress-item__status course-progress-item__status--${c.status}">${COURSE_STATUS_LABEL[c.status] || c.status}</span>
        ${c.isActive
    ? '<span class="course-progress-item__badge">Activo ahora</span>'
    : `<button type="button" class="btn btn--ghost btn--sm" data-switch-course="${c.id}">Cambiar a este</button>`}
      </div>
    </article>`).join('');
}

export function renderStudyingCoursesCompact(overview) {
  if (!overview.length) return '';
  return overview.map((c) => `
    <button type="button" class="studying-chip${c.isActive ? ' studying-chip--active' : ''}"
      data-switch-course="${c.id}" style="--course-color:${c.color}" title="${c.name}: ${c.percent}%">
      ${renderCourseIcon({ icon: c.icon }, 18)}
      <span>${c.name}</span>
      <em>${c.percent}%</em>
    </button>`).join('');
}

export function bindStudyingCourseActions(container, onSwitch) {
  if (!container) return;
  container.querySelectorAll('[data-switch-course]').forEach((btn) => {
    btn.addEventListener('click', () => onSwitch?.(btn.dataset.switchCourse));
  });
}
