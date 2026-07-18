export const CURRICULUM = [
  {
    id: 'aut-mod-1',
    title: 'Identificar automatizables',
    description: 'Tiempo, frecuencia y reglas claras',
    lessons: [
      {
        id: 'aut-l001',
        title: '1. Auditoría de tareas',
        duration: '8 min',
        theory: `<p>Auditoría de tareas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, registra una semana de microtareas.</p>
        <p>Estudiar auditoría de tareas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Lista tareas repetitivas semanales con tiempo estimado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Auditoría de tareas',
          content: `<p>Si haces >5 veces/mes, candidato.</p>`,
          tip: 'Automatizar mal ahorra nada.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre auditoría de tareas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Candidato automatización?',
              options: [
                'Creativo único',
                'Una vez al año',
                'Sin datos',
                'Repetitivo, reglas claras, alto volumen',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l002',
        title: '2. ROI tiempo',
        duration: '8 min',
        theory: `<p>ROI tiempo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, si setup 2h ahorra 10 min/semana, ¿vale?.</p>
        <p>Estudiar roi tiempo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Tiempo automatizar vs tiempo ahorrado en 6 meses</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: ROI tiempo',
          content: `<p>Break-even = coste setup / ahorro periodo.</p>`,
          tip: 'Preferir quick wins.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre roi tiempo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Vale 2h setup ahorrando 10 min/sem?',
              options: [
                'Solo si ahorra 1 seg',
                'Sin calcular',
                'Sí ~12 semanas break-even',
                'Nunca',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l003',
        title: '3. Reglas vs ML',
        duration: '8 min',
        theory: `<p>Reglas vs ML es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, if carpeta Downloads then mover por extensión.</p>
        <p>Estudiar reglas vs ml con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Reglas deterministas primero; ML si patrón complejo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Reglas vs ML',
          content: `<p>Reglas auditable y debuggable.</p>`,
          tip: 'ML overkill para renombrar PDFs.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre reglas vs ml.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Renombrar facturas PDF?',
              options: [
                'Random',
                'Reglas por patrón nombre',
                'Red neuronal',
                'Manual forever',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l004',
        title: '4. Puntos de fricción',
        duration: '8 min',
        theory: `<p>Puntos de fricción es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, marca fricciones rojas en flujo.</p>
        <p>Estudiar puntos de fricción con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Copy-paste, renombrar, exportar, recordatorios</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Puntos de fricción',
          content: `<p>Un clic menos × 100 = horas.</p>`,
          tip: 'Observa dónde abandonas tarea.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre puntos de fricción.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Fricción típica?',
              options: [
                'Copiar datos entre apps',
                'Pensar creativo',
                'Conversación humana',
                'Caminar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l005',
        title: '5. Documentar proceso manual',
        duration: '8 min',
        theory: `<p>Documentar proceso manual es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, graba pantalla haciendo proceso una vez.</p>
        <p>Estudiar documentar proceso manual con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Pasos numerados antes de automatizar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Documentar proceso manual',
          content: `<p>Excepciones deben listarse.</p>`,
          tip: 'Stakeholders validan pasos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre documentar proceso manual.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes automatizar?',
              options: [
                'Automatizar caos',
                'Sin probar manual',
                'Documentar flujo actual',
                'Adivinar',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l006',
        title: '6. Alcance mínimo viable',
        duration: '8 min',
        theory: `<p>Alcance mínimo viable es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ignora edge cases raros inicialmente.</p>
        <p>Estudiar alcance mínimo viable con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Automatiza 80% caso común primero</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Alcance mínimo viable',
          content: `<p>Iteración v2 maneja excepciones.</p>`,
          tip: 'Perfecto enemigo de hecho.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre alcance mínimo viable.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Primera versión?',
              options: [
                '100 features',
                'Caso común principal',
                'Todos edge day one',
                'Nunca lanzar',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l007',
        title: '7. Riesgos automatización',
        duration: '8 min',
        theory: `<p>Riesgos automatización es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, dry-run sin efectos destructivos.</p>
        <p>Estudiar riesgos automatización con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Borrado masivo, emails erróneos, loops infinitos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Riesgos automatización',
          content: `<p>Sandbox datos prueba.</p>`,
          tip: 'Rollback plan.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre riesgos automatización.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes delete masivo?',
              options: [
                'Producción directo',
                'Sin log',
                'Cron cada segundo',
                'Dry-run y backup',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l008',
        title: '8. Mantenimiento',
        duration: '8 min',
        theory: `<p>Mantenimiento es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, calendario revisión trimestral scripts.</p>
        <p>Estudiar mantenimiento con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: APIs cambian; scripts requieren revisión</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Mantenimiento',
          content: `<p>Alertas si falla cron.</p>`,
          tip: 'Versiona scripts en git.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mantenimiento.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Script cron falló?',
              options: [
                'Logs y alertas',
                'Ignorar',
                'Duplicar 10 copias',
                'Email boss',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l009',
        title: '9. Humano en el loop',
        duration: '8 min',
        theory: `<p>Humano en el loop es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, email confirm antes de publicar batch.</p>
        <p>Estudiar humano en el loop con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Aprobación para acciones irreversibles</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Humano en el loop',
          content: `<p>Confianza gradual.</p>`,
          tip: 'Auto total solo bajo riesgo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre humano en el loop.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Borrar 1000 filas?',
              options: [
                'Solo los viernes',
                'Confirmación humana',
                'Sin preguntar',
                'Random bot',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l010',
        title: '10. Métricas éxito',
        duration: '8 min',
        theory: `<p>Métricas éxito es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mide minutos/semana post deploy.</p>
        <p>Estudiar métricas éxito con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Tiempo ahorrado, errores reducidos, satisfacción</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Métricas éxito',
          content: `<p>Cuantificar vende siguiente mejora.</p>`,
          tip: 'Ajusta si no mejora.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre métricas éxito.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Automatización exitosa?',
              options: [
                'Más clics',
                'Peor calidad',
                'Métrica mejora medible',
                'Sin medir',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'aut-mod-2',
    title: 'Automatización escritorio',
    description: 'Atajos, macros OS y herramientas locales',
    lessons: [
      {
        id: 'aut-l011',
        title: '11. Atajos teclado OS',
        duration: '8 min',
        theory: `<p>Atajos teclado OS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lista 5 atajos nuevos practicar.</p>
        <p>Estudiar atajos teclado os con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Win/Mac shortcuts ventana, captura, cambio app</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Atajos teclado OS',
          content: `<p>Alt+Tab ahorra segundos ×100.</p>`,
          tip: 'Personaliza en settings.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre atajos teclado os.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cambiar app rápido?',
              options: [
                'Mouse solo',
                'Reiniciar PC',
                'Gritar',
                'Alt+Tab / Cmd+Tab',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l012',
        title: '12. Text expanders',
        duration: '8 min',
        theory: `<p>Text expanders es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, configura ;addr → dirección completa.</p>
        <p>Estudiar text expanders con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Snippet firma email, direcciones frecuentes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Text expanders',
          content: `<p>EspacioTrigger consistente.</p>`,
          tip: 'No expandir en passwords.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre text expanders.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Snippet útil?',
              options: [
                'Password',
                'Código aleatorio',
                'Texto frecuente largo',
                'Novela entera',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l013',
        title: '13. AutoHotkey / Keyboard Maestro',
        duration: '8 min',
        theory: `<p>AutoHotkey / Keyboard Maestro es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, hotkey abre apps combo fija.</p>
        <p>Estudiar autohotkey / keyboard maestro con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Scripts hotkey Windows/Mac</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: AutoHotkey / Keyboard Maestro',
          content: `<p>AHK potente Windows.</p>`,
          tip: 'KM Mac GUI amigable.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre autohotkey / keyboard maestro.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Abrir IDE + terminal?',
              options: [
                'Fax',
                'Script hotkey',
                'Manual 50 clics',
                'Imprimir mapa',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l014',
        title: '14. Reglas correo',
        duration: '8 min',
        theory: `<p>Reglas correo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, regla: factura@ → carpeta Facturas.</p>
        <p>Estudiar reglas correo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Filtrar, etiquetar, archivar automático</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Reglas correo',
          content: `<p>Reduce inbox ruido.</p>`,
          tip: 'Revisar falsos positivos semanal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre reglas correo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Correo facturas?',
              options: [
                'Filtro auto carpeta',
                'Scroll manual',
                'Borrar todo',
                'Imprimir',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l015',
        title: '15. Renombrado batch',
        duration: '8 min',
        theory: `<p>Renombrado batch es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prefijo fecha a escaneos.</p>
        <p>Estudiar renombrado batch con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Bulk Rename Utility, rename CLI</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Renombrado batch',
          content: `<p>Preview antes ejecutar.</p>`,
          tip: 'Regex poderoso.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre renombrado batch.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿100 fotos renombrar?',
              options: [
                'Screenshot nombres',
                'No renombrar',
                'Herramienta batch',
                'Uno a uno',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l016',
        title: '16. Carpetas vigiladas',
        duration: '8 min',
        theory: `<p>Carpetas vigiladas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, PDF nuevo → OCR script.</p>
        <p>Estudiar carpetas vigiladas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Watch folder procesa nuevos archivos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Carpetas vigiladas',
          content: `<p>inotify/fswatch disparadores.</p>`,
          tip: 'Evita loop procesando output.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre carpetas vigiladas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Nuevo archivo dispara acción?',
              options: [
                'Copiar manual',
                'Watch folder',
                'Polling humano',
                'Refresh F5',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l017',
        title: '17. Clipboard managers',
        duration: '8 min',
        theory: `<p>Clipboard managers es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, pega últimos 5 snippets.</p>
        <p>Estudiar clipboard managers con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Historial portapapeles multi pegado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Clipboard managers',
          content: `<p>Reduce re-copy.</p>`,
          tip: 'Cuidado datos sensibles historial.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre clipboard managers.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Pegar item hace 3 min?',
              options: [
                'Reescribir',
                'Foto pantalla',
                'Imprimir',
                'Clipboard manager',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l018',
        title: '18. Launchers',
        duration: '8 min',
        theory: `<p>Launchers es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, hotkey buscar archivo por nombre.</p>
        <p>Estudiar launchers con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Raycast, Alfred, KRunner abrir apps/files</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Launchers',
          content: `<p>Menos mouse navegación.</p>`,
          tip: 'Plugins extienden.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre launchers.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Abrir app sin mouse?',
              options: [
                'Launcher',
                'Desktop icons solo',
                'CMD sin buscar',
                'Scroll',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l019',
        title: '19. Capturas y OCR',
        duration: '8 min',
        theory: `<p>Capturas y OCR es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, OCR recibo a CSV.</p>
        <p>Estudiar capturas y ocr con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Flameshot + tesseract extrae texto imagen</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Capturas y OCR',
          content: `<p>Revisa errores OCR.</p>`,
          tip: 'Idioma spa traineddata.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre capturas y ocr.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Texto de imagen?',
              options: [
                'Ignorar',
                'OCR',
                'Retipear siempre',
                'Adivinar',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l020',
        title: '20. Backup automático local',
        duration: '8 min',
        theory: `<p>Backup automático local es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, rsync -av --delete con cuidado.</p>
        <p>Estudiar backup automático local con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: rsync cron a disco externo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Backup automático local',
          content: `<p>Regla 3-2-1 backup.</p>`,
          tip: 'Prueba restore.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre backup automático local.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Backup local?',
              options: [
                'Confiar nube solo',
                'Sin backup',
                'rsync programado',
                'Una copia manual 2019',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'aut-mod-3',
    title: 'Scripts y CLI',
    description: 'Bash, Python pequeños y plantillas',
    lessons: [
      {
        id: 'aut-l021',
        title: '21. Shebang y permisos',
        duration: '8 min',
        theory: `<p>Shebang y permisos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, chmod +x y probar.</p>
        <p>Estudiar shebang y permisos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Script ejecutable ./deploy.sh</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Shebang y permisos',
          content: `<p>#!/usr/bin/env bash portable.</p>`,
          tip: 'set -euo pipefail seguro.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre shebang y permisos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Script ejecutable?',
              options: [
                'chmod 000',
                'Sin shebang required always',
                'Word doc',
                'chmod +x',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l022',
        title: '22. Argumentos CLI',
        duration: '8 min',
        theory: `<p>Argumentos CLI es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, python script.py --help.</p>
        <p>Estudiar argumentos cli con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: argparse flags --dry-run</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Argumentos CLI',
          content: `<p>Defaults sensatos.</p>`,
          tip: 'Validar inputs.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre argumentos cli.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Flag dry-run?',
              options: [
                'Random mode',
                'Sin help',
                'Simular sin cambios',
                'Borrar siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l023',
        title: '23. Logging',
        duration: '8 min',
        theory: `<p>Logging es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, log a archivo rotativo.</p>
        <p>Estudiar logging con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: logging.info vs print producción</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Logging',
          content: `<p>Niveles DEBUG prod INFO.</p>`,
          tip: 'Timestamp en logs.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre logging.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Producción script?',
              options: [
                'echo rm -rf',
                'logging module',
                'print only',
                'silent fail',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l024',
        title: '24. Plantillas script',
        duration: '8 min',
        theory: `<p>Plantillas script es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, repo plantillas personal.</p>
        <p>Estudiar plantillas script con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Copiar boilerplate argparse+logging</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Plantillas script',
          content: `<p>DRY setup.</p>`,
          tip: 'README por script.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre plantillas script.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Nuevo script?',
              options: [
                'Plantilla estándar',
                'Desde cero caos',
                'Sin docs',
                '2000 líneas',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l025',
        title: '25. Cron scheduling',
        duration: '8 min',
        theory: `<p>Cron scheduling es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, crontab -e usuario.</p>
        <p>Estudiar cron scheduling con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: 0 2 * * * backup.sh</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Cron scheduling',
          content: `<p>PATH en cron explícito.</p>`,
          tip: 'Redirigir stdout log.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cron scheduling.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿2am diario?',
              options: [
                'Manual alarm',
                'Esperar eclipse',
                'Cron 0 2 * * *',
                'while true',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l026',
        title: '26. systemd timer',
        duration: '8 min',
        theory: `<p>systemd timer es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, unit timer + service.</p>
        <p>Estudiar systemd timer con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Alternativa cron en Linux moderno</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: systemd timer',
          content: `<p>journalctl ver ejecuciones.</p>`,
          tip: 'OnFailure alert opcional.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre systemd timer.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Linux sin cron?',
              options: [
                'Word macro',
                'systemd timer',
                'Reboot loop',
                'kill -9 init',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l027',
        title: '27. Exit codes',
        duration: '8 min',
        theory: `<p>Exit codes es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, trap cleanup EXIT.</p>
        <p>Estudiar exit codes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: 0 ok, !=0 error para cron alert</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Exit codes',
          content: `<p>CI usa exit codes.</p>`,
          tip: 'Documenta códigos custom.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre exit codes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cron falló?',
              options: [
                'Exit 0 always',
                'Segfault ok',
                'Ignore',
                'Exit !=0 y log',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l028',
        title: '28. Entornos virtuales Python',
        duration: '8 min',
        theory: `<p>Entornos virtuales Python es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, python -m venv .venv.</p>
        <p>Estudiar entornos virtuales python con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: venv aísla dependencias proyecto</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Entornos virtuales Python',
          content: `<p>requirements.txt pin versions.</p>`,
          tip: 'No pip global caos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre entornos virtuales python.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Deps proyecto Python?',
              options: [
                'venv + requirements',
                'pip install global 50 libs',
                'Sin versiones',
                'Python 2',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l029',
        title: '29. JSON y YAML config',
        duration: '8 min',
        theory: `<p>JSON y YAML config es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, config.yaml paths folders.</p>
        <p>Estudiar json y yaml config con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Config externa sin hardcode</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: JSON y YAML config',
          content: `<p>Validar schema.</p>`,
          tip: 'Secrets en env vars.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre json y yaml config.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿API key?',
              options: [
                'Sticky note photo',
                'Variable entorno',
                'Hardcode git',
                'Tweet key',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l030',
        title: '30. Tests smoke',
        duration: '8 min',
        theory: `<p>Tests smoke es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, pytest test_main.py.</p>
        <p>Estudiar tests smoke con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Test mínimo script no explota</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Tests smoke',
          content: `<p>CI GitHub Actions opcional.</p>`,
          tip: 'Sample fixture data.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tests smoke.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes deploy script?',
              options: [
                'Pray',
                'Copy prod data delete',
                'Smoke test',
                'Yolo prod',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'aut-mod-4',
    title: 'Integraciones web',
    description: 'APIs, webhooks y no-code',
    lessons: [
      {
        id: 'aut-l031',
        title: '31. Webhooks',
        duration: '8 min',
        theory: `<p>Webhooks es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, GitHub push → Discord notify.</p>
        <p>Estudiar webhooks con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: HTTP POST cuando evento ocurre</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Webhooks',
          content: `<p>Verificar firma HMAC.</p>`,
          tip: 'Idempotencia reintentos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre webhooks.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Evento dispara URL?',
              options: [
                'Poll cada 1s forever',
                'Email fax',
                'SMS pigeon',
                'Webhook',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l032',
        title: '32. REST POST JSON',
        duration: '8 min',
        theory: `<p>REST POST JSON es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, crear issue API tracker.</p>
        <p>Estudiar rest post json con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: curl -X POST -d '{}' headers</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: REST POST JSON',
          content: `<p>Content-Type application/json.</p>`,
          tip: 'Bearer token header.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre rest post json.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Enviar JSON API?',
              options: [
                'FTP JSON',
                'Telnet',
                'POST con Content-Type json',
                'GET only always',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l033',
        title: '33. OAuth básico',
        duration: '8 min',
        theory: `<p>OAuth básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, app Google OAuth consent screen.</p>
        <p>Estudiar oauth básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: No compartir password; tokens refresh</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: OAuth básico',
          content: `<p>Scopes mínimos.</p>`,
          tip: 'Revoca tokens viejos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre oauth básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Acceso Gmail automatizado?',
              options: [
                'Share account',
                'OAuth tokens',
                'Password en script',
                'Screenshot password',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l034',
        title: '34. Zapier/Make flujos',
        duration: '8 min',
        theory: `<p>Zapier/Make flujos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, form → sheet → slack.</p>
        <p>Estudiar zapier/make flujos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Trigger action multi step</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Zapier/Make flujos',
          content: `<p>Cuota free limits.</p>`,
          tip: 'Map fields explícito.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre zapier/make flujos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿No-code integración?',
              options: [
                'Zapier/Make',
                'Contratar dev siempre',
                'Manual CSV email',
                'Fax chain',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l035',
        title: '35. Google Apps Script',
        duration: '8 min',
        theory: `<p>Google Apps Script es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, onFormSubmit handler.</p>
        <p>Estudiar google apps script con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Automatizar Sheets/Gmail en JS cloud</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Google Apps Script',
          content: `<p>Triggers time-driven.</p>`,
          tip: 'Cuotas Google.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre google apps script.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Sheets auto email?',
              options: [
                'Print mail',
                'Carrier pigeon',
                'Apps Script trigger',
                'Copy paste hourly',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l036',
        title: '36. RSS to action',
        duration: '8 min',
        theory: `<p>RSS to action es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, IFTTT RSS trigger.</p>
        <p>Estudiar rss to action con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Nuevo feed item → notificación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: RSS to action',
          content: `<p>Filtra keywords.</p>`,
          tip: 'Evita spam feeds.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre rss to action.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Monitor blog?',
              options: [
                'Ignore',
                'RSS trigger',
                'Refresh homepage 24/7',
                'Print RSS',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l037',
        title: '37. Rate limits',
        duration: '8 min',
        theory: `<p>Rate limits es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, sleep exponential backoff.</p>
        <p>Estudiar rate limits con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Respetar Retry-After headers</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Rate limits',
          content: `<p>429 Too Many Requests.</p>`,
          tip: 'Cache responses.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre rate limits.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿API 429?',
              options: [
                'Hammer faster',
                'New account spam',
                'DDoS',
                'Backoff y retry',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l038',
        title: '38. Idempotencia',
        duration: '8 min',
        theory: `<p>Idempotencia es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, idempotency-key header pagos.</p>
        <p>Estudiar idempotencia con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Mismo input no duplica efecto</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Idempotencia',
          content: `<p>Crítico pagos/emails.</p>`,
          tip: 'UUID por operación.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre idempotencia.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Evitar doble cargo?',
              options: [
                'Idempotency key',
                'Retry blindly',
                'Double POST',
                'Hope',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l039',
        title: '39. Monitoreo flujos',
        duration: '8 min',
        theory: `<p>Monitoreo flujos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, dead letter queue failed jobs.</p>
        <p>Estudiar monitoreo flujos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Salud zap: error rate email</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Monitoreo flujos',
          content: `<p>Dashboard uptime.</p>`,
          tip: 'Alert Slack.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre monitoreo flujos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Flujo falló 3 veces?',
              options: [
                'Delete logs',
                'Alerta y pausa',
                'Ignorar',
                'Loop infinito',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l040',
        title: '40. Documentar integraciones',
        duration: '8 min',
        theory: `<p>Documentar integraciones es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Notion page por flujo.</p>
        <p>Estudiar documentar integraciones con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Diagrama trigger→steps→output</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Documentar integraciones',
          content: `<p>Credenciales vault link.</p>`,
          tip: 'Owner responsable.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre documentar integraciones.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Integración equipo?',
              options: [
                'Solo en cabeza jefe',
                'Post-it',
                'Documentación clara',
                'Secreto tribal',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'aut-mod-5',
    title: 'Buenas prácticas',
    description: 'Seguridad, pruebas y evolución',
    lessons: [
      {
        id: 'aut-l041',
        title: '41. Secrets management',
        duration: '8 min',
        theory: `<p>Secrets management es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, .env en gitignore.</p>
        <p>Estudiar secrets management con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Vault, pass, env nunca git</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Secrets management',
          content: `<p>git-secrets scan.</p>`,
          tip: 'Rotate keys leak.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre secrets management.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿API key repo?',
              options: [
                'Push .env public',
                'Tweet key',
                'Hardcode main',
                'Nunca commit; usar env',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l042',
        title: '42. Least privilege',
        duration: '8 min',
        theory: `<p>Least privilege es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, read-only si solo lee.</p>
        <p>Estudiar least privilege con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Token solo scopes necesarios</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Least privilege',
          content: `<p>Cuenta servicio dedicada.</p>`,
          tip: 'Revoca al terminar proyecto.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre least privilege.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Token lectura datos?',
              options: [
                'Root AWS',
                'Share password',
                'Scope read-only',
                'Admin full always',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l043',
        title: '43. Version control flujos',
        duration: '8 min',
        theory: `<p>Version control flujos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, commit message convencional.</p>
        <p>Estudiar version control flujos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Git para scripts y config</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Version control flujos',
          content: `<p>PR review automation.</p>`,
          tip: 'Tags releases.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre version control flujos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Scripts automatización?',
              options: [
                'No versionar',
                'En git',
                'Email attachments',
                'USB only',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l044',
        title: '44. Staging environment',
        duration: '8 min',
        theory: `<p>Staging environment es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, staging zap disabled external.</p>
        <p>Estudiar staging environment con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Probar en copia datos anonimizados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Staging environment',
          content: `<p>No test emails clientes reales.</p>`,
          tip: 'Flag LIVE vs TEST.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre staging environment.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Probar email masivo?',
              options: [
                'Staging lista fake',
                'Prod first',
                'BCC all customers test',
                'Spam',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l045',
        title: '45. Rollback',
        duration: '8 min',
        theory: `<p>Rollback es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, git revert workflow json.</p>
        <p>Estudiar rollback con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Backup config anterior deploy</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Rollback',
          content: `<p>Feature flags.</p>`,
          tip: 'One-click disable.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre rollback.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Deploy malo?',
              options: [
                'Delete prod',
                'Blame intern',
                'Rollback rápido',
                'Fix forward only always',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'aut-l046',
        title: '46. Observabilidad',
        duration: '8 min',
        theory: `<p>Observabilidad es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, OpenTelemetry si complejo.</p>
        <p>Estudiar observabilidad con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Logs, métricas, trazas flujos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Observabilidad',
          content: `<p>Correlation id request.</p>`,
          tip: 'Grafana dashboard.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre observabilidad.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Debug flujo async?',
              options: [
                'Silence',
                'Logs correlacionados',
                'Guess',
                'Print random',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l047',
        title: '47. Coste cloud',
        duration: '8 min',
        theory: `<p>Coste cloud es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, budget alert AWS/GCP.</p>
        <p>Estudiar coste cloud con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Serverless invocations suman</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Coste cloud',
          content: `<p>Cron overkill usa $$.</p>`,
          tip: 'Self-host simple tasks.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre coste cloud.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Lambda cada segundo?',
              options: [
                'Gratis siempre',
                'Ilimitado',
                'Monopoly money',
                'Costoso; reconsiderar',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'aut-l048',
        title: '48. Accesibilidad automatización',
        duration: '8 min',
        theory: `<p>Accesibilidad automatización es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, notificación accesible multi canal.</p>
        <p>Estudiar accesibilidad automatización con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: No asumir usuario ve email error</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Accesibilidad automatización',
          content: `<p>Texto claro errores.</p>`,
          tip: 'Manual fallback doc.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre accesibilidad automatización.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Error solo email?',
              options: [
                'Multi canal + doc manual',
                'Beep only',
                'Flash screen',
                'Nothing',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'aut-l049',
        title: '49. Etica bots',
        duration: '8 min',
        theory: `<p>Etica bots es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, rate limit sensato outreach.</p>
        <p>Estudiar etica bots con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Respetar ToS y no spam</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Etica bots',
          content: `<p>LinkedIn scraper riesgo ban.</p>`,
          tip: 'Consentimiento datos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre etica bots.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Scrape LinkedIn masivo?',
              options: [
                'Harass',
                'Revisar ToS/legal',
                'Ignore ToS',
                'Sell data',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'aut-l050',
        title: '50. Mejora continua',
        duration: '8 min',
        theory: `<p>Mejora continua es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en tus flujos de trabajo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ¿sigue ahorrando tiempo?.</p>
        <p>Estudiar mejora continua con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en automatizar tareas repetitivas.</p>
        <ul><li>Concepto central: Retrospectiva trimestral automatizaciones</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en automatizar tareas repetitivas</li></ul>`,
        example: {
          title: 'Ejemplo: Mejora continua',
          content: `<p>Apagar zombies obsoletos.</p>`,
          tip: 'Nuevas herramientas evaluar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mejora continua.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Automatización zombie?',
              options: [
                'Duplicar',
                'Ignorar cost',
                'Desactivar o actualizar',
                'Mantener forever',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
];
