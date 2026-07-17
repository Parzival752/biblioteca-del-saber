export const CURRICULUM = [
  {
    id: 'dat-mod-1',
    title: 'Organización básica',
    description: 'Carpetas, nombres y convenciones',
    lessons: [
      {
        id: 'dat-l001',
        title: '1. Jerarquía de carpetas',
        duration: '8 min',
        theory: `<p>Jerarquía de carpetas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, crea plantilla carpetas para nuevo proyecto Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar jerarquía de carpetas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Estructura lógica por proyecto/año/tipo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Jerarquía de carpetas',
          content: `<p>Ejemplo: Proyecto/Docs/Imágenes/Export.</p>`,
          tip: 'Evita carpetas \'Misc\' gigantes.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre jerarquía de carpetas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Buena estructura?',
              options: [
                'Todo en Descargas',
                'Sin subcarpetas',
                'Solo escritorio',
                'Por proyecto y tipo de archivo',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l002',
        title: '2. Nombres de archivo',
        duration: '8 min',
        theory: `<p>Nombres de archivo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, renombra fotos con prefijo fecha Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar nombres de archivo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Fecha ISO YYYY-MM-DD al inicio ordena cronológicamente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Nombres de archivo',
          content: `<p>Evita espacios; usa guiones.</p>`,
          tip: 'Versión v01 v02 en iteraciones.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre nombres de archivo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Orden cronológico en nombres?',
              options: [
                'Solo emoji',
                'Sin extensión',
                'Prefijo YYYY-MM-DD',
                'Nombre aleatorio',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l003',
        title: '3. Metadatos útiles',
        duration: '8 min',
        theory: `<p>Metadatos útiles es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, añade tags en Finder/Explorer o herramienta Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar metadatos útiles con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Etiquetas OS, comentarios PDF, EXIF fotos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Metadatos útiles',
          content: `<p>Búsqueda por tag acelera hallazgo.</p>`,
          tip: 'No dupliques info innecesaria.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre metadatos útiles.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Tags sirven para?',
              options: [
                'Cifrar disco',
                'Buscar transversalmente',
                'Eliminar archivos',
                'Comprimir siempre',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l004',
        title: '4. Duplicados',
        duration: '8 min',
        theory: `<p>Duplicados es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa fdupes o rmlint con precaución Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar duplicados con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Copias idénticas ocupan espacio y confunden</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Duplicados',
          content: `<p>Revisa antes de borrar automático.</p>`,
          tip: 'Hash SHA256 confirma identidad.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre duplicados.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Detectar duplicados?',
              options: [
                'Comparar hash contenido',
                'Solo nombre igual',
                'Tamaño archivo único',
                'Color icono',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l005',
        title: '5. Inbox cero digital',
        duration: '8 min',
        theory: `<p>Inbox cero digital es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mueve Descargas a Inbox y procesa Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar inbox cero digital con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Carpeta Inbox para procesar y clasificar semanalmente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Inbox cero digital',
          content: `<p>Regla: cada archivo tiene destino o se borra.</p>`,
          tip: '15 min semanal mantienen orden.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre inbox cero digital.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Inbox digital?',
              options: [
                'Papelera',
                'Backup único',
                'Punto entrada temporal a clasificar',
                'Almacén permanente',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l006',
        title: '6. Plantillas documento',
        duration: '8 min',
        theory: `<p>Plantillas documento es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, guarda plantilla .odt/.docx en Templates Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar plantillas documento con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Contratos, informes y listas reutilizables</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Plantillas documento',
          content: `<p>Campos rellenables ahorran tiempo.</p>`,
          tip: 'Versiona plantillas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre plantillas documento.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Plantilla?',
              options: [
                'Solo PDF final',
                'Documento base reutilizable',
                'Copia única sin formato',
                'Archivo corrupto',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l007',
        title: '7. Control versiones simple',
        duration: '8 min',
        theory: `<p>Control versiones simple es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no uses 'final_final2.docx' sin sistema Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar control versiones simple con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Sufijos v1 v2 o carpeta versions/</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Control versiones simple',
          content: `<p>Git para texto/código; copias fechadas para office.</p>`,
          tip: 'Un canonical latest claro.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre control versiones simple.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Versionado claro?',
              options: [
                'Solo sobrescribir',
                'Borrar anteriores siempre',
                'Sin historial',
                'v01, v02 o git',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l008',
        title: '8. Archivar vs borrar',
        duration: '8 min',
        theory: `<p>Archivar vs borrar es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, carpeta Archive/Año para cerrados Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar archivar vs borrar con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Archivo frío para referencia; borrar lo obsoleto</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Archivar vs borrar',
          content: `<p>Archivar libera mente sin perder historial.</p>`,
          tip: 'Política retención define cuándo borrar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre archivar vs borrar.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Proyecto terminado?',
              options: [
                'Mover a Archive',
                'Dejar en Desktop',
                'Duplicar 10 veces',
                'Email a todos',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l009',
        title: '9. Búsqueda eficiente',
        duration: '8 min',
        theory: `<p>Búsqueda eficiente es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, indexa discos y aprende operadores Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar búsqueda eficiente con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Everything, locate, Spotlight según OS</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Búsqueda eficiente',
          content: `<p>Operadores path: modified: en algunos.</p>`,
          tip: 'Organizar reduce dependencia búsqueda.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre búsqueda eficiente.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Encontrar archivo rápido?',
              options: [
                'Renombrar random',
                'Herramienta indexada + buen nombre',
                'Scroll manual infinito',
                'Imprimir todo',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l010',
        title: '10. Auditoría trimestral',
        duration: '8 min',
        theory: `<p>Auditoría trimestral es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, calendario recordatorio cada 3 meses Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar auditoría trimestral con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Revisar estructura, duplicados y permisos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Auditoría trimestral',
          content: `<p>Ajusta convenciones que fallaron.</p>`,
          tip: 'Involucra equipo si compartido.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre auditoría trimestral.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Auditoría datos?',
              options: [
                'Formatear disco',
                'Ignorar duplicados',
                'Mantener sistema usable',
                'Opcional nunca',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'dat-mod-2',
    title: 'Hojas de cálculo',
    description: 'CSV, Excel/LibreOffice y buenas prácticas',
    lessons: [
      {
        id: 'dat-l011',
        title: '11. CSV UTF-8',
        duration: '8 min',
        theory: `<p>CSV UTF-8 es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, exporta CSV UTF-8 desde hoja Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar csv utf-8 con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Formato intercambio universal; cuidado separador , vs ;</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: CSV UTF-8',
          content: `<p>Excel regional usa ; en EU.</p>`,
          tip: 'Comillas escapan comas internas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre csv utf-8.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿CSV ventaja?',
              options: [
                'Solo imágenes',
                'Binario cerrado',
                'Sin datos',
                'Interoperable y simple',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l012',
        title: '12. Encabezados claros',
        duration: '8 min',
        theory: `<p>Encabezados claros es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa snake_case o Title Case consistente Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar encabezados claros con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Primera fila nombres columna sin espacios raros</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Encabezados claros',
          content: `<p>Evita celdas fusionadas en datos.</p>`,
          tip: 'Una tabla por hoja.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre encabezados claros.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Tabla limpia?',
              options: [
                'Varias tablas entrelazadas',
                'Colores solo',
                'Encabezados fila 1 sin fusiones',
                'Título en fila 50',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l013',
        title: '13. Tipos de datos',
        duration: '8 min',
        theory: `<p>Tipos de datos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, formato fecha ISO en columna Fecha Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar tipos de datos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Número, fecha, texto; no mezclar en columna</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Tipos de datos',
          content: `<p>Números como texto rompen sumas.</p>`,
          tip: 'Separar moneda en columna propia.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tipos de datos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Suma falla?',
              options: [
                'Falta café',
                'Números guardados como texto',
                'Excel roto',
                'Monitor mal',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l014',
        title: '14. Filtros y tablas',
        duration: '8 min',
        theory: `<p>Filtros y tablas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Ctrl+Shift+L filtro en Excel Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar filtros y tablas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Convertir rango en Tabla facilita filtros</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Filtros y tablas',
          content: `<p>Tablas expanden fórmulas automáticamente.</p>`,
          tip: 'Filtro no borra datos ocultos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre filtros y tablas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Filtrar sin borrar?',
              options: [
                'AutoFilter oculta filas',
                'Delete row',
                'Format paint',
                'Print',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l015',
        title: '15. VLOOKUP/XLOOKUP intro',
        duration: '8 min',
        theory: `<p>VLOOKUP/XLOOKUP intro es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, busca precio producto por SKU Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar vlookup/xlookup intro con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Unir datos por clave común</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: VLOOKUP/XLOOKUP intro',
          content: `<p>XLOOKUP más flexible que VLOOKUP.</p>`,
          tip: 'Claves duplicadas causan ambigüedad.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre vlookup/xlookup intro.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Unir tablas por ID?',
              options: [
                'Solo colores',
                'Imprimir',
                'XLOOKUP/VLOOKUP',
                'Copiar manual 1000 filas',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l016',
        title: '16. Pivot básico',
        duration: '8 min',
        theory: `<p>Pivot básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, insert pivot desde rango tabular Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar pivot básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Resumir ventas por categoría/mes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Pivot básico',
          content: `<p>Arrastra campo a filas y valores.</p>`,
          tip: 'Actualizar origen si datos crecen.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre pivot básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Resumen interactivo?',
              options: [
                'Macro sin datos',
                'Tabla dinámica/pivot',
                'Solo gráfico',
                'Word art',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l017',
        title: '17. Validación datos',
        duration: '8 min',
        theory: `<p>Validación datos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, valida Estado: Pendiente/Hecho/Cancelado Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar validación datos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Listas desplegables evitan typos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Validación datos',
          content: `<p>Reduce errores entrada masiva.</p>`,
          tip: 'Mensaje error claro al usuario.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre validación datos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Evitar typo categoría?',
              options: [
                'Texto libre siempre',
                'Celdas vacías',
                'Fusionar',
                'Validación lista',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l018',
        title: '18. Gráficos honestos',
        duration: '8 min',
        theory: `<p>Gráficos honestos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, gráfico barras gastos mensuales Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar gráficos honestos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Ejes desde cero cuando corresponde; etiquetas claras</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Gráficos honestos',
          content: `<p>Eje truncado exagera diferencias.</p>`,
          tip: 'Título describe insight.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre gráficos honestos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Gráfico engañoso?',
              options: [
                'Eje Y truncado sin aviso',
                'Etiquetas claras',
                'Colores accesibles',
                'Título descriptivo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l019',
        title: '19. Backup hojas',
        duration: '8 min',
        theory: `<p>Backup hojas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, guarda copia fecha antes de transformar Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar backup hojas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Copia versionada antes de macros masivas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Backup hojas',
          content: `<p>Git no ideal para xlsx binario.</p>`,
          tip: 'Export CSV para datos críticos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre backup hojas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes macro destructiva?',
              options: [
                'Borrar origen',
                'Copia respaldo fechada',
                'Confiar undo infinito',
                'Sobrescribir única',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l020',
        title: '20. Import limpio',
        duration: '8 min',
        theory: `<p>Import limpio es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, import CSV con tipos correctos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar import limpio con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Power Query / datos→texto columnas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Import limpio',
          content: `<p>Elimina filas vacías al import.</p>`,
          tip: 'Documenta pasos refresh.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre import limpio.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Import recurrente?',
              options: [
                'Screenshot',
                'PDF only',
                'Query reproducible',
                'Pegar manual mensual',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'dat-mod-3',
    title: 'Registros personales',
    description: 'Diarios, hábitos, finanzas simples',
    lessons: [
      {
        id: 'dat-l021',
        title: '21. Diario estructurado',
        duration: '8 min',
        theory: `<p>Diario estructurado es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, plantilla markdown diaria Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar diario estructurado con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Campos: fecha, ánimo 1-5, logros, bloqueos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Diario estructurado',
          content: `<p>Revisión semanal detecta patrones.</p>`,
          tip: 'Breve > largo inconsistente.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre diario estructurado.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Diario útil?',
              options: [
                'Novela diaria obligatoria',
                'Solo memes',
                'Sin fecha',
                'Reflexión y seguimiento',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l022',
        title: '22. Tracker hábitos',
        duration: '8 min',
        theory: `<p>Tracker hábitos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, hoja mes con filas días columnas hábitos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar tracker hábitos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Checkbox diario ejercicio, lectura, agua</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Tracker hábitos',
          content: `<p>No más de 5 hábitos nuevos a la vez.</p>`,
          tip: 'Visual streak motiva.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tracker hábitos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuántos hábitos nuevos?',
              options: [
                'Cero registro',
                'Solo anual',
                'Pocos para sostener',
                '20 simultáneos',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l023',
        title: '23. Finanzas personales',
        duration: '8 min',
        theory: `<p>Finanzas personales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, registra cada gasto mismo día Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar finanzas personales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Ingresos, gastos fijos, variables por categoría</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Finanzas personales',
          content: `<p>Separar necesidades vs gustos.</p>`,
          tip: 'Reconciliar con extracto banco mensual.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre finanzas personales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Registro gastos?',
              options: [
                'Adivinar',
                'Conciencia y presupuesto',
                'Ignorar deudas',
                'Solo efectivo sin nota',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l024',
        title: '24. Inventario casa',
        duration: '8 min',
        theory: `<p>Inventario casa es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, foto etiqueta serial en registro Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar inventario casa con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Serial, compra, garantía electrodomésticos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Inventario casa',
          content: `<p>Útil para seguros y reparaciones.</p>`,
          tip: 'Ubicación física en nota.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre inventario casa.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Inventario?',
              options: [
                'Seguros y mantenimiento',
                'Decoración',
                'Spam',
                'Ocultar garantías',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l025',
        title: '25. Salud registro básico',
        duration: '8 min',
        theory: `<p>Salud registro básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, log sueño hora acostar/levantar Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar salud registro básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Sueño, pasos, síntomas opcionales sin diagnosticar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Salud registro básico',
          content: `<p>Compartir con médico si relevante.</p>`,
          tip: 'No sustituye consulta profesional.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre salud registro básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Log sueño?',
              options: [
                'Publicar online',
                'Ignorar',
                'Patrones para conversar con profesional',
                'Autodiagnóstico',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l026',
        title: '26. Lectura y media',
        duration: '8 min',
        theory: `<p>Lectura y media es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Goodreads o hoja simple Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar lectura y media con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Lista lectura: título, autor, estado, nota</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Lectura y media',
          content: `<p>Notas citas página útil.</p>`,
          tip: 'Prioriza terminados vs empezados infinitos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre lectura y media.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Lista lectura?',
              options: [
                'Solo portadas',
                'Priorizar y recordar',
                'Comprar sin leer siempre',
                'Sin título',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l027',
        title: '27. Contactos enriquecidos',
        duration: '8 min',
        theory: `<p>Contactos enriquecidos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, CRM personal ligero en hoja Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar contactos enriquecidos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Contexto cómo conociste, cumple, preferencias</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Contactos enriquecidos',
          content: `<p>Recordatorios follow-up profesionales.</p>`,
          tip: 'Respeta privacidad GDPR si aplica.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre contactos enriquecidos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿CRM personal?',
              options: [
                'Spam amigos',
                'Vender datos',
                'Sin consentimiento',
                'Relaciones profesionales organizadas',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l028',
        title: '28. Objetivos SMART',
        duration: '8 min',
        theory: `<p>Objetivos SMART es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, transforma 'estudiar más' en meta semanal horas Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar objetivos smart con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Specific Measurable Achievable Relevant Time-bound</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Objetivos SMART',
          content: `<p>Revisión mensual ajusta metas.</p>`,
          tip: 'Un objetivo principal por área.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre objetivos smart.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿SMART?',
              options: [
                'Metas concretas medibles',
                'Deseos vagos',
                'Sin plazo',
                'Imposibles siempre',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l029',
        title: '29. Privacidad registros',
        duration: '8 min',
        theory: `<p>Privacidad registros es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, veracrypt o cifrado disco OS Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar privacidad registros con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Cifrar carpeta sensible; backup cifrado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Privacidad registros',
          content: `<p>No sincronizar salud a nube sin cifrar.</p>`,
          tip: 'Contraseña fuerte gestor.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre privacidad registros.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Datos sensibles?',
              options: [
                'Twitter',
                'Cifrar local o nube cifrada',
                'Email sin password',
                'USB público',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l030',
        title: '30. Export periódico',
        duration: '8 min',
        theory: `<p>Export periódico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, exporta finanzas año a Archive Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar export periódico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: PDF/CSV anual para archivo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Export periódico',
          content: `<p>Formato abierto perdurable.</p>`,
          tip: 'Prueba restaurar backup.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre export periódico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Archivo anual?',
              options: [
                'Borrar origen',
                'Screenshot',
                'Export abierto fechado',
                'Solo app propietaria',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'dat-mod-4',
    title: 'Automatización ligera',
    description: 'Fórmulas, scripts simples y integraciones',
    lessons: [
      {
        id: 'dat-l031',
        title: '31. Fórmulas vs macros',
        duration: '8 min',
        theory: `<p>Fórmulas vs macros es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prefiere SUMIF antes de VBA Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar fórmulas vs macros con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Fórmulas transparentes; macros para repetitivo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Fórmulas vs macros',
          content: `<p>Macros requieren confianza archivo.</p>`,
          tip: 'Documenta lógica.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre fórmulas vs macros.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Suma condicional?',
              options: [
                'Manual calculator',
                'Imprimir',
                'Dibujar',
                'SUMIF/COUNTIF',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l032',
        title: '32. OpenRefine limpieza',
        duration: '8 min',
        theory: `<p>OpenRefine limpieza es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, import CSV sucio a OpenRefine Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar openrefine limpieza con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Corregir mayúsculas, trim, cluster duplicados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: OpenRefine limpieza',
          content: `<p>Facets exploran datos rápido.</p>`,
          tip: 'Export limpio a CSV.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre openrefine limpieza.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Limpiar nombres duplicados?',
              options: [
                'Borrar todo',
                'Ignorar',
                'Clustering OpenRefine',
                'Ojo humano 100k filas',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l033',
        title: '33. IFTTT/Zapier intro',
        duration: '8 min',
        theory: `<p>IFTTT/Zapier intro es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, automatiza recibo gasto a spreadsheet Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar ifttt/zapier intro con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Conectar apps: email→hoja, form→notificación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: IFTTT/Zapier intro',
          content: `<p>Revisa permisos OAuth.</p>`,
          tip: 'Empieza con un flujo simple.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ifttt/zapier intro.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Automatizar entrada datos?',
              options: [
                'CD-ROM',
                'Integración no-code',
                'Copiar manual forever',
                'Fax',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l034',
        title: '34. Python pandas mini',
        duration: '8 min',
        theory: `<p>Python pandas mini es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, script 10 líneas limpia CSV mensual Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar python pandas mini con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: read_csv, dropna, to_csv para limpieza</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Python pandas mini',
          content: `<p>Reproducible vs clics manuales.</p>`,
          tip: 'Entorno virtual recomendado.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre python pandas mini.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja script limpieza?',
              options: [
                'Reproducible y auditable',
                'Siempre manual',
                'Sin logs',
                'Aleatorio',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l035',
        title: '35. APIs REST GET',
        duration: '8 min',
        theory: `<p>APIs REST GET es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, curl API clima a JSON local Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar apis rest get con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Obtener JSON público y parsear</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: APIs REST GET',
          content: `<p>Respeta rate limits.</p>`,
          tip: 'No hardcode API keys en repos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre apis rest get.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿GET público?',
              options: [
                'DDoS',
                'Keys en GitHub',
                'Obtener datos estructurados',
                'Scrape sin permiso',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l036',
        title: '36. Scheduled tasks datos',
        duration: '8 min',
        theory: `<p>Scheduled tasks datos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, backup CSV a las 2am Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar scheduled tasks datos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Cron ejecuta export nightly</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Scheduled tasks datos',
          content: `<p>Log stdout para verificar.</p>`,
          tip: 'Prueba manual antes cron.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre scheduled tasks datos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Backup automático?',
              options: [
                'Solo USB perdido',
                'Cron/systemd timer',
                'Recordar humano',
                'Nunca backup',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l037',
        title: '37. Normalización',
        duration: '8 min',
        theory: `<p>Normalización es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, separa Cliente y Pedidos tablas Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar normalización con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Tercera forma normal simplificada: no repetir grupos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Normalización',
          content: `<p>Reduce anomalías actualización.</p>`,
          tip: 'IDs enlazan tablas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre normalización.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Repetir dirección cliente en cada pedido?',
              options: [
                'Duplicar siempre',
                'Una celda gigante',
                'Sin claves',
                'Separar tabla Cliente',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l038',
        title: '38. Documentar pipeline',
        duration: '8 min',
        theory: `<p>Documentar pipeline es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, diagrama flecha simple Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar documentar pipeline con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: README pasos origen→transform→destino</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Documentar pipeline',
          content: `<p>Onboarding futuro te agradece.</p>`,
          tip: 'Versiona cambios pipeline.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre documentar pipeline.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Pipeline datos?',
              options: [
                'Documentar flujo',
                'Secreto oral',
                'Solo en cabeza',
                'Borrar logs',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l039',
        title: '39. Calidad datos',
        duration: '8 min',
        theory: `<p>Calidad datos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, regla email contiene @ Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar calidad datos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Completitud, unicidad, validez métricas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Calidad datos',
          content: `<p>Dashboard errores semanal.</p>`,
          tip: 'Corregir en origen si posible.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre calidad datos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Email sin @?',
              options: [
                'Publicar',
                'Dato inválido a corregir',
                'Válido siempre',
                'Ignorar',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l040',
        title: '40. Ethics scraping',
        duration: '8 min',
        theory: `<p>Ethics scraping es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa API oficial si existe Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar ethics scraping con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Respeta robots.txt y ToS</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Ethics scraping',
          content: `<p>Scraping agresivo puede bloquear o ilegal.</p>`,
          tip: 'Datos personales regulados.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ethics scraping.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Scrape sitio?',
              options: [
                'Vender datos ajenos',
                'Sin límites',
                'Revisar ToS y robots',
                'Ignorar legal',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'dat-mod-5',
    title: 'Visualización y comunicación',
    description: 'Gráficos, tablas y narrativa con datos',
    lessons: [
      {
        id: 'dat-l041',
        title: '41. Elegir gráfico correcto',
        duration: '8 min',
        theory: `<p>Elegir gráfico correcto es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no uses pie con 15 categorías Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar elegir gráfico correcto con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Barras categorías; línea tiempo; scatter correlación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Elegir gráfico correcto',
          content: `<p>Pocas categorías en pie.</p>`,
          tip: 'Línea para series temporales.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre elegir gráfico correcto.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿15 categorías proporción?',
              options: [
                'Pie chart',
                'Word cloud solo',
                '3D siempre',
                'Barras horizontales',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l042',
        title: '42. Tablas legibles',
        duration: '8 min',
        theory: `<p>Tablas legibles es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, formato condicional resalta outliers Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar tablas legibles con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Alineación número derecha; miles separador</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Tablas legibles',
          content: `<p>Congela fila encabezado scroll.</p>`,
          tip: 'Ancho columna adecuado.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tablas legibles.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Números en tabla?',
              options: [
                'Fusión masiva',
                'Sin encabezado',
                'Alinear derecha',
                'Centro siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l043',
        title: '43. Storytelling datos',
        duration: '8 min',
        theory: `<p>Storytelling datos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, título activo: 'Ventas subieron 12% Q2' Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar storytelling datos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Un mensaje principal por visualización</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Storytelling datos',
          content: `<p>Contexto comparación año anterior.</p>`,
          tip: 'Evita chartjunk decorativo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre storytelling datos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Buen título gráfico?',
              options: [
                'Random',
                'Insight claro',
                'Gráfico 1',
                'Sin etiquetas',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l044',
        title: '44. Accesibilidad color',
        duration: '8 min',
        theory: `<p>Accesibilidad color es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, viridis o contrast check Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar accesibilidad color con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: No solo color; patrones para daltónicos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Accesibilidad color',
          content: `<p>Rojo-verde problemático.</p>`,
          tip: 'Etiquetas directas mejor que leyenda lejana.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre accesibilidad color.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Accesible?',
              options: [
                'Contraste y etiquetas',
                'Solo rojo/verde',
                'Texto 6px',
                'Sin título',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l045',
        title: '45. Export presentación',
        duration: '8 min',
        theory: `<p>Export presentación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, export 300dpi si imprime Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar export presentación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: SVG vector gráficos; PNG alta res</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Export presentación',
          content: `<p>Embed fuentes si PDF.</p>`,
          tip: 'Revisa en modo presentación.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre export presentación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Imprimir póster?',
              options: [
                'Foto monitor',
                'ASCII art',
                'Alta resolución PNG/SVG',
                'Screenshot 72dpi',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'dat-l046',
        title: '46. Dashboard simple',
        duration: '8 min',
        theory: `<p>Dashboard simple es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, hoja Resumen con enlaces detalle Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar dashboard simple con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: KPIs 3-5 máximo una pantalla</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Dashboard simple',
          content: `<p>Actualización manual o query refresh.</p>`,
          tip: 'No sobrecargar widgets.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dashboard simple.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Dashboard efectivo?',
              options: [
                'Datos fake',
                'Pocos KPIs claros',
                '50 gráficos tiny',
                'Sin fuente',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l047',
        title: '47. Anotar fuentes',
        duration: '8 min',
        theory: `<p>Anotar fuentes es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Fuente: Inventario 2025-03, sin obsoletos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar anotar fuentes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Pie de figura: origen, fecha, filtro</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Anotar fuentes',
          content: `<p>Reproducibilidad confianza.</p>`,
          tip: 'Enlace datos si públicos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre anotar fuentes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Figura profesional?',
              options: [
                'Sin contexto',
                'Estimado inventado',
                'Ocultar método',
                'Fuente y fecha',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'dat-l048',
        title: '48. Evitar cherry-picking',
        duration: '8 min',
        theory: `<p>Evitar cherry-picking es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, incluir meses malos y buenos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar evitar cherry-picking con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Mostrar rango completo temporal</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Evitar cherry-picking',
          content: `<p>Eje truncado documentado si usado.</p>`,
          tip: 'Integridad > impresionar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre evitar cherry-picking.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cherry-picking?',
              options: [
                'Seleccionar solo datos favorables',
                'Mostrar serie completa',
                'Etiquetar método',
                'Fuente clara',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'dat-l049',
        title: '49. Feedback audiencia',
        duration: '8 min',
        theory: `<p>Feedback audiencia es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba con una persona no experta Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar feedback audiencia con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Preguntar qué confunde antes de final</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Feedback audiencia',
          content: `<p>Itera etiquetas unclear.</p>`,
          tip: 'Glosario términos técnicos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre feedback audiencia.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes de publicar informe?',
              options: [
                'Solo emojis',
                'Prueba comprensión lector',
                'Asumir experto',
                'Sin revisar',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'dat-l050',
        title: '50. Archivo final proyecto',
        duration: '8 min',
        theory: `<p>Archivo final proyecto es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus datos y registros y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, carpeta final/ con README Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar tus datos y registros de forma integrada.</p>
        <p>Estudiar archivo final proyecto con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en organizar información cotidiana.</p>
        <ul><li>Concepto central: Datos crudos, limpios, figuras, informe</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en organizar información cotidiana</li></ul>`,
        example: {
          title: 'Ejemplo: Archivo final proyecto',
          content: `<p>Otros (o tú futuro) reproducen.</p>`,
          tip: 'Checksum opcional integridad.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre archivo final proyecto.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cierre proyecto datos?',
              options: [
                'Borrar crudos',
                'Sin README',
                'Paquete reproducible documentado',
                'Solo PPT bonito',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
];
