/**
 * Desglose línea a línea del código de ejemplo de cada lección
 */
export const CODE_BREAKDOWNS = {
  'l01-hola': {
    title: 'Desglose del ejemplo: tu primer código',
    lines: [
      {
        num: 1,
        code: '// Imprime un saludo en la consola',
        summary: 'Comentario — JavaScript ignora esta línea por completo.',
        parts: [
          { text: '//', label: 'Inicio de comentario', explain: 'Todo lo que va después de // en la misma línea es una nota para ti, no se ejecuta.' },
          { text: ' Imprime un saludo en la consola', label: 'Texto del comentario', explain: 'Explica qué hace el código de abajo. Buena práctica documentar.' },
        ],
      },
      {
        num: 2,
        code: 'console.log("Hola, JavaScript");',
        summary: 'Imprime el texto "Hola, JavaScript" en la consola.',
        parts: [
          { text: 'console', label: 'Objeto consola', explain: 'Objeto global del navegador para depurar. Muestra mensajes que el usuario normal no ve en la página.' },
          { text: '.', label: 'Acceso a miembro', explain: 'El punto accede a una propiedad o método del objeto de la izquierda.' },
          { text: 'log', label: 'Método log', explain: 'Función que recibe uno o más valores y los imprime en la consola del desarrollador.' },
          { text: '(', label: 'Abre paréntesis', explain: 'Inicia la lista de argumentos que pasamos a log().' },
          { text: '"Hola, JavaScript"', label: 'String (texto)', explain: 'Cadena de caracteres entre comillas dobles. Es el mensaje que se mostrará.' },
          { text: ')', label: 'Cierra paréntesis', explain: 'Fin de los argumentos de la función.' },
          { text: ';', label: 'Fin de instrucción', explain: 'Punto y coma opcional en JS, pero indica que la instrucción terminó.' },
        ],
      },
      {
        num: 3,
        code: 'console.log("Estoy aprendiendo a programar");',
        summary: 'Segunda llamada a log — imprime otra línea independiente.',
        parts: [
          { text: 'console.log', label: 'Misma función', explain: 'Puedes llamar console.log tantas veces como quieras; cada llamada es una línea nueva en la salida.' },
          { text: '("Estoy aprendiendo a programar")', label: 'Otro string', explain: 'Cada string es independiente. El orden de ejecución es de arriba hacia abajo.' },
          { text: ';', label: 'Fin', explain: 'Segunda instrucción completa del programa.' },
        ],
      },
    ],
  },

  'l02-variables': {
    title: 'Desglose: variables const y let',
    lines: [
      { num: 1, code: 'const nombre = "Ana";', summary: 'Constante nombre — no se puede reasignar.', parts: [
        { text: 'const', label: 'Declaración constante', explain: 'Crea una variable cuyo valor NO puede cambiar después de asignarlo.' },
        { text: ' nombre', label: 'Identificador', explain: 'Nombre de la variable. Sin espacios, sensible a mayúsculas.' },
        { text: ' = ', label: 'Asignación', explain: 'El signo = guarda el valor de la derecha en la variable.' },
        { text: '"Ana"', label: 'Valor string', explain: 'Texto entre comillas. Este es el contenido de nombre.' },
        { text: ';', label: 'Fin', explain: 'Termina la declaración.' },
      ]},
      { num: 2, code: 'let puntos = 0;', summary: 'Variable mutable puntos, empieza en 0.', parts: [
        { text: 'let', label: 'Declaración mutable', explain: 'A diferencia de const, let SÍ permite cambiar el valor más adelante.' },
        { text: ' puntos = 0', label: 'Nombre y valor inicial', explain: 'Variable numérica inicializada en cero.' },
        { text: ';', label: 'Fin', explain: '' },
      ]},
      { num: 3, code: 'puntos = puntos + 10;', summary: 'Reasigna puntos: lee 0, suma 10, guarda 10.', parts: [
        { text: 'puntos', label: 'Variable destino', explain: 'A la izquierda del = está lo que modificamos.' },
        { text: ' = puntos + 10', label: 'Nuevo valor', explain: 'Lee el valor actual (0), suma 10, guarda 10. Por eso let y no const.' },
        { text: ';', label: 'Fin', explain: '' },
      ]},
      { num: 4, code: 'console.log(nombre + " tiene " + puntos + " puntos");', summary: 'Concatena strings y número en un mensaje.', parts: [
        { text: 'console.log', label: 'Imprimir', explain: 'Muestra el resultado en consola.' },
        { text: '(nombre + " tiene " + puntos + " puntos")', label: 'Concatenación', explain: 'El operador + entre strings los une. JavaScript convierte puntos (número) a texto automáticamente.' },
        { text: ';', label: 'Fin', explain: 'Salida: Ana tiene 10 puntos' },
      ]},
    ],
  },

  'l03-tipos': {
    title: 'Desglose: typeof y tipos primitivos',
    lines: [
      { num: 1, code: 'console.log(typeof "hola");', summary: 'typeof devuelve "string" para texto.', parts: [
        { text: 'typeof', label: 'Operador typeof', explain: 'Operador unario que devuelve el tipo del valor como string.' },
        { text: ' "hola"', label: 'String literal', explain: 'Un valor de tipo texto.' },
      ]},
      { num: 2, code: 'console.log(typeof 42);', summary: 'typeof devuelve "number".', parts: [
        { text: '42', label: 'Number', explain: 'Entero sin comillas — es un número, no texto.' },
      ]},
      { num: 3, code: 'console.log(typeof true);', summary: 'typeof devuelve "boolean".', parts: [
        { text: 'true', label: 'Boolean', explain: 'Valor lógico verdadero. Solo existen true y false.' },
      ]},
      { num: 4, code: 'console.log(typeof undefined);', summary: 'typeof devuelve "undefined".', parts: [
        { text: 'undefined', label: 'Sin valor', explain: 'Variable declarada pero sin asignar, o valor ausente.' },
      ]},
    ],
  },

  'l04-operadores': {
    title: 'Desglose: operadores aritméticos y comparación',
    lines: [
      { num: 1, code: 'console.log(10 + 5);', summary: 'Suma → 15', parts: [{ text: '10 + 5', label: 'Suma', explain: 'Operador + con números hace suma aritmética.' }]},
      { num: 2, code: 'console.log(10 % 3);', summary: 'Módulo (resto) → 1', parts: [{ text: '10 % 3', label: 'Resto', explain: '10 dividido 3 = 3 sobra 1. % devuelve el residuo.' }]},
      { num: 3, code: 'console.log(5 === "5");', summary: 'Comparación estricta → false', parts: [{ text: '===', label: 'Igualdad estricta', explain: 'Compara valor Y tipo. 5 (number) ≠ "5" (string).' }]},
      { num: 4, code: 'console.log(5 === 5);', summary: 'Mismo tipo y valor → true', parts: [{ text: '5 === 5', label: 'True', explain: 'Ambos son number con valor 5.' }]},
    ],
  },

  'l05-condicionales': {
    title: 'Desglose: if / else if / else',
    lines: [
      { num: 1, code: 'const hora = 14;', summary: 'Variable hora valiendo 14 (2pm).', parts: [{ text: 'const hora = 14', label: 'Constante', explain: 'Guardamos la hora del día como número.' }]},
      { num: 2, code: 'if (hora < 12) {', summary: 'Si hora es menor que 12...', parts: [
        { text: 'if', label: 'Condicional', explain: 'Evalúa la condición entre paréntesis. Si es true, ejecuta el bloque {}.' },
        { text: '(hora < 12)', label: 'Condición', explain: '14 < 12 es false, así que este bloque NO se ejecuta.' },
      ]},
      { num: 3, code: '  console.log("Buenos días");', summary: 'Rama mañana (no se ejecuta aquí).', parts: [{ text: 'console.log(...)', label: 'Bloque if', explain: 'Solo corre si la condición del if es verdadera.' }]},
      { num: 4, code: '} else if (hora < 20) {', summary: 'Si no, prueba si hora < 20...', parts: [
        { text: 'else if', label: 'Alternativa', explain: 'Solo se evalúa si el if anterior fue false.' },
        { text: '(hora < 20)', label: '14 < 20 = true', explain: 'Esta condición SÍ se cumple.' },
      ]},
      { num: 5, code: '  console.log("Buenas tardes");', summary: 'Se ejecuta esta línea.', parts: [{ text: '"Buenas tardes"', label: 'Salida', explain: 'Es la primera rama verdadera que encuentra.' }]},
      { num: 6, code: '} else {', summary: 'Si ninguna condición cumple...', parts: [{ text: 'else', label: 'Por defecto', explain: 'Captura todos los casos restantes.' }]},
      { num: 7, code: '  console.log("Buenas noches");', summary: 'Solo si hora >= 20.', parts: [] },
      { num: 8, code: '}', summary: 'Cierra la estructura if.', parts: [] },
    ],
  },

  'l06-bucles': {
    title: 'Desglose: bucle for y acumulador',
    lines: [
      { num: 1, code: 'let suma = 0;', summary: 'Acumulador inicializado en 0.', parts: [{ text: 'let suma = 0', label: 'Acumulador', explain: 'Variable que iremos modificando en cada vuelta del bucle.' }]},
      { num: 2, code: 'for (let i = 1; i <= 5; i++) {', summary: 'Bucle: i va de 1 a 5.', parts: [
        { text: 'for', label: 'Bucle for', explain: 'Repite el bloque un número conocido de veces.' },
        { text: 'let i = 1', label: 'Inicio', explain: 'Variable contador empieza en 1.' },
        { text: 'i <= 5', label: 'Condición', explain: 'Sigue mientras i sea menor o igual a 5.' },
        { text: 'i++', label: 'Incremento', explain: 'Equivalente a i = i + 1. Suma 1 al final de cada vuelta.' },
      ]},
      { num: 3, code: '  suma = suma + i;', summary: 'Suma el contador al acumulador.', parts: [{ text: 'suma = suma + i', label: 'Acumular', explain: 'Vuelta 1: 0+1=1, vuelta 2: 1+2=3, ... final: 15.' }]},
      { num: 4, code: '}', summary: 'Fin del bucle.', parts: [] },
      { num: 5, code: 'console.log("Suma 1..5 =", suma);', summary: 'Imprime etiqueta y valor final.', parts: [
        { text: '"Suma 1..5 =", suma', label: 'Varios argumentos', explain: 'log puede recibir varios valores separados por coma.' },
      ]},
    ],
  },

  'l07-funciones': {
    title: 'Desglose: declaración de función',
    lines: [
      { num: 1, code: 'function areaRectangulo(base, altura) {', summary: 'Define función con dos parámetros.', parts: [
        { text: 'function', label: 'Palabra clave', explain: 'Declara una función reutilizable.' },
        { text: 'areaRectangulo', label: 'Nombre', explain: 'Identificador descriptivo de lo que calcula.' },
        { text: '(base, altura)', label: 'Parámetros', explain: 'Variables locales que reciben valores al llamar la función.' },
      ]},
      { num: 2, code: '  return base * altura;', summary: 'Devuelve base × altura.', parts: [
        { text: 'return', label: 'Retorno', explain: 'Termina la función y entrega un valor al llamador.' },
        { text: 'base * altura', label: 'Expresión', explain: 'Multiplica los parámetros recibidos.' },
      ]},
      { num: 3, code: '}', summary: 'Cierra el cuerpo de la función.', parts: [] },
      { num: 4, code: 'console.log(areaRectangulo(4, 5));', summary: 'Llama la función → 20', parts: [
        { text: 'areaRectangulo(4, 5)', label: 'Invocación', explain: 'base=4, altura=5. return 4*5 = 20.' },
      ]},
    ],
  },

  'l08-arrays': {
    title: 'Desglose: arrays y métodos',
    lines: [
      { num: 1, code: 'const numeros = [10, 20, 30];', summary: 'Array con 3 números.', parts: [
        { text: '[10, 20, 30]', label: 'Literal array', explain: 'Corchetes crean lista. Índices: 0→10, 1→20, 2→30.' },
      ]},
      { num: 2, code: 'numeros.push(40);', summary: 'Añade 40 al final.', parts: [
        { text: '.push(40)', label: 'Método push', explain: 'Modifica el array original añadiendo un elemento al final.' },
      ]},
      { num: 3, code: 'console.log(numeros);', summary: 'Muestra [10,20,30,40]', parts: [] },
      { num: 4, code: 'console.log("Longitud:", numeros.length);', summary: 'length = 4', parts: [
        { text: '.length', label: 'Propiedad length', explain: 'Cantidad de elementos en el array.' },
      ]},
    ],
  },

  'l09-objetos': {
    title: 'Desglose: objetos y propiedades',
    lines: [
      { num: 1, code: 'const libro = {', summary: 'Inicia objeto literal.', parts: [{ text: '{', label: 'Objeto', explain: 'Las llaves definen un objeto con pares clave: valor.' }]},
      { num: 2, code: '  titulo: "Aprende JS",', summary: 'Propiedad titulo (string).', parts: [{ text: 'titulo: "Aprende JS"', label: 'Propiedad', explain: 'Clave sin comillas, valor string con comillas.' }]},
      { num: 3, code: '  paginas: 200,', summary: 'Propiedad paginas (number).', parts: [] },
      { num: 4, code: '  leido: false', summary: 'Propiedad leido (boolean).', parts: [] },
      { num: 5, code: '};', summary: 'Cierra el objeto.', parts: [] },
      { num: 6, code: 'libro.leido = true;', summary: 'Modifica propiedad con punto.', parts: [{ text: 'libro.leido = true', label: 'Acceso y asignación', explain: 'Notación punto: objeto.propiedad' }]},
      { num: 7, code: 'console.log(libro.titulo, "-", libro.paginas, "págs");', summary: 'Lee propiedades para imprimir.', parts: [] },
    ],
  },

  'l10-array-methods': {
    title: 'Desglose: map y filter',
    lines: [
      { num: 1, code: 'const precios = [10, 25, 8, 40];', summary: 'Array de precios.', parts: [] },
      { num: 2, code: 'const conIva = precios.map(p => p * 1.16);', summary: 'map crea nuevo array × 1.16.', parts: [
        { text: '.map', label: 'Método map', explain: 'Transforma CADA elemento y devuelve array nuevo del mismo tamaño.' },
        { text: 'p => p * 1.16', label: 'Arrow function', explain: 'p es cada precio. Multiplica por 1.16 (IVA 16%).' },
      ]},
      { num: 3, code: 'const caros = precios.filter(p => p > 15);', summary: 'filter deja solo > 15.', parts: [
        { text: '.filter', label: 'Método filter', explain: 'Devuelve array solo con elementos que cumplen la condición.' },
        { text: 'p > 15', label: 'Condición', explain: '10❌ 25✓ 8❌ 40✓ → [25, 40]' },
      ]},
    ],
  },

  'l11-dom': {
    title: 'Desglose: simulación DOM',
    lines: [
      { num: 1, code: 'const mockDOM = {', summary: 'Objeto que simula elementos HTML.', parts: [{ text: 'mockDOM', label: 'Mock', explain: 'En web real sería document.getElementById(...).' }]},
      { num: 2, code: '  titulo: { textContent: "Original" },', summary: 'Elemento con texto.', parts: [{ text: 'textContent', label: 'Propiedad DOM', explain: 'En HTML real, cambia el texto visible del elemento.' }]},
      { num: 3, code: '  contador: { textContent: "0" }', summary: 'Otro elemento simulado.', parts: [] },
      { num: 4, code: '};', summary: '', parts: [] },
      { num: 5, code: 'mockDOM.titulo.textContent = "¡DOM actualizado!";', summary: 'Cambia el texto del título.', parts: [] },
      { num: 6, code: 'mockDOM.contador.textContent = String(42);', summary: 'Convierte número a string.', parts: [{ text: 'String(42)', label: 'Conversión', explain: 'textContent siempre es texto. String(42) → "42".' }]},
    ],
  },

  'l12-async': {
    title: 'Desglose: Promesas con .then',
    lines: [
      { num: 1, code: 'function obtenerDatos() {', summary: 'Función que devuelve promesa.', parts: [] },
      { num: 2, code: '  return Promise.resolve({ id: 1, nombre: "Producto" });', summary: 'Promesa resuelta con objeto.', parts: [
        { text: 'Promise.resolve', label: 'Promesa inmediata', explain: 'Crea promesa ya resuelta con ese valor. Simula respuesta de API.' },
        { text: '{ id: 1, nombre: "Producto" }', label: 'Payload', explain: 'Objeto que llegará cuando la promesa se cumpla.' },
      ]},
      { num: 3, code: '}', summary: '', parts: [] },
      { num: 4, code: 'obtenerDatos().then(dato => {', summary: 'Cuando resuelve, ejecuta callback.', parts: [
        { text: '.then', label: 'Encadenar', explain: 'Recibe función que se ejecuta cuando la promesa tiene éxito.' },
        { text: 'dato =>', label: 'Parámetro', explain: 'dato es el valor resuelto: { id: 1, nombre: "Producto" }.' },
      ]},
      { num: 5, code: '  console.log(dato.nombre);', summary: 'Imprime "Producto".', parts: [] },
      { num: 6, code: '});', summary: 'Cierra .then', parts: [] },
    ],
  },

  'l13-strings': {
    title: 'Desglose: métodos de string',
    lines: [
      { num: 1, code: 'const email = "  user@mail.com  ";', summary: 'String con espacios extra.', parts: [{ text: '"  user@mail.com  "', label: 'String', explain: 'Los espacios al inicio y final son parte del texto.' }]},
      { num: 2, code: 'console.log(email.trim());', summary: 'trim() quita espacios → user@mail.com', parts: [{ text: '.trim()', label: 'Método trim', explain: 'Elimina espacios en blanco al inicio y final. No modifica el original.' }]},
      { num: 3, code: 'console.log(email.includes("@"));', summary: 'includes("@") → true', parts: [{ text: '.includes("@")', label: 'Buscar substring', explain: 'Devuelve true si el string contiene @ en cualquier posición.' }]},
      { num: 4, code: 'console.log("hola mundo".split(" "));', summary: 'split divide → ["hola", "mundo"]', parts: [{ text: '.split(" ")', label: 'Dividir', explain: 'Separa el string en array usando el espacio como separador.' }]},
    ],
  },

  'l14-templates': {
    title: 'Desglose: template literals',
    lines: [
      { num: 1, code: 'const producto = "Laptop";', summary: 'Variable producto.', parts: [] },
      { num: 2, code: 'const precio = 899;', summary: 'Precio numérico.', parts: [] },
      { num: 3, code: 'console.log(`${producto}: $${precio}`);', summary: 'Template con interpolación.', parts: [
        { text: '`', label: 'Backtick', explain: 'Las comillas invertidas permiten template literals (no uses " ni \').' },
        { text: '${producto}', label: 'Interpolación', explain: 'Inserta el valor de la variable producto dentro del string.' },
        { text: '${precio}', label: 'Interpolación', explain: 'Inserta 899. JS convierte el número a texto automáticamente.' },
      ]},
    ],
  },

  'l17-clases': {
    title: 'Desglose: clase ES6',
    lines: [
      { num: 1, code: 'class Rectangulo {', summary: 'Declara clase Rectangulo.', parts: [{ text: 'class', label: 'Clase', explain: 'Plantilla para crear objetos con la misma estructura.' }]},
      { num: 2, code: '  constructor(ancho, alto) {', summary: 'Constructor — se ejecuta con new.', parts: [{ text: 'constructor', label: 'Constructor', explain: 'Método especial que inicializa propiedades al crear instancia.' }]},
      { num: 3, code: '    this.ancho = ancho;', summary: 'Guarda ancho en la instancia.', parts: [{ text: 'this', label: 'Instancia actual', explain: 'this referencia al objeto que se está creando.' }]},
      { num: 4, code: '  area() { return this.ancho * this.alto; }', summary: 'Método que calcula área.', parts: [{ text: 'area()', label: 'Método', explain: 'Función dentro de la clase. Accede a this.ancho y this.alto.' }]},
      { num: 5, code: 'const r = new Rectangulo(4, 5);', summary: 'Crea instancia 4×5.', parts: [{ text: 'new', label: 'Instanciar', explain: 'new llama al constructor y devuelve un objeto Rectangulo.' }]},
    ],
  },
};

