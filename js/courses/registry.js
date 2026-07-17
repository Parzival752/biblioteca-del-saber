/**
 * Registro unificado — Programación (Aprende-JS) + Naturaleza (Super Maestro) + Saberes ampliados
 */
import { CURRICULUM as JS } from './javascript.js';
import { CURRICULUM as HTML } from './html.js';
import { CURRICULUM as CSS } from './css.js';
import { CURRICULUM as PYTHON } from './python.js';
import { CURRICULUM as CSHARP } from './csharp.js';
import { CURRICULUM as TYPESCRIPT } from './typescript.js';
import { CURRICULUM as SQL } from './sql.js';
import { CURRICULUM as GIT } from './git.js';
import { CURRICULUM as BIOLOGIA } from './biologia.js';
import { CURRICULUM as FLORA } from './flora.js';
import { CURRICULUM as FAUNA } from './fauna.js';
import { CURRICULUM as EDC } from './edc.js';
import { CURRICULUM as RADIO } from './radioaficion.js';
import { CURRICULUM as EXPLORACION } from './exploracion.js';
import { CURRICULUM as SUPERVIVENCIA } from './supervivencia.js';
import { CURRICULUM as ECOLOGIA } from './ecologia.js';
import { CURRICULUM as METEOROLOGIA } from './meteorologia.js';
import { CURRICULUM as PRIMEROS_AUXILIOS } from './primerosauxilios.js';
import { CURRICULUM as BOTANICA } from './botanica.js';
import { CURRICULUM as ASTRONOMIA } from './astronomia.js';
import { CURRICULUM as GEOLOGIA } from './geologia.js';
import { CURRICULUM as ORIENTACIONAV } from './orientacionav.js';
import { CURRICULUM as COCINA } from './cocina.js';
import { CURRICULUM as LINUX } from './linux.js';
import { CURRICULUM as REDES } from './redes.js';
import { CURRICULUM as DATOS } from './datos.js';
import { CURRICULUM as AUTOMATIZACION } from './automatizacion.js';
import { CURRICULUM as ORGANIZACION } from './organizacion.js';
import { CURRICULUM as MITOLOGIA } from './mitologia.js';
import { CURRICULUM as FOTOGRAFIA } from './fotografia.js';

/** Bump al cambiar SVGs en assets/courses/ para evitar caché del navegador. */
export const ICON_ASSET_VERSION = '5';

function courseIconSrc(iconPath) {
  return `${iconPath}?v=${ICON_ASSET_VERSION}`;
}

