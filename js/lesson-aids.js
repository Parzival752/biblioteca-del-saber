/**
 * Ayudas pedagógicas por lección — resumen, pasos y salida esperada
 */
export const LESSON_AIDS = {
  'l01-hola': {
    summary: ['JavaScript corre en el navegador', 'console.log() muestra mensajes', 'Los comentarios empiezan con //'],
    steps: ['Escribe console.log con tu mensaje', 'Usa comillas dobles o simples', 'Pulsa Comprobar'],
    expectedOutput: 'Aprendo JS hoy',
    analogy: 'console.log es como escribir en un cuaderno de notas que solo tú ves.',
    vocabulary: [
      { term: 'console.log', def: 'Función que imprime mensajes en la consola del desarrollador (F12).' },
      { term: 'String', def: 'Texto entre comillas: "así" o \'así\'.' },
      { term: 'Comentario //', def: 'Nota que JavaScript ignora. Sirve para explicar el código.' },
      { term: 'Instrucción', def: 'Cada línea de código que hace algo, terminada opcionalmente con ;' },
    ],
  },
  'l02-variables': {
    summary: ['let = valor que cambia', 'const = valor fijo', 'Usa nombres descriptivos'],
    steps: ['Declara const ciudad = "Madrid"', 'Declara let temperatura = 22', 'Imprime con + concatenando'],
    expectedOutput: 'Madrid: 22°C',
    analogy: 'Una variable es una caja etiquetada donde guardas un dato.',
    vocabulary: [
      { term: 'const', def: 'Declara constante. El valor no puede reasignarse después.' },
      { term: 'let', def: 'Declara variable mutable. Puedes cambiar su valor.' },
      { term: 'Concatenación', def: 'Unir strings con el operador +.' },
      { term: '=', def: 'Operador de asignación: guarda el valor de la derecha en la variable.' },
    ],
  },
  'l03-tipos': {
    summary: ['string = texto', 'number = número', 'boolean = true/false', 'typeof devuelve el tipo'],
    steps: ['Asigna un string a a', 'Asigna un number a b', 'Asigna un boolean a c', 'Imprime typeof separados por comas'],
    expectedOutput: 'string,number,boolean (en algún orden con comas)',
    analogy: 'Los tipos son las "formas" de los datos, como redondo vs cuadrado.',
    vocabulary: [
      { term: 'typeof', def: 'Operador que devuelve el tipo de un valor como string.' },
      { term: 'string', def: 'Tipo texto. Siempre entre comillas.' },
      { term: 'number', def: 'Tipo numérico: enteros y decimales sin comillas.' },
      { term: 'boolean', def: 'true o false — valores lógicos de verdad/falsedad.' },
    ],
  },
  'l04-operadores': {
    summary: ['=== compara valor y tipo', '>= mayor o igual', '&& y || combinan condiciones'],
    steps: ['Crea la función esMayorDeEdad', 'Compara edad >= 18', 'Devuelve true o false con return'],
    expectedOutput: 'true para 18+, false para menores',
    analogy: 'Los operadores son las reglas para tomar decisiones.',
    vocabulary: [
      { term: '===', def: 'Igualdad estricta: compara valor Y tipo.' },
      { term: '>=', def: 'Mayor o igual que.' },
      { term: 'return', def: 'Devuelve un valor y termina la función.' },
    ],
  },
  'l05-condicionales': {
    summary: ['if ejecuta código si la condición es true', 'else es la alternativa', 'else if para más casos'],
    steps: ['Compara nota >= 90 → "A"', 'Luego >= 70 → "B", >= 60 → "C"', 'Si no → "F"'],
    expectedOutput: 'calificar(95)="A", calificar(40)="F"',
    analogy: 'if/else es como un semáforo: una u otra dirección.',
    vocabulary: [
      { term: 'if', def: 'Ejecuta un bloque solo si la condición entre () es true.' },
      { term: 'else if', def: 'Prueba otra condición si el if anterior fue false.' },
      { term: 'else', def: 'Bloque que corre cuando ninguna condición anterior fue true.' },
    ],
  },
  'l06-bucles': {
    summary: ['for repite un bloque N veces', 'while repite mientras sea true', 'Acumula con una variable total'],
    steps: ['Crea variable total = 0', 'Bucle for de 1 a n', 'Suma cada i al total', 'return total'],
    expectedOutput: 'sumarHasta(5) → 15',
    analogy: 'Un bucle es repetir la misma acción como contar escalones.',
    vocabulary: [
      { term: 'for', def: 'Bucle con inicio, condición e incremento: for (let i=0; i<n; i++).' },
      { term: 'i++', def: 'Incrementa i en 1. Atajo de i = i + 1.' },
      { term: 'Acumulador', def: 'Variable que va sumando resultados en cada vuelta del bucle.' },
    ],
  },
  'l07-funciones': {
    summary: ['function agrupa código reutilizable', 'return devuelve un valor', 'Los parámetros son entradas'],
    steps: ['Define celsiusAFahrenheit(c)', 'Aplica F = C × 9/5 + 32', 'return el resultado'],
    expectedOutput: '0→32, 100→212',
    analogy: 'Una función es una receta: entradas → proceso → resultado.',
    vocabulary: [
      { term: 'function', def: 'Palabra clave para declarar una función con nombre.' },
      { term: 'Parámetro', def: 'Variable en la definición que recibe un valor al llamar.' },
      { term: 'Argumento', def: 'Valor concreto que pasas al llamar: func(5) — 5 es argumento.' },
    ],
  },
  'l08-arrays': {
    summary: ['Los arrays son listas ordenadas', 'arr[0] es el primer elemento', 'arr.length da el tamaño'],
    steps: ['Toma arr[0] y arr[arr.length-1]', 'Devuelve array con ambos'],
    expectedOutput: '[1,2,3,4] → [1,4]',
    analogy: 'Un array es una fila numerada de casillas.',
  },
  'l09-objetos': {
    summary: ['Objetos agrupan propiedades', 'obj.clave accede al valor', 'Los métodos son funciones dentro'],
    steps: ['return { nombre, edad, saludar() {...} }', 'saludar usa this.nombre'],
    expectedOutput: 'p.saludar() → "Hola, soy María"',
    analogy: 'Un objeto es una ficha con campos: nombre, edad, acciones.',
  },
  'l10-array-methods': {
    summary: ['map transforma cada elemento', 'filter deja solo los que cumplen', 'find busca el primero'],
    steps: ['Usa nums.filter(...)', 'Mantén solo n > 0', 'return el array filtrado'],
    expectedOutput: '[-1,2,-3,4,0] → [2,4]',
    analogy: 'filter es un colador: solo pasan los que cumplen la regla.',
  },
  'l11-dom': {
    summary: ['El DOM representa el HTML', 'textContent cambia el texto', 'getElementById busca elementos'],
    steps: ['mock.contador.textContent = String(valor)', 'mock.estado.textContent = "actualizado"'],
    expectedOutput: 'contador="7", estado="actualizado"',
    analogy: 'El DOM es el panel de control de la página web.',
  },
  'l12-async': {
    summary: ['Promise representa un valor futuro', 'async/await espera promesas', 'Promise.resolve crea una resuelta'],
    steps: ['return Promise.resolve(n * 2)', 'La función debe ser async-compatible'],
    expectedOutput: 'dobleAsync(4) resuelve a 8',
    analogy: 'Una promesa es un ticket: "te daré el resultado cuando esté listo".',
  },
  'l13-strings': {
    summary: ['.trim() quita espacios', '.split() divide en partes', '.length cuenta caracteres o palabras'],
    steps: ['texto.trim()', '.split con espacios', 'Cuenta las palabras'],
    expectedOutput: '"hola mundo" → 2 palabras',
    analogy: 'Los métodos string son herramientas para manipular texto.',
  },
  'l14-templates': {
    summary: ['Backticks ` permiten interpolar', '${variable} inserta valores', 'Más legible que concatenar con +'],
    steps: ['Usa return `Hola, ${nombre}...`', 'Incluye edad en el template'],
    expectedOutput: '"Hola, Luis. Tienes 25 años."',
    analogy: 'Template literals son cartas con espacios en blanco que rellenas.',
  },
  'l15-ternario': {
    summary: ['condición ? valorSi : valorNo', 'switch para muchas opciones', 'default es el caso resto'],
    steps: ['switch(n) con case 1-5', 'default → "Fin de semana"'],
    expectedOutput: '1→Lunes, 6→Fin de semana',
    analogy: 'El ternario es elegir entre dos caminos en una línea.',
  },
  'l16-destructuring': {
    summary: ['...rest recoge argumentos extras', 'spread expande arrays', 'reduce acumula valores'],
    steps: ['function sumarTodos(...numeros)', 'return numeros.reduce((a,b)=>a+b, 0)'],
    expectedOutput: '1+2+3 = 6',
    analogy: 'Spread es abrir una mochila y sacar todo su contenido.',
  },
  'l17-clases': {
    summary: ['class define un molde', 'constructor inicializa', 'new crea una instancia'],
    steps: ['constructor(radio) { this.radio = radio }', 'area() { return Math.PI * this.radio ** 2 }'],
    expectedOutput: 'Circulo(2).area() ≈ 12.57',
    analogy: 'Una clase es un plano; new construye la casa.',
  },
  'l18-errores': {
    summary: ['throw lanza un error', 'try/catch lo captura', 'isNaN detecta números inválidos'],
    steps: ['Number(str)', 'if isNaN → throw Error', 'return n'],
    expectedOutput: '"25"→25, "abc"→Error',
    analogy: 'try/catch es un paracaídas si algo sale mal.',
  },
  'l19-json': {
    summary: ['JSON.stringify → texto', 'JSON.parse → objeto', 'Formato estándar de APIs'],
    steps: ['toJSON usa JSON.stringify', 'fromJSON usa JSON.parse'],
    expectedOutput: 'objeto ↔ string JSON',
    analogy: 'JSON es el idioma universal para enviar datos.',
  },
  'l20-proyecto': {
    summary: ['Combina arrays, objetos y métodos', 'Estado en this.tareas', 'filter cuenta pendientes'],
    steps: ['push en agregar', 'hecho=true en completar', 'filter(!hecho).length'],
    expectedOutput: '2 tareas → completar 1 → 1 pendiente',
    analogy: 'Tu primera mini-app: lógica real como en producción.',
  },
};

