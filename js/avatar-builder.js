/** Constructor de avatares personalizados — estilo alebrije mejorado */

export const CUSTOM_AVATAR_PREFIX = 'custom-';
export const MAX_CUSTOM_AVATARS = 12;

export const DEFAULT_AVATAR_CONFIG = {
  label: 'Mi avatar',
  bg: 'alebrije',
  face: 'round',
  skin: '#f0c4a0',
  body: 'blob',
  hair: 'short',
  hairColor: '#3d2314',
  ears: 'cat',
  eyes: 'happy',
  eyeColor: '#1a1024',
  mouth: 'smile',
  horns: 'curved',
  wings: 'small',
  tail: 'fox',
  pattern: 'spots',
  markings: 'none',
  accent: '#f472b6',
  accent2: '#38bdf8',
  aura: 'none',
  accessory: 'none',
  frame: 'ring',
};

export const AVATAR_BG_PRESETS = [
  { id: 'alebrije', label: 'Alebrije', colors: ['#f472b6', '#38bdf8', '#a78bfa'] },
  { id: 'sunset', label: 'Atardecer', colors: ['#fb923c', '#f472b6', '#7c3aed'] },
  { id: 'ocean', label: 'Océano', colors: ['#0ea5e9', '#06b6d4', '#2563eb'] },
  { id: 'forest', label: 'Bosque', colors: ['#22c55e', '#16a34a', '#14532d'] },
  { id: 'night', label: 'Noche', colors: ['#312e81', '#1e1b4b', '#0f172a'] },
  { id: 'fire', label: 'Fuego', colors: ['#ef4444', '#f97316', '#eab308'] },
  { id: 'galaxy', label: 'Galaxia', colors: ['#4c1d95', '#7c3aed', '#ec4899'] },
  { id: 'candy', label: 'Dulce', colors: ['#fda4af', '#f9a8d4', '#c4b5fd'] },
  { id: 'neon', label: 'Neón', colors: ['#22d3ee', '#a855f7', '#f472b6'] },
];

export const AVATAR_OPTIONS = {
  face: [
    { id: 'round', label: 'Redonda' },
    { id: 'oval', label: 'Ovalada' },
    { id: 'wide', label: 'Ancha' },
    { id: 'heart', label: 'Corazón' },
  ],
  body: [
    { id: 'round', label: 'Redondo' },
    { id: 'blob', label: 'Alebrije' },
    { id: 'slim', label: 'Eslabón' },
  ],
  hair: [
    { id: 'none', label: 'Sin pelo' },
    { id: 'short', label: 'Corto' },
    { id: 'long', label: 'Largo' },
    { id: 'spiky', label: 'Espinas' },
    { id: 'mohawk', label: 'Mohawk' },
    { id: 'curly', label: 'Rizado' },
    { id: 'braids', label: 'Trenzas' },
    { id: 'afro', label: 'Afro' },
  ],
  ears: [
    { id: 'none', label: 'Sin orejas' },
    { id: 'cat', label: 'Gato' },
    { id: 'fox', label: 'Zorro' },
    { id: 'bunny', label: 'Conejo' },
    { id: 'round', label: 'Redondas' },
  ],
  eyes: [
    { id: 'round', label: 'Redondos' },
    { id: 'happy', label: 'Alegres' },
    { id: 'star', label: 'Estrella' },
    { id: 'cat', label: 'Felinos' },
    { id: 'glow', label: 'Brillantes' },
    { id: 'sleepy', label: 'Soñolientos' },
  ],
  mouth: [
    { id: 'smile', label: 'Sonrisa' },
    { id: 'grin', label: 'Gran sonrisa' },
    { id: 'neutral', label: 'Neutra' },
    { id: 'open', label: 'Sorprendida' },
    { id: 'fangs', label: 'Colmillos' },
  ],
  horns: [
    { id: 'none', label: 'Sin cuernos' },
    { id: 'curved', label: 'Curvos' },
    { id: 'straight', label: 'Rectos' },
    { id: 'double', label: 'Doble' },
    { id: 'uni', label: 'Unicornio' },
  ],
  wings: [
    { id: 'none', label: 'Sin alas' },
    { id: 'small', label: 'Pequeñas' },
    { id: 'butterfly', label: 'Mariposa' },
    { id: 'dragon', label: 'Dragón' },
    { id: 'angel', label: 'Plumas' },
  ],
  tail: [
    { id: 'none', label: 'Sin cola' },
    { id: 'fox', label: 'Zorro' },
    { id: 'dragon', label: 'Dragón' },
    { id: 'flame', label: 'Llama' },
  ],
  pattern: [
    { id: 'none', label: 'Liso' },
    { id: 'spots', label: 'Manchas' },
    { id: 'stripes', label: 'Rayas' },
    { id: 'stars', label: 'Estrellas' },
    { id: 'scales', label: 'Escamas' },
  ],
  markings: [
    { id: 'none', label: 'Ninguna' },
    { id: 'mask', label: 'Máscara' },
    { id: 'tribal', label: 'Tribal' },
    { id: 'cheeks', label: 'Mejillas' },
    { id: 'freckles', label: 'Pecas' },
  ],
  aura: [
    { id: 'none', label: 'Sin aura' },
    { id: 'glow', label: 'Resplandor' },
    { id: 'sparkles', label: 'Destellos' },
    { id: 'rings', label: 'Anillos' },
  ],
  accessory: [
    { id: 'none', label: 'Ninguno' },
    { id: 'glasses', label: 'Lentes' },
    { id: 'crown', label: 'Corona' },
    { id: 'book', label: 'Libro' },
    { id: 'flower', label: 'Flor' },
    { id: 'headphones', label: 'Audífonos' },
    { id: 'scarf', label: 'Bufanda' },
  ],
  frame: [
    { id: 'none', label: 'Sin marco' },
    { id: 'ring', label: 'Anillo' },
    { id: 'star', label: 'Estrella' },
    { id: 'hex', label: 'Hexágono' },
  ],
};

