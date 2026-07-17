export const CURRICULUM = [
  {
    id: 'coc-mod-1',
    title: 'Seguridad alimentaria',
    description: 'Temperatura, contaminación cruzada e higiene',
    lessons: [
      {
        id: 'coc-l001',
        title: '1. Zona de peligro térmico',
        duration: '8 min',
        theory: `<p>Zona de peligro térmico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, mantén frío frío y caliente caliente en campamento Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar zona de peligro térmico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Entre 5 °C y 60 °C bacterias se multiplican rápido</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Zona de peligro térmico',
          content: `<p>Ensalada de pollo olvidada al sol media hora puede ser riesgo.</p>`,
          tip: 'Nevera portátil con hielo en contacto con alimentos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre zona de peligro térmico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Rango de riesgo bacteriano?',
              options: [
                '0 °C a 5 °C',
                '60 °C a 100 °C',
                'Bajo cero siempre',
                '5 °C a 60 °C',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l002',
        title: '2. Contaminación cruzada',
        duration: '8 min',
        theory: `<p>Contaminación cruzada es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa tabla y cuchillo separados para crudo y listo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar contaminación cruzada con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Sangre cruda en tabla puede pasar a vegetales sin lavar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Contaminación cruzada',
          content: `<p>Pollo crudo junto a tomate cortado es error clásico.</p>`,
          tip: 'Lava manos tras tocar carne cruda.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre contaminación cruzada.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Evitar contaminación cruzada?',
              options: [
                'Secar con mismo paño',
                'Guardar crudo sobre ensalada',
                'Separar utensilios crudo y cocido',
                'Usar misma tabla sin lavar',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l003',
        title: '3. Lavado de manos',
        duration: '8 min',
        theory: `<p>Lavado de manos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, monta estación de lavado con garrafón y jabón Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar lavado de manos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Agua, jabón y fricción 20 s antes de manipular comida</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Lavado de manos',
          content: `<p>Toalla individual evita compartir bacterias.</p>`,
          tip: 'Desinfectante gel no reemplaza lavado si hay grasa visible.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre lavado de manos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuándo lavar manos en campo?',
              options: [
                'Solo si están visibles sucias',
                'Antes de cocinar y tras tocar crudo',
                'Solo al final del día',
                'Nunca con agua limitada',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l004',
        title: '4. Agua potable',
        duration: '8 min',
        theory: `<p>Agua potable es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, hierve 1 min (3 min >2000 m) si dudas de calidad Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar agua potable con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Hervir, filtrar o pastillas según fuente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Agua potable',
          content: `<p>Arroyo aparentemente limpio puede tener giardia.</p>`,
          tip: 'Lleva filtro de 0,2 µm para trekking largo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre agua potable.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Agua de montaña dudosa?',
              options: [
                'Hervir o filtrar según protocolo',
                'Beber directo siempre',
                'Confiar en color claro',
                'Mezclar con barro',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l005',
        title: '5. Cadena de frío',
        duration: '8 min',
        theory: `<p>Cadena de frío es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, bloques de hielo sobre carnes en nevera de campamento Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar cadena de frío con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Mantener <5 °C carnes y lácteos hasta cocinar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Cadena de frío',
          content: `<p>Carne a temperatura ambiente 2 h en verano es riesgo.</p>`,
          tip: 'Abre nevera lo mínimo posible.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cadena de frío.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Carne fuera de nevera en verano?',
              options: [
                'En sol para secar',
                'Mezclar con hierbas',
                'Cocinar pronto o desechar',
                'Dejar hasta noche',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l006',
        title: '6. Cocción completa',
        duration: '8 min',
        theory: `<p>Cocción completa es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa termómetro de sonda si disponible Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar cocción completa con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Pollo y carne molida requieren temperatura interna segura</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Cocción completa',
          content: `<p>Jugos de pollo deben salir claros, no rosados.</p>`,
          tip: 'Pescado se desmenuza fácil al estar listo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cocción completa.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Pollo seguro?',
              options: [
                'Solo marinado',
                'Sin jugo rosado y 74 °C interno',
                'Exterior dorado basta',
                'Crudo en centro',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l007',
        title: '7. Conservas caseras',
        duration: '8 min',
        theory: `<p>Conservas caseras es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, sigue recetas acidas o presión certificada; no improvises Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar conservas caseras con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Botulismo es riesgo en conservas de baja acidez mal procesadas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Conservas caseras',
          content: `<p>Verduras en aceite sin ácido pueden ser peligrosas.</p>`,
          tip: 'En campo prioriza alimentos secos comerciales.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre conservas caseras.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Riesgo botulismo?',
              options: [
                'Pan tostado',
                'Fruta fresca',
                'Arroz hervido',
                'Conservas anaeróbicas mal acidificadas',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l008',
        title: '8. Alergias e intolerancias',
        duration: '8 min',
        theory: `<p>Alergias e intolerancias es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, pregunta al grupo por alergias antes de planificar menú Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar alergias e intolerancias con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Etiqueta ingredientes y evita contacto cruzado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Alergias e intolerancias',
          content: `<p>Nueces en trail mix cerca de persona alérgica es grave.</p>`,
          tip: 'Lava ollas si cocinaste alérgeno antes.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre alergias e intolerancias.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Planificar menú grupal?',
              options: [
                'Preguntar alergias y separar alimentos',
                'Ignorar restricciones',
                'Usar misma cuchara',
                'Ocultar ingredientes',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l009',
        title: '9. Basura y fauna',
        duration: '8 min',
        theory: `<p>Basura y fauna es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa oso-canister o colgar PCT style donde aplique Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar basura y fauna con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Olor atrae animales; guarda comida lejos de tienda</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Basura y fauna',
          content: `<p>Mapache nocturno rompe bolsas de basura débiles.</p>`,
          tip: 'Lava platos lejos del campamento.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre basura y fauna.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Comida en campamento?',
              options: [
                'En mochila abierta',
                'Almacenar sellada lejos de dormir',
                'Dentro de tienda siempre',
                'Bajo la lona exterior',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l010',
        title: '10. Inspección pre-comida',
        duration: '8 min',
        theory: `<p>Inspección pre-comida es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, descarta lata abombada o olor agrio Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar inspección pre-comida con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Olor, textura y fecha en alimentos empacados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Inspección pre-comida',
          content: `<p>Atún en lata hinchada indica posible contaminación.</p>`,
          tip: 'Cuando dudes, tíralo: salud > ahorro.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre inspección pre-comida.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Lata abombada?',
              options: [
                'Calentar más',
                'Mezclar con especias',
                'No consumir',
                'Abrir y oler',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'coc-mod-2',
    title: 'Equipamiento de campo',
    description: 'Fogones, combustible y utensilios',
    lessons: [
      {
        id: 'coc-l011',
        title: '11. Fogones de gas',
        duration: '8 min',
        theory: `<p>Fogones de gas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba fogón en casa antes de excursión Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar fogones de gas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Cartucho rosca vs válvula; revisa junta y estabilidad</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Fogones de gas',
          content: `<p>Viento apaga llama: usa pantalla de viento.</p>`,
          tip: 'Nunca cocines dentro de tienda cerrada: CO mortal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre fogones de gas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Monóxido de carbono en tienda?',
              options: [
                'Inofensivo',
                'Solo con alcohol',
                'Eliminado por hielo',
                'Riesgo mortal con combustión cerrada',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l012',
        title: '12. Fogones de alcohol',
        duration: '8 min',
        theory: `<p>Fogones de alcohol es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, aprende tiempo de hervido con tu olla estándar Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar fogones de alcohol con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Trangia y similares estables; combustible en botella etiquetada</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Fogones de alcohol',
          content: `<p>Alcohol metílico es tóxico: usa etílico o isopropílico según diseño.</p>`,
          tip: 'Apaga tapando; no soplar puede derramar llama.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre fogones de alcohol.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja alcohol vs gas?',
              options: [
                'Sin riesgo de derrame',
                'No necesita oxígeno',
                'Silencioso y simple en rutas ligeras',
                'Más potente siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l013',
        title: '13. Leña y fuego',
        duration: '8 min',
        theory: `<p>Leña y fuego es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, recoge leña muerta del suelo, no cortes vivo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar leña y fuego con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Solo donde permitido; usa fogata existente</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Leña y fuego',
          content: `<p>Brasas estables mejor que llama alta para olla.</p>`,
          tip: 'Apaga completamente: agua, remover, mano cerca sin calor.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre leña y fuego.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Apagar fogata?',
              options: [
                'Irse de noche',
                'Agua, remover y comprobar frío',
                'Dejar brasas',
                'Tapar con tierra húmeda sola',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l014',
        title: '14. Ollas y materiales',
        duration: '8 min',
        theory: `<p>Ollas y materiales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, elige olla según número de comensales y peso Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar ollas y materiales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Aluminio ligero vs acero resistente; revestimiento antiadherente frágil</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Ollas y materiales',
          content: `<p>Olla ancha calienta más rápido que olla estrecha alta.</p>`,
          tip: 'Asa resistente evita quemaduras al colgar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ollas y materiales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Olla para 2 personas trekking?',
              options: [
                '1–1,5 L ligera con tapa',
                '5 L de hierro',
                'Sin tapa',
                'Solo sartén plana',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l015',
        title: '15. Utensilios mínimos',
        duration: '8 min',
        theory: `<p>Utensilios mínimos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, multiherramienta de cocina reduce peso Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar utensilios mínimos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Cuchillo afilado, tabla flexible, cuchara y taza medidora</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Utensilios mínimos',
          content: `<p>Cuchillo con funda evita cortes en mochila.</p>`,
          tip: 'Cuchara larga evita quemarte en olla hondo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre utensilios mínimos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Kit mínimo eficiente?',
              options: [
                'Sin cuchillo',
                'Solo tenedor',
                'Cuchillo, olla, cuchara y encendedor',
                'Juego completo de 20 piezas',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l016',
        title: '16. Encendido fiable',
        duration: '8 min',
        theory: `<p>Encendido fiable es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, guarda mecheros en bolsa impermeable Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar encendido fiable con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Mechero + fósforos impermeables + yesca de respaldo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Encendido fiable',
          content: `<p>Fósforo de caja dentro de película sellada.</p>`,
          tip: 'Practica encender fogón con guantes fríos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre encendido fiable.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Respaldo encendido?',
              options: [
                'Fricción de ramas siempre fácil',
                'Fósforos impermeables y yesca',
                'Solo papel',
                'Esperar rayo',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l017',
        title: '17. Superficie de cocina',
        duration: '8 min',
        theory: `<p>Superficie de cocina es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, nivela fogón antes de poner olla con agua Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar superficie de cocina con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Roca plana o mesa plegable estable lejos de tienda</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Superficie de cocina',
          content: `<p>Piedra inestable vuelca olla caliente.</p>`,
          tip: 'Marca zona cocina para que otros no pisen.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre superficie de cocina.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Superficie segura?',
              options: [
                'Inclinada hacia la tienda',
                'Sobre raíces mojadas',
                'En interior de tienda',
                'Plana, estable y despejada',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l018',
        title: '18. Limpieza de ollas',
        duration: '8 min',
        theory: `<p>Limpieza de ollas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lleva esponja pequeña y escurre lejos de fuente Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar limpieza de ollas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Agua caliente, poco jabón biodegradable lejos de arroyo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Limpieza de ollas',
          content: `<p>Restos de comida atraen fauna cerca del campamento.</p>`,
          tip: 'Arena fina puede fregar sin jabón en pinchos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre limpieza de ollas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Lavar platos en arroyo?',
              options: [
                'Evitar; usar agua aparte y dispersar',
                'Directo en corriente',
                'Con detergente industrial',
                'Dejar platos sucios',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l019',
        title: '19. Combustible transporte',
        duration: '8 min',
        theory: `<p>Combustible transporte es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, consulta aerolínea para gas en equipaje facturado Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar combustible transporte con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Cartuchos fuera de mochila caliente; avión solo según norma</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Combustible transporte',
          content: `<p>Gas en cabina suele estar prohibido.</p>`,
          tip: 'Almacena lejos del sol en coche.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre combustible transporte.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cartucho gas en avión?',
              options: [
                'Perforado para aligerar',
                'Seguir normativa IATA y aerolínea',
                'Siempre en carry-on',
                'Oculto sin declarar',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l020',
        title: '20. Mantenimiento fogón',
        duration: '8 min',
        theory: `<p>Mantenimiento fogón es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, guarda fogón seco tras cada viaje Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar mantenimiento fogón con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Limpiar quemador y revisar orificios obstruidos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Mantenimiento fogón',
          content: `<p>Orificio tapado causa llama amarilla irregular.</p>`,
          tip: 'Junta de cartucho dañada pierde gas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mantenimiento fogón.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Llama amarilla irregular?',
              options: [
                'Signo de cocción perfecta',
                'Falta de oxígeno en botella',
                'Posible obstrucción o suciedad',
                'Normal siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'coc-mod-3',
    title: 'Planificación de menús',
    description: 'Calorías, peso y logística de ingredientes',
    lessons: [
      {
        id: 'coc-l021',
        title: '21. Densidad calórica',
        duration: '8 min',
        theory: `<p>Densidad calórica es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, añade aceite de oliva a pasta en sobre Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar densidad calórica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Grasas 9 kcal/g; ideales para reducir peso en trekking</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Densidad calórica',
          content: `<p>Nueces y chocolate aportan energía compacta.</p>`,
          tip: 'Balancea con fibra para digestión.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre densidad calórica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Alimento más calórico por gramo?',
              options: [
                'Agua',
                'Lechuga',
                'Caldo diluido',
                'Grasas',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l022',
        title: '22. Deshidratados comerciales',
        duration: '8 min',
        theory: `<p>Deshidratados comerciales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba en casa tiempos de rehidratación Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar deshidratados comerciales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Ligeros; requieren agua caliente y tiempo de hidratación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Deshidratados comerciales',
          content: `<p>Arroz deshidratado puede quedar crudo si falta agua.</p>`,
          tip: 'Sobres de una ración facilitan porciones.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre deshidratados comerciales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja deshidratado?',
              options: [
                'Siempre más barato',
                'No caduca nunca',
                'Peso bajo y larga conservación',
                'Sin necesidad de agua',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l023',
        title: '23. One-pot meals',
        duration: '8 min',
        theory: `<p>One-pot meals es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, planifica guisos donde pasta y salsa cocinen juntos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar one-pot meals con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Una olla reduce limpieza y combustible</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: One-pot meals',
          content: `<p>Lentejas + arroz + especias = comida completa.</p>`,
          tip: 'Remover evita pegar en fondo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre one-pot meals.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ventaja one-pot?',
              options: [
                'Requiere tres fogones',
                'Menos utensilios y limpieza',
                'Más peso',
                'Peor sabor siempre',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l024',
        title: '24. Snacks de marcha',
        duration: '8 min',
        theory: `<p>Snacks de marcha es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, porciona snacks en bolsitas diarias Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar snacks de marcha con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Energía rápida sin parar: frutos secos, barritas, fruta seca</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Snacks de marcha',
          content: `<p>Comer poco y seguido mantiene energía estable.</p>`,
          tip: 'Evita solo azúcar simple: crash posterior.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre snacks de marcha.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Snack equilibrado en ruta?',
              options: [
                'Frutos secos y fruta seca',
                'Solo refresco',
                'Ensalada grande',
                'Sopa caliente en termo siempre',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l025',
        title: '25. Desayuno de campamento',
        duration: '8 min',
        theory: `<p>Desayuno de campamento es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa bolsa con cierre para overnight oats con agua fría Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar desayuno de campamento con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Avena, café y fruta seca arrancan día sin mucho tiempo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Desayuno de campamento',
          content: `<p>Café filtrado por goteo ligero anima madrugones.</p>`,
          tip: 'Desayuno caliente requiere más combustible.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre desayuno de campamento.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Desayuno rápido sin cocina?',
              options: [
                'Sushi fresco',
                'Horno de leña',
                'Muesli con agua o leche en polvo',
                'Filete a la plancha',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l026',
        title: '26. Menú por días',
        duration: '8 min',
        theory: `<p>Menú por días es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, tabla: día × comidas × peso Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar menú por días con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Lista ingredientes por día evita exceso o falta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Menú por días',
          content: `<p>Sobrar 500 g × 5 días = 2,5 kg innecesarios.</p>`,
          tip: 'Día de reserva con barritas extra.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre menú por días.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Planificar menú?',
              options: [
                'Sin agua planificada',
                'Lista por día con pesos',
                'Comprar al azar',
                'Solo un tipo de comida',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l027',
        title: '27. Vegetarianismo en campo',
        duration: '8 min',
        theory: `<p>Vegetarianismo en campo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lleva lentejas rápidas o hummus en sobre Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar vegetarianismo en campo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Proteína: legumbres, texturizados, quinoa, frutos secos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Vegetarianismo en campo',
          content: `<p>Combinar cereal + legumbre mejora perfil aminoácidos.</p>`,
          tip: 'Vitamina B12 suplemento en dietas estrictas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre vegetarianismo en campo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Proteína vegetal trekking?',
              options: [
                'Solo lechuga',
                'Agua',
                'Azúcar',
                'Legumbres y frutos secos',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l028',
        title: '28. Especias y sabor',
        duration: '8 min',
        theory: `<p>Especias y sabor es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, un buen sabor mejora moral del grupo Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar especias y sabor con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Sal, pimienta y mezcla favorita en tubo pequeño</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Especias y sabor',
          content: `<p>Limón en polvo realza guisos.</p>`,
          tip: 'Sal insuficiente en sudor intenso: considera electrolitos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre especias y sabor.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Mejorar moral con comida?',
              options: [
                'Especias ligeras y variadas',
                'Sin sal nunca',
                'Solo picante extremo',
                'Evitar todo sabor',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l029',
        title: '29. Porciones grupales',
        duration: '8 min',
        theory: `<p>Porciones grupales es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, designa cocinero y ayudante por turnos Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar porciones grupales con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Escala recetas y reparte tareas cocinar/limpiar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Porciones grupales',
          content: `<p>Doblar receta no siempre dobla tiempo.</p>`,
          tip: 'Comunica alergias antes de servir.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre porciones grupales.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cocina grupal?',
              options: [
                'Porciones aleatorias',
                'Turnos claros y porciones calculadas',
                'Una persona hace todo siempre',
                'Sin hablar de alergias',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l030',
        title: '30. Presupuesto y compras',
        duration: '8 min',
        theory: `<p>Presupuesto y compras es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, compra frutos secos a granel y porciona Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar presupuesto y compras con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Supermercado vs tienda outdoor: equilibrio peso y precio</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Presupuesto y compras',
          content: `<p>Atún en lata es económico y proteico.</p>`,
          tip: 'Evita packaging pesado innecesario.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre presupuesto y compras.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ahorrar sin perder nutrición?',
              options: [
                'Eliminar proteína',
                'Llevar latas enteras sin plan',
                'Comprar básicos y porcionar en casa',
                'Solo comidas de lujo',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'coc-mod-4',
    title: 'Técnicas de cocción',
    description: 'Hervir, guisar, asar y horno de campamento',
    lessons: [
      {
        id: 'coc-l031',
        title: '31. Hervir agua eficiente',
        duration: '8 min',
        theory: `<p>Hervir agua eficiente es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, calienta solo agua necesaria para pasta o té Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar hervir agua eficiente con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Tapa acelera ebullición; menos agua = menos combustible</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Hervir agua eficiente',
          content: `<p>Viento sin pantalla duplica tiempo de hervido.</p>`,
          tip: 'Agua a 100 °C mata bacterias por ebullición.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre hervir agua eficiente.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Hervir más rápido?',
              options: [
                'Olla abierta al viento',
                'Agua fría extra',
                'Sin tapa siempre',
                'Tapa y pantalla de viento',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l032',
        title: '32. Cocción a fuego lento',
        duration: '8 min',
        theory: `<p>Cocción a fuego lento es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, remueve fondo para no quemar Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar cocción a fuego lento con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Guisos espesan y saben mejor con simmmer bajo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Cocción a fuego lento',
          content: `<p>Lentejas sin remojo largo si hierves bien.</p>`,
          tip: 'Simmer es burbuja pequeña, no ebullición fuerte.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cocción a fuego lento.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Simmer correcto?',
              options: [
                'Sin calor nunca',
                'Llama máxima siempre',
                'Burbujas pequeñas ocasionales',
                'Ebullición violenta',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l033',
        title: '33. Asar en sartén',
        duration: '8 min',
        theory: `<p>Asar en sartén es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, secar superficie de carne antes de sellar Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar asar en sartén con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Aceite caliente antes de proteína evita pegar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Asar en sartén',
          content: `<p>No llenes sartén: humedad impide dorado.</p>`,
          tip: 'Dejar reposar 2 min tras cocinar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre asar en sartén.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Evitar pegar en sartén?',
              options: [
                'Sin aceite nunca',
                'Superficie seca y sartén caliente',
                'Sartén fría con agua',
                'Mucha comida junta',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l034',
        title: '34. Horno reflectante',
        duration: '8 min',
        theory: `<p>Horno reflectante es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba brownies en bolsa horno en campamento Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar horno reflectante con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Panel reflectante con bolsa horno cocina con menos combustible</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Horno reflectante',
          content: `<p>Viento reduce eficiencia del horno solar/reflector.</p>`,
          tip: 'Ideal en sol fuerte y día sin nubes.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre horno reflectante.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Bolsa horno?',
              options: [
                'Aísla calor para hornear con poco gas',
                'Enfría comida',
                'Sustituye agua',
                'Conserva crudo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l035',
        title: '35. Cocción al vapor improvisada',
        duration: '8 min',
        theory: `<p>Cocción al vapor improvisada es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, brócoli al vapor retiene nutrientes Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar cocción al vapor improvisada con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Rejilla sobre olla con agua herviendo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Cocción al vapor improvisada',
          content: `<p>Tapa esencial para retener vapor.</p>`,
          tip: 'Cuidado vapor al abrir: quemaduras.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cocción al vapor improvisada.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Vapor en campo?',
              options: [
                'Freír sin aceite seco',
                'Microondas portátil',
                'Rejilla o plato elevado sobre agua hirviendo',
                'Hervir sin tapa horas',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l036',
        title: '36. Rehydration meals',
        duration: '8 min',
        theory: `<p>Rehydration meals es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, revuelve a mitad de tiempo indicado Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar rehydration meals con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Dejar hidratar 10–15 min tras ebullición según fabricante</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Rehydration meals',
          content: `<p>Arroz instantáneo vs parboiled difieren en agua.</p>`,
          tip: 'Probar en casa evita sorpresas en montaña.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre rehydration meals.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Arroz deshidratado?',
              options: [
                'Cocinar 2 h siempre',
                'Seguir ratio agua del fabricante',
                'Sin agua',
                'Agua fría instantánea',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l037',
        title: '37. Pan plano en sartén',
        duration: '8 min',
        theory: `<p>Pan plano en sartén es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, masa no muy húmeda para sartén caliente Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar pan plano en sartén con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Harina, agua, sal y fogón = tortilla o bannock</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Pan plano en sartén',
          content: `<p>Bannock en palo es tradición scout.</p>`,
          tip: 'Gira cuando burbujas aparecen.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre pan plano en sartén.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Pan sin horno?',
              options: [
                'Crudo en agua',
                'Solo microondas',
                'Sin calor',
                'Sartén con masa plana',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l038',
        title: '38. Altitud y ebullición',
        duration: '8 min',
        theory: `<p>Altitud y ebullición es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa olla a presión de campamento si >2500 m Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar altitud y ebullición con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: A mayor altitud ebullición baja: cocción más lenta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Altitud y ebullición',
          content: `<p>Agua hierve a 93 °C en 2000 m aprox.</p>`,
          tip: 'Pasta necesita más tiempo o presión.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre altitud y ebullición.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ebullición a 3000 m?',
              options: [
                'Menor de 100 °C',
                'Igual que nivel mar',
                'Imposible hervir',
                '300 °C',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l039',
        title: '39. Postres simples',
        duration: '8 min',
        theory: `<p>Postres simples es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, compota rehidrata con agua caliente y canela Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar postres simples con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Compota de manzana deshidratada o chocolate fundido</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Postres simples',
          content: `<p>Postre mejora ánimo tras día duro.</p>`,
          tip: 'Chocolate se derrite en bolsillo en verano.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre postres simples.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Postre ligero?',
              options: [
                'Sin azúcar nunca',
                'Fruta deshidratada rehidratada',
                'Tarta de tres pisos',
                'Helo seco complejo',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l040',
        title: '40. Café y té en campo',
        duration: '8 min',
        theory: `<p>Café y té en campo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lleva prensa de plástico ligero Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar café y té en campo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Filtrado, prensa francesa pequeña o té en hoja</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Café y té en campo',
          content: `<p>Cafeína moderada ayuda alerta; exceso deshidrata.</p>`,
          tip: 'Té de hierbas sin cafeína por la noche.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre café y té en campo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Café sin electricidad?',
              options: [
                'Solo instantáneo siempre',
                'Hervir granos enteros sin moler',
                'Prensa francesa o filtro de goteo',
                'Express eléctrico',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'coc-mod-5',
    title: 'Logística y conservación',
    description: 'Almacenamiento, residuos y práctica Leave No Trace',
    lessons: [
      {
        id: 'coc-l041',
        title: '41. Leave No Trace cocina',
        duration: '8 min',
        theory: `<p>Leave No Trace cocina es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, empaca basura en bolsa doble hasta contenedor Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar leave no trace cocina con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Minimizar impacto: comida seca, poca basura, sitio limpio</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Leave No Trace cocina',
          content: `<p>Principio: llevar todo lo que trajiste.</p>`,
          tip: 'Cocina 60 m de lagos y campamentos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre leave no trace cocina.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Principio LNT?',
              options: [
                'Enterrar plásticos',
                'Quemar latas',
                'Dejar restos para fauna',
                'No dejar rastro de comida o basura',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l042',
        title: '42. Empaque y etiquetas',
        duration: '8 min',
        theory: `<p>Empaque y etiquetas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa rotulador permanente en congelador bags Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar empaque y etiquetas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Marcar fecha apertura y contenido en bolsas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Empaque y etiquetas',
          content: `<p>Harina sin etiqueta se confunde con sal.</p>`,
          tip: 'Doble bolsa evita derrames en mochila.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre empaque y etiquetas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué etiquetar?',
              options: [
                'Pesar menos',
                'Evitar cocinar',
                'Identificar y controlar caducidad',
                'Decoración',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l043',
        title: '43. Residuos orgánicos',
        duration: '8 min',
        theory: `<p>Residuos orgánicos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lleva restos en bolsa como basura general Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar residuos orgánicos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: En muchas áreas prohibido tirar restos aunque biodegradables</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Residuos orgánicos',
          content: `<p>Manzana tarda en descomponerse en clima seco.</p>`,
          tip: 'Sigue regulación local del parque.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre residuos orgánicos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cáscaras en parque nacional?',
              options: [
                'Alimentar animales',
                'Llevarlas según normativa',
                'Tirar siempre',
                'Enterrar cerca de tienda',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l044',
        title: '44. Agua gris',
        duration: '8 min',
        theory: `<p>Agua gris es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa jabón biodegradable aún así dispersa Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar agua gris con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Dispersar agua jabonosa lejos de fuentes tras filtrar sólidos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Agua gris',
          content: `<p>Partículas de comida en agua gris atraen fauna.</p>`,
          tip: 'Colador pequeño retiene sólidos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre agua gris.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Agua de lavar platos?',
              options: [
                'Filtrar sólidos y dispersar lejos de arroyo',
                'Verter en manantial',
                'Dejar en olla',
                'Regar tienda',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l045',
        title: '45. Refrigeración improvisada',
        duration: '8 min',
        theory: `<p>Refrigeración improvisada es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, congela botellas de agua como hielo reutilizable Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar refrigeración improvisada con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Saco reflectante, hielo y sombra en verano</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Refrigeración improvisada',
          content: `<p>Nevera sin hielo dura pocas horas en calor.</p>`,
          tip: 'Abre solo lo necesario.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre refrigeración improvisada.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Mantener frío en campamento?',
              options: [
                'Tienda cerrada con comida',
                'Sin nevera nunca',
                'Hielo en contacto y sombra',
                'Dejar al sol',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'coc-l046',
        title: '46. Sobras seguras',
        duration: '8 min',
        theory: `<p>Sobras seguras es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, come sobras en 2 h o desecha en calor Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar sobras seguras con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Enfría rápido o consume pronto; no dejar al sol</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Sobras seguras',
          content: `<p>Arroz cocido a temperatura ambiente puede ser riesgo.</p>`,
          tip: 'En frío invernal más margen pero precaución.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre sobras seguras.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Sobras en verano caliente?',
              options: [
                'Guardar en mochila cerrada',
                'Refrigerar o consumir pronto',
                'Dejar hasta mañana al sol',
                'Mezclar con crudo',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l047',
        title: '47. Checklist salida cocina',
        duration: '8 min',
        theory: `<p>Checklist salida cocina es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, repasa lista en parking antes de caminar Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar checklist salida cocina con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Fogón, combustible, encendedor, olla, comida, agua, basura</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Checklist salida cocina',
          content: `<p>Olvidar encendedor arruina menú caliente.</p>`,
          tip: 'Repuesto de cartucho en rutas largas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre checklist salida cocina.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Olvido crítico?',
              options: [
                'Solo tenedor',
                'Libro de poesía',
                'Toalla de playa',
                'Encendedor y combustible',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'coc-l048',
        title: '48. Práctica en parque urbano',
        duration: '8 min',
        theory: `<p>Práctica en parque urbano es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, cronometra hervido y limpieza Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar práctica en parque urbano con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Simula campamento cocinando comida real en mesa de picnic</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Práctica en parque urbano',
          content: `<p>Prueba en entorno seguro antes de montaña.</p>`,
          tip: 'Invita amigo a probar porciones.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre práctica en parque urbano.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Simulacro urbano?',
              options: [
                'Probar menú y tiempos antes de ruta',
                'Solo leer recetas',
                'Primera vez en cumbre',
                'Sin fogón',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'coc-l049',
        title: '49. Documentar recetas',
        duration: '8 min',
        theory: `<p>Documentar recetas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, cuaderno de campamento culinario Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar documentar recetas con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Anota qué funcionó: agua, tiempo, gustos del grupo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Documentar recetas',
          content: `<p>Receta que falló en lluvia enseña más.</p>`,
          tip: 'Comparte con club de montaña.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre documentar recetas.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cuaderno cocina campo?',
              options: [
                'Copiar sin probar',
                'Tiempos, ratios y feedback',
                'Solo fotos sin notas',
                'Borrar todo',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'coc-l050',
        title: '50. Evaluación post-salida',
        duration: '8 min',
        theory: `<p>Evaluación post-salida es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la cocina de campo y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, pesa sobras para ajustar próximo menú Este conocimiento se relaciona con otros temas del curso y refuerza tu capacidad de analizar la cocina de campo de forma integrada.</p>
        <p>Estudiar evaluación post-salida con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en preparación segura de alimentos.</p>
        <ul><li>Concepto central: Peso sobrante, basura generada y satisfacción nutricional</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en preparación segura de alimentos</li></ul>`,
        example: {
          title: 'Ejemplo: Evaluación post-salida',
          content: `<p>Si sobró 30% comida, reduce lista.</p>`,
          tip: 'Hidratación adecuada: orina clara.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre evaluación post-salida.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ajuste menú siguiente?',
              options: [
                'Eliminar agua',
                'Ignorar feedback',
                'Reducir exceso según sobras reales',
                'Duplicar siempre',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
];
