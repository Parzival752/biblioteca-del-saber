export const CURRICULUM = [
  {
    id: 'sql-mod-1',
    title: 'SQL esencial',
    description: 'Consultas, filtros y datos relacionales',
    lessons: [
      {
        id: 'sql-l01',
        title: '1. SELECT basico',
        duration: '10 min',
        theory: `<p><code>SELECT columna FROM tabla;</code> — lee datos. <code>*</code> = todas las columnas.</p>
          <p>Tabla de ejemplo: <strong>usuarios</strong> (id, nombre, edad)</p>`,
        example: { code: `SELECT nombre FROM usuarios;`, explanation: 'Devuelve columna nombre.' },
        exercise: {
          instructions: 'Selecciona todas las columnas de usuarios.',
          starterCode: `-- Escribe SQL\n`,
          hint: 'SELECT * FROM usuarios;',
          solution: `SELECT * FROM usuarios;`,
          runner: 'sql',
          tests: `
            if (!userCode.toUpperCase().includes('SELECT')) throw new Error('Usa SELECT');
            if (!userCode.toUpperCase().includes('FROM USUARIOS')) throw new Error('FROM usuarios');
            if (__rows.length < 1) throw new Error('Debe devolver filas');
          `,
        },
      },
      {
        id: 'sql-l02',
        title: '2. WHERE',
        duration: '12 min',
        theory: `<p><code>WHERE</code> filtra filas: <code>WHERE edad &gt; 18</code></p>`,
        example: { code: `SELECT * FROM usuarios WHERE edad >= 18;`, explanation: 'Solo mayores de edad.' },
        exercise: {
          instructions: 'SELECT nombre FROM usuarios WHERE edad = 25;',
          starterCode: ``,
          hint: 'WHERE edad = 25',
          solution: `SELECT nombre FROM usuarios WHERE edad = 25;`,
          runner: 'sql',
          tests: `
            if (__rows.length !== 1) throw new Error('Debe haber 1 fila');
            if (__rows[0]?.nombre !== 'Carlos') throw new Error('Carlos tiene edad 25');
          `,
        },
      },
      {
        id: 'sql-l03',
        title: '3. ORDER BY',
        duration: '10 min',
        theory: `<p><code>ORDER BY columna ASC|DESC</code> ordena resultados.</p>`,
        example: { code: `SELECT * FROM usuarios ORDER BY edad DESC;`, explanation: 'DESC = descendente.' },
        exercise: {
          instructions: 'SELECT nombre FROM usuarios ORDER BY nombre ASC;',
          starterCode: ``,
          hint: 'ORDER BY nombre ASC',
          solution: `SELECT nombre FROM usuarios ORDER BY nombre ASC;`,
          runner: 'sql',
          tests: `
            if (__rows[0]?.nombre !== 'Ana') throw new Error('Primero alfabetico: Ana');
          `,
        },
      },
      {
        id: 'sql-l04',
        title: '4. INSERT',
        duration: '12 min',
        theory: `<p><code>INSERT INTO tabla (cols) VALUES (vals);</code></p>`,
        example: { code: `INSERT INTO usuarios (nombre, edad) VALUES ('Luis', 30);`, explanation: 'Agrega filas.' },
        exercise: {
          instructions: 'INSERT INTO usuarios (nombre, edad) VALUES (\'Pedro\', 40);',
          starterCode: ``,
          hint: 'INSERT INTO usuarios',
          solution: `INSERT INTO usuarios (nombre, edad) VALUES ('Pedro', 40);`,
          runner: 'sql',
          tests: `
            if (!userCode.toUpperCase().includes('INSERT')) throw new Error('Usa INSERT');
            if (!userCode.includes('Pedro')) throw new Error('Inserta Pedro');
          `,
        },
      },
      {
        id: 'sql-l05',
        title: '5. UPDATE',
        duration: '12 min',
        theory: `<p><code>UPDATE tabla SET col=val WHERE condicion;</code></p>`,
        example: { code: `UPDATE usuarios SET edad = 26 WHERE nombre = 'Ana';`, explanation: 'Siempre usa WHERE en UPDATE.' },
        exercise: {
          instructions: 'UPDATE usuarios SET edad = 99 WHERE nombre = \'Ana\';',
          starterCode: ``,
          hint: 'UPDATE usuarios SET',
          solution: `UPDATE usuarios SET edad = 99 WHERE nombre = 'Ana';`,
          runner: 'sql',
          tests: `
            if (!userCode.toUpperCase().includes('UPDATE')) throw new Error('Usa UPDATE');
            if (!userCode.includes('Ana')) throw new Error('WHERE nombre Ana');
          `,
        },
      },
      {
        id: 'sql-l06',
        title: '6. COUNT y agregacion',
        duration: '12 min',
        theory: `<p><code>SELECT COUNT(*) FROM tabla;</code> cuenta filas.</p>`,
        example: { code: `SELECT COUNT(*) AS total FROM usuarios;`, explanation: 'Funciones agregadas.' },
        exercise: {
          instructions: 'SELECT COUNT(*) FROM usuarios WHERE edad > 20;',
          starterCode: ``,
          hint: 'COUNT(*)',
          solution: `SELECT COUNT(*) FROM usuarios WHERE edad > 20;`,
          runner: 'sql',
          tests: `
            if (__rows[0]?.['COUNT(*)'] < 2) throw new Error('Mas de 2 usuarios > 20');
          `,
        },
      },
    ],
  },
  {
    id: 'sql-mod-2',
    title: 'SQL intermedio',
    description: 'Agregaciones, filtros avanzados y relaciones',
    lessons: [
      {
        id: 'sql-l07',
        title: '7. DISTINCT',
        duration: '10 min',
        theory: `<p><code>SELECT DISTINCT columna</code> elimina duplicados en resultados.</p>`,
        example: { code: `SELECT DISTINCT edad FROM usuarios;`, explanation: 'Edades unicas.' },
        exercise: {
          instructions: 'SELECT DISTINCT edad FROM usuarios ORDER BY edad;',
          starterCode: ``,
          hint: 'SELECT DISTINCT edad',
          solution: `SELECT DISTINCT edad FROM usuarios ORDER BY edad;`,
          runner: 'sql',
          tests: `if (__rows.length < 3) throw new Error('Al menos 3 edades distintas');`,
        },
      },
      {
        id: 'sql-l08',
        title: '8. LIKE y patrones',
        duration: '12 min',
        theory: `<p><code>WHERE nombre LIKE 'A%'</code> — % es comodin (empieza con A).</p>`,
        example: { code: `SELECT nombre FROM usuarios WHERE nombre LIKE 'A%';`, explanation: 'Filtra por patron de texto.' },
        exercise: {
          instructions: 'SELECT nombre FROM usuarios WHERE nombre LIKE "M%";',
          starterCode: ``,
          hint: 'LIKE "M%"',
          solution: `SELECT nombre FROM usuarios WHERE nombre LIKE 'M%';`,
          runner: 'sql',
          tests: `if (__rows[0]?.nombre !== 'Maria') throw new Error('Maria empieza con M');`,
        },
      },
      {
        id: 'sql-l09',
        title: '9. AND / OR',
        duration: '12 min',
        theory: `<p>Combina condiciones: <code>WHERE edad > 20 AND edad < 30</code></p>`,
        example: { code: `SELECT * FROM usuarios WHERE edad >= 25 AND edad <= 30;`, explanation: 'Rango de edades.' },
        exercise: {
          instructions: 'SELECT nombre FROM usuarios WHERE edad = 25 OR edad = 30;',
          starterCode: ``,
          hint: 'OR edad = 30',
          solution: `SELECT nombre FROM usuarios WHERE edad = 25 OR edad = 30;`,
          runner: 'sql',
          tests: `if (__rows.length !== 3) throw new Error('Ana, Carlos y Maria');`,
        },
      },
      {
        id: 'sql-l10',
        title: '10. MIN y MAX',
        duration: '12 min',
        theory: `<p><code>SELECT MAX(edad) FROM usuarios;</code> — valor maximo de columna.</p>`,
        example: { code: `SELECT MIN(edad) AS minimo FROM usuarios;`, explanation: 'Agregacion escalar.' },
        exercise: {
          instructions: 'SELECT MAX(edad) FROM usuarios;',
          starterCode: ``,
          hint: 'MAX(edad)',
          solution: `SELECT MAX(edad) FROM usuarios;`,
          runner: 'sql',
          tests: `if (__rows[0]?.['MAX(edad)'] !== 30) throw new Error('Max edad es 30');`,
        },
      },
      {
        id: 'sql-l11',
        title: '11. GROUP BY',
        duration: '14 min',
        theory: `<p><code>GROUP BY edad</code> agrupa filas para contar por categoria.</p>`,
        example: { code: `SELECT edad, COUNT(*) AS total FROM usuarios GROUP BY edad;`, explanation: 'Una fila por edad.' },
        exercise: {
          instructions: 'SELECT edad, COUNT(*) FROM usuarios GROUP BY edad HAVING COUNT(*) > 1;',
          starterCode: ``,
          hint: 'HAVING COUNT(*) > 1',
          solution: `SELECT edad, COUNT(*) FROM usuarios GROUP BY edad HAVING COUNT(*) > 1;`,
          runner: 'sql',
          tests: `if (__rows[0]?.edad !== 25) throw new Error('Edad 25 tiene 2 usuarios');`,
        },
      },
      {
        id: 'sql-l12',
        title: '12. Tabla productos',
        duration: '12 min',
        theory: `<p>Nueva tabla <strong>productos</strong> (id, nombre, precio, categoria).</p>`,
        example: { code: `SELECT nombre, precio FROM productos WHERE categoria = 'Tech';`, explanation: 'Filtra productos tech.' },
        exercise: {
          instructions: 'SELECT nombre FROM productos WHERE precio > 20 ORDER BY precio DESC;',
          starterCode: ``,
          hint: 'precio > 20',
          solution: `SELECT nombre FROM productos WHERE precio > 20 ORDER BY precio DESC;`,
          runner: 'sql',
          tests: `
            if (__rows[0]?.nombre !== 'Monitor') throw new Error('Monitor es el mas caro > 20');
          `,
        },
      },
    ],
  },
  {
    id: 'sql-mod-3',
    title: 'SQL avanzado',
    description: 'JOINs, DELETE y consultas compuestas',
    lessons: [
      {
        id: 'sql-l13',
        title: '13. INNER JOIN',
        duration: '16 min',
        theory: `<p><code>JOIN</code> combina tablas relacionadas. Tabla <strong>pedidos</strong> enlaza usuarios y productos.</p>`,
        example: { code: `SELECT u.nombre, p.nombre AS producto\nFROM pedidos pe\nJOIN usuarios u ON pe.usuario_id = u.id\nJOIN productos p ON pe.producto_id = p.id;`, explanation: 'Relaciona IDs.' },
        exercise: {
          instructions: 'SELECT u.nombre FROM pedidos pe JOIN usuarios u ON pe.usuario_id = u.id WHERE pe.id = 1;',
          starterCode: ``,
          hint: 'JOIN usuarios u ON pe.usuario_id = u.id',
          solution: `SELECT u.nombre FROM pedidos pe JOIN usuarios u ON pe.usuario_id = u.id WHERE pe.id = 1;`,
          runner: 'sql',
          tests: `if (__rows[0]?.nombre !== 'Ana') throw new Error('Pedido 1 es de Ana');`,
        },
      },
      {
        id: 'sql-l14',
        title: '14. SUM y AVG',
        duration: '14 min',
        theory: `<p><code>SUM(precio)</code> suma valores. <code>AVG(precio)</code> calcula media.</p>`,
        example: { code: `SELECT SUM(precio) AS total FROM productos;`, explanation: 'Agregacion numerica.' },
        exercise: {
          instructions: 'SELECT AVG(precio) FROM productos WHERE categoria = "Tech";',
          starterCode: ``,
          hint: 'AVG(precio)',
          solution: `SELECT AVG(precio) FROM productos WHERE categoria = 'Tech';`,
          runner: 'sql',
          tests: `if (__rows[0]?.['AVG(precio)'] < 50) throw new Error('Media tech > 50');`,
        },
      },
      {
        id: 'sql-l15',
        title: '15. DELETE',
        duration: '12 min',
        theory: `<p><code>DELETE FROM tabla WHERE condicion;</code> — siempre usa WHERE.</p>`,
        example: { code: `DELETE FROM usuarios WHERE id = 99;`, explanation: 'Elimina filas.' },
        exercise: {
          instructions: 'DELETE FROM usuarios WHERE nombre = "Luis";',
          starterCode: ``,
          hint: 'DELETE FROM usuarios WHERE',
          solution: `DELETE FROM usuarios WHERE nombre = 'Luis';`,
          runner: 'sql',
          tests: `
            if (!userCode.toUpperCase().includes('DELETE')) throw new Error('Usa DELETE');
            const luis = __rows.find(r => r.nombre === 'Luis');
            if (luis) throw new Error('Luis debe eliminarse');
          `,
        },
      },
      {
        id: 'sql-l16',
        title: '16. LIMIT',
        duration: '10 min',
        theory: `<p><code>LIMIT n</code> restringe filas devueltas (util con ORDER BY).</p>`,
        example: { code: `SELECT * FROM usuarios ORDER BY edad DESC LIMIT 2;`, explanation: 'Top 2 mayores.' },
        exercise: {
          instructions: 'SELECT nombre FROM productos ORDER BY precio ASC LIMIT 1;',
          starterCode: ``,
          hint: 'ORDER BY precio ASC LIMIT 1',
          solution: `SELECT nombre FROM productos ORDER BY precio ASC LIMIT 1;`,
          runner: 'sql',
          tests: `if (__rows[0]?.nombre !== 'Libro') throw new Error('Producto mas barato: Libro');`,
        },
      },
      {
        id: 'sql-l17',
        title: '17. Subconsulta',
        duration: '16 min',
        theory: `<p>Subconsulta en WHERE: <code>WHERE edad > (SELECT AVG(edad) FROM usuarios)</code></p>`,
        example: { code: `SELECT nombre FROM usuarios WHERE edad > (SELECT AVG(edad) FROM usuarios);`, explanation: 'Mayores que la media.' },
        exercise: {
          instructions: 'SELECT COUNT(*) FROM usuarios WHERE edad > (SELECT AVG(edad) FROM usuarios);',
          starterCode: ``,
          hint: 'SELECT AVG(edad) FROM usuarios',
          solution: `SELECT COUNT(*) FROM usuarios WHERE edad > (SELECT AVG(edad) FROM usuarios);`,
          runner: 'sql',
          tests: `if (__rows[0]?.['COUNT(*)'] < 1) throw new Error('Al menos 1 mayor que media');`,
        },
      },
      {
        id: 'sql-l18',
        title: '18. Proyecto: reporte ventas',
        duration: '20 min',
        theory: `<p>Consulta compuesta con JOIN, GROUP BY y ORDER BY para un reporte real.</p>`,
        example: { code: `SELECT u.nombre, COUNT(*) AS pedidos\nFROM pedidos pe\nJOIN usuarios u ON pe.usuario_id = u.id\nGROUP BY u.nombre;`, explanation: 'Pedidos por usuario.' },
        exercise: {
          instructions: 'SELECT categoria, COUNT(*) AS total FROM productos GROUP BY categoria ORDER BY total DESC;',
          starterCode: ``,
          hint: 'GROUP BY categoria',
          solution: `SELECT categoria, COUNT(*) AS total FROM productos GROUP BY categoria ORDER BY total DESC;`,
          runner: 'sql',
          tests: `
            if (__rows[0]?.categoria !== 'Tech') throw new Error('Tech tiene mas productos');
            if (__rows[0]?.total < 2) throw new Error('Tech >= 2 productos');
          `,
        },
      },
    ],
  },
];
