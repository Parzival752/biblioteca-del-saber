export const CURRICULUM = [
  {
    id: 'ast-mod-1',
    title: 'Fundamentos del cielo',
    description: 'Movimientos aparentes, coordenadas y herramientas básicas',
    lessons: [
      {
        id: 'ast-l001',
        title: '1. El movimiento diurno',
        duration: '8 min',
        theory: `<p>El movimiento diurno es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, observa cómo las estrellas circumpolares no se ponen en latitudes medias Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar el movimiento diurno con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: La bóveda celeste parece girar alrededor de un eje por la rotación terrestre</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: El movimiento diurno',
          content: `<p>La Osa Mayor gira alrededor de Polaris durante la noche en el hemisferio norte.</p>`,
          tip: 'Usa una silla reclinable para mapas estelares sin fatiga cervical.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre el movimiento diurno.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué las estrellas parecen moverse?',
              options: [
                'Rotación de la Tierra',
                'Las estrellas orbitan la Luna',
                'El Sol gira alrededor de la Tierra cada hora',
                'Solo por turbulencia atmosférica',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l002',
        title: '2. Coordenadas alt-az',
        duration: '8 min',
        theory: `<p>Coordenadas alt-az es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, practica estimar 45° de altitud comparando con el puño a brazo extendido Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar coordenadas alt-az con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Altitud mide grados sobre horizonte; acimut es ángulo desde el norte hacia el este</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Coordenadas alt-az',
          content: `<p>Venus a 30° sobre el horizonte occidental tras el ocaso es fácil de medir con el puño (~10°).</p>`,
          tip: 'Un puño a brazo extendido cubre unos 10° en el cielo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre coordenadas alt-az.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué mide la altitud?',
              options: [
                'Grados sobre el horizonte',
                'Distancia en años luz',
                'Brillo aparente',
                'Temperatura de la estrella',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l003',
        title: '3. Eclíptica y zodiaco',
        duration: '8 min',
        theory: `<p>Eclíptica y zodiaco es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, localiza el camino lunar y planetas cerca de la eclíptica en cualquier mes Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar eclíptica y zodiaco con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Plano donde orbitan planetas; constelaciones zodiacales lo cruzan</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Eclíptica y zodiaco',
          content: `<p>La Luna puede ocultar planetas porque ambos siguen la eclíptica con poca separación.</p>`,
          tip: 'Las eclipses solares ocurren solo cerca de nodos lunares en la eclíptica.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre eclíptica y zodiaco.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Dónde encontrar planetas en el cielo?',
              options: [
                'Cerca de la banda zodiacal/eclíptica',
                'Solo sobre el polo norte',
                'En cualquier punto al azar',
                'Únicamente en verano',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l004',
        title: '4. Magnitud aparente',
        duration: '8 min',
        theory: `<p>Magnitud aparente es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, identifica las cinco estrellas más brillantes visibles desde tu latitud Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar magnitud aparente con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Escala logarítmica de brillo; menor número = más brillante</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Magnitud aparente',
          content: `<p>Sirio brilla con magnitud ~−1,4; muchas estrellas visibles están entre +2 y +6.</p>`,
          tip: 'Cada salto de 5 magnitudes es factor 100 en flujo luminoso.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre magnitud aparente.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué estrella parece más brillante?',
              options: [
                'La de magnitud −1 frente a +3',
                'Siempre la más roja',
                'La más cercana al horizonte',
                'La que parpadea más',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l005',
        title: '5. Luz y contaminación lumínica',
        duration: '8 min',
        theory: `<p>Luz y contaminación lumínica es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, busca sitios Bortle 4 o mejor; apaga luces directas y espera adaptación 20 min Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar luz y contaminación lumínica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Lámparas dispersas reducen contraste del cielo y ocultan estrellas débiles</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Luz y contaminación lumínica',
          content: `<p>Desde ciudad solo brillan Venus, Júpiter y algunas estrellas; vía láctea desaparece.</p>`,
          tip: 'Luz roja preserva mejor la visión nocturna adaptada que blanca.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre luz y contaminación lumínica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cómo mejorar observación urbana?',
              options: [
                'Adaptar la vista en oscuridad y bloquear luz directa',
                'Usar linterna blanca en el ojo',
                'Observar solo con luna llena',
                'Mirar a través de ventana cerrada',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l006',
        title: '6. Fases lunares',
        duration: '8 min',
        theory: `<p>Fases lunares es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, registra forma lunar cada noche y predice siguiente fase Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar fases lunares con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Fase depende del ángulo Sol-Tierra-Luna; ciclo sinódico ~29,5 días</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Fases lunares',
          content: `<p>Luna menguante visible al amanecer en el cielo oriental.</p>`,
          tip: 'Luna nueva no es visible: está cerca del Sol en el cielo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre fases lunares.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo luna gibosa menguante?',
              options: [
                'Entre cuarto y luna nueva, visible madrugada',
                'Justo en luna llena',
                'Solo en eclipse',
                'Cuando está en cuarto creciente al atardecer',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l007',
        title: '7. Planeta vs estrella',
        duration: '8 min',
        theory: `<p>Planeta vs estrella es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, compara Júpiter con estrella cercana: Júpiter es constante y más nítido Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar planeta vs estrella con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Planetas muestran disco y no parpadean tanto; estrellas son puntos que titilan</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Planeta vs estrella',
          content: `<p>Marte en oposición es naranja brillante sin parpadeo notorio.</p>`,
          tip: 'Binoculares revelan fases de Venus y lunas galileanas de Júpiter.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre planeta vs estrella.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Señal de planeta con ojo desnudo?',
              options: [
                'Luz estable sin parpadeo fuerte',
                'Siempre azul verdoso',
                'Parpadea más que estrellas',
                'Solo visible de día',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l008',
        title: '8. Estaciones y el Sol',
        duration: '8 min',
        theory: `<p>Estaciones y el Sol es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mide sombra al mediodía solar en solsticios y equinoccios si puedes Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar estaciones y el sol con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Inclinación axial causa estaciones; altura del Sol al mediodía varía</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Estaciones y el Sol',
          content: `<p>Sol alto en verano produce sombras cortas al mediodía en hemisferio norte.</p>`,
          tip: 'Día más largo no siempre es el más caluroso por inercia térmica.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre estaciones y el sol.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué causa las estaciones?',
              options: [
                'Inclinación del eje terrestre',
                'Distancia variable al Sol solamente',
                'Fases lunares',
                'Contaminación lumínica',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l009',
        title: '9. Brújula celeste y Polaris',
        duration: '8 min',
        theory: `<p>Brújula celeste y Polaris es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, localiza Osa Mayor y sigue el borde del cubo hasta Polaris Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar brújula celeste y polaris con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Polaris indica norte geográfico con error pequeño en hemisferio norte</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Brújula celeste y Polaris',
          content: `<p>En bosque nocturno Polaris orienta mejor que musgo en árboles.</p>`,
          tip: 'Polaris no es la estrella más brillante; es la estrella guía norte.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre brújula celeste y polaris.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cómo encontrar Polaris?',
              options: [
                'Extender 5 veces la distancia Osa Mayor',
                'Seguir Orión hacia el sur',
                'Buscar la estrella más brillante',
                'Mirar donde se puso el Sol',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l010',
        title: '10. Cuaderno de campo astronómico',
        duration: '8 min',
        theory: `<p>Cuaderno de campo astronómico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, anota seeing, transparencia y objetos vistos con boceto simple Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar cuaderno de campo astronómico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Registrar fecha, hora UTC/local, instrumento y condiciones mejora aprendizaje</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Cuaderno de campo astronómico',
          content: `<p>Un registro de lluvia de meteoros incluye hora y radiant aproximado.</p>`,
          tip: 'Dibujar cráteres lunares fija detalles que la memoria distorsiona.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cuaderno de campo astronómico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué anotar al observar?',
              options: [
                'Fecha, ubicación, instrumento y condiciones',
                'Solo nombre de una estrella',
                'Nada; confía en memoria',
                'Únicamente fotos sin metadatos',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ast-mod-2',
    title: 'Sistema Solar',
    description: 'Planetas, lunas, eclipses y fenómenos visibles',
    lessons: [
      {
        id: 'ast-l011',
        title: '11. Mercurio y Venus',
        duration: '8 min',
        theory: `<p>Mercurio y Venus es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, busca Mercurio en crepúsculo 30 min tras puesta de Sol Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar mercurio y venus con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Interiores a la Tierra; Venus muy brillante; Mercurio pegado al Sol</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Mercurio y Venus',
          content: `<p>Venus como "lucero" puede alcanzar −4 de magnitud.</p>`,
          tip: 'Nunca apuntes binoculares al Sol sin filtro solar certificado.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mercurio y venus.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo ver Mercurio más fácil?',
              options: [
                'Crepúsculo cerca del horizonte',
                'Medianoche alta',
                'Mediodía sin filtros',
                'Durante eclipse lunar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l012',
        title: '12. Marte en oposición',
        duration: '8 min',
        theory: `<p>Marte en oposición es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, planifica observación cuando Marte esté opuesto y alto en el cielo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar marte en oposición con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Marte más brillante y grande cerca de oposición cada ~26 meses</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Marte en oposición',
          content: `<p>Oposición 2025 ofrece disco visible con telescopio modesto.</p>`,
          tip: 'Color rojizo se debe a óxidos en su superficie.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre marte en oposición.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es oposición?',
              options: [
                'Planeta opuesto al Sol visto desde Tierra',
                'Planeta detrás del Sol',
                'Luna nueva',
                'Solsticio de verano',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l013',
        title: '13. Júpiter y lunas galileanas',
        duration: '8 min',
        theory: `<p>Júpiter y lunas galileanas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, observa cambio de posición de Io y Europa en una sola noche Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar júpiter y lunas galileanas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Cuatro lunas grandes visibles en binoculares; orbitan en días</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Júpiter y lunas galileanas',
          content: `<p>Galileo usó sus movimientos como argumento pro heliocentrismo.</p>`,
          tip: 'Sombras de lunas sobre Júpiter son visibles con telescopio.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre júpiter y lunas galileanas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué viste con binoculares en Júpiter?',
              options: [
                'Cuatro puntos alineados con el planeta',
                'Anillos como Saturno',
                'Fases como Venus',
                'Polar caps',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l014',
        title: '14. Saturno y anillos',
        duration: '8 min',
        theory: `<p>Saturno y anillos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, observa cuando Saturno esté alto para menos turbulencia Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar saturno y anillos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Anillos de hielo y roca visibles con telescopio >60 mm bien colimado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Saturno y anillos',
          content: `<p>Anillos se inclinan respecto a la Tierra cambiando apariencia en 29 años.</p>`,
          tip: 'Luna Titán es visible con telescopio pequeño como punto cercano.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre saturno y anillos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué instrumento mínimo útil para anillos?',
              options: [
                'Telescopio refractor o reflector modesto',
                'Solo ojo desnudo',
                'Brújula magnética',
                'Radio FM',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l015',
        title: '15. Lluvias de meteoros',
        duration: '8 min',
        theory: `<p>Lluvias de meteoros es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Perseidas agosto; Gemínidas diciembre; observa después de medianoche Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar lluvias de meteoros con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Polvo cometario entra en atmósfera; radiant indica constelación origen</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Lluvias de meteoros',
          content: `<p>Contar meteoros por hora desde silla orientada al radiant.</p>`,
          tip: 'Luna gibosa reduce conteo; busca ventana sin luna.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre lluvias de meteoros.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es el radiant?',
              options: [
                'Punto aparente de origen de meteoros',
                'Estrella más brillante',
                'Planeta en conjunción',
                'Centro galáctico',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l016',
        title: '16. Eclipses solares',
        duration: '8 min',
        theory: `<p>Eclipses solares es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa gafas ISO 12312-2; nunca sin protección excepto totality breve Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar eclipses solares con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Luna cubre Sol; total solo en franja; parcial en región más amplia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Eclipses solares',
          content: `<p>Eclipse total 2024 mostró corona y estrellas diurnas en zona totalidad.</p>`,
          tip: 'Proyección con agujero en cartón es método seguro indirecto.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre eclipses solares.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo mirar Sol sin filtro?',
              options: [
                'Solo fase total breve en eclipse total',
                'Siempre en eclipse parcial',
                'Con binoculares normales',
                'Al mediodía de verano',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l017',
        title: '17. Eclipses lunares',
        duration: '8 min',
        theory: `<p>Eclipses lunares es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Luna puede volverse rojiza por dispersión atmosfrica (blood moon) Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar eclipses lunares con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Tierra proyecta sombra en Luna; visibles en todo el hemisferio nocturno</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Eclipses lunares',
          content: `<p>Eclipse total lunar dura cerca de una hora en umbra.</p>`,
          tip: 'No requieren protección ocular.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre eclipses lunares.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Color rojizo en eclipse lunar?',
              options: [
                'Dispersión de luz solar en atmósfera terrestre',
                'Luna hecha de cobre',
                'Incendios forestales siempre',
                'Reflejo de Marte',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l018',
        title: '18. Cometas visibles',
        duration: '8 min',
        theory: `<p>Cometas visibles es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, cola de polvo y de iones apuntan direcciones distintas por viento solar Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar cometas visibles con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Núcleo hielo-polvo desarrolla coma y colas cerca del Sol</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Cometas visibles',
          content: `<p>Neowise 2020 fue visible al ojo con cola fotogénica.</p>`,
          tip: 'Cola no sigue dirección del movimiento necesariamente.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cometas visibles.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué forma cola de iones?',
              options: [
                'Viento solar y campo magnético',
                'Gravedad lunar únicamente',
                'Rotación terrestre',
                'Contaminación lumínica',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l019',
        title: '19. Asteroides y conjunciones',
        duration: '8 min',
        theory: `<p>Asteroides y conjunciones es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, app de planetario muestra conjunciones Luna-Júpiter espectaculares Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar asteroides y conjunciones con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Conjunción es proximidad aparente en cielo, no distancia real</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Asteroides y conjunciones',
          content: `<p>Dos planetas a menos de 1° pueden caber en mismo campo telescópico.</p>`,
          tip: 'Asteroide cercano rara vez visible sin telescopio.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre asteroides y conjunciones.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es conjunción?',
              options: [
                'Proximidad aparente en la bóveda celeste',
                'Colisión real',
                'Eclipse total',
                'Explosión estelar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l020',
        title: '20. Estaciones en otros planetas',
        duration: '8 min',
        theory: `<p>Estaciones en otros planetas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, compara duración orbital marciana ~687 días terrestres Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar estaciones en otros planetas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Marte tiene estaciones por inclinación similar; duración ~ el doble que Tierra</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Estaciones en otros planetas',
          content: `<p>Invierno marciano trae polvo global ocasional.</p>`,
          tip: 'Júpiter tiene poca inclinación: estaciones casi nulas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre estaciones en otros planetas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué Marte tiene estaciones?',
              options: [
                'Inclinación axial comparable a la Tierra',
                'No tiene atmósfera',
                'Está más lejos del Sol únicamente',
                'Tiene anillos',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ast-mod-3',
    title: 'Estrellas y galaxias',
    description: 'Tipos estelares, constelaciones y objetos de cielo profundo',
    lessons: [
      {
        id: 'ast-l021',
        title: '21. Espectro y color estelar',
        duration: '8 min',
        theory: `<p>Espectro y color estelar es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, compara Betelgeuse roja con Rigel azul en Orión Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar espectro y color estelar con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Color indica temperatura superficial: azul caliente, rojo frío</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Espectro y color estelar',
          content: `<p>Estrellas clase O son azules y raras; Sol es tipo G amarillo.</p>`,
          tip: 'No confundas parpadeo atmosférico con color intrínseco.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre espectro y color estelar.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué implica estrella azul brillante?',
              options: [
                'Alta temperatura superficial',
                'Está muy cerca siempre',
                'Está apagándose',
                'Es un planeta',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l022',
        title: '22. Secuencia principal',
        duration: '8 min',
        theory: `<p>Secuencia principal es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Sol permanecerá en secuencia principal ~10 mil millones años Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar secuencia principal con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Relación masa-luminosidad-temperatura; estrellas fusionan H en núcleo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Secuencia principal',
          content: `<p>Enanas rojas son masivas en número pero tenues.</p>`,
          tip: 'Estrellas masivas viven menos pero brillan más.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre secuencia principal.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué fusiona el Sol ahora?',
              options: [
                'Hidrógeno en helio',
                'Helio en hierro directamente',
                'Solo deuterio',
                'No fusiona',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l023',
        title: '23. Constelaciones estacionales',
        duration: '8 min',
        theory: `<p>Constelaciones estacionales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, verifica Leo primavera, Cygnus verano, Orión invierno (hemisferio norte) Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar constelaciones estacionales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Mapa estelar cambia con estación y hora por órbita terrestre</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Constelaciones estacionales',
          content: `<p>Crucero del Sur guía en hemisferio austral donde Polaris no sirve.</p>`,
          tip: 'Usa plano estelar giratorio o app en modo rojo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre constelaciones estacionales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué cambian constelaciones visibles?',
              options: [
                'Órbita terrestre y hora de la noche',
                'Estrellas se mueven en días',
                'Luna absorbe luz',
                'Por contaminación únicamente',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l024',
        title: '24. Cúmulos abiertos',
        duration: '8 min',
        theory: `<p>Cúmulos abiertos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Pídides y Hyades visibles; Pléyades con nebulosidad en fotos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar cúmulos abiertos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Grupo de estrellas jóvenes nacidas de misma nube; dispersan con tiempo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Cúmulos abiertos',
          content: `<p>Cúmulo doble en Perseo contiene centenares en binoculares.</p>`,
          tip: 'Buen objeto suburbano con binoculares.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cúmulos abiertos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué son Pléyades?',
              options: [
                'Cúmulo abierto joven',
                'Galaxia lejana',
                'Planeta enano',
                'Cometa periódico',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l025',
        title: '25. Nebulosas brillantes',
        duration: '8 min',
        theory: `<p>Nebulosas brillantes es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Orion Nebula M42 visible espada de Orión con binoculares Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar nebulosas brillantes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Gas ionizado brilla por estrellas calientes cercanas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Nebulosas brillantes',
          content: `<p>Nebulosa es cuna estelar activa.</p>`,
          tip: 'Filtro UHC mejora contraste en telescopio.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre nebulosas brillantes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Dónde está M42?',
              options: [
                'Espada de Orión',
                'Cerca de Polaris',
                'En el zodiaco solo',
                'Junto a la Luna siempre',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l026',
        title: '26. Galaxia de Andrómeda',
        duration: '8 min',
        theory: `<p>Galaxia de Andrómeda es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, visible otoño; campo oscuro esencial Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar galaxia de andrómeda con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: M31 galaxia espiral ~2,5 M años luz; mancha oval sin luna</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Galaxia de Andrómeda',
          content: `<p>Parece nube pequeña; brazos no se ven sin exposición larga.</p>`,
          tip: 'Colisión futura con Vía Láctea en miles de millones años.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre galaxia de andrómeda.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es M31?',
              options: [
                'Galaxia espiral vecina',
                'Nebulosa planetaria',
                'Cometa',
                'Estrella variable',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l027',
        title: '27. Estrellas variables',
        duration: '8 min',
        theory: `<p>Estrellas variables es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Cefeidas usadas en cosmología por relación periodo-luminosidad Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar estrellas variables con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Brillo cambia por pulsación, eclipses binarias u otros mecanismos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Estrellas variables',
          content: `<p>Algol "demonio" eclipsa cada ~3 días.</p>`,
          tip: 'Registro fotométrico amateur es posible.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre estrellas variables.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Utilidad de cefeidas?',
              options: [
                'Medir distancias cósmicas',
                'Predecir eclipses solares',
                'Navegar barcos',
                'Medir viento',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l028',
        title: '28. Agujeros negros estelares',
        duration: '8 min',
        theory: `<p>Agujeros negros estelares es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Cygnus X-1 candidato histórico; no observable visualmente directamente Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar agujeros negros estelares con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Remanentes masivos; detectados por efectos en compañera o ondas gravitacionales</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Agujeros negros estelares',
          content: `<p>Materia en disco de acreción emite rayos X.</p>`,
          tip: 'No "succionan" como aspiradoras a distancia.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre agujeros negros estelares.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cómo detectamos Cygnus X-1?',
              options: [
                'Radiación X de acreción',
                'Brillo visible a ojo',
                'Parpadeo rojo',
                'Meteoros',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l029',
        title: '29. Vía Láctea',
        duration: '8 min',
        theory: `<p>Vía Láctea es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mejor verano en hemisferio norte lejos de luna y ciudad Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar vía láctea con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Nuestro brazo espiral visto desde dentro como banda difusa</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Vía Láctea',
          content: `<p>Centro galáctico en Sagitario rico en objetos.</p>`,
          tip: 'Oscurecimiento interestelar bloquea luz en plano.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre vía láctea.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué banda lechosa?',
              options: [
                'Plano denso de estrellas y polvo visto de dentro',
                'Nubes terrestres',
                'Auroras',
                'Satélites Starlink',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l030',
        title: '30. Exoplanetas',
        duration: '8 min',
        theory: `<p>Exoplanetas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, métodos: tránsito, velocidad radial, microlente Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar exoplanetas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Planetas orbitan otras estrellas; mayoría detectados indirectamente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Exoplanetas',
          content: `<p>Kepler encontró miles por atenuación periódica.</p>`,
          tip: 'Habitabilidad requiere más que zona Goldilocks.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre exoplanetas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Método tránsito?',
              options: [
                'Medir atenuación cuando planeta pasa frente a estrella',
                'Pesar planeta en báscula',
                'Ver superficie directamente siempre',
                'Medir parpadeo atmosférico',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ast-mod-4',
    title: 'Instrumentos y observación',
    description: 'Binoculares, telescopios y técnicas prácticas',
    lessons: [
      {
        id: 'ast-l031',
        title: '31. Binoculares 10x50',
        duration: '8 min',
        theory: `<p>Binoculares 10x50 es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa trípode adaptador para estabilidad en objetos tenues Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar binoculares 10x50 con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: 10 aumentos, objetivos 50 mm; buen equilibrio cielo mano</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Binoculares 10x50',
          content: `<p>10x50 muestra cráteres grandes lunares y Júpiter con lunas.</p>`,
          tip: 'Número grande de objetivo recoge más luz.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre binoculares 10x50.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué significa 10x50?',
              options: [
                '10 aumentos, objetivos 50 mm',
                '50 aumentos',
                'Distancia 10 m',
                'Peso 50 g',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l032',
        title: '32. Telescopio reflector vs refractor',
        duration: '8 min',
        theory: `<p>Telescopio reflector vs refractor es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, reflectores grandes son más baratos por pulgada; refractores nítidos en planetas Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar telescopio reflector vs refractor con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Reflector usa espejos; refractor lentes; distintos costos y aberraciones</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Telescopio reflector vs refractor',
          content: `<p>Dobson 8" excelente cielo profundo; refractor 4" planetas.</p>`,
          tip: 'Colimación necesaria en reflectores.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre telescopio reflector vs refractor.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja reflector grande?',
              options: [
                'Más apertura por precio',
                'Sin mantenimiento',
                'Funciona sin trípode siempre',
                'No necesita enfocar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l033',
        title: '33. Apertura y resolución',
        duration: '8 min',
        theory: `<p>Apertura y resolución es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, regla práctica: resolución ~116/D mm arco-segundos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar apertura y resolución con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Diámetro mayor recoge más luz y resuelve detalles finos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Apertura y resolución',
          content: `<p>Telescopio 200 mm separa detalles lunares ~0,6".</p>`,
          tip: 'Apertura importa más que aumento excesivo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre apertura y resolución.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué mejora con más apertura?',
              options: [
                'Resolución y capacidad de luz',
                'Solo color',
                'Elimina turbulencia',
                'Reduce peso',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l034',
        title: '34. Monturas alt-az y ecuatorial',
        duration: '8 min',
        theory: `<p>Monturas alt-az y ecuatorial es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ecuatorial facilita astrofotografía con seguimiento motorizado Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar monturas alt-az y ecuatorial con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Alt-az simple; ecuatorial alinea con eje terrestre para seguimiento</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Monturas alt-az y ecuatorial',
          content: `<p>Ecuatorial requiere polar align previo.</p>`,
          tip: 'Alt-az con goto moderno es amigable principiante.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre monturas alt-az y ecuatorial.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Para astrofoto larga?',
              options: [
                'Montura ecuatorial con seguimiento',
                'Binoculares mano libre',
                'Trípode foto sin motor',
                'Sostener telescopio',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l035',
        title: '35. Oculares y aumento',
        duration: '8 min',
        theory: `<p>Oculares y aumento es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, empieza con ocular medio; cambia según objeto Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar oculares y aumento con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Aumento = focal telescopio / focal ocular; exceso empeora imagen</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Oculares y aumento',
          content: `<p>Aumento útil máximo ~2x apertura en mm bajo buen seeing.</p>`,
          tip: 'Ocular de 25 mm suele ser workhorse general.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre oculares y aumento.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Aumento excesivo?',
              options: [
                'Imagen borrosa sin más detalle',
                'Siempre mejor',
                'Obligatorio en planetas',
                'Elimina necesidad de trípode',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l036',
        title: '36. Filtros lunares y planetarios',
        duration: '8 min',
        theory: `<p>Filtros lunares y planetarios es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, nunca filtro solar improvisado; solo certificado Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar filtros lunares y planetarios con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Filtro lunar reduce brillo; colorados realzan detalles marcianos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Filtros lunares y planetarios',
          content: `<p>Filtro verde a veces ayuda en Júpiter.</p>`,
          tip: 'Filtro solar debe ir en extremo frontal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre filtros lunares y planetarios.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Dónde va filtro solar?',
              options: [
                'Frente del telescopio',
                'En el ocular mirando directo',
                'En el ojo',
                'Detrás del espejo secundario solo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l037',
        title: '37. Astrofotografía con trípode',
        duration: '8 min',
        theory: `<p>Astrofotografía con trípode es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, regla 500: tiempo max ≈ 500/(focal×crop) segundos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar astrofotografía con trípode con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Exposiciones de segundos capturan cielo estrellado sin seguimiento</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Astrofotografía con trípode',
          content: `<p>Foto 15 s a 24 mm muestra vía láctea en trípode.</p>`,
          tip: 'Enfoque infinito con luz distante o live view.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre astrofotografía con trípode.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Regla 500 sirve para?',
              options: [
                'Limitar trazo estelar sin seguimiento',
                'Calcular distancia lunar',
                'Medir temperatura sensor',
                'Elegir ocular',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l038',
        title: '38. Seeing y transparencia',
        duration: '8 min',
        theory: `<p>Seeing y transparencia es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, planetas mejor con seeing estable aunque algo de luz polución Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar seeing y transparencia con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Seeing es estabilidad atmosférica; transparencia claridad por humo/nubes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Seeing y transparencia',
          content: `<p>Estrellas "bailan" con mal seeing; detalle planetario se pierde.</p>`,
          tip: 'Altitud del objeto sobre horizonte mejora seeing.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre seeing y transparencia.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Mal seeing afecta?',
              options: [
                'Detalle fino planetario y lunar',
                'Brillo de Venus solo',
                'Fases lunares',
                'Nombre de constelaciones',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l039',
        title: '39. Star hopping',
        duration: '8 min',
        theory: `<p>Star hopping es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, practica desde Pléyades a objetos cercanos con mapa Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar star hopping con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Navegar saltando de estrellas conocidas a objetos tenues</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Star hopping',
          content: `<p>Encontrar M57 desde Vega usando estrellas guía intermedias.</p>`,
          tip: 'Binoculares ideales para saltos iniciales.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre star hopping.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es star hopping?',
              options: [
                'Navegar entre estrellas guía',
                'Saltar físicamente',
                'Usar GPS terrestre',
                'Seguir satélites',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l040',
        title: '40. Mantenimiento óptica',
        duration: '8 min',
        theory: `<p>Mantenimiento óptica es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, evita roces en recubrimientos; guarda con tapas Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar mantenimiento óptica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Polvo en lentes/espejos: soplar polvo, limpiar solo si necesario con kit</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Mantenimiento óptica',
          content: `<p>Gotas de rocío nocturno: dejar secar antes de tapar.</p>`,
          tip: 'Colimar reflector tras golpe de transporte.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mantenimiento óptica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Limpiar óptica?',
              options: [
                'Solo cuando suciedad afecta imagen',
                'Diario con alcohol fuerte',
                'Con camiseta',
                'Sumergir en agua',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ast-mod-5',
    title: 'Cosmología y calendario celeste',
    description: 'Universo a gran escala y planificación de sesiones',
    lessons: [
      {
        id: 'ast-l041',
        title: '41. Big Bang y expansión',
        duration: '8 min',
        theory: `<p>Big Bang y expansión es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no es explosión en un punto del espacio sino expansión del espacio Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar big bang y expansión con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Universo temprano denso; expansión explica corrimiento al rojo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Big Bang y expansión',
          content: `<p>Galaxias lejanas se alejan más rápido (ley de Hubble).</p>`,
          tip: 'Radiación cósmica de fondo es remanente.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre big bang y expansión.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Evidencia expansión?',
              options: [
                'Corrimiento al rojo de galaxias lejanas',
                'Luna se aleja por Big Bang diario',
                'Sol aumenta tamaño cada hora',
                'Estrellas fijas en número',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l042',
        title: '42. Edad del universo',
        duration: '8 min',
        theory: `<p>Edad del universo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, estrellas más antiguas ~13 mil millones confirman orden magnitud Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar edad del universo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: ~13,8 mil millones años de modelos cosmológicos y CMB</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Edad del universo',
          content: `<p>Meteoritos datan sistema solar ~4,56 mil millones.</p>`,
          tip: 'Tierra ~4,5 mil millones años.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre edad del universo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Edad universo aproximada?',
              options: [
                '13,8 mil millones de años',
                '6000 años',
                '500 millones',
                'Infinito sin medida',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l043',
        title: '43. Materia oscura y energía',
        duration: '8 min',
        theory: `<p>Materia oscura y energía es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, modelo estándar incluye ~68% energía oscura, ~27% materia oscura Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar materia oscura y energía con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Componentes no visibles explican rotación galáctica y aceleración expansión</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Materia oscura y energía',
          content: `<p>Curvas rotación galácticas no cuadran solo con masa visible.</p>`,
          tip: 'Aún no detectada directamente en laboratorio.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre materia oscura y energía.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué materia oscura?',
              options: [
                'Masa gravitacional extra en galaxias',
                'Color de estrellas',
                'Fases lunares',
                'Contaminación lumínica',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l044',
        title: '44. Calendario lunar vs solar',
        duration: '8 min',
        theory: `<p>Calendario lunar vs solar es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, calendario gregoriano es solar con corrección bisiesto Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar calendario lunar vs solar con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Lunar ~354 días; solar 365; culturas combinan con meses intercalares</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Calendario lunar vs solar',
          content: `<p>Año nuevo chino sigue lunisolar.</p>`,
          tip: 'Ramadan se desplaza estaciones en ciclo ~33 años.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre calendario lunar vs solar.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Calendario gregoriano?',
              options: [
                'Solar con años bisiestos',
                'Puramente lunar',
                'Sin meses',
                'Basado en estrellas únicamente',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l045',
        title: '45. Solsticios y equinoccios',
        duration: '8 min',
        theory: `<p>Solsticios y equinoccios es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, marca fechas culturales y cambio estacional astronómico Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar solsticios y equinoccios con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Solsticio: Sol máxima declinación; equinoccio: día y noche ~ iguales</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Solsticios y equinoccios',
          content: `<p>Solsticio verano hemisferio norte ~21 junio.</p>`,
          tip: 'Equinoccios caen cerca del 20-21 mar/sept.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre solsticios y equinoccios.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Equinoccio de primavera?',
              options: [
                'Día y noche similares; inicio astronómico primavera norte',
                'Sol más lejos',
                'Luna llena obligatoria',
                'Eclipse anual',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l046',
        title: '46. Precesión del eje',
        duration: '8 min',
        theory: `<p>Precesión del eje es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Thuban fue polar en Egipto antiguo; Vega lo será Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar precesión del eje con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Bamboleo lento del eje ~26 mil años; cambia estrella polar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Precesión del eje',
          content: `<p>Afecta coordenadas ecuatoriales a largo plazo.</p>`,
          tip: 'No cambia estaciones perceptiblemente en una vida.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre precesión del eje.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es precesión?',
              options: [
                'Bamboleo del eje terrestre',
                'Expansión del Sol',
                'Caída de meteoros',
                'Deriva continental diaria',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l047',
        title: '47. Satélites artificiales',
        duration: '8 min',
        theory: `<p>Satélites artificiales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, apps muestran pasos brillantes post-atardecer Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar satélites artificiales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: TLE permiten predecir pasos ISS y Starlink</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Satélites artificiales',
          content: `<p>ISS supera muchas estrellas en brillo.</p>`,
          tip: 'Evita confundir avión parpadeante con satélite constante.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre satélites artificiales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo ver ISS fácil?',
              options: [
                'Poco después de puesta o antes de salida del Sol',
                'Solo luna nueva en montaña',
                'Mediodía solar',
                'Durante eclipse',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l048',
        title: '48. Estaciones espaciales y basura',
        duration: '8 min',
        theory: `<p>Estaciones espaciales y basura es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, objetos bajos caen; geostacionarios lejanos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar estaciones espaciales y basura con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Basura espacial amenaza satélites; reentradas visibles ocasionales</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Estaciones espaciales y basura',
          content: `<p>Cohete reentrando parece lluvia de fuego lenta.</p>`,
          tip: 'Dark sky y satélites: debate en astrofoto.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre estaciones espaciales y basura.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Geostacionario?',
              options: [
                'Orbita con periodo 24 h sobre ecuador',
                'Pasa cada 90 min',
                'Sale solo de noche',
                'Es un cometa',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l049',
        title: '49. Planificar sesión mensual',
        duration: '8 min',
        theory: `<p>Planificar sesión mensual es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, luna menguante semanas mejores cielo profundo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar planificar sesión mensual con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Combina fases lunares, planetas prominentes y eventos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Planificar sesión mensual',
          content: `<p>Calendario IAU y apps integran conjunciones.</p>`,
          tip: 'Backup fecha por clima.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre planificar sesión mensual.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Mejor semana cielo profundo?',
              options: [
                'Luna menguante o nueva',
                'Luna llena',
                'Cerca de luces urbanas',
                'Solo con aurora',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ast-l050',
        title: '50. Ciudadanía científica astronómica',
        duration: '8 min',
        theory: `<p>Ciudadanía científica astronómica es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el cielo nocturno y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, proyectos AAVSO, Zooniverse Galaxy Zoo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar el cielo nocturno de forma integrada.</p>
        <p>Estudiar ciudadanía científica astronómica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en observaciones al aire libre con plano estelar.</p>
        <ul><li>Concepto central: Amateurs contribuyen curvas de luz, asteroides, variable stars</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en observaciones al aire libre con plano estelar</li></ul>`,
        example: {
          title: 'Ejemplo: Ciudadanía científica astronómica',
          content: `<p>Reporte de fireballs ayuda triangulación.</p>`,
          tip: 'Datos open mejoran modelos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ciudadanía científica astronómica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Contribución amateur?',
              options: [
                'Fotometría de estrellas variables',
                'Inventar constelaciones oficiales',
                'Apagar todas las estrellas',
                'Solo lectura sin datos',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
];