export const GLOSSARY = [
  { term: 'Variable', def: 'Nombre que guarda un valor en memoria. Ej: let edad = 25' },
  { term: 'Función', def: 'Bloque de código reutilizable con nombre. Ej: function suma(a,b) { return a+b }' },
  { term: 'Array', def: 'Lista ordenada de valores. Ej: [1, 2, 3]' },
  { term: 'Objeto', def: 'Colección de propiedades clave-valor. Ej: { nombre: "Ana" }' },
  { term: 'console.log', def: 'Imprime un mensaje en la consola para depurar o ver resultados.' },
  { term: 'return', def: 'Devuelve un valor desde una función y termina su ejecución.' },
  { term: 'if / else', def: 'Ejecuta código solo si se cumple (o no) una condición.' },
  { term: 'for / while', def: 'Bucles que repiten código varias veces.' },
  { term: 'const / let', def: 'Palabras clave para declarar variables. const no se reasigna.' },
  { term: '===', def: 'Comparación estricta: mismo valor Y mismo tipo.' },
  { term: 'Arrow function', def: 'Sintaxis corta: (x) => x * 2 equivale a function(x) { return x*2 }' },
  { term: 'Promise', def: 'Representa un valor disponible ahora o en el futuro (asíncrono).' },
  { term: 'async / await', def: 'Forma legible de trabajar con promesas sin anidar .then().' },
  { term: 'DOM', def: 'Document Object Model: representación del HTML que JS puede modificar.' },
  { term: 'JSON', def: 'Formato de texto para intercambiar datos. JSON.parse / JSON.stringify.' },
  { term: 'Template literal', def: 'String con backticks que permite ${expresión} dentro.' },
  { term: 'map / filter', def: 'Métodos de array: transformar o filtrar elementos sin modificar el original.' },
  { term: 'class', def: 'Plantilla para crear objetos con propiedades y métodos compartidos.' },
  { term: 'try / catch', def: 'Captura errores en tiempo de ejecución para no romper el programa.' },
  { term: 'undefined / null', def: 'undefined = no asignado; null = vacío intencional.' },
];

