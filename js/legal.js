/**
 * Textos legales — La Biblioteca del Saber
 * Elaborados con criterios habituales de sitios educativos gratuitos (MX/LATAM).
 * NO sustituyen asesoría de un abogado titulado.
 */

export const LEGAL_VERSION = '2026-07-17';

/** Datos publicos del sitio en produccion (actualiza antes de publicar). */
export const SITE_PUBLIC = {
  url: 'https://parzival752.github.io/biblioteca-del-saber',
  contactEmail: 'bitacorapz.contacto@gmail.com',
  reportUrl: 'mailto:bitacorapz.contacto@gmail.com?subject=Reporte%20Biblioteca%20del%20Saber',
};

/** Identificación del titular (actualiza contacto cuando lo tengas) */
export const LEGAL_OWNER = {
  siteName: 'La Biblioteca del Saber',
  responsible: 'Persona física titular del proyecto «La Biblioteca del Saber»',
  country: 'Estados Unidos Mexicanos',
  contact: SITE_PUBLIC.contactEmail,
  siteUrl: SITE_PUBLIC.url,
};

const owner = LEGAL_OWNER;
const v = LEGAL_VERSION;

const LEGAL_ACCEPTANCE_HTML = `
  <div class="legal-doc__accept">
    <p><strong>Al usar ${owner.siteName}</strong> — entrar, navegar, elegir cursos, guardar progreso o continuar donde lo dejaste —
    <strong>aceptas íntegramente</strong> este documento y todos los demás publicados en la pantalla de inicio:</p>
    <ul class="legal-doc__accept-list">
      <li>Términos y condiciones de uso</li>
      <li>Descargo de responsabilidad</li>
      <li>Política de privacidad</li>
      <li>Donaciones voluntarias (cuando aplique)</li>
      <li>Cookies y almacenamiento local</li>
      <li>Propiedad intelectual</li>
    </ul>
    <p>Si no estás de acuerdo, no uses la Web.</p>
  </div>
`;

export const ABOUT_NOTE = {
  title: '¿Por qué existe esta web?',
  paragraphs: [
    'Soy alguien a quien le gusta aprender un poco de todo. Armé esta biblioteca con ayuda de <strong>inteligencia artificial</strong> — no soy experto en nada de lo que hay aquí; solo fui juntando lo que me interesaba: programación, naturaleza, supervivencia, salud y más.',
    'Tengo <strong>TDAH</strong> y salto de un tema a otro todo el tiempo; por eso quedó tan mezclado. La hice pensando en quien, como yo, quiere explorar sin saber por dónde empezar.',
    'La IA me ayudó a montarlo, pero también significa que puede haber <strong>errores</strong>, cosas incompletas o mal explicadas. Si ves algo raro, avísame con calma y lo voy corrigiendo cuando pueda.',
  ],
  thanks: 'Gracias por estar aquí. Aprender es un viaje, no una carrera.',
};

