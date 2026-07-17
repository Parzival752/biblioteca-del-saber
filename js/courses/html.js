export const CURRICULUM = [
  {
    id: 'html-mod-1',
    title: 'Fundamentos HTML',
    description: 'Estructura, etiquetas y contenido web',
    lessons: [
      {
        id: 'html-l01',
        title: '1. Tu primera pagina',
        duration: '8 min',
        theory: `<p><strong>HTML</strong> define la estructura de una pagina con <strong>etiquetas</strong>.</p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;&lt;body&gt;&lt;h1&gt;Hola&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;</code></pre>`,
        example: { code: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hola, HTML</h1>\n  <p>Mi primera pagina.</p>\n</body>\n</html>`, explanation: 'h1 es titulo principal, p es parrafo.' },
        exercise: {
          instructions: 'Crea una pagina con <code>&lt;h1&gt;Aprendo HTML&lt;/h1&gt;</code> dentro del body.',
          starterCode: `<!DOCTYPE html>\n<html>\n<body>\n\n</body>\n</html>`,
          hint: '<h1>Aprendo HTML</h1>',
          solution: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Aprendo HTML</h1>\n</body>\n</html>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const h1 = doc.querySelector('h1');
            if (!h1) throw new Error('Agrega un elemento h1');
            if (h1.textContent.trim() !== 'Aprendo HTML') throw new Error('El h1 debe decir: Aprendo HTML');
          `,
        },
      },
      {
        id: 'html-l02',
        title: '2. Titulos y parrafos',
        duration: '10 min',
        theory: `<p>Usa <code>h1</code> a <code>h6</code> para titulos. <code>p</code> para parrafos.</p>`,
        example: { code: `<h1>Curso HTML</h1>\n<h2>Capitulo 1</h2>\n<p>Contenido.</p>`, explanation: 'Jerarquia de titulos.' },
        exercise: {
          instructions: 'Crea h1 "Blog", h2 "Primer post" y p "Hoy empiezo a aprender."',
          starterCode: ``,
          hint: 'Usa h1, h2 y p en ese orden.',
          solution: `<h1>Blog</h1>\n<h2>Primer post</h2>\n<p>Hoy empiezo a aprender.</p>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            if (doc.querySelector('h1')?.textContent.trim() !== 'Blog') throw new Error('h1 debe ser Blog');
            if (doc.querySelector('h2')?.textContent.trim() !== 'Primer post') throw new Error('h2 incorrecto');
            if (doc.querySelector('p')?.textContent.trim() !== 'Hoy empiezo a aprender.') throw new Error('Parrafo incorrecto');
          `,
        },
      },
      {
        id: 'html-l03',
        title: '3. Enlaces e imagenes',
        duration: '12 min',
        theory: `<p><code>&lt;a href="url"&gt;</code> enlaces. <code>&lt;img src alt&gt;</code> imagenes.</p>`,
        example: { code: `<a href="https://developer.mozilla.org">MDN</a>\n<img src="logo.png" alt="Logo">`, explanation: 'alt es obligatorio.' },
        exercise: {
          instructions: 'Enlace "Google" a https://google.com e img src="foto.jpg" alt="Mi foto".',
          starterCode: ``,
          hint: '<a href="https://google.com">Google</a>',
          solution: `<a href="https://google.com">Google</a>\n<img src="foto.jpg" alt="Mi foto">`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const a = doc.querySelector('a');
            if (!a || a.getAttribute('href') !== 'https://google.com') throw new Error('Enlace incorrecto');
            const img = doc.querySelector('img');
            if (!img || img.getAttribute('alt') !== 'Mi foto') throw new Error('Imagen con alt="Mi foto"');
          `,
        },
      },
      {
        id: 'html-l04',
        title: '4. Listas',
        duration: '10 min',
        theory: `<p><code>ul/ol</code> + <code>li</code>. <code>dl/dt/dd</code> para definiciones.</p>`,
        example: { code: `<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>`, explanation: 'Cada item en li.' },
        exercise: {
          instructions: 'Lista ul con 3 li: "Pan", "Leche", "Huevos".',
          starterCode: ``,
          hint: '<ul><li>Pan</li>...</ul>',
          solution: `<ul>\n  <li>Pan</li>\n  <li>Leche</li>\n  <li>Huevos</li>\n</ul>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const items = [...doc.querySelectorAll('ul li')].map(li => li.textContent.trim());
            if (items.join(',') !== 'Pan,Leche,Huevos') throw new Error('Lista incorrecta');
          `,
        },
      },
      {
        id: 'html-l05',
        title: '5. Formularios',
        duration: '14 min',
        theory: `<p><code>form</code>, <code>input</code>, <code>label</code>, <code>button</code>, <code>textarea</code>.</p>`,
        example: { code: `<form>\n  <label>Email: <input type="email" name="email"></label>\n  <button type="submit">Enviar</button>\n</form>`, explanation: 'type define el input.' },
        exercise: {
          instructions: 'Form con input type="text" name="usuario" y button type="submit" "Entrar".',
          starterCode: `<form>\n\n</form>`,
          hint: 'input type="text" name="usuario"',
          solution: `<form>\n  <input type="text" name="usuario">\n  <button type="submit">Entrar</button>\n</form>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            if (!doc.querySelector('input[type="text"][name="usuario"]')) throw new Error('Falta input usuario');
            if (doc.querySelector('button[type="submit"]')?.textContent.trim() !== 'Entrar') throw new Error('Boton Entrar');
          `,
        },
      },
      {
        id: 'html-l06',
        title: '6. HTML semantico',
        duration: '12 min',
        theory: `<p><code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>, <code>article</code>, <code>section</code>.</p>`,
        example: { code: `<header><nav>Menu</nav></header>\n<main><article>Contenido</article></main>\n<footer>2026</footer>`, explanation: 'Mejora SEO y accesibilidad.' },
        exercise: {
          instructions: 'header (h1 "Mi Web"), main (p "Contenido"), footer (p "Fin").',
          starterCode: ``,
          hint: 'Usa header, main y footer.',
          solution: `<header><h1>Mi Web</h1></header>\n<main><p>Contenido</p></main>\n<footer><p>Fin</p></footer>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            if (!doc.querySelector('header h1')) throw new Error('header con h1');
            if (doc.querySelector('main p')?.textContent.trim() !== 'Contenido') throw new Error('main Contenido');
            if (doc.querySelector('footer p')?.textContent.trim() !== 'Fin') throw new Error('footer Fin');
          `,
        },
      },
    ],
  },
  {
    id: 'html-mod-2',
    title: 'HTML intermedio',
    description: 'Tablas, atributos, multimedia y proyectos',
    lessons: [
      {
        id: 'html-l07',
        title: '7. Tablas',
        duration: '14 min',
        theory: `<p><code>table</code>, <code>tr</code>, <code>th</code>, <code>td</code>. <code>thead/tbody</code> opcional.</p>`,
        example: { code: `<table>\n  <tr><th>Nombre</th><th>Edad</th></tr>\n  <tr><td>Ana</td><td>25</td></tr>\n</table>`, explanation: 'th encabezado, td celda.' },
        exercise: {
          instructions: 'Tabla con th "Producto","Precio" y tr con td "Teclado","50".',
          starterCode: `<table>\n\n</table>`,
          hint: '<tr><th>Producto</th>...',
          solution: `<table>\n  <tr><th>Producto</th><th>Precio</th></tr>\n  <tr><td>Teclado</td><td>50</td></tr>\n</table>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const ths = [...doc.querySelectorAll('th')].map(t => t.textContent.trim());
            if (ths.join(',') !== 'Producto,Precio') throw new Error('Encabezados incorrectos');
            const tds = [...doc.querySelectorAll('td')].map(t => t.textContent.trim());
            if (tds.join(',') !== 'Teclado,50') throw new Error('Celdas incorrectas');
          `,
        },
      },
      {
        id: 'html-l08',
        title: '8. div, span, class e id',
        duration: '12 min',
        theory: `<p><code>div</code> bloque generico. <code>span</code> en linea. <code>class</code> e <code>id</code> identifican elementos.</p>`,
        example: { code: `<div id="contenedor" class="caja">\n  <span class="destacado">Importante</span>\n</div>`, explanation: 'id unico, class reutilizable.' },
        exercise: {
          instructions: 'div id="app" class="contenedor" con span class="titulo" texto "Hola".',
          starterCode: ``,
          hint: '<div id="app" class="contenedor">',
          solution: `<div id="app" class="contenedor">\n  <span class="titulo">Hola</span>\n</div>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const div = doc.querySelector('#app.contenedor');
            if (!div) throw new Error('div#app.contenedor');
            if (doc.querySelector('span.titulo')?.textContent.trim() !== 'Hola') throw new Error('span.titulo Hola');
          `,
        },
      },
      {
        id: 'html-l09',
        title: '9. head, title y meta',
        duration: '12 min',
        theory: `<p><code>&lt;head&gt;</code> metadatos: <code>title</code>, <code>meta charset</code>, <code>meta viewport</code>.</p>`,
        example: { code: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Mi sitio</title>\n</head>\n<body></body>\n</html>`, explanation: 'charset UTF-8 evita problemas de acentos.' },
        exercise: {
          instructions: 'Pagina completa con head, meta charset UTF-8, title "Aprende HTML" y body con p "Listo".',
          starterCode: `<!DOCTYPE html>\n<html>\n<head>\n\n</head>\n<body>\n\n</body>\n</html>`,
          hint: '<meta charset="UTF-8">',
          solution: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Aprende HTML</title>\n</head>\n<body>\n  <p>Listo</p>\n</body>\n</html>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            if (doc.querySelector('title')?.textContent.trim() !== 'Aprende HTML') throw new Error('title incorrecto');
            if (!doc.querySelector('meta[charset]')) throw new Error('meta charset');
            if (doc.querySelector('p')?.textContent.trim() !== 'Listo') throw new Error('p Listo');
          `,
        },
      },
      {
        id: 'html-l10',
        title: '10. Multimedia',
        duration: '12 min',
        theory: `<p><code>video</code>, <code>audio</code>, <code>source</code>. Atributos <code>controls</code>, <code>width</code>.</p>`,
        example: { code: `<video controls width="320">\n  <source src="clip.mp4" type="video/mp4">\n</video>`, explanation: 'Multiples source como fallback.' },
        exercise: {
          instructions: 'Elemento audio con controls y source src="musica.mp3" type="audio/mpeg".',
          starterCode: ``,
          hint: '<audio controls>',
          solution: `<audio controls>\n  <source src="musica.mp3" type="audio/mpeg">\n</audio>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const audio = doc.querySelector('audio[controls]');
            if (!audio) throw new Error('audio con controls');
            const src = doc.querySelector('source[src="musica.mp3"]');
            if (!src || src.getAttribute('type') !== 'audio/mpeg') throw new Error('source musica.mp3');
          `,
        },
      },
      {
        id: 'html-l11',
        title: '11. Nav y layout completo',
        duration: '16 min',
        theory: `<p>Estructura tipica: header + nav + main + footer. Enlaces internos con <code>#id</code>.</p>`,
        example: { code: `<header><nav><a href="#inicio">Inicio</a></nav></header>\n<main id="inicio">Contenido</main>`, explanation: 'Anclas saltan a secciones.' },
        exercise: {
          instructions: 'nav con a href="#contacto" texto "Contacto" y section id="contacto" con p "Escribeme".',
          starterCode: ``,
          hint: '<section id="contacto">',
          solution: `<nav><a href="#contacto">Contacto</a></nav>\n<section id="contacto"><p>Escribeme</p></section>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const a = doc.querySelector('a[href="#contacto"]');
            if (!a || a.textContent.trim() !== 'Contacto') throw new Error('Enlace Contacto');
            if (doc.querySelector('#contacto p')?.textContent.trim() !== 'Escribeme') throw new Error('section contacto');
          `,
        },
      },
      {
        id: 'html-l12',
        title: '12. Proyecto: tarjeta perfil',
        duration: '20 min',
        theory: `<p>Combina semantic HTML: article, img, h2, p, a. Piensa en accesibilidad y estructura clara.</p>`,
        example: { code: `<article class="perfil">\n  <img src="yo.jpg" alt="Foto de perfil">\n  <h2>Marco</h2>\n  <p>Desarrollador web</p>\n  <a href="mailto:marco@mail.com">Contactar</a>\n</article>`, explanation: 'Tarjeta reutilizable.' },
        exercise: {
          instructions: 'article class="perfil" con img alt="Avatar", h2 tu nombre "Alex", p "Estudiante" y a href="#" "Ver mas".',
          starterCode: ``,
          hint: '<article class="perfil">',
          solution: `<article class="perfil">\n  <img src="avatar.png" alt="Avatar">\n  <h2>Alex</h2>\n  <p>Estudiante</p>\n  <a href="#">Ver mas</a>\n</article>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            if (!doc.querySelector('article.perfil')) throw new Error('article.perfil');
            if (!doc.querySelector('img[alt="Avatar"]')) throw new Error('img con alt Avatar');
            if (doc.querySelector('h2')?.textContent.trim() !== 'Alex') throw new Error('h2 Alex');
            if (doc.querySelector('p')?.textContent.trim() !== 'Estudiante') throw new Error('p Estudiante');
            if (doc.querySelector('a')?.textContent.trim() !== 'Ver mas') throw new Error('a Ver mas');
          `,
        },
      },
    ],
  },
  {
    id: 'html-mod-3',
    title: 'HTML avanzado',
    description: 'Formularios, accesibilidad y SEO',
    lessons: [
      {
        id: 'html-l13',
        title: '13. Input types',
        duration: '12 min',
        theory: `<p><code>input type="email"</code>, <code>number</code>, <code>password</code>, <code>date</code>.</p>`,
        example: { code: `<input type="email" name="correo" placeholder="tu@mail.com">`, explanation: 'Validacion nativa del navegador.' },
        exercise: {
          instructions: 'input type="number" name="edad" min="1" max="120".',
          starterCode: ``,
          hint: '<input type="number" name="edad"',
          solution: `<input type="number" name="edad" min="1" max="120">`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const inp = doc.querySelector('input[type="number"][name="edad"]');
            if (!inp) throw new Error('input number name=edad');
            if (inp.getAttribute('min') !== '1') throw new Error('min=1');
          `,
        },
      },
      {
        id: 'html-l14',
        title: '14. Textarea y select',
        duration: '12 min',
        theory: `<p><code>textarea</code> para texto largo. <code>select</code> + <code>option</code> para listas desplegables.</p>`,
        example: { code: `<textarea name="msg" rows="3"></textarea>\n<select name="pais"><option>España</option></select>`, explanation: 'Controles de formulario.' },
        exercise: {
          instructions: 'textarea name="bio" y select name="rol" con option "Estudiante" y option "Profesor".',
          starterCode: ``,
          hint: '<textarea name="bio">',
          solution: `<textarea name="bio"></textarea>\n<select name="rol">\n  <option>Estudiante</option>\n  <option>Profesor</option>\n</select>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            if (!doc.querySelector('textarea[name="bio"]')) throw new Error('textarea bio');
            const opts = doc.querySelectorAll('select[name="rol"] option');
            if (opts.length < 2) throw new Error('2 options en rol');
          `,
        },
      },
      {
        id: 'html-l15',
        title: '15. Label y fieldset',
        duration: '12 min',
        theory: `<p><code>label for="id"</code> mejora accesibilidad. <code>fieldset/legend</code> agrupa campos.</p>`,
        example: { code: `<label for="nom">Nombre</label>\n<input id="nom" type="text">`, explanation: 'Clic en label enfoca input.' },
        exercise: {
          instructions: 'label for="email" texto "Email" e input id="email" type="email".',
          starterCode: ``,
          hint: '<label for="email">Email</label>',
          solution: `<label for="email">Email</label>\n<input id="email" type="email">`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const lbl = doc.querySelector('label[for="email"]');
            if (!lbl || lbl.textContent.trim() !== 'Email') throw new Error('label Email');
            if (!doc.querySelector('#email[type="email"]')) throw new Error('input email id');
          `,
        },
      },
      {
        id: 'html-l16',
        title: '16. iframe y embed',
        duration: '12 min',
        theory: `<p><code>iframe</code> incrusta otra pagina. Atributos <code>title</code>, <code>width</code>, <code>height</code>.</p>`,
        example: { code: `<iframe src="https://example.com" title="Ejemplo" width="300" height="200"></iframe>`, explanation: 'title es importante para a11y.' },
        exercise: {
          instructions: 'iframe src="mapa.html" title="Mapa del sitio" width="400" height="300".',
          starterCode: ``,
          hint: 'title="Mapa del sitio"',
          solution: `<iframe src="mapa.html" title="Mapa del sitio" width="400" height="300"></iframe>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const f = doc.querySelector('iframe[title="Mapa del sitio"]');
            if (!f || f.getAttribute('width') !== '400') throw new Error('iframe mapa 400x300');
          `,
        },
      },
      {
        id: 'html-l17',
        title: '17. Meta SEO',
        duration: '14 min',
        theory: `<p><code>meta name="description"</code> y <code>meta name="keywords"</code> ayudan al SEO.</p>`,
        example: { code: `<meta name="description" content="Curso de HTML gratuito">`, explanation: 'Aparece en buscadores.' },
        exercise: {
          instructions: 'head con meta name="description" content="Mi portfolio" y title "Portfolio".',
          starterCode: `<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body></body>\n</html>`,
          hint: '<meta name="description"',
          solution: `<!DOCTYPE html>\n<html>\n<head>\n  <meta name="description" content="Mi portfolio">\n  <title>Portfolio</title>\n</head>\n<body></body>\n</html>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            const meta = doc.querySelector('meta[name="description"]');
            if (!meta || meta.getAttribute('content') !== 'Mi portfolio') throw new Error('meta description');
            if (doc.querySelector('title')?.textContent.trim() !== 'Portfolio') throw new Error('title Portfolio');
          `,
        },
      },
      {
        id: 'html-l18',
        title: '18. Proyecto: formulario contacto',
        duration: '22 min',
        theory: `<p>Formulario completo: fieldset, labels, inputs variados y boton submit.</p>`,
        example: { code: `<form>\n  <fieldset>\n    <legend>Contacto</legend>\n    <label>Nombre <input type="text" name="nombre"></label>\n    <button type="submit">Enviar</button>\n  </fieldset>\n</form>`, explanation: 'Estructura profesional.' },
        exercise: {
          instructions: 'form con fieldset, legend "Contacto", label+input type="text" name="nombre", button type="submit" texto "Enviar".',
          starterCode: ``,
          hint: '<form><fieldset>',
          solution: `<form>\n  <fieldset>\n    <legend>Contacto</legend>\n    <label>Nombre <input type="text" name="nombre"></label>\n    <button type="submit">Enviar</button>\n  </fieldset>\n</form>`,
          runner: 'html',
          tests: `
            const doc = parseHtml(userCode);
            if (!doc.querySelector('form fieldset legend')) throw new Error('form fieldset legend');
            if (!doc.querySelector('input[name="nombre"]')) throw new Error('input nombre');
            if (doc.querySelector('button[type="submit"]')?.textContent.trim() !== 'Enviar') throw new Error('boton Enviar');
          `,
        },
      },
    ],
  },
];