export const AVATAR_PRESETS = [
  {
    id: 'classic',
    label: 'Alebrije clásico',
    config: { bg: 'alebrije', horns: 'curved', wings: 'small', tail: 'fox', pattern: 'spots', accent: '#f472b6', accent2: '#38bdf8', ears: 'cat', frame: 'ring' },
  },
  {
    id: 'dragon',
    label: 'Dragón',
    config: { bg: 'fire', skin: '#fcd34d', horns: 'straight', wings: 'dragon', tail: 'dragon', eyes: 'cat', mouth: 'fangs', pattern: 'scales', accent: '#ef4444', accent2: '#f97316', markings: 'mask', aura: 'glow' },
  },
  {
    id: 'forest',
    label: 'Espíritu del bosque',
    config: { bg: 'forest', skin: '#86efac', hair: 'curly', hairColor: '#14532d', ears: 'fox', wings: 'butterfly', tail: 'fox', accessory: 'flower', accent: '#22c55e', accent2: '#fde68a', pattern: 'stars' },
  },
  {
    id: 'galaxy',
    label: 'Cosmos',
    config: { bg: 'galaxy', skin: '#c4b5fd', eyes: 'glow', horns: 'uni', wings: 'angel', aura: 'sparkles', pattern: 'stars', accent: '#a78bfa', accent2: '#38bdf8', frame: 'star' },
  },
  {
    id: 'scholar',
    label: 'Sabio',
    config: { bg: 'night', skin: '#f5dcc8', hair: 'long', hairColor: '#3d2314', eyes: 'round', accessory: 'glasses', accent: '#38bdf8', accent2: '#facc15', frame: 'hex', horns: 'none', wings: 'none' },
  },
];

export const SKIN_SWATCHES = ['#f5dcc8', '#f0c4a0', '#d4a574', '#a97142', '#6b4423', '#ffd1dc', '#c4b5fd', '#86efac', '#fcd34d', '#67e8f9'];
export const HAIR_SWATCHES = ['#1a1024', '#3d2314', '#78350f', '#ca8a04', '#dc2626', '#7c3aed', '#38bdf8', '#f472b6', '#ffffff', '#22c55e'];
export const ACCENT_SWATCHES = ['#f472b6', '#38bdf8', '#a78bfa', '#4ade80', '#fb923c', '#facc15', '#f87171', '#ffffff', '#22d3ee', '#ec4899'];

const OPTION_KEYS = Object.keys(AVATAR_OPTIONS);

let svgUidCounter = 0;

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function isCustomAvatarId(id) {
  return typeof id === 'string' && id.startsWith(CUSTOM_AVATAR_PREFIX);
}

export function createCustomAvatarId() {
  return `${CUSTOM_AVATAR_PREFIX}${Math.random().toString(36).slice(2, 8)}`;
}

export function normalizeAvatarConfig(input = {}) {
  const cfg = { ...DEFAULT_AVATAR_CONFIG, ...input };
  cfg.label = String(cfg.label || 'Mi avatar').trim().slice(0, 20) || 'Mi avatar';
  if (!AVATAR_BG_PRESETS.some((b) => b.id === cfg.bg)) cfg.bg = DEFAULT_AVATAR_CONFIG.bg;
  for (const key of OPTION_KEYS) {
    if (!AVATAR_OPTIONS[key].some((o) => o.id === cfg[key])) cfg[key] = DEFAULT_AVATAR_CONFIG[key];
  }
  if (!ACCENT_SWATCHES.includes(cfg.accent2) && typeof cfg.accent2 !== 'string') cfg.accent2 = DEFAULT_AVATAR_CONFIG.accent2;
  return cfg;
}

export function randomAvatarConfig(base = {}) {
  const pick = (key) => {
    const opts = AVATAR_OPTIONS[key];
    return opts[Math.floor(Math.random() * opts.length)].id;
  };
  const pickColor = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const pickBg = () => AVATAR_BG_PRESETS[Math.floor(Math.random() * AVATAR_BG_PRESETS.length)].id;

  return normalizeAvatarConfig({
    ...base,
    bg: pickBg(),
    face: pick('face'),
    body: pick('body'),
    skin: pickColor(SKIN_SWATCHES),
    hair: pick('hair'),
    hairColor: pickColor(HAIR_SWATCHES),
    ears: pick('ears'),
    eyes: pick('eyes'),
    eyeColor: pickColor(['#1a1024', '#312e81', '#0f766e', '#7c2d12', '#ffffff']),
    mouth: pick('mouth'),
    horns: pick('horns'),
    wings: pick('wings'),
    tail: pick('tail'),
    pattern: pick('pattern'),
    markings: pick('markings'),
    accent: pickColor(ACCENT_SWATCHES),
    accent2: pickColor(ACCENT_SWATCHES),
    aura: pick('aura'),
    accessory: pick('accessory'),
    frame: pick('frame'),
  });
}

function nextSvgUid() {
  svgUidCounter += 1;
  return `ab${svgUidCounter}`;
}

function getBgPreset(id) {
  return AVATAR_BG_PRESETS.find((b) => b.id === id) || AVATAR_BG_PRESETS[0];
}

function facePath(face) {
  if (face === 'oval') return 'M32 19 C22 19 15 28 15 37 C15 47 22 53 32 53 C42 53 49 47 49 37 C49 28 42 19 32 19 Z';
  if (face === 'wide') return 'M32 21 C19 21 13 31 13 37 C13 47 21 52 32 52 C43 52 51 47 51 37 C51 31 45 21 32 21 Z';
  if (face === 'heart') return 'M32 20 C24 20 17 27 17 35 C17 44 24 52 32 54 C40 52 47 44 47 35 C47 27 40 20 32 20 Z';
  return 'M32 21 C22 21 16 29 16 37 C16 47 24 52 32 52 C40 52 48 47 48 37 C48 29 42 21 32 21 Z';
}

