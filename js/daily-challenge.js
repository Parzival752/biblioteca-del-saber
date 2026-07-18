import { getAllLessons } from './curriculum.js';
import { todayKey } from './gamification.js';
import { loadProgress, markDailyChallengeDoneStorage } from './storage.js';

/** Retos curados para cursos de código (ids de lección estables). */
const CHALLENGES = {
  javascript: [
    { lessonId: 'l01-hola', task: 'Imprime tu nombre con console.log' },
    { lessonId: 'l04-operadores', task: 'Crea esMayorDeEdad y pruebala con 21' },
    { lessonId: 'l06-bucles', task: 'Implementa sumarHasta(10)' },
    { lessonId: 'l16-destructuring', task: 'Suma con rest/spread (...numeros)' },
    { lessonId: 'l22-optional-chaining', task: 'Optional chaining en getEmail' },
    { lessonId: 'l26-proyecto-api', task: 'Proyecto: procesarUsuarios' },
  ],
  python: [
    { lessonId: 'py-l01', task: 'Imprime Aprendo Python con print()' },
    { lessonId: 'py-l07', task: 'Cuenta regresiva 3,2,1 con while' },
    { lessonId: 'py-l11', task: 'List comprehension de pares' },
    { lessonId: 'py-l14', task: 'Clase Cuadrado con area()' },
    { lessonId: 'py-l17', task: 'Funcion lambda cuadrado' },
    { lessonId: 'py-l20', task: 'Proyecto agenda de contactos' },
  ],
  html: [
    { lessonId: 'html-l01', task: 'Crea tu primera pagina HTML' },
    { lessonId: 'html-l07', task: 'Tabla de productos con th/td' },
    { lessonId: 'html-l12', task: 'Proyecto tarjeta perfil' },
    { lessonId: 'html-l15', task: 'Label e input accesible' },
    { lessonId: 'html-l18', task: 'Proyecto formulario contacto' },
  ],
  css: [
    { lessonId: 'css-l01', task: 'Colorea un h1 en rojo' },
    { lessonId: 'css-l04', task: 'Centra elementos con flexbox' },
    { lessonId: 'css-l09', task: 'Variables CSS con :root y var()' },
    { lessonId: 'css-l12', task: 'Proyecto boton moderno' },
    { lessonId: 'css-l14', task: 'Animacion @keyframes pulse' },
    { lessonId: 'css-l18', task: 'Proyecto card responsive' },
  ],
  csharp: [
    { lessonId: 'cs-l01', task: 'Hola mundo con Console.WriteLine' },
    { lessonId: 'cs-l05', task: 'Metodo static Triple' },
    { lessonId: 'cs-l11', task: 'Bucle for del 1 al 5' },
    { lessonId: 'cs-l18', task: 'Proyecto clase Estudiante' },
  ],
  typescript: [
    { lessonId: 'ts-l01', task: 'Variable tipada string' },
    { lessonId: 'ts-l06', task: 'Array tipado de colores' },
    { lessonId: 'ts-l09', task: 'Enum Nivel' },
    { lessonId: 'ts-l13', task: 'Arrow function triple' },
    { lessonId: 'ts-l15', task: 'Proyecto API tipada' },
  ],
  sql: [
    { lessonId: 'sql-l01', task: 'SELECT * FROM usuarios' },
    { lessonId: 'sql-l08', task: 'Filtrar con LIKE' },
    { lessonId: 'sql-l13', task: 'INNER JOIN pedidos y usuarios' },
    { lessonId: 'sql-l18', task: 'Proyecto reporte por categoria' },
  ],
  git: [
    { lessonId: 'git-l01', task: 'Inicializa repo con git init' },
    { lessonId: 'git-l04', task: 'Primer commit con mensaje' },
    { lessonId: 'git-l14', task: 'Resuelve conflictos con git add' },
    { lessonId: 'git-l16', task: 'Guarda cambios con git stash' },
    { lessonId: 'git-l20', task: 'Push rama feature con -u' },
    { lessonId: 'git-l25', task: 'Configura .gitignore' },
  ],
};

/** Genera retos del día a partir del currículo (saberes sin lista curada). */
function challengesFromCurriculum(courseId) {
  const lessons = getAllLessons(courseId).filter((l) => l?.id && l?.title);
  if (!lessons.length) return [];
  const count = Math.min(6, lessons.length);
  const picks = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.round((i * (lessons.length - 1)) / Math.max(count - 1, 1));
    const l = lessons[idx];
    picks.push({
      lessonId: l.id,
      task: `Completa la lección «${l.title}»`,
    });
  }
  return picks;
}

function challengesForCourse(courseId) {
  const curated = CHALLENGES[courseId];
  if (curated?.length) {
    const valid = curated.filter((c) => getAllLessons(courseId).some((l) => l.id === c.lessonId));
    if (valid.length) return valid;
  }
  return challengesFromCurriculum(courseId);
}

export function getDailyChallenge() {
  const day = todayKey();
  const courseId = loadProgress().activeCourse || 'javascript';
  const list = challengesForCourse(courseId);
  if (!list.length) {
    return {
      lessonId: null,
      task: 'Explora una lección del saber activo',
      date: day,
      courseId,
    };
  }
  const idx = day.split('-').reduce((a, b) => a + parseInt(b, 10), 0) % list.length;
  return { ...list[idx], date: day, courseId };
}

export function isDailyChallengeDone() {
  const s = loadProgress();
  return s.dailyChallengeDate === todayKey() && s.dailyChallengeDone;
}

export function markDailyChallengeDone() {
  markDailyChallengeDoneStorage();
}

export function getDailyChallengeLesson() {
  const ch = getDailyChallenge();
  if (!ch.lessonId) return null;
  return getAllLessons(ch.courseId).find((l) => l.id === ch.lessonId) || null;
}
