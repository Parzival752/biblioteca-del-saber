#!/usr/bin/env node
/**
 * Genera 12 cursos quiz nuevos con 50 lecciones cada uno (5 módulos × 10).
 * Uso: node scripts/build-new-courses.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { REST_COURSES } from './course-data-rest.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const COURSES_DIR = join(ROOT, 'js', 'courses');
const ASSETS_DIR = join(ROOT, 'assets', 'courses');

function escJs(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function buildTheory(lesson, contextField, practiceField) {
  const topic = lesson.title;
  return `<p>${topic} es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en ${contextField} y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ${lesson.practice} Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar ${contextField} de forma integrada.</p>
        <p>Estudiar ${topic.toLowerCase()} con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en ${practiceField}.</p>
        <ul><li>Concepto central: ${lesson.concept}</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en ${practiceField}</li></ul>`;
}

function buildLesson(lesson, globalIndex, prefix, contextField, practiceField) {
  const num = globalIndex + 1;
  const id = `${prefix}-l${String(num).padStart(3, '0')}`;
  const theory = buildTheory(lesson, contextField, practiceField);
  const opts = lesson.options.map((o) => `'${escJs(o)}'`).join(',\n                ');
  return `      {
        id: '${id}',
        title: '${num}. ${escJs(lesson.title)}',
        duration: '8 min',
        theory: \`${theory}\`,
        example: {
          title: '${escJs(lesson.exampleTitle)}',
          content: \`<p>${lesson.exampleContent}</p>\`,
          tip: '${escJs(lesson.tip)}',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ${escJs(lesson.title.toLowerCase())}.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '${escJs(lesson.question)}',
              options: [
                ${opts},
              ],
              correct: ${lesson.correct},
            },
          ],
        },
      }`;
}

export function generateCourseFile(spec) {
  const { id, prefix, contextField, practiceField, modules } = spec;
  const parts = ['export const CURRICULUM = ['];
  let globalIndex = 0;

  modules.forEach((mod, mi) => {
    const modNum = mi + 1;
    const lessonBlocks = mod.lessons.map((lesson) => {
      const block = buildLesson(lesson, globalIndex, prefix, contextField, practiceField);
      globalIndex += 1;
      return block;
    });

    parts.push(`  {
    id: '${prefix}-mod-${modNum}',
    title: '${escJs(mod.title)}',
    description: '${escJs(mod.description)}',
    lessons: [
${lessonBlocks.join(',\n')},
    ],
  },`);
  });

  parts.push('];');
  parts.push('');
  return parts.join('\n');
}

const SVG_ICONS = {
  botanica: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#15803d"/>
  <path d="M32 48V30" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <path d="M32 38c-10-3-14-10-12-16 8 1 12 6 12 16Z" fill="#86efac"/>
  <ellipse cx="32" cy="48" rx="8" ry="3" fill="#166534"/>
</svg>`,
  astronomia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#1e3a8a"/>
  <circle cx="20" cy="22" r="2" fill="#fde68a"/>
  <circle cx="44" cy="18" r="1.5" fill="#fde68a"/>
  <circle cx="38" cy="40" r="1.5" fill="#fde68a"/>
  <circle cx="26" cy="36" r="18" fill="#fbbf24"/>
  <circle cx="30" cy="32" r="16" fill="#1e3a8a"/>
</svg>`,
  geologia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#92400e"/>
  <path d="M14 42 28 22l8 10 14-18v28H14Z" fill="#d97706"/>
  <path d="M28 22 36 32 42 26" stroke="#78350f" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
  orientacionav: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#1d4ed8"/>
  <circle cx="32" cy="32" r="18" stroke="#fff" stroke-width="2"/>
  <path d="M32 18 36 38 32 34 28 38Z" fill="#ef4444"/>
  <circle cx="32" cy="32" r="3" fill="#fff"/>
</svg>`,
  cocina: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#c2410c"/>
  <ellipse cx="32" cy="38" rx="18" ry="10" fill="#ea580c"/>
  <path d="M18 38h28" stroke="#7c2d12" stroke-width="2"/>
  <path d="M24 22v8M32 20v10M40 22v8" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
</svg>`,
  linux: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#334155"/>
  <rect x="14" y="18" width="36" height="28" rx="4" fill="#0f172a"/>
  <path d="M20 28h4M28 28h16M20 34h10M20 40h14" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,
  redes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#0891b2"/>
  <circle cx="32" cy="24" r="6" fill="#fff"/>
  <circle cx="20" cy="42" r="5" fill="#fff"/>
  <circle cx="44" cy="42" r="5" fill="#fff"/>
  <path d="M32 30v8M28 34 22 38M36 34l6 4" stroke="#fff" stroke-width="2"/>
</svg>`,
  datos: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#7c3aed"/>
  <ellipse cx="32" cy="22" rx="14" ry="6" fill="#a78bfa"/>
  <rect x="18" y="22" width="28" height="20" fill="#8b5cf6"/>
  <ellipse cx="32" cy="42" rx="14" ry="6" fill="#6d28d9"/>
</svg>`,
  automatizacion: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#059669"/>
  <circle cx="32" cy="32" r="12" stroke="#fff" stroke-width="3" fill="none"/>
  <path d="M32 20v-6M32 50v-6M20 32h-6M50 32h-6" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <path d="M42 28 50 20M22 42l-8 8" stroke="#6ee7b7" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,
  organizacion: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#6366f1"/>
  <rect x="20" y="18" width="24" height="28" rx="3" fill="#fff"/>
  <path d="M26 28h12M26 34h12M26 40h8" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M28 22h8" stroke="#6366f1" stroke-width="2" stroke-linecap="round"/>
</svg>`,
  mitologia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#a16207"/>
  <path d="M18 44c0-12 6-20 14-22 8 2 14 10 14 22H18Z" fill="#fde68a"/>
  <circle cx="26" cy="32" r="3" fill="#78350f"/>
  <circle cx="38" cy="32" r="3" fill="#78350f"/>
  <path d="M28 38c2 2 6 2 8 0" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
</svg>`,
  fotografia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#0d9488"/>
  <rect x="16" y="22" width="32" height="22" rx="4" fill="#134e4a"/>
  <circle cx="32" cy="33" r="8" stroke="#fff" stroke-width="2" fill="none"/>
  <circle cx="32" cy="33" r="4" fill="#5eead4"/>
  <rect x="26" y="18" width="12" height="6" rx="2" fill="#134e4a"/>
</svg>`,
};

// ─── Datos de lecciones por curso ───────────────────────────────────────────

const BOTANICA_SPEC = {
    id: 'botanica',
    prefix: 'bot',
    contextField: 'el jardín',
    practiceField: 'tu huerto, macetas o parcela',
    modules: [
      {
        title: 'Suelo y preparación',
        description: 'Textura, pH, drenaje y preparación de camas de cultivo',
        lessons: [
          { title: 'Textura del suelo', concept: 'La proporción de arena, limo y arcilla determina retención de agua y aireación', practice: 'haz la prueba del puño: aprieta tierra húmeda; si forma bola que se desmenuza, el equilibrio es bueno', exampleTitle: 'Ejemplo: Textura del suelo', exampleContent: 'Un suelo muy arcilloso en maceta se compacta y asfixia raíces; mezclar compost mejora la estructura.', tip: 'Mezcla un tercio de compost al replantar macetas grandes.', question: '¿Qué indica un suelo con mucha arena?', options: ['Drena rápido pero retiene pocos nutrientes', 'Retiene demasiada humedad', 'Siempre es ácido', 'No necesita abono'], correct: 0 },
          { title: 'pH del suelo', concept: 'El pH mide acidez o alcalinidad y afecta la disponibilidad de nutrientes', practice: 'usa tiras reactivas o un medidor económico antes de elegir cultivos exigentes', exampleTitle: 'Ejemplo: pH del suelo', exampleContent: 'Los arándanos prefieren pH bajo (4,5–5,5); añadir azufre elemental puede acidificar lentamente.', tip: 'Registra el pH por zona: no asumas que toda la parcela es igual.', question: '¿Qué pH aproximado prefieren la mayoría de hortalizas?', options: ['Neutro ligeramente ácido (6,0–7,0)', 'Muy ácido (<4)', 'Fuertemente alcalino (>9)', 'El pH no importa'], correct: 0 },
          { title: 'Drenaje y aeración', concept: 'Las raíces necesitan oxígeno; el exceso de agua estancada provoca pudrición', practice: 'perfora macetas sin agujero y añade una capa de grava solo si el sustrato es muy denso', exampleTitle: 'Ejemplo: Drenaje', exampleContent: 'Tras lluvias intensas, revisa hoyos en hojas de lechuga: indican encharcamiento.', tip: 'Eleva macetas con patas o ladrillos en invierno húmedo.', question: '¿Por qué encharcar una maceta es peligroso?', options: ['Las raíces se ahogan por falta de oxígeno', 'La planta crece más rápido', 'El pH sube automáticamente', 'Atrae más luz solar'], correct: 0 },
          { title: 'Compost casero básico', concept: 'Materia orgánica descompuesta mejora estructura, nutrientes y vida microbiana', practice: 'alterna capas verdes (nitrógeno) y marrones (carbono) manteniendo humedad como esponja exprimida', exampleTitle: 'Ejemplo: Compost', exampleContent: 'Restos de cocina sin carne más hojas secas producen compost en 3–6 meses con volteo mensual.', tip: 'Evita semillas de maleza maduras en el montón si no alcanza alta temperatura.', question: '¿Qué equilibrio ayuda a descomponer más rápido?', options: ['Mezclar materiales verdes y marrones', 'Solo añadir tierra del jardín', 'Mantenerlo completamente seco', 'Usar solo cáscaras de huevo'], correct: 0 },
          { title: 'Camas elevadas', concept: 'Las raised beds calientan antes, drenan mejor y reducen compactación', practice: 'delimita con madera no tratada o piedra; rellena con mezcla 40% compost, 40% tierra, 20% arena', exampleTitle: 'Ejemplo: Camas elevadas', exampleContent: 'Una cama de 30 cm de profundidad basta para zanahorias y lechugas en suelo pobre.', tip: 'Orienta el lado largo norte-sur para reparto uniforme de luz.', question: '¿Ventaja principal de una cama elevada?', options: ['Mejor drenaje y menos pisoteo', 'No necesitan riego', 'Impiden todas las plagas', 'Funcionan solo en trópico'], correct: 0 },
          { title: 'Mulching orgánico', concept: 'La acolchado conserva humedad, modera temperatura del suelo y reduce malezas', practice: 'extiende 5–8 cm de paja, corteza fina o hojas secas sin tocar el tallo', exampleTitle: 'Ejemplo: Mulching', exampleContent: 'Fresas con paja de trigo sufren menos podredumbres y mantienen frutos limpios.', tip: 'Replenish mulch tras lluvias fuertes que lo dispersen.', question: '¿Qué hace el mulch en verano?', options: ['Reduce evaporación del suelo', 'Aumenta la salinidad', 'Bloquea la fotosíntesis de la planta', 'Elimina la necesidad de polinizadores'], correct: 0 },
          { title: 'Rotación de cultivos', concept: 'Alternar familias botánicas evita agotar nutrientes y rompe ciclos de plagas', practice: 'no plantes solanáceas (tomate, pimiento) en el mismo sitio dos años seguidos', exampleTitle: 'Ejemplo: Rotación', exampleContent: 'Tras tomates, siembra legumbres que fijan nitrógeno antes de volver a hortalizas de hoja.', tip: 'Dibuja un plano anual; la memoria falla en parcelas grandes.', question: '¿Por qué rotar familias de plantas?', options: ['Reduce acumulación de patógenos específicos', 'Hace el suelo más compacto', 'Impide el compost', 'Acelera la maduración del fruto'], correct: 0 },
          { title: 'Semilleros y trasplante', concept: 'Sembrar en bandeja protege de clima extremo y permite seleccionar plántulas fuertes', practice: 'usa sustrato ligero, riega alrededor del tallo y endurece plántulas una semana antes de trasplantar', exampleTitle: 'Ejemplo: Trasplante', exampleContent: 'Tomates trasplantados enterrando el tallo desarrollan raíces adventicias adicionales.', tip: 'Trasplanta al atardecer o día nublado para reducir shock.', question: '¿Qué es "aclimatar" plántulas?', options: ['Exponerlas gradualmente al exterior', 'Fertilizar con nitrógeno puro', 'Podar todas las hojas', 'Plantar directamente bajo sol pleno'], correct: 0 },
          { title: 'Herramientas esenciales', concept: 'Pala, rastrillo, podadora y regadera bien mantenidas ahorran tiempo y lesiones', practice: 'limpia y seca metal tras usar; afila corte limpio en podas sanas', exampleTitle: 'Ejemplo: Herramientas', exampleContent: 'Una podadora sucia puede transmitir virus entre frutales al cortar ramas.', tip: 'Desinfecta con alcohol isopropílico entre plantas sospechosas.', question: '¿Por qué afilar la podadora?', options: ['Corte limpio que cicatriza mejor', 'La planta crece más alta', 'Evita regar', 'Cambia el pH del suelo'], correct: 0 },
          { title: 'Calendario de siembra', concept: 'Cada especie tiene ventana óptima según temperatura del suelo y horas de luz', practice: 'consulta tabla local; adelantar siembra sin luz suficiente produce plantas etioladas', exampleTitle: 'Ejemplo: Calendario', exampleContent: 'Guisantes de invierno toleran heladas ligeras; melones requieren suelo cálido (>18 °C).', tip: 'Anota fechas reales de siembra y resultados en un cuaderno de jardín.', question: '¿Qué pasa si siembras calabaza demasiado pronto en clima frío?', options: ['Germinación lenta o podredumbre de semilla', 'Frutos más dulces', 'No necesita riego', 'Crece mejor en sombra'], correct: 0 },
        ],
      },
      {
        title: 'Riego, luz y nutrición',
        description: 'Necesidades hídricas, exposición solar y fertilización equilibrada',
        lessons: [
          { title: 'Riego profundo vs superficial', concept: 'Regar poco y a menudo favorece raíces superficiales; riego profundo las ancla', practice: 'aplica agua hasta humedecer 15–20 cm en hortalizas; deja secar la capa superior entre riegos', exampleTitle: 'Ejemplo: Riego profundo', exampleContent: 'Un tomatero con riego por goteo 30 min cada dos días rinde más que aspersión diaria breve.', tip: 'Usa el dedo a 3 cm de profundidad: si está seco, toca regar.', question: '¿Qué logra el riego profundo ocasional?', options: ['Raíces más profundas y resistentes', 'Elimina la necesidad de mulch', 'Sube el pH del agua', 'Impide la polinización'], correct: 0 },
          { title: 'Horario de riego', concept: 'Regar al amanecer reduce evaporación y deja hojas secas antes de la noche', practice: 'evita mojar follaje al atardecer en climas húmedos para prevenir hongos', exampleTitle: 'Ejemplo: Horario', exampleContent: 'Oídio en calabacín aparece más si riegas con aspersor al anochecer en verano.', tip: 'En ola de calor, riega al amanecer y sombrea temporalmente plántulas.', question: '¿Cuándo es mejor regar en verano?', options: ['Temprano por la mañana', 'Mediodía con sol pleno', 'Solo de noche sin excepción', 'Una vez al mes'], correct: 0 },
          { title: 'Luz solar y sombra', concept: 'Pleno sol son ≥6 h directas; sombra parcial 3–6 h; plena sombra <3 h', practice: 'observa sombras estacionales antes de instalar bancales permanentes', exampleTitle: 'Ejemplo: Luz', exampleContent: 'Espinacas y lechugas toleran sombra parcial; pimientos exigen pleno sol.', tip: 'Usa un brújula: sur (hemisferio norte) recibe más horas en verano.', question: '¿Cuántas horas mínimas de sol directo necesita un tomate?', options: ['Al menos 6 horas', '1 hora', 'Solo luz artificial', 'Ninguna'], correct: 0 },
          { title: 'Macronutrientes N-P-K', concept: 'Nitrógeno (N) follaje, fósforo (P) raíces/flores, potasio (K) frutos y resistencia', practice: 'lee etiquetas 10-10-10; usa fórmulas altas en K antes de fructificación', exampleTitle: 'Ejemplo: N-P-K', exampleContent: 'Exceso de N en tomate produce hojas exuberantes y pocos frutos.', tip: 'Abona poco y seguido mejor que mucho de golpe.', question: '¿Qué nutriente favorece principalmente la floración?', options: ['Fósforo (P)', 'Solo calcio', 'Cloro', 'Hierro en exceso'], correct: 0 },
          { title: 'Deficiencias visuales', concept: 'Clorosis interveinal puede ser hierro; bordes quemados, potasio; púrpura en hojas, fósforo', practice: 'corrige pH antes de abonar: nutrientes bloqueados parecen deficiencias', exampleTitle: 'Ejemplo: Deficiencias', exampleContent: 'Tomates en suelo alcalino muestran amarilleo aunque haya hierro disponible.', tip: 'Fotografía hojas afectadas y fecha para comparar tras tratamiento.', question: '¿Qué puede causar clorosis con suelo rico en hierro?', options: ['pH demasiado alto', 'Exceso de luz', 'Poco espacio entre plantas', 'Demasiado mulch'], correct: 0 },
          { title: 'Abonos orgánicos', concept: 'Estiércol compostado, humus de lombriz y emulsión de pescado liberan nutrientes lentamente', practice: 'nunca uses estiércol fresco: quema raíces y puede contener patógenos', exampleTitle: 'Ejemplo: Orgánico', exampleContent: 'Té de compost aerado aporta microorganismos benéficos al riego foliar diluido.', tip: 'Composta estiércol al menos 6 meses antes de aplicar.', question: '¿Por qué no usar estiércol fresco?', options: ['Puede quemar raíces y contener patógenos', 'No tiene nitrógeno', 'Sube el pH a 10', 'Repele polinizadores'], correct: 0 },
          { title: 'Riego por goteo casero', concept: 'El goteo entrega agua en la zona radicular con mínima pérdida', practice: 'instala manguera perforada o botellas con pinchazo; revisa caudal uniforme', exampleTitle: 'Ejemplo: Goteo', exampleContent: 'Botella de 2 L con 3 agujeros regula humedad en maceta de pimientos durante vacaciones.', tip: 'Filtra el agua si tus goteros se tapan con cal.', question: '¿Ventaja del riego por goteo?', options: ['Ahorra agua y reduce enfermedades foliares', 'Moja todo el jardín', 'No requiere planificación', 'Sustituye la luz solar'], correct: 0 },
          { title: 'Recolección de agua de lluvia', concept: 'Agua sin cloro y suave es ideal para riego; cumple normativa local', practice: 'cubre tanques, limpia filtros y no uses agua de tejado plomo en hortalizas', exampleTitle: 'Ejemplo: Lluvia', exampleContent: 'Un depósito de 200 L bajo un alero recoge agua suficiente para macetas una semana seca.', tip: 'Primera lluvia tras sequía en ciudad: desecha arranque si hay mucho polvo.', question: '¿Por qué la lluvia suele ser mejor que grifo para plantas?', options: ['Sin cloro y generalmente más blanda', 'Siempre más caliente', 'Contiene más sal', 'Tiene más nitrógeno fijo'], correct: 0 },
          { title: 'Síntomas de exceso de agua', concept: 'Hojas amarillas, marchitamiento paradójico y olor a humedad indican saturación', practice: 'mejora drenaje, reduce frecuencia y airea suelo con horquilla sin dañar raíces', exampleTitle: 'Ejemplo: Exceso', exampleContent: 'Orquídea con raíces marrones blandas necesita secado, no más riego.', tip: 'Macetas pesadas tras regar están bien; ligeras y hojas caídas alertan.', question: '¿Señal de riego excesivo?', options: ['Raíces blandas y olor fétido', 'Suelo agrietado seco', 'Hojas gruesas y azuladas por sol', 'Crecimiento lento por sequía'], correct: 0 },
          { title: 'Fertilización en macetas', concept: 'Volumen limitado agota nutrientes rápido; lixiviación por riego frecuente', practice: 'usa abono líquido diluido quincenal en crecimiento; reduce en invierno', exampleTitle: 'Ejemplo: Macetas', exampleContent: 'Albahaca en maceta pequeña se amarillea en 4 semanas sin reposición de nutrientes.', tip: 'Cambia parte del sustrato cada primavera en perennes en contenedor.', question: '¿Por qué macetas necesitan más abono que suelo abierto?', options: ['Menor volumen y lixiviación al regar', 'Las raíces no absorben', 'El sol quema nutrientes', 'No hay microorganismos'], correct: 0 },
        ],
      },
      {
        title: 'Cultivos comestibles',
        description: 'Hortalizas, hierbas aromáticas y frutales en espacios reducidos',
        lessons: [
          { title: 'Tomates en contenedor', concept: 'Variedades determinadas (bush) son más compactas; indeterminadas necesitan tutor', practice: 'maceta mínima 20 L, tutor desde plántula, elimina brotes axilares en variedades indeterminadas', exampleTitle: 'Ejemplo: Tomates', exampleContent: 'Cherry "Balcony" produce en maceta de 15 L en balcón soleado.', tip: 'Riega en la base; salpicaduras en hojas propagan hongos.', question: '¿Qué tipo de tomate conviene en balcón pequeño?', options: ['Variedad determinada compacta', 'Indeterminada de 3 m', 'Solo silvestre', 'Ninguno crece en maceta'], correct: 0 },
          { title: 'Hierbas aromáticas', concept: 'Albahaca, romero, tomillo y menta tienen necesidades distintas de agua y sol', practice: 'planta menta en maceta separada: invade por estolones', exampleTitle: 'Ejemplo: Hierbas', exampleContent: 'Romero en exceso de riego desarrolla raíces podridas; prefiere secado entre riegos.', tip: 'Cosecha albahaca por encima de un nudo para ramificar.', question: '¿Qué hierba debes aislar por invasiva?', options: ['Menta', 'Tomillo', 'Orégano seco', 'Perejil anual'], correct: 0 },
          { title: 'Cultivo de lechuga', concept: 'Crece rápido en fresco; bolting (floración) amarga hojas con calor y días largos', practice: 'siembra escalonada cada 2 semanas; sombrea en verano', exampleTitle: 'Ejemplo: Lechuga', exampleContent: 'Lechuga romana tolera menos frío que mantecosa pero rinde más en entretiempo.', tip: 'Cosecha hojas exteriores y deja crecer corazón en lechuga "corta y crece".', question: '¿Qué es bolting en lechuga?', options: ['Floración prematura que amarga hojas', 'Podredumbre radicular', 'Plaga de pulgón', 'Falta de nitrógeno'], correct: 0 },
          { title: 'Legumbres fijadoras', concept: 'Bacterias Rhizobium en nódulos convierten N₂ atmosférico en formas asimilables', practice: 'no arranques plantas al terminar: deja raíces en suelo para liberar nitrógeno', exampleTitle: 'Ejemplo: Legumbres', exampleContent: 'Guisantes seguidos de brócoli aprovechan suelo enriquecido sin abono extra.', tip: 'Inoculante de guisante ayuda si nunca cultivaste legumbres en ese suelo.', question: '¿Qué aportan las legumbres al suelo?', options: ['Nitrógeno fijado biológicamente', 'Sal marina', 'Solo agua', 'Plástico biodegradable'], correct: 0 },
          { title: 'Zanahorias y raíces', concept: 'Suelo suelto sin piedras produce raíces rectas; compactación causa horquillas', practice: 'siembra directa; ralea a 3 cm cuando tengan 5 cm de altura', exampleTitle: 'Ejemplo: Zanahorias', exampleContent: 'Mezclar arena fina en cama elevada evita zanahorias deformes en arcilla.', tip: 'Mantén semilla húmeda 10–14 días hasta germinar.', question: '¿Por qué salen zanahorias horquilladas?', options: ['Suelo compacto o piedras', 'Demasiado sol', 'Exceso de potasio', 'Polinización cruzada'], correct: 0 },
          { title: 'Calabacines y cucurbitáceas', concept: 'Necesitan polinizadores o polinización manual; frutos abortan si flor no fecundada', practice: 'identifica flores masculinas y femeninas; transfiere polen con pincel al mediodía', exampleTitle: 'Ejemplo: Calabacín', exampleContent: 'Una flor femenina sin polinizar se pudre en la base del fruto pequeño.', tip: 'Planta flores nectaríferas cerca para atraer abejas.', question: '¿Por qué aborta un calabacín pequeño?', options: ['Polinización insuficiente', 'Demasiado frío únicamente', 'Exceso de luz', 'Falta de tutor'], correct: 0 },
          { title: 'Patatas en saco', concept: 'Aporque repetido entierra tallos para formar tubérculos en nuevos nodos', practice: 'planta patata de semilla en saco con 15 cm sustrato; añade mezcla al crecer', exampleTitle: 'Ejemplo: Patatas', exampleContent: 'Saco de 50 L puede dar 2–3 kg en variedad temprana con riego constante.', tip: 'No uses patata de supermercado tratada con retardante de brotación.', question: '¿Para qué se aporque la patata?', options: ['Formar tubérculos en tallos enterrados', 'Evitar la fotosíntesis', 'Atraer pájaros', 'Reducir riego a cero'], correct: 0 },
          { title: 'Frutales en maceta', concept: 'Raíces limitadas restringen tamaño; necesitan poda y abono regular', practice: 'elige portainjerto enano; maceta ancha y profunda con buen drenaje', exampleTitle: 'Ejemplo: Frutales', exampleContent: 'Manzano enano "M27" vive años en maceta de 40 L con poda anual.', tip: 'Protege maceta en invierno: raíces heladas mueren más fácil que en suelo.', question: '¿Clave para frutal en maceta?', options: ['Portainjerto enano y poda anual', 'No regar nunca', 'Solo sombra', 'Maceta de 2 L'], correct: 0 },
          { title: 'Microgreens', concept: 'Brotes cosechados con cotiledones; alto sabor y nutrientes en pocos días', practice: 'siembra denso en bandeja poco profunda; cosecha con tijera al alcanzar 5–8 cm', exampleTitle: 'Ejemplo: Microgreens', exampleContent: 'Rábano y mostaza están listos en 7–10 días bajo luz brillante tras germinar.', tip: 'No confundas microgreens con germinados de frasco húmedo sin sustrato.', question: '¿Cuándo cosechar microgreens?', options: ['Con primeras hojas verdaderas o cotiledones grandes', 'Tras 6 meses', 'Solo cuando florezcan', 'Antes de germinar'], correct: 0 },
          { title: 'Policultivo y compañías', concept: 'Algunas combinaciones repelen plagas o aprovechan estratos (ej. maíz-frijol-calabaza)', practice: 'evita plantar cebolla junto a guisantes según tradición; prueba en pequeño', exampleTitle: 'Ejemplo: Compañías', exampleContent: 'Albahaca cerca de tomate puede reducir mosca blanca y atrae polinizadores.', tip: 'Documenta resultados: compañerismo varía con clima local.', question: '¿Qué es policultivo?', options: ['Varias especies cultivadas juntas de forma planificada', 'Un solo cultivo monocultivo', 'Solo plantas ornamentales', 'Cultivo sin agua'], correct: 0 },
        ],
      },
      {
        title: 'Plagas, enfermedades y salud vegetal',
        description: 'Identificación, prevención y manejo integrado de problemas',
        lessons: [
          { title: 'Pulgón y control mecánico', concept: 'Pulgones succionan savia y transmiten virus; proliferan sin depredadores', practice: 'chorro de agua, elimina brotes muy infestados, introduce mariquitas si es posible', exampleTitle: 'Ejemplo: Pulgón', exampleContent: 'Colonia en brotes tiernos de rosa se controla con jabón potásico diluido.', tip: 'Revisa parte inferior de hojas nuevas cada semana.', question: '¿Control mecánico de pulgones?', options: ['Chorro de agua y retirar brotes infestados', 'Más nitrógeno', 'Riego nocturno en hojas', 'Podar todo el follaje'], correct: 0 },
          { title: 'Caracoles y barreras', concept: 'Activos de noche y tiempo húmedo; dejan baba y agujeros irregulares', practice: 'barrera de cobre, cerveza en trampa poco profunda, recogida manual al amanecer', exampleTitle: 'Ejemplo: Caracoles', exampleContent: 'Ceniza o huevo triturado crea barrera áspera temporal tras lluvia.', tip: 'Elimina escondites: tablas, maleza densa junto a hortalizas.', question: '¿Cuándo recoger caracoles manualmente?', options: ['Al amanecer o tras lluvia', 'Mediodía soleado', 'Solo en invierno helado', 'Nunca es útil'], correct: 0 },
          { title: 'Oídio y hongos foliares', concept: 'Hongos que forman polvo blanco; favorecidos por humedad en hojas', practice: 'mejora ventilación, riega suelo, elimina hojas afectadas, azufre o bicarbonato preventivo', exampleTitle: 'Ejemplo: Oídio', exampleContent: 'Calabacín en invernadero sin ventilar desarrolla oídio en 48 h tras rocío nocturno.', tip: 'Variedades resistentes son primera línea en zonas húmedas.', question: '¿Qué favorece oídio?', options: ['Hojas mojadas y poca circulación de aire', 'Suelo seco y pleno sol', 'Falta de nitrógeno únicamente', 'Polinizadores'], correct: 0 },
          { title: 'Manchas foliares bacterianas', concept: 'Lesiones acuosas que se vuelven marrones; se propagan con salpicaduras', practice: 'rota cultivos, no trabajes plantas mojadas, desinfecta herramientas', exampleTitle: 'Ejemplo: Bacterias', exampleContent: 'Mancha bacteriana en tomate entra por heridas; evita regar con presión en follaje.', tip: 'No compostes plantas con signos bacterianos si el montón no calienta bien.', question: '¿Cómo se propagan muchas bacterias foliares?', options: ['Salpicaduras de agua y herramientas', 'Viento seco únicamente', 'Polinizadores', 'Exceso de luz UV'], correct: 0 },
          { title: 'Nematodos del suelo', concept: 'Gusanos microscópicos; algunos dañan raíces formando nódulos o agallas', practice: 'solariza suelo en verano, rota con tagetes marigold, mantén materia orgánica', exampleTitle: 'Ejemplo: Nematodos', exampleContent: 'Tomate con nematodos muestra marchitamiento diurno pese a riego adecuado.', tip: 'Variedades portainjerto resistentes existen para tomate comercial.', question: '¿Síntoma posible de nematodos?', options: ['Agallas o nódulos en raíces', 'Polvo blanco en hojas', 'Flores dobles', 'Frutos más dulces'], correct: 0 },
          { title: 'Control biológico', concept: 'Usar depredadores naturales o microorganismos en lugar de químicos amplios', practice: 'Bacillus thuringiensis para orugas; feromonas para confundir insectos', exampleTitle: 'Ejemplo: Biológico', exampleContent: 'Liberar crisopas consume pulgones en invernadero sin residuo químico.', tip: 'Químicos de amplio espectro matan depredadores útiles también.', question: '¿Qué es Bacillus thuringiensis?', options: ['Bacteria que controla larvas de lepidópteros', 'Abono nitrogenado', 'Hongos de oídio', 'Herbicida sistémico'], correct: 0 },
          { title: 'Trampas cromáticas', concept: 'Placas amarillas atraen insectos voladores; azules ciertos trips', practice: 'cuelga a nivel del follaje, renueva cuando están llenas o polvo las invalida', exampleTitle: 'Ejemplo: Trampas', exampleContent: 'Mosca blanca en brócoli se detecta pronto con trampa amarilla pegajosa.', tip: 'Trampas monitorean; solas no bastan en infestación grave.', question: '¿Para qué sirve trampa amarilla?', options: ['Detectar y capturar insectos voladores', 'Abonar con calcio', 'Regar automáticamente', 'Medir pH'], correct: 0 },
          { title: 'Cuarentena de plantas nuevas', concept: 'Planta comprada puede traer plagas ocultas; aislar evita contagio del huerto', practice: '7–14 días aparte, inspecciona hojas y sustrato, trata antes de integrar', exampleTitle: 'Ejemplo: Cuarentena', exampleContent: 'Orquídea de feria con cochinilla se aisló y trató con alcohol antes de unirse a colección.', tip: 'Revisa desagüe y parte inferior de maceta: hormigas indican pulgón.', question: '¿Por qué aislar planta nueva?', options: ['Evitar introducir plagas al resto', 'Aumentar floración', 'Bajar pH', 'Eliminar cloro del agua'], correct: 0 },
          { title: 'Higiene de fin de ciclo', concept: 'Restos vegetales enfermos pueden sobrevivir al invierno y reinfectar', practice: 'retira y elimina (no compostes) restos con mildiu u oídio severo', exampleTitle: 'Ejemplo: Higiene', exampleContent: 'Hojas de tomate con septoria retiradas en otoño reducen inóculo primaveral.', tip: 'Desinfecta tutores de tomate antes de guardarlos.', question: '¿Qué hacer con restos muy infectados?', options: ['Eliminar fuera del compost doméstico', 'Enterrar en cama activa', 'Dejar en superficie', 'Regar más'], correct: 0 },
          { title: 'MIP — manejo integrado', concept: 'Combina prevención, monitorización, umbrales de acción y tratamientos específicos', practice: 'identifica plaga antes de tratar; rota modos de acción si usas químicos', exampleTitle: 'Ejemplo: MIP', exampleContent: 'Orugas pocas en brócoli: recolección manual; muchas: Bt en lugar de insecticida amplio.', tip: 'Lleva registro de tratamientos y efectividad por temporada.', question: '¿Primer paso del MIP?', options: ['Identificar correctamente el problema', 'Aplicar fungicida preventivo siempre', 'Eliminar todas las plantas', 'Ignorar hasta desastre'], correct: 0 },
        ],
      },
      {
        title: 'Diseño de huerto y estaciones',
        description: 'Planificación espacial, invierno y cosecha a lo largo del año',
        lessons: [
          { title: 'Zonificación del espacio', concept: 'Agrupa por riego, sol y altura: altos al norte para no sombrear bajos (hemisferio norte)', practice: 'dibuja plano a escala con ruta de manguera y acceso para carretilla', exampleTitle: 'Ejemplo: Zonificación', exampleContent: 'Maíz al norte de lechugas evita sombra en verano por la tarde.', tip: 'Deja caminos de 60 cm mínimo entre camas para rodar.', question: '¿Por qué colocar plantas altas al norte?', options: ['Evitar sombrear cultivos bajos', 'Atraer más viento', 'Reducir polinización', 'Subir pH'], correct: 0 },
          { title: 'Huerto en contenedores urbano', concept: 'Balcones y terrazas requieren peso, drenaje y viento considerados', practice: 'macetas con platillo drenado; fija tutores; usa sustrato ligero si hay límite de peso', exampleTitle: 'Ejemplo: Urbano', exampleContent: 'Estructura de aluminio con macetas de 10 L produce hierbas y cherry en 4 m².', tip: 'Comprueba carga máxima de balcón antes de llenar barriles de agua.', question: '¿Riesgo olvidado en balcón?', options: ['Peso del sustrato húmedo y viento', 'Demasiada sombra siempre', 'Falta de polinizadores imposible', 'No hay plagas en altura'], correct: 0 },
          { title: 'Invernadero pasivo', concept: 'Estructura transparente captura calor; ventilación evita sobrecalentamiento', practice: 'abre laterales en días soleados >20 °C; cierra antes de heladas', exampleTitle: 'Ejemplo: Invernadero', exampleContent: 'Túnel de polietileno extiende temporada de tomate 4 semanas en clima templado.', tip: 'Humedad alta sin ventilar propicia hongos.', question: '¿Peligro de invernadero cerrado al sol?', options: ['Sobrecalentamiento y hongos', 'Plantas se congelan siempre', 'No entra luz', 'Elimina CO₂ necesario'], correct: 0 },
          { title: 'Cultivos de invierno', concept: 'Algunas especies toleran frío: kale, acelga, ajo plantado en otoño', practice: 'usa manta térmica en heladas fuertes; reduce riego con días cortos', exampleTitle: 'Ejemplo: Invierno', exampleContent: 'Ajo plantado en noviembre desarrolla raíces antes de dormir y brota en primavera.', tip: 'Mulch espeso protege raíces de perennes en heladas ocasionales.', question: '¿Cuándo plantar ajo en clima templado?', options: ['Otoño para raíces antes del invierno', 'Pleno verano', 'Solo primavera tardía', 'Nunca en exterior'], correct: 0 },
          { title: 'Semillas vs plántulas', concept: 'Semilla es económica y variada; plántula adelanta cosecha pero cuesta más', practice: 'direct sow para zanahoria, rábano; plántula para tomate, pimiento', exampleTitle: 'Ejemplo: Semillas', exampleContent: 'Un sobre de albahaca da 200 plantas; comprar 6 macetas ahorra tiempo, no dinero.', tip: 'Guarda semillas en sobre cerrado, fresco y seco; anota fecha.', question: '¿Qué conviene sembrar directo al suelo?', options: ['Zanahoria y rábano', 'Tomate y berenjena', 'Pimiento en clima frío', 'Patata en saco'], correct: 0 },
          { title: 'Cosecha y punto óptimo', concept: 'Cada cultivo tiene señales: color, tamaño, facilidad de separación', practice: 'cosecha mañana tras secar rocío; usa cuchillo limpio en frutos de vaina', exampleTitle: 'Ejemplo: Cosecha', exampleContent: 'Calabacín de 15–20 cm tiene mejor textura que gigante con semillas duras.', tip: 'Cosecha frecuente estimula más producción en muchas hortalizas.', question: '¿Cuándo cosechar calabacín tierno?', options: ['15–20 cm de longitud', 'Cuando pesa 5 kg', 'Tras primera helada', 'Solo cuando amarillea'], correct: 0 },
          { title: 'Conservación post-cosecha', concept: 'Lavado, secado, frío adecuado y contenedores prolongan vida útil', practice: 'no laves bayas hasta consumir; hierbas en ramo en agua como florero', exampleTitle: 'Ejemplo: Conservación', exampleContent: 'Tomate a temperatura ambiente sabe mejor que nevera <10 °C que apaga aromas.', tip: 'Separa manzanas de hojas verdes: etileno acelera marchitamiento.', question: '¿Dónde guardar tomate maduro para sabor?', options: ['Temperatura ambiente fuera de sol directo', 'Congelador sin blanquear', 'Nevera muy fría siempre', 'En agua como tallo'], correct: 0 },
          { title: 'Propagación por esqueje', concept: 'Fragmento de tallo enraiza clonando genotipo idéntico', practice: 'corta bajo nudo, quita hojas bajas, sustrato húmedo sin encharcar, bolsa transparente opcional', exampleTitle: 'Ejemplo: Esqueje', exampleContent: 'Romero enraiza en 4 semanas en mezcla arena-turba con humedad constante.', tip: 'Esquejes de tomate de brotes laterales son clones productivos.', question: '¿Qué mejora enraizamiento de esqueje?', options: ['Nudo bajo sustrato y humedad estable', 'Hojas sumergidas en agua', 'Sol pleno sin riego', 'Sustrato seco'], correct: 0 },
          { title: 'Banco de semillas propio', concept: 'Guardar semilla de plantas adaptadas a tu microclima preserva traits útiles', practice: 'fermenta semilla de tomate, seca completamente, etiqueta variedad y año', exampleTitle: 'Ejemplo: Semillas', exampleContent: 'Semilla de calabaza bien seca dura 5+ años en sobre hermético fresco.', tip: 'Prueba germinación en papel húmedo antes de depender de lote viejo.', question: '¿Por qué fermentar semilla de tomate?', options: ['Eliminar gel inhibidor y patógenos', 'Aumentar tamaño del fruto', 'Cambiar color de flor', 'Hacerla venenosa'], correct: 0 },
          { title: 'Evaluación anual del huerto', concept: 'Revisar qué funcionó, rotaciones, suelo agotado y objetivos del próximo ciclo', practice: 'actualiza plano, prueba suelo cada 2–3 años, rota familias según registro', exampleTitle: 'Ejemplo: Evaluación', exampleContent: 'Tras 3 años tomate mismo sitio, aumento de septoria obligó a cambiar cama.', tip: 'Fotos mensuales del mismo ángulo revelan cambios que la memoria olvida.', question: '¿Qué incluir en evaluación anual?', options: ['Rotaciones, rendimientos y problemas registrados', 'Solo contar macetas', 'Ignorar plagas pasadas', 'Eliminar compost'], correct: 0 },
        ],
      },
    ],
};

const COURSE_SPECS = [BOTANICA_SPEC, ...REST_COURSES];

function main() {
  mkdirSync(COURSES_DIR, { recursive: true });
  mkdirSync(ASSETS_DIR, { recursive: true });

  console.log('Generando cursos...\n');
  for (const spec of COURSE_SPECS) {
    const { id, modules } = spec;
    const lessonCount = modules.reduce((n, m) => n + m.lessons.length, 0);
    const coursePath = join(COURSES_DIR, `${id}.js`);
    const iconPath = join(ASSETS_DIR, `${id}.svg`);

    writeFileSync(coursePath, generateCourseFile(spec), 'utf8');
    if (SVG_ICONS[id]) {
      writeFileSync(iconPath, SVG_ICONS[id].trim(), 'utf8');
    }

    console.log(`  ✓ ${id}: ${lessonCount} lecciones → js/courses/${id}.js`);
    if (SVG_ICONS[id]) {
      console.log(`    icono → assets/courses/${id}.svg`);
    }
  }

  const totalLessons = COURSE_SPECS.reduce(
    (n, s) => n + s.modules.reduce((m, mod) => m + mod.lessons.length, 0),
    0,
  );
  console.log(`\n${COURSE_SPECS.length} cursos, ${totalLessons} lecciones totales.`);
}

main();