export const CHEATSHEET = [
  { cat: 'Variables', code: 'const x = 10;\nlet y = 20;\ny = 30;' },
  { cat: 'Condicional', code: 'if (edad >= 18) {\n  // adulto\n} else {\n  // menor\n}' },
  { cat: 'Bucle for', code: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}' },
  { cat: 'Función', code: 'function suma(a, b) {\n  return a + b;\n}' },
  { cat: 'Arrow fn', code: 'const doble = n => n * 2;' },
  { cat: 'Array', code: 'const arr = [1, 2, 3];\narr.push(4);\narr[0]; // 1' },
  { cat: 'Objeto', code: 'const u = { nombre: "Ana" };\nu.nombre;\nu.edad = 25;' },
  { cat: 'Template', code: 'const msg = `Hola, ${nombre}!`;' },
  { cat: 'map/filter', code: 'arr.map(x => x * 2);\narr.filter(x => x > 0);' },
  { cat: 'Async', code: 'async function f() {\n  const r = await promesa;\n  return r;\n}' },
];

export function getLessonAids(lessonId) {
  return LESSON_AIDS[lessonId] ?? {
    summary: [],
    steps: ['Lee las instrucciones', 'Escribe tu código', 'Pulsa Probar y luego Comprobar'],
    expectedOutput: '(según el ejercicio)',
    analogy: '',
    vocabulary: [],
  };
}