/** SVG embebido: evita caché rota de &lt;img&gt; en iconos críticos. */
const INLINE_COURSE_ICONS = {
  'assets/courses/css.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
  <circle cx="32" cy="32" r="30" fill="#264de4"/>
  <path d="M14 24h36" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  <path d="M16 34h32" stroke="#ffffff" stroke-width="6" stroke-linecap="round" opacity="0.92"/>
  <path d="M18 44h28" stroke="#ffffff" stroke-width="6" stroke-linecap="round" opacity="0.84"/>
  <path d="M40 18v28" stroke="#33a9dc" stroke-width="5" stroke-linecap="round"/>
  <path d="M40 18c6 0 10 4 10 9s-4 9-10 9" stroke="#33a9dc" stroke-width="5" stroke-linecap="round" fill="none"/>
</svg>`,
};

export const COURSE_CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'programacion', label: 'Programación' },
  { id: 'web', label: 'Web' },
  { id: 'lenguajes', label: 'Lenguajes' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'campo', label: 'Campo' },
  { id: 'tecnica', label: 'Técnica' },
  { id: 'salud', label: 'Salud' },
  { id: 'vida', label: 'Vida práctica' },
  { id: 'cultura', label: 'Cultura' },
];

export const COURSES = [
  // —— Programación ——
  { id: 'javascript', name: 'JavaScript', tagline: 'El lenguaje de la web interactiva', category: 'lenguajes', group: 'programacion', icon: 'assets/courses/javascript.svg', color: '#f59e0b', exerciseType: 'code', editorMode: 'javascript', runner: 'javascript' },
  { id: 'html', name: 'HTML', tagline: 'Estructura y contenido de páginas web', category: 'web', group: 'programacion', icon: 'assets/courses/html.svg', color: '#ef4444', exerciseType: 'code', editorMode: 'htmlmixed', runner: 'html' },
  { id: 'css', name: 'CSS', tagline: 'Diseño, layout y estilo visual', category: 'web', group: 'programacion', icon: 'assets/courses/css.svg', color: '#3b82f6', exerciseType: 'code', editorMode: 'css', runner: 'css' },
  { id: 'python', name: 'Python', tagline: 'Versátil: datos, IA, scripts y más', category: 'lenguajes', group: 'programacion', icon: 'assets/courses/python.svg', color: '#3776ab', exerciseType: 'code', editorMode: 'python', runner: 'python' },
  { id: 'csharp', name: 'C#', tagline: 'Apps, juegos con Unity y .NET', category: 'lenguajes', group: 'programacion', icon: 'assets/courses/csharp.svg', color: '#9333ea', exerciseType: 'code', editorMode: 'text/x-csharp', runner: 'csharp' },
  { id: 'typescript', name: 'TypeScript', tagline: 'JavaScript con tipos para proyectos grandes', category: 'lenguajes', group: 'programacion', icon: 'assets/courses/typescript.svg', color: '#2563eb', exerciseType: 'code', editorMode: 'javascript', runner: 'typescript' },
  { id: 'sql', name: 'SQL', tagline: 'Consultas y bases de datos', category: 'programacion', group: 'programacion', icon: 'assets/courses/sql.svg', color: '#0891b2', exerciseType: 'code', editorMode: 'sql', runner: 'sql' },
  { id: 'git', name: 'Git', tagline: 'Control de versiones y trabajo en equipo', category: 'programacion', group: 'programacion', icon: 'assets/courses/git.svg', color: '#f97316', exerciseType: 'code', editorMode: 'shell', runner: 'git' },
  { id: 'linux', name: 'Linux / Terminal', tagline: 'Comandos, archivos y permisos en la terminal', category: 'programacion', group: 'programacion', icon: 'assets/courses/linux.svg', color: '#eab308', exerciseType: 'quiz' },
  { id: 'redes', name: 'Redes básicas', tagline: 'IP, DNS, Wi‑Fi y seguridad doméstica', category: 'tecnica', group: 'programacion', icon: 'assets/courses/redes.svg', color: '#0ea5e9', exerciseType: 'quiz' },
  { id: 'datos', name: 'Datos para humanos', tagline: 'Modelar información del día a día sin ser experto', category: 'programacion', group: 'programacion', icon: 'assets/courses/datos.svg', color: '#6366f1', exerciseType: 'quiz' },
  { id: 'automatizacion', name: 'Automatización', tagline: 'Scripts, backups y tareas repetitivas', category: 'programacion', group: 'programacion', icon: 'assets/courses/automatizacion.svg', color: '#14b8a6', exerciseType: 'quiz' },
  // —— Naturaleza y campo ——
  { id: 'biologia', name: 'Biología', tagline: 'Vida, células, evolución y ecosistemas', category: 'naturaleza', group: 'saber', icon: 'assets/courses/biologia.svg', color: '#22c55e', exerciseType: 'quiz' },
  { id: 'flora', name: 'Flora', tagline: 'Plantas, árboles, hongos e identificación', category: 'naturaleza', group: 'saber', icon: 'assets/courses/flora.svg', color: '#16a34a', exerciseType: 'quiz' },
  { id: 'fauna', name: 'Fauna', tagline: 'Animales, huellas y comportamiento', category: 'naturaleza', group: 'saber', icon: 'assets/courses/fauna.svg', color: '#ca8a04', exerciseType: 'quiz' },
  { id: 'ecologia', name: 'Ecología', tagline: 'Biodiversidad, biomas y conservación', category: 'naturaleza', group: 'saber', icon: 'assets/courses/ecologia.svg', color: '#059669', exerciseType: 'quiz' },
  { id: 'botanica', name: 'Botánica práctica', tagline: 'Jardinería, suelo, riego y plagas', category: 'naturaleza', group: 'saber', icon: 'assets/courses/botanica.svg', color: '#4ade80', exerciseType: 'quiz' },
  { id: 'geologia', name: 'Geología', tagline: 'Rocas, minerales y tipos de suelo', category: 'naturaleza', group: 'saber', icon: 'assets/courses/geologia.svg', color: '#78716c', exerciseType: 'quiz' },
  { id: 'supervivencia', name: 'Supervivencia', tagline: 'Refugio, agua, fuego y orientación', category: 'campo', group: 'saber', icon: 'assets/courses/supervivencia.svg', color: '#b45309', exerciseType: 'quiz' },
  { id: 'exploracion', name: 'Exploración', tagline: 'Mapas, brújula, rutas y campo', category: 'campo', group: 'saber', icon: 'assets/courses/exploracion.svg', color: '#2563eb', exerciseType: 'quiz' },
  { id: 'orientacionav', name: 'Orientación avanzada', tagline: 'Coordenadas, topografía y GPS sin apps', category: 'campo', group: 'saber', icon: 'assets/courses/orientacionav.svg', color: '#1d4ed8', exerciseType: 'quiz' },
  { id: 'cocina', name: 'Conservación de alimentos', tagline: 'Deshidratado, fermentación y agua segura', category: 'campo', group: 'saber', icon: 'assets/courses/cocina.svg', color: '#d97706', exerciseType: 'quiz' },
  { id: 'edc', name: 'EDC', tagline: 'Everyday Carry: equipo diario útil', category: 'campo', group: 'saber', icon: 'assets/courses/edc.svg', color: '#64748b', exerciseType: 'quiz' },
  { id: 'radioaficion', name: 'Radioafición', tagline: 'Comunicaciones, bandas y emergencias', category: 'tecnica', group: 'saber', icon: 'assets/courses/radioaficion.svg', color: '#7c3aed', exerciseType: 'quiz' },
  { id: 'meteorologia', name: 'Meteorología', tagline: 'Tiempo, nubes, tormentas y predicción', category: 'tecnica', group: 'saber', icon: 'assets/courses/meteorologia.svg', color: '#0284c7', exerciseType: 'quiz' },
  { id: 'astronomia', name: 'Astronomía básica', tagline: 'Cielo nocturno, constelaciones y fases lunares', category: 'tecnica', group: 'saber', icon: 'assets/courses/astronomia.svg', color: '#312e81', exerciseType: 'quiz' },
  { id: 'primerosauxilios', name: 'Primeros auxilios', tagline: 'RCP, heridas, fracturas y emergencias', category: 'salud', group: 'saber', icon: 'assets/courses/primerosauxilios.svg', color: '#dc2626', exerciseType: 'quiz' },
  { id: 'organizacion', name: 'Organización y estudio', tagline: 'Rutinas, notas y técnicas de enfoque', category: 'vida', group: 'saber', icon: 'assets/courses/organizacion.svg', color: '#a855f7', exerciseType: 'quiz' },
  { id: 'mitologia', name: 'Mitología y folklore', tagline: 'Cuentos, símbolos y tradiciones culturales', category: 'cultura', group: 'saber', icon: 'assets/courses/mitologia.svg', color: '#c026d3', exerciseType: 'quiz' },
  { id: 'fotografia', name: 'Fotografía de naturaleza', tagline: 'Composición, luz e identificación en campo', category: 'cultura', group: 'saber', icon: 'assets/courses/fotografia.svg', color: '#0891b2', exerciseType: 'quiz' },
];

const CURRICULA = {
  javascript: JS, html: HTML, css: CSS, python: PYTHON, csharp: CSHARP,
  typescript: TYPESCRIPT, sql: SQL, git: GIT,
  biologia: BIOLOGIA, flora: FLORA, fauna: FAUNA, ecologia: ECOLOGIA,
  supervivencia: SUPERVIVENCIA, exploracion: EXPLORACION, edc: EDC,
  radioaficion: RADIO, meteorologia: METEOROLOGIA, primerosauxilios: PRIMEROS_AUXILIOS,
  botanica: BOTANICA, astronomia: ASTRONOMIA, geologia: GEOLOGIA,
  orientacionav: ORIENTACIONAV, cocina: COCINA, linux: LINUX,
  redes: REDES, datos: DATOS, automatizacion: AUTOMATIZACION,
  organizacion: ORGANIZACION, mitologia: MITOLOGIA, fotografia: FOTOGRAFIA,
};

export function getCourseMeta(courseId) {
  return COURSES.find((c) => c.id === courseId) || COURSES[0];
}

export function getCurriculum(courseId) {
  return CURRICULA[courseId] || CURRICULA.javascript;
}

export function getLessonCount(courseId) {
  return getCurriculum(courseId).reduce((n, m) => n + m.lessons.length, 0);
}

export function getTotalLessonsAllCourses() {
  return COURSES.reduce((n, c) => n + getLessonCount(c.id), 0);
}

export function isCodeCourse(courseId) {
  return getCourseMeta(courseId).exerciseType === 'code';
}

export function renderWelcomeChip(meta) {
  const icon = meta.icon?.startsWith('assets/')
    ? `<img class="mod-chip__icon" src="${courseIconSrc(meta.icon)}" alt="" width="18" height="18">`
    : `<span class="mod-chip__icon mod-chip__icon--text">${meta.name.slice(0, 2)}</span>`;
  return `<div class="mod-chip" style="--course-color:${meta.color}">${icon}<span>${meta.name}</span></div>`;
}

export function renderFeatureItem(iconSrc, text) {
  return `<li><img class="feature-icon" src="${iconSrc}" alt="" width="18" height="18"><span>${text}</span></li>`;
}

export function renderCourseIcon(meta, size = 32) {
  const inline = meta.icon && INLINE_COURSE_ICONS[meta.icon];
  if (inline) {
    return `<span class="course-icon-svg" style="width:${size}px;height:${size}px" aria-hidden="true">${inline}</span>`;
  }
  if (meta.icon?.startsWith('assets/')) {
    return `<img class="course-icon-img" src="${courseIconSrc(meta.icon)}" alt="" width="${size}" height="${size}">`;
  }
  return `<span class="course-icon-emoji" style="--icon-size:${size}px" aria-hidden="true">${meta.icon}</span>`;
}

export function populateCourseSelect(select, courses, selectedId, { getProgress = () => ({ hasProgress: false, completed: 0 }) } = {}) {
  if (!select) return;
  select.replaceChildren();
  if (!courses.length) return;
  select.disabled = false;
  for (const c of courses) {
    const prog = getProgress(c.id);
    const lessons = getLessonCount(c.id);
    const suffix = prog.hasProgress ? ` · ${prog.completed} hechas` : '';
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.exerciseType === 'code' ? 'Prog' : 'Saber'} · ${c.name} — ${lessons} lecciones${suffix}`;
    opt.selected = c.id === selectedId;
    select.appendChild(opt);
  }
}

export function filterCourses({ category = 'all', group = 'all' } = {}) {
  return COURSES.filter((c) => {
    if (category !== 'all' && c.category !== category && !(category === 'programacion' && c.group === 'programacion')) return false;
    if (group !== 'all' && c.group !== group) return false;
    return true;
  });
}
