export const CURRICULUM = [
  {
    id: 'css-mod-1',
    title: 'Estilo con CSS',
    description: 'Colores, layout y diseno responsive',
    lessons: [
      {
        id: 'css-l01',
        title: '1. Selectores y color',
        duration: '10 min',
        theory: `<p><strong>CSS</strong> estiliza HTML. <code>selector { propiedad: valor; }</code></p>
          <pre><code>p { color: blue; }</code></pre>`,
        example: { code: `h1 {\n  color: #2563eb;\n}\np {\n  font-size: 18px;\n}`, explanation: 'color y font-size son propiedades comunes.' },
        exercise: {
          instructions: 'Estiliza h1 con color red y p con color #333.',
          starterCode: `/* Escribe CSS aqui */`,
          htmlFixture: '<h1>Titulo</h1><p>Texto</p>',
          hint: 'h1 { color: red; }',
          solution: `h1 { color: red; }\np { color: #333; }`,
          runner: 'css',
          tests: `
            const h1 = getStyled('h1');
            const p = getStyled('p');
            if (h1.color !== 'rgb(255, 0, 0)' && h1.color !== 'red') throw new Error('h1 debe ser red');
            if (!p.color.includes('51')) throw new Error('p debe ser #333');
          `,
        },
      },
      {
        id: 'css-l02',
        title: '2. Clases e IDs',
        duration: '10 min',
        theory: `<p><code>.clase</code> selecciona por class. <code>#id</code> por id (unico).</p>`,
        example: { code: `.destacado { font-weight: bold; }\n#logo { width: 120px; }`, explanation: 'Preferir clases para reutilizar estilos.' },
        exercise: {
          instructions: 'Clase .btn con background-color #2563eb y color white.',
          starterCode: ``,
          htmlFixture: '<button class="btn">Click</button>',
          hint: '.btn { background-color: #2563eb; color: white; }',
          solution: `.btn {\n  background-color: #2563eb;\n  color: white;\n}`,
          runner: 'css',
          tests: `
            const btn = getStyled('.btn');
            if (!btn.backgroundColor.includes('37') && !btn.backgroundColor.includes('99')) throw new Error('Fondo azul incorrecto');
            if (btn.color !== 'rgb(255, 255, 255)' && btn.color !== 'white') throw new Error('Texto blanco');
          `,
        },
      },
      {
        id: 'css-l03',
        title: '3. Box model',
        duration: '12 min',
        theory: `<p>Cada caja tiene <code>margin</code>, <code>border</code>, <code>padding</code> y <code>content</code>.</p>`,
        example: { code: `.caja {\n  padding: 16px;\n  margin: 8px;\n  border: 2px solid #ccc;\n}`, explanation: 'padding espacio interno, margin externo.' },
        exercise: {
          instructions: 'Clase .card con padding 20px, margin 10px y border 1px solid #ddd.',
          starterCode: ``,
          htmlFixture: '<div class="card">Card</div>',
          hint: 'padding: 20px;',
          solution: `.card {\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid #ddd;\n}`,
          runner: 'css',
          tests: `
            const c = getStyled('.card');
            if (parseInt(c.paddingTop) !== 20) throw new Error('padding 20px');
            if (parseInt(c.marginTop) !== 10) throw new Error('margin 10px');
            if (!c.borderWidth || c.borderWidth === '0px') throw new Error('border requerido');
          `,
        },
      },
      {
        id: 'css-l04',
        title: '4. Flexbox',
        duration: '14 min',
        theory: `<p><code>display: flex</code> alinea hijos en fila o columna con <code>justify-content</code> y <code>align-items</code>.</p>`,
        example: { code: `.row {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}`, explanation: 'Flex simplifica layouts.' },
        exercise: {
          instructions: '.flex con display flex y justify-content center.',
          starterCode: ``,
          htmlFixture: '<div class="flex"><span>A</span><span>B</span></div>',
          hint: 'display: flex; justify-content: center;',
          solution: `.flex {\n  display: flex;\n  justify-content: center;\n}`,
          runner: 'css',
          tests: `
            const f = getStyled('.flex');
            if (f.display !== 'flex') throw new Error('display: flex');
            if (f.justifyContent !== 'center') throw new Error('justify-content: center');
          `,
        },
      },
      {
        id: 'css-l05',
        title: '5. Grid',
        duration: '14 min',
        theory: `<p><code>display: grid</code> crea cuadriculas con <code>grid-template-columns</code>.</p>`,
        example: { code: `.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}`, explanation: '1fr divide espacio equitativo.' },
        exercise: {
          instructions: '.grid con display grid y grid-template-columns: 1fr 1fr 1fr;',
          starterCode: ``,
          htmlFixture: '<div class="grid"><div>1</div><div>2</div><div>3</div></div>',
          hint: 'grid-template-columns: 1fr 1fr 1fr;',
          solution: `.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}`,
          runner: 'css',
          tests: `
            const g = getStyled('.grid');
            if (g.display !== 'grid') throw new Error('display: grid');
            if (!g.gridTemplateColumns.includes('1fr')) throw new Error('3 columnas 1fr');
          `,
        },
      },
      {
        id: 'css-l06',
        title: '6. Responsive',
        duration: '12 min',
        theory: `<p><code>@media (max-width: 600px)</code> aplica estilos en pantallas pequenas.</p>`,
        example: { code: `@media (max-width: 600px) {\n  body { font-size: 14px; }\n}`, explanation: 'Mobile-first es buena practica.' },
        exercise: {
          instructions: 'Media query max-width 768px que ponga body font-size 14px.',
          starterCode: ``,
          htmlFixture: '<body><p>Texto</p></body>',
          hint: '@media (max-width: 768px) { body { font-size: 14px; } }',
          solution: `@media (max-width: 768px) {\n  body {\n    font-size: 14px;\n  }\n}`,
          runner: 'css',
          tests: `
            if (!userCode.includes('@media')) throw new Error('Usa @media');
            if (!userCode.includes('768px')) throw new Error('max-width 768px');
            if (!userCode.includes('14px')) throw new Error('font-size 14px');
          `,
        },
      },
    ],
  },
  {
    id: 'css-mod-2',
    title: 'CSS intermedio',
    description: 'Efectos, posicionamiento y proyectos',
    lessons: [
      {
        id: 'css-l07',
        title: '7. Pseudo-clases',
        duration: '12 min',
        theory: `<p><code>:hover</code>, <code>:focus</code>, <code>:active</code> reaccionan a interaccion del usuario.</p>`,
        example: { code: `.btn:hover {\n  background-color: #1d4ed8;\n}\na:focus {\n  outline: 2px solid #2563eb;\n}`, explanation: 'Mejoran UX y accesibilidad.' },
        exercise: {
          instructions: '.link:hover con color #e44d26.',
          starterCode: `.link {\n  color: blue;\n}\n`,
          htmlFixture: '<a class="link" href="#">Enlace</a>',
          hint: '.link:hover { color: #e44d26; }',
          solution: `.link {\n  color: blue;\n}\n.link:hover {\n  color: #e44d26;\n}`,
          runner: 'css',
          tests: `
            if (!userCode.includes(':hover')) throw new Error('Usa :hover');
            if (!userCode.includes('#e44d26') && !userCode.includes('228, 77, 38')) throw new Error('color #e44d26 en hover');
          `,
        },
      },
      {
        id: 'css-l08',
        title: '8. Transiciones',
        duration: '12 min',
        theory: `<p><code>transition</code> anima cambios suaves: <code>transition: propiedad 0.3s ease;</code></p>`,
        example: { code: `.box {\n  transition: transform 0.3s ease;\n}\n.box:hover {\n  transform: scale(1.05);\n}`, explanation: 'Evita cambios bruscos.' },
        exercise: {
          instructions: '.card con transition: opacity 0.4s; (incluye regla .card base).',
          starterCode: `.card {\n  opacity: 1;\n}\n`,
          htmlFixture: '<div class="card">Card</div>',
          hint: 'transition: opacity 0.4s;',
          solution: `.card {\n  opacity: 1;\n  transition: opacity 0.4s;\n}`,
          runner: 'css',
          tests: `
            if (!userCode.includes('transition')) throw new Error('Usa transition');
            if (!userCode.includes('opacity')) throw new Error('transition en opacity');
          `,
        },
      },
      {
        id: 'css-l09',
        title: '9. Variables CSS',
        duration: '14 min',
        theory: `<p><code>:root { --color: #2563eb; }</code> y <code>color: var(--color);</code></p>`,
        example: { code: `:root {\n  --primary: #2563eb;\n}\n.btn {\n  background: var(--primary);\n}`, explanation: 'Reutiliza colores y temas.' },
        exercise: {
          instructions: ':root con --accent: #264de4; y .titulo { color: var(--accent); }',
          starterCode: ``,
          htmlFixture: '<h1 class="titulo">Hola</h1>',
          hint: ':root { --accent: #264de4; }',
          solution: `:root {\n  --accent: #264de4;\n}\n.titulo {\n  color: var(--accent);\n}`,
          runner: 'css',
          tests: `
            if (!userCode.includes(':root')) throw new Error('Define :root');
            if (!userCode.includes('--accent')) throw new Error('variable --accent');
            if (!userCode.includes('var(--accent)')) throw new Error('usa var(--accent)');
          `,
        },
      },
      {
        id: 'css-l10',
        title: '10. Posicionamiento',
        duration: '14 min',
        theory: `<p><code>position: relative|absolute|fixed|sticky</code> con <code>top/right/bottom/left</code>.</p>`,
        example: { code: `.padre { position: relative; }\n.hijo {\n  position: absolute;\n  top: 0;\n  right: 0;\n}`, explanation: 'absolute respecto al padre relative.' },
        exercise: {
          instructions: '.badge { position: absolute; top: 0; right: 0; } y .contenedor { position: relative; }',
          starterCode: ``,
          htmlFixture: '<div class="contenedor"><span class="badge">Nuevo</span></div>',
          hint: 'position: relative en contenedor',
          solution: `.contenedor {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n}`,
          runner: 'css',
          tests: `
            const c = getStyled('.contenedor');
            const b = getStyled('.badge');
            if (c.position !== 'relative') throw new Error('contenedor relative');
            if (b.position !== 'absolute') throw new Error('badge absolute');
          `,
        },
      },
      {
        id: 'css-l11',
        title: '11. Sombras y bordes',
        duration: '12 min',
        theory: `<p><code>box-shadow</code>, <code>border-radius</code>, <code>text-shadow</code>.</p>`,
        example: { code: `.card {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n}`, explanation: 'Profundidad visual.' },
        exercise: {
          instructions: '.btn con border-radius: 8px; y box-shadow: 0 2px 4px rgba(0,0,0,0.2);',
          starterCode: `.btn {\n  padding: 8px 16px;\n}\n`,
          htmlFixture: '<button class="btn">OK</button>',
          hint: 'border-radius: 8px;',
          solution: `.btn {\n  padding: 8px 16px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n}`,
          runner: 'css',
          tests: `
            const b = getStyled('.btn');
            if (parseInt(b.borderRadius) < 6) throw new Error('border-radius 8px');
            if (!userCode.includes('box-shadow')) throw new Error('box-shadow');
          `,
        },
      },
      {
        id: 'css-l12',
        title: '12. Proyecto: boton moderno',
        duration: '18 min',
        theory: `<p>Combina flex, variables, hover, transition y sombra para un boton profesional.</p>`,
        example: { code: `:root { --brand: #2563eb; }\n.cta {\n  display: inline-flex;\n  padding: 12px 24px;\n  background: var(--brand);\n  color: white;\n  border-radius: 8px;\n  transition: transform 0.2s;\n}\n.cta:hover { transform: translateY(-2px); }`, explanation: 'Patron reutilizable.' },
        exercise: {
          instructions: '.cta con display:inline-flex, background #2563eb, color white, border-radius 8px.',
          starterCode: ``,
          htmlFixture: '<button class="cta">Empezar</button>',
          hint: 'display: inline-flex;',
          solution: `.cta {\n  display: inline-flex;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 12px 24px;\n}`,
          runner: 'css',
          tests: `
            const c = getStyled('.cta');
            if (c.display !== 'inline-flex' && c.display !== 'flex') throw new Error('display inline-flex');
            if (c.color !== 'rgb(255, 255, 255)' && c.color !== 'white') throw new Error('color white');
            if (parseInt(c.borderRadius) >= 6) { /* ok */ } else throw new Error('border-radius');
          `,
        },
      },
    ],
  },
  {
    id: 'css-mod-3',
    title: 'CSS avanzado',
    description: 'Responsive, animaciones y layout moderno',
    lessons: [
      {
        id: 'css-l13',
        title: '13. Media queries',
        duration: '14 min',
        theory: `<p><code>@media (max-width: 768px) { ... }</code> adapta estilos al tamano de pantalla.</p>`,
        example: { code: `.nav { display: flex; }\n@media (max-width: 600px) {\n  .nav { flex-direction: column; }\n}`, explanation: 'Mobile-first o desktop-first.' },
        exercise: {
          instructions: 'Incluye @media (max-width: 768px) { .box { font-size: 14px; } } y regla base .box { font-size: 18px; }',
          starterCode: `.box {\n  font-size: 18px;\n}\n`,
          htmlFixture: '<div class="box">Texto</div>',
          hint: '@media (max-width: 768px)',
          solution: `.box {\n  font-size: 18px;\n}\n@media (max-width: 768px) {\n  .box {\n    font-size: 14px;\n  }\n}`,
          runner: 'css',
          tests: `
            if (!userCode.includes('@media')) throw new Error('Usa @media');
            if (!userCode.includes('768px')) throw new Error('max-width 768px');
          `,
        },
      },
      {
        id: 'css-l14',
        title: '14. Animaciones @keyframes',
        duration: '16 min',
        theory: `<p><code>@keyframes</code> + <code>animation</code> crean movimiento.</p>`,
        example: { code: `@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.box { animation: fade 1s; }`, explanation: 'from/to o porcentajes.' },
        exercise: {
          instructions: 'Define @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } } y .icon { animation: pulse 2s; }',
          starterCode: ``,
          htmlFixture: '<div class="icon">*</div>',
          hint: '@keyframes pulse',
          solution: `@keyframes pulse {\n  0% { opacity: 1; }\n  50% { opacity: 0.5; }\n  100% { opacity: 1; }\n}\n.icon {\n  animation: pulse 2s;\n}`,
          runner: 'css',
          tests: `
            if (!userCode.includes('@keyframes')) throw new Error('@keyframes');
            if (!userCode.includes('animation: pulse')) throw new Error('animation pulse');
          `,
        },
      },
      {
        id: 'css-l15',
        title: '15. Grid areas',
        duration: '14 min',
        theory: `<p><code>grid-template-areas</code> nombra zonas del layout.</p>`,
        example: { code: `.layout {\n  display: grid;\n  grid-template-areas: "header" "main" "footer";\n}`, explanation: 'Layout declarativo.' },
        exercise: {
          instructions: '.page { display: grid; grid-template-columns: 1fr 1fr; }',
          starterCode: ``,
          htmlFixture: '<div class="page"><div>A</div><div>B</div></div>',
          hint: 'grid-template-columns: 1fr 1fr',
          solution: `.page {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}`,
          runner: 'css',
          tests: `
            const p = getStyled('.page');
            if (p.display !== 'grid') throw new Error('display grid');
            if (!userCode.includes('grid-template-columns')) throw new Error('2 columnas 1fr');
          `,
        },
      },
      {
        id: 'css-l16',
        title: '16. calc() y clamp',
        duration: '12 min',
        theory: `<p><code>width: calc(100% - 2rem);</code> — matematicas en CSS.</p>`,
        example: { code: `.box { width: calc(100% - 40px); padding: 20px; }`, explanation: 'Util para gutters.' },
        exercise: {
          instructions: '.panel { width: calc(100% - 20px); }',
          starterCode: ``,
          htmlFixture: '<div class="panel">Panel</div>',
          hint: 'calc(100% - 20px)',
          solution: `.panel {\n  width: calc(100% - 20px);\n}`,
          runner: 'css',
          tests: `if (!userCode.includes('calc(')) throw new Error('Usa calc()');`,
        },
      },
      {
        id: 'css-l17',
        title: '17. object-fit',
        duration: '12 min',
        theory: `<p><code>object-fit: cover;</code> controla como img/video llenan su caja.</p>`,
        example: { code: `img.avatar {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 50%;\n}`, explanation: 'Recorte proporcional.' },
        exercise: {
          instructions: 'img.foto { width: 200px; height: 150px; object-fit: cover; }',
          starterCode: ``,
          htmlFixture: '<img class="foto" src="#" alt="Foto">',
          hint: 'object-fit: cover',
          solution: `img.foto {\n  width: 200px;\n  height: 150px;\n  object-fit: cover;\n}`,
          runner: 'css',
          tests: `
            if (!userCode.includes('object-fit')) throw new Error('object-fit');
          `,
        },
      },
      {
        id: 'css-l18',
        title: '18. Proyecto: card responsive',
        duration: '22 min',
        theory: `<p>Card con flex, sombra, border-radius, hover y media query mobile.</p>`,
        example: { code: `.card {\n  max-width: 320px;\n  padding: 1rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}\n@media (max-width: 480px) {\n  .card { max-width: 100%; }\n}`, explanation: 'Patron de componente UI.' },
        exercise: {
          instructions: '.card { max-width: 300px; padding: 16px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }',
          starterCode: ``,
          htmlFixture: '<article class="card"><h2>Titulo</h2><p>Texto</p></article>',
          hint: 'max-width: 300px',
          solution: `.card {\n  max-width: 300px;\n  padding: 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n}`,
          runner: 'css',
          tests: `
            if (!userCode.includes('border-radius')) throw new Error('border-radius');
            if (!userCode.includes('box-shadow')) throw new Error('box-shadow');
            if (!userCode.includes('max-width')) throw new Error('max-width');
          `,
        },
      },
    ],
  },
];