function renderBody(body, skin, accent, accent2) {
  if (body === 'slim') {
    return `<ellipse cx="32" cy="54" rx="14" ry="10" fill="${skin}" opacity="0.9"/>
      <path d="M20 48 Q32 44 44 48 L42 58 Q32 60 22 58 Z" fill="${accent}" opacity="0.35"/>`;
  }
  if (body === 'blob') {
    return `<path d="M18 46 Q10 52 14 58 Q32 64 50 58 Q54 52 46 46 Q32 42 18 46 Z" fill="${accent2}" opacity="0.55"/>
      <ellipse cx="32" cy="54" rx="18" ry="11" fill="${skin}"/>
      <circle cx="24" cy="52" r="4" fill="${accent}" opacity="0.45"/>
      <circle cx="40" cy="53" r="3.5" fill="${accent2}" opacity="0.4"/>`;
  }
  return `<ellipse cx="32" cy="54" rx="16" ry="10" fill="${skin}" opacity="0.85"/>`;
}

function renderPattern(pattern, accent, accent2) {
  switch (pattern) {
    case 'spots':
      return `<circle cx="16" cy="20" r="3.5" fill="${accent}" opacity="0.4"/>
        <circle cx="48" cy="24" r="3" fill="${accent2}" opacity="0.35"/>
        <circle cx="44" cy="50" r="2.5" fill="${accent}" opacity="0.3"/>
        <circle cx="12" cy="44" r="2" fill="${accent2}" opacity="0.28"/>`;
    case 'stripes':
      return `<path d="M6 16 Q32 26 58 16" fill="none" stroke="${accent}" stroke-width="3" opacity="0.28" stroke-linecap="round"/>
        <path d="M4 32 Q32 42 60 32" fill="none" stroke="${accent2}" stroke-width="2.5" opacity="0.25" stroke-linecap="round"/>
        <path d="M8 48 Q32 56 56 48" fill="none" stroke="${accent}" stroke-width="2" opacity="0.22" stroke-linecap="round"/>`;
    case 'stars':
      return `<text x="14" y="20" font-size="6" fill="${accent}" opacity="0.7">✦</text>
        <text x="50" y="18" font-size="5" fill="${accent2}" opacity="0.65">✦</text>
        <text x="46" cy="52" y="52" font-size="5" fill="${accent}" opacity="0.55">✦</text>
        <text x="10" y="46" font-size="4" fill="${accent2}" opacity="0.5">✦</text>`;
    case 'scales':
      return `<path d="M10 24 Q14 20 18 24 Q14 28 10 24" fill="${accent}" opacity="0.25"/>
        <path d="M22 18 Q26 14 30 18 Q26 22 22 18" fill="${accent2}" opacity="0.22"/>
        <path d="M34 16 Q38 12 42 16 Q38 20 34 16" fill="${accent}" opacity="0.2"/>
        <path d="M46 22 Q50 18 54 22 Q50 26 46 22" fill="${accent2}" opacity="0.22"/>`;
    default:
      return '';
  }
}

function renderAura(aura, accent, accent2, uid) {
  if (aura === 'none') return '';
  const glowId = `glow-${uid}`;
  if (aura === 'glow') {
    return `<defs><radialGradient id="${glowId}"><stop offset="0%" stop-color="${accent}" stop-opacity="0.45"/><stop offset="100%" stop-color="${accent}" stop-opacity="0"/></radialGradient></defs>
      <circle cx="32" cy="34" r="28" fill="url(#${glowId})"/>`;
  }
  if (aura === 'sparkles') {
    return `<circle cx="32" cy="34" r="27" fill="none" stroke="${accent2}" stroke-width="1" opacity="0.35" stroke-dasharray="3 4"/>
      <text x="8" y="14" font-size="5" fill="${accent}">✦</text><text x="52" y="12" font-size="4" fill="${accent2}">✦</text>
      <text x="54" y="54" font-size="5" fill="${accent}">✦</text><text x="6" y="50" font-size="4" fill="${accent2}">✦</text>`;
  }
  return `<circle cx="32" cy="34" r="28" fill="none" stroke="${accent}" stroke-width="1.2" opacity="0.35"/>
    <circle cx="32" cy="34" r="24" fill="none" stroke="${accent2}" stroke-width="0.8" opacity="0.3"/>`;
}

function renderFrame(frame, accent, accent2) {
  switch (frame) {
    case 'ring':
      return `<circle cx="32" cy="32" r="29" fill="none" stroke="${accent}" stroke-width="2.5" opacity="0.85"/>
        <circle cx="32" cy="32" r="26" fill="none" stroke="${accent2}" stroke-width="1" opacity="0.5"/>`;
    case 'star':
      return `<polygon points="32,4 37,22 56,22 41,33 47,52 32,41 17,52 23,33 8,22 27,22" fill="none" stroke="${accent}" stroke-width="1.8" opacity="0.75" transform="scale(0.92) translate(2.6,2.6)"/>`;
    case 'hex':
      return `<polygon points="32,6 52,18 52,46 32,58 12,46 12,18" fill="none" stroke="${accent2}" stroke-width="2" opacity="0.7"/>`;
    default:
      return '';
  }
}

