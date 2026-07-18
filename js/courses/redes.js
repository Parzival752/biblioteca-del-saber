export const CURRICULUM = [
  {
    id: 'red-mod-1',
    title: 'Fundamentos de red',
    description: 'IP, máscara, gateway y DNS explicados',
    lessons: [
      {
        id: 'red-l001',
        title: '1. IPv4 privada',
        duration: '8 min',
        theory: `<p>IPv4 privada es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, identifica IP de tu router y PC con ip addr o ipconfig.</p>
        <p>Estudiar ipv4 privada con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Rangos 10/8, 172.16/12, 192.168/16 para LAN</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: IPv4 privada',
          content: `<p>192.168.1.1 suele ser gateway doméstico.</p>`,
          tip: 'IPs privadas no enrutan en Internet directamente.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ipv4 privada.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Rango típico hogar?',
              options: [
                '8.8.8.0/24 privado',
                '1.1.1.1 LAN',
                '224.0.0.0 host',
                '192.168.0.0/16',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l002',
        title: '2. Máscara de subred',
        duration: '8 min',
        theory: `<p>Máscara de subred es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, calcula hosts útiles en /24: 254 aprox.</p>
        <p>Estudiar máscara de subred con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Define porción red vs host; /24 = 255.255.255.0 común</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Máscara de subred',
          content: `<p>Máscara /32 es un solo host.</p>`,
          tip: 'CIDR simplifica notación.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre máscara de subred.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Hosts en /24 típico?',
              options: [
                'Solo 2 siempre',
                'Millones',
                '254 utilizables aprox',
                '65534 en /24',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l003',
        title: '3. Gateway predeterminado',
        duration: '8 min',
        theory: `<p>Gateway predeterminado es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ping gateway desde PC; si falla, problema local.</p>
        <p>Estudiar gateway predeterminado con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Router que enruta tráfico fuera de subred local</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Gateway predeterminado',
          content: `<p>Sin gateway no sales a Internet aunque haya IP.</p>`,
          tip: 'Gateway incorrecto = aislamiento.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre gateway predeterminado.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Sin gateway correcto?',
              options: [
                'WiFi más fuerte',
                'No accedes fuera de LAN',
                'Más velocidad',
                'DNS automático',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l004',
        title: '4. DNS',
        duration: '8 min',
        theory: `<p>DNS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, nslookup dominio comprueba resolución.</p>
        <p>Estudiar dns con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Traduce nombres a IP; suele ser router o 8.8.8.8/1.1.1.1</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: DNS',
          content: `<p>DNS lento afecta sensación de lentitud web.</p>`,
          tip: 'DNS over HTTPS cambia privacidad.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dns.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Función DNS?',
              options: [
                'Resolver nombres a IP',
                'Ampliar WiFi',
                'Cifrar disco',
                'Medir ping físico',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l005',
        title: '5. MAC address',
        duration: '8 min',
        theory: `<p>MAC address es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, encuentra MAC en ip link o etiqueta router.</p>
        <p>Estudiar mac address con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Identificador físico interfaz; útil en DHCP reservas</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: MAC address',
          content: `<p>MAC filtrado en WiFi es seguridad débil sola.</p>`,
          tip: 'Primer tramo comunicación usa MAC.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mac address.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Capa MAC?',
              options: [
                'Física solo cable',
                'DNS',
                'Enlace de datos (L2)',
                'Aplicación (L7)',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l006',
        title: '6. DHCP',
        duration: '8 min',
        theory: `<p>DHCP es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, reserva IP por MAC en panel router para servidor.</p>
        <p>Estudiar dhcp con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Asigna IP automáticamente; lease temporal</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: DHCP',
          content: `<p>Agotar pool DHCP impide nuevos dispositivos.</p>`,
          tip: 'Renovar: dhclient o reconectar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre dhcp.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿DHCP sin leases libres?',
              options: [
                'Cable se rompe',
                'Dispositivos no obtienen IP',
                'Internet más rápido',
                'DNS desaparece',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l007',
        title: '7. NAT doméstico',
        duration: '8 min',
        theory: `<p>NAT doméstico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, múltiples dispositivos comparten IP pública.</p>
        <p>Estudiar nat doméstico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Router traduce IPs privadas a pública WAN</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: NAT doméstico',
          content: `<p>NAT impide acceso entrante sin port forward.</p>`,
          tip: 'CGNAT complica hosting casero.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre nat doméstico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿NAT permite?',
              options: [
                'IPs públicas ilimitadas en LAN',
                'Eliminar router',
                'DNS local',
                'Varios dispositivos con una IP pública',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l008',
        title: '8. TCP vs UDP',
        duration: '8 min',
        theory: `<p>TCP vs UDP es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, HTTP usa TCP; DNS tradicional UDP.</p>
        <p>Estudiar tcp vs udp con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: TCP confiable con handshake; UDP rápido sin garantía</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: TCP vs UDP',
          content: `<p>Streaming puede usar UDP con buffer.</p>`,
          tip: 'Puertos identifican servicios.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tcp vs udp.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Protocolo confiable?',
              options: [
                'TCP',
                'UDP',
                'ICMP siempre',
                'ARP web',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l009',
        title: '9. Puertos comunes',
        duration: '8 min',
        theory: `<p>Puertos comunes es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, nmap localhost en red propia con permiso.</p>
        <p>Estudiar puertos comunes con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: 80 HTTP, 443 HTTPS, 22 SSH, 53 DNS</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Puertos comunes',
          content: `<p>Firewall bloquea puertos no necesarios.</p>`,
          tip: 'Escaneo ajeno puede ser ilegal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre puertos comunes.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿HTTPS?',
              options: [
                'Puerto 80 solo mail',
                'Puerto 443',
                'Puerto 21 siempre',
                'Puerto 25 web',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l010',
        title: '10. Modelo OSI práctico',
        duration: '8 min',
        theory: `<p>Modelo OSI práctico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, si ping IP OK pero no nombre, sospecha DNS.</p>
        <p>Estudiar modelo osi práctico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: 7 capas; diagnóstico de abajo arriba: cable, IP, DNS, app</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Modelo OSI práctico',
          content: `<p>Capa física: cable malo común.</p>`,
          tip: 'Aplicación: certificado SSL caducado.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre modelo osi práctico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ping IP OK, nombre falla?',
              options: [
                'Monitor apagado',
                'Teclado',
                'Problema DNS probable',
                'Cable roto',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'red-mod-2',
    title: 'WiFi doméstico',
    description: 'SSID, bandas, canal y cobertura',
    lessons: [
      {
        id: 'red-l011',
        title: '11. 2.4 vs 5 GHz',
        duration: '8 min',
        theory: `<p>2.4 vs 5 GHz es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, conecta móvil a 5 GHz cerca del router.</p>
        <p>Estudiar 2.4 vs 5 ghz con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: 2.4 más alcance; 5 más velocidad y menos interferencia</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: 2.4 vs 5 GHz',
          content: `<p>2.4 atraviesa paredes mejor.</p>`,
          tip: 'Algunos IoT solo 2.4.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre 2.4 vs 5 ghz.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Mejor throughput cerca router?',
              options: [
                '2.4 siempre',
                'Bluetooth',
                'Cable coaxial',
                '5 GHz',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l012',
        title: '12. Canales WiFi',
        duration: '8 min',
        theory: `<p>Canales WiFi es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, analiza congestión con app WiFi analyzer.</p>
        <p>Estudiar canales wifi con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: 2.4 GHz canales 1,6,11 no solapados en EEUU/EU similar</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Canales WiFi',
          content: `<p>Vecinos en mismo canal reducen velocidad.</p>`,
          tip: 'Auto canal ayuda pero no perfecto.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre canales wifi.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Canales 2.4 sin solapar (1,6,11)?',
              options: [
                'Cierran DHCP',
                'Apagan DNS',
                'Reducen interferencia mutua',
                'Duplican señal',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l013',
        title: '13. SSID y contraseña',
        duration: '8 min',
        theory: `<p>SSID y contraseña es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, cambia contraseña por defecto del router.</p>
        <p>Estudiar ssid y contraseña con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: WPA2/WPA3; contraseña larga aleatoria</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: SSID y contraseña',
          content: `<p>WPS es vulnerable: desactivar.</p>`,
          tip: 'SSID oculto no es seguridad real.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ssid y contraseña.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Seguridad WiFi moderna?',
              options: [
                'Sin contraseña',
                'WPA3 o WPA2 fuerte',
                'WEP',
                'Abierto siempre',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l014',
        title: '14. Repetidor vs mesh',
        duration: '8 min',
        theory: `<p>Repetidor vs mesh es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, evalúa cobertura en planta alta.</p>
        <p>Estudiar repetidor vs mesh con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Repetidor halva ancho de banda; mesh coordina nodos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Repetidor vs mesh',
          content: `<p>Cable ethernet backhaul es ideal.</p>`,
          tip: 'Mesh caro pero cómodo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre repetidor vs mesh.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Mesh ventaja?',
              options: [
                'Roaming coordinado entre nodos',
                'Siempre más lento que nada',
                'Elimina cable',
                'Sustituye ISP',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l015',
        title: '15. Potencia y ubicación',
        duration: '8 min',
        theory: `<p>Potencia y ubicación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no dentro de armario metálico.</p>
        <p>Estudiar potencia y ubicación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Router central elevado lejos de metales</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Potencia y ubicación',
          content: `<p>Microondas interfiere 2.4 GHz.</p>`,
          tip: 'Antenas verticales para cobertura horizontal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre potencia y ubicación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Peor ubicación router?',
              options: [
                'Lejos microondas',
                'Con ventilación',
                'Armario metálico cerrado',
                'Centro casa elevado',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l016',
        title: '16. Invitados WiFi',
        duration: '8 min',
        theory: `<p>Invitados WiFi es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, activa red invitados para visitas IoT.</p>
        <p>Estudiar invitados wifi con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: SSID invitados aísla de dispositivos LAN</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Invitados WiFi',
          content: `<p>Impide acceso a NAS/impressoras LAN.</p>`,
          tip: 'Límite velocidad opcional.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre invitados wifi.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Red invitados?',
              options: [
                'Abre puertos',
                'Aislamiento de dispositivos principales',
                'Más contraseña admin',
                'Apaga Internet',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l017',
        title: '17. Actualizar firmware router',
        duration: '8 min',
        theory: `<p>Actualizar firmware router es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, backup config antes de actualizar.</p>
        <p>Estudiar actualizar firmware router con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Parches seguridad y estabilidad</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Actualizar firmware router',
          content: `<p>Firmware antiguo tiene CVEs conocidos.</p>`,
          tip: 'Reinicio programado post-update.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre actualizar firmware router.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Por qué actualizar firmware?',
              options: [
                'Más MACs',
                'Cambiar color LED',
                'Eliminar WiFi',
                'Seguridad y correcciones',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l018',
        title: '18. QoS básico',
        duration: '8 min',
        theory: `<p>QoS básico es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, configura QoS si router lo soporta.</p>
        <p>Estudiar qos básico con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Prioriza tráfico videollamada o juego</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: QoS básico',
          content: `<p>Subida saturada afecta ACKs y latencia.</p>`,
          tip: 'QoS mal configurado empeora.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre qos básico.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿QoS útil cuando?',
              options: [
                'Subida limitada saturada',
                'Fibra simétrica ociosa',
                'Sin dispositivos',
                'Cable apagado',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l019',
        title: '19. Diagnóstico velocidad',
        duration: '8 min',
        theory: `<p>Diagnóstico velocidad es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba con cable ethernet directo.</p>
        <p>Estudiar diagnóstico velocidad con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: speedtest en cable vs WiFi compara</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Diagnóstico velocidad',
          content: `<p>WiFi nunca iguala cable en estabilidad.</p>`,
          tip: 'Varios tests en horas distintas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre diagnóstico velocidad.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Test fiable WiFi?',
              options: [
                'Con VPN siempre',
                'Comparar con ethernet mismo momento',
                'Un test forever',
                'Solo móvil lejos',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l020',
        title: '20. Lista dispositivos conectados',
        duration: '8 min',
        theory: `<p>Lista dispositivos conectados es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, identifica desconocidos y cambia WiFi.</p>
        <p>Estudiar lista dispositivos conectados con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Panel router muestra DHCP clients</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Lista dispositivos conectados',
          content: `<p>IoT olvidado puede ser vector ataque.</p>`,
          tip: 'Renombra dispositivos para reconocer.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre lista dispositivos conectados.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Dispositivo desconocido en lista?',
              options: [
                'Abrir todos puertos',
                'Apagar firewall',
                'Investigar y bloquear si no es tuyo',
                'Ignorar',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'red-mod-3',
    title: 'Cableado y hardware',
    description: 'Switch, router, PoE y pruebas físicas',
    lessons: [
      {
        id: 'red-l021',
        title: '21. Router vs switch vs modem',
        duration: '8 min',
        theory: `<p>Router vs switch vs modem es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, diagrama tu red doméstica en papel.</p>
        <p>Estudiar router vs switch vs modem con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Modem ISP; router enruta; switch expande puertos L2</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Router vs switch vs modem',
          content: `<p>Modem-router combo común en ISP.</p>`,
          tip: 'Switch no asigna IP.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre router vs switch vs modem.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Expandir puertos ethernet?',
              options: [
                'Modem solo',
                'Monitor',
                'Teclado USB',
                'Switch',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l022',
        title: '22. Cat5e vs Cat6',
        duration: '8 min',
        theory: `<p>Cat5e vs Cat6 es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usa Cat6 para cableado nuevo.</p>
        <p>Estudiar cat5e vs cat6 con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Cat6 mejor rendimiento a distancias cortas 1G+</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Cat5e vs Cat6',
          content: `<p>Cable dañado causa negociación 100M.</p>`,
          tip: 'No doblar excesivamente.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre cat5e vs cat6.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cable gigabit estable?',
              options: [
                'HDMI',
                'Audio RCA',
                'Cat5e/Cat6 buen estado',
                'Cable telefónico',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l023',
        title: '23. PoE',
        duration: '8 min',
        theory: `<p>PoE es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, verifica switch PoE budget watts.</p>
        <p>Estudiar poe con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Alimentación por ethernet para AP y cámaras</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: PoE',
          content: `<p>Estándares 802.3af/at/bt distintos potencia.</p>`,
          tip: 'Cable largo reduce voltaje.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre poe.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿PoE para?',
              options: [
                'PC gaming',
                'AP y cámaras sin adaptador',
                'Monitor 4K',
                'Impresora láser grande',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l024',
        title: '24. Link lights',
        duration: '8 min',
        theory: `<p>Link lights es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, sin luz link: cable o puerto malo.</p>
        <p>Estudiar link lights con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: LED en puerto indica link y velocidad</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Link lights',
          content: `<p>Parpadeo indica tráfico.</p>`,
          tip: 'Cruzar TX/RX en cable directo antiguo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre link lights.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Sin luz link?',
              options: [
                'Cable, puerto o interfaz apagada',
                'DNS roto',
                'Contraseña WiFi',
                'CPU caliente',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l025',
        title: '25. Loop de conmutación',
        duration: '8 min',
        theory: `<p>Loop de conmutación es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, evita loops sin STP en switches baratos.</p>
        <p>Estudiar loop de conmutación con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Conectar switch a sí mismo puede crear bucle</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Loop de conmutación',
          content: `<p>Red cae por tormenta broadcast.</p>`,
          tip: 'STP en switches managed previene.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre loop de conmutación.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Loop ethernet?',
              options: [
                'Mejor WiFi',
                'DNS más rápido',
                'Broadcast storm puede paralizar LAN',
                'Más velocidad',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l026',
        title: '26. UPnP y riesgos',
        duration: '8 min',
        theory: `<p>UPnP y riesgos es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, desactiva UPnP si no lo necesitas.</p>
        <p>Estudiar upnp y riesgos con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Abre puertos automáticamente para apps</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: UPnP y riesgos',
          content: `<p>Malware puede abrir puertos vía UPnP.</p>`,
          tip: 'Port forward manual más control.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre upnp y riesgos.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Riesgo UPnP?',
              options: [
                'Cable más largo',
                'Apertura automática no deseada',
                'Más ping',
                'WiFi apagado',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l027',
        title: '27. Port forwarding',
        duration: '8 min',
        theory: `<p>Port forwarding es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, solo abre puertos necesarios para servidor.</p>
        <p>Estudiar port forwarding con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Redirige puerto WAN a IP LAN interna</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Port forwarding',
          content: `<p>Ejemplo: 443→servidor HTTPS local.</p>`,
          tip: 'IP reservada evita cambios DHCP.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre port forwarding.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Acceso externo a NAS?',
              options: [
                'Abrir todos puertos',
                'Sin contraseña',
                'WEP',
                'Port forward + seguridad fuerte',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l028',
        title: '28. VLAN introducción',
        duration: '8 min',
        theory: `<p>VLAN introducción es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, IoT en VLAN separada en redes avanzadas.</p>
        <p>Estudiar vlan introducción con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Segmenta tráfico lógicamente en switch managed</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: VLAN introducción',
          content: `<p>Requiere hardware compatible.</p>`,
          tip: 'Mejora seguridad y broadcast.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre vlan introducción.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿VLAN beneficio?',
              options: [
                'Segmentación y seguridad',
                'Más WiFi alcance',
                'Elimina cables',
                'DNS gratis',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l029',
        title: '29. Tester de cable',
        duration: '8 min',
        theory: `<p>Tester de cable es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, tester barato detecta cruce pares.</p>
        <p>Estudiar tester de cable con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Verifica pares y continuidad</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Tester de cable',
          content: `<p>Toner localiza cable en pared.</p>`,
          tip: 'Certificación para instalaciones pro.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre tester de cable.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Cable sospechoso?',
              options: [
                'Reiniciar monitor',
                'Probar con tester o reemplazar',
                'Ignorar',
                'Más WiFi',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l030',
        title: '30. Documentar red',
        duration: '8 min',
        theory: `<p>Documentar red es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, actualiza tras cada cambio hardware.</p>
        <p>Estudiar documentar red con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Diagrama IP, MAC, ubicación AP y contraseñas en gestor</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Documentar red',
          content: `<p>Password manager para credenciales router.</p>`,
          tip: 'Etiqueta física en patch panel.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre documentar red.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Documentación red?',
              options: [
                'Inseguro siempre',
                'Opcional nunca',
                'Facilita diagnóstico futuro',
                'Ralentiza Internet',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'red-mod-4',
    title: 'Diagnóstico paso a paso',
    description: 'Metodología cuando \'no hay internet\'',
    lessons: [
      {
        id: 'red-l031',
        title: '31. Capa física primero',
        duration: '8 min',
        theory: `<p>Capa física primero es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, reinicia modem y router 30 s apagados.</p>
        <p>Estudiar capa física primero con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Cable, WiFi conectado, luces link</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Capa física primero',
          content: `<p>Muchos problemas son cable suelto.</p>`,
          tip: 'Prueba otro puerto/cable.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre capa física primero.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Primer paso sin internet?',
              options: [
                'Reinstalar OS',
                'Comprar router nuevo',
                'Cambiar ISP sin probar',
                'Verificar link físico/WiFi',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l032',
        title: '32. Ping gateway',
        duration: '8 min',
        theory: `<p>Ping gateway es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ping 192.168.1.1 ejemplo.</p>
        <p>Estudiar ping gateway con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Confirma conectividad LAN</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Ping gateway',
          content: `<p>Si falla gateway, problema local.</p>`,
          tip: 'Firewall PC raro bloquea ping.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ping gateway.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ping gateway falla?',
              options: [
                'Web caída',
                'SSL caducado',
                'Problema LAN o WiFi local',
                'DNS seguro',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l033',
        title: '33. Ping 8.8.8.8',
        duration: '8 min',
        theory: `<p>Ping 8.8.8.8 es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, ping 8.8.8.8.</p>
        <p>Estudiar ping 8.8.8.8 con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Prueba salida Internet sin DNS</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Ping 8.8.8.8',
          content: `<p>OK IP pero no nombre → DNS.</p>`,
          tip: 'Fallo IP → ISP o router WAN.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ping 8.8.8.8.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Ping IP OK, no dominios?',
              options: [
                'Impresora',
                'DNS',
                'Monitor',
                'Teclado',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l034',
        title: '34. Traceroute',
        duration: '8 min',
        theory: `<p>Traceroute es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, traceroute google.com.</p>
        <p>Estudiar traceroute con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Identifica salto donde se pierde ruta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Traceroute',
          content: `<p>Timeout en hop 1 es local.</p>`,
          tip: 'Algunos routers no responden ICMP.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre traceroute.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Timeout hop 1?',
              options: [
                'Problema router/gateway local',
                'Google caído siempre',
                'Teclado',
                'RAM',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l035',
        title: '35. ipconfig / ip addr',
        duration: '8 min',
        theory: `<p>ipconfig / ip addr es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, compara con rango esperado.</p>
        <p>Estudiar ipconfig / ip addr con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Ver IP, máscara, gateway asignados</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: ipconfig / ip addr',
          content: `<p>APIPA 169.254 indica DHCP fallido.</p>`,
          tip: 'Renovar lease puede ayudar.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre ipconfig / ip addr.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿IP 169.254.x.x?',
              options: [
                'DNS rápido',
                'Fibra 10G',
                'DHCP no respondió',
                'Conexión perfecta',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l036',
        title: '36. Flush DNS cache',
        duration: '8 min',
        theory: `<p>Flush DNS cache es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, systemd-resolve --flush-caches o equivalente.</p>
        <p>Estudiar flush dns cache con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Limpiar caché DNS corrupta</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Flush DNS cache',
          content: `<p>Windows: ipconfig /flushdns.</p>`,
          tip: 'Probar otro DNS 1.1.1.1 temporal.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre flush dns cache.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Sospecha DNS local corrupto?',
              options: [
                'Apagar switch',
                'Flush cache DNS',
                'Formatear PC',
                'Cambiar monitor',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l037',
        title: '37. Un solo dispositivo',
        duration: '8 min',
        theory: `<p>Un solo dispositivo es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, olvidar/rediscover WiFi en móvil.</p>
        <p>Estudiar un solo dispositivo con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Si solo uno falla, enfoca en ese dispositivo</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Un solo dispositivo',
          content: `<p>Proxy manual mal configurado.</p>`,
          tip: 'VPN atascada.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre un solo dispositivo.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Solo un PC falla?',
              options: [
                'Router roto seguro',
                'ISP caído',
                'DNS mundial caído',
                'Config ese dispositivo',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l038',
        title: '38. Logs router',
        duration: '8 min',
        theory: `<p>Logs router es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, accede panel admin cable.</p>
        <p>Estudiar logs router con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Revisar WAN disconnects y DHCP</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Logs router',
          content: `<p>Muchos routers muestran uptime WAN.</p>`,
          tip: 'Credenciales en etiqueta o manual.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre logs router.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿WAN caída frecuente?',
              options: [
                'Contactar ISP o revisar modem',
                'Cambiar teclado',
                'Más RAM',
                'Nuevo monitor',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l039',
        title: '39. MTU issues',
        duration: '8 min',
        theory: `<p>MTU issues es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, prueba ping -M do -s 1472 host.</p>
        <p>Estudiar mtu issues con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: MTU incorrecto fragmenta VPN o PPPoE</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: MTU issues',
          content: `<p>Síntoma: algunas páginas no cargan.</p>`,
          tip: 'Ajuste MTU en interfaz.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre mtu issues.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Síntoma MTU?',
              options: [
                'DNS siempre',
                'Algunos sitios fallan otros OK',
                'WiFi apagado',
                'Todo lento igual',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l040',
        title: '40. Escalado ISP',
        duration: '8 min',
        theory: `<p>Escalado ISP es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, anota hora, luces modem, resultados ping.</p>
        <p>Estudiar escalado isp con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Documentar pruebas antes de llamar soporte</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Escalado ISP',
          content: `<p>Soporte pedirá reinicio modem.</p>`,
          tip: 'Nivel 2 si persistencia.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre escalado isp.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Antes llamar ISP?',
              options: [
                'Culpar vecino',
                'Comprar router sin probar',
                'Registro de pruebas realizadas',
                'Sin datos',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'red-mod-5',
    title: 'Seguridad doméstica',
    description: 'Firewall, actualizaciones y higiene',
    lessons: [
      {
        id: 'red-l041',
        title: '41. Contraseña admin router',
        duration: '8 min',
        theory: `<p>Contraseña admin router es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, usuario/contraseña únicos fuertes.</p>
        <p>Estudiar contraseña admin router con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Cambiar default evita takeover remoto</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Contraseña admin router',
          content: `<p>CVEs en routers antiguos explotados.</p>`,
          tip: 'Desactiva admin remoto si no usas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre contraseña admin router.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Admin remoto sin necesidad?',
              options: [
                'Dejar default',
                'password123',
                'SSID admin',
                'Desactivar',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l042',
        title: '42. Actualizar dispositivos IoT',
        duration: '8 min',
        theory: `<p>Actualizar dispositivos IoT es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, lista IoT y calendario update.</p>
        <p>Estudiar actualizar dispositivos iot con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Cámaras y plugs parchean vulnerabilidades</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Actualizar dispositivos IoT',
          content: `<p>Botnets explotan IoT default creds.</p>`,
          tip: 'Segmentar IoT en red invitados.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre actualizar dispositivos iot.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿IoT sin parches?',
              options: [
                'Mejor DNS',
                'Menos cables',
                'Riesgo de botnet',
                'Más velocidad',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l043',
        title: '43. Firewall host',
        duration: '8 min',
        theory: `<p>Firewall host es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, activa firewall en laptop.</p>
        <p>Estudiar firewall host con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: ufw/firewalld en PCs expuestos</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Firewall host',
          content: `<p>No sustituye router firewall.</p>`,
          tip: 'Reglas mínimas necesarias.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre firewall host.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Firewall en laptop?',
              options: [
                'Apaga WiFi',
                'Capa extra protección',
                'Innecesario siempre',
                'Ralentiza CPU 50%',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l044',
        title: '44. HTTPS everywhere',
        duration: '8 min',
        theory: `<p>HTTPS everywhere es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, observa candado navegador.</p>
        <p>Estudiar https everywhere con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Cifrado tráfico web; HSTS en sitios</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: HTTPS everywhere',
          content: `<p>No envíes credenciales en HTTP plano.</p>`,
          tip: 'Certificados Let\'s Encrypt gratuitos.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre https everywhere.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿HTTPS protege?',
              options: [
                'Cifrado en tránsito',
                'Elimina malware local',
                'Oculta IP siempre',
                'Acelera CPU',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l045',
        title: '45. Phishing en red',
        duration: '8 min',
        theory: `<p>Phishing en red es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, no loguear bancos en WiFi abierto.</p>
        <p>Estudiar phishing en red con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Captive portals falsos en WiFi público</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Phishing en red',
          content: `<p>VPN en café protege tráfico.</p>`,
          tip: 'Verificar SSID oficial hotel.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre phishing en red.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿WiFi público bancario?',
              options: [
                'Más rápido',
                'Sin riesgo',
                'Evitar o usar VPN',
                'Siempre seguro',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'red-l046',
        title: '46. Backup configuración router',
        duration: '8 min',
        theory: `<p>Backup configuración router es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, guarda cifrado en password manager.</p>
        <p>Estudiar backup configuración router con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Export config tras cambios</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Backup configuración router',
          content: `<p>Restaurar tras reset factory.</p>`,
          tip: 'Incluye DHCP reservas.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre backup configuración router.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Tras configurar router?',
              options: [
                'Borrar firmware',
                'Exportar backup config',
                'Olvidar',
                'Publicar online',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l047',
        title: '47. Desactivar WPS',
        duration: '8 min',
        theory: `<p>Desactivar WPS es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, toggle off en wireless settings.</p>
        <p>Estudiar desactivar wps con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: PIN WPS brute-forcible</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Desactivar WPS',
          content: `<p>Botón físico WPS también riesgo.</p>`,
          tip: 'Usar WPA2-PSK largo.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre desactivar wps.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿WPS?',
              options: [
                'Más seguro activo',
                'Requerido siempre',
                'Mejor que WPA3',
                'Vulnerable; desactivar',
              ],
              correct: 3,
            },
          ],
        },
      },
      {
        id: 'red-l048',
        title: '48. Monitoreo anomalías',
        duration: '8 min',
        theory: `<p>Monitoreo anomalías es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, revisa dispositivos listados router.</p>
        <p>Estudiar monitoreo anomalías con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Tráfico saliente inusual puede ser malware</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Monitoreo anomalías',
          content: `<p>Adblock DNS reduce riesgo también.</p>`,
          tip: 'Pi-hole combina filtrado y stats.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre monitoreo anomalías.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Tráfico saliente raro?',
              options: [
                'Investigar dispositivo origen',
                'Ignorar',
                'Abrir puertos',
                'Desactivar DHCP',
              ],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'red-l049',
        title: '49. VPN doméstica',
        duration: '8 min',
        theory: `<p>VPN doméstica es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, WireGuard en NAS o router avanzado.</p>
        <p>Estudiar vpn doméstica con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Acceso remoto seguro a LAN</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: VPN doméstica',
          content: `<p>Mejor que port forward RDP expuesto.</p>`,
          tip: 'Mantén claves seguras.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre vpn doméstica.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Acceso remoto files?',
              options: [
                'Telnet',
                'VPN como WireGuard',
                'RDP abierto Internet',
                'FTP sin cifrar',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'red-l050',
        title: '50. Plan respuesta incidente',
        duration: '8 min',
        theory: `<p>Plan respuesta incidente es un concepto fundamental en este módulo. Comprenderlo te permite conectar teoría con observaciones reales en la red local y aplicaciones prácticas cotidianas.</p>
        <p>En la práctica, desconecta IoT comprometido de red.</p>
        <p>Estudiar plan respuesta incidente con ejemplos concretos facilita memorizar principios clave y evitar errores comunes al trabajar en diagnóstico en casa u oficina.</p>
        <ul><li>Concepto central: Aislar dispositivo, cambiar passwords, firmware</li><li>Relaciona esta lección con módulos anteriores y posteriores del curso</li><li>Practica aplicando lo aprendido en diagnóstico en casa u oficina</li></ul>`,
        example: {
          title: 'Ejemplo: Plan respuesta incidente',
          content: `<p>Documenta timeline para soporte.</p>`,
          tip: 'Restaurar backup limpio.',
        },
        exercise: {
          instructions: 'Comprueba lo aprendido sobre plan respuesta incidente.',
          hint: 'Repasa el concepto central de la lección.',
          questions: [
            {
              q: '¿Dispositivo comprometido?',
              options: [
                'Publicar password',
                'Abrir DMZ',
                'Aislar y actualizar/restaurar',
                'Ignorar',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
];
