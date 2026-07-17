export const CURRICULUM = [
  {
    id: 'fot-mod-1',
    title: 'Exposición y luz natural',
    description: 'Triángulo apertura-velocidad-ISO',
    lessons: [
      {
        id: 'fot-l001',
        title: '1. Triángulo exposición',
        duration: '8 min',
        theory: `<p>Triángulo exposición es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, modo manual cambia uno observa histograma Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar triángulo exposición con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Apertura, velocidad e ISO se compensan</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Triángulo exposición',
          content: `<p>Subir ISO aumenta ruido.</p>`,
          tip: 'Un stop duplica luz.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre triángulo exposición.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Subir ISO?',
              options: [
                'Más nitidez siempre',
                'Menos luz entrada',
                'Apaga flash solo',
                'Sensor más sensible más ruido',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l002',
        title: '2. Apertura y profundidad',
        duration: '8 min',
        theory: `<p>Apertura y profundidad es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, foto flor f/2.8 vs paisaje f/11 Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar apertura y profundidad con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: f/2.8 poca profundidad; f/11 mucha</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Apertura y profundidad',
          content: `<p>Bokeh en retrato.</p>`,
          tip: 'Difracción f/22+ pierde nitidez.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre apertura y profundidad.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Paisaje nítido total?',
              options: [
                'f/32 siempre mejor',
                'Sin trípode ISO min',
                'f/8-f/11 aprox',
                'f/1.4 siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l003',
        title: '3. Velocidad congelar',
        duration: '8 min',
        theory: `<p>Velocidad congelar es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, experimenta cascada 1/4 s Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar velocidad congelar con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: 1/1000 aves; 1/30 agua sedosa con trípode</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Velocidad congelar',
          content: `<p>Regla 1/focal hand-held.</p>`,
          tip: 'IBIS ayuda poco.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre velocidad congelar.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Congelar ave vuelo?',
              options: [
                'Modo retrato auto',
                'Velocidad muy rápida',
                '1 segundo',
                'Bulb 30s',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l004',
        title: '4. ISO y ruido',
        duration: '8 min',
        theory: `<p>ISO y ruido es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, compara ISO 3200 en sombra Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar iso y ruido con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Base ISO 100-400 según cámara; subir si necesario</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: ISO y ruido',
          content: `<p>NR raw en post.</p>`,
          tip: 'Mejor trípode que ISO extremo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre iso y ruido.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Poca luz sin trípode?',
              options: [
                'Subir ISO moderado',
                'ISO 51200 siempre',
                'Apagar cámara',
                'Flash paisaje aleatorio',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l005',
        title: '5. Histograma',
        duration: '8 min',
        theory: `<p>Histograma es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, activa histograma live view Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar histograma con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Grafico tonos; evitar clipping extremos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Histograma',
          content: `<p>Highlights pegados derecha sin detalle.</p>`,
          tip: 'Expose to the right suave.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre histograma.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Histograma útil?',
              options: [
                'Sustituye composición',
                'Reemplaza enfoque',
                'Evaluar distribución tonos',
                'Decoración',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l006',
        title: '6. Hora dorada',
        duration: '8 min',
        theory: `<p>Hora dorada es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, planifica salida golden hour app Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar hora dorada con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Primera/última hora luz cálida lateral</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Hora dorada',
          content: `<p>Sombras largas textura.</p>`,
          tip: 'Blue hour después.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre hora dorada.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Golden hour?',
              options: [
                'Flash directo',
                'Luz cálida baja angular',
                'Mediodía duro',
                'Noche sin luna',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l007',
        title: '7. Hora azul',
        duration: '8 min',
        theory: `<p>Hora azul es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, foto ciudad blue hour trípode Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar hora azul con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Crepúsculo cielo azul profundo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Hora azul',
          content: `<p>Balance blancos frío.</p>`,
          tip: 'Mezcla artificial y natural.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre hora azul.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Blue hour?',
              options: [
                'Mediodía',
                'Eclipse solo',
                'Mediodía HDR always',
                'Post sunset cielo azul',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l008',
        title: '8. Contraluz y silueta',
        duration: '8 min',
        theory: `<p>Contraluz y silueta es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, silueta árbol atardecer Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar contraluz y silueta con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Medir cielo silueta montaña</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Contraluz y silueta',
          content: `<p>Bracket si quieres ambos.</p>`,
          tip: 'Flash relleno retrato.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre contraluz y silueta.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Silueta?',
              options: [
                'Exponer fondo brillante',
                'Exponer sombra',
                'Flash paisaje',
                'ISO 100 min night',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l009',
        title: '9. Filtros ND',
        duration: '8 min',
        theory: `<p>Filtros ND es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ND8 cascada día Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar filtros nd con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: ND reduce luz día larga exposición</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Filtros ND',
          content: `<p>ND variable cuidado banding.</p>`,
          tip: 'Calcular tiempos app.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre filtros nd.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿ND para?',
              options: [
                'Zoom digital',
                'Exposición larga con luz',
                'Más ISO',
                'Flash exterior',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l010',
        title: '10. Filtro polarizador',
        duration: '8 min',
        theory: `<p>Filtro polarizador es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, rotar CPL max saturación cielo 90° sol Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar filtro polarizador con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Reduce reflejos cielo agua</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Filtro polarizador',
          content: `<p>No uniforme gran angular.</p>`,
          tip: 'Quita brillo hojas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre filtro polarizador.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿CPL efecto?',
              options: [
                'Zoom digital',
                'Enfoque auto macro',
                'Reduce reflejos y oscurece cielo parcial',
                'Aumenta ISO',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'fot-mod-2',
    title: 'Composición paisaje',
    description: 'Regla tercios, líneas y profundidad',
    lessons: [
      {
        id: 'fot-l011',
        title: '11. Regla tercios',
        duration: '8 min',
        theory: `<p>Regla tercios es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, activa grid cámara Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar regla tercios con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Sujeto en intersecciones tercios</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Regla tercios',
          content: `<p>Horizonte tercio superior/inferior.</p>`,
          tip: 'Romper regla intencional.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre regla tercios.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Horizonte centro?',
              options: [
                'Siempre obligatorio centro',
                'Sin horizonte nunca',
                'Diagonal solo',
                'A menudo estático salvo reflejo',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l012',
        title: '12. Líneas guía',
        duration: '8 min',
        theory: `<p>Líneas guía es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, componer camino desde esquina Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar líneas guía con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Senderos, ríos dirigen ojo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Líneas guía',
          content: `<p>Leading lines profundidad.</p>`,
          tip: 'Evitar salida frame random.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre líneas guía.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Leading lines?',
              options: [
                'Solo vertical',
                'Sin profundidad',
                'Dirigen mirada sujeto',
                'Distraen siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l013',
        title: '13. Foreground interest',
        duration: '8 min',
        theory: `<p>Foreground interest es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, gran angular cerca objeto Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar foreground interest con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Roca flor primer plano escala</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Foreground interest',
          content: `<p>Profundidad capas.</p>`,
          tip: 'Enfoque hyperfocal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre foreground interest.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Primer plano paisaje?',
              options: [
                'Sin sujeto',
                'Profundidad y escala',
                'Solo cielo',
                'Bokeh extremo paisaje',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l014',
        title: '14. Encuadre vertical',
        duration: '8 min',
        theory: `<p>Encuadre vertical es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, probar mismo lugar H vs V Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar encuadre vertical con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Montañas árboles altos vertical</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Encuadre vertical',
          content: `<p>Instagram no manda arte.</p>`,
          tip: 'Vertical dramatismo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre encuadre vertical.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Vertical cuándo?',
              options: [
                'Sujetos altos estrechos',
                'Siempre horizontal',
                'Nunca',
                'Solo video',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l015',
        title: '15. Simetría reflejos',
        duration: '8 min',
        theory: `<p>Simetría reflejos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, amanecer viento mínimo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar simetría reflejos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Lago calma reflejo perfecto</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Simetría reflejos',
          content: `<p>Horizonte centro ok.</p>`,
          tip: 'Exposición media.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre simetría reflejos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Reflejo simétrico?',
              options: [
                'Sin agua',
                'Flash agua',
                'Horizonte central aceptable',
                'Horizonte siempre tercio',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l016',
        title: '16. Marco natural',
        duration: '8 min',
        theory: `<p>Marco natural es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, buscar ventana vegetación Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar marco natural con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Ramás forman marco cascada</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Marco natural',
          content: `<p>No oscurecer sujeto.</p>`,
          tip: 'Enfoque sujeto.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre marco natural.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Marco natural?',
              options: [
                'Solo HDR',
                'Enmarca sujeto contexto',
                'Bloquea sujeto',
                'Sin composición',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l017',
        title: '17. Minimalismo',
        duration: '8 min',
        theory: `<p>Minimalismo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, una dunas cielo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar minimalismo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Espacio negativo cielo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Minimalismo',
          content: `<p>Menos elementos más fuerza.</p>`,
          tip: 'Exposición cuidado.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre minimalismo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Minimalismo?',
              options: [
                'Llenar frame clutter',
                'Siempre HDR 9 shots',
                'Random',
                'Pocos elementos impacto',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l018',
        title: '18. Escala humana',
        duration: '8 min',
        theory: `<p>Escala humana es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, silueta cresta Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar escala humana con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Persona lejana tamaño montaña</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Escala humana',
          content: `<p>Permiso modelo.</p>`,
          tip: 'Ética paisaje.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre escala humana.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Persona paisaje?',
              options: [
                'Da sensación escala',
                'Selfie stick siempre',
                'Multitud',
                'Sin sentido',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l019',
        title: '19. Clutter removal',
        duration: '8 min',
        theory: `<p>Clutter removal es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, 2 pasos izquierda elimina poste Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar clutter removal con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Mover basura frame o cambiar ángulo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Clutter removal',
          content: `<p>Clone stamp último recurso.</p>`,
          tip: 'Ética documental.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre clutter removal.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Poste eléctrico?',
              options: [
                'No fotografiar',
                'Reencuadrar si posible',
                'Clone siempre mentir',
                'Ignorar',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l020',
        title: '20. Storytelling',
        duration: '8 min',
        theory: `<p>Storytelling es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, 3 fotos antes/durante/después Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar storytelling con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Secuencia amanecer cuenta historia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Storytelling',
          content: `<p>Serie blog.</p>`,
          tip: 'Caption contexto.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre storytelling.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Serie fotográfica?',
              options: [
                'Sin orden',
                'Solo filtro',
                'Narrativa múltiples imágenes',
                'Una random',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'fot-mod-3',
    title: 'Equipo y campo',
    description: 'Cámara, lentes, trípode y protección',
    lessons: [
      {
        id: 'fot-l021',
        title: '21. Cámara APS-C vs FF',
        duration: '8 min',
        theory: `<p>Cámara APS-C vs FF es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa lo que tienes bien Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar cámara aps-c vs ff con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Full frame mejor baja luz; APS-C ligero</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Cámara APS-C vs FF',
          content: `<p>Sensor no reemplaza composición.</p>`,
          tip: 'Cropped factor focal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cámara aps-c vs ff.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿FF ventaja?',
              options: [
                'Siempre mejor composición',
                'Obligatorio paisaje',
                'Sin lentes',
                'Rendimiento alto ISO típico',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l022',
        title: '22. Gran angular',
        duration: '8 min',
        theory: `<p>Gran angular es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, probar 16mm estrellas Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar gran angular con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: 10-24mm paisaje expansivo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Gran angular',
          content: `<p>Distorsión bordes.</p>`,
          tip: 'Corregir LR.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre gran angular.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Paisaje amplio?',
              options: [
                'Macro 1:1 insecto solo',
                'Fish eye siempre',
                'Gran angular',
                'Tele 600mm',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l023',
        title: '23. Tele paisaje',
        duration: '8 min',
        theory: `<p>Tele paisaje es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, montañas apiladas tele Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar tele paisaje con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Compresión montañas capas 70-200</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Tele paisaje',
          content: `<p>Panoramas tele múltiples.</p>`,
          tip: 'Trípode estable.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tele paisaje.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Compresión perspectiva?',
              options: [
                'Sin lente',
                'Tele acorta distancia aparente',
                'Gran angular siempre',
                'Macro',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l024',
        title: '24. Trípode elección',
        duration: '8 min',
        theory: `<p>Trípode elección es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, trípode amanecer larga exposición Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar trípode elección con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Estabilidad viento carga; ball head</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Trípode elección',
          content: `<p>Carbono ligero.</p>`,
          tip: 'Ganchos peso colgante.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre trípode elección.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Larga exposición día?',
              options: [
                'Trípode estable',
                'Mano 5s',
                'Monopie macro',
                'Sin soporte',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l025',
        title: '25. Bolsa y clima',
        duration: '8 min',
        theory: `<p>Bolsa y clima es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, fundas cambio lente seco Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar bolsa y clima con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Rain cover humedad; silice</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Bolsa y clima',
          content: `<p>Condensación calor-frío.</p>`,
          tip: 'Lens hood siempre.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre bolsa y clima.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Lluvia?',
              options: [
                'Guardar mojado cerrado',
                'Secador pelo lente',
                'Protección equipo y bolsa',
                'Cambiar lente abierto',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l026',
        title: '26. Baterías frío',
        duration: '8 min',
        theory: `<p>Baterías frío es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, 2 baterías invierno Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar baterías frío con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Frío drena; calentar bolsillo spare</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Baterías frío',
          content: `<p>Rotar calientes.</p>`,
          tip: 'Power bank USB-C cámaras nuevas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre baterías frío.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Frío montaña?',
              options: [
                'Sin spare',
                'Baterías spare calor corporal',
                'Una batería',
                'Dejar fuera noche',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l027',
        title: '27. Tarjetas backup',
        duration: '8 min',
        theory: `<p>Tarjetas backup es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, copiar noche laptop campo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar tarjetas backup con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: 2 tarjetas rotar; no borrar hasta backup</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Tarjetas backup',
          content: `<p>Format in-camera nueva.</p>`,
          tip: 'Label tarjetas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tarjetas backup.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Backup campo?',
              options: [
                'Una tarjeta forever',
                'Borrar sin ver',
                'Confiar nube sin señal',
                'Copiar diario disco',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l028',
        title: '28. Sensor polvo',
        duration: '8 min',
        theory: `<p>Sensor polvo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, soplador bulb sensor Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar sensor polvo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Cambio lente viento cuidado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Sensor polvo',
          content: `<p>Spot removal LR.</p>`,
          tip: 'Profesional limpieza.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre sensor polvo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Polvo sensor?',
              options: [
                'Manchas cielo uniforme',
                'Mejora composición',
                'Más bokeh',
                'Enfoque',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l029',
        title: '29. Mochila foto',
        duration: '8 min',
        theory: `<p>Mochila foto es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Peak Design vs f-stop debate Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar mochila foto con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Acceso rápido cámara lateral</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Mochila foto',
          content: `<p>Distribución peso cadera.</p>`,
          tip: 'Hydration compatible.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mochila foto.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Mochila foto?',
              options: [
                'Mano 8h',
                'Acceso gear sin parar',
                'Bolsa supermercado',
                'Sin correa',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l030',
        title: '30. Etiqueta sendero',
        duration: '8 min',
        theory: `<p>Etiqueta sendero es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, step aside grupos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar etiqueta sendero con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: No bloquear sendero trípode</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Etiqueta sendero',
          content: `<p>Leave No Trace foto.</p>`,
          tip: 'Drones regulación.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre etiqueta sendero.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Trípode sendero?',
              options: [
                'Flash grupos',
                'Dron prohibido ignore',
                'Apartarse paso',
                'Centro sendero',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'fot-mod-4',
    title: 'Técnicas avanzadas',
    description: 'HDR, panorámica, enfoque y astro',
    lessons: [
      {
        id: 'fot-l031',
        title: '31. Bracketing HDR',
        duration: '8 min',
        theory: `<p>Bracketing HDR es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ±2 EV paisaje alto contraste Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar bracketing hdr con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: 3-5 exposiciones fusionar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Bracketing HDR',
          content: `<p>Natural look evitar halos.</p>`,
          tip: 'Merge Lightroom.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre bracketing hdr.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿HDR cuándo?',
              options: [
                'Siempre obligatorio',
                'Nunca',
                'Solo JPEG camera',
                'Alto rango dinámico escena',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l032',
        title: '32. Panorámica horizontal',
        duration: '8 min',
        theory: `<p>Panorámica horizontal es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, une 5 tomas valle Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar panorámica horizontal con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Overlap 30% rotar trípode</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Panorámica horizontal',
          content: `<p>Manual exposure lock.</p>`,
          tip: 'Nodal rail ideal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre panorámica horizontal.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Panorama?',
              options: [
                'Una foto gran angular crop',
                'Video screenshot',
                'Múltiples fotos unidas',
                'Zoom digital',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l033',
        title: '33. Enfoque hyperfocal',
        duration: '8 min',
        theory: `<p>Enfoque hyperfocal es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, app hyperfocal calcular Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar enfoque hyperfocal con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Max profundidad paisaje</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Enfoque hyperfocal',
          content: `<p>F/8-f/11 sweet.</p>`,
          tip: 'Enfoque third distance.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre enfoque hyperfocal.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Hyperfocal?',
              options: [
                'Sin enfoque',
                'Profundidad máxima paisaje',
                'f/1.4 paisaje',
                'Manual infinito siempre mal',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l034',
        title: '34. Focus stacking',
        duration: '8 min',
        theory: `<p>Focus stacking es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, 10 shots merge Helicon Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar focus stacking con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Macro flores múltiples focos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Focus stacking',
          content: `<p>Trípode obligatorio.</p>`,
          tip: 'Viento problema.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre focus stacking.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Focus stack?',
              options: [
                'Combinar planos foco',
                'Una toma f/1.4 macro',
                'Mover cámara',
                'Autofocus random',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l035',
        title: '35. Astro vía láctea',
        duration: '8 min',
        theory: `<p>Astro vía láctea es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, regla 500 evitar trails Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar astro vía láctea con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: ISO alto gran angular trípode 15-25s</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Astro vía láctea',
          content: `<p>Lejos luz ciudad.</p>`,
          tip: 'Foco infinito manual.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre astro vía láctea.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Vía láctea?',
              options: [
                'Flash',
                'HDR día',
                'Exposición larga oscuro',
                'Mediodía',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l036',
        title: '36. Star trails',
        duration: '8 min',
        theory: `<p>Star trails es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, app intervalometer Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar star trails con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Bulb 30min o stack</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Star trails',
          content: `<p>Batería larga.</p>`,
          tip: 'Foreground interesante.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre star trails.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Star trails?',
              options: [
                'Autofocus día',
                'Exposición muy larga o stack',
                '1/8000s',
                'Flash estrellas',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l037',
        title: '37. Time-lapse',
        duration: '8 min',
        theory: `<p>Time-lapse es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, LRTimelapse o cámara built-in Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar time-lapse con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Interval 2-5s nubes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Time-lapse',
          content: `<p>Exposure ramp atardecer.</p>`,
          tip: 'Tarjeta grande.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre time-lapse.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Time-lapse?',
              options: [
                'Una foto',
                'Slow mo video',
                'GIF meme',
                'Secuencia fotos video',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l038',
        title: '38. Long exposure personas',
        duration: '8 min',
        theory: `<p>Long exposure personas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ND1000 plaza 2min Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar long exposure personas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: ND gente desaparece turístico</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Long exposure personas',
          content: `<p>Tripod peso.</p>`,
          tip: 'Permisos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre long exposure personas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿ND gente?',
              options: [
                'Exposición larga elimina gente móvil',
                'Flash gente',
                'ISO max',
                'Bokeh',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l039',
        title: '39. Vertorama',
        duration: '8 min',
        theory: `<p>Vertorama es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, 3 shots vertical stitch Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar vertorama con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Panorama vertical acantilado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Vertorama',
          content: `<p>Distorsión cuidado.</p>`,
          tip: 'Software PTGui.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre vertorama.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Vertorama?',
              options: [
                'Crop',
                'Panorama vertical',
                'Solo horizontal',
                'Zoom digital',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l040',
        title: '40. Planning PhotoPills',
        duration: '8 min',
        theory: `<p>Planning PhotoPills es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, planificar luna alineada arco Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar planning photopills con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: App sol luna posición</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Planning PhotoPills',
          content: `<p>Scout día antes.</p>`,
          tip: 'Waypoints GPS.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre planning photopills.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿PhotoPills?',
              options: [
                'Sin plan',
                'Solo mapa papel',
                'Planificar astro y sol',
                'Adivinar',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'fot-mod-5',
    title: 'Postproceso y flujo',
    description: 'RAW, Lightroom y archivo',
    lessons: [
      {
        id: 'fot-l041',
        title: '41. RAW vs JPEG',
        duration: '8 min',
        theory: `<p>RAW vs JPEG es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, dispara RAW+JPEG si duda Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar raw vs jpeg con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: RAW más datos recuperación sombras</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: RAW vs JPEG',
          content: `<p>Espacio disco.</p>`,
          tip: 'Perfil cámara JPEG.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre raw vs jpeg.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Recuperar sombras?',
              options: [
                'JPEG siempre igual',
                'PNG screenshot',
                'BMP',
                'RAW mejor margen',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l042',
        title: '42. Balance blancos',
        duration: '8 min',
        theory: `<p>Balance blancos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, RAW ajustar WB after Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar balance blancos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Temp tint cálido frío</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Balance blancos',
          content: `<p>Nublado vs sombra.</p>`,
          tip: 'Consistency serie.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre balance blancos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Atardecer WB?',
              options: [
                'Auto siempre perfect',
                'Sin WB',
                'Más cálido o ajustar RAW',
                'Fluorescente verde',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l043',
        title: '43. Curvas y contraste',
        duration: '8 min',
        theory: `<p>Curvas y contraste es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, highlights recovery shadows lift Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar curvas y contraste con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: S-curve suave</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Curvas y contraste',
          content: `<p>No overprocess.</p>`,
          tip: 'Local adjustments.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre curvas y contraste.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Contraste excesivo?',
              options: [
                'Blur',
                'Aspecto artificial halo',
                'Mejor siempre más',
                'Sin contraste',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l044',
        title: '44. Dehaze local',
        duration: '8 min',
        theory: `<p>Dehaze local es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, brush dehaze fondo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar dehaze local con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Clarity montaña niebla moderada</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Dehaze local',
          content: `<p>Over clarity halos.</p>`,
          tip: 'Natural preferred.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dehaze local.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Dehaze?',
              options: [
                'Reducir neblina moderado',
                'Siempre max',
                'Nunca',
                'Replace sky default',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l045',
        title: '45. Sharpening export',
        duration: '8 min',
        theory: `<p>Sharpening export es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, export sharpen screen Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar sharpening export con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Capture vs output sharpen web</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Sharpening export',
          content: `<p>No oversharpen sky.</p>`,
          tip: 'Mask sharpening.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre sharpening export.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Sharpen web?',
              options: [
                'Sin sharpen nunca',
                'Blur export',
                'Output sharpening moderado',
                'Max sharpen todo',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'fot-l046',
        title: '46. Crop y nivel',
        duration: '8 min',
        theory: `<p>Crop y nivel es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, grid overlay rotate Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar crop y nivel con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Enderezar horizonte crítico</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Crop y nivel',
          content: `<p>Perder resolución crop.</p>`,
          tip: 'Ratio print.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre crop y nivel.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Horizonte torcido?',
              options: [
                'Extreme dutch always',
                'Corregir rotate crop',
                'Dejar torcido',
                'No importa',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l047',
        title: '47. Color grading natural',
        duration: '8 min',
        theory: `<p>Color grading natural es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, subtle teal orange evitar cliché Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar color grading natural con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: HSL ajuste cielo verde selective</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Color grading natural',
          content: `<p>Taste evoluciona.</p>`,
          tip: 'Monitor calibrado.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre color grading natural.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿HSL?',
              options: [
                'Saturación 100 global',
                'B&w random',
                'Sin color',
                'Ajustar colores selectivos',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'fot-l048',
        title: '48. Metadata keywords',
        duration: '8 min',
        theory: `<p>Metadata keywords es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, añadir GPS si ético Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar metadata keywords con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Keywords location copyright IPTC</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Metadata keywords',
          content: `<p>Buscar archivo.</p>`,
          tip: 'Model release personas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre metadata keywords.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Keywords?',
              options: [
                'Organizar buscar fotos',
                'Decoración',
                'Sin utilidad',
                'Secret',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'fot-l049',
        title: '49. Backup 3-2-1',
        duration: '8 min',
        theory: `<p>Backup 3-2-1 es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, SSD + cloud fotos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar backup 3-2-1 con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: 3 copias 2 medios 1 offsite</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Backup 3-2-1',
          content: `<p>Verificar restore.</p>`,
          tip: 'No solo laptop.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre backup 3-2-1.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Backup fotos?',
              options: [
                'Solo Instagram',
                'Regla 3-2-1',
                'Una tarjeta',
                'Sin backup',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'fot-l050',
        title: '50. Portfolio salida',
        duration: '8 min',
        theory: `<p>Portfolio salida es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el paisaje natural y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, critique grupo fotoclub Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el paisaje natural de forma integrada.</p>
        <p>Estudiar portfolio salida con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en salidas fotográficas al aire libre.</p>
        <ul><li>Concepto central: Seleccionar 10 mejores serie coherente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas fotográficas al aire libre</li></ul>`,
        example: {
          title: 'Ejemplo: Portfolio salida',
          content: `<p>Kill favorites weak.</p>`,
          tip: 'Sequence matters.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre portfolio salida.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Portfolio paisaje?',
              options: [
                'Solo filtros',
                'Sin edición',
                'Selección curada coherente',
                'Todas fotos',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
];