function renderEars(ears, skin, accent) {
  switch (ears) {
    case 'cat':
      return `<path d="M20 26 L16 12 L28 22 Z" fill="${accent}"/><path d="M44 26 L48 12 L36 22 Z" fill="${accent}"/>
        <path d="M21 24 L18 16 L26 22 Z" fill="${skin}"/><path d="M43 24 L46 16 L38 22 Z" fill="${skin}"/>`;
    case 'fox':
      return `<path d="M18 28 L12 10 L30 22 Z" fill="${accent}" opacity="0.9"/>
        <path d="M46 28 L52 10 L34 22 Z" fill="${accent}" opacity="0.9"/>
        <path d="M20 26 L16 18 L28 23 Z" fill="${skin}"/><path d="M44 26 L48 18 L36 23 Z" fill="${skin}"/>`;
    case 'bunny':
      return `<ellipse cx="22" cy="14" rx="5" ry="12" fill="${skin}" transform="rotate(-8 22 14)"/>
        <ellipse cx="42" cy="14" rx="5" ry="12" fill="${skin}" transform="rotate(8 42 14)"/>
        <ellipse cx="22" cy="14" rx="3" ry="8" fill="${accent}" opacity="0.4" transform="rotate(-8 22 14)"/>
        <ellipse cx="42" cy="14" rx="3" ry="8" fill="${accent}" opacity="0.4" transform="rotate(8 42 14)"/>`;
    case 'round':
      return `<circle cx="18" cy="28" r="6" fill="${skin}"/><circle cx="46" cy="28" r="6" fill="${skin}"/>
        <circle cx="18" cy="28" r="3" fill="${accent}" opacity="0.35"/><circle cx="46" cy="28" r="3" fill="${accent}" opacity="0.35"/>`;
    default:
      return '';
  }
}

function renderWings(wings, accent, accent2, uid) {
  if (wings === 'none') return '';
  const g1 = `wg1-${uid}`;
  const g2 = `wg2-${uid}`;
  const grad = `<defs>
    <linearGradient id="${g1}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${accent}"/><stop offset="100%" stop-color="${accent2}"/></linearGradient>
    <linearGradient id="${g2}" x1="1" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${accent2}"/><stop offset="100%" stop-color="${accent}"/></linearGradient>
  </defs>`;
  if (wings === 'dragon') {
    return `${grad}
      <path d="M10 32 Q2 20 4 36 Q6 50 18 44 L14 36 Z" fill="url(#${g1})" opacity="0.85"/>
      <path d="M54 32 Q62 20 60 36 Q58 50 46 44 L50 36 Z" fill="url(#${g2})" opacity="0.85"/>
      <path d="M12 34 L8 28 M52 34 L56 28" stroke="${accent2}" stroke-width="1" opacity="0.6"/>`;
  }
  if (wings === 'angel') {
    return `${grad}
      <path d="M8 34 Q2 26 6 20 Q14 24 18 38 Q12 40 8 34" fill="url(#${g1})" opacity="0.8"/>
      <path d="M56 34 Q62 26 58 20 Q50 24 46 38 Q52 40 56 34" fill="url(#${g2})" opacity="0.8"/>`;
  }
  if (wings === 'butterfly') {
    return `${grad}
      <ellipse cx="10" cy="34" rx="9" ry="12" fill="url(#${g1})" opacity="0.75"/>
      <ellipse cx="54" cy="34" rx="9" ry="12" fill="url(#${g2})" opacity="0.75"/>
      <circle cx="8" cy="30" r="2.5" fill="#fff" opacity="0.55"/><circle cx="56" cy="30" r="2.5" fill="#fff" opacity="0.55"/>`;
  }
  return `${grad}
    <path d="M12 34 Q4 28 6 38 Q8 46 16 42 Z" fill="url(#${g1})" opacity="0.8"/>
    <path d="M52 34 Q60 28 58 38 Q56 46 48 42 Z" fill="url(#${g2})" opacity="0.8"/>`;
}

function renderTail(tail, accent, accent2, skin) {
  switch (tail) {
    case 'fox':
      return `<path d="M48 44 Q60 38 58 54 Q50 52 48 44 Z" fill="${accent}" opacity="0.9"/>
        <path d="M52 46 Q58 44 56 52 Q51 50 52 46 Z" fill="${skin}"/>
        <circle cx="56" cy="50" r="2" fill="${accent2}" opacity="0.7"/>`;
    case 'dragon':
      return `<path d="M46 42 Q62 36 60 50 Q54 56 46 42 Z" fill="${accent}" opacity="0.85"/>
        <path d="M54 44 L60 46 L56 52 Z" fill="${accent2}"/>
        <path d="M58 48 L62 50 L58 52 Z" fill="${accent}"/>`;
    case 'flame':
      return `<path d="M48 44 Q56 36 54 48 Q58 52 52 54 Q50 48 48 44" fill="${accent}"/>
        <path d="M50 46 Q54 40 52 50 Q55 52 51 53 Q50 49 50 46" fill="${accent2}" opacity="0.8"/>`;
    default:
      return '';
  }
}