// Generar desgloses genéricos para lecciones sin entrada manual
export function getCodeBreakdown(lessonId, exampleCode) {
  if (CODE_BREAKDOWNS[lessonId]) return CODE_BREAKDOWNS[lessonId];

  const lines = exampleCode.split('\n').filter((l) => l.trim());
  return {
    title: 'Desglose línea a línea',
    lines: lines.map((code, idx) => ({
      num: idx + 1,
      code: code.trim(),
      summary: describeLine(code.trim()),
      parts: parseLineParts(code.trim()),
    })),
  };
}

function describeLine(line) {
  if (line.startsWith('//')) return 'Comentario — no se ejecuta.';
  if (line.includes('console.log')) return 'Imprime un valor en la consola.';
  if (line.startsWith('function ') || line.startsWith('class ')) return 'Define una función o clase.';
  if (line.startsWith('const ') || line.startsWith('let ')) return 'Declara una variable.';
  if (line.startsWith('return ')) return 'Devuelve un valor.';
  if (line.includes('if ')) return 'Evalúa una condición.';
  if (line.startsWith('for ')) return 'Inicia un bucle.';
  return 'Instrucción de JavaScript.';
}

function parseLineParts(line) {
  const parts = [];
  if (line.startsWith('//')) {
    parts.push({ text: line, label: 'Comentario', explain: 'Nota para el programador. JavaScript la salta.' });
    return parts;
  }
  const keywords = ['const', 'let', 'function', 'return', 'class', 'if', 'else', 'for', 'async', 'await', 'try', 'catch', 'new'];
  for (const kw of keywords) {
    if (line.includes(kw)) {
      parts.push({ text: kw, label: 'Palabra clave', explain: explainKeyword(kw) });
    }
  }
  if (line.includes('console.log')) {
    parts.push({ text: 'console.log', label: 'Imprimir', explain: 'Muestra valores en la consola del navegador.' });
  }
  const strMatch = line.match(/"[^"]*"|'[^']*'|`[^`]*`/g);
  if (strMatch) {
    strMatch.forEach((s) => parts.push({ text: s, label: 'Texto (string)', explain: 'Cadena de caracteres entre comillas.' }));
  }
  return parts.length ? parts : [{ text: line, label: 'Línea', explain: 'Lee esta línea de arriba a abajo con el código.' }];
}

