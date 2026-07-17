/**
 * Currículo completo — módulos, lecciones, ejemplos y tests
 */
export const CURRICULUM = [
  {
    id: 'mod-1',
    title: 'Primeros pasos',
    description: 'Qué es JS, consola y variables',
    lessons: [
      {
        id: 'l01-hola',
        title: '1. Tu primer JavaScript',
        duration: '8 min',
        theory: `
          <p>JavaScript (JS) es el lenguaje de la web. Corre en el navegador y sirve para dar vida a páginas, apps y juegos.</p>
          <p>La forma más simple de ver resultados es con <code>console.log()</code>, que imprime mensajes en la consola del desarrollador.</p>
          <h3>En este curso</h3>
          <ul>
            <li><strong>Teoría</strong> — conceptos con vocabulario y resumen</li>
            <li><strong>Ejemplo</strong> — desglose línea a línea de cada parte del código</li>
            <li><strong>Ejercicio</strong> — practica con pasos guiados y retroalimentación</li>
          </ul>
          <div class="tip-box tip-box--analogy">
            <strong>Ejemplo de la lección 1:</strong><br>
            <code>console.log("Hola")</code> → <code>console</code> es la consola,
            <code>.log</code> es el método imprimir,
            <code>"Hola"</code> es el texto a mostrar.
          </div>
        `,
        example: {
          code: `// Imprime un saludo en la consola
console.log("Hola, JavaScript");
console.log("Estoy aprendiendo a programar");`,
          explanation: 'Cada console.log muestra una línea en la salida.',
        },
        exercise: {
          instructions: 'Usa <code>console.log</code> para imprimir exactamente la frase: <strong>Aprendo JS hoy</strong>',
          starterCode: `// Escribe tu código aquí
`,
          hint: 'console.log("Aprendo JS hoy");',
          solution: 'console.log("Aprendo JS hoy");',
          tests: `
            if (__logs.length === 0) throw new Error('Usa console.log para imprimir algo');
            if (__logs[0] !== 'Aprendo JS hoy') throw new Error('Debe imprimir exactamente: Aprendo JS hoy');
          `,
        },
      },
      {
        id: 'l02-variables',
        title: '2. Variables: let y const',
        duration: '10 min',
        theory: `
          <p>Las <strong>variables</strong> guardan datos con un nombre.</p>
          <ul>
            <li><code>let</code> — valor que puede cambiar</li>
            <li><code>const</code> — valor constante (no se reasigna)</li>
          </ul>
          <pre><code>let edad = 25;
const PI = 3.1416;
edad = 26; // OK
// PI = 4; // ❌ Error</code></pre>
        `,
        example: {
          code: `const nombre = "Ana";
let puntos = 0;

puntos = puntos + 10;
console.log(nombre + " tiene " + puntos + " puntos");`,
          explanation: 'Concatenamos strings con + para formar un mensaje.',
        },
        exercise: {
          instructions: 'Crea <code>const ciudad = "Madrid"</code> y <code>let temperatura = 22</code>. Imprime: <strong>Madrid: 22°C</strong>',
          starterCode: `// Define ciudad y temperatura
`,
          hint: 'Usa console.log(ciudad + ": " + temperatura + "°C");',
          solution: `const ciudad = "Madrid";
let temperatura = 22;
console.log(ciudad + ": " + temperatura + "°C");`,
          tests: `
            if (typeof ciudad !== 'string') throw new Error('Define const ciudad como texto');
            if (ciudad !== 'Madrid') throw new Error('ciudad debe ser "Madrid"');
            if (temperatura !== 22) throw new Error('temperatura debe ser 22');
            if (__logs[0] !== 'Madrid: 22°C') throw new Error('Salida esperada: Madrid: 22°C');
          `,
        },
      },
      {
        id: 'l03-tipos',
        title: '3. Tipos de datos',
        duration: '12 min',
        theory: `
          <p>JavaScript tiene varios tipos primitivos:</p>
          <ul>
            <li><code>string</code> — texto: <code>"hola"</code></li>
            <li><code>number</code> — números: <code>42</code>, <code>3.14</code></li>
            <li><code>boolean</code> — <code>true</code> o <code>false</code></li>
            <li><code>undefined</code> y <code>null</code> — ausencia de valor</li>
          </ul>
          <p>Usa <code>typeof x</code> para conocer el tipo.</p>
        `,
        example: {
          code: `console.log(typeof "hola");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);`,
          explanation: 'typeof devuelve el tipo como string.',
        },
        exercise: {
          instructions: 'Crea variables <code>a</code>, <code>b</code>, <code>c</code> con un string, un number y un boolean. Imprime los tres typeof separados por comas.',
          starterCode: `let a;
let b;
let c;
// Asigna valores y muestra typeof
`,
          hint: 'console.log(typeof a + "," + typeof b + "," + typeof c);',
          solution: `let a = "hola";
let b = 42;
let c = true;
console.log(typeof a + "," + typeof b + "," + typeof c);`,
          tests: `
            if (typeof a !== 'string') throw new Error('a debe ser un string');
            if (typeof b !== 'number') throw new Error('b debe ser un number');
            if (typeof c !== 'boolean') throw new Error('c debe ser un boolean');
            const out = __logs[0] || '';
            if (!out.includes('string') || !out.includes('number') || !out.includes('boolean'))
              throw new Error('Imprime los typeof de a, b y c separados por comas');
          `,
        },
      },
    ],
  },
  {
    id: 'mod-2',
    title: 'Lógica y control',
    description: 'Operadores, condicionales y bucles',
    lessons: [
      {
        id: 'l04-operadores',
        title: '4. Operadores',
        duration: '10 min',
        theory: `
          <p>Operadores aritméticos: <code>+ - * / %</code></p>
          <p>Comparación: <code>=== !== &gt; &lt; &gt;= &lt;=</code></p>
          <p>Lógicos: <code>&amp;&amp;</code> (y), <code>||</code> (o), <code>!</code> (no)</p>
          <p>Usa <strong>===</strong> para comparar sin convertir tipos.</p>
        `,
        example: {
          code: `console.log(10 + 5);
console.log(10 % 3);
console.log(5 === "5");
console.log(5 === 5);`,
          explanation: '% es el resto de la división. === es comparación estricta.',
        },
        exercise: {
          instructions: 'Escribe una función <code>esMayorDeEdad(edad)</code> que devuelva <code>true</code> si edad >= 18, si no <code>false</code>.',
          starterCode: `function esMayorDeEdad(edad) {
  // tu código
}
`,
          hint: 'return edad >= 18;',
          solution: `function esMayorDeEdad(edad) {
  return edad >= 18;
}`,
          tests: `
            if (typeof esMayorDeEdad !== 'function') throw new Error('Define la función esMayorDeEdad');
            if (esMayorDeEdad(18) !== true) throw new Error('18 debe ser mayor de edad');
            if (esMayorDeEdad(17) !== false) throw new Error('17 no debe ser mayor de edad');
            if (esMayorDeEdad(25) !== true) throw new Error('25 debe ser mayor de edad');
          `,
        },
      },
      {
        id: 'l05-condicionales',
        title: '5. Condicionales if / else',
        duration: '12 min',
        theory: `
          <p>Ejecuta código solo cuando se cumple una condición:</p>
          <pre><code>if (nota >= 60) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}</code></pre>
          <p>También existe <code>else if</code> para más ramas.</p>
        `,
        example: {
          code: `const hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 20) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}`,
          explanation: 'Se evalúa la primera condición verdadera.',
        },
        exercise: {
          instructions: 'Función <code>calificar(nota)</code>: devuelve "A" si nota>=90, "B" si >=70, "C" si >=60, sino "F".',
          starterCode: `function calificar(nota) {
  // tu código
}
`,
          hint: 'Usa if / else if encadenados con return.',
          solution: `function calificar(nota) {
  if (nota >= 90) return "A";
  if (nota >= 70) return "B";
  if (nota >= 60) return "C";
  return "F";
}`,
          tests: `
            if (calificar(95) !== 'A') throw new Error('95 → A');
            if (calificar(85) !== 'B') throw new Error('85 → B');
            if (calificar(65) !== 'C') throw new Error('65 → C');
            if (calificar(40) !== 'F') throw new Error('40 → F');
          `,
        },
      },
      {
        id: 'l06-bucles',
        title: '6. Bucles for y while',
        duration: '14 min',
        theory: `
          <p><code>for</code> repite un bloque un número conocido de veces:</p>
          <pre><code>for (let i = 0; i &lt; 3; i++) {
  console.log(i);
}</code></pre>
          <p><code>while</code> repite mientras la condición sea verdadera.</p>
        `,
        example: {
          code: `let suma = 0;
for (let i = 1; i <= 5; i++) {
  suma = suma + i;
}
console.log("Suma 1..5 =", suma);`,
          explanation: 'Acumulamos valores en una variable suma.',
        },
        exercise: {
          instructions: 'Función <code>sumarHasta(n)</code> que devuelva la suma 1+2+...+n. Ej: sumarHasta(5) → 15.',
          starterCode: `function sumarHasta(n) {
  // tu código
}
`,
          hint: 'Usa un for de 1 a n y acumula en una variable total.',
          solution: `function sumarHasta(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}`,
          tests: `
            if (sumarHasta(5) !== 15) throw new Error('sumarHasta(5) debe ser 15');
            if (sumarHasta(1) !== 1) throw new Error('sumarHasta(1) debe ser 1');
            if (sumarHasta(10) !== 55) throw new Error('sumarHasta(10) debe ser 55');
          `,
        },
      },
    ],
  },
  {
    id: 'mod-3',
    title: 'Funciones y datos',
    description: 'Funciones, arrays y objetos',
    lessons: [
      {
        id: 'l07-funciones',
        title: '7. Funciones',
        duration: '12 min',
        theory: `
          <p>Las funciones agrupan código reutilizable:</p>
          <pre><code>function saludar(nombre) {
  return "Hola, " + nombre;
}

const duplicar = (x) => x * 2; // arrow function</code></pre>
          <p><code>return</code> devuelve un valor y termina la función.</p>
        `,
        example: {
          code: `function areaRectangulo(base, altura) {
  return base * altura;
}

console.log(areaRectangulo(4, 5));
console.log(areaRectangulo(3, 7));`,
          explanation: 'Una función puede usarse muchas veces con distintos argumentos.',
        },
        exercise: {
          instructions: 'Crea <code>celsiusAFahrenheit(c)</code>: F = C × 9/5 + 32. Devuelve el número (redondeo no necesario).',
          starterCode: `function celsiusAFahrenheit(c) {
  // tu código
}
`,
          hint: 'return c * 9/5 + 32;',
          solution: `function celsiusAFahrenheit(c) {
  return c * 9/5 + 32;
}`,
          tests: `
            if (celsiusAFahrenheit(0) !== 32) throw new Error('0°C = 32°F');
            if (celsiusAFahrenheit(100) !== 212) throw new Error('100°C = 212°F');
          `,
        },
      },
      {
        id: 'l08-arrays',
        title: '8. Arrays (arreglos)',
        duration: '14 min',
        theory: `
          <p>Los arrays guardan listas ordenadas:</p>
          <pre><code>const frutas = ["manzana", "pera", "uva"];
console.log(frutas[0]);
frutas.push("mango");
console.log(frutas.length);</code></pre>
        `,
        example: {
          code: `const numeros = [10, 20, 30];
numeros.push(40);
console.log(numeros);
console.log("Longitud:", numeros.length);`,
          explanation: 'Los índices empiezan en 0. push añade al final.',
        },
        exercise: {
          instructions: 'Función <code>primerYUltimo(arr)</code> que devuelva un array con el primer y último elemento. Ej: [1,2,3,4] → [1,4]',
          starterCode: `function primerYUltimo(arr) {
  // tu código
}
`,
          hint: 'return [arr[0], arr[arr.length - 1]];',
          solution: `function primerYUltimo(arr) {
  return [arr[0], arr[arr.length - 1]];
}`,
          tests: `
            const r1 = primerYUltimo([1,2,3,4]);
            if (!Array.isArray(r1) || r1[0] !== 1 || r1[1] !== 4) throw new Error('[1,2,3,4] → [1,4]');
            const r2 = primerYUltimo(["a","b"]);
            if (r2[0] !== "a" || r2[1] !== "b") throw new Error('["a","b"] → ["a","b"]');
          `,
        },
      },
      {
        id: 'l09-objetos',
        title: '9. Objetos',
        duration: '14 min',
        theory: `
          <p>Los objetos agrupan propiedades con nombre:</p>
          <pre><code>const usuario = {
  nombre: "Luis",
  edad: 28,
  activo: true
};
console.log(usuario.nombre);
usuario.edad = 29;</code></pre>
        `,
        example: {
          code: `const libro = {
  titulo: "Aprende JS",
  paginas: 200,
  leido: false
};

libro.leido = true;
console.log(libro.titulo, "-", libro.paginas, "págs");`,
          explanation: 'Accede con punto: objeto.propiedad',
        },
        exercise: {
          instructions: 'Función <code>crearPersona(nombre, edad)</code> que devuelva un objeto <code>{ nombre, edad, saludar }</code> donde saludar() retorna "Hola, soy " + nombre.',
          starterCode: `function crearPersona(nombre, edad) {
  // tu código
}
`,
          hint: 'return { nombre, edad, saludar() { return "Hola, soy " + this.nombre; } };',
          solution: `function crearPersona(nombre, edad) {
  return {
    nombre,
    edad,
    saludar() { return "Hola, soy " + this.nombre; }
  };
}`,
          tests: `
            const p = crearPersona("María", 30);
            if (p.nombre !== "María" || p.edad !== 30) throw new Error('Propiedades incorrectas');
            if (typeof p.saludar !== 'function') throw new Error('Debe tener método saludar');
            if (p.saludar() !== "Hola, soy María") throw new Error('saludar() incorrecto');
          `,
        },
      },
    ],
  },
  {
    id: 'mod-4',
    title: 'JavaScript moderno',
    description: 'Array methods, DOM y asincronía',
    lessons: [
      {
        id: 'l10-array-methods',
        title: '10. map, filter y find',
        duration: '15 min',
        theory: `
          <p>Métodos funcionales de arrays:</p>
          <ul>
            <li><code>map</code> — transforma cada elemento</li>
            <li><code>filter</code> — filtra por condición</li>
            <li><code>find</code> — encuentra el primero que cumple</li>
          </ul>
          <pre><code>[1,2,3].map(n => n * 2)  // [2,4,6]
[1,2,3,4].filter(n => n % 2 === 0)  // [2,4]</code></pre>
        `,
        example: {
          code: `const precios = [10, 25, 8, 40];
const conIva = precios.map(p => p * 1.16);
const caros = precios.filter(p => p > 15);
console.log(conIva);
console.log(caros);`,
          explanation: 'Arrow functions: (param) => expresión',
        },
        exercise: {
          instructions: 'Función <code>soloPositivos(nums)</code> que use filter y devuelva solo números &gt; 0.',
          starterCode: `function soloPositivos(nums) {
  // usa .filter()
}
`,
          hint: 'return nums.filter(n => n > 0);',
          solution: `function soloPositivos(nums) {
  return nums.filter(n => n > 0);
}`,
          tests: `
            const r = soloPositivos([-1, 2, -3, 4, 0]);
            if (JSON.stringify(r) !== JSON.stringify([2,4])) throw new Error('[-1,2,-3,4,0] → [2,4]');
          `,
        },
      },
      {
        id: 'l11-dom',
        title: '11. DOM básico',
        duration: '16 min',
        theory: `
          <p>El <strong>DOM</strong> representa el HTML como objetos que JS puede modificar.</p>
          <ul>
            <li><code>document.getElementById("id")</code></li>
            <li><code>elemento.textContent = "..."</code></li>
            <li><code>elemento.classList.add("clase")</code></li>
          </ul>
          <p>En este ejercicio simulamos un mini-DOM con el objeto <code>mockDOM</code>.</p>
        `,
        example: {
          code: `// Simulación para practicar
const mockDOM = {
  titulo: { textContent: "Original" },
  contador: { textContent: "0" }
};

mockDOM.titulo.textContent = "¡DOM actualizado!";
mockDOM.contador.textContent = String(42);
console.log(mockDOM.titulo.textContent);
console.log(mockDOM.contador.textContent);`,
          explanation: 'En una web real usarías document.getElementById en lugar de mockDOM.',
        },
        exercise: {
          instructions: 'Función <code>actualizarContador(mock, valor)</code> que ponga mock.contador.textContent al string de valor y mock.estado.textContent a "actualizado".',
          starterCode: `function actualizarContador(mock, valor) {
  // mock tiene .contador y .estado con textContent
}
`,
          hint: 'mock.contador.textContent = String(valor);',
          solution: `function actualizarContador(mock, valor) {
  mock.contador.textContent = String(valor);
  mock.estado.textContent = "actualizado";
}`,
          tests: `
            const mock = {
              contador: { textContent: "0" },
              estado: { textContent: "" }
            };
            actualizarContador(mock, 7);
            if (mock.contador.textContent !== "7") throw new Error('contador debe ser "7"');
            if (mock.estado.textContent !== "actualizado") throw new Error('estado debe ser "actualizado"');
          `,
        },
      },
      {
        id: 'l12-async',
        title: '12. Promesas y async/await',
        duration: '18 min',
        theory: `
          <p>Operaciones asíncronas (red, temporizadores) usan <strong>Promesas</strong>:</p>
          <pre><code>function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("listo"), ms);
  });
}

async function main() {
  const r = await esperar(100);
  console.log(r);
}</code></pre>
          <p><code>async/await</code> hace el código asíncrono más legible.</p>
        `,
        example: {
          code: `function obtenerDatos() {
  return Promise.resolve({ id: 1, nombre: "Producto" });
}

obtenerDatos().then(dato => {
  console.log(dato.nombre);
});`,
          explanation: '.then ejecuta código cuando la promesa se resuelve.',
        },
        exercise: {
          instructions: 'Función <code>dobleAsync(n)</code> que devuelva una Promise que resuelva con n * 2 (usa Promise.resolve).',
          starterCode: `function dobleAsync(n) {
  // devuelve Promise
}
`,
          hint: 'return Promise.resolve(n * 2);',
          tests: `
            const p = dobleAsync(4);
            if (!p || typeof p.then !== 'function') throw new Error('Debe devolver una Promise');
            const valor = await p;
            if (valor !== 8) throw new Error('dobleAsync(4) debe resolver a 8');
            const p2 = await dobleAsync(0);
            if (p2 !== 0) throw new Error('dobleAsync(0) debe ser 0');
          `,
          async: true,
          solution: `function dobleAsync(n) {
  return Promise.resolve(n * 2);
}`,
        },
      },
    ],
  },
  {
    id: 'mod-5',
    title: 'Strings y ES6+',
    description: 'Texto, plantillas y sintaxis moderna',
    lessons: [
      {
        id: 'l13-strings',
        title: '13. Strings y métodos',
        duration: '12 min',
        theory: `
          <p>Los <strong>strings</strong> son cadenas de texto. Tienen propiedades y métodos útiles:</p>
          <pre><code>const s = "JavaScript";
s.length          // 10
s.toUpperCase()   // "JAVASCRIPT"
s.includes("Script") // true
s.slice(0, 4)     // "Java"</code></pre>
          <p>Los métodos <strong>no modifican</strong> el string original; devuelven uno nuevo.</p>
        `,
        example: {
          code: `const email = "  user@mail.com  ";
console.log(email.trim());
console.log(email.includes("@"));
console.log("hola mundo".split(" "));`,
          explanation: 'trim() quita espacios. split() divide en array.',
        },
        exercise: {
          instructions: 'Función <code>contarPalabras(texto)</code> que devuelva cuántas palabras tiene (separadas por espacios). Usa trim y split.',
          starterCode: `function contarPalabras(texto) {
  // tu código
}
`,
          hint: 'return texto.trim().split(/\\s+/).filter(Boolean).length;',
          solution: `function contarPalabras(texto) {
  return texto.trim().split(/\\s+/).filter(Boolean).length;
}`,
          tests: `
            if (contarPalabras("hola mundo") !== 2) throw new Error('"hola mundo" → 2');
            if (contarPalabras("  uno  ") !== 1) throw new Error('"  uno  " → 1');
            if (contarPalabras("a b c d") !== 4) throw new Error('"a b c d" → 4');
          `,
        },
      },
      {
        id: 'l14-templates',
        title: '14. Template literals',
        duration: '10 min',
        theory: `
          <p>Con <strong>backticks</strong> <code>\`...\`</code> puedes interpolar variables:</p>
          <pre><code>const nombre = "Ana";
const msg = \`Hola, \${nombre}!\`;
console.log(msg); // Hola, Ana!</code></pre>
          <p>También permiten strings multilínea sin concatenar.</p>
        `,
        example: {
          code: `const producto = "Laptop";
const precio = 899;
console.log(\`\${producto}: \$\${precio}\`);
console.log(\`Línea 1
Línea 2\`);`,
          explanation: '${} inserta cualquier expresión JavaScript.',
        },
        exercise: {
          instructions: 'Función <code>presentar(nombre, edad)</code> que devuelva exactamente: <strong>Hola, {nombre}. Tienes {edad} años.</strong> usando template literal.',
          starterCode: `function presentar(nombre, edad) {
  // usa \`...\`
}
`,
          hint: 'return `Hola, ${nombre}. Tienes ${edad} años.`;',
          solution: `function presentar(nombre, edad) {
  return \`Hola, \${nombre}. Tienes \${edad} años.\`;
}`,
          tests: `
            if (presentar("Luis", 25) !== "Hola, Luis. Tienes 25 años.") throw new Error('Formato incorrecto');
            if (presentar("Eva", 30) !== "Hola, Eva. Tienes 30 años.") throw new Error('Segundo caso falló');
          `,
        },
      },
      {
        id: 'l15-ternario',
        title: '15. Ternario y switch',
        duration: '12 min',
        theory: `
          <p>Operador ternario — if compacto:</p>
          <pre><code>const tipo = edad >= 18 ? "adulto" : "menor";</code></pre>
          <p><code>switch</code> para muchas ramas sobre un mismo valor:</p>
          <pre><code>switch (dia) {
  case 1: return "Lunes"; break;
  case 2: return "Martes"; break;
  default: return "Otro";
}</code></pre>
        `,
        example: {
          code: `function iconoClima(c) {
  return c === "sol" ? "☀️" : c === "lluvia" ? "🌧️" : "❓";
}
console.log(iconoClima("sol"));
console.log(iconoClima("lluvia"));`,
          explanation: 'El ternario devuelve uno u otro valor según la condición.',
        },
        exercise: {
          instructions: 'Función <code>diaSemana(n)</code>: 1→"Lunes", 2→"Martes", 3→"Miércoles", 4→"Jueves", 5→"Viernes", otro→"Fin de semana". Usa switch.',
          starterCode: `function diaSemana(n) {
  // switch
}
`,
          hint: 'switch(n) { case 1: return "Lunes"; ... }',
          solution: `function diaSemana(n) {
  switch (n) {
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miércoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    default: return "Fin de semana";
  }
}`,
          tests: `
            if (diaSemana(1) !== "Lunes") throw new Error('1 → Lunes');
            if (diaSemana(5) !== "Viernes") throw new Error('5 → Viernes');
            if (diaSemana(6) !== "Fin de semana") throw new Error('6 → Fin de semana');
          `,
        },
      },
      {
        id: 'l16-destructuring',
        title: '16. Destructuring y spread',
        duration: '14 min',
        theory: `
          <p><strong>Destructuring</strong> extrae valores de arrays y objetos:</p>
          <pre><code>const [a, b] = [1, 2];
const { nombre, edad } = usuario;</code></pre>
          <p><strong>Spread</strong> <code>...</code> expande arrays/objetos:</p>
          <pre><code>const todos = [...arr1, ...arr2];
const copia = { ...obj, extra: true };</code></pre>
        `,
        example: {
          code: `const nums = [3, 7, 1];
const [primero, , tercero] = nums;
console.log(primero, tercero);

const base = { x: 1, y: 2 };
const extendido = { ...base, z: 3 };
console.log(extendido);`,
          explanation: 'Puedes saltar elementos con una coma vacía en arrays.',
        },
        exercise: {
          instructions: 'Función <code>sumarTodos(...numeros)</code> que use rest/spread y devuelva la suma de todos los argumentos.',
          starterCode: `function sumarTodos(...numeros) {
  // tu código
}
`,
          hint: 'return numeros.reduce((a, b) => a + b, 0);',
          solution: `function sumarTodos(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}`,
          tests: `
            if (sumarTodos(1, 2, 3) !== 6) throw new Error('1+2+3 = 6');
            if (sumarTodos(10) !== 10) throw new Error('10 = 10');
            if (sumarTodos() !== 0) throw new Error('sin args = 0');
          `,
        },
      },
    ],
  },
  {
    id: 'mod-6',
    title: 'Proyectos y avanzado',
    description: 'Clases, errores, JSON y proyecto final',
    lessons: [
      {
        id: 'l17-clases',
        title: '17. Clases ES6',
        duration: '15 min',
        theory: `
          <p>Las <strong>clases</strong> son azúcar sintáctico sobre prototipos:</p>
          <pre><code>class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  ladrar() {
    return this.nombre + " dice guau!";
  }
}
const p = new Perro("Max");
console.log(p.ladrar());</code></pre>
        `,
        example: {
          code: `class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  area() { return this.ancho * this.alto; }
}
const r = new Rectangulo(4, 5);
console.log(r.area());`,
          explanation: 'constructor se ejecuta con new. Los métodos van en el cuerpo de la clase.',
        },
        exercise: {
          instructions: 'Clase <code>Circulo</code> con constructor(radio) y método <code>area()</code> que devuelva π × r² (usa Math.PI).',
          starterCode: `class Circulo {
  // constructor + area()
}
`,
          hint: 'area() { return Math.PI * this.radio ** 2; }',
          solution: `class Circulo {
  constructor(radio) { this.radio = radio; }
  area() { return Math.PI * this.radio ** 2; }
}`,
          tests: `
            const c = new Circulo(2);
            if (Math.round(c.area()) !== Math.round(Math.PI * 4)) throw new Error('radio 2 → π×4');
            const c2 = new Circulo(1);
            if (Math.abs(c2.area() - Math.PI) > 0.001) throw new Error('radio 1 → π');
          `,
        },
      },
      {
        id: 'l18-errores',
        title: '18. Manejo de errores',
        duration: '12 min',
        theory: `
          <p><code>try/catch</code> captura errores en tiempo de ejecución:</p>
          <pre><code>try {
  const x = JSON.parse("no-json");
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("Siempre se ejecuta");
}</code></pre>
          <p>Lanza errores personalizados con <code>throw new Error("mensaje")</code>.</p>
        `,
        example: {
          code: `function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}
try {
  console.log(dividir(10, 2));
  console.log(dividir(5, 0));
} catch (e) {
  console.log("Capturado:", e.message);
}`,
          explanation: 'Sin try/catch, un throw detiene todo el script.',
        },
        exercise: {
          instructions: 'Función <code>parseEdad(str)</code>: si str no es un número válido, lanza Error("Edad inválida"); si no, devuelve el número.',
          starterCode: `function parseEdad(str) {
  // try parseInt, validar NaN
}
`,
          hint: 'const n = Number(str); if (isNaN(n)) throw new Error("Edad inválida"); return n;',
          solution: `function parseEdad(str) {
  const n = Number(str);
  if (isNaN(n)) throw new Error("Edad inválida");
  return n;
}`,
          tests: `
            if (parseEdad("25") !== 25) throw new Error('"25" → 25');
            let ok = false;
            try { parseEdad("abc"); } catch (e) { ok = e.message === "Edad inválida"; }
            if (!ok) throw new Error('Debe lanzar Error("Edad inválida")');
          `,
        },
      },
      {
        id: 'l19-json',
        title: '19. JSON',
        duration: '12 min',
        theory: `
          <p><strong>JSON</strong> es el formato estándar para intercambiar datos:</p>
          <pre><code>const obj = { id: 1, activo: true };
const json = JSON.stringify(obj);
const parsed = JSON.parse(json);</code></pre>
          <p>Útil para APIs, localStorage y configuraciones.</p>
        `,
        example: {
          code: `const usuario = { nombre: "Ana", roles: ["admin", "user"] };
const guardado = JSON.stringify(usuario);
console.log(guardado);
console.log(JSON.parse(guardado).roles);`,
          explanation: 'JSON.stringify convierte objeto → string. JSON.parse hace lo contrario.',
        },
        exercise: {
          instructions: 'Función <code>toJSON(obj)</code> que devuelva el string JSON, y <code>fromJSON(str)</code> que parsee y devuelva el objeto.',
          starterCode: `function toJSON(obj) {
  // tu código
}
function fromJSON(str) {
  // tu código
}
`,
          hint: 'Usa JSON.stringify y JSON.parse directamente.',
          solution: `function toJSON(obj) { return JSON.stringify(obj); }
function fromJSON(str) { return JSON.parse(str); }`,
          tests: `
            const s = toJSON({ a: 1 });
            if (s !== '{"a":1}') throw new Error('toJSON incorrecto');
            const o = fromJSON('{"b":2}');
            if (o.b !== 2) throw new Error('fromJSON incorrecto');
          `,
        },
      },
      {
        id: 'l20-proyecto',
        title: '20. Proyecto: Lista de tareas',
        duration: '25 min',
        theory: `
          <h3>¡Proyecto final!</h3>
          <p>Vas a crear una mini <strong>lista de tareas</strong> en código puro, usando todo lo aprendido:</p>
          <ul>
            <li>Clase o factory para crear tareas</li>
            <li>Array para almacenarlas</li>
            <li>Métodos: agregar, completar, listar pendientes</li>
          </ul>
          <p>En una app real conectarías esto al DOM; aquí practicas la lógica.</p>
        `,
        example: {
          code: `const tareas = [];

function agregar(texto) {
  tareas.push({ id: tareas.length + 1, texto, hecho: false });
}

function pendientes() {
  return tareas.filter(t => !t.hecho);
}

agregar("Estudiar JS");
agregar("Practicar ejercicios");
console.log("Pendientes:", pendientes().length);`,
          explanation: 'Patrón típico: array de objetos + funciones que lo manipulan.',
        },
        exercise: {
          instructions: `
            Crea un objeto <code>lista</code> con:
            <ul>
              <li><code>tareas</code> — array vacío inicial</li>
              <li><code>agregar(texto)</code> — añade { texto, hecho: false }</li>
              <li><code>completar(indice)</code> — pone hecho=true en esa posición</li>
              <li><code>contarPendientes()</code> — devuelve cuántas tienen hecho=false</li>
            </ul>
          `,
          starterCode: `const lista = {
  tareas: [],
  agregar(texto) {
    // tu código
  },
  completar(indice) {
    // tu código
  },
  contarPendientes() {
    // tu código
  }
};
`,
          hint: 'agregar: push. completar: this.tareas[i].hecho = true. contar: filter.',
          solution: `const lista = {
  tareas: [],
  agregar(texto) { this.tareas.push({ texto, hecho: false }); },
  completar(indice) { this.tareas[indice].hecho = true; },
  contarPendientes() { return this.tareas.filter(t => !t.hecho).length; }
};`,
          tests: `
            lista.tareas = [];
            lista.agregar("A");
            lista.agregar("B");
            if (lista.tareas.length !== 2) throw new Error('Debe haber 2 tareas');
            if (lista.contarPendientes() !== 2) throw new Error('2 pendientes');
            lista.completar(0);
            if (lista.contarPendientes() !== 1) throw new Error('1 pendiente tras completar');
            if (!lista.tareas[0].hecho) throw new Error('Primera debe estar hecha');
          `,
        },
      },
    ],
  },
  {
    id: 'mod-7',
    title: 'JavaScript avanzado',
    description: 'Patrones modernos, APIs y rendimiento',
    lessons: [
      {
        id: 'l21-map-set',
        title: '21. Map y Set',
        duration: '14 min',
        theory: `
          <p><strong>Map</strong> — claves de cualquier tipo. <strong>Set</strong> — valores únicos:</p>
          <pre><code>const m = new Map([["a", 1]]);
const s = new Set([1, 2, 2, 3]);
console.log(s.size); // 3</code></pre>
        `,
        example: {
          code: `const unicos = new Set([1, 2, 2, 3]);
console.log([...unicos].join(","));`,
          explanation: 'Set elimina duplicados automáticamente.',
        },
        exercise: {
          instructions: 'Crea <code>new Set([1,1,2,3,3])</code>, convierte a array con spread y devuelve la suma de sus elementos.',
          starterCode: `function sumaUnicos() {
  // tu código
}
`,
          hint: 'const arr = [...new Set([1,1,2,3,3])]; return arr.reduce(...)',
          solution: `function sumaUnicos() {
  const arr = [...new Set([1, 1, 2, 3, 3])];
  return arr.reduce((a, b) => a + b, 0);
}`,
          tests: `
            if (sumaUnicos() !== 6) throw new Error('1+2+3=6');
          `,
        },
      },
      {
        id: 'l22-optional-chaining',
        title: '22. Optional chaining',
        duration: '12 min',
        theory: `
          <p><code>?.</code> accede sin error si es null/undefined:</p>
          <pre><code>const ciudad = usuario?.direccion?.ciudad ?? "Desconocida";</code></pre>
        `,
        example: {
          code: `const u = { perfil: { nombre: "Ana" } };
console.log(u.perfil?.nombre);
console.log(u.contacto?.email ?? "sin email");`,
          explanation: '?? es nullish coalescing — valor por defecto.',
        },
        exercise: {
          instructions: 'Función <code>getEmail(user)</code> que devuelva <code>user?.contacto?.email ?? "N/A"</code>.',
          starterCode: `function getEmail(user) {
  // tu código
}
`,
          hint: 'return user?.contacto?.email ?? "N/A";',
          solution: `function getEmail(user) {
  return user?.contacto?.email ?? "N/A";
}`,
          tests: `
            if (getEmail({}) !== "N/A") throw new Error('sin contacto → N/A');
            if (getEmail({ contacto: { email: "a@b.com" } }) !== "a@b.com") throw new Error('email correcto');
          `,
        },
      },
      {
        id: 'l23-fetch',
        title: '23. Fetch API',
        duration: '14 min',
        theory: `
          <p><code>fetch(url)</code> devuelve una Promise con la respuesta HTTP:</p>
          <pre><code>const res = await fetch("/api/datos");
const data = await res.json();</code></pre>
        `,
        example: {
          code: `async function cargar() {
  const res = await fetch("https://api.example.com/data");
  return res.ok;
}`,
          explanation: 'En el navegador, fetch es la forma moderna de HTTP.',
        },
        exercise: {
          instructions: 'Función <code>esOk(status)</code> que devuelva true si status === 200.',
          starterCode: `function esOk(status) {
  // tu código
}
`,
          hint: 'return status === 200;',
          solution: `function esOk(status) {
  return status === 200;
}`,
          tests: `
            if (!esOk(200)) throw new Error('200 es ok');
            if (esOk(404)) throw new Error('404 no es ok');
          `,
        },
      },
      {
        id: 'l24-modules',
        title: '24. Módulos ES6',
        duration: '14 min',
        theory: `
          <p><code>export</code> expone. <code>import</code> importa:</p>
          <pre><code>// math.js
export const PI = 3.14;
export function suma(a, b) { return a + b; }</code></pre>
        `,
        example: {
          code: `const modulo = { exportado: 42 };
function getValor() { return modulo.exportado; }`,
          explanation: 'Simulamos el patrón export/import con objetos.',
        },
        exercise: {
          instructions: 'Objeto <code>config</code> con <code>version: "1.0"</code> y función <code>getVersion()</code> que retorne config.version.',
          starterCode: `const config = {
  // tu código
};
function getVersion() {
  // tu código
}
`,
          hint: 'version: "1.0" y return config.version;',
          solution: `const config = { version: "1.0" };
function getVersion() { return config.version; }`,
          tests: `
            if (getVersion() !== "1.0") throw new Error('version 1.0');
          `,
        },
      },
      {
        id: 'l25-regex',
        title: '25. Expresiones regulares',
        duration: '14 min',
        theory: `
          <p>Patrones de texto con <code>/regex/flags</code>:</p>
          <pre><code>const email = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
email.test("a@b.com"); // true</code></pre>
        `,
        example: {
          code: `const nums = "abc123def456";
const found = nums.match(/\\d+/g);
console.log(found.join(","));`,
          explanation: 'match devuelve coincidencias. g = global.',
        },
        exercise: {
          instructions: 'Función <code>tieneNumero(str)</code> que use <code>/\\d/</code> y devuelva si hay al menos un dígito.',
          starterCode: `function tieneNumero(str) {
  // tu código
}
`,
          hint: 'return /\\d/.test(str);',
          solution: `function tieneNumero(str) {
  return /\\d/.test(str);
}`,
          tests: `
            if (!tieneNumero("a1b")) throw new Error('a1b tiene numero');
            if (tieneNumero("abc")) throw new Error('abc no tiene numero');
          `,
        },
      },
      {
        id: 'l26-proyecto-api',
        title: '26. Proyecto: mini API client',
        duration: '25 min',
        theory: `
          <h3>Proyecto final extendido</h3>
          <p>Cliente de datos que parsea JSON, filtra y formatea resultados — patrón real de frontend.</p>
        `,
        example: {
          code: `function filtrarActivos(items) {
  return items.filter(i => i.activo).map(i => i.nombre);
}`,
          explanation: 'filter + map encadenados.',
        },
        exercise: {
          instructions: `
            Función <code>procesarUsuarios(lista)</code>:
            <ul>
              <li>Filtra usuarios con edad >= 18</li>
              <li>Devuelve array de nombres en mayúsculas</li>
            </ul>
          `,
          starterCode: `function procesarUsuarios(lista) {
  // tu código
}
`,
          hint: 'return lista.filter(u => u.edad >= 18).map(u => u.nombre.toUpperCase());',
          solution: `function procesarUsuarios(lista) {
  return lista.filter(u => u.edad >= 18).map(u => u.nombre.toUpperCase());
}`,
          tests: `
            const r = procesarUsuarios([
              { nombre: "ana", edad: 20 },
              { nombre: "leo", edad: 15 },
              { nombre: "mar", edad: 30 }
            ]);
            if (r.length !== 2) throw new Error('2 mayores de edad');
            if (r[0] !== "ANA" || r[1] !== "MAR") throw new Error('Nombres en mayusculas');
          `,
        },
      },
    ],
  },
];

export function getAllLessons() {
  return CURRICULUM.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title })));
}

export function getLessonById(id) {
  return getAllLessons().find((l) => l.id === id) ?? null;
}

export function getNextLesson(id) {
  const all = getAllLessons();
  const i = all.findIndex((l) => l.id === id);
  return i >= 0 && i < all.length - 1 ? all[i + 1] : null;
}

export function getPrevLesson(id) {
  const all = getAllLessons();
  const i = all.findIndex((l) => l.id === id);
  return i > 0 ? all[i - 1] : null;
}

export function getTotalLessons() {
  return getAllLessons().length;
}

export function getModuleById(moduleId) {
  return CURRICULUM.find((m) => m.id === moduleId) ?? null;
}

export function getModuleForLesson(lessonId) {
  return CURRICULUM.find((m) => m.lessons.some((l) => l.id === lessonId)) ?? null;
}
