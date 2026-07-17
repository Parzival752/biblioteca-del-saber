export const CURRICULUM = [
  {
    id: 'git-mod-1',
    title: 'Git esencial',
    description: 'Control de versiones desde cero',
    lessons: [
      {
        id: 'git-l01',
        title: '1. Que es Git',
        duration: '10 min',
        theory: `<p><strong>Git</strong> guarda el historial de cambios en tu codigo. Un <strong>repositorio</strong> es la carpeta del proyecto con Git activo.</p>
          <p><code>git init</code> crea un repo nuevo en la carpeta actual.</p>`,
        example: { code: `git init\n# Crea la carpeta .git con el historial`, explanation: 'Solo se ejecuta una vez por proyecto.' },
        exercise: {
          instructions: 'Escribe el comando para inicializar un repositorio Git.',
          starterCode: `# Comando aqui\n`,
          hint: 'git init',
          solution: `git init`,
          runner: 'git',
          tests: `
            const cmd = userCode.trim().toLowerCase();
            if (cmd !== 'git init') throw new Error('Usa: git init');
          `,
        },
      },
      {
        id: 'git-l02',
        title: '2. git status',
        duration: '10 min',
        theory: `<p><code>git status</code> muestra archivos modificados, nuevos o listos para commit.</p>`,
        example: { code: `git status\n# On branch main\n# Changes not staged...`, explanation: 'Consultalo antes de cada commit.' },
        exercise: {
          instructions: 'Comando para ver el estado del repositorio.',
          starterCode: ``,
          hint: 'git status',
          solution: `git status`,
          runner: 'git',
          tests: `
            if (userCode.trim().toLowerCase() !== 'git status') throw new Error('git status');
          `,
        },
      },
      {
        id: 'git-l03',
        title: '3. git add',
        duration: '12 min',
        theory: `<p><code>git add archivo</code> prepara cambios. <code>git add .</code> agrega todo.</p>`,
        example: { code: `git add index.html\ngit add .`, explanation: 'Staging area antes del commit.' },
        exercise: {
          instructions: 'Agrega todos los archivos al staging area.',
          starterCode: ``,
          hint: 'git add .',
          solution: `git add .`,
          runner: 'git',
          tests: `
            if (userCode.trim().toLowerCase() !== 'git add .') throw new Error('git add .');
          `,
        },
      },
      {
        id: 'git-l04',
        title: '4. git commit',
        duration: '12 min',
        theory: `<p><code>git commit -m "mensaje"</code> guarda una snapshot con descripcion.</p>`,
        example: { code: `git commit -m "Agrega pagina de inicio"`, explanation: 'Mensajes claros y cortos.' },
        exercise: {
          instructions: 'Commit con mensaje "Primer commit".',
          starterCode: ``,
          hint: 'git commit -m "Primer commit"',
          solution: `git commit -m "Primer commit"`,
          runner: 'git',
          tests: `
            const c = userCode.trim();
            if (!/git commit -m ["']Primer commit["']/.test(c)) throw new Error('git commit -m "Primer commit"');
          `,
        },
      },
      {
        id: 'git-l05',
        title: '5. git log',
        duration: '10 min',
        theory: `<p><code>git log</code> muestra historial. <code>git log --oneline</code> version compacta.</p>`,
        example: { code: `git log --oneline`, explanation: 'Revisa commits anteriores.' },
        exercise: {
          instructions: 'Comando log en una linea por commit.',
          starterCode: ``,
          hint: 'git log --oneline',
          solution: `git log --oneline`,
          runner: 'git',
          tests: `
            if (userCode.trim().toLowerCase() !== 'git log --oneline') throw new Error('git log --oneline');
          `,
        },
      },
      {
        id: 'git-l06',
        title: '6. Ramas: git branch',
        duration: '14 min',
        theory: `<p><code>git branch nombre</code> crea rama. <code>git branch</code> lista ramas.</p>`,
        example: { code: `git branch feature-login\ngit branch`, explanation: 'Ramas paralelas de desarrollo.' },
        exercise: {
          instructions: 'Crea rama llamada "develop".',
          starterCode: ``,
          hint: 'git branch develop',
          solution: `git branch develop`,
          runner: 'git',
          tests: `
            if (userCode.trim().toLowerCase() !== 'git branch develop') throw new Error('git branch develop');
          `,
        },
      },
      {
        id: 'git-l07',
        title: '7. Cambiar rama',
        duration: '12 min',
        theory: `<p><code>git checkout rama</code> o <code>git switch rama</code> (moderno).</p>`,
        example: { code: `git switch develop`, explanation: 'switch es mas claro que checkout.' },
        exercise: {
          instructions: 'Cambia a la rama "develop" con git switch.',
          starterCode: ``,
          hint: 'git switch develop',
          solution: `git switch develop`,
          runner: 'git',
          tests: `
            if (userCode.trim().toLowerCase() !== 'git switch develop') throw new Error('git switch develop');
          `,
        },
      },
      {
        id: 'git-l08',
        title: '8. git merge',
        duration: '14 min',
        theory: `<p><code>git merge rama</code> integra otra rama en la actual.</p>`,
        example: { code: `git switch main\ngit merge develop`, explanation: 'Resuelve conflictos si aparecen.' },
        exercise: {
          instructions: 'Fusiona la rama "feature" en la rama actual.',
          starterCode: ``,
          hint: 'git merge feature',
          solution: `git merge feature`,
          runner: 'git',
          tests: `
            if (userCode.trim().toLowerCase() !== 'git merge feature') throw new Error('git merge feature');
          `,
        },
      },
      {
        id: 'git-l09',
        title: '9. Remotos y push',
        duration: '16 min',
        theory: `<p><code>git remote add origin URL</code> vincula GitHub/GitLab. <code>git push -u origin main</code> sube cambios.</p>`,
        example: { code: `git remote add origin https://github.com/user/repo.git\ngit push -u origin main`, explanation: 'origin es el nombre tipico del remoto.' },
        exercise: {
          instructions: 'Sube la rama main al remoto origin (primer push con -u).',
          starterCode: ``,
          hint: 'git push -u origin main',
          solution: `git push -u origin main`,
          runner: 'git',
          tests: `
            if (userCode.trim().toLowerCase() !== 'git push -u origin main') throw new Error('git push -u origin main');
          `,
        },
      },
      {
        id: 'git-l10',
        title: '10. .gitignore',
        duration: '12 min',
        theory: `<p>Archivo <code>.gitignore</code> lista archivos que Git debe ignorar (node_modules, .env, etc.).</p>`,
        example: { code: `node_modules/\n.env\n*.log`, explanation: 'Un patron por linea.' },
        exercise: {
          instructions: 'Escribe .gitignore con lineas "node_modules/" y ".env" (una por linea).',
          starterCode: `# .gitignore\n`,
          hint: 'node_modules/',
          solution: `node_modules/\n.env`,
          runner: 'git',
          tests: `
            const lines = userCode.split('\\n').map(l => l.trim()).filter(Boolean);
            if (!lines.includes('node_modules/')) throw new Error('Incluye node_modules/');
            if (!lines.includes('.env')) throw new Error('Incluye .env');
          `,
        },
      },
    ],
  },
  {
    id: 'git-mod-2',
    title: 'Git avanzado',
    description: 'Ramas, conflictos, stash y flujo en equipo',
    lessons: [
      {
        id: 'git-l11',
        title: '11. Eliminar ramas',
        duration: '10 min',
        theory: `<p><code>git branch -d rama</code> borra rama fusionada. <code>-D</code> fuerza borrado.</p>`,
        example: { code: `git branch -d feature-old\n# Solo si ya fue mergeada`, explanation: 'Limpia ramas obsoletas.' },
        exercise: {
          instructions: 'Elimina la rama "temp" (ya fusionada) con -d.',
          starterCode: ``,
          hint: 'git branch -d temp',
          solution: `git branch -d temp`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git branch -d temp') throw new Error('git branch -d temp');`,
        },
      },
      {
        id: 'git-l12',
        title: '12. Flujo feature branch',
        duration: '14 min',
        theory: `<p>Patron: crear rama → commits → merge a main. Trabaja aislado sin romper produccion.</p>`,
        example: { code: `git switch -c feature-nav\ngit add .\ngit commit -m "Add nav"\ngit switch main\ngit merge feature-nav`, explanation: '-c crea y cambia en un paso.' },
        exercise: {
          instructions: 'Crea y cambia a rama "feature-login" con git switch -c.',
          starterCode: ``,
          hint: 'git switch -c feature-login',
          solution: `git switch -c feature-login`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git switch -c feature-login') throw new Error('git switch -c feature-login');`,
        },
      },
      {
        id: 'git-l13',
        title: '13. Que es un conflicto',
        duration: '14 min',
        theory: `<p>Cuando dos ramas editan la misma linea, Git marca conflictos:</p>
          <pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nTu codigo\n=======\nCodigo de la otra rama\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</code></pre>`,
        example: { code: `# Tras git merge feature\n# Abres el archivo y ves marcadores\n# Editas manualmente y guardas`, explanation: 'No entres en panico: es normal.' },
        exercise: {
          instructions: 'Escribe la linea separadora de conflictos Git (7 caracteres iguales).',
          starterCode: `# Linea separadora entre versiones\n`,
          hint: '=======',
          solution: `=======`,
          runner: 'git',
          tests: `if (userCode.trim() !== '=======') throw new Error('La linea separadora es =======');`,
        },
      },
      {
        id: 'git-l14',
        title: '14. Resolver conflictos',
        duration: '16 min',
        theory: `<p>1. Edita el archivo quitando marcadores. 2. <code>git add archivo</code> 3. <code>git commit</code></p>`,
        example: { code: `# Editas index.html\n# Quitas <<<<<<, =======, >>>>>>>\ngit add index.html\ngit commit -m "Resolve merge conflict"`, explanation: 'Marca como resuelto con git add.' },
        exercise: {
          instructions: 'Tras resolver conflictos en app.js, agregalo al staging.',
          starterCode: ``,
          hint: 'git add app.js',
          solution: `git add app.js`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git add app.js') throw new Error('git add app.js');`,
        },
      },
      {
        id: 'git-l15',
        title: '15. Abortar merge',
        duration: '10 min',
        theory: `<p><code>git merge --abort</code> cancela un merge con conflictos y vuelve al estado anterior.</p>`,
        example: { code: `git merge feature-x\n# CONFLICT...\ngit merge --abort`, explanation: 'Util si te perdiste resolviendo.' },
        exercise: {
          instructions: 'Cancela el merge en curso.',
          starterCode: ``,
          hint: 'git merge --abort',
          solution: `git merge --abort`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git merge --abort') throw new Error('git merge --abort');`,
        },
      },
      {
        id: 'git-l16',
        title: '16. git stash',
        duration: '14 min',
        theory: `<p><code>git stash</code> guarda cambios temporalmente. <code>git stash pop</code> los recupera.</p>`,
        example: { code: `git stash\ngit switch main\n# ... urgencia ...\ngit switch feature\ngit stash pop`, explanation: 'Cambia de rama sin commit.' },
        exercise: {
          instructions: 'Guarda cambios temporales en stash.',
          starterCode: ``,
          hint: 'git stash',
          solution: `git stash`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git stash') throw new Error('git stash');`,
        },
      },
      {
        id: 'git-l17',
        title: '17. git fetch y pull',
        duration: '14 min',
        theory: `<p><code>git fetch</code> descarga cambios sin fusionar. <code>git pull</code> = fetch + merge.</p>`,
        example: { code: `git fetch origin\ngit pull origin main`, explanation: 'Actualiza tu copia local.' },
        exercise: {
          instructions: 'Descarga cambios del remoto origin sin fusionar.',
          starterCode: ``,
          hint: 'git fetch origin',
          solution: `git fetch origin`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git fetch origin') throw new Error('git fetch origin');`,
        },
      },
      {
        id: 'git-l18',
        title: '18. git pull',
        duration: '12 min',
        theory: `<p><code>git pull origin main</code> trae y fusiona la rama main del remoto.</p>`,
        example: { code: `git switch main\ngit pull origin main`, explanation: 'Hazlo antes de empezar a trabajar.' },
        exercise: {
          instructions: 'Actualiza main desde origin (pull).',
          starterCode: ``,
          hint: 'git pull origin main',
          solution: `git pull origin main`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git pull origin main') throw new Error('git pull origin main');`,
        },
      },
      {
        id: 'git-l19',
        title: '19. Rebase intro',
        duration: '16 min',
        theory: `<p><code>git rebase main</code> reaplica tus commits encima de main (historial lineal). No uses en ramas publicas compartidas sin acuerdo.</p>`,
        example: { code: `git switch feature\ngit rebase main`, explanation: 'Alternativa a merge para historial limpio.' },
        exercise: {
          instructions: 'En tu rama feature, reaplica commits sobre main.',
          starterCode: ``,
          hint: 'git rebase main',
          solution: `git rebase main`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git rebase main') throw new Error('git rebase main');`,
        },
      },
      {
        id: 'git-l20',
        title: '20. Proyecto: flujo completo',
        duration: '18 min',
        theory: `<p>Flujo tipico en equipo:</p>
          <ol><li>pull main</li><li>branch feature</li><li>commit + push</li><li>Pull Request / merge</li></ol>`,
        example: { code: `git pull origin main\ngit switch -c fix-bug\ngit add .\ngit commit -m "Fix login"\ngit push -u origin fix-bug`, explanation: 'Practica diaria en equipos.' },
        exercise: {
          instructions: 'Sube rama fix-bug al remoto (primer push con -u).',
          starterCode: ``,
          hint: 'git push -u origin fix-bug',
          solution: `git push -u origin fix-bug`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git push -u origin fix-bug') throw new Error('git push -u origin fix-bug');`,
        },
      },
    ],
  },
  {
    id: 'git-mod-3',
    title: 'Git profesional',
    description: 'Tags, cherry-pick, reflog y buenas practicas',
    lessons: [
      {
        id: 'git-l21',
        title: '21. git tag',
        duration: '12 min',
        theory: `<p><code>git tag v1.0.0</code> marca versiones importantes (releases).</p>`,
        example: { code: `git tag v1.0.0\ngit tag -l`, explanation: 'Tags anotados para releases.' },
        exercise: {
          instructions: 'Crea tag v2.0.0 en el commit actual.',
          starterCode: ``,
          hint: 'git tag v2.0.0',
          solution: `git tag v2.0.0`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git tag v2.0.0') throw new Error('git tag v2.0.0');`,
        },
      },
      {
        id: 'git-l22',
        title: '22. git log avanzado',
        duration: '12 min',
        theory: `<p><code>git log --oneline --graph</code> visualiza historial compacto.</p>`,
        example: { code: `git log --oneline -5`, explanation: 'Ultimos 5 commits.' },
        exercise: {
          instructions: 'Muestra ultimos 3 commits en una linea.',
          starterCode: ``,
          hint: 'git log --oneline -3',
          solution: `git log --oneline -3`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git log --oneline -3') throw new Error('git log --oneline -3');`,
        },
      },
      {
        id: 'git-l23',
        title: '23. git diff',
        duration: '12 min',
        theory: `<p><code>git diff</code> muestra cambios no staged. <code>git diff --staged</code> lo staged.</p>`,
        example: { code: `git diff\ngit diff --staged`, explanation: 'Revisa antes de commit.' },
        exercise: {
          instructions: 'Ver cambios en staging area.',
          starterCode: ``,
          hint: 'git diff --staged',
          solution: `git diff --staged`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git diff --staged') throw new Error('git diff --staged');`,
        },
      },
      {
        id: 'git-l24',
        title: '24. git reset soft',
        duration: '14 min',
        theory: `<p><code>git reset --soft HEAD~1</code> deshace ultimo commit manteniendo cambios staged.</p>`,
        example: { code: `git reset --soft HEAD~1`, explanation: 'Reescribe historial local con cuidado.' },
        exercise: {
          instructions: 'Deshace ultimo commit manteniendo cambios (soft).',
          starterCode: ``,
          hint: 'git reset --soft HEAD~1',
          solution: `git reset --soft HEAD~1`,
          runner: 'git',
          tests: `if (userCode.trim().toLowerCase() !== 'git reset --soft head~1') throw new Error('git reset --soft HEAD~1');`,
        },
      },
      {
        id: 'git-l25',
        title: '25. Proyecto: .gitignore',
        duration: '16 min',
        theory: `<p><code>.gitignore</code> excluye archivos del repo: node_modules/, .env, *.log</p>`,
        example: { code: `# .gitignore\nnode_modules/\n.env\n*.log`, explanation: 'Nunca subas secretos.' },
        exercise: {
          instructions: 'Escribe la linea para ignorar carpeta node_modules/ en .gitignore.',
          starterCode: `# .gitignore\n`,
          hint: 'node_modules/',
          solution: `node_modules/`,
          runner: 'git',
          tests: `if (userCode.trim() !== 'node_modules/') throw new Error('node_modules/');`,
        },
      },
    ],
  },
];
