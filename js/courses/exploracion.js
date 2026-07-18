export const CURRICULUM = [
  {
    id: 'exp-mod-1',
    title: 'Mapas topográficos',
    description: 'Lectura de mapas, escala y simbología',
    lessons: [
      {
        id: 'exp-l001',
        title: '1. Tipos de mapas',
        duration: '8 min',
        theory: `<p>Mapas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, topográficos, políticos, temáticos y cartas náuticas/aéreas.</p>
        <p>Estudiar tipos de mapas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: topográficos, políticos, temáticos y cartas náuticas/aéreas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Tipos de mapas',
          content: `<p>Carta INEGI 1:50 000 muestra senderos y curvas detalladas.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar tipos de mapas en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tipos de mapas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Mapa topográfico muestra…',
              options: [
                'Relieve y terreno',
                'Solo fronteras',
                'Solo clima',
                'Solo población',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l002',
        title: '2. Escala cartográfica',
        duration: '8 min',
        theory: `<p>Escala es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, 1:24 000 significa 1 cm = 240 m en terreno.</p>
        <p>Estudiar escala cartográfica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: 1:24 000 significa 1 cm = 240 m en terreno</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Escala cartográfica',
          content: `<p>Medir 3 cm en mapa 1:24k = 720 m reales.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar escala cartográfica en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre escala cartográfica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '1:50 000 significa…',
              options: [
                '1 unidad mapa = 50 000 terreno',
                '1:1',
                'Sin escala',
                'Solo digital',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l003',
        title: '3. Curvas de nivel',
        duration: '8 min',
        theory: `<p>Curvas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, líneas de igual elevación; índice cada quinto intervalo.</p>
        <p>Estudiar curvas de nivel con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: líneas de igual elevación; índice cada quinto intervalo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Curvas de nivel',
          content: `<p>Colinas: círculos concéntricos; cañón: V apuntando aguas arriba.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar curvas de nivel en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre curvas de nivel.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'V en curvas apuntando arriba…',
              options: [
                'Indica valle',
                'Indica cima',
                'Indica lago',
                'Indica ciudad',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l004',
        title: '4. Coordenadas UTM',
        duration: '8 min',
        theory: `<p>UTM es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, cuadrícula métrica en zonas; easting y northing.</p>
        <p>Estudiar coordenadas utm con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: cuadrícula métrica en zonas; easting y northing</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Coordenadas UTM',
          content: `<p>GPS en UTM 14R facilita ubicar punto en mapa impreso.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar coordenadas utm en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre coordenadas utm.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'UTM usa…',
              options: [
                'Metros en cuadrícula',
                'Grados solo',
                'Millas náuticas',
                'Pulgadas',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l005',
        title: '5. Latitud y longitud',
        duration: '8 min',
        theory: `<p>Lat/Lon es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, latitud paralelos; longitud meridianos; minutos y segundos o decimal.</p>
        <p>Estudiar latitud y longitud con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: latitud paralelos; longitud meridianos; minutos y segundos o decimal</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Latitud y longitud',
          content: `<p>CDMX ~19.43°N, 99.13°W en decimal degrees.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar latitud y longitud en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre latitud y longitud.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Latitud mide…',
              options: [
                'Norte-sur',
                'Este-oeste',
                'Altitud',
                'Profundidad',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l006',
        title: '6. Orientación del mapa',
        duration: '8 min',
        theory: `<p>Orientar es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, alinear norte mapa con norte magnético o geográfico.</p>
        <p>Estudiar orientación del mapa con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: alinear norte mapa con norte magnético o geográfico</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Orientación del mapa',
          content: `<p>Rotar mapa hasta que brújula coincida con flecha norte.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar orientación del mapa en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre orientación del mapa.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Orientar mapa alinea…',
              options: [
                'Norte mapa con brújula',
                'Sur con sol',
                'Este con luna',
                'Nada',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l007',
        title: '7. Simbología cartográfica',
        duration: '8 min',
        theory: `<p>Símbolos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, caminos, ferrocarril, vegetación, edificios estandarizados.</p>
        <p>Estudiar simbología cartográfica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: caminos, ferrocarril, vegetación, edificios estandarizados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Simbología cartográfica',
          content: `<p>Línea punteada roja puede ser sendero en carta de montaña.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar simbología cartográfica en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre simbología cartográfica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Símbolos cartográficos…',
              options: [
                'Estandarizan elementos',
                'Son aleatorios',
                'Sin leyenda',
                'Solo color',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l008',
        title: '8. Perfil topográfico',
        duration: '8 min',
        theory: `<p>Perfil es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, corte transversal muestra elevación a lo largo de ruta.</p>
        <p>Estudiar perfil topográfico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: corte transversal muestra elevación a lo largo de ruta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Perfil topográfico',
          content: `<p>Papel bajo línea de ruta transfiere curvas a perfil de elevación.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar perfil topográfico en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre perfil topográfico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Perfil topográfico muestra…',
              options: [
                'Elevación en ruta',
                'Solo clima',
                'Solo fauna',
                'Solo población',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l009',
        title: '9. Mapas digitales',
        duration: '8 min',
        theory: `<p>Digitales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, GeoPDF, apps offline y capas descargables.</p>
        <p>Estudiar mapas digitales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: GeoPDF, apps offline y capas descargables</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Mapas digitales',
          content: `<p>Avenza Maps con geopdf INEGI sin señal celular.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar mapas digitales en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mapas digitales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Mapa offline útil porque…',
              options: [
                'Funciona sin señal',
                'Requiere siempre 5G',
                'No usa GPS',
                'Solo decoración',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l010',
        title: '10. Errores comunes',
        duration: '8 min',
        theory: `<p>Errores es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, ignorar declinación, escala incorrecta, mapa viejo.</p>
        <p>Estudiar errores comunes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: ignorar declinación, escala incorrecta, mapa viejo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Errores comunes',
          content: `<p>Sendero nuevo no aparece en carta de 1990.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar errores comunes en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre errores comunes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Declinación corrige…',
              options: [
                'Magnético vs geográfico',
                'Altitud vs presión',
                'Agua vs fuego',
                'Día vs noche',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'exp-mod-2',
    title: 'Brújula y navegación terrestre',
    description: 'Azimut, rumbo y navegación en campo',
    lessons: [
      {
        id: 'exp-l011',
        title: '11. Partes de la brújula',
        duration: '8 min',
        theory: `<p>Brújula es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, caja, aguja, orienting arrow, baseplate, declination scale.</p>
        <p>Estudiar partes de la brújula con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: caja, aguja, orienting arrow, baseplate, declination scale</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Partes de la brújula',
          content: `<p>Brújula Suunto MC-2 con espejo para apuntar.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar partes de la brújula en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre partes de la brújula.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Orienting arrow gira con…',
              options: [
                'Caja de brújula',
                'Aguja sola',
                'Mapa',
                'GPS',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l012',
        title: '12. Azimut y rumbo',
        duration: '8 min',
        theory: `<p>Azimut es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, ángulo 0-360° desde norte.</p>
        <p>Estudiar azimut y rumbo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: ángulo 0-360° desde norte</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Azimut y rumbo',
          content: `<p>Objetivo al NE ≈ azimut 45°.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar azimut y rumbo en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre azimut y rumbo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Azimut mide desde…',
              options: [
                'Norte',
                'Sur',
                'Este',
                'Oeste',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l013',
        title: '13. Tomar bearing a objetivo',
        duration: '8 min',
        theory: `<p>Bearing es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, apuntar flecha de orientación al objetivo y leer grados.</p>
        <p>Estudiar tomar bearing a objetivo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: apuntar flecha de orientación al objetivo y leer grados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Tomar bearing a objetivo',
          content: `<p>Ver cumbre, alinear flecha, leer 280° al pico.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar tomar bearing a objetivo en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tomar bearing a objetivo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Para bearing al objeto…',
              options: [
                'Flecha orientación al objeto',
                'Aguja al objeto',
                'Mapa al suelo',
                'Cerrar ojos',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l014',
        title: '14. Seguir azimut',
        duration: '8 min',
        theory: `<p>Seguir es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, girar caja hasta N roja en N flecha; caminar dirección flecha.</p>
        <p>Estudiar seguir azimut con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: girar caja hasta N roja en N flecha; caminar dirección flecha</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Seguir azimut',
          content: `<p>En niebla, pasos cortos revisando brújula cada 50 m.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar seguir azimut en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre seguir azimut.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Seguir azimut 90° es…',
              options: [
                'Hacia este',
                'Hacia oeste',
                'Hacia norte',
                'Hacia sur',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l015',
        title: '15. Triangulación',
        duration: '8 min',
        theory: `<p>Triangulación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, dos o más bearings desde puntos conocidos ubican posición.</p>
        <p>Estudiar triangulación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: dos o más bearings desde puntos conocidos ubican posición</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Triangulación',
          content: `<p>Desde collado y río, cruzar azimuts en mapa.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar triangulación en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre triangulación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Triangulación necesita…',
              options: [
                'Múltiples referencias',
                'Un solo árbol',
                'Solo GPS roto',
                'Solo brújula sin mapa',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l016',
        title: '16. Declinación magnética',
        duration: '8 min',
        theory: `<p>Declinación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, diferencia norte magnético y geográfico varía por lugar y tiempo.</p>
        <p>Estudiar declinación magnética con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: diferencia norte magnético y geográfico varía por lugar y tiempo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Declinación magnética',
          content: `<p>México puede requerir ajuste este u oeste según zona.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar declinación magnética en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre declinación magnética.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Declinación es…',
              options: [
                'Diferencia magnético-geográfico',
                'Altitud',
                'Presión',
                'Humedad',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l017',
        title: '17. Handrail y catching features',
        duration: '8 min',
        theory: `<p>Handrail es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, seguir río, cresta o camino como guía; objetivo grande difícil errar.</p>
        <p>Estudiar handrail y catching features con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: seguir río, cresta o camino como guía; objetivo grande difícil errar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Handrail y catching features',
          content: `<p>Caminar río aguas abajo hasta puente (catching feature).</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar handrail y catching features en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre handrail y catching features.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Handrail es…',
              options: [
                'Elemento lineal guía',
                'Tipo de nudo',
                'Comida',
                'Fuego',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l018',
        title: '18. Pacing y conteo',
        duration: '8 min',
        theory: `<p>Pacing es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, pasos a distancia conocida en terreno plano.</p>
        <p>Estudiar pacing y conteo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: pasos a distancia conocida en terreno plano</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Pacing y conteo',
          content: `<p>100 pasos = 80 m; contar en cordón de cuentas.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar pacing y conteo en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre pacing y conteo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Pacing mide…',
              options: [
                'Distancia aproximada',
                'Altitud exacta',
                'Velocidad viento',
                'Temperatura',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l019',
        title: '19. Navegación nocturna',
        duration: '8 min',
        theory: `<p>Nocturna es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, más difícil; usa estrellas, linterna y referencias cercanas.</p>
        <p>Estudiar navegación nocturna con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: más difícil; usa estrellas, linterna y referencias cercanas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Navegación nocturna',
          content: `<p>Polaris indica norte en hemisferio norte.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar navegación nocturna en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre navegación nocturna.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Polaris indica…',
              options: [
                'Norte aproximado',
                'Sur',
                'Este',
                'Oeste exacto GPS',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l020',
        title: '20. Cuando estás perdido',
        duration: '8 min',
        theory: `<p>Perdido es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, STOP, retroceder a último punto conocido, no seguir errando.</p>
        <p>Estudiar cuando estás perdido con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: STOP, retroceder a último punto conocido, no seguir errando</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Cuando estás perdido',
          content: `<p>Regresar 200 m a bifurcación reconocida.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar cuando estás perdido en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cuando estás perdido.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Si perdido primero…',
              options: [
                'Detenerse y evaluar',
                'Correr al azar',
                'Separarse grupo',
                'Tirar mapa',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'exp-mod-3',
    title: 'GPS y navegación digital',
    description: 'Receivers GPS, tracks, waypoints y limitaciones',
    lessons: [
      {
        id: 'exp-l021',
        title: '21. Cómo funciona GPS',
        duration: '8 min',
        theory: `<p>GPS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, trilateración con satélites; precisión típica 3-10 m.</p>
        <p>Estudiar cómo funciona gps con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: trilateración con satélites; precisión típica 3-10 m</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Cómo funciona GPS',
          content: `<p>Más satélites visibles = fix más preciso.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar cómo funciona gps en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cómo funciona gps.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'GPS usa…',
              options: [
                'Satélites',
                'Brújula magnética sola',
                'Mapa papel',
                'Radio AM',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l022',
        title: '22. Waypoints y tracks',
        duration: '8 min',
        theory: `<p>Waypoints es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, punto guardado; track registra ruta recorrida.</p>
        <p>Estudiar waypoints y tracks con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: punto guardado; track registra ruta recorrida</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Waypoints y tracks',
          content: `<p>Waypoint "campamento" y track de regreso.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar waypoints y tracks en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre waypoints y tracks.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Track registra…',
              options: [
                'Ruta recorrida',
                'Solo altitud',
                'Solo clima',
                'Solo foto',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l023',
        title: '23. Coordenadas en GPS',
        duration: '8 min',
        theory: `<p>Coordenadas GPS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, WGS84 lat/lon o UTM; coherencia con mapa.</p>
        <p>Estudiar coordenadas en gps con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: WGS84 lat/lon o UTM; coherencia con mapa</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Coordenadas en GPS',
          content: `<p>Configurar mismo datum que carta impresa.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar coordenadas en gps en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre coordenadas en gps.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Datum común GPS…',
              options: [
                'WGS84',
                'Solo local',
                'Sin datum',
                'Lunar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l024',
        title: '24. Limitaciones GPS',
        duration: '8 min',
        theory: `<p>Limitaciones es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, cañones, bosque denso y batería limitan.</p>
        <p>Estudiar limitaciones gps con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: cañones, bosque denso y batería limitan</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Limitaciones GPS',
          content: `<p>Cañón estrecho bloquea señal satelital.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar limitaciones gps en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre limitaciones gps.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'GPS falla en…',
              options: [
                'Cañones profundos',
                'Campo abierto',
                'Playa despejada',
                'Cima montaña',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l025',
        title: '25. GNSS multi-constelación',
        duration: '8 min',
        theory: `<p>GNSS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, GPS, GLONASS, Galileo mejoran fix.</p>
        <p>Estudiar gnss multi-constelación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: GPS, GLONASS, Galileo mejoran fix</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: GNSS multi-constelación',
          content: `<p>Garmin con multi-GNSS en selva densa.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar gnss multi-constelación en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre gnss multi-constelación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Multi-GNSS…',
              options: [
                'Mejora precisión',
                'Elimina batería',
                'Solo decoración',
                'Sustituye mapa',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l026',
        title: '26. Apps de senderismo',
        duration: '8 min',
        theory: `<p>Apps es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, AllTrails, OsmAnd, Gaia con mapas offline.</p>
        <p>Estudiar apps de senderismo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: AllTrails, OsmAnd, Gaia con mapas offline</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Apps de senderismo',
          content: `<p>Descargar región antes de perder señal.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar apps de senderismo en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre apps de senderismo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Mapa offline en app…',
              options: [
                'Funciona sin datos',
                'Requiere WiFi siempre',
                'No usa GPS',
                'Solo urbano',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l027',
        title: '27. PLB y SOS satelital',
        duration: '8 min',
        theory: `<p>PLB es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, baliza personal alerta rescate vía satélite.</p>
        <p>Estudiar plb y sos satelital con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: baliza personal alerta rescate vía satélite</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: PLB y SOS satelital',
          content: `<p>Garmin inReach envía SOS con coordenadas.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar plb y sos satelital en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre plb y sos satelital.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'PLB sirve para…',
              options: [
                'Emergencia rescate',
                'Música',
                'Fotos',
                'Clima',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l028',
        title: '28. Batería y backup',
        duration: '8 min',
        theory: `<p>Batería es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, power bank, pilas extra; papel como respaldo.</p>
        <p>Estudiar batería y backup con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: power bank, pilas extra; papel como respaldo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Batería y backup',
          content: `<p>Brújula y mapa si GPS muere en tormenta.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar batería y backup en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre batería y backup.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Backup navegación…',
              options: [
                'Mapa y brújula',
                'Solo teléfono',
                'Solo memoria',
                'Nada',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l029',
        title: '29. Geocaching y práctica',
        duration: '8 min',
        theory: `<p>Geocaching es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, juego de waypoints entrena uso GPS.</p>
        <p>Estudiar geocaching y práctica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: juego de waypoints entrena uso GPS</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Geocaching y práctica',
          content: `<p>Buscar cache en parque mejora lectura coordenadas.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar geocaching y práctica en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre geocaching y práctica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Geocaching entrena…',
              options: [
                'Uso de coordenadas',
                'Solo cocina',
                'Solo nados',
                'Solo vuelo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l030',
        title: '30. Privacidad y tracks',
        duration: '8 min',
        theory: `<p>Privacidad es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, compartir ubicación con cuidado; borrar metadatos.</p>
        <p>Estudiar privacidad y tracks con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: compartir ubicación con cuidado; borrar metadatos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Privacidad y tracks',
          content: `<p>No publicar waypoint de campamento secreto vulnerable.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar privacidad y tracks en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre privacidad y tracks.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Compartir ubicación en vivo…',
              options: [
                'Requiere cuidado privacidad',
                'Siempre público',
                'Sin riesgo',
                'Prohibido siempre',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'exp-mod-4',
    title: 'Leave No Trace',
    description: 'Siete principios de mínimo impacto',
    lessons: [
      {
        id: 'exp-l031',
        title: '31. Principios LNT',
        duration: '8 min',
        theory: `<p>LNT es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, planificar, superficie resistente, residuos, naturaleza, fuego, fauna, otros.</p>
        <p>Estudiar principios lnt con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: planificar, superficie resistente, residuos, naturaleza, fuego, fauna, otros</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Principios LNT',
          content: `<p>Los 7 principios guían recreación responsable.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar principios lnt en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre principios lnt.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'LNT significa…',
              options: [
                'No dejar rastro',
                'Dejar basura',
                'Cazar libre',
                'Gritar siempre',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l032',
        title: '32. Planificar y preparar',
        duration: '8 min',
        theory: `<p>Planificación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, permisos, clima, equipo, grupo size.</p>
        <p>Estudiar planificar y preparar con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: permisos, clima, equipo, grupo size</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Planificar y preparar',
          content: `<p>Reservar permiso parque con semanas de anticipación.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar planificar y preparar en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre planificar y preparar.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Planificar incluye…',
              options: [
                'Permisos y clima',
                'Solo impulso',
                'Ignorar reglas',
                'Sin agua',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l033',
        title: '33. Superficies resistentes',
        duration: '8 min',
        theory: `<p>Superficies es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, rocas, grava, suelo seco vs vegetación frágil.</p>
        <p>Estudiar superficies resistentes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: rocas, grava, suelo seco vs vegetación frágil</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Superficies resistentes',
          content: `<p>Acampar en zona ya impactada vs pradera virgen.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar superficies resistentes en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre superficies resistentes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Acampar en…',
              options: [
                'Zona ya impactada',
                'Pradera virgen',
                'Madriguera',
                'Arroyo cauce',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l034',
        title: '34. Dispersión de residuos',
        duration: '8 min',
        theory: `<p>Residuos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, empacar basura; baño cat hole 15-20 cm, 60 m del agua.</p>
        <p>Estudiar dispersión de residuos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: empacar basura; baño cat hole 15-20 cm, 60 m del agua</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Dispersión de residuos',
          content: `<p>Papel higiénico empacado o quemado según reglas.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar dispersión de residuos en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dispersión de residuos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Cat hole profundidad…',
              options: [
                '15-20 cm',
                '1 m',
                'Superficie',
                'En río',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l035',
        title: '35. Dejar lo que encuentras',
        duration: '8 min',
        theory: `<p>Dejar es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, no recolectar fósiles, plantas, artefactos.</p>
        <p>Estudiar dejar lo que encuentras con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: no recolectar fósiles, plantas, artefactos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Dejar lo que encuentras',
          content: `<p>Fotografiar flor rara en lugar de arrancarla.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar dejar lo que encuentras en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dejar lo que encuentras.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Encontrar artefacto…',
              options: [
                'Fotografiar y reportar',
                'Llevártelo',
                'Vender',
                'Enterrar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l036',
        title: '36. Fuego mínimo impacto',
        duration: '8 min',
        theory: `<p>Fuego LNT es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, estufas vs fogata; usar anillos existentes.</p>
        <p>Estudiar fuego mínimo impacto con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: estufas vs fogata; usar anillos existentes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Fuego mínimo impacto',
          content: `<p>Estufa en zona prohibida fuego vs fogata ilegal.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar fuego mínimo impacto en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre fuego mínimo impacto.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'En área sin fuego usa…',
              options: [
                'Estufa',
                'Fogata grande',
                'Gasolina',
                'Quemar basura',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l037',
        title: '37. Respetar fauna',
        duration: '8 min',
        theory: `<p>Fauna LNT es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, observar distancia, guardar comida, no alimentar.</p>
        <p>Estudiar respetar fauna con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: observar distancia, guardar comida, no alimentar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Respetar fauna',
          content: `<p>Oso: canister bear-proof y cocinar lejos de tienda.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar respetar fauna en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre respetar fauna.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Comida en campamento…',
              options: [
                'Almacenar seguro',
                'Dentro tienda',
                'Suelo abierto',
                'Cerca madriguera',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l038',
        title: '38. Consideración a otros',
        duration: '8 min',
        theory: `<p>Otros es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, silencio, música, sendero compartido.</p>
        <p>Estudiar consideración a otros con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: silencio, música, sendero compartido</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Consideración a otros',
          content: `<p>Auriculares en lugar de bocina en sendero.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar consideración a otros en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre consideración a otros.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'En senderio compartido…',
              options: [
                'Ceder paso y saludar',
                'Empujar',
                'Bloquear',
                'Gritar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l039',
        title: '39. LNT en grupo grande',
        duration: '8 min',
        theory: `<p>Grupos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, dividir en subgrupos, rotar sitios, educar.</p>
        <p>Estudiar lnt en grupo grande con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: dividir en subgrupos, rotar sitios, educar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: LNT en grupo grande',
          content: `<p>Grupo 20 divide en 4 de 5 en campamentos distintos.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar lnt en grupo grande en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre lnt en grupo grande.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Grupo grande debe…',
              options: [
                'Minimizar impacto colectivo',
                'Un solo fuego gigante',
                'Toda pradera',
                'Ignorar LNT',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l040',
        title: '40. LNT urbano y local',
        duration: '8 min',
        theory: `<p>Urbano es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, parques urbanos también requieren cuidado.</p>
        <p>Estudiar lnt urbano y local con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: parques urbanos también requieren cuidado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: LNT urbano y local',
          content: `<p>No alimentar patos pan; basura en bote.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar lnt urbano y local en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre lnt urbano y local.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'LNT aplica…',
              options: [
                'Campo y parques urbanos',
                'Solo wilderness',
                'Solo océano',
                'Nunca',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'exp-mod-5',
    title: 'Expediciones y logística',
    description: 'Planificación de travesías largas y seguridad grupal',
    lessons: [
      {
        id: 'exp-l041',
        title: '41. Objetivos de expedición',
        duration: '8 min',
        theory: `<p>Expedición es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, meta clara, duración, equipo acorde, plan contingencia.</p>
        <p>Estudiar objetivos de expedición con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: meta clara, duración, equipo acorde, plan contingencia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Objetivos de expedición',
          content: `<p>Travesía 5 días sierra: cumbre X día 3, buffer día 5.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar objetivos de expedición en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre objetivos de expedición.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Expedición requiere…',
              options: [
                'Objetivo y plan',
                'Solo impulso',
                'Sin mapa',
                'Sin comida',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l042',
        title: '42. Equipo y peso',
        duration: '8 min',
        theory: `<p>Equipo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, lista verificada, peso distribuido, redundancia crítica.</p>
        <p>Estudiar equipo y peso con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: lista verificada, peso distribuido, redundancia crítica</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Equipo y peso',
          content: `<p>Regla: no más del 25-30% peso corporal en mochila larga.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar equipo y peso en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre equipo y peso.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Mochila larga distancia…',
              options: [
                'Peso controlado',
                'Ilimitado',
                'Sin agua',
                'Sin abrigo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l043',
        title: '43. Nutrición en travesía',
        duration: '8 min',
        theory: `<p>Nutrición es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, calorías densas, electrolitos, raciones por día.</p>
        <p>Estudiar nutrición en travesía con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: calorías densas, electrolitos, raciones por día</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Nutrición en travesía',
          content: `<p>5000 kcal/día en frío alto vs 3000 en templado.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar nutrición en travesía en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre nutrición en travesía.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Frío intenso requiere…',
              options: [
                'Más calorías',
                'Menos agua',
                'Sin comida',
                'Solo azúcar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l044',
        title: '44. Hidratación en ruta',
        duration: '8 min',
        theory: `<p>Hidratación ruta es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, litros por día según clima; mapa de fuentes.</p>
        <p>Estudiar hidratación en ruta con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: litros por día según clima; mapa de fuentes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Hidratación en ruta',
          content: `<p>3-4 L/día desierto caliente con electrolitos.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar hidratación en ruta en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre hidratación en ruta.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Desierto caliente…',
              options: [
                'Más agua planificada',
                'Menos agua',
                'Sin agua',
                'Solo alcohol',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l045',
        title: '45. Primeros auxilios grupal',
        duration: '8 min',
        theory: `<p>PA grupo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, botiquín grupal, roles, comunicación emergencia.</p>
        <p>Estudiar primeros auxilios grupal con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: botiquín grupal, roles, comunicación emergencia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Primeros auxilios grupal',
          content: `<p>Un miembro con WFR y sat phone designado.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar primeros auxilios grupal en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre primeros auxilios grupal.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Grupo debe tener…',
              options: [
                'Plan emergencia',
                'Sin botiquín',
                'Sin comunicación',
                'Todos separados',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l046',
        title: '46. Clima y ventanas',
        duration: '8 min',
        theory: `<p>Ventana clima es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, estación seca, huracanes, avalancha según zona.</p>
        <p>Estudiar clima y ventanas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: estación seca, huracanes, avalancha según zona</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Clima y ventanas',
          content: `<p>Evitar sierra alta en temporada eléctrica sin refugio.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar clima y ventanas en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre clima y ventanas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Ventana climática…',
              options: [
                'Reduce riesgo',
                'Sin importancia',
                'Solo estética',
                'Solo noche',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l047',
        title: '47. Comunicación satelital',
        duration: '8 min',
        theory: `<p>Comms es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, inReach, Zoleo, radio en grupo remoto.</p>
        <p>Estudiar comunicación satelital con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: inReach, Zoleo, radio en grupo remoto</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Comunicación satelital',
          content: `<p>Check-in diario con base en expedición ártica.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar comunicación satelital en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre comunicación satelital.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Sat phone/inReach…',
              options: [
                'Comunicación remota',
                'Solo fotos',
                'Solo música',
                'GPS solo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l048',
        title: '48. Evacuación y rescue',
        duration: '8 min',
        theory: `<p>Evacuación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, plan extracción, coordenadas LZ, señales aéreas.</p>
        <p>Estudiar evacuación y rescue con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: plan extracción, coordenadas LZ, señales aéreas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Evacuación y rescue',
          content: `<p>Helo: LZ plana, señal Y= sí, N= no.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar evacuación y rescue en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre evacuación y rescue.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'LZ helicóptero…',
              options: [
                'Plana y despejada',
                'Entre árboles densos',
                'En pendiente fuerte',
                'En agua',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l049',
        title: '49. Expedición internacional',
        duration: '8 min',
        theory: `<p>Internacional es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, visas, seguro, vacunas, permisos locales.</p>
        <p>Estudiar expedición internacional con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: visas, seguro, vacunas, permisos locales</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Expedición internacional',
          content: `<p>Permiso SAGARPA o CONANP según área protegida MX.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar expedición internacional en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre expedición internacional.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Expedición internacional requiere…',
              options: [
                'Permisos y seguro',
                'Solo pasaporte',
                'Nada extra',
                'Solo efectivo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'exp-l050',
        title: '50. Debrief y aprendizaje',
        duration: '8 min',
        theory: `<p>Debrief es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, revisar qué funcionó, incidentes, mejoras.</p>
        <p>Estudiar debrief y aprendizaje con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: revisar qué funcionó, incidentes, mejoras</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Debrief y aprendizaje',
          content: `<p>Notas post-expedición actualizan lista equipo.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar debrief y aprendizaje en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre debrief y aprendizaje.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Debrief sirve para…',
              options: [
                'Mejorar futuras salidas',
                'Olvidar todo',
                'Culpar solo',
                'Sin utilidad',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
];
