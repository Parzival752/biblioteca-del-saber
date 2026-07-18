export const CURRICULUM = [
  {
    id: 'lin-mod-1',
    title: 'Primeros pasos en terminal',
    description: 'Shell, rutas, ayuda y autocompletado',
    lessons: [
      {
        id: 'lin-l001',
        title: '1. Qué es la terminal',
        duration: '8 min',
        theory: `<p>Qué es la terminal es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, abre terminal y ejecuta whoami y pwd.</p>
        <p>Estudiar qué es la terminal con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Interfaz texto que ejecuta comandos en el shell</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Qué es la terminal',
          content: `<p>Bash es shell común en muchas distros; zsh en otras.</p>`,
          tip: 'Ctrl+R busca en historial de comandos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre qué es la terminal.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Para qué sirve pwd?',
              options: [
                'Apagar el PC',
                'Instalar drivers gráficos solos',
                'Formatear disco siempre',
                'Mostrar directorio actual',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l002',
        title: '2. Estructura de rutas',
        duration: '8 min',
        theory: `<p>Estructura de rutas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, navega con cd /home y cd ..</p>
        <p>Estudiar estructura de rutas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Rutas absolutas desde /; relativas desde directorio actual</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Estructura de rutas',
          content: `<p>/etc contiene configuración del sistema.</p>`,
          tip: ' cd ~ lleva a tu home.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre estructura de rutas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ruta absoluta?',
              options: [
                'Sin barras',
                'Empieza con .',
                'Empieza con /',
                'Solo nombre de archivo',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l003',
        title: '3. Comando ls',
        duration: '8 min',
        theory: `<p>Comando ls es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba ls -lah en tu home.</p>
        <p>Estudiar comando ls con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Lista archivos; -l detalle, -a incluye ocultos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Comando ls',
          content: `<p>Archivos ocultos empiezan con punto.</p>`,
          tip: 'Colores en ls indican tipo en muchas distros.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre comando ls.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ver archivos ocultos?',
              options: [
                'shutdown -h',
                'ls -a',
                'ls --no-color',
                'ls /dev/null',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l004',
        title: '4. cd y rutas especiales',
        duration: '8 min',
        theory: `<p>cd y rutas especiales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, alterna cd - entre dos carpetas de trabajo.</p>
        <p>Estudiar cd y rutas especiales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: . actual; . padre; - directorio anterior</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: cd y rutas especiales',
          content: `<p>Tab completa nombres de carpetas.</p>`,
          tip: 'Espacios en nombres requieren comillas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cd y rutas especiales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ir al directorio anterior?',
              options: [
                'cd -',
                'cd .',
                'cd /',
                'cd .',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l005',
        title: '5. man y --help',
        duration: '8 min',
        theory: `<p>man y --help es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lee man ls y ls --help.</p>
        <p>Estudiar man y --help con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Documentación integrada de comandos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: man y --help',
          content: `<p>man usa paginador; q para salir.</p>`,
          tip: '--help es resumen rápido.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre man y --help.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Salir de man?',
              options: [
                'exit',
                'kill man',
                'Tecla q',
                'Ctrl+C solo',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l006',
        title: '6. Historial bash',
        duration: '8 min',
        theory: `<p>Historial bash es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, busca comando previo con Ctrl+R.</p>
        <p>Estudiar historial bash con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Flechas arriba/abajo; history lista comandos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Historial bash',
          content: `<p>!! repite último comando.</p>`,
          tip: '!n ejecuta comando número n del history.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre historial bash.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Buscar comando previo?',
              options: [
                'Scroll mouse',
                'Ctrl+R',
                'Ctrl+Z',
                'Alt+F4',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l007',
        title: '7. Autocompletado Tab',
        duration: '8 min',
        theory: `<p>Autocompletado Tab es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, escribe cd Doc y pulsa Tab.</p>
        <p>Estudiar autocompletado tab con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Completa comandos y rutas parciales</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Autocompletado Tab',
          content: `<p>Doble Tab lista opciones si hay ambigüedad.</p>`,
          tip: 'Funciona en muchos shells modernos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre autocompletado tab.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Doble Tab si ambiguo?',
              options: [
                'Borra disco',
                'Cierra sesión',
                'Formatea home',
                'Lista opciones posibles',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l008',
        title: '8. Permisos básicos lectura',
        duration: '8 min',
        theory: `<p>Permisos básicos lectura es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mira ls -l y identifica permisos de un script.</p>
        <p>Estudiar permisos básicos lectura con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: r lectura, w escritura, x ejecución para user/group/other</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Permisos básicos lectura',
          content: `<p>x en directorio permite entrar (cd).</p>`,
          tip: 'Permisos se muestran como rwxr-xr--.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre permisos básicos lectura.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ejecutar script local?',
              options: [
                'chmod +x script.sh',
                'rm /',
                'format c:',
                'cat /dev/sda > file',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l009',
        title: '9. Usuarios y sudo',
        duration: '8 min',
        theory: `<p>Usuarios y sudo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, actualiza lista paquetes con sudo apt update (Debian/Ubuntu).</p>
        <p>Estudiar usuarios y sudo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: sudo ejecuta comando como root temporalmente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Usuarios y sudo',
          content: `<p>Usa sudo solo cuando necesario.</p>`,
          tip: 'whoami muestra usuario actual.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre usuarios y sudo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Instalar paquete sistema en Debian?',
              options: [
                'editar /dev/random',
                'sudo apt install nombre',
                'apt install sin sudo siempre',
                'rm -rf /',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l010',
        title: '10. Alias útiles',
        duration: '8 min',
        theory: `<p>Alias útiles es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, crea alias gs='git status' si usas git.</p>
        <p>Estudiar alias útiles con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Atajos en .bashrc: alias ll='ls -la'</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Alias útiles',
          content: `<p>alias temporales duran sesión; en .bashrc persisten.</p>`,
          tip: 'source ~/.bashrc recarga config.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre alias útiles.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Persistir alias?',
              options: [
                'En /tmp siempre',
                'No es posible',
                'Añadir a .bashrc o .zshrc',
                'Solo en terminal actual sin guardar',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'lin-mod-2',
    title: 'Archivos y directorios',
    description: 'Crear, copiar, mover, enlaces y búsqueda',
    lessons: [
      {
        id: 'lin-l011',
        title: '11. mkdir y touch',
        duration: '8 min',
        theory: `<p>mkdir y touch es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mkdir -p proyecto/src crea árbol.</p>
        <p>Estudiar mkdir y touch con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: mkdir crea carpetas; touch crea archivo vacío o actualiza fecha</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: mkdir y touch',
          content: `<p>mkdir -p crea padres faltantes.</p>`,
          tip: 'touch útil para crear placeholder.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mkdir y touch.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Crear árbol de carpetas?',
              options: [
                'mkdir sin -p siempre funciona anidado',
                'touch carpeta',
                'rm mkdir',
                'mkdir -p ruta/anidada',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l012',
        title: '12. cp y mv',
        duration: '8 min',
        theory: `<p>cp y mv es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, cp -r dir1 dir2 copia recursiva.</p>
        <p>Estudiar cp y mv con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: cp copia; mv mueve o renombra</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: cp y mv',
          content: `<p>mv sobrescribe destino sin aviso en mismo filesystem.</p>`,
          tip: 'cp -i pregunta antes de sobrescribir.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cp y mv.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Renombrar archivo?',
              options: [
                'rm viejo',
                'cat viejo',
                'mv viejo nuevo',
                'cp viejo nuevo',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l013',
        title: '13. rm con cuidado',
        duration: '8 min',
        theory: `<p>rm con cuidado es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, NUNCA ejecutes rm -rf / como broma.</p>
        <p>Estudiar rm con cuidado con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: rm borra; -r recursivo; -i interactivo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: rm con cuidado',
          content: `<p>Papelera no existe por defecto en CLI.</p>`,
          tip: 'trash-cli añade papelera segura.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre rm con cuidado.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Borrar carpeta y contenido?',
              options: [
                'format',
                'rm -r nombre',
                'rm nombre sin -r en carpeta',
                'mv a /dev/null siempre',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l014',
        title: '14. cat, less, head, tail',
        duration: '8 min',
        theory: `<p>cat, less, head, tail es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, tail -f sigue log en vivo.</p>
        <p>Estudiar cat, less, head, tail con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Ver contenido; less pagina; head/tail extremos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: cat, less, head, tail',
          content: `<p>less permite buscar con /patrón.</p>`,
          tip: 'head -n 20 muestra 20 primeras líneas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cat, less, head, tail.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Seguir log en tiempo real?',
              options: [
                'tail -f archivo.log',
                'cat -f',
                'rm log',
                'chmod log',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l015',
        title: '15. find básico',
        duration: '8 min',
        theory: `<p>find básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, find . -name '*.txt'.</p>
        <p>Estudiar find básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Buscar por nombre, tipo, tamaño</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: find básico',
          content: `<p>find . -type f -mtime -7 archivos modificados 7 días.</p>`,
          tip: 'Puede ser lento en árboles grandes.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre find básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Archivos .md bajo directorio actual?',
              options: [
                'grep md',
                'man find',
                'find . -name \'*.md\'',
                'ls *.md recursivo siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l016',
        title: '16. grep',
        duration: '8 min',
        theory: `<p>grep es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, grep -r 'TODO' src/.</p>
        <p>Estudiar grep con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Buscar texto en archivos o salida de comandos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: grep',
          content: `<p>grep -i ignora mayúsculas.</p>`,
          tip: 'grep -n muestra número de línea; combina con pipes: ps aux | grep nginx.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre grep.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Buscar cadena recursiva?',
              options: [
                'rm grep',
                'grep -r \'texto\' dir',
                'grep solo en un byte',
                'cat grep',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l017',
        title: '17. Enlaces simbólicos',
        duration: '8 min',
        theory: `<p>Enlaces simbólicos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ln -s /ruta/larga enlace_corto.</p>
        <p>Estudiar enlaces simbólicos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: ln -s destino enlace crea symlink</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Enlaces simbólicos',
          content: `<p>Symlink puede apuntar a archivo o directorio.</p>`,
          tip: 'Enlace roto si destino se mueve.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre enlaces simbólicos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Enlace simbólico?',
              options: [
                'cp objetivo nombre',
                'mv objetivo',
                'chmod -s',
                'ln -s objetivo nombre',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l018',
        title: '18. wc y sort',
        duration: '8 min',
        theory: `<p>wc y sort es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, wc -l archivo cuenta líneas.</p>
        <p>Estudiar wc y sort con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: wc cuenta líneas; sort ordena</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: wc y sort',
          content: `<p>sort -n ordena numéricamente.</p>`,
          tip: 'uniq requiere entrada ordenada para colapsar repetidos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre wc y sort.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Contar líneas?',
              options: [
                'wc -l',
                'ls -l',
                'df -h',
                'ping',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l019',
        title: '19. Redirección',
        duration: '8 min',
        theory: `<p>Redirección es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ls > lista.txt guarda salida.</p>
        <p>Estudiar redirección con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: > sobrescribe; >> añade; 2> errores; | tubería</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Redirección',
          content: `<p>2>&1 redirige errores a stdout.</p>`,
          tip: '/dev/null descarta salida.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre redirección.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Añadir al final de archivo?',
              options: [
                '|',
                '>>',
                '>',
                '<',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l020',
        title: '20. nano vs vim básico',
        duration: '8 min',
        theory: `<p>nano vs vim básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, nano ~/.bashrc edita configuración.</p>
        <p>Estudiar nano vs vim básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Editores en terminal; nano más amigable principiante</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: nano vs vim básico',
          content: `<p>vim requiere modo insert con i.</p>`,
          tip: 'Ctrl+O guarda en nano.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre nano vs vim básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Editor amigable principiante?',
              options: [
                'rm archivo',
                'cat > sin cerrar',
                'nano',
                'vim sin practicar',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'lin-mod-3',
    title: 'Procesos y sistema',
    description: 'ps, top, señales, servicios y espacio en disco',
    lessons: [
      {
        id: 'lin-l021',
        title: '21. ps y top',
        duration: '8 min',
        theory: `<p>ps y top es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, htop si está instalado es más claro que top.</p>
        <p>Estudiar ps y top con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Listar procesos; top/htop monitor en vivo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: ps y top',
          content: `<p>ps aux muestra todos los procesos.</p>`,
          tip: 'PID identifica proceso para kill.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ps y top.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ver procesos interactivo?',
              options: [
                'ls -la',
                'cd /proc',
                'man bash',
                'htop o top',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l022',
        title: '22. kill y señales',
        duration: '8 min',
        theory: `<p>kill y señales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, kill PID termina proceso.</p>
        <p>Estudiar kill y señales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: kill envía señal; SIGTERM 15 graceful; SIGKILL 9 forzado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: kill y señales',
          content: `<p>kill -9 solo si no responde.</p>`,
          tip: 'killall cierra por nombre con cuidado.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre kill y señales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Forzar cierre proceso?',
              options: [
                'rm PID',
                'shutdown',
                'kill -9 PID',
                'kill sin PID siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l023',
        title: '23. jobs y fg/bg',
        duration: '8 min',
        theory: `<p>jobs y fg/bg es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Ctrl+Z suspende; bg continúa fondo.</p>
        <p>Estudiar jobs y fg/bg con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Control de trabajos en shell actual</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: jobs y fg/bg',
          content: `<p>fg trae trabajo al frente.</p>`,
          tip: 'jobs lista trabajos del shell.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre jobs y fg/bg.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Continuar suspendido en fondo?',
              options: [
                'exit',
                'bg',
                'fg',
                'kill shell',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l024',
        title: '24. df y du',
        duration: '8 min',
        theory: `<p>df y du es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, df -h legible; du -sh carpeta.</p>
        <p>Estudiar df y du con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: df espacio en discos montados; du uso por carpeta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: df y du',
          content: `<p>du -sh * en directorio resume hijos.</p>`,
          tip: 'df / muestra partición raíz.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre df y du.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Espacio usado por carpeta?',
              options: [
                'du -sh nombre',
                'df nombre',
                'ls -lh',
                'free -h',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l025',
        title: '25. free y memoria',
        duration: '8 min',
        theory: `<p>free y memoria es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, observa available más que free en sistemas con cache.</p>
        <p>Estudiar free y memoria con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: free -h muestra RAM y swap</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: free y memoria',
          content: `<p>Swap usada indica presión de memoria.</p>`,
          tip: 'cache puede liberarse si hace falta.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre free y memoria.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Memoria realmente disponible?',
              options: [
                'Solo swap',
                'df -h',
                'Columna available en free -h',
                'Solo total',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l026',
        title: '26. systemctl básico',
        duration: '8 min',
        theory: `<p>systemctl básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, systemctl status ssh.</p>
        <p>Estudiar systemctl básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Gestionar servicios en systemd</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: systemctl básico',
          content: `<p>sudo systemctl restart nginx reinicia servicio.</p>`,
          tip: 'enabled arranca al boot.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre systemctl básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Estado servicio?',
              options: [
                'format',
                'systemctl status nombre',
                'kill systemd',
                'rm /etc',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l027',
        title: '27. journalctl',
        duration: '8 min',
        theory: `<p>journalctl es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, journalctl -u nginx -f sigue servicio.</p>
        <p>Estudiar journalctl con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Logs del sistema con systemd</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: journalctl',
          content: `<p>journalctl -xe muestra errores recientes.</p>`,
          tip: '-since today filtra por fecha.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre journalctl.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Logs servicio en vivo?',
              options: [
                'cat /dev/null',
                'ls /var',
                'grep journal',
                'journalctl -u servicio -f',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l028',
        title: '28. uptime y load average',
        duration: '8 min',
        theory: `<p>uptime y load average es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, uptime muestra load 1,5,15 min.</p>
        <p>Estudiar uptime y load average con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Tiempo encendido y carga CPU promedio</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: uptime y load average',
          content: `<p>Load alto vs núcleos indica saturación.</p>`,
          tip: 'No confundir con uso CPU porcentual.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre uptime y load average.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Load average?',
              options: [
                'Promedio procesos en cola/ejecución',
                'Temperatura CPU',
                'Espacio disco',
                'RAM usada exacta',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l029',
        title: '29. which y type',
        duration: '8 min',
        theory: `<p>which y type es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, which python3.</p>
        <p>Estudiar which y type con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Ubicación de ejecutables y tipo de comando</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: which y type',
          content: `<p>type cd muestra builtin vs externo.</p>`,
          tip: 'whereis busca binario, fuente y man.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre which y type.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ruta del ejecutable?',
              options: [
                'grep nombre',
                'which nombre',
                'rm nombre',
                'chmod nombre',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l030',
        title: '30. cron introducción',
        duration: '8 min',
        theory: `<p>cron introducción es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, crontab -e edita (con cuidado).</p>
        <p>Estudiar cron introducción con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Tareas programadas en crontab</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: cron introducción',
          content: `<p>Formato: min hora día mes día_semana comando.</p>`,
          tip: 'Logs en syslog según distro.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cron introducción.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Editar tareas usuario?',
              options: [
                'systemctl cron always',
                'nano /',
                'crontab -e',
                'rm -rf /',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'lin-mod-4',
    title: 'Redes en Linux',
    description: 'ip, ping, curl, ssh y transferencia archivos',
    lessons: [
      {
        id: 'lin-l031',
        title: '31. ip y ss',
        duration: '8 min',
        theory: `<p>ip y ss es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ip a muestra IPv4 e IPv6.</p>
        <p>Estudiar ip y ss con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: ip addr muestra interfaces; ss sockets</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: ip y ss',
          content: `<p>ip route muestra tabla enrutamiento.</p>`,
          tip: 'ss -tuln puertos escuchando.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ip y ss.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ver IP local?',
              options: [
                'ls network',
                'cat ip',
                'rm eth0',
                'ip addr o ip a',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l032',
        title: '32. ping y traceroute',
        duration: '8 min',
        theory: `<p>ping y traceroute es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ping -c 4 8.8.8.8.</p>
        <p>Estudiar ping y traceroute con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Diagnóstico conectividad y ruta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: ping y traceroute',
          content: `<p>traceroute muestra saltos (puede requerir instalación).</p>`,
          tip: 'Ping puede estar bloqueado por firewall.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ping y traceroute.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿4 paquetes ping?',
              options: [
                'curl ping',
                'kill network',
                'ping -c 4 host',
                'ping forever default',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l033',
        title: '33. curl',
        duration: '8 min',
        theory: `<p>curl es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, curl -I https://example.com headers.</p>
        <p>Estudiar curl con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Cliente HTTP/HTTPS en terminal</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: curl',
          content: `<p>curl -O descarga archivo.</p>`,
          tip: '-L sigue redirecciones.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre curl.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Solo cabeceras HTTP?',
              options: [
                'ssh URL',
                'curl -I URL',
                'curl rm',
                'ping URL',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l034',
        title: '34. wget',
        duration: '8 min',
        theory: `<p>wget es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, wget URL -O archivo.local.</p>
        <p>Estudiar wget con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Descarga archivos por HTTP/FTP</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: wget',
          content: `<p>wget -c continúa descarga interrumpida.</p>`,
          tip: 'Útil para mirrors grandes.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre wget.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Continuar descarga?',
              options: [
                'wget -c URL',
                'wget --delete',
                'rm wget',
                'curl only',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l035',
        title: '35. ssh cliente',
        duration: '8 min',
        theory: `<p>ssh cliente es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ssh usuario@host.</p>
        <p>Estudiar ssh cliente con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Conexión remota cifrada</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: ssh cliente',
          content: `<p>ssh -i clave.pem usuario@host con clave.</p>`,
          tip: '-p cambia puerto.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ssh cliente.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Conexión remota segura?',
              options: [
                'ftp host plain',
                'nc host',
                'ssh user@host',
                'telnet host',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l036',
        title: '36. scp y rsync',
        duration: '8 min',
        theory: `<p>scp y rsync es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, scp file user@host:/ruta/.</p>
        <p>Estudiar scp y rsync con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Copiar archivos por red</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: scp y rsync',
          content: `<p>rsync -avz sincroniza eficientemente.</p>`,
          tip: 'rsync ideal para backups incrementales.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre scp y rsync.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Sincronizar carpeta con compresión?',
              options: [
                'rm -r src',
                'rsync -avz src/ user@host:dest/',
                'cp src host:',
                'mv src host:',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l037',
        title: '37. /etc/hosts',
        duration: '8 min',
        theory: `<p>/etc/hosts es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, añade 127.0.0.1 miapp.local para prueba.</p>
        <p>Estudiar /etc/hosts con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Resolución local de nombres</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: /etc/hosts',
          content: `<p>Editar requiere sudo.</p>`,
          tip: 'DNS real tiene prioridad según orden nsswitch.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre /etc/hosts.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Archivo hosts local?',
              options: [
                '/etc/passwd',
                '/var/log',
                '/boot',
                '/etc/hosts',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l038',
        title: '38. nmcli básico',
        duration: '8 min',
        theory: `<p>nmcli básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, nmcli dev status.</p>
        <p>Estudiar nmcli básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: NetworkManager en CLI</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: nmcli básico',
          content: `<p>nmcli con show lista conexiones.</p>`,
          tip: 'Útil en portátiles Linux.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre nmcli básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Estado dispositivos red?',
              options: [
                'nmcli dev status',
                'ls wifi',
                'cat network',
                'ping nmcli',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l039',
        title: '39. firewall ufw intro',
        duration: '8 min',
        theory: `<p>firewall ufw intro es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, sudo ufw status.</p>
        <p>Estudiar firewall ufw intro con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Firewall simplificado Ubuntu</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: firewall ufw intro',
          content: `<p>sudo ufw allow 22/tcp abre SSH.</p>`,
          tip: 'Enable solo si entiendes reglas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre firewall ufw intro.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ver estado ufw?',
              options: [
                'kill ufw',
                'sudo ufw status',
                'rm firewall',
                'chmod ufw',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l040',
        title: '40. dig y nslookup',
        duration: '8 min',
        theory: `<p>dig y nslookup es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, dig example.com A.</p>
        <p>Estudiar dig y nslookup con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Consultas DNS</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: dig y nslookup',
          content: `<p>nslookup alternativa más antigua.</p>`,
          tip: 'MX registros para correo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dig y nslookup.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Registro IPv4?',
              options: [
                'ssh DNS',
                'rm resolv.conf',
                'dig dominio A',
                'ping DNS',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'lin-mod-5',
    title: 'Scripting y productividad',
    description: 'Scripts bash, permisos, pipes y buenas prácticas',
    lessons: [
      {
        id: 'lin-l041',
        title: '41. Shebang',
        duration: '8 min',
        theory: `<p>Shebang es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, primera línea #!/usr/bin/env bash es portable.</p>
        <p>Estudiar shebang con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: #!/bin/bash indica intérprete del script</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Shebang',
          content: `<p>chmod +x script.sh para ejecutar ./script.sh</p>`,
          tip: '#!/bin/sh usa POSIX shell.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre shebang.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ejecutar script local?',
              options: [
                'bash script en /etc',
                'rm script',
                'script sin shebang always',
                './script.sh',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l042',
        title: '42. Variables bash',
        duration: '8 min',
        theory: `<p>Variables bash es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, echo $HOME muestra home.</p>
        <p>Estudiar variables bash con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: VAR=valor sin espacios; $VAR expansión</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Variables bash',
          content: `<p>Comillas dobles expanden variables; simples literales.</p>`,
          tip: '${VAR} delimita nombre.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre variables bash.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Mostrar variable?',
              options: [
                'cat VAR',
                'ls $',
                'echo $NOMBRE',
                'print VAR',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l043',
        title: '43. Condicionales if',
        duration: '8 min',
        theory: `<p>Condicionales if es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba if [ -f archivo ]; then echo existe; fi.</p>
        <p>Estudiar condicionales if con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: if [ condición ]; then .. fi</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Condicionales if',
          content: `<p>[ ] es test; -f archivo, -d directorio.</p>`,
          tip: '== compara strings en bash.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre condicionales if.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Probar si existe archivo?',
              options: [
                'grep if',
                'if [ -f file ]; then',
                'if file exists',
                'rm if file',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l044',
        title: '44. Bucles for',
        duration: '8 min',
        theory: `<p>Bucles for es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, for f in *.txt; do echo $f; done.</p>
        <p>Estudiar bucles for con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: for i in lista; do .. done</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Bucles for',
          content: `<p>for ((i=0;i<10;i++)) estilo C.</p>`,
          tip: 'while lee líneas: while read line.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre bucles for.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Iterar archivos txt?',
              options: [
                'for f in *.txt; do',
                'loop txt',
                'rm *.txt',
                'cat loop',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l045',
        title: '45. Funciones bash',
        duration: '8 min',
        theory: `<p>Funciones bash es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, funciones organizan scripts largos.</p>
        <p>Estudiar funciones bash con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: nombre() { cuerpo; }</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Funciones bash',
          content: `<p>return devuelve código salida.</p>`,
          tip: 'Parámetros $1 $2..',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre funciones bash.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Definir función?',
              options: [
                'def bash()',
                'fn bash',
                'mi_func() { ..; }',
                'function=()',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'lin-l046',
        title: '46. Pipes y xargs',
        duration: '8 min',
        theory: `<p>Pipes y xargs es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, find . -name '*.log' | xargs rm.</p>
        <p>Estudiar pipes y xargs con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: Componer comandos; xargs construye argumentos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Pipes y xargs',
          content: `<p>xargs -0 para nulos con find -print0.</p>`,
          tip: 'Pipes conectan stdout a stdin.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre pipes y xargs.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Pasar lista archivos a comando?',
              options: [
                'rm |',
                'xargs',
                'grep xargs',
                'chmod pipe',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l047',
        title: '47. Exit codes',
        duration: '8 min',
        theory: `<p>Exit codes es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, comando; echo $? verifica.</p>
        <p>Estudiar exit codes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: $? código salida; 0 éxito</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Exit codes',
          content: `<p>Scripts deben salir 0 si OK.</p>`,
          tip: 'set -e aborta script en error.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre exit codes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Éxito en bash?',
              options: [
                'Código 1 siempre',
                'Código -1',
                'Sin código',
                'Código 0',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'lin-l048',
        title: '48. Entorno PATH',
        duration: '8 min',
        theory: `<p>Entorno PATH es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, echo $PATH.</p>
        <p>Estudiar entorno path con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: PATH lista directorios donde buscar ejecutables</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Entorno PATH',
          content: `<p>Export PATH=$PATH:~/bin añade personal.</p>`,
          tip: 'which verifica comando en PATH.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre entorno path.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Añadir ~/bin temporalmente?',
              options: [
                'export PATH=$PATH:~/bin',
                'rm PATH',
                'chmod PATH',
                'delete bin',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'lin-l049',
        title: '49. tar y compresión',
        duration: '8 min',
        theory: `<p>tar y compresión es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, tar -czvf backup.tar.gz carpeta/.</p>
        <p>Estudiar tar y compresión con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: tar empaqueta; -czvf gzip; -xzvf extrae</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: tar y compresión',
          content: `<p>zip/unzip también disponibles.</p>`,
          tip: 'tar preserva permisos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tar y compresión.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Comprimir carpeta gzip?',
              options: [
                'cat dir',
                'tar -czvf out.tar.gz dir',
                'zip tar always',
                'rm dir',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'lin-l050',
        title: '50. Buenas prácticas CLI',
        duration: '8 min',
        theory: `<p>Buenas prácticas CLI es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la terminal y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lee comando twice antes de Enter en rm -rf.</p>
        <p>Estudiar buenas prácticas cli con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en comandos en tu sistema Linux.</p>
        <ul><li>Concepto central: No root innecesario; backups; probar en copia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en comandos en tu sistema Linux</li></ul>`,
        example: {
          title: 'Ejemplo: Buenas prácticas CLI',
          content: `<p>Tab completion reduce errores tipográficos.</p>`,
          tip: 'Documenta scripts con comentarios #.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre buenas prácticas cli.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes de rm -rf?',
              options: [
                'Sin backup',
                'Como root siempre',
                'Verificar ruta dos veces',
                'Ejecutar rápido',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
];