export const LEGAL_SECTIONS = {
  notice: {
    title: 'Aviso legal',
    html: `
      <p class="legal-doc__warn">Los textos legales de esta Web siguen prácticas habituales de transparencia en sitios educativos. <strong>No constituyen asesoría legal personalizada.</strong></p>
      <p><strong>Última actualización:</strong> ${v}</p>
      <h4>1. Titular del sitio</h4>
      <p>Denominación del proyecto: <strong>${owner.siteName}</strong>.</p>
      <p>Responsable: ${owner.responsible}.</p>
      <p>País de operación declarado: ${owner.country}.</p>
      <p>Contacto: ${owner.contact}</p>
      <h4>2. Objeto del sitio</h4>
      <p>${owner.siteName} es una plataforma digital <strong>gratuita</strong> de carácter <strong>educativo, informativo y recreativo</strong>, accesible mediante navegador web, que ofrece lecciones sobre programación, naturaleza, supervivencia, salud, campo y temas afines, con gamificación (progreso, XP, insignias).</p>
      <p><strong>No somos</strong> una institución acreditada, escuela oficial, clínica, servicio de emergencias, consultoría profesional ni entidad certificadora.</p>
      <h4>3. Gratuidad y donaciones futuras</h4>
      <p>El acceso al contenido es <strong>gratuito</strong>. En el futuro podría habilitarse un mecanismo opcional de <strong>donaciones voluntarias</strong> para apoyar el mantenimiento del proyecto. Las donaciones:</p>
      <ul>
        <li>Serán <strong>enteramente opcionales</strong> y no condicionarán el acceso al contenido.</li>
        <li><strong>No otorgan beneficios, ventajas, certificados oficiales, contenido exclusivo ni derechos</strong> sobre el proyecto.</li>
        <li>Constituirán un acto de liberalidad del donante, sin contraprestación.</li>
      </ul>
      <p>Consulta la sección «Donaciones voluntarias» para el detalle completo cuando aplique.</p>
      <h4>4. Condiciones de acceso</h4>
      <p>El acceso implica la lectura y aceptación de los documentos legales publicados en la pantalla de inicio y en Ajustes. Si no estás de acuerdo, debes abstenerte de usar la Web.</p>
      <h4>5. Legislación aplicable</h4>
      <p>Salvo norma imperativa distinta en tu país de residencia, estos documentos se interpretan conforme a las leyes de ${owner.country}. Para controversias, las partes se someten a los tribunales competentes de ${owner.country}, renunciando a cualquier otro fuero que pudiera corresponderles, en la medida permitida por la ley.</p>
    `,
  },
  terms: {
    title: 'Términos y condiciones de uso',
    html: `
      <p><strong>Última actualización:</strong> ${v}</p>
      <p>Los presentes Términos regulan el acceso y uso de <strong>${owner.siteName}</strong> («la Web») por cualquier persona («Usuario» o «tú»).</p>
      <h4>1. Aceptación</h4>
      <p>Al acceder, navegar, registrarte un perfil local (apodo/avatar) o usar cualquier función, declaras haber leído y aceptado estos Términos, el Aviso legal, el Descargo de responsabilidad, la Política de privacidad y demás documentos aplicables.</p>
      <h4>2. Elegibilidad y menores</h4>
      <p>La Web está dirigida al público general. Si eres menor de edad, debes usarla bajo supervisión de un padre, madre o tutor legal, especialmente en temas de salud, supervivencia, seguridad o actividades de riesgo.</p>
      <h4>3. Naturaleza del servicio</h4>
      <p>La Web se presta <strong>gratuitamente</strong>, «tal cual» (<em>as is</em>) y «según disponibilidad» (<em>as available</em>), sin garantía de funcionamiento ininterrumpido, libre de errores o apta para un fin concreto.</p>
      <h4>4. Uso permitido</h4>
      <p>Queda autorizado el uso personal, educativo y no comercial, respetando la ley y derechos de terceros. Queda expresamente prohibido:</p>
      <ul>
        <li>Utilizar el contenido para actividades ilegales, fraudulentas, difamatorias o peligrosas.</li>
        <li>Presentar la Web o sus lecciones como formación certificada, titulación oficial o asesoría profesional.</li>
        <li>Extraer masivamente contenido, revenderlo, sublicenciarlo o explotarlo comercialmente sin autorización.</li>
        <li>Intentar vulnerar, rastrear, descompilar, realizar ingeniería inversa o interferir con la Web.</li>
        <li>Suplantar identidad o atribuir afiliación institucional falsa (SEP, Cruz Roja, universidades, etc.).</li>
      </ul>
      <h4>5. Contenido asistido por inteligencia artificial</h4>
      <p>Parte del contenido fue creado o revisado con asistencia de herramientas de inteligencia artificial. Puede contener errores factuales, omisiones, sesgos o información desactualizada. <strong>El Usuario debe verificar</strong> cualquier información relevante con fuentes oficiales y profesionales antes de actuar.</p>
      <h4>6. Progreso, insignias y datos</h4>
      <p>Las insignias, niveles y estadísticas de progreso son elementos <strong>gamificados internos</strong> sin validez académica, laboral ni legal oficial. Esta Web <strong>no emite certificados</strong> ni titulaciones de ningún tipo. El progreso se almacena en el dispositivo del Usuario (localStorage); eres responsable de exportar copias de seguridad.</p>
      <h4>7. Enlaces y servicios de terceros</h4>
      <p>La Web puede cargar recursos de terceros (fuentes, librerías CDN, etc.). No controlamos ni respondemos por sus contenidos, disponibilidad ni políticas.</p>
      <h4>8. Modificaciones</h4>
      <p>Podemos modificar contenidos, funcionalidades o estos Términos en cualquier momento. La versión vigente estará accesible desde la pantalla de inicio. El uso continuado tras cambios implica aceptación.</p>
      <h4>9. Suspensión</h4>
      <p>Nos reservamos restringir el acceso o uso indebido, aunque la Web sea de libre acceso.</p>
      <h4>10. Nulidad parcial</h4>
      <p>Si alguna cláusula fuera inválida, las demás conservarán plena vigencia.</p>
      <h4>11. Contacto</h4>
      <p>${owner.contact}</p>
    `,
  },
  disclaimer: {
    title: 'Descargo de responsabilidad',
    html: `
      <p class="legal-doc__warn"><strong>IMPORTANTE — LEE ANTES DE USAR LA WEB</strong></p>
      <h4>1. Fines exclusivamente educativos</h4>
      <p>Toda la información (programación, biología, ecología, supervivencia, primeros auxilios, radioafición, meteorología, exploración, etc.) tiene fines <strong>informativos y educativos generales</strong>. No constituye:</p>
      <ul>
        <li>Consulta, diagnóstico, tratamiento ni recomendación médica.</li>
        <li>Formación certificada en primeros auxilios, rescate, BLS/ACLS ni similares.</li>
        <li>Asesoría legal, contable, financiera, de ingeniería ni de seguridad industrial.</li>
        <li>Entrenamiento oficial para actividades de alto riesgo, montañismo, buceo, tiro, caza o supervivencia en situaciones reales.</li>
        <li>Autorización, licencia o permiso regulatorio (p. ej. radioafición ante el IFT en México).</li>
      </ul>
      <h4>2. Emergencias</h4>
      <p>Ante cualquier emergencia sanitaria o de riesgo vital, <strong>llama de inmediato a los servicios de emergencia</strong> de tu localidad (p. ej. 911 en México). No uses esta Web como única fuente de actuación.</p>
      <h4>3. Salud y primeros auxilios</h4>
      <p>Las técnicas descritas pueden estar incompletas, ser inapropiadas para ciertos pacientes o quedar obsoletas. Solo personal capacitado y certificado debe prestar atención médica. El Usuario asume el riesgo de aplicar información sin la formación adecuada.</p>
      <h4>4. Supervivencia, fauna, flora y campo</h4>
      <p>Identificación de especies, consumo de plantas, manejo de fauna, fuego, refugios, orientación y técnicas de campo pueden ser <strong>peligrosos o ilegales</strong> según el lugar, la temporada y la normativa local. Verifica leyes ambientales, permisos y riesgos antes de actuar.</p>
      <h4>5. Programación y seguridad informática</h4>
      <p>El código de ejemplo se ejecuta en el navegador con fines didácticos. No garantizamos seguridad, rendimiento ni idoneidad para producción. El Usuario es responsable del uso de código en sistemas reales, datos personales y cumplimiento normativo (p. ej. protección de datos).</p>
      <h4>6. Exactitud y actualización</h4>
      <p>No garantizamos que el contenido sea exacto, completo, actualizado o libre de errores. Las leyes, guías médicas, taxonomías y tecnologías cambian con frecuencia.</p>
      <h4>7. Exclusión de garantías</h4>
      <p>En la máxima medida permitida por la ley, la Web se ofrece <strong>sin garantías expresas o implícitas</strong>, incluidas comerciabilidad, idoneidad para un fin particular y no infracción.</p>
      <h4>8. Limitación de responsabilidad</h4>
      <p>En la máxima medida permitida por la ley aplicable, ${owner.responsible} y colaboradores <strong>no serán responsables</strong> por daños directos, indirectos, incidentales, especiales, consecuenciales o punitivos —incluidos, sin limitar, lesiones, muerte, daños materiales, pérdida de datos, lucro cesante o decisiones tomadas con base en el contenido— aun habiendo sido advertidos de su posibilidad.</p>
      <h4>9. Indemnización</h4>
      <p>El Usuario se obliga a mantener indemne al titular frente a reclamaciones de terceros derivadas de su uso indebido de la Web o incumplimiento de estos avisos.</p>
      <h4>10. Sin relación profesional</h4>
      <p>El uso de la Web <strong>no crea</strong> relación médico-paciente, abogado-cliente, instructor-alumno certificado ni similar.</p>
    `,
  },
  privacy: {
    title: 'Política de privacidad',
    html: `
      <p><strong>Última actualización:</strong> ${v}</p>
      <p>${owner.responsible}, responsable del proyecto ${owner.siteName}, informa sobre el tratamiento de datos conforme a principios de transparencia y, cuando corresponda, a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México y normativa análoga en tu jurisdicción.</p>
      <h4>1. Datos tratados</h4>
      <p>En la versión actual, la Web opera <strong>principalmente en tu dispositivo</strong>. Pueden almacenarse localmente:</p>
      <ul>
        <li>Apodo (nickname) y avatar seleccionado.</li>
        <li>Progreso de lecciones, XP, insignias, rachas y borradores de código.</li>
        <li>Preferencias (tema, tamaño de fuente, modo principiante).</li>
      </ul>
      <p>Estos datos <strong>no se envían a servidores propios</strong> del titular en la versión actual.</p>
      <h4>2. Finalidad</h4>
      <p>Personalizar tu experiencia de aprendizaje y conservar tu progreso entre sesiones en el mismo navegador.</p>
      <h4>3. Base y consentimiento</h4>
      <p>Al usar la Web y configurar tu perfil, consientes el almacenamiento local descrito. Puedes retirar el consentimiento eliminando datos del navegador o reiniciando progreso desde Ajustes.</p>
      <h4>4. Derechos ARCO (México)</h4>
      <p>Cuando exista tratamiento de datos personales atribuible al titular, podrás ejercer derechos de Acceso, Rectificación, Cancelación y Oposición contactando por ${owner.contact}. En la versión actual, al ser datos locales, puedes ejercerlos directamente borrando la información en tu navegador.</p>
      <h4>5. Transferencias</h4>
      <p>No vendemos ni transferimos datos personales con fines comerciales. Recursos de terceros (CDN, fuentes) pueden procesar datos técnicos (IP, navegador) según sus propias políticas.</p>
      <h4>6. Exportación</h4>
      <p>Puedes exportar tu progreso en JSON. Ese archivo queda bajo tu responsabilidad; protégelo si lo consideras personal.</p>
      <h4>7. Menores</h4>
      <p>Recomendamos supervisión adulta para menores, especialmente en temas sensibles.</p>
      <h4>8. Seguridad</h4>
      <p>Al ser datos locales, la seguridad depende también de tu dispositivo y navegador. No almacenes en el apodo información identificable si prefieres anonimato.</p>
      <h4>9. Cambios</h4>
      <p>Si en el futuro se incorporan servidores, analytics o donaciones con datos de pago, esta política se actualizará antes o al momento de activar esas funciones.</p>
    `,
  },
  cookies: {
    title: 'Cookies y almacenamiento local',
    html: `
      <p><strong>Última actualización:</strong> ${v}</p>
      <h4>1. Qué usamos</h4>
      <p>La Web utiliza <strong>localStorage</strong> del navegador para guardar progreso y preferencias. No empleamos cookies de publicidad comportamental ni rastreadores propios de analítica en la versión actual.</p>
      <h4>2. Terceros</h4>
      <p>Al cargar fuentes (Google Fonts) o librerías (CodeMirror desde CDN), esos proveedores pueden usar cookies o registros técnicos conforme a sus políticas.</p>
      <h4>3. Cómo eliminar</h4>
      <p>Puedes borrar datos desde la configuración del navegador, reiniciar progreso en Ajustes, o exportar antes una copia de seguridad.</p>
      <h4>4. Futuro</h4>
      <p>Si se añaden cookies de sesión, donaciones o analítica, se informará aquí y, cuando la ley lo exija, se solicitará consentimiento.</p>
    `,
  },
  donations: {
    title: 'Donaciones voluntarias',
    html: `
      <p><strong>Última actualización:</strong> ${v}</p>
      <p>Esta sección describe el marco aplicable si en el futuro se habilitan donaciones para apoyar ${owner.siteName}. <strong>Hoy el contenido es 100 % gratuito</strong> y no es necesario donar para acceder a nada.</p>
      <h4>1. Naturaleza de la donación</h4>
      <p>La donación será un acto <strong>voluntario, altruista y sin contraprestación</strong>. No constituye compra, suscripción, membresía premium ni contrato de servicios.</p>
      <h4>2. Sin beneficios garantizados</h4>
      <p>Donar <strong>no otorga</strong>, en ningún caso:</p>
      <ul>
        <li>Contenido exclusivo, acceso anticipado ni funciones premium.</li>
        <li>Certificados oficiales, titulaciones ni aval académico.</li>
        <li>Influencia sobre el contenido, dirección del proyecto ni derechos de propiedad.</li>
        <li>Respuesta prioritaria, soporte personalizado ni devolución de mensajes.</li>
      </ul>
      <p>La donación es una <strong>pequeña ayuda voluntaria</strong> para cubrir costos aproximados (hosting, dominio, herramientas) si el titular lo decide.</p>
      <h4>3. Irrevocabilidad y reembolsos</h4>
      <p>Salvo error técnico demostrable o disposición legal imperativa, las donaciones se consideran <strong>definitivas y no reembolsables</strong>, al ser liberalidades. No aplica el derecho de desistimiento de consumo sobre donaciones sin contraprestación.</p>
      <h4>4. Procesadores de pago</h4>
      <p>Si se usan plataformas de terceros (PayPal, Ko-fi, Stripe, etc.), el pago estará sujeto también a sus términos. El titular no controla fallos de esas plataformas.</p>
      <h4>5. Impuestos</h4>
      <p>El donante es responsable de las implicaciones fiscales de su aportación en su país. El titular declarará ingresos recibidos conforme a la legislación fiscal aplicable en ${owner.country}.</p>
      <h4>6. Transparencia</h4>
      <p>El titular podrá indicar de forma general el destino de las aportaciones (mantenimiento del sitio). No se garantiza un uso específico por donación individual.</p>
      <h4>7. Activación</h4>
      <p>Hasta que un botón o enlace de donación esté publicado y activo, esta sección es meramente informativa. Al donar, se aceptarán estos términos y los Términos generales de la Web.</p>
    `,
  },
  ip: {
    title: 'Propiedad intelectual',
    html: `
      <p><strong>Última actualización:</strong> ${v}</p>
      <h4>1. Titularidad</h4>
      <p>Salvo indicación contraria, el diseño, estructura, textos originales, personaje del Maestro Alebrije, iconografía propia y compilación de ${owner.siteName} son propiedad de ${owner.responsible} o se usan bajo licencias aplicables.</p>
      <h4>2. Licencia al Usuario</h4>
      <p>Se concede una licencia limitada, personal, no exclusiva, intransferible y revocable para acceder y usar la Web con fines educativos personales y no comerciales.</p>
      <h4>3. Restricciones</h4>
      <p>Queda prohibida la reproducción masiva, redistribución comercial, scraping sistemático, publicación en otros sitios o creación de obras derivadas comerciales sin autorización escrita, salvo lo permitido por la ley (citas breves con atribución).</p>
      <h4>4. Marcas de terceros</h4>
      <p>JavaScript, Python, nombres de tecnologías, instituciones y marcas citadas pertenecen a sus titulares. No implican patrocinio ni afiliación.</p>
      <h4>5. Reclamaciones por derechos de autor (DMCA / notificación)</h4>
      <p>Si crees que algún contenido infringe tus derechos de autor o de propiedad industrial, envía una notificación a ${owner.contact} con:</p>
      <ul>
        <li>Identificación del material reclamado.</li>
        <li>Datos de contacto del reclamante.</li>
        <li>Declaración de buena fe sobre la infracción.</li>
        <li>Documentación que acredite titularidad o representación.</li>
      </ul>
      <p>Tras verificación razonable, procederemos a retirar o corregir el material de ser procedente.</p>
    `,
  },
  reporting: {
    title: 'Reporte de errores',
    html: `
      <p><strong>Última actualización:</strong> ${v}</p>
      <p>Dado que el contenido puede incluir material generado o asistido por IA, agradecemos reportes de errores factuales, typos, enlaces rotos o lecciones confusas.</p>
      <p>Al reportar, indica: curso, lección, descripción del error y fuente de referencia si la tienes. ${owner.contact}</p>
      <p>Los reportes no generan compensación ni obligación de modificación inmediata, pero se tendrán en cuenta de buena fe.</p>
    `,
  },
};