function explainKeyword(kw) {
  const map = {
    const: 'Declara constante — no reasignable.',
    let: 'Declara variable mutable.',
    function: 'Define función reutilizable.',
    return: 'Devuelve valor y termina función.',
    class: 'Define plantilla de objetos.',
    if: 'Ejecuta bloque si condición es true.',
    else: 'Alternativa si if fue false.',
    for: 'Bucle con contador.',
    async: 'Función asíncrona.',
    await: 'Espera resultado de promesa.',
    try: 'Intenta código que puede fallar.',
    catch: 'Captura errores del try.',
    new: 'Crea instancia de clase.',
  };
  return map[kw] || 'Elemento de sintaxis JavaScript.';
}

export function renderCodeExplorer(lessonId, exampleCode) {
  const bd = getCodeBreakdown(lessonId, exampleCode);
  if (!bd?.lines?.length) return '';

  return `
    <section class="code-explorer" aria-label="Explicación del código">
      <header class="code-explorer__head">
        <h3>🔍 ${bd.title}</h3>
        <p class="code-explorer__intro">Haz clic en cada línea para ver qué hace cada parte del código.</p>
      </header>
      <div class="code-explorer__layout">
        <ol class="code-explorer__lines">
          ${bd.lines.map((line, idx) => `
            <li class="code-line${idx === 0 ? ' active' : ''}" data-line-idx="${idx}">
              <span class="code-line__num">${line.num}</span>
              <code class="code-line__code">${escapeHtml(line.code)}</code>
              <p class="code-line__summary">${escapeHtml(line.summary)}</p>
            </li>
          `).join('')}
        </ol>
        <div class="code-explorer__detail" id="codeDetailPanel">
          ${renderLineDetail(bd.lines[0])}
        </div>
      </div>
    </section>
  `;
}

