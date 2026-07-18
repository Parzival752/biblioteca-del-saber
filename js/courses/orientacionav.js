export const CURRICULUM = [
  {
    id: 'ori-mod-1',
    title: 'Mapas topográficos',
    description: 'Curvas de nivel, escala y simbología cartográfica',
    lessons: [
      {
        id: 'ori-l001',
        title: '1. Escala del mapa',
        duration: '8 min',
        theory: `<p>Escala del mapa es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, calcula distancia real entre dos puntos con regla y escala 1:25000.</p>
        <p>Estudiar escala del mapa con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Relaciona distancia en mapa con distancia real en terreno</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Escala del mapa',
          content: `<p>En 1:25000, 4 cm en mapa equivalen a 1 km en campo.</p>`,
          tip: 'Anota la escala en el margen del cuaderno antes de salir.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre escala del mapa.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Distancia real con 2 cm en mapa 1:50000?',
              options: [
                '500 m',
                '2 km',
                '5 km',
                '1 km',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l002',
        title: '2. Curvas de nivel',
        duration: '8 min',
        theory: `<p>Curvas de nivel es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, identifica cumbres, collados y valles solo con curvas.</p>
        <p>Estudiar curvas de nivel con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Líneas que unen puntos de igual altitud; separación indica pendiente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Curvas de nivel',
          content: `<p>Curvas muy juntas señalan pared rocosa; abiertas, llanura.</p>`,
          tip: 'Un collado aparece como hendidura entre dos cumbres.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre curvas de nivel.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Pendiente fuerte en mapa?',
              options: [
                'Sin curvas',
                'Solo color verde',
                'Curvas de nivel muy juntas',
                'Curvas muy separadas',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l003',
        title: '3. Orientación del mapa',
        duration: '8 min',
        theory: `<p>Orientación del mapa es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa brújula para orientar mapa en terreno visible.</p>
        <p>Estudiar orientación del mapa con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Rotar mapa hasta alinear norte cartográfico con norte real</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Orientación del mapa',
          content: `<p>Con mapa orientado, las formas coinciden con el paisaje.</p>`,
          tip: 'En días nublados orientar el mapa es más difícil: usa GPS como respaldo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre orientación del mapa.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Para qué orientar el mapa?',
              options: [
                'Dibujar escala',
                'Hacer coincidir mapa con terreno',
                'Medir temperatura',
                'Calcular hora solar',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l004',
        title: '4. Simbología IGN/OSM',
        duration: '8 min',
        theory: `<p>Simbología IGN/OSM es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, memoriza símbolos de senda, pista y carretera en tu región.</p>
        <p>Estudiar simbología ign/osm con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Interpretar caminos, sendas, límites y puntos de referencia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Simbología IGN/OSM',
          content: `<p>Senda de montaña suele ser línea discontinua fina.</p>`,
          tip: 'Leyenda del mapa resuelve dudas de color y grosor.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre simbología ign/osm.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Símbolo típico de senda?',
              options: [
                'Línea de trazo discontinuo',
                'Círculo relleno azul',
                'Triángulo rojo solo',
                'Cuadrícula negra gruesa',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l005',
        title: '5. Coordenadas UTM',
        duration: '8 min',
        theory: `<p>Coordenadas UTM es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, localiza tu posición leyendo cruces de coordenadas en mapa impreso.</p>
        <p>Estudiar coordenadas utm con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Sistema métrico por zonas; easting y northing en metros</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Coordenadas UTM',
          content: `<p>Zona UTM 14 cubre gran parte de México central.</p>`,
          tip: 'Registra zona UTM: sin zona las coordenadas son ambiguas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre coordenadas utm.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja de UTM en montaña?',
              options: [
                'Evitar brújula',
                'No necesitar mapa',
                'Medir distancias en metros directamente',
                'Usar grados sexagesimales solamente',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l006',
        title: '6. Perfil topográfico',
        duration: '8 min',
        theory: `<p>Perfil topográfico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, dibuja perfil entre refugio y cumbre contando curvas cruzadas.</p>
        <p>Estudiar perfil topográfico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Corte vertical del terreno a lo largo de una ruta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Perfil topográfico',
          content: `<p>Un perfil muestra ascensos antes de salir y ayuda a planificar agua.</p>`,
          tip: 'Cuenta cuántas curvas subes: cada una es el equidistancia del mapa.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre perfil topográfico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Para qué un perfil?',
              options: [
                'Sustituir brújula',
                'Anticipar desnivel y esfuerzo',
                'Medir latitud solar',
                'Predecir lluvia exacta',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l007',
        title: '7. Marga magnética',
        duration: '8 min',
        theory: `<p>Marga magnética es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, aplica declinación local al tomar azimut con brújula.</p>
        <p>Estudiar marga magnética con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Diferencia entre norte verdadero, magnético y de cuadrícula</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Marga magnética',
          content: `<p>Declinación cambia lentamente; consulta valor actual del año.</p>`,
          tip: 'En muchos mapas, convergencia de meridianos también importa en rutas largas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre marga magnética.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es declinación magnética?',
              options: [
                'Pendiente del terreno',
                'Distancia en km',
                'Altitud sobre el mar',
                'Ángulo entre norte magnético y geográfico',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l008',
        title: '8. Errores de lectura',
        duration: '8 min',
        theory: `<p>Errores de lectura es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, verifica cruce de arroyo con brújula y altitud esperada.</p>
        <p>Estudiar errores de lectura con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Confundir camino con arroyo seco o sombrear mal una ladera</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Errores de lectura',
          content: `<p>Un arroyo seco puede parecer senda en mapas viejos.</p>`,
          tip: 'Compara varios puntos, no uno solo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre errores de lectura.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Confirmar posición en cruce?',
              options: [
                'Coincidencia de forma, altitud y azimut',
                'Solo intuición',
                'Color del papel',
                'Hora del almuerzo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l009',
        title: '9. Mapas digitales offline',
        duration: '8 min',
        theory: `<p>Mapas digitales offline es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, guarda mapa topográfico offline en app antes de la ruta.</p>
        <p>Estudiar mapas digitales offline con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Descargar teselas antes de perder cobertura</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Mapas digitales offline',
          content: `<p>Maps.me y OsmAnd permiten rutas GPX sin datos móviles.</p>`,
          tip: 'Batería externa evita quedarte sin mapa a mitad de ruta.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mapas digitales offline.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes de ruta remota?',
              options: [
                'Desactivar GPS',
                'Descargar mapa offline y GPX',
                'Confiar solo en streaming',
                'Borrar caché',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l010',
        title: '10. Ejercicio de triangulación',
        duration: '8 min',
        theory: `<p>Ejercicio de triangulación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, practica en parque con colinas visibles y mapa impreso.</p>
        <p>Estudiar ejercicio de triangulación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Ubicarse cruzando azimuts desde dos puntos conocidos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Ejercicio de triangulación',
          content: `<p>Desde iglesia y puente, dos azimuts se cruzan en tu posición.</p>`,
          tip: 'Tercer punto mejora precisión si hay error de lectura.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ejercicio de triangulación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Triangulación en mapa?',
              options: [
                'Seguir estrellas de día',
                'Medir pH del suelo',
                'Cruzar direcciones desde puntos conocidos',
                'Contar pasos sin brújula',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ori-mod-2',
    title: 'Brújula y azimut',
    description: 'Uso de brújula baseplate y toma de rumbos',
    lessons: [
      {
        id: 'ori-l011',
        title: '11. Partes de la brújula',
        duration: '8 min',
        theory: `<p>Partes de la brújula es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, identifica cada parte en tu brújula antes de salir.</p>
        <p>Estudiar partes de la brújula con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Visor, línea de dirección, rosa y orientador magnético</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Partes de la brújula',
          content: `<p>Brújula baseplate permite trazar azimut en mapa.</p>`,
          tip: 'Comprueba que la aguja se mueva libremente sin burbujas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre partes de la brújula.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Para qué la línea de dirección?',
              options: [
                'Medir altitud',
                'Guardar agua',
                'Afilar lápiz',
                'Apuntar objetivo y leer rumbo',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l012',
        title: '12. Azimut vs rumbo',
        duration: '8 min',
        theory: `<p>Azimut vs rumbo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, toma azimut a cumbre visible y compáralo con mapa.</p>
        <p>Estudiar azimut vs rumbo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Azimut se mide 0–360° desde el norte en sentido horario</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Azimut vs rumbo',
          content: `<p>Azimut 90° apunta al este geográfico.</p>`,
          tip: 'No confundas rumbo náutico antiguo con azimut terrestre.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre azimut vs rumbo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Azimut 270° indica?',
              options: [
                'Sur',
                'Este',
                'Oeste',
                'Norte',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l013',
        title: '13. Compensar declinación',
        duration: '8 min',
        theory: `<p>Compensar declinación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, marca declinación en brújula si tiene escala ajustable.</p>
        <p>Estudiar compensar declinación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Sumar o restar declinación según hemisferio y convención del mapa</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Compensar declinación',
          content: `<p>En zona con declinación 10°E, ajusta antes de seguir rumbo.</p>`,
          tip: 'Revisa anualmente: la declinación cambia.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre compensar declinación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué ajustar declinación?',
              options: [
                'Evitar lluvia',
                'Convertir norte magnético a geográfico',
                'Medir temperatura',
                'Calibrar GPS',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l014',
        title: '14. Seguir un rumbo',
        duration: '8 min',
        theory: `<p>Seguir un rumbo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, elige árbol o roca en tu azimut y camina en zigzag mínimo.</p>
        <p>Estudiar seguir un rumbo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Escoger punto intermedio y caminar hacia él sin desviarte</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Seguir un rumbo',
          content: `<p>En niebla, avanza de punto en punto cada 50 m.</p>`,
          tip: 'Contar pasos ayuda entre puntos sin referencia.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre seguir un rumbo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Técnica en niebla?',
              options: [
                'Avanzar de referencia en referencia',
                'Correr en línea recta sin brújula',
                'Seguir arroyo cuesta abajo siempre',
                'Apagar GPS y adivinar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l015',
        title: '15. Brújula y mapa juntos',
        duration: '8 min',
        theory: `<p>Brújula y mapa juntos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, traza en mapa rumbo al refugio y comprueba en terreno.</p>
        <p>Estudiar brújula y mapa juntos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Trasladar azimut entre mapa y campo con orientación correcta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Brújula y mapa juntos',
          content: `<p>Línea en mapa alineada con brújula da rumbo a seguir.</p>`,
          tip: 'Mapa debe estar orientado antes de trazar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre brújula y mapa juntos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Primer paso al trasladar rumbo?',
              options: [
                'Medir temperatura',
                'Guardar brújula',
                'Orientar el mapa al norte',
                'Doblar mapa',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l016',
        title: '16. Desvío lateral',
        duration: '8 min',
        theory: `<p>Desvío lateral es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, practica desvío intencional de 50 m y corrección.</p>
        <p>Estudiar desvío lateral con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Regla del contraste: si te desvías, corrige volviendo al rumbo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Desvío lateral',
          content: `<p>Desviarse cuesta abajo es común siguiendo arroyos.</p>`,
          tip: 'No camines paralelo al rumbo sin corregir.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre desvío lateral.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Tras desviarte por obstáculo?',
              options: [
                'Tirar mapa',
                'Volver al rumbo original',
                'Seguir paralelo indefinidamente',
                'Invertir azimut 180° siempre',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l017',
        title: '17. Interferencias magnéticas',
        duration: '8 min',
        theory: `<p>Interferencias magnéticas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, aleja brújula del teléfono y hebillas al leer.</p>
        <p>Estudiar interferencias magnéticas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Metal, mochilas y cables pueden desviar la aguja</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Interferencias magnéticas',
          content: `<p>Leer brújula dentro del coche da error grande.</p>`,
          tip: 'Sostén brújula a la altura del pecho lejos de objetos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre interferencias magnéticas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Error común con móvil?',
              options: [
                'GPS desactivado',
                'Mapa mojado',
                'Botas nuevas',
                'Aguja desviada por magnetismo del teléfono',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l018',
        title: '18. Back bearing',
        duration: '8 min',
        theory: `<p>Back bearing es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, al llegar a meta, mide back bearing al punto de partida.</p>
        <p>Estudiar back bearing con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Azimut inverso ±180° confirma que volviste por la misma línea</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Back bearing',
          content: `<p>Si back bearing difiere >5°, revisa posición.</p>`,
          tip: 'Útil en regreso por niebla.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre back bearing.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Back bearing de 45°?',
              options: [
                '225°',
                '45°',
                '135°',
                '315°',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l019',
        title: '19. Brújula de espejo vs baseplate',
        duration: '8 min',
        theory: `<p>Brújula de espejo vs baseplate es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba ambos tipos si tu club de montaña los presta.</p>
        <p>Estudiar brújula de espejo vs baseplate con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Espejo permite señalización y lectura precisa a distancia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Brújula de espejo vs baseplate',
          content: `<p>Brújula con espejo ayuda en señales de socorro.</p>`,
          tip: 'Baseplate es más ligera para senderismo diario.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre brújula de espejo vs baseplate.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja brújula espejo?',
              options: [
                'No necesita norte',
                'Señalizar flash solar y lectura estable',
                'Flotar en agua',
                'Medir presión',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l020',
        title: '20. Práctica en parque',
        duration: '8 min',
        theory: `<p>Práctica en parque es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, diseña circuito de 2 km con waypoints en mapa impreso.</p>
        <p>Estudiar práctica en parque con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Recorrido corto con 5 cambios de rumbo registrados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Práctica en parque',
          content: `<p>Comparar hora estimada vs real calibra tu ritmo.</p>`,
          tip: 'Repasa errores al final: aprendizaje inmediato.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre práctica en parque.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cierre de práctica?',
              options: [
                'No anotar nada',
                'Ignorar desvíos',
                'Comparar ruta planificada con track GPS',
                'Esconder mapa',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ori-mod-3',
    title: 'Planificación de ruta',
    description: 'Distancia, tiempo, agua y puntos de retorno',
    lessons: [
      {
        id: 'ori-l021',
        title: '21. Regla de Naismith',
        duration: '8 min',
        theory: `<p>Regla de Naismith es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, estima hora de llegada a refugio con desnivel del perfil.</p>
        <p>Estudiar regla de naismith con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Tiempo = distancia/velocidad + 1 h cada 600 m de ascenso</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Regla de Naismith',
          content: `<p>10 km planos + 600 m subida ≈ tiempo base + 1 h extra.</p>`,
          tip: 'Ajusta por mochila pesada o terreno rocoso.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre regla de naismith.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué añade Naismith?',
              options: [
                'Distancia en millas náuticas',
                'Temperatura del agua',
                'Declinación magnética',
                'Tiempo extra por desnivel positivo',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l022',
        title: '22. Puntos de agua',
        duration: '8 min',
        theory: `<p>Puntos de agua es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, confirma en foros locales si manantial está seco en verano.</p>
        <p>Estudiar puntos de agua con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Marcar fuentes, arroyos y refugios en mapa antes de salir</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Puntos de agua',
          content: `<p>Arroyo en mapa puede estar seco en sequía.</p>`,
          tip: 'Lleva 1 L extra si hay duda.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre puntos de agua.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿En verano árido?',
              options: [
                'Beber solo al final',
                'Evitar mapa',
                'Verificar estado de fuentes recientemente',
                'Asumir agua en cada curva',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l023',
        title: '23. Punto de retorno',
        duration: '8 min',
        theory: `<p>Punto de retorno es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, fija retorno 2 h antes del anochecer en rutas largas.</p>
        <p>Estudiar punto de retorno con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Hora límite para volver aunque no se alcance la cumbre</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Punto de retorno',
          content: `<p>Grupo lento debe ajustar cumbre vs seguridad.</p>`,
          tip: 'Anochecer sin linterna aumenta riesgo de desorientación.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre punto de retorno.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué punto de retorno?',
              options: [
                'Correr de noche',
                'Priorizar seguridad sobre meta',
                'Llegar siempre a cumbre',
                'Evitar usar mapa',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l024',
        title: '24. Alternativas y escape',
        duration: '8 min',
        theory: `<p>Alternativas y escape es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, marca rutas alternativas más bajas en mapa.</p>
        <p>Estudiar alternativas y escape con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Plan B por valle sur si hay tormenta en cresta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Alternativas y escape',
          content: `<p>Cresta expuesta es peligrosa con rayos.</p>`,
          tip: 'Valle sur puede ser más cálido en invierno.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre alternativas y escape.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Plan B en tormenta eléctrica?',
              options: [
                'Descender a ruta baja y alejada de cresta',
                'Subir al punto más alto',
                'Quitar mapa',
                'Separarse del grupo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l025',
        title: '25. Equipamiento mínimo',
        duration: '8 min',
        theory: `<p>Equipamiento mínimo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa lista de verificación antes de cada salida.</p>
        <p>Estudiar equipamiento mínimo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Mapa, brújula, silbato, agua, capa, linterna y botiquín</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Equipamiento mínimo',
          content: `<p>Silbato tres pitidos es señal de socorro internacional.</p>`,
          tip: 'Chaqueta compacta aunque haga sol por la mañana.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre equipamiento mínimo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Señal internacional de socorro?',
              options: [
                'Silencio total',
                'Dos palmadas',
                'Tres pitidos cortos',
                'Un pitido largo',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l026',
        title: '26. Ritmo de grupo',
        duration: '8 min',
        theory: `<p>Ritmo de grupo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, acuerda paradas cada hora para hidratación.</p>
        <p>Estudiar ritmo de grupo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Velocidad del más lento define avance seguro</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Ritmo de grupo',
          content: `<p>Separarse sin radio es riesgo en bosque denso.</p>`,
          tip: 'Líder rota para compartir responsabilidad.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ritmo de grupo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Regla de grupo en montaña?',
              options: [
                'Sin plan de reunión',
                'Nadie se queda solo',
                'Cada uno a su ritmo sin avisar',
                'Correr separados',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l027',
        title: '27. Track GPX',
        duration: '8 min',
        theory: `<p>Track GPX es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, exporta GPX de práctica y revísalo en ordenador.</p>
        <p>Estudiar track gpx con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Registrar ruta real para comparar con plan</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Track GPX',
          content: `<p>Desvíos repetidos indican zonas confusas del mapa.</p>`,
          tip: 'Compartir GPX ayuda a otros con la misma ruta.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre track gpx.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Utilidad del track?',
              options: [
                'Sustituir brújula',
                'Evitar llevar mapa',
                'Medir temperatura',
                'Analizar desvíos y tiempos reales',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l028',
        title: '28. Permisos y acceso',
        duration: '8 min',
        theory: `<p>Permisos y acceso es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, consulta autoridad local y normativa de parque.</p>
        <p>Estudiar permisos y acceso con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Algunas zonas requieren permiso o tienen cierre estacional</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Permisos y acceso',
          content: `<p>Cierre por anidación de aves es común en primavera.</p>`,
          tip: 'Propiedad privada puede cruzar senda señalizada.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre permisos y acceso.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes de ruta en parque?',
              options: [
                'Verificar permisos y cierres',
                'Ignorar señales',
                'Acampar sin reglas',
                'Encender fuego siempre',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l029',
        title: '29. Meteo de montaña',
        duration: '8 min',
        theory: `<p>Meteo de montaña es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, consulta pronóstico por altitud, no solo valle.</p>
        <p>Estudiar meteo de montaña con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Temporales vespertinos y viento en cresta cambian plan</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Meteo de montaña',
          content: `<p>Nube lenticular indica viento fuerte arriba.</p>`,
          tip: 'Empieza temprano para evitar tormenta de tarde.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre meteo de montaña.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Señal de viento fuerte arriba?',
              options: [
                'Mapa seco',
                'Nubes lenticulares en cumbre',
                'Cielo despejado en valle',
                'Rocío matinal',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l030',
        title: '30. Briefing pre-salida',
        duration: '8 min',
        theory: `<p>Briefing pre-salida es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, 5 minutos en parking evitan malentendidos.</p>
        <p>Estudiar briefing pre-salida con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Repasar ruta, roles, emergencia y hora de retorno en grupo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Briefing pre-salida',
          content: `<p>Designa contacto en valle que espere llamada.</p>`,
          tip: 'Todos deben saber usar brújula básica.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre briefing pre-salida.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué incluir briefing?',
              options: [
                'Color de mochilas',
                'Música en altavoz',
                'Ruta, retorno y contacto de emergencia',
                'Solo menú de comida',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ori-mod-4',
    title: 'GPS y navegación mixta',
    description: 'Combinar mapa, brújula y receptor GPS',
    lessons: [
      {
        id: 'ori-l031',
        title: '31. Limitaciones del GPS',
        duration: '8 min',
        theory: `<p>Limitaciones del GPS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no dependas solo del GPS en cañón estrecho.</p>
        <p>Estudiar limitaciones del gps con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Batería, señal en cañones y precisión ±3–10 m</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Limitaciones del GPS',
          content: `<p>GPS puede errar 20 m bajo rocas.</p>`,
          tip: 'Waypoints no reemplazan interpretación del mapa.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre limitaciones del gps.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿GPS en cañón profundo?',
              options: [
                'Siempre perfecto',
                'No usa batería',
                'Sustituye declinación',
                'Señal débil o multipath',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l032',
        title: '32. Waypoints y rutas',
        duration: '8 min',
        theory: `<p>Waypoints y rutas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, crea ruta con 4 waypoints antes de salir.</p>
        <p>Estudiar waypoints y rutas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Marcar refugio, cruce y coche como puntos numerados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Waypoints y rutas',
          content: `<p>Waypoint en cruce de arroyo evita pasarlo de largo.</p>`,
          tip: 'Nombres claros: WP3_CRUCE sur.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre waypoints y rutas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Buen waypoint?',
              options: [
                'Solo el parking',
                'Sin nombre',
                'Punto único fácil de identificar en mapa y campo',
                'Cualquier punto al azar',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l033',
        title: '33. UTM en GPS',
        duration: '8 min',
        theory: `<p>UTM en GPS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, verifica zona UTM en menú del GPS y mapa.</p>
        <p>Estudiar utm en gps con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Configurar mismo datum y zona que mapa impreso</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: UTM en GPS',
          content: `<p>Datum WGS84 es estándar actual.</p>`,
          tip: 'Cambiar datum sin darte cuenta desplaza posición.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre utm en gps.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Datum común en GPS moderno?',
              options: [
                'Local arbitrario',
                'WGS84',
                'NAD27 solo',
                'Sin datum',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l034',
        title: '34. Navegación mixta',
        duration: '8 min',
        theory: `<p>Navegación mixta es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, practica llegar a waypoint solo con mapa y brújula.</p>
        <p>Estudiar navegación mixta con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: GPS confirma posición; brújula guía si falla electrónica</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Navegación mixta',
          content: `<p>Pantalla rota no debe dejarte sin orientación.</p>`,
          tip: 'Mapa impreso en funda plástica sobrevive lluvia.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre navegación mixta.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Si GPS se apaga?',
              options: [
                'Continuar con mapa y brújula',
                'Quedarse quieto indefinidamente',
                'Correr cuesta abajo',
                'Tirar mapa',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l035',
        title: '35. Geocaching y práctica',
        duration: '8 min',
        theory: `<p>Geocaching y práctica es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, busca cache de dificultad baja para practicar UTM.</p>
        <p>Estudiar geocaching y práctica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Caches en parques entrenan lectura de coordenadas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Geocaching y práctica',
          content: `<p>Geocaching mejora precisión leyendo coordenadas.</p>`,
          tip: 'Respeta entorno: no dañes vegetación.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre geocaching y práctica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Beneficio formativo?',
              options: [
                'Sustituir botiquín',
                'Correr sin brújula',
                'Practicar coordenadas en terreno real',
                'Evitar mapas',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l036',
        title: '36. Smartphone como GPS',
        duration: '8 min',
        theory: `<p>Smartphone como GPS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, descarga mapas offline y cierra apps en ruta.</p>
        <p>Estudiar smartphone como gps con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Modo avión + GPS ahorra batería; lleva powerbank</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Smartphone como GPS',
          content: `<p>Pantalla en cold drain agota batería rápido.</p>`,
          tip: 'Fundas táctiles permiten usar mapa con guantes finos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre smartphone como gps.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ahorrar batería GPS móvil?',
              options: [
                'Bluetooth encendido sin uso',
                'Modo avión con GPS activo',
                'Brillo máximo siempre',
                'Streaming de video',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l037',
        title: '37. Registrar emergencia',
        duration: '8 min',
        theory: `<p>Registrar emergencia es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, practica leer UTM actual y dictarla en simulacro.</p>
        <p>Estudiar registrar emergencia con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Coordenadas exactas acortan rescate</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Registrar emergencia',
          content: `<p>Rescate aéreo necesita posición precisa y descripción.</p>`,
          tip: 'Silbato + coordenadas + hora.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre registrar emergencia.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué dar a rescate?',
              options: [
                'Solo nombre',
                'Color de chaqueta únicamente',
                'Nada',
                'Coordenadas, número de personas y lesiones',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l038',
        title: '38. Errores GPS comunes',
        duration: '8 min',
        theory: `<p>Errores GPS comunes es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, comprueba que posición GPS coincide con terreno visible.</p>
        <p>Estudiar errores gps comunes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Confiar en flecha sin mapa ni contexto</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Errores GPS comunes',
          content: `<p>Flecha puede apuntar mal con brújula móvil descalibrada.</p>`,
          tip: 'Recalibra brújula móvil con movimiento en 8.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre errores gps comunes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Posición GPS no coincide con mapa?',
              options: [
                'Revisar datum, zona y orientación del mapa',
                'Mapa siempre incorrecto',
                'GPS siempre mentira',
                'Ignorar y correr',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l039',
        title: '39. Track vs ruta planificada',
        duration: '8 min',
        theory: `<p>Track vs ruta planificada es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, analiza desvío en cruce confuso tras la salida.</p>
        <p>Estudiar track vs ruta planificada con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Superponer GPX plan y real en software</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Track vs ruta planificada',
          content: `<p>Desvíos sistemáticos indican mapa desactualizado.</p>`,
          tip: 'Informa a club local de errores cartográficos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre track vs ruta planificada.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Desvío repetido en mismo cruce?',
              options: [
                'Sin importancia',
                'Posible error de mapa o señalización',
                'GPS siempre falla',
                'Brújula innecesaria',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l040',
        title: '40. Integración en cuaderno',
        duration: '8 min',
        theory: `<p>Integración en cuaderno es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, formato: WP2 14U 543210 2345678 10:45 collado.</p>
        <p>Estudiar integración en cuaderno con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Anotar UTM, hora y observaciones en cada waypoint</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Integración en cuaderno',
          content: `<p>Cuaderno + GPX dan trazabilidad completa.</p>`,
          tip: 'Backup en foto del cuaderno al final.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre integración en cuaderno.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Registro completo?',
              options: [
                'Sin hora',
                'Sin descripción',
                'Coordenadas, hora y descripción del punto',
                'Solo selfie',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ori-mod-5',
    title: 'Seguridad y rescate',
    description: 'Prevención, señales y actuación en emergencia',
    lessons: [
      {
        id: 'ori-l041',
        title: '41. Capas de ropa',
        duration: '8 min',
        theory: `<p>Capas de ropa es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ajusta capas en collado antes de enfriarte.</p>
        <p>Estudiar capas de ropa con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Base, aislamiento y shell contra viento y lluvia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Capas de ropa',
          content: `<p>Sudor mojado + viento = hipotermia rápida.</p>`,
          tip: 'Shell impermeable también corta viento.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre capas de ropa.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué capas?',
              options: [
                'Llevar una sola chaqueta gruesa siempre',
                'Evitar gorro',
                'No cambiar en collado',
                'Regular temperatura y humedad corporal',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l042',
        title: '42. Hipotermia e hipertermia',
        duration: '8 min',
        theory: `<p>Hipotermia e hipertermia es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, reconoce temblor, confusión y pulso rápido.</p>
        <p>Estudiar hipotermia e hipertermia con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Temperatura corporal fuera de rango es emergencia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Hipotermia e hipertermia',
          content: `<p>Hipotermia leve: abrigo seco y bebida caliente si consciente.</p>`,
          tip: 'Golpe de calor: sombra, enfriar y hidratar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre hipotermia e hipertermia.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Hipotermia leve?',
              options: [
                'Mucha sed únicamente',
                'Picor leve',
                'Temblor, piel fría y fatiga',
                'Piel caliente seca',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l043',
        title: '43. Señales de socorro',
        duration: '8 min',
        theory: `<p>Señales de socorro es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, practica señal con espejo de brújula hacia parking.</p>
        <p>Estudiar señales de socorro con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Tres de anything; espejo; silbato; SMS si hay cobertura</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Señales de socorro',
          content: `<p>SOS en montaña: repetición de tres señales.</p>`,
          tip: 'Panel naranja visible desde aire ayuda.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre señales de socorro.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Señal visual internacional?',
              options: [
                'Silencio',
                'Tres flashes o tres banderas',
                'Un flash',
                'Luces aleatorias',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l044',
        title: '44. Botiquín de montaña',
        duration: '8 min',
        theory: `<p>Botiquín de montaña es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, revisa caducidad cada temporada.</p>
        <p>Estudiar botiquín de montaña con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Vendajes, analgésico, blister care, termo manta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Botiquín de montaña',
          content: `<p>Termo manta compacta evita pérdida de calor.</p>`,
          tip: 'Saber usar vendaje es tan importante como llevarlo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre botiquín de montaña.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Item clave botiquín montaña?',
              options: [
                'Vendaje elástico y termo manta',
                'Perfume',
                'Libro de cocina',
                'Repelente solo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l045',
        title: '45. Lesiones comunes',
        duration: '8 min',
        theory: `<p>Lesiones comunes es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, aprende vendaje en talón para ampollas.</p>
        <p>Estudiar lesiones comunes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Esguince, ampolla y roce por desnivel</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Lesiones comunes',
          content: `<p>Taping preventivo en talón evita parar ruta.</p>`,
          tip: 'Bastones reducen carga en rodillas bajada.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre lesiones comunes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Prevención ampollas?',
              options: [
                'No cortar uñas',
                'Sin calcetines',
                'Calcetines secos y calzado probado',
                'Zapatos nuevos en ruta larga',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'ori-l046',
        title: '46. Noche inesperada',
        duration: '8 min',
        theory: `<p>Noche inesperada es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lleva linterna aunque vuelvas de día.</p>
        <p>Estudiar noche inesperada con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Linterna frontal, refugio improvisado y no separarse</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Noche inesperada',
          content: `<p>Abrigo de emergencia pesa poco y salva vidas.</p>`,
          tip: 'Acampada no planificada requiere informar contacto.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre noche inesperada.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Si oscurece lejos del coche?',
              options: [
                'Tirar mochila',
                'Refugio, calor y avisar si es posible',
                'Seguir corriendo sin luz',
                'Separarse del grupo',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l047',
        title: '47. Fauna y riesgos locales',
        duration: '8 min',
        theory: `<p>Fauna y riesgos locales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, infórmate de protocolo local antes del viaje.</p>
        <p>Estudiar fauna y riesgos locales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Serpientes, osos o barrancos según región</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Fauna y riesgos locales',
          content: `<p>En área con osos, usa campana y guarda comida.</p>`,
          tip: 'No te acerques a crías de fauna grande.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre fauna y riesgos locales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿En zona con osos?',
              options: [
                'Correr silencioso con comida abierta',
                'Acercarse a crías',
                'Dejar basura',
                'Hacer ruido y guardar olores de comida',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'ori-l048',
        title: '48. Comunicación de emergencia',
        duration: '8 min',
        theory: `<p>Comunicación de emergencia es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, guarda número de rescate de montaña en contactos.</p>
        <p>Estudiar comunicación de emergencia con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: 112 o número local; radio en zonas remotas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Comunicación de emergencia',
          content: `<p>SMS puede funcionar con señal débil cuando llamada no.</p>`,
          tip: 'Dicta coordenadas despacio y repite.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre comunicación de emergencia.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué decir al rescate?',
              options: [
                'Ubicación, personas, lesiones y clima',
                'Solo nombre',
                'Hora de desayuno',
                'Marca de mochila',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ori-l049',
        title: '49. Dejar rastro',
        duration: '8 min',
        theory: `<p>Dejar rastro es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, deja papel en parabrisas con ruta y teléfono.</p>
        <p>Estudiar dejar rastro con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Nota en coche con hora retorno; track compartido</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Dejar rastro',
          content: `<p>Contacto en valle llama si pasas hora límite.</p>`,
          tip: 'Apps de seguridad comparten ubicación temporal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dejar rastro.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Contacto en valle?',
              options: [
                'Sin teléfono',
                'Persona que actúa si no hay check-in',
                'Nadie',
                'Desconocido aleatorio',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'ori-l050',
        title: '50. Post-mortem de ruta',
        duration: '8 min',
        theory: `<p>Post-mortem de ruta es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el terreno y la navegación y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, reunión 10 min tras ruta con grupo.</p>
        <p>Estudiar post-mortem de ruta con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en rutas reales con mapa y brújula.</p>
        <ul><li>Concepto central: Revisar qué funcionó y errores para próxima salida</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en rutas reales con mapa y brújula</li></ul>`,
        example: {
          title: 'Ejemplo: Post-mortem de ruta',
          content: `<p>Errores documentados enseñan más que éxito sin reflexión.</p>`,
          tip: 'Actualiza tiempos Naismith con tu ritmo real.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre post-mortem de ruta.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cierre formativo?',
              options: [
                'No registrar tiempos',
                'Esconder mapa',
                'Lecciones aprendidas y ajustes al plan',
                'Olvidar todo',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
];