function renderHair(hair, hairColor, accent) {
  switch (hair) {
    case 'none': return '';
    case 'long':
      return `<path d="M18 28 Q32 12 46 28 L48 42 Q32 38 16 42 Z" fill="${hairColor}"/>
        <path d="M16 34 Q14 50 20 58 L26 50 Q22 42 18 34 Z" fill="${hairColor}"/>
        <path d="M48 34 Q50 50 44 58 L38 50 Q42 42 46 34 Z" fill="${hairColor}"/>`;
    case 'spiky':
      return `<path d="M20 30 L14 10 L26 24 L32 6 L38 24 L50 10 L44 30 Z" fill="${hairColor}"/>
        <path d="M28 24 L32 14 L36 24" fill="${accent}" opacity="0.35"/>`;
    case 'mohawk':
      return `<path d="M26 30 L30 6 L32 4 L34 6 L38 30 Z" fill="${hairColor}"/>
        <path d="M30 8 L32 2 L34 8" fill="${accent}" opacity="0.5"/>`;
    case 'curly':
      return `<path d="M18 30 Q16 16 26 20 Q32 10 38 20 Q48 16 46 30 Q32 24 18 30 Z" fill="${hairColor}"/>
        <circle cx="20" cy="22" r="5" fill="${hairColor}"/><circle cx="32" cy="16" r="5" fill="${hairColor}"/><circle cx="44" cy="22" r="5" fill="${hairColor}"/>`;
    case 'braids':
      return `<path d="M20 28 Q32 16 44 28 L42 36 Q32 32 20 36 Z" fill="${hairColor}"/>
        <path d="M18 32 Q14 46 20 56" fill="none" stroke="${hairColor}" stroke-width="4" stroke-linecap="round"/>
        <path d="M46 32 Q50 46 44 56" fill="none" stroke="${hairColor}" stroke-width="4" stroke-linecap="round"/>`;
    case 'afro':
      return `<circle cx="32" cy="24" r="16" fill="${hairColor}"/>
        <circle cx="22" cy="22" r="6" fill="${hairColor}"/><circle cx="42" cy="22" r="6" fill="${hairColor}"/>
        <circle cx="32" cy="14" r="5" fill="${hairColor}"/>`;
    default:
      return `<path d="M18 30 Q32 16 46 30 Q44 24 32 22 Q20 24 18 30 Z" fill="${hairColor}"/>`;
  }
}

function renderHorns(horns, accent, accent2) {
  if (horns === 'none') return '';
  if (horns === 'uni') {
    return `<path d="M30 24 Q32 4 34 24 Q32 20 30 24" fill="${accent}"/>
      <path d="M31 20 L32 8 L33 20" fill="${accent2}" opacity="0.6"/>`;
  }
  if (horns === 'straight') {
    return `<path d="M24 24 L21 8 L27 22 Z" fill="${accent}"/><path d="M40 24 L43 8 L37 22 Z" fill="${accent}"/>
      <path d="M23 18 L22 12 L25 20" fill="${accent2}" opacity="0.5"/><path d="M41 18 L42 12 L39 20" fill="${accent2}" opacity="0.5"/>`;
  }
  if (horns === 'double') {
    return `<path d="M20 26 Q14 10 24 10 Q26 18 24 26 Z" fill="${accent}"/>
      <path d="M28 24 Q24 8 32 6 Q34 16 32 24 Z" fill="${accent2}"/>
      <path d="M36 24 Q34 8 40 6 Q42 16 40 24 Z" fill="${accent2}"/>
      <path d="M44 26 Q50 10 40 10 Q38 18 40 26 Z" fill="${accent}"/>`;
  }
  return `<path d="M20 26 Q12 10 26 12 Q28 20 26 26 Z" fill="${accent}"/>
    <path d="M44 26 Q52 10 38 12 Q36 20 38 26 Z" fill="${accent}"/>
    <path d="M22 22 Q18 16 24 16" fill="none" stroke="${accent2}" stroke-width="1.2" opacity="0.6"/>
    <path d="M42 22 Q46 16 40 16" fill="none" stroke="${accent2}" stroke-width="1.2" opacity="0.6"/>`;
}

function renderMarkings(markings, accent, accent2) {
  switch (markings) {
    case 'mask':
      return `<path d="M22 34 Q32 40 42 34 L40 42 Q32 46 24 42 Z" fill="${accent}" opacity="0.45"/>
        <circle cx="27" cy="36" r="1.5" fill="${accent2}"/><circle cx="37" cy="36" r="1.5" fill="${accent2}"/>`;
    case 'tribal':
      return `<path d="M24 30 L20 26 M40 30 L44 26 M32 28 L32 24" stroke="${accent}" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>
        <path d="M26 44 Q32 48 38 44" fill="none" stroke="${accent2}" stroke-width="1.2" opacity="0.5"/>`;
    case 'cheeks':
      return `<ellipse cx="22" cy="40" rx="4" ry="2.5" fill="${accent}" opacity="0.35"/>
        <ellipse cx="42" cy="40" rx="4" ry="2.5" fill="${accent2}" opacity="0.35"/>`;
    case 'freckles':
      return `<circle cx="24" cy="38" r="0.8" fill="${accent}" opacity="0.5"/><circle cx="28" cy="40" r="0.7" fill="${accent}" opacity="0.45"/>
        <circle cx="36" cy="40" r="0.7" fill="${accent2}" opacity="0.45"/><circle cx="40" cy="38" r="0.8" fill="${accent2}" opacity="0.5"/>`;
    default:
      return '';
  }
}

