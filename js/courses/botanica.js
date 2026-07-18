export const CURRICULUM = [
  {
    id: 'bot-mod-1',
    title: 'Suelo y preparación',
    description: 'Textura, pH, drenaje y preparación de camas de cultivo',
    lessons: [
      {
        id: 'bot-l001',
        title: '1. Textura del suelo',
        duration: '8 min',
        theory: `<p>Textura del suelo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, haz la prueba del puño: aprieta tierra húmeda; si forma bola que se desmenuza, el equilibrio es bueno.</p>
        <p>Estudiar textura del suelo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: La proporción de arena, limo y arcilla determina retención de agua y aireación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Textura del suelo',
          content: `<p>Un suelo muy arcilloso en maceta se compacta y asfixia raíces; mezclar compost mejora la estructura.</p>`,
          tip: 'Mezcla un tercio de compost al replantar macetas grandes.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre textura del suelo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué indica un suelo con mucha arena?',
              options: [
                'Drena rápido pero retiene pocos nutrientes',
                'Retiene demasiada humedad',
                'Siempre es ácido',
                'No necesita abono',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l002',
        title: '2. pH del suelo',
        duration: '8 min',
        theory: `<p>pH del suelo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa tiras reactivas o un medidor económico antes de elegir cultivos exigentes.</p>
        <p>Estudiar ph del suelo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: El pH mide acidez o alcalinidad y afecta la disponibilidad de nutrientes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: pH del suelo',
          content: `<p>Los arándanos prefieren pH bajo (4,5–5,5); añadir azufre elemental puede acidificar lentamente.</p>`,
          tip: 'Registra el pH por zona: no asumas que toda la parcela es igual.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ph del suelo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué pH aproximado prefieren la mayoría de hortalizas?',
              options: [
                'Neutro ligeramente ácido (6,0–7,0)',
                'Muy ácido (<4)',
                'Fuertemente alcalino (>9)',
                'El pH no importa',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l003',
        title: '3. Drenaje y aeración',
        duration: '8 min',
        theory: `<p>Drenaje y aeración es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, perfora macetas sin agujero y añade una capa de grava solo si el sustrato es muy denso.</p>
        <p>Estudiar drenaje y aeración con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Las raíces necesitan oxígeno; el exceso de agua estancada provoca pudrición</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Drenaje',
          content: `<p>Tras lluvias intensas, revisa hoyos en hojas de lechuga: indican encharcamiento.</p>`,
          tip: 'Eleva macetas con patas o ladrillos en invierno húmedo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre drenaje y aeración.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué encharcar una maceta es peligroso?',
              options: [
                'Las raíces se ahogan por falta de oxígeno',
                'La planta crece más rápido',
                'El pH sube automáticamente',
                'Atrae más luz solar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l004',
        title: '4. Compost casero básico',
        duration: '8 min',
        theory: `<p>Compost casero básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, alterna capas verdes (nitrógeno) y marrones (carbono) manteniendo humedad como esponja exprimida.</p>
        <p>Estudiar compost casero básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Materia orgánica descompuesta mejora estructura, nutrientes y vida microbiana</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Compost',
          content: `<p>Restos de cocina sin carne más hojas secas producen compost en 3–6 meses con volteo mensual.</p>`,
          tip: 'Evita semillas de maleza maduras en el montón si no alcanza alta temperatura.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre compost casero básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué equilibrio ayuda a descomponer más rápido?',
              options: [
                'Mezclar materiales verdes y marrones',
                'Solo añadir tierra del jardín',
                'Mantenerlo completamente seco',
                'Usar solo cáscaras de huevo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l005',
        title: '5. Camas elevadas',
        duration: '8 min',
        theory: `<p>Camas elevadas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, delimita con madera no tratada o piedra; rellena con mezcla 40% compost, 40% tierra, 20% arena.</p>
        <p>Estudiar camas elevadas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Las raised beds calientan antes, drenan mejor y reducen compactación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Camas elevadas',
          content: `<p>Una cama de 30 cm de profundidad basta para zanahorias y lechugas en suelo pobre.</p>`,
          tip: 'Orienta el lado largo norte-sur para reparto uniforme de luz.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre camas elevadas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja principal de una cama elevada?',
              options: [
                'Mejor drenaje y menos pisoteo',
                'No necesitan riego',
                'Impiden todas las plagas',
                'Funcionan solo en trópico',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l006',
        title: '6. Mulching orgánico',
        duration: '8 min',
        theory: `<p>Mulching orgánico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, extiende 5–8 cm de paja, corteza fina o hojas secas sin tocar el tallo.</p>
        <p>Estudiar mulching orgánico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: La acolchado conserva humedad, modera temperatura del suelo y reduce malezas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Mulching',
          content: `<p>Fresas con paja de trigo sufren menos podredumbres y mantienen frutos limpios.</p>`,
          tip: 'Replenish mulch tras lluvias fuertes que lo dispersen.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mulching orgánico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué hace el mulch en verano?',
              options: [
                'Reduce evaporación del suelo',
                'Aumenta la salinidad',
                'Bloquea la fotosíntesis de la planta',
                'Elimina la necesidad de polinizadores',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l007',
        title: '7. Rotación de cultivos',
        duration: '8 min',
        theory: `<p>Rotación de cultivos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no plantes solanáceas (tomate, pimiento) en el mismo sitio dos años seguidos.</p>
        <p>Estudiar rotación de cultivos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Alternar familias botánicas evita agotar nutrientes y rompe ciclos de plagas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Rotación',
          content: `<p>Tras tomates, siembra legumbres que fijan nitrógeno antes de volver a hortalizas de hoja.</p>`,
          tip: 'Dibuja un plano anual; la memoria falla en parcelas grandes.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre rotación de cultivos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué rotar familias de plantas?',
              options: [
                'Reduce acumulación de patógenos específicos',
                'Hace el suelo más compacto',
                'Impide el compost',
                'Acelera la maduración del fruto',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l008',
        title: '8. Semilleros y trasplante',
        duration: '8 min',
        theory: `<p>Semilleros y trasplante es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa sustrato ligero, riega alrededor del tallo y endurece plántulas una semana antes de trasplantar.</p>
        <p>Estudiar semilleros y trasplante con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Sembrar en bandeja protege de clima extremo y permite seleccionar plántulas fuertes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Trasplante',
          content: `<p>Tomates trasplantados enterrando el tallo desarrollan raíces adventicias adicionales.</p>`,
          tip: 'Trasplanta al atardecer o día nublado para reducir shock.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre semilleros y trasplante.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es "aclimatar" plántulas?',
              options: [
                'Exponerlas gradualmente al exterior',
                'Fertilizar con nitrógeno puro',
                'Podar todas las hojas',
                'Plantar directamente bajo sol pleno',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l009',
        title: '9. Herramientas esenciales',
        duration: '8 min',
        theory: `<p>Herramientas esenciales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, limpia y seca metal tras usar; afila corte limpio en podas sanas.</p>
        <p>Estudiar herramientas esenciales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Pala, rastrillo, podadora y regadera bien mantenidas ahorran tiempo y lesiones</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Herramientas',
          content: `<p>Una podadora sucia puede transmitir virus entre frutales al cortar ramas.</p>`,
          tip: 'Desinfecta con alcohol isopropílico entre plantas sospechosas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre herramientas esenciales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué afilar la podadora?',
              options: [
                'Corte limpio que cicatriza mejor',
                'La planta crece más alta',
                'Evita regar',
                'Cambia el pH del suelo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l010',
        title: '10. Calendario de siembra',
        duration: '8 min',
        theory: `<p>Calendario de siembra es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, consulta tabla local; adelantar siembra sin luz suficiente produce plantas etioladas.</p>
        <p>Estudiar calendario de siembra con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Cada especie tiene ventana óptima según temperatura del suelo y horas de luz</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Calendario',
          content: `<p>Guisantes de invierno toleran heladas ligeras; melones requieren suelo cálido (>18 °C).</p>`,
          tip: 'Anota fechas reales de siembra y resultados en un cuaderno de jardín.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre calendario de siembra.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué pasa si siembras calabaza demasiado pronto en clima frío?',
              options: [
                'Germinación lenta o podredumbre de semilla',
                'Frutos más dulces',
                'No necesita riego',
                'Crece mejor en sombra',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bot-mod-2',
    title: 'Riego, luz y nutrición',
    description: 'Necesidades hídricas, exposición solar y fertilización equilibrada',
    lessons: [
      {
        id: 'bot-l011',
        title: '11. Riego profundo vs superficial',
        duration: '8 min',
        theory: `<p>Riego profundo vs superficial es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, aplica agua hasta humedecer 15–20 cm en hortalizas; deja secar la capa superior entre riegos.</p>
        <p>Estudiar riego profundo vs superficial con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Regar poco y a menudo favorece raíces superficiales; riego profundo las ancla</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Riego profundo',
          content: `<p>Un tomatero con riego por goteo 30 min cada dos días rinde más que aspersión diaria breve.</p>`,
          tip: 'Usa el dedo a 3 cm de profundidad: si está seco, toca regar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre riego profundo vs superficial.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué logra el riego profundo ocasional?',
              options: [
                'Raíces más profundas y resistentes',
                'Elimina la necesidad de mulch',
                'Sube el pH del agua',
                'Impide la polinización',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l012',
        title: '12. Horario de riego',
        duration: '8 min',
        theory: `<p>Horario de riego es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, evita mojar follaje al atardecer en climas húmedos para prevenir hongos.</p>
        <p>Estudiar horario de riego con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Regar al amanecer reduce evaporación y deja hojas secas antes de la noche</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Horario',
          content: `<p>Oídio en calabacín aparece más si riegas con aspersor al anochecer en verano.</p>`,
          tip: 'En ola de calor, riega al amanecer y sombrea temporalmente plántulas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre horario de riego.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo es mejor regar en verano?',
              options: [
                'Temprano por la mañana',
                'Mediodía con sol pleno',
                'Solo de noche sin excepción',
                'Una vez al mes',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l013',
        title: '13. Luz solar y sombra',
        duration: '8 min',
        theory: `<p>Luz solar y sombra es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, observa sombras estacionales antes de instalar bancales permanentes.</p>
        <p>Estudiar luz solar y sombra con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Pleno sol son ≥6 h directas; sombra parcial 3–6 h; plena sombra <3 h</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Luz',
          content: `<p>Espinacas y lechugas toleran sombra parcial; pimientos exigen pleno sol.</p>`,
          tip: 'Usa un brújula: sur (hemisferio norte) recibe más horas en verano.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre luz solar y sombra.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuántas horas mínimas de sol directo necesita un tomate?',
              options: [
                'Al menos 6 horas',
                '1 hora',
                'Solo luz artificial',
                'Ninguna',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l014',
        title: '14. Macronutrientes N-P-K',
        duration: '8 min',
        theory: `<p>Macronutrientes N-P-K es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lee etiquetas 10-10-10; usa fórmulas altas en K antes de fructificación.</p>
        <p>Estudiar macronutrientes n-p-k con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Nitrógeno (N) follaje, fósforo (P) raíces/flores, potasio (K) frutos y resistencia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: N-P-K',
          content: `<p>Exceso de N en tomate produce hojas exuberantes y pocos frutos.</p>`,
          tip: 'Abona poco y seguido mejor que mucho de golpe.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre macronutrientes n-p-k.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué nutriente favorece principalmente la floración?',
              options: [
                'Fósforo (P)',
                'Solo calcio',
                'Cloro',
                'Hierro en exceso',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l015',
        title: '15. Deficiencias visuales',
        duration: '8 min',
        theory: `<p>Deficiencias visuales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, corrige pH antes de abonar: nutrientes bloqueados parecen deficiencias.</p>
        <p>Estudiar deficiencias visuales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Clorosis interveinal puede ser hierro; bordes quemados, potasio; púrpura en hojas, fósforo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Deficiencias',
          content: `<p>Tomates en suelo alcalino muestran amarilleo aunque haya hierro disponible.</p>`,
          tip: 'Fotografía hojas afectadas y fecha para comparar tras tratamiento.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre deficiencias visuales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué puede causar clorosis con suelo rico en hierro?',
              options: [
                'pH demasiado alto',
                'Exceso de luz',
                'Poco espacio entre plantas',
                'Demasiado mulch',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l016',
        title: '16. Abonos orgánicos',
        duration: '8 min',
        theory: `<p>Abonos orgánicos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, nunca uses estiércol fresco: quema raíces y puede contener patógenos.</p>
        <p>Estudiar abonos orgánicos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Estiércol compostado, humus de lombriz y emulsión de pescado liberan nutrientes lentamente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Orgánico',
          content: `<p>Té de compost aerado aporta microorganismos benéficos al riego foliar diluido.</p>`,
          tip: 'Composta estiércol al menos 6 meses antes de aplicar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre abonos orgánicos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué no usar estiércol fresco?',
              options: [
                'Puede quemar raíces y contener patógenos',
                'No tiene nitrógeno',
                'Sube el pH a 10',
                'Repele polinizadores',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l017',
        title: '17. Riego por goteo casero',
        duration: '8 min',
        theory: `<p>Riego por goteo casero es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, instala manguera perforada o botellas con pinchazo; revisa caudal uniforme.</p>
        <p>Estudiar riego por goteo casero con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: El goteo entrega agua en la zona radicular con mínima pérdida</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Goteo',
          content: `<p>Botella de 2 L con 3 agujeros regula humedad en maceta de pimientos durante vacaciones.</p>`,
          tip: 'Filtra el agua si tus goteros se tapan con cal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre riego por goteo casero.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja del riego por goteo?',
              options: [
                'Ahorra agua y reduce enfermedades foliares',
                'Moja todo el jardín',
                'No requiere planificación',
                'Sustituye la luz solar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l018',
        title: '18. Recolección de agua de lluvia',
        duration: '8 min',
        theory: `<p>Recolección de agua de lluvia es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, cubre tanques, limpia filtros y no uses agua de tejado plomo en hortalizas.</p>
        <p>Estudiar recolección de agua de lluvia con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Agua sin cloro y suave es ideal para riego; cumple normativa local</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Lluvia',
          content: `<p>Un depósito de 200 L bajo un alero recoge agua suficiente para macetas una semana seca.</p>`,
          tip: 'Primera lluvia tras sequía en ciudad: desecha arranque si hay mucho polvo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre recolección de agua de lluvia.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué la lluvia suele ser mejor que grifo para plantas?',
              options: [
                'Sin cloro y generalmente más blanda',
                'Siempre más caliente',
                'Contiene más sal',
                'Tiene más nitrógeno fijo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l019',
        title: '19. Síntomas de exceso de agua',
        duration: '8 min',
        theory: `<p>Síntomas de exceso de agua es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mejora drenaje, reduce frecuencia y airea suelo con horquilla sin dañar raíces.</p>
        <p>Estudiar síntomas de exceso de agua con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Hojas amarillas, marchitamiento paradójico y olor a humedad indican saturación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Exceso',
          content: `<p>Orquídea con raíces marrones blandas necesita secado, no más riego.</p>`,
          tip: 'Macetas pesadas tras regar están bien; ligeras y hojas caídas alertan.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre síntomas de exceso de agua.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Señal de riego excesivo?',
              options: [
                'Raíces blandas y olor fétido',
                'Suelo agrietado seco',
                'Hojas gruesas y azuladas por sol',
                'Crecimiento lento por sequía',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l020',
        title: '20. Fertilización en macetas',
        duration: '8 min',
        theory: `<p>Fertilización en macetas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa abono líquido diluido quincenal en crecimiento; reduce en invierno.</p>
        <p>Estudiar fertilización en macetas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Volumen limitado agota nutrientes rápido; lixiviación por riego frecuente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Macetas',
          content: `<p>Albahaca en maceta pequeña se amarillea en 4 semanas sin reposición de nutrientes.</p>`,
          tip: 'Cambia parte del sustrato cada primavera en perennes en contenedor.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre fertilización en macetas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué macetas necesitan más abono que suelo abierto?',
              options: [
                'Menor volumen y lixiviación al regar',
                'Las raíces no absorben',
                'El sol quema nutrientes',
                'No hay microorganismos',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bot-mod-3',
    title: 'Cultivos comestibles',
    description: 'Hortalizas, hierbas aromáticas y frutales en espacios reducidos',
    lessons: [
      {
        id: 'bot-l021',
        title: '21. Tomates en contenedor',
        duration: '8 min',
        theory: `<p>Tomates en contenedor es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, maceta mínima 20 L, tutor desde plántula, elimina brotes axilares en variedades indeterminadas.</p>
        <p>Estudiar tomates en contenedor con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Variedades determinadas (bush) son más compactas; indeterminadas necesitan tutor</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Tomates',
          content: `<p>Cherry "Balcony" produce en maceta de 15 L en balcón soleado.</p>`,
          tip: 'Riega en la base; salpicaduras en hojas propagan hongos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tomates en contenedor.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué tipo de tomate conviene en balcón pequeño?',
              options: [
                'Variedad determinada compacta',
                'Indeterminada de 3 m',
                'Solo silvestre',
                'Ninguno crece en maceta',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l022',
        title: '22. Hierbas aromáticas',
        duration: '8 min',
        theory: `<p>Hierbas aromáticas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, planta menta en maceta separada: invade por estolones.</p>
        <p>Estudiar hierbas aromáticas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Albahaca, romero, tomillo y menta tienen necesidades distintas de agua y sol</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Hierbas',
          content: `<p>Romero en exceso de riego desarrolla raíces podridas; prefiere secado entre riegos.</p>`,
          tip: 'Cosecha albahaca por encima de un nudo para ramificar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre hierbas aromáticas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué hierba debes aislar por invasiva?',
              options: [
                'Menta',
                'Tomillo',
                'Orégano seco',
                'Perejil anual',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l023',
        title: '23. Cultivo de lechuga',
        duration: '8 min',
        theory: `<p>Cultivo de lechuga es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, siembra escalonada cada 2 semanas; sombrea en verano.</p>
        <p>Estudiar cultivo de lechuga con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Crece rápido en fresco; bolting (floración) amarga hojas con calor y días largos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Lechuga',
          content: `<p>Lechuga romana tolera menos frío que mantecosa pero rinde más en entretiempo.</p>`,
          tip: 'Cosecha hojas exteriores y deja crecer corazón en lechuga "corta y crece".',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cultivo de lechuga.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es bolting en lechuga?',
              options: [
                'Floración prematura que amarga hojas',
                'Podredumbre radicular',
                'Plaga de pulgón',
                'Falta de nitrógeno',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l024',
        title: '24. Legumbres fijadoras',
        duration: '8 min',
        theory: `<p>Legumbres fijadoras es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no arranques plantas al terminar: deja raíces en suelo para liberar nitrógeno.</p>
        <p>Estudiar legumbres fijadoras con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Bacterias Rhizobium en nódulos convierten N₂ atmosférico en formas asimilables</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Legumbres',
          content: `<p>Guisantes seguidos de brócoli aprovechan suelo enriquecido sin abono extra.</p>`,
          tip: 'Inoculante de guisante ayuda si nunca cultivaste legumbres en ese suelo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre legumbres fijadoras.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué aportan las legumbres al suelo?',
              options: [
                'Nitrógeno fijado biológicamente',
                'Sal marina',
                'Solo agua',
                'Plástico biodegradable',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l025',
        title: '25. Zanahorias y raíces',
        duration: '8 min',
        theory: `<p>Zanahorias y raíces es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, siembra directa; ralea a 3 cm cuando tengan 5 cm de altura.</p>
        <p>Estudiar zanahorias y raíces con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Suelo suelto sin piedras produce raíces rectas; compactación causa horquillas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Zanahorias',
          content: `<p>Mezclar arena fina en cama elevada evita zanahorias deformes en arcilla.</p>`,
          tip: 'Mantén semilla húmeda 10–14 días hasta germinar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre zanahorias y raíces.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué salen zanahorias horquilladas?',
              options: [
                'Suelo compacto o piedras',
                'Demasiado sol',
                'Exceso de potasio',
                'Polinización cruzada',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l026',
        title: '26. Calabacines y cucurbitáceas',
        duration: '8 min',
        theory: `<p>Calabacines y cucurbitáceas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, identifica flores masculinas y femeninas; transfiere polen con pincel al mediodía.</p>
        <p>Estudiar calabacines y cucurbitáceas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Necesitan polinizadores o polinización manual; frutos abortan si flor no fecundada</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Calabacín',
          content: `<p>Una flor femenina sin polinizar se pudre en la base del fruto pequeño.</p>`,
          tip: 'Planta flores nectaríferas cerca para atraer abejas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre calabacines y cucurbitáceas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué aborta un calabacín pequeño?',
              options: [
                'Polinización insuficiente',
                'Demasiado frío únicamente',
                'Exceso de luz',
                'Falta de tutor',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l027',
        title: '27. Patatas en saco',
        duration: '8 min',
        theory: `<p>Patatas en saco es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, planta patata de semilla en saco con 15 cm sustrato; añade mezcla al crecer.</p>
        <p>Estudiar patatas en saco con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Aporque repetido entierra tallos para formar tubérculos en nuevos nodos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Patatas',
          content: `<p>Saco de 50 L puede dar 2–3 kg en variedad temprana con riego constante.</p>`,
          tip: 'No uses patata de supermercado tratada con retardante de brotación.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre patatas en saco.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Para qué se aporque la patata?',
              options: [
                'Formar tubérculos en tallos enterrados',
                'Evitar la fotosíntesis',
                'Atraer pájaros',
                'Reducir riego a cero',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l028',
        title: '28. Frutales en maceta',
        duration: '8 min',
        theory: `<p>Frutales en maceta es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, elige portainjerto enano; maceta ancha y profunda con buen drenaje.</p>
        <p>Estudiar frutales en maceta con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Raíces limitadas restringen tamaño; necesitan poda y abono regular</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Frutales',
          content: `<p>Manzano enano "M27" vive años en maceta de 40 L con poda anual.</p>`,
          tip: 'Protege maceta en invierno: raíces heladas mueren más fácil que en suelo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre frutales en maceta.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Clave para frutal en maceta?',
              options: [
                'Portainjerto enano y poda anual',
                'No regar nunca',
                'Solo sombra',
                'Maceta de 2 L',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l029',
        title: '29. Microgreens',
        duration: '8 min',
        theory: `<p>Microgreens es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, siembra denso en bandeja poco profunda; cosecha con tijera al alcanzar 5–8 cm.</p>
        <p>Estudiar microgreens con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Brotes cosechados con cotiledones; alto sabor y nutrientes en pocos días</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Microgreens',
          content: `<p>Rábano y mostaza están listos en 7–10 días bajo luz brillante tras germinar.</p>`,
          tip: 'No confundas microgreens con germinados de frasco húmedo sin sustrato.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre microgreens.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo cosechar microgreens?',
              options: [
                'Con primeras hojas verdaderas o cotiledones grandes',
                'Tras 6 meses',
                'Solo cuando florezcan',
                'Antes de germinar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l030',
        title: '30. Policultivo y compañías',
        duration: '8 min',
        theory: `<p>Policultivo y compañías es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, evita plantar cebolla junto a guisantes según tradición; prueba en pequeño.</p>
        <p>Estudiar policultivo y compañías con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Algunas combinaciones repelen plagas o aprovechan estratos (ej. maíz-frijol-calabaza)</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Compañías',
          content: `<p>Albahaca cerca de tomate puede reducir mosca blanca y atrae polinizadores.</p>`,
          tip: 'Documenta resultados: compañerismo varía con clima local.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre policultivo y compañías.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es policultivo?',
              options: [
                'Varias especies cultivadas juntas de forma planificada',
                'Un solo cultivo monocultivo',
                'Solo plantas ornamentales',
                'Cultivo sin agua',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bot-mod-4',
    title: 'Plagas, enfermedades y salud vegetal',
    description: 'Identificación, prevención y manejo integrado de problemas',
    lessons: [
      {
        id: 'bot-l031',
        title: '31. Pulgón y control mecánico',
        duration: '8 min',
        theory: `<p>Pulgón y control mecánico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, chorro de agua, elimina brotes muy infestados, introduce mariquitas si es posible.</p>
        <p>Estudiar pulgón y control mecánico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Pulgones succionan savia y transmiten virus; proliferan sin depredadores</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Pulgón',
          content: `<p>Colonia en brotes tiernos de rosa se controla con jabón potásico diluido.</p>`,
          tip: 'Revisa parte inferior de hojas nuevas cada semana.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre pulgón y control mecánico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Control mecánico de pulgones?',
              options: [
                'Chorro de agua y retirar brotes infestados',
                'Más nitrógeno',
                'Riego nocturno en hojas',
                'Podar todo el follaje',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l032',
        title: '32. Caracoles y barreras',
        duration: '8 min',
        theory: `<p>Caracoles y barreras es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, barrera de cobre, cerveza en trampa poco profunda, recogida manual al amanecer.</p>
        <p>Estudiar caracoles y barreras con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Activos de noche y tiempo húmedo; dejan baba y agujeros irregulares</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Caracoles',
          content: `<p>Ceniza o huevo triturado crea barrera áspera temporal tras lluvia.</p>`,
          tip: 'Elimina escondites: tablas, maleza densa junto a hortalizas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre caracoles y barreras.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo recoger caracoles manualmente?',
              options: [
                'Al amanecer o tras lluvia',
                'Mediodía soleado',
                'Solo en invierno helado',
                'Nunca es útil',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l033',
        title: '33. Oídio y hongos foliares',
        duration: '8 min',
        theory: `<p>Oídio y hongos foliares es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mejora ventilación, riega suelo, elimina hojas afectadas, azufre o bicarbonato preventivo.</p>
        <p>Estudiar oídio y hongos foliares con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Hongos que forman polvo blanco; favorecidos por humedad en hojas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Oídio',
          content: `<p>Calabacín en invernadero sin ventilar desarrolla oídio en 48 h tras rocío nocturno.</p>`,
          tip: 'Variedades resistentes son primera línea en zonas húmedas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre oídio y hongos foliares.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué favorece oídio?',
              options: [
                'Hojas mojadas y poca circulación de aire',
                'Suelo seco y pleno sol',
                'Falta de nitrógeno únicamente',
                'Polinizadores',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l034',
        title: '34. Manchas foliares bacterianas',
        duration: '8 min',
        theory: `<p>Manchas foliares bacterianas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, rota cultivos, no trabajes plantas mojadas, desinfecta herramientas.</p>
        <p>Estudiar manchas foliares bacterianas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Lesiones acuosas que se vuelven marrones; se propagan con salpicaduras</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Bacterias',
          content: `<p>Mancha bacteriana en tomate entra por heridas; evita regar con presión en follaje.</p>`,
          tip: 'No compostes plantas con signos bacterianos si el montón no calienta bien.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre manchas foliares bacterianas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cómo se propagan muchas bacterias foliares?',
              options: [
                'Salpicaduras de agua y herramientas',
                'Viento seco únicamente',
                'Polinizadores',
                'Exceso de luz UV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l035',
        title: '35. Nematodos del suelo',
        duration: '8 min',
        theory: `<p>Nematodos del suelo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, solariza suelo en verano, rota con tagetes marigold, mantén materia orgánica.</p>
        <p>Estudiar nematodos del suelo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Gusanos microscópicos; algunos dañan raíces formando nódulos o agallas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Nematodos',
          content: `<p>Tomate con nematodos muestra marchitamiento diurno pese a riego adecuado.</p>`,
          tip: 'Variedades portainjerto resistentes existen para tomate comercial.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre nematodos del suelo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Síntoma posible de nematodos?',
              options: [
                'Agallas o nódulos en raíces',
                'Polvo blanco en hojas',
                'Flores dobles',
                'Frutos más dulces',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l036',
        title: '36. Control biológico',
        duration: '8 min',
        theory: `<p>Control biológico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, Bacillus thuringiensis para orugas; feromonas para confundir insectos.</p>
        <p>Estudiar control biológico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Usar depredadores naturales o microorganismos en lugar de químicos amplios</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Biológico',
          content: `<p>Liberar crisopas consume pulgones en invernadero sin residuo químico.</p>`,
          tip: 'Químicos de amplio espectro matan depredadores útiles también.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre control biológico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué es Bacillus thuringiensis?',
              options: [
                'Bacteria que controla larvas de lepidópteros',
                'Abono nitrogenado',
                'Hongos de oídio',
                'Herbicida sistémico',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l037',
        title: '37. Trampas cromáticas',
        duration: '8 min',
        theory: `<p>Trampas cromáticas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, cuelga a nivel del follaje, renueva cuando están llenas o polvo las invalida.</p>
        <p>Estudiar trampas cromáticas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Placas amarillas atraen insectos voladores; azules ciertos trips</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Trampas',
          content: `<p>Mosca blanca en brócoli se detecta pronto con trampa amarilla pegajosa.</p>`,
          tip: 'Trampas monitorean; solas no bastan en infestación grave.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre trampas cromáticas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Para qué sirve trampa amarilla?',
              options: [
                'Detectar y capturar insectos voladores',
                'Abonar con calcio',
                'Regar automáticamente',
                'Medir pH',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l038',
        title: '38. Cuarentena de plantas nuevas',
        duration: '8 min',
        theory: `<p>Cuarentena de plantas nuevas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, 7–14 días aparte, inspecciona hojas y sustrato, trata antes de integrar.</p>
        <p>Estudiar cuarentena de plantas nuevas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Planta comprada puede traer plagas ocultas; aislar evita contagio del huerto</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Cuarentena',
          content: `<p>Orquídea de feria con cochinilla se aisló y trató con alcohol antes de unirse a colección.</p>`,
          tip: 'Revisa desagüe y parte inferior de maceta: hormigas indican pulgón.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cuarentena de plantas nuevas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué aislar planta nueva?',
              options: [
                'Evitar introducir plagas al resto',
                'Aumentar floración',
                'Bajar pH',
                'Eliminar cloro del agua',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l039',
        title: '39. Higiene de fin de ciclo',
        duration: '8 min',
        theory: `<p>Higiene de fin de ciclo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, retira y elimina (no compostes) restos con mildiu u oídio severo.</p>
        <p>Estudiar higiene de fin de ciclo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Restos vegetales enfermos pueden sobrevivir al invierno y reinfectar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Higiene',
          content: `<p>Hojas de tomate con septoria retiradas en otoño reducen inóculo primaveral.</p>`,
          tip: 'Desinfecta tutores de tomate antes de guardarlos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre higiene de fin de ciclo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué hacer con restos muy infectados?',
              options: [
                'Eliminar fuera del compost doméstico',
                'Enterrar en cama activa',
                'Dejar en superficie',
                'Regar más',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l040',
        title: '40. MIP — manejo integrado',
        duration: '8 min',
        theory: `<p>MIP — manejo integrado es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, identifica plaga antes de tratar; rota modos de acción si usas químicos.</p>
        <p>Estudiar mip — manejo integrado con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Combina prevención, monitorización, umbrales de acción y tratamientos específicos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: MIP',
          content: `<p>Orugas pocas en brócoli: recolección manual; muchas: Bt en lugar de insecticida amplio.</p>`,
          tip: 'Lleva registro de tratamientos y efectividad por temporada.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mip — manejo integrado.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Primer paso del MIP?',
              options: [
                'Identificar correctamente el problema',
                'Aplicar fungicida preventivo siempre',
                'Eliminar todas las plantas',
                'Ignorar hasta desastre',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bot-mod-5',
    title: 'Diseño de huerto y estaciones',
    description: 'Planificación espacial, invierno y cosecha a lo largo del año',
    lessons: [
      {
        id: 'bot-l041',
        title: '41. Zonificación del espacio',
        duration: '8 min',
        theory: `<p>Zonificación del espacio es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, dibuja plano a escala con ruta de manguera y acceso para carretilla.</p>
        <p>Estudiar zonificación del espacio con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Agrupa por riego, sol y altura: altos al norte para no sombrear bajos (hemisferio norte)</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Zonificación',
          content: `<p>Maíz al norte de lechugas evita sombra en verano por la tarde.</p>`,
          tip: 'Deja caminos de 60 cm mínimo entre camas para rodar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre zonificación del espacio.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué colocar plantas altas al norte?',
              options: [
                'Evitar sombrear cultivos bajos',
                'Atraer más viento',
                'Reducir polinización',
                'Subir pH',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l042',
        title: '42. Huerto en contenedores urbano',
        duration: '8 min',
        theory: `<p>Huerto en contenedores urbano es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, macetas con platillo drenado; fija tutores; usa sustrato ligero si hay límite de peso.</p>
        <p>Estudiar huerto en contenedores urbano con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Balcones y terrazas requieren peso, drenaje y viento considerados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Urbano',
          content: `<p>Estructura de aluminio con macetas de 10 L produce hierbas y cherry en 4 m².</p>`,
          tip: 'Comprueba carga máxima de balcón antes de llenar barriles de agua.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre huerto en contenedores urbano.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Riesgo olvidado en balcón?',
              options: [
                'Peso del sustrato húmedo y viento',
                'Demasiada sombra siempre',
                'Falta de polinizadores imposible',
                'No hay plagas en altura',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l043',
        title: '43. Invernadero pasivo',
        duration: '8 min',
        theory: `<p>Invernadero pasivo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, abre laterales en días soleados >20 °C; cierra antes de heladas.</p>
        <p>Estudiar invernadero pasivo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Estructura transparente captura calor; ventilación evita sobrecalentamiento</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Invernadero',
          content: `<p>Túnel de polietileno extiende temporada de tomate 4 semanas en clima templado.</p>`,
          tip: 'Humedad alta sin ventilar propicia hongos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre invernadero pasivo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Peligro de invernadero cerrado al sol?',
              options: [
                'Sobrecalentamiento y hongos',
                'Plantas se congelan siempre',
                'No entra luz',
                'Elimina CO₂ necesario',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l044',
        title: '44. Cultivos de invierno',
        duration: '8 min',
        theory: `<p>Cultivos de invierno es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa manta térmica en heladas fuertes; reduce riego con días cortos.</p>
        <p>Estudiar cultivos de invierno con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Algunas especies toleran frío: kale, acelga, ajo plantado en otoño</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Invierno',
          content: `<p>Ajo plantado en noviembre desarrolla raíces antes de dormir y brota en primavera.</p>`,
          tip: 'Mulch espeso protege raíces de perennes en heladas ocasionales.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cultivos de invierno.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo plantar ajo en clima templado?',
              options: [
                'Otoño para raíces antes del invierno',
                'Pleno verano',
                'Solo primavera tardía',
                'Nunca en exterior',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l045',
        title: '45. Semillas vs plántulas',
        duration: '8 min',
        theory: `<p>Semillas vs plántulas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, direct sow para zanahoria, rábano; plántula para tomate, pimiento.</p>
        <p>Estudiar semillas vs plántulas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Semilla es económica y variada; plántula adelanta cosecha pero cuesta más</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Semillas',
          content: `<p>Un sobre de albahaca da 200 plantas; comprar 6 macetas ahorra tiempo, no dinero.</p>`,
          tip: 'Guarda semillas en sobre cerrado, fresco y seco; anota fecha.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre semillas vs plántulas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué conviene sembrar directo al suelo?',
              options: [
                'Zanahoria y rábano',
                'Tomate y berenjena',
                'Pimiento en clima frío',
                'Patata en saco',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l046',
        title: '46. Cosecha y punto óptimo',
        duration: '8 min',
        theory: `<p>Cosecha y punto óptimo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, cosecha mañana tras secar rocío; usa cuchillo limpio en frutos de vaina.</p>
        <p>Estudiar cosecha y punto óptimo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Cada cultivo tiene señales: color, tamaño, facilidad de separación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Cosecha',
          content: `<p>Calabacín de 15–20 cm tiene mejor textura que gigante con semillas duras.</p>`,
          tip: 'Cosecha frecuente estimula más producción en muchas hortalizas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cosecha y punto óptimo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo cosechar calabacín tierno?',
              options: [
                '15–20 cm de longitud',
                'Cuando pesa 5 kg',
                'Tras primera helada',
                'Solo cuando amarillea',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l047',
        title: '47. Conservación post-cosecha',
        duration: '8 min',
        theory: `<p>Conservación post-cosecha es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no laves bayas hasta consumir; hierbas en ramo en agua como florero.</p>
        <p>Estudiar conservación post-cosecha con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Lavado, secado, frío adecuado y contenedores prolongan vida útil</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Conservación',
          content: `<p>Tomate a temperatura ambiente sabe mejor que nevera <10 °C que apaga aromas.</p>`,
          tip: 'Separa manzanas de hojas verdes: etileno acelera marchitamiento.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre conservación post-cosecha.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Dónde guardar tomate maduro para sabor?',
              options: [
                'Temperatura ambiente fuera de sol directo',
                'Congelador sin blanquear',
                'Nevera muy fría siempre',
                'En agua como tallo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l048',
        title: '48. Propagación por esqueje',
        duration: '8 min',
        theory: `<p>Propagación por esqueje es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, corta bajo nudo, quita hojas bajas, sustrato húmedo sin encharcar, bolsa transparente opcional.</p>
        <p>Estudiar propagación por esqueje con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Fragmento de tallo enraiza clonando genotipo idéntico</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Esqueje',
          content: `<p>Romero enraiza en 4 semanas en mezcla arena-turba con humedad constante.</p>`,
          tip: 'Esquejes de tomate de brotes laterales son clones productivos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre propagación por esqueje.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué mejora enraizamiento de esqueje?',
              options: [
                'Nudo bajo sustrato y humedad estable',
                'Hojas sumergidas en agua',
                'Sol pleno sin riego',
                'Sustrato seco',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l049',
        title: '49. Banco de semillas propio',
        duration: '8 min',
        theory: `<p>Banco de semillas propio es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, fermenta semilla de tomate, seca completamente, etiqueta variedad y año.</p>
        <p>Estudiar banco de semillas propio con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Guardar semilla de plantas adaptadas a tu microclima preserva traits útiles</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Semillas',
          content: `<p>Semilla de calabaza bien seca dura 5+ años en sobre hermético fresco.</p>`,
          tip: 'Prueba germinación en papel húmedo antes de depender de lote viejo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre banco de semillas propio.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué fermentar semilla de tomate?',
              options: [
                'Eliminar gel inhibidor y patógenos',
                'Aumentar tamaño del fruto',
                'Cambiar color de flor',
                'Hacerla venenosa',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'bot-l050',
        title: '50. Evaluación anual del huerto',
        duration: '8 min',
        theory: `<p>Evaluación anual del huerto es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en el jardín y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, actualiza plano, prueba suelo cada 2–3 años, rota familias según registro.</p>
        <p>Estudiar evaluación anual del huerto con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en tu huerto, macetas o parcela.</p>
        <ul><li>Concepto central: Revisar qué funcionó, rotaciones, suelo agotado y objetivos del próximo ciclo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en tu huerto, macetas o parcela</li></ul>`,
        example: {
          title: 'Ejemplo: Evaluación',
          content: `<p>Tras 3 años tomate mismo sitio, aumento de septoria obligó a cambiar cama.</p>`,
          tip: 'Fotos mensuales del mismo ángulo revelan cambios que la memoria olvida.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre evaluación anual del huerto.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Qué incluir en evaluación anual?',
              options: [
                'Rotaciones, rendimientos y problemas registrados',
                'Solo contar macetas',
                'Ignorar plagas pasadas',
                'Eliminar compost',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
];