import { highlightJS } from './highlighter.js';

export function renderLineDetail(line) {
  if (!line) return '<p class="detail-empty">Selecciona una línea</p>';
  return `
    <div class="line-detail">
      <h4>Línea ${line.num}</h4>
      <pre class="line-detail__code"><code>${escapeHtml(line.code)}</code></pre>
      <p class="line-detail__summary">${line.summary}</p>
      ${line.parts?.length ? `
        <h5>Parte por parte</h5>
        <ul class="part-list">
          ${line.parts.map((p, i) => `
            <li class="part-item">
              <button type="button" class="part-chip" data-part-idx="${i}">
                <code>${escapeHtml(p.text)}</code>
                <span>${p.label}</span>
              </button>
              <div class="part-explain">${p.explain}</div>
            </li>
          `).join('')}
        </ul>
      ` : ''}
    </div>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function bindCodeExplorer(container, lessonId, exampleCode) {
  const bd = getCodeBreakdown(lessonId, exampleCode);
  const panel = container.querySelector('#codeDetailPanel');
  if (!panel || !bd) return;

  container.querySelectorAll('.code-line').forEach((el) => {
    el.addEventListener('click', () => {
      container.querySelectorAll('.code-line').forEach((l) => l.classList.remove('active'));
      el.classList.add('active');
      const idx = parseInt(el.dataset.lineIdx, 10);
      panel.innerHTML = renderLineDetail(bd.lines[idx]);
      bindPartChips(panel);
      // Highlight code in detail
      const codeEl = panel.querySelector('.line-detail__code code');
      if (codeEl) codeEl.innerHTML = highlightJS(codeEl.textContent);
    });
    const codeEl = el.querySelector('.code-line__code');
    if (codeEl) codeEl.innerHTML = highlightJS(codeEl.textContent);
  });

  bindPartChips(panel);
  const firstCode = panel.querySelector('.line-detail__code code');
  if (firstCode) firstCode.innerHTML = highlightJS(firstCode.textContent);
}

function bindPartChips(panel) {
  panel.querySelectorAll('.part-chip').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.querySelectorAll('.part-item').forEach((p) => p.classList.remove('part-item--open'));
      chip.closest('.part-item')?.classList.add('part-item--open');
    });
  });
}