function renderEyes(eyes, eyeColor, accent) {
  switch (eyes) {
    case 'star':
      return `<text x="26" y="38" text-anchor="middle" font-size="9" fill="${accent}">★</text>
        <text x="38" y="38" text-anchor="middle" font-size="9" fill="${accent}">★</text>`;
    case 'cat':
      return `<ellipse cx="27" cy="36" rx="3" ry="3.5" fill="${eyeColor}"/>
        <ellipse cx="37" cy="36" rx="3" ry="3.5" fill="${eyeColor}"/>
        <path d="M24 34 L27 36 L24 38" fill="none" stroke="${eyeColor}" stroke-width="1"/>
        <path d="M40 34 L37 36 L40 38" fill="none" stroke="${eyeColor}" stroke-width="1"/>
        <ellipse cx="27.5" cy="35" rx="1" ry="1.8" fill="#fff"/><ellipse cx="37.5" cy="35" rx="1" ry="1.8" fill="#fff"/>`;
    case 'glow':
      return `<circle cx="27" cy="36" r="4" fill="${accent}" opacity="0.35"/>
        <circle cx="37" cy="36" r="4" fill="${accent}" opacity="0.35"/>
        <circle cx="27" cy="36" r="2.5" fill="${eyeColor}"/><circle cx="37" cy="36" r="2.5" fill="${eyeColor}"/>
        <circle cx="28" cy="35" r="1" fill="#fff"/>`;
    case 'sleepy':
      return `<path d="M23 36 Q27 34 31 36" fill="none" stroke="${eyeColor}" stroke-width="2" stroke-linecap="round"/>
        <path d="M33 36 Q37 34 41 36" fill="none" stroke="${eyeColor}" stroke-width="2" stroke-linecap="round"/>`;
    case 'happy':
      return `<path d="M23 36 Q27 33 31 36" fill="none" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M33 36 Q37 33 41 36" fill="none" stroke="${eyeColor}" stroke-width="2.2" stroke-linecap="round"/>`;
    default:
      return `<circle cx="27" cy="36" r="2.8" fill="${eyeColor}"/>
        <circle cx="37" cy="36" r="2.8" fill="${eyeColor}"/>
        <circle cx="28" cy="35" r="1" fill="#fff"/><circle cx="38" cy="35" r="1" fill="#fff"/>`;
  }
}

function renderMouth(mouth) {
  switch (mouth) {
    case 'grin':
      return `<path d="M23 42 Q32 51 41 42" fill="none" stroke="#7c2d12" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M25 43 Q32 48 39 43" fill="#fff" opacity="0.9"/>`;
    case 'neutral':
      return `<line x1="28" y1="43" x2="36" y2="43" stroke="#7c2d12" stroke-width="2" stroke-linecap="round"/>`;
    case 'open':
      return `<ellipse cx="32" cy="43" rx="4.5" ry="3.5" fill="#7c2d12"/>
        <ellipse cx="32" cy="42.5" rx="3" ry="2" fill="#fb7185" opacity="0.65"/>`;
    case 'fangs':
      return `<path d="M26 41 Q32 46 38 41" fill="none" stroke="#7c2d12" stroke-width="2" stroke-linecap="round"/>
        <path d="M28 41 L29 45 L30 41" fill="#fff"/><path d="M34 41 L35 45 L36 41" fill="#fff"/>`;
    default:
      return `<path d="M26 41 Q32 45 38 41" fill="none" stroke="#7c2d12" stroke-width="2" stroke-linecap="round"/>`;
  }
}

function renderAccessory(accessory, accent, accent2) {
  switch (accessory) {
    case 'glasses':
      return `<circle cx="27" cy="36" r="4.5" fill="none" stroke="${accent}" stroke-width="1.8"/>
        <circle cx="37" cy="36" r="4.5" fill="none" stroke="${accent}" stroke-width="1.8"/>
        <line x1="31.5" y1="36" x2="32.5" y2="36" stroke="${accent}" stroke-width="1.8"/>`;
    case 'crown':
      return `<path d="M22 18 L26 10 L32 16 L38 10 L42 18 Z" fill="${accent2}" stroke="${accent}" stroke-width="1"/>
        <rect x="22" y="18" width="20" height="4" rx="1" fill="${accent}"/>`;
    case 'book':
      return `<rect x="43" y="38" width="11" height="14" rx="1.5" fill="${accent}"/>
        <line x1="45" y1="42" x2="52" y2="42" stroke="#fff" stroke-width="0.9" opacity="0.75"/>
        <line x1="45" y1="45" x2="51" y2="45" stroke="#fff" stroke-width="0.9" opacity="0.75"/>`;
    case 'flower':
      return `<circle cx="16" cy="40" r="3.5" fill="${accent}"/>
        <circle cx="14" cy="37" r="2.2" fill="#fde68a"/><circle cx="18" cy="37" r="2.2" fill="#fde68a"/>
        <circle cx="14" cy="43" r="2.2" fill="#fde68a"/><circle cx="18" cy="43" r="2.2" fill="#fde68a"/>`;
    case 'headphones':
      return `<path d="M16 34 Q16 22 32 20 Q48 22 48 34" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="12" y="32" width="7" height="10" rx="2" fill="${accent2}"/>
        <rect x="45" y="32" width="7" height="10" rx="2" fill="${accent2}"/>`;
    case 'scarf':
      return `<path d="M20 48 Q32 52 44 48 L42 54 Q32 58 22 54 Z" fill="${accent}"/>
        <path d="M38 52 L42 58 L36 56 Z" fill="${accent2}"/>`;
    default:
      return '';
  }
}