export const LEGAL_LINKS = [
  { id: 'notice', label: 'Aviso legal' },
  { id: 'terms', label: 'Términos y condiciones' },
  { id: 'disclaimer', label: 'Descargo de responsabilidad' },
  { id: 'privacy', label: 'Privacidad' },
  { id: 'donations', label: 'Donaciones voluntarias' },
  { id: 'cookies', label: 'Cookies y almacenamiento' },
  { id: 'ip', label: 'Propiedad intelectual' },
  { id: 'reporting', label: 'Reportar errores' },
];

export function renderAboutNoteHtml({ preview = false } = {}) {
  const previewClass = preview ? ' about-note--preview' : '';
  return `
    <section class="about-note about-note--hero${previewClass}" aria-labelledby="aboutNoteTitle">
      <h2 id="aboutNoteTitle" class="about-note__title">${ABOUT_NOTE.title}</h2>
      ${ABOUT_NOTE.paragraphs.map((p) => `<p>${p}</p>`).join('')}
      <p class="about-note__thanks">${ABOUT_NOTE.thanks}</p>
    </section>
  `;
}

export function renderWelcomeLegalFooterHtml() {
  const buttons = LEGAL_LINKS.map(({ id, label }) =>
    `<button type="button" class="btn btn--ghost btn--sm welcome-footer__btn" data-legal="${id}">${label}</button>`,
  ).join('');

  return `
    <div class="welcome-footer__inner">
      <h2 class="welcome-footer__title">Documentos legales</h2>
      <p class="welcome-footer__intro">
        <strong>100 % gratuito.</strong> Donaciones futuras opcionales, sin beneficios ni contenido exclusivo.
        Contenido educativo; no sustituye asesoría profesional. Parte del contenido fue asistido por IA.
      </p>
      <nav class="welcome-footer__links" aria-label="Abrir documentos legales">${buttons}</nav>
    </div>
  `;
}

/** @deprecated Usar renderWelcomeLegalFooterHtml */
export function renderLegalHubHtml() {
  return renderWelcomeLegalFooterHtml();
}

export function renderLegalFooterLinks() {
  return LEGAL_LINKS.map(({ id, label }) =>
    `<button type="button" class="btn btn--ghost btn--sm legal-footer__btn" data-legal="${id}">${label}</button>`,
  ).join('');
}

export function getLegalModalHtml(sectionId) {
  const section = LEGAL_SECTIONS[sectionId];
  if (!section) return '';
  return `
    <div class="legal-doc">
      <h2>${section.title}</h2>
      ${LEGAL_ACCEPTANCE_HTML}
      <div class="legal-doc__body prose">${section.html}</div>
      <p class="modal-tip legal-doc__foot">
        Versión ${LEGAL_VERSION} · ${owner.siteName}. Documentos informativos; no sustituyen asesoría legal profesional.
      </p>
    </div>
  `;
}

export function bindLegalLinks(container, onOpen) {
  if (!container) return;
  container.querySelectorAll('[data-legal]').forEach((btn) => {
    btn.addEventListener('click', () => onOpen?.(btn.dataset.legal));
  });
}
