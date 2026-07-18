export const CURRICULUM = [
  {
    id: 'ham-mod-1',
    title: 'Introducción y bandas',
    description: 'Espectro radioeléctrico, bandas HF/VHF/UHF y servicios',
    lessons: [
      {
        id: 'ham-l001',
        title: '1. ¿Qué es radioafición?',
        duration: '8 min',
        theory: `<p>Radioafición es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, hobby técnico de comunicación inalámbrica con licencia oficial.</p>
        <p>Estudiar ¿qué es radioafición? con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: hobby técnico de comunicación inalámbrica con licencia oficial</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: ¿Qué es radioafición?',
          content: `<p>Contactar estación JA en Japón en 20 m desde México.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar ¿qué es radioafición? en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ¿qué es radioafición?.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Radioafición requiere…',
              options: [
                'Licencia oficial',
                'Solo celular',
                'Sin regulación',
                'Solo TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l002',
        title: '2. Espectro electromagnético',
        duration: '8 min',
        theory: `<p>Espectro es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, radio frecuencias desde kHz hasta GHz organizadas por servicio.</p>
        <p>Estudiar espectro electromagnético con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: radio frecuencias desde kHz hasta GHz organizadas por servicio</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Espectro electromagnético',
          content: `<p>AM broadcast vs FM vs WiFi ocupan bandas distintas.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar espectro electromagnético en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre espectro electromagnético.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Espectro organiza…',
              options: [
                'Frecuencias por servicio',
                'Solo colores',
                'Solo sonido',
                'Solo luz visible',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l003',
        title: '3. Bandas HF',
        duration: '8 min',
        theory: `<p>HF es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, 3-30 MHz propagación ionosférica largo alcance.</p>
        <p>Estudiar bandas hf con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: 3-30 MHz propagación ionosférica largo alcance</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Bandas HF',
          content: `<p>20 m band contacta continentes con 100 W y antena.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar bandas hf en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre bandas hf.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'HF permite…',
              options: [
                'Comunicación largo alcance',
                'Solo 100 m',
                'Solo Bluetooth',
                'Solo fibra',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l004',
        title: '4. Bandas VHF',
        duration: '8 min',
        theory: `<p>VHF es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, 30-300 MHz línea de vista; 2 m amateur band.</p>
        <p>Estudiar bandas vhf con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: 30-300 MHz línea de vista; 2 m amateur band</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Bandas VHF',
          content: `<p>146.520 MHz FM calling frecuencia simplex común.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar bandas vhf en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre bandas vhf.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'VHF típico amateur…',
              options: [
                '2 metros',
                '20 metros HF',
                '2.4 GHz WiFi',
                'AM broadcast',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l005',
        title: '5. Bandas UHF',
        duration: '8 min',
        theory: `<p>UHF es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, 300 MHz-3 GHz; 70 cm band para repeater local.</p>
        <p>Estudiar bandas uhf con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: 300 MHz-3 GHz; 70 cm band para repeater local</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Bandas UHF',
          content: `<p>446 MHz PMR en algunos países; 430-440 ham en MX según IFT.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar bandas uhf en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre bandas uhf.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '70 cm banda es…',
              options: [
                'UHF amateur',
                'HF',
                'LW broadcast',
                'Óptica',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l006',
        title: '6. Bandas CB y FRS',
        duration: '8 min',
        theory: `<p>CB/FRS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, servicios ciudadanos sin examen en algunas bandas.</p>
        <p>Estudiar bandas cb y frs con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: servicios ciudadanos sin examen en algunas bandas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Bandas CB y FRS',
          content: `<p>CB 27 MHz camioneros; FRS walkies familia camping.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar bandas cb y frs en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre bandas cb y frs.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'CB en muchos países…',
              options: [
                'Sin licencia ham',
                'Requiere examen Extra',
                'Solo satélite',
                'Solo militar',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l007',
        title: '7. Plan de bandas IARU',
        duration: '8 min',
        theory: `<p>Plan bandas es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, segmentos para CW, SSB, digital según región.</p>
        <p>Estudiar plan de bandas iaru con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: segmentos para CW, SSB, digital según región</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Plan de bandas IARU',
          content: `<p>CW en borde inferior; SSB voz en segmentos superiores HF.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar plan de bandas iaru en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre plan de bandas iaru.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Plan de bandas…',
              options: [
                'Organiza modos',
                'Prohíbe todo',
                'Solo FM',
                'Sin reglas',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l008',
        title: '8. IFT y regulación México',
        duration: '8 min',
        theory: `<p>IFT México es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, autoridad espectro; XE indicativo mexicano.</p>
        <p>Estudiar ift y regulación méxico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: autoridad espectro; XE indicativo mexicano</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: IFT y regulación México',
          content: `<p>Obtener XE license tras examen IFT o equivalente.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar ift y regulación méxico en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ift y regulación méxico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Indicativo mexicano…',
              options: [
                'Prefijo XE',
                'Prefijo K',
                'Prefijo JA',
                'Sin prefijo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l009',
        title: '9. QSO y indicativos',
        duration: '8 min',
        theory: `<p>QSO es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, contacto entre estaciones con indicativo único.</p>
        <p>Estudiar qso y indicativos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: contacto entre estaciones con indicativo único</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: QSO y indicativos',
          content: `<p>XE1ABC contacta K2XYZ reportando señal 59.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar qso y indicativos en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre qso y indicativos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Indicativo identifica…',
              options: [
                'Estación licenciada',
                'Canal TV',
                'Frecuencia sola',
                'Antena',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l010',
        title: '10. Ética en el aire',
        duration: '8 min',
        theory: `<p>Ética es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, identificarse, no interferir, lenguaje apropiado.</p>
        <p>Estudiar ética en el aire con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: identificarse, no interferir, lenguaje apropiado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Ética en el aire',
          content: `<p>Identificar cada 10 min y al final en HF SSB.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar ética en el aire en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ética en el aire.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'En aire debes…',
              options: [
                'Identificarte regularmente',
                'Jamming',
                'Sin licencia',
                'Ocultar ID',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ham-mod-2',
    title: 'Modulación y modos',
    description: 'AM, FM, SSB, CW y modos digitales',
    lessons: [
      {
        id: 'ham-l011',
        title: '11. Modulación AM',
        duration: '8 min',
        theory: `<p>AM es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, amplitud varía con señal; simple pero ruidosa.</p>
        <p>Estudiar modulación am con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: amplitud varía con señal; simple pero ruidosa</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Modulación AM',
          content: `<p>AM broadcast 530-1700 kHz oído en radio clásica.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar modulación am en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre modulación am.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'AM modula…',
              options: [
                'Amplitud',
                'Frecuencia sola',
                'Fase sola',
                'Color',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l012',
        title: '12. Modulación FM',
        duration: '8 min',
        theory: `<p>FM es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, frecuencia varía; mejor calidad ruido en VHF/UHF.</p>
        <p>Estudiar modulación fm con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: frecuencia varía; mejor calidad ruido en VHF/UHF</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Modulación FM',
          content: `<p>FM amateur 2 m repeater voz clara.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar modulación fm en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre modulación fm.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'FM modula…',
              options: [
                'Frecuencia',
                'Amplitud sola',
                'Longitud onda',
                'Gravedad',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l013',
        title: '13. SSB en HF',
        duration: '8 min',
        theory: `<p>SSB es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, banda lateral única eficiente en potencia para voz larga distancia.</p>
        <p>Estudiar ssb en hf con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: banda lateral única eficiente en potencia para voz larga distancia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: SSB en HF',
          content: `<p>LSB en 40 m; USB en 20 m convención.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar ssb en hf en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ssb en hf.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'SSB es…',
              options: [
                'Single Sideband',
                'FM estéreo',
                'Digital solo',
                'Televisión',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l014',
        title: '14. CW telegrafía',
        duration: '8 min',
        theory: `<p>CW es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, Morse code on/off; penetra ruido y usa poco ancho banda.</p>
        <p>Estudiar cw telegrafía con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: Morse code on/off; penetra ruido y usa poco ancho banda</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: CW telegrafía',
          content: `<p>QRP 5 W CW contacta mundo con antena wire.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar cw telegrafía en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cw telegrafía.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'CW usa…',
              options: [
                'Código Morse',
                'Voz FM',
                'Video',
                'Solo datos',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l015',
        title: '15. RTTY y digital clásico',
        duration: '8 min',
        theory: `<p>RTTY es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, radioteletype FSK texto en HF.</p>
        <p>Estudiar rtty y digital clásico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: radioteletype FSK texto en HF</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: RTTY y digital clásico',
          content: `<p>Contest RTTY en 20 m con software fldigi.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar rtty y digital clásico en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre rtty y digital clásico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'RTTY transmite…',
              options: [
                'Texto',
                'Solo voz',
                'Solo imagen HD',
                'Solo GPS',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l016',
        title: '16. FT8 y WSJT-X',
        duration: '8 min',
        theory: `<p>FT8 es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, modo digital weak signal 15 s slots.</p>
        <p>Estudiar ft8 y wsjt-x con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: modo digital weak signal 15 s slots</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: FT8 y WSJT-X',
          content: `<p>FT8 contacta estaciones -20 dB SNR imposibles SSB.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar ft8 y wsjt-x en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ft8 y wsjt-x.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'FT8 es…',
              options: [
                'Modo digital weak signal',
                'FM voz',
                'AM broadcast',
                'WiFi',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l017',
        title: '17. DMR y C4FM',
        duration: '8 min',
        theory: `<p>Digital VHF/UHF es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, modos digitales voz en repeaters modernos.</p>
        <p>Estudiar dmr y c4fm con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: modos digitales voz en repeaters modernos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: DMR y C4FM',
          content: `<p>DMR talkgroup local vs analog FM mismo repeater dual.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar dmr y c4fm en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dmr y c4fm.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'DMR es…',
              options: [
                'Digital móvil',
                'CW Morse',
                'AM LW',
                'Sat TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l018',
        title: '18. APRS',
        duration: '8 min',
        theory: `<p>APRS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, Automatic Packet Reporting posición y mensajes VHF.</p>
        <p>Estudiar aprs con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: Automatic Packet Reporting posición y mensajes VHF</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: APRS',
          content: `<p>Tracker GPS en auto envía posición 144.390 MHz US.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar aprs en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre aprs.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'APRS envía…',
              options: [
                'Posición/mensajes',
                'Solo voz FM',
                'Solo TV',
                'Solo CW',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l019',
        title: '19. Ancho de banda',
        duration: '8 min',
        theory: `<p>Ancho banda es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, cada modo ocupa kHz distintos; respetar plan banda.</p>
        <p>Estudiar ancho de banda con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: cada modo ocupa kHz distintos; respetar plan banda</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Ancho de banda',
          content: `<p>SSB ~2.4 kHz; CW ~150 Hz; FT8 50 Hz.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar ancho de banda en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ancho de banda.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'CW ocupa…',
              options: [
                'Poco ancho banda',
                '20 MHz',
                'Todo espectro',
                'Sin límite',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l020',
        title: '20. Elegir modo según condición',
        duration: '8 min',
        theory: `<p>Selección modo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, CW/FT8 en propagación pobre; SSB en buenas condiciones.</p>
        <p>Estudiar elegir modo según condición con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: CW/FT8 en propagación pobre; SSB en buenas condiciones</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Elegir modo según condición',
          content: `<p>Mínimo solar: FT8 y CW superan SSB voice.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar elegir modo según condición en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre elegir modo según condición.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Propagación pobre usa…',
              options: [
                'CW/FT8',
                'Solo AM broadcast',
                'Solo FM local',
                'Nada',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ham-mod-3',
    title: 'Antenas',
    description: 'Dipolos, vertical, Yagi y instalación segura',
    lessons: [
      {
        id: 'ham-l021',
        title: '21. Antena dipolo',
        duration: '8 min',
        theory: `<p>Dipolo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, longitud ~468/f MHz pies; radiación figura 8.</p>
        <p>Estudiar antena dipolo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: longitud ~468/f MHz pies; radiación figura 8</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Antena dipolo',
          content: `<p>Dipolo 20 m ~33 pies total en cada lado feed center.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar antena dipolo en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre antena dipolo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Dipolo longitud…',
              options: [
                '~468/f MHz',
                'Infinita',
                '1 cm siempre',
                'Sin cálculo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l022',
        title: '22. Antena vertical',
        duration: '8 min',
        theory: `<p>Vertical es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, omnidireccional; necesita radiales o counterpoise.</p>
        <p>Estudiar antena vertical con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: omnidireccional; necesita radiales o counterpoise</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Antena vertical',
          content: `<p>Vertical 1/4 wave 2 m en techo auto con radial.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar antena vertical en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre antena vertical.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Vertical necesita…',
              options: [
                'Radiales/counterpoise',
                'Solo aire',
                'Sin tierra',
                'Agua',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l023',
        title: '23. Yagi direccional',
        duration: '8 min',
        theory: `<p>Yagi es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, elementos driven/reflector/directors ganancia y dirección.</p>
        <p>Estudiar yagi direccional con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: elementos driven/reflector/directors ganancia y dirección</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Yagi direccional',
          content: `<p>Yagi 3 elem 144 MHz apunta repeater lejano.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar yagi direccional en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre yagi direccional.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Yagi proporciona…',
              options: [
                'Ganancia direccional',
                'Omnidireccional',
                'Sin ganancia',
                'Solo AM',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l024',
        title: '24. SWR y ajuste',
        duration: '8 min',
        theory: `<p>SWR es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, Standing Wave Ratio mide desajuste antena/línea.</p>
        <p>Estudiar swr y ajuste con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: Standing Wave Ratio mide desajuste antena/línea</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: SWR y ajuste',
          content: `<p>SWR 1:1 ideal; >2:1 puede dañar transmisor.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar swr y ajuste en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre swr y ajuste.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'SWR alto indica…',
              options: [
                'Desajuste antena',
                'Perfecto match',
                'Batería llena',
                'Señal GPS',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l025',
        title: '25. Línea coaxial',
        duration: '8 min',
        theory: `<p>Coax es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, RG-58 flexible; LMR-400 baja pérdida largos tramos.</p>
        <p>Estudiar línea coaxial con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: RG-58 flexible; LMR-400 baja pérdida largos tramos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Línea coaxial',
          content: `<p>100 ft RG-58 en UHF pierde más que LMR-400.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar línea coaxial en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre línea coaxial.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Coax conecta…',
              options: [
                'Radio a antena',
                'Solo batería',
                'Solo micrófono',
                'Solo PC',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l026',
        title: '26. Antena portátil HF',
        duration: '8 min',
        theory: `<p>Portable HF es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, end-fed, random wire, vertical packable en SOTA.</p>
        <p>Estudiar antena portátil hf con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: end-fed, random wire, vertical packable en SOTA</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Antena portátil HF',
          content: `<p>SOTA activator con vertical y 5 W multibanda.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar antena portátil hf en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre antena portátil hf.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'SOTA usa…',
              options: [
                'Antenas portátiles',
                'Torres 100 m',
                'Sat dish TV',
                'Solo celular',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l027',
        title: '27. Seguridad RF',
        duration: '8 min',
        theory: `<p>RF safety es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, límite exposición SAR; no transmitir cerca cabeza alta potencia.</p>
        <p>Estudiar seguridad rf con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: límite exposición SAR; no transmitir cerca cabeza alta potencia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Seguridad RF',
          content: `<p>HT 5 W en cintura vs junto oreja prolongado.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar seguridad rf en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre seguridad rf.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'RF alta potencia…',
              options: [
                'Requiere distancia segura',
                'Sin riesgo',
                'Solo beneficia oído',
                'Curación',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l028',
        title: '28. Lightning y tierra',
        duration: '8 min',
        theory: `<p>Rayos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, desconectar y tierra en tormenta; no operar con rayos.</p>
        <p>Estudiar lightning y tierra con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: desconectar y tierra en tormenta; no operar con rayos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Lightning y tierra',
          content: `<p>Desconectar coax entrada casa en temporada eléctrica.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar lightning y tierra en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre lightning y tierra.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Tormenta eléctrica…',
              options: [
                'Desconectar antenas',
                'Transmitir máximo',
                'Subir torre',
                'Tocar coax',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l029',
        title: '29. Antena satélite',
        duration: '8 min',
        theory: `<p>Satélite es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, SO-50, ISS APRS requieren antena y doppler tracking.</p>
        <p>Estudiar antena satélite con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: SO-50, ISS APRS requieren antena y doppler tracking</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Antena satélite',
          content: `<p>Yagi UHF/VHF cross pol SO-50 pass 10 min.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar antena satélite en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre antena satélite.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Sat ham necesita…',
              options: [
                'Tracking y antena',
                'Solo FM carro',
                'Solo AM',
                'WiFi',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l030',
        title: '30. Construir dipolo casero',
        duration: '8 min',
        theory: `<p>DIY dipolo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, cable, insuladores, medidor SWR o analizador.</p>
        <p>Estudiar construir dipolo casero con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: cable, insuladores, medidor SWR o analizador</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Construir dipolo casero',
          content: `<p>Dipole 40 m en árbol con balun 1:1 choke.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar construir dipolo casero en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre construir dipolo casero.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Dipolo casero necesita…',
              options: [
                'Medición longitud/SWR',
                'Sin medir',
                'Solo pegamento',
                'Papel',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ham-mod-4',
    title: 'Licencias y operación',
    description: 'Exámenes, clases de licencia y procedimientos',
    lessons: [
      {
        id: 'ham-l031',
        title: '31. Clases de licencia',
        duration: '8 min',
        theory: `<p>Licencias es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, Técnico, General, Extra en US; México IFT niveles equivalentes.</p>
        <p>Estudiar clases de licencia con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: Técnico, General, Extra en US; México IFT niveles equivalentes</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Clases de licencia',
          content: `<p>Técnico: VHF/UHF; General añade HF privilegios.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar clases de licencia en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre clases de licencia.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Licencia General US…',
              options: [
                'Acceso HF',
                'Solo CB',
                'Sin examen',
                'Solo TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l032',
        title: '32. Examen y estudio',
        duration: '8 min',
        theory: `<p>Examen es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, pool preguntas técnicas, regulación y práctica.</p>
        <p>Estudiar examen y estudio con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: pool preguntas técnicas, regulación y práctica</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Examen y estudio',
          content: `<p>HamStudy app y ARRL manual para Technician.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar examen y estudio en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre examen y estudio.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Examen ham incluye…',
              options: [
                'Técnica y regulación',
                'Solo Morse obligatorio',
                'Solo física nuclear',
                'Nada',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l033',
        title: '33. Callsign e indicativo',
        duration: '8 min',
        theory: `<p>Callsign es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, asignado único por autoridad; vanity calls posibles.</p>
        <p>Estudiar callsign e indicativo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: asignado único por autoridad; vanity calls posibles</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Callsign e indicativo',
          content: `<p>K1ABC asignado; solicitar K1DOG si disponible vanity.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar callsign e indicativo en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre callsign e indicativo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Indicativo es…',
              options: [
                'ID único estación',
                'Frecuencia',
                'Potencia',
                'Antena',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l034',
        title: '34. QSL y confirmación',
        duration: '8 min',
        theory: `<p>QSL es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, tarjeta o LoTW confirma contacto para awards.</p>
        <p>Estudiar qsl y confirmación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: tarjeta o LoTW confirma contacto para awards</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: QSL y confirmación',
          content: `<p>DXCC award requiere QSL 100 países confirmados.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar qsl y confirmación en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre qsl y confirmación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'QSL card…',
              options: [
                'Confirma contacto',
                'Es licencia',
                'Es antena',
                'Es batería',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l035',
        title: '35. Contesting',
        duration: '8 min',
        theory: `<p>Contesting es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, competición contactos en tiempo limitado.</p>
        <p>Estudiar contesting con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: competición contactos en tiempo limitado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Contesting',
          content: `<p>CQ WW DX Contest 24 h fin de semana.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar contesting en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre contesting.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Contest es…',
              options: [
                'Competición contactos',
                'Examen oficial',
                'Silencio radio',
                'Prohibido',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l036',
        title: '36. DX y propagación',
        duration: '8 min',
        theory: `<p>DX es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, contactos larga distancia según ciclo solar ionósfera.</p>
        <p>Estudiar dx y propagación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: contactos larga distancia según ciclo solar ionósfera</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: DX y propagación',
          content: `<p>Ciclo solar 25 aumenta HF DX facilidad.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar dx y propagación en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dx y propagación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'DX significa…',
              options: [
                'Larga distancia',
                'Local solo',
                'Sin radio',
                'TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l037',
        title: '37. Repeaters VHF/UHF',
        duration: '8 min',
        theory: `<p>Repeaters es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, retransmiten señal débil ampliando cobertura.</p>
        <p>Estudiar repeaters vhf/uhf con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: retransmiten señal débil ampliando cobertura</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Repeaters VHF/UHF',
          content: `<p>Entrada 146.520 offset +600 kHz output repeater.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar repeaters vhf/uhf en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre repeaters vhf/uhf.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Repeater…',
              options: [
                'Retransmite señal',
                'Genera electricidad',
                'Es antena solo',
                'Es satélite TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l038',
        title: '38. Simplex vs duplex',
        duration: '8 min',
        theory: `<p>Simplex es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, misma frecuencia TX/RX; duplex usa offset repeater.</p>
        <p>Estudiar simplex vs duplex con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: misma frecuencia TX/RX; duplex usa offset repeater</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Simplex vs duplex',
          content: `<p>146.520 simplex calling; repeater duplex split.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar simplex vs duplex en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre simplex vs duplex.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Simplex usa…',
              options: [
                'Misma freq TX/RX',
                'Offset siempre',
                'Solo HF',
                'Solo sat',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l039',
        title: '39. Emergencias y RACES/ARES',
        duration: '8 min',
        theory: `<p>Emcomm es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, radioaficionados apoyan desastres con nets organizadas.</p>
        <p>Estudiar emergencias y races/ares con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: radioaficionados apoyan desastres con nets organizadas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Emergencias y RACES/ARES',
          content: `<p>Huracán: net local coordina refugios y suministros.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar emergencias y races/ares en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre emergencias y races/ares.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'ARES/RACES…',
              options: [
                'Comunicación emergencia',
                'Solo hobby',
                'Prohibido',
                'Solo TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l040',
        title: '40. Operar legalmente visitando',
        duration: '8 min',
        theory: `<p>Operación visitante es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, CEPT/reciprocal agreements según país visitado.</p>
        <p>Estudiar operar legalmente visitando con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: CEPT/reciprocal agreements según país visitado</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Operar legalmente visitando',
          content: `<p>US ham opera XE con permiso reciprocal según tratado.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar operar legalmente visitando en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre operar legalmente visitando.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Operar en otro país…',
              options: [
                'Revisar acuerdos',
                'Siempre libre',
                'Prohibido siempre',
                'Sin ID',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ham-mod-5',
    title: 'Radios HT y equipamiento',
    description: 'Handhelds, transceptores móvil/base y accesorios',
    lessons: [
      {
        id: 'ham-l041',
        title: '41. Radio HT handheld',
        duration: '8 min',
        theory: `<p>HT es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, portátil VHF/UHF 5 W típico; antena rubber duck.</p>
        <p>Estudiar radio ht handheld con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: portátil VHF/UHF 5 W típico; antena rubber duck</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Radio HT handheld',
          content: `<p>Baofeng UV-5R dual band económico principiante.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar radio ht handheld en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre radio ht handheld.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'HT es…',
              options: [
                'Handheld transceiver',
                'Torre 100 m',
                'Solo receptor',
                'TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l042',
        title: '42. Programación HT',
        duration: '8 min',
        theory: `<p>Programación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, CHIRP software carga canales repeater y simplex.</p>
        <p>Estudiar programación ht con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: CHIRP software carga canales repeater y simplex</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Programación HT',
          content: `<p>CSV repeater list import CHIRP cable USB.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar programación ht en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre programación ht.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'CHIRP sirve para…',
              options: [
                'Programar canales',
                'Afilár cuchillo',
                'Cocinar',
                'GPS solo',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l043',
        title: '43. Transceptor móvil',
        duration: '8 min',
        theory: `<p>Móvil es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, 50 W en auto con antena magnética o perforación.</p>
        <p>Estudiar transceptor móvil con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: 50 W en auto con antena magnética o perforación</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Transceptor móvil',
          content: `<p>Mobile 2 m 50 W contacta repeater 80 km.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar transceptor móvil en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre transceptor móvil.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Móvil ham ventaja…',
              options: [
                'Más potencia/antena',
                'Solo recepción',
                'Sin antena',
                'Solo CB',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l044',
        title: '44. Estación base HF',
        duration: '8 min',
        theory: `<p>Base HF es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, 100 W transceiver, fuente, tuner, antena exterior.</p>
        <p>Estudiar estación base hf con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: 100 W transceiver, fuente, tuner, antena exterior</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Estación base HF',
          content: `<p>IC-7300 SDR HF base con dipole multibanda.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar estación base hf en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre estación base hf.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Estación base HF…',
              options: [
                'Transceiver y antena exterior',
                'Solo walkie',
                'Solo Bluetooth',
                'Solo FM',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l045',
        title: '45. Baterías y energía',
        duration: '8 min',
        theory: `<p>Energía es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, Li-ion HT; batería estación 13.8 V PSU.</p>
        <p>Estudiar baterías y energía con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: Li-ion HT; batería estación 13.8 V PSU</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Baterías y energía',
          content: `<p>Powerbank 12 V para HT en camping activación.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar baterías y energía en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre baterías y energía.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'HT usa…',
              options: [
                'Batería Li-ion',
                'Solo solar panel sin batería',
                'Gasolina directo',
                'Nuclear',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l046',
        title: '46. Micrófonos y PTT',
        duration: '8 min',
        theory: `<p>PTT es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, push-to-talk; speaker mic para móvil.</p>
        <p>Estudiar micrófonos y ptt con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: push-to-talk; speaker mic para móvil</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Micrófonos y PTT',
          content: `<p>PTT foot switch en base HF hands free.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar micrófonos y ptt en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre micrófonos y ptt.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'PTT significa…',
              options: [
                'Push to talk',
                'Power total',
                'Passive tuner',
                'Public TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l047',
        title: '47. Accesorios SWR meter',
        duration: '8 min',
        theory: `<p>SWR meter es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, inline mide SWR y potencia forward/reflected.</p>
        <p>Estudiar accesorios swr meter con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: inline mide SWR y potencia forward/reflected</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Accesorios SWR meter',
          content: `<p>SWR meter antes de operar nueva antena.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar accesorios swr meter en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre accesorios swr meter.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'SWR meter mide…',
              options: [
                'Desajuste antena',
                'Temperatura',
                'GPS',
                'Lluvia',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l048',
        title: '48. Baofeng y limitaciones',
        duration: '8 min',
        theory: `<p>Baofeng es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, económico pero requiere programación y cumplir ley.</p>
        <p>Estudiar baofeng y limitaciones con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: económico pero requiere programación y cumplir ley</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Baofeng y limitaciones',
          content: `<p>No transmitir en frecuencias prohibidas sin licencia.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar baofeng y limitaciones en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre baofeng y limitaciones.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Baofeng sin licencia…',
              options: [
                'Solo escuchar legalmente',
                'Transmitir libre',
                'Jamming OK',
                'Emergencia siempre ilegal',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l049',
        title: '49. Scanner vs ham radio',
        duration: '8 min',
        theory: `<p>Scanner es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, scanner recibe servicios; ham transmite en bandas amateur.</p>
        <p>Estudiar scanner vs ham radio con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: scanner recibe servicios; ham transmite en bandas amateur</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Scanner vs ham radio',
          content: `<p>Scanner escucha policía/aviation; ham TX en 2 m.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar scanner vs ham radio en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre scanner vs ham radio.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Ham radio permite…',
              options: [
                'Transmitir en bandas ham',
                'Solo recibir siempre',
                'Solo WiFi',
                'Solo TV',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'ham-l050',
        title: '50. Kit go-bag radio',
        duration: '8 min',
        theory: `<p>Go-bag es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en naturaleza y aplicaciones prácticas de supervivencia y conservación.</p>
        <p>En la práctica, HT cargado, lista repeater, antena roll-up, power bank.</p>
        <p>Estudiar kit go-bag radio con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al identificar organismos, procesos o tomar decisiones en campo.</p>
        <ul><li>Concepto central: HT cargado, lista repeater, antena roll-up, power bank</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en salidas de observación o simulaciones</li></ul>`,
        example: {
          title: 'Ejemplo: Kit go-bag radio',
          content: `<p>Pelican case: HT, spare battery, Nagoya 771, notas freq.</p>`,
          tip: 'Anota fecha, lugar y condiciones al practicar kit go-bag radio en campo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre kit go-bag radio.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: 'Go-bag radio incluye…',
              options: [
                'HT y antena spare',
                'Solo TV',
                'Solo laptop',
                'Nada',
              ],
              correct: 0,
            },
          ],
        },
      },
    ],
  },
];