export function buildAvatarSvg(configInput) {
  const cfg = normalizeAvatarConfig(configInput);
  const uid = nextSvgUid();
  const bg = getBgPreset(cfg.bg);
  const gradId = `bg-${uid}`;
  const stops = bg.colors.map((c, i) =>
    `<stop offset="${Math.round((i / (bg.colors.length - 1)) * 100)}%" stop-color="${c}"/>`,
  ).join('');

  const face = facePath(cfg.face);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${escapeHtml(cfg.label)}">
  <defs><linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient></defs>
  <circle cx="32" cy="32" r="30" fill="url(#${gradId})"/>
  ${renderPattern(cfg.pattern, cfg.accent, cfg.accent2)}
  ${renderAura(cfg.aura, cfg.accent, cfg.accent2, uid)}
  ${renderWings(cfg.wings, cfg.accent, cfg.accent2, uid)}
  ${renderTail(cfg.tail, cfg.accent, cfg.accent2, cfg.skin)}
  ${renderBody(cfg.body, cfg.skin, cfg.accent, cfg.accent2)}
  ${renderHair(cfg.hair, cfg.hairColor, cfg.accent)}
  ${renderEars(cfg.ears, cfg.skin, cfg.accent)}
  ${renderHorns(cfg.horns, cfg.accent, cfg.accent2)}
  <path d="${face}" fill="${cfg.skin}" stroke="rgba(0,0,0,0.12)" stroke-width="0.8"/>
  ${renderMarkings(cfg.markings, cfg.accent, cfg.accent2)}
  ${renderEyes(cfg.eyes, cfg.eyeColor, cfg.accent)}
  ${renderMouth(cfg.mouth)}
  ${renderAccessory(cfg.accessory, cfg.accent, cfg.accent2)}
  ${renderFrame(cfg.frame, cfg.accent, cfg.accent2)}
</svg>`;
}

export function avatarConfigToSrc(config) {
  return `data:image/svg+xml,${encodeURIComponent(buildAvatarSvg(config))}`;
}

function renderTabPanel(tab, cfg, active) {
  const hiddenAttr = active ? '' : ' hidden';
  if (tab === 'style') {
    return `<div class="ab-tab-panel" data-ab-tab-panel="style"${hiddenAttr}>
      <fieldset class="ab-fieldset"><legend>Fondo</legend>
        <div class="ab-chips">${renderOptionChips('bg', cfg.bg, AVATAR_BG_PRESETS.map((b) => ({ id: b.id, label: b.label })))}</div>
      </fieldset>
      <fieldset class="ab-fieldset"><legend>Patrón y aura</legend>
        <div class="ab-chips">${renderOptionChips('pattern', cfg.pattern, AVATAR_OPTIONS.pattern)}</div>
        <div class="ab-chips ab-chips--inline">${renderOptionChips('aura', cfg.aura, AVATAR_OPTIONS.aura)}</div>
        <div class="ab-chips ab-chips--inline">${renderOptionChips('frame', cfg.frame, AVATAR_OPTIONS.frame)}</div>
      </fieldset>
      <fieldset class="ab-fieldset"><legend>Colores de acento</legend>
        <p class="ab-sublabel">Principal</p>
        <div class="ab-swatches">${renderColorSwatches('accent', cfg.accent, ACCENT_SWATCHES)}</div>
        <p class="ab-sublabel">Secundario</p>
        <div class="ab-swatches">${renderColorSwatches('accent2', cfg.accent2, ACCENT_SWATCHES)}</div>
      </fieldset>
    </div>`;
  }
  if (tab === 'alebrije') {
    return `<div class="ab-tab-panel" data-ab-tab-panel="alebrije"${hiddenAttr}>
      <fieldset class="ab-fieldset"><legend>Cuernos, alas y cola</legend>
        <div class="ab-chips">${renderOptionChips('horns', cfg.horns, AVATAR_OPTIONS.horns)}</div>
        <div class="ab-chips ab-chips--inline">${renderOptionChips('wings', cfg.wings, AVATAR_OPTIONS.wings)}</div>
        <div class="ab-chips ab-chips--inline">${renderOptionChips('tail', cfg.tail, AVATAR_OPTIONS.tail)}</div>
      </fieldset>
      <fieldset class="ab-fieldset"><legend>Accesorios</legend>
        <div class="ab-chips">${renderOptionChips('accessory', cfg.accessory, AVATAR_OPTIONS.accessory)}</div>
      </fieldset>
    </div>`;
  }
  if (tab === 'body') {
    return `<div class="ab-tab-panel" data-ab-tab-panel="body"${hiddenAttr}>
      <fieldset class="ab-fieldset"><legend>Cuerpo y pelo</legend>
        <div class="ab-chips">${renderOptionChips('body', cfg.body, AVATAR_OPTIONS.body)}</div>
        <div class="ab-chips ab-chips--inline">${renderOptionChips('hair', cfg.hair, AVATAR_OPTIONS.hair)}</div>
        <div class="ab-swatches">${renderColorSwatches('hairColor', cfg.hairColor, HAIR_SWATCHES)}</div>
      </fieldset>
      <fieldset class="ab-fieldset"><legend>Orejas y marcas</legend>
        <div class="ab-chips">${renderOptionChips('ears', cfg.ears, AVATAR_OPTIONS.ears)}</div>
        <div class="ab-chips ab-chips--inline">${renderOptionChips('markings', cfg.markings, AVATAR_OPTIONS.markings)}</div>
      </fieldset>
    </div>`;
  }
  return `<div class="ab-tab-panel" data-ab-tab-panel="face"${hiddenAttr}>
    <fieldset class="ab-fieldset"><legend>Cara</legend>
      <div class="ab-chips">${renderOptionChips('face', cfg.face, AVATAR_OPTIONS.face)}</div>
      <div class="ab-swatches">${renderColorSwatches('skin', cfg.skin, SKIN_SWATCHES)}</div>
    </fieldset>
    <fieldset class="ab-fieldset"><legend>Ojos y boca</legend>
      <div class="ab-chips">${renderOptionChips('eyes', cfg.eyes, AVATAR_OPTIONS.eyes)}</div>
      <div class="ab-swatches ab-swatches--inline">${renderColorSwatches('eyeColor', cfg.eyeColor, ['#1a1024', '#312e81', '#0f766e', '#7c2d12', '#ffffff', '#38bdf8'])}</div>
      <div class="ab-chips ab-chips--inline">${renderOptionChips('mouth', cfg.mouth, AVATAR_OPTIONS.mouth)}</div>
    </fieldset>
  </div>`;
}

export function renderOptionChips(field, selected, options) {
  return options.map((opt) => `
    <button type="button" class="ab-chip${opt.id === selected ? ' ab-chip--active' : ''}"
      data-ab-field="${field}" data-ab-value="${opt.id}">${opt.label}</button>
  `).join('');
}

export function renderColorSwatches(field, selected, colors) {
  return colors.map((color) => `
    <button type="button" class="ab-swatch${color === selected ? ' ab-swatch--active' : ''}"
      data-ab-field="${field}" data-ab-value="${color}" style="--swatch:${color}" title="${color}"></button>
  `).join('');
}

export function renderAvatarBuilderHtml(configInput = {}, { editMode = false } = {}) {
  const cfg = normalizeAvatarConfig(configInput);
  const previewSrc = avatarConfigToSrc(cfg);
  const presets = AVATAR_PRESETS.map((p) =>
    `<button type="button" class="ab-preset" data-ab-preset="${p.id}">${p.label}</button>`,
  ).join('');

  return `
    <div class="avatar-builder" data-ab-root>
      <header class="avatar-builder__head">
        <h2>${editMode ? 'Editar avatar' : 'Crear tu avatar'}</h2>
        <p class="modal-tip">Diseña tu alebrije: más partes, colores y estilos. Se guarda solo en tu dispositivo.</p>
      </header>
      <div class="avatar-builder__layout">
        <div class="avatar-builder__preview-col">
          <div class="avatar-builder__preview-wrap">
            <img class="avatar-builder__preview" id="abPreview" src="${previewSrc}" alt="Vista previa" width="180" height="180">
          </div>
          <div class="avatar-builder__quick">
            <button type="button" class="btn btn--ghost btn--sm" id="abRandom" title="Combinación aleatoria">🎲 Aleatorio</button>
          </div>
          <label class="profile-field" for="abLabel"><span>Nombre</span>
            <input type="text" id="abLabel" class="profile-input" maxlength="20" value="${escapeHtml(cfg.label)}">
          </label>
          <fieldset class="ab-fieldset ab-fieldset--presets">
            <legend>Plantillas rápidas</legend>
            <div class="ab-presets">${presets}</div>
          </fieldset>
        </div>
        <div class="avatar-builder__controls">
          <nav class="ab-tabs" role="tablist">
            <button type="button" class="ab-tab ab-tab--active" data-ab-tab="face" role="tab">Cara</button>
            <button type="button" class="ab-tab" data-ab-tab="body" role="tab">Cuerpo</button>
            <button type="button" class="ab-tab" data-ab-tab="alebrije" role="tab">Alebrije</button>
            <button type="button" class="ab-tab" data-ab-tab="style" role="tab">Estilo</button>
          </nav>
          ${renderTabPanel('face', cfg, true)}
          ${renderTabPanel('body', cfg, false)}
          ${renderTabPanel('alebrije', cfg, false)}
          ${renderTabPanel('style', cfg, false)}
        </div>
      </div>
      <div class="avatar-builder__actions modal-actions">
        ${editMode ? '<button type="button" class="btn btn--ghost btn--danger-text" id="abDelete">🗑 Eliminar este avatar</button>' : '<span></span>'}
        <div class="avatar-builder__actions-main">
          <button type="button" class="btn btn--ghost" id="abCancel">Cancelar</button>
          <button type="button" class="btn btn--primary" id="abSave">${editMode ? 'Guardar cambios' : 'Guardar avatar'}</button>
        </div>
      </div>
    </div>
  `;
}

function applyConfigToUi(root, current) {
  for (const key of [...OPTION_KEYS, 'bg', 'skin', 'hairColor', 'eyeColor', 'accent', 'accent2']) {
    root.querySelectorAll(`[data-ab-field="${key}"]`).forEach((el) => {
      const active = el.dataset.abValue === current[key];
      el.classList.toggle('ab-chip--active', active);
      el.classList.toggle('ab-swatch--active', active);
    });
  }
}

export function bindAvatarBuilder(root, { config, onChange, onSave, onDelete, onCancel }) {
  if (!root) return;
  let current = normalizeAvatarConfig(config);

  const preview = root.querySelector('#abPreview');
  const labelInput = root.querySelector('#abLabel');

  const refreshPreview = () => {
    current.label = labelInput?.value?.trim().slice(0, 20) || current.label;
    if (preview) preview.src = avatarConfigToSrc(current);
    onChange?.(current);
  };

  const setConfig = (next) => {
    current = normalizeAvatarConfig({ ...current, ...next, label: labelInput?.value?.trim().slice(0, 20) || current.label });
    applyConfigToUi(root, current);
    refreshPreview();
  };

  root.querySelectorAll('[data-ab-field]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const field = btn.dataset.abField;
      if (!field) return;
      current[field] = btn.dataset.abValue;
      applyConfigToUi(root, current);
      refreshPreview();
    });
  });

  root.querySelectorAll('[data-ab-tab]').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const tab = tabBtn.dataset.abTab;
      root.querySelectorAll('.ab-tab').forEach((t) => {
        const on = t.dataset.abTab === tab;
        t.classList.toggle('ab-tab--active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      root.querySelectorAll('[data-ab-tab-panel]').forEach((p) => {
        const show = p.dataset.abTabPanel === tab;
        p.hidden = !show;
        p.classList.remove('hidden');
      });
    });
  });

  root.querySelectorAll('[data-ab-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = AVATAR_PRESETS.find((p) => p.id === btn.dataset.abPreset);
      if (preset) setConfig(preset.config);
    });
  });

  root.querySelector('#abRandom')?.addEventListener('click', () => {
    setConfig(randomAvatarConfig({ label: current.label }));
  });

  labelInput?.addEventListener('input', refreshPreview);

  root.querySelector('#abSave')?.addEventListener('click', () => {
    current.label = labelInput?.value?.trim().slice(0, 20) || 'Mi avatar';
    onSave?.(normalizeAvatarConfig(current));
  });
  root.querySelector('#abDelete')?.addEventListener('click', () => onDelete?.());
  root.querySelector('#abCancel')?.addEventListener('click', () => onCancel?.());
}
