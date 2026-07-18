import {
  getAllLessons, getLessonById, getNextLesson, getPrevLesson,
  getTotalLessons, getModuleForLesson, getActiveCurriculum, COURSES, getCourseMeta,
  findLessonInAnyCourse, getLessonCount, populateCourseSelect, isCodeCourse, renderCourseIcon,
  renderWelcomeChip, renderFeatureItem,
} from './curriculum.js';
import { runCode, runExample, runPartialTest } from './runner.js';
import { runCodeWithTestsForLesson, runPreviewForLesson } from './runners/multi.js';
import {
  loadProgress, markComplete, setLastLesson, saveCodeDraft, getCodeDraft,
  getCompletionRate, recordAttempt, recordHintUsed, getAttempts, getHintLevel,
  setTheme, getTheme, setStudentName, getStudentName, setAvatarId, getAvatarId,
  setProfileSetupDone, isProfileSetupDone, setOnboardingDone, setTourDone, updateStudyStreak,
  resetLesson, resetModule, resetCourse, setBeginnerMode, getBeginnerMode,
  isLessonComplete, setFontSize, getFontSize, setFocusMode, getFocusMode,
  markQuizPassed, addLessonTime, getStats, getAttemptHistory,
  setActiveCourse, getActiveCourseId, getCourseProgressSummary,
  getMultiCourseOverview, getAggregateStats,
  exportBackupJson, parseBackupFile, importBackup, getBackupSummary,
  getCustomAvatar, upsertCustomAvatar, removeCustomAvatar, getCustomAvatars,
} from './storage.js';
import { getEarnedBadges, getLevel, XP_PER_LESSON, recordStudyTime, markPerfectLesson, BADGES } from './gamification.js';
import { highlightJS } from './highlighter.js';
import { fireConfetti } from './confetti.js';
import { getLessonAids, GLOSSARY, CHEATSHEET } from './lesson-aids.js';
import { renderCodeExplorer, bindCodeExplorer } from './code-explainer.js';
import { confirmDialog, alertDialog } from './modals.js';
import { initCodeEditor, getEditorValue, setEditorValue, destroyCodeEditor, refreshEditorTheme } from './editor.js';
import {
  getExerciseMeta, getHintForLevel, renderQuizHtml, bindQuiz,
  renderCompareOutput, renderPartialResults, renderCommonMistakes,
  renderDomPlayground, bindDomPlayground, renderRoadmap,
} from './exercise-meta.js';
import { getDailyChallenge, isDailyChallengeDone, getDailyChallengeLesson, markDailyChallengeDone } from './daily-challenge.js';
import { renderQuizExercise, bindQuizExercise, renderExampleHtml } from './quiz.js';
import {
  renderAvatarPicker, bindAvatarPicker, renderAvatarHtml, getDisplayName,
  getMotivationalMessage, getLevelTier,
  renderStudyingCoursesHtml, renderStudyingCoursesCompact, bindStudyingCourseActions,
} from './profile.js';
import {
  renderAvatarBuilderHtml, bindAvatarBuilder, normalizeAvatarConfig, createCustomAvatarId,
  MAX_CUSTOM_AVATARS,
} from './avatar-builder.js';
import {
  renderAboutNoteHtml, renderWelcomeLegalFooterHtml, renderLegalFooterLinks, getLegalModalHtml, bindLegalLinks,
} from './legal.js';

const TAB_ORDER = ['theory', 'example', 'exercise'];
const TAB_LABELS = { theory: 'Teoría', example: 'Ejemplo', exercise: 'Ejercicio' };
const BADGES_COUNT = BADGES.length;

export class App {
  constructor() {
    this.currentLessonId = null;
    this.activeTab = 'theory';
    this.searchQuery = '';
    this.hintUsedThisSession = false;
    this.hintLevelSession = 0;
    this.lessonEnterTime = Date.now();
    this.pendingAvatarId = getAvatarId();
    this.pendingLessonId = null;
    this.selectedCourseId = getActiveCourseId();
    this.init();
  }

  applyPreferences() {
    const theme = getTheme();
    const font = getFontSize();
    const focus = getFocusMode();
    this.applyTheme(theme);
    document.documentElement.setAttribute('data-font', font);
    document.getElementById('mainApp')?.classList.toggle('focus-mode', focus);
    document.getElementById('btnFocus')?.classList.toggle('active', focus);
  }

  init() {
    this.applyPreferences();
    this.welcome = document.getElementById('welcomeScreen');
    this.mainApp = document.getElementById('mainApp');
    this.content = document.getElementById('lessonContent');
    this.navModules = document.getElementById('navModules');

    document.getElementById('btnStart')?.addEventListener('click', () => this.startCourse());
    document.getElementById('btnContinue')?.addEventListener('click', () => this.continueCourse());
    document.getElementById('btnRestartCourse')?.addEventListener('click', () => this.confirmResetCourse(true));
    document.getElementById('btnToggleNav')?.addEventListener('click', () => this.toggleSidebar());
    document.getElementById('sidebarOverlay')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.add('collapsed');
      document.getElementById('sidebarOverlay')?.classList.add('hidden');
    });
    document.getElementById('btnTheme')?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('btnDashboard')?.addEventListener('click', () => this.showDashboard());
    document.getElementById('btnSettings')?.addEventListener('click', () => this.showSettings());
    document.getElementById('btnProfile')?.addEventListener('click', () => this.showProfile());
    document.getElementById('btnSidebarProfile')?.addEventListener('click', () => this.showProfile());
    document.getElementById('btnCourses')?.addEventListener('click', () => this.showCourseSwitcher());
    document.getElementById('btnFocus')?.addEventListener('click', () => this.toggleFocusMode());
    document.getElementById('btnHelp')?.addEventListener('click', () => this.toggleHelpPanel());
    document.getElementById('btnCloseHelp')?.addEventListener('click', () => this.toggleHelpPanel(false));
    document.getElementById('btnSearch')?.addEventListener('click', () => this.focusSearch());
    document.getElementById('btnWelcomeExport')?.addEventListener('click', () => this.exportProgress());
    document.getElementById('btnWelcomeImport')?.addEventListener('click', () => this.triggerImport());
    document.getElementById('backupFileInput')?.addEventListener('change', (e) => this.handleImportFile(e));

    this.bindLegalControls();

    document.getElementById('app')?.addEventListener('click', (e) => {
      const legalBtn = e.target.closest('[data-legal]');
      if (legalBtn) {
        e.preventDefault();
        this.showLegal(legalBtn.dataset.legal);
      }
    });

    document.getElementById('lessonSearch')?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase();
      this.buildNav();
    });

    document.getElementById('helpTabs')?.addEventListener('click', (e) => {
      const tab = e.target.closest('[data-help-tab]');
      if (!tab) return;
      document.querySelectorAll('[data-help-tab]').forEach((t) => t.classList.toggle('active', t === tab));
      document.querySelectorAll('.help-tab-panel').forEach((p) => p.classList.toggle('active', p.id === `help-${tab.dataset.helpTab}`));
    });

    window.addEventListener('hashchange', () => this.routeFromHash());
    document.addEventListener('keydown', (e) => this.handleGlobalKeys(e));

    const hashId = location.hash.replace('#', '');
    const found = hashId ? findLessonInAnyCourse(hashId) : null;
    this.renderWelcomeExtras();
    if (found) {
      setActiveCourse(found.courseId);
      this.selectedCourseId = found.courseId;
      this.enterApp(found.lesson.id);
    } else {
      this.initWelcomeProfile();
      this.renderWelcomeStats();
      this.renderCoursePicker();
    }
  }

  renderWelcomeExtras() {
    const footer = document.getElementById('welcomeLegalFooter');
    if (footer) footer.innerHTML = renderWelcomeLegalFooterHtml();

    const about = document.getElementById('welcomeAboutNote');
    if (about) about.innerHTML = renderAboutNoteHtml({ preview: true });

    const chips = document.getElementById('welcomeModules');
    if (chips) {
      const featured = ['javascript', 'biologia', 'supervivencia', 'primerosauxilios', 'radioaficion'];
      chips.innerHTML = featured.map((id) => renderWelcomeChip(getCourseMeta(id))).join('');
    }

    const features = document.getElementById('welcomeFeatures');
    if (features) {
      features.innerHTML = [
        renderFeatureItem('assets/courses/biologia.svg', '22 saberes con 50 lecciones cada uno'),
        renderFeatureItem('assets/courses/javascript.svg', '8 cursos de programación con editor y tests'),
        renderFeatureItem('assets/alebrijes/maestro.svg?v=2', 'Profesor alebrije — amigable para todo público'),
        renderFeatureItem('assets/courses/exploracion.svg', 'XP, insignias y progreso multi-tema'),
      ].join('');
    }
  }

  renderCoursePicker() {
    const select = document.getElementById('courseSelect');
    const preview = document.getElementById('coursePreview');
    if (!select) return;

    const active = this.selectedCourseId || getActiveCourseId();

    populateCourseSelect(select, COURSES, active, { getProgress: getCourseProgressSummary });

    if (!select.dataset.bound) {
      select.dataset.bound = '1';
      select.addEventListener('change', () => {
        if (select.value) {
          this.selectedCourseId = select.value;
          this.renderCoursePicker();
        }
      });
    }

    if (preview) {
      const meta = getCourseMeta(active);
      const prog = getCourseProgressSummary(active);
      const lessons = getLessonCount(active);
      preview.innerHTML = `
        <div class="course-preview__inner" style="--course-color:${meta.color}">
          ${renderCourseIcon(meta, 48)}
          <div>
            <h3>Vas a aprender: <span>${meta.name}</span></h3>
            <p>${meta.tagline}</p>
            <p class="course-preview__meta">${lessons} lecciones · ${prog.completed} completadas · ${prog.xp} XP</p>
            <p class="course-preview__maestro"><img src="assets/alebrijes/maestro.svg?v=2" alt="" class="course-preview__maestro-icon" width="20" height="20"> El Maestro Alebrije te enseñará este saber</p>
          </div>
        </div>`;
    }

    const btnStart = document.getElementById('btnStart');
    if (btnStart) btnStart.textContent = `Comenzar ${getCourseMeta(active).name} →`;

    this.updateWelcomeContinueBtn();
  }

  updateWelcomeContinueBtn() {
    const cid = this.selectedCourseId || getActiveCourseId();
    const prog = getCourseProgressSummary(cid);
    const btn = document.getElementById('btnContinue');
    if (btn) btn.hidden = !prog.lastLesson;
  }

  applySelectedCourse() {
    const id = this.selectedCourseId || getActiveCourseId();
    setActiveCourse(id);
    return id;
  }

  initWelcomeProfile() {
    const progress = loadProgress();
    const nickInput = document.getElementById('studentNickname');
    const pickerEl = document.getElementById('welcomeAvatarPicker');
    const greetEl = document.getElementById('welcomeGreet');
    const profileEl = document.getElementById('welcomeProfile');

    if (profileEl) profileEl.hidden = false;

    if (nickInput) nickInput.value = progress.studentName || '';
    this.pendingAvatarId = progress.avatarId || 'alebrije';

    if (pickerEl) {
      this.refreshAvatarPicker(pickerEl, this.pendingAvatarId, 'welcome');
    }

    if (greetEl && progress.studentName && (progress.completed?.length || 0) > 0) {
      greetEl.hidden = false;
      greetEl.textContent = getMotivationalMessage(progress.studentName, 'welcome');
    }
  }

  refreshAvatarPicker(container, selectedId, context = 'welcome') {
    if (!container) return;
    container.innerHTML = renderAvatarPicker(selectedId);
    bindAvatarPicker(container, (id) => {
      if (context === 'welcome') this.pendingAvatarId = id;
      if (context === 'profile') this.profileEditAvatarId = id;
    }, {
      onCreate: () => this.showAvatarBuilder({ context }),
      onEdit: (id) => this.showAvatarBuilder({ context, avatarId: id }),
      onDelete: (id) => this.deleteCustomAvatar(id, context),
    });
  }

  async deleteCustomAvatar(avatarId, context = 'welcome') {
    const custom = getCustomAvatar(avatarId);
    if (!custom) return;
    const ok = await confirmDialog({
      title: 'Eliminar avatar',
      message: `¿Eliminar «${custom.label}»? Ya no aparecerá en tus avatares guardados.`,
      confirmText: 'Eliminar',
      danger: true,
    });
    if (!ok) return;

    const wasActive = getAvatarId() === avatarId;
    removeCustomAvatar(avatarId);
    const fallback = 'alebrije';
    const nextId = wasActive ? fallback : getAvatarId();

    if (context === 'welcome') this.pendingAvatarId = nextId;
    if (context === 'profile') this.profileEditAvatarId = nextId;

    this.updateProfileUI();
    this.refreshAvatarPickerAfterSave(context, nextId);
    this.toast(`Avatar «${custom.label}» eliminado`, 'info');
  }

  showAvatarBuilder({ context = 'welcome', avatarId = null } = {}) {
    const existing = avatarId ? getCustomAvatar(avatarId) : null;
    const editMode = !!existing;
    if (!editMode && getCustomAvatars().length >= MAX_CUSTOM_AVATARS) {
      this.toast(`Máximo ${MAX_CUSTOM_AVATARS} avatares personalizados`, 'info');
      return;
    }

    this.avatarPickerContext = context;
    const initialConfig = existing
      ? { ...normalizeAvatarConfig(existing.config), label: existing.label }
      : undefined;

    this.showModal('avatar-builder', renderAvatarBuilderHtml(initialConfig, { editMode }));
    const root = document.querySelector('[data-ab-root]');
    bindAvatarBuilder(root, {
      config: initialConfig,
      onSave: (config) => {
        try {
          const saved = upsertCustomAvatar({
            id: existing?.id || createCustomAvatarId(),
            label: config.label,
            config,
          });
          if (context === 'welcome') this.pendingAvatarId = saved.id;
          if (context === 'profile') this.profileEditAvatarId = saved.id;
          setAvatarId(saved.id);
          this.updateProfileUI();
          this.closeModal();
          this.toast(`Avatar «${saved.label}» guardado`, 'success');
          this.refreshAvatarPickerAfterSave(context, saved.id);
        } catch (err) {
          this.toast(err.message || 'No se pudo guardar el avatar', 'info');
        }
      },
      onDelete: async () => {
        if (!existing) return;
        const ok = await confirmDialog({
          title: 'Eliminar avatar',
          message: `¿Eliminar «${existing.label}»? Esta acción no se puede deshacer.`,
          confirmText: 'Eliminar',
          danger: true,
        });
        if (!ok) return;
        removeCustomAvatar(existing.id);
        const fallback = 'alebrije';
        if (context === 'welcome') this.pendingAvatarId = fallback;
        if (context === 'profile') this.profileEditAvatarId = fallback;
        setAvatarId(getAvatarId() === existing.id ? fallback : getAvatarId());
        this.updateProfileUI();
        this.closeModal();
        this.toast('Avatar eliminado', 'info');
        this.refreshAvatarPickerAfterSave(context, getAvatarId());
      },
      onCancel: () => this.closeModal(),
    });
  }

  refreshAvatarPickerAfterSave(context, selectedId) {
    if (context === 'welcome') {
      this.refreshAvatarPicker(document.getElementById('welcomeAvatarPicker'), selectedId, 'welcome');
    } else if (context === 'profile') {
      this.refreshAvatarPicker(document.getElementById('profileAvatarPicker'), selectedId, 'profile');
    }
  }

  saveWelcomeProfile() {
    const nick = document.getElementById('studentNickname')?.value?.trim();
    if (!nick) {
      this.toast('Elige un apodo para personalizar tu experiencia', 'info');
      document.getElementById('studentNickname')?.focus();
      return false;
    }
    setStudentName(nick);
    setAvatarId(this.pendingAvatarId || 'alebrije');
    setProfileSetupDone();
    return true;
  }

  updateProfileUI() {
    const progress = loadProgress();
    const level = getLevel(progress.xp || 0);
    const tier = getLevelTier(level);
    const name = getDisplayName(progress.studentName);
    const avatarHtml = renderAvatarHtml(progress.avatarId, tier, 'sm');
    const avatarMd = renderAvatarHtml(progress.avatarId, tier, 'md');

    const topAvatar = document.getElementById('topbarAvatar');
    const topName = document.getElementById('topbarName');
    const topLevel = document.getElementById('topbarLevel');
    if (topAvatar) topAvatar.innerHTML = avatarHtml;
    if (topName) topName.textContent = name;
    if (topLevel) topLevel.textContent = `${level.name} · ${progress.xp || 0} XP`;

    const sbAvatar = document.getElementById('sidebarAvatar');
    const sbName = document.getElementById('sidebarName');
    const sbLevel = document.getElementById('sidebarLevel');
    const sbFill = document.getElementById('sidebarLevelFill');
    const sbXp = document.getElementById('sidebarXp');
    if (sbAvatar) sbAvatar.innerHTML = avatarMd;
    if (sbName) sbName.textContent = name;
    if (sbLevel) sbLevel.textContent = level.name;
    if (sbFill) sbFill.style.width = `${level.progress}%`;
    if (sbXp) sbXp.textContent = `${progress.xp || 0} XP${level.nextAt ? ` → ${level.nextName} (${level.nextAt})` : ''}`;
    this.updateStudyingSidebar();
  }

  updateStudyingSidebar() {
    const el = document.getElementById('sidebarStudying');
    if (!el) return;
    const overview = getMultiCourseOverview();
    const show = overview.length > 1 || overview.some((c) => c.hasProgress);
    if (!show) {
      el.hidden = true;
      el.innerHTML = '';
      return;
    }
    el.hidden = false;
    el.innerHTML = `
      <p class="sidebar-studying__label">Mis saberes</p>
      <div class="sidebar-studying__chips">${renderStudyingCoursesCompact(overview)}</div>`;
    bindStudyingCourseActions(el, (id) => this.switchToCourse(id));
  }

  switchToCourse(courseId) {
    if (!courseId) return;
    const wasActive = courseId === getActiveCourseId();
    setActiveCourse(courseId);
    this.selectedCourseId = courseId;
    this.closeModal();
    this.updateCourseBadge();
    this.updateProfileUI();
    if (this.mainApp && !this.mainApp.classList.contains('hidden')) {
      this.buildNav();
      const progress = loadProgress();
      const first = getAllLessons()[0];
      const target = progress.lastLesson && getLessonById(progress.lastLesson) ? progress.lastLesson : first?.id;
      if (target) this.goToLesson(target);
    }
    if (!wasActive) {
      this.toast(`Ahora estudias: ${getCourseMeta(courseId).name}`, 'success');
    }
  }

  toast(msg, type = 'info') {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.className = `toast toast--${type} toast--show`;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove('toast--show'), 3200);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('btnTheme');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  toggleTheme() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
    this.applyTheme(next);
    refreshEditorTheme(next);
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar?.classList.toggle('collapsed');
    if (window.innerWidth <= 768) {
      overlay?.classList.toggle('hidden', sidebar?.classList.contains('collapsed'));
    }
  }

  toggleHelpPanel(open) {
    const panel = document.getElementById('helpPanel');
    if (!panel) return;
    const show = open ?? panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !show);
  }

  focusSearch() {
    document.getElementById('lessonSearch')?.focus();
  }

  renderWelcomeStats() {
    const progress = loadProgress();
    const total = getTotalLessons();
    const level = getLevel(progress.xp || 0);

    const statsEl = document.getElementById('welcomeStats');
    if (statsEl && progress.completed.length > 0) {
      statsEl.hidden = false;
      statsEl.innerHTML = `
        <div class="welcome__stats-grid">
          <div class="stat-pill"><span>${progress.completed.length}/${total}</span> lecciones</div>
          <div class="stat-pill"><span>${progress.xp || 0}</span> XP</div>
          <div class="stat-pill"><span>${level.name}</span> nivel</div>
          ${progress.streak > 0 ? `<div class="stat-pill stat-pill--fire">🔥 ${progress.streak} días</div>` : ''}
        </div>
        ${renderRoadmap(progress.completed, total)}
      `;
      document.getElementById('btnRestartCourse')?.removeAttribute('hidden');
    }

    if (progress.lastLesson) {
      document.getElementById('btnContinue').hidden = false;
    }
  }

  startCourse() {
    if (!this.saveWelcomeProfile()) return;
    if (!this.selectedCourseId) {
      this.toast('Elige un saber de la biblioteca', 'info');
      return;
    }
    this.applySelectedCourse();
    recordStudyTime();
    updateStudyStreak(loadProgress());
    const target = this.pendingLessonId || getAllLessons()[0].id;
    this.pendingLessonId = null;
    this.enterApp(target);
  }

  continueCourse() {
    const progress = loadProgress();
    if (!progress.profileSetupDone && !this.saveWelcomeProfile()) return;
    this.applySelectedCourse();
    recordStudyTime();
    updateStudyStreak(loadProgress());
    const target = this.pendingLessonId || progress.lastLesson || getAllLessons()[0].id;
    this.pendingLessonId = null;
    this.enterApp(target);
  }

  enterApp(lessonId) {
    const progress = loadProgress();
    if (!progress.profileSetupDone || !progress.studentName?.trim()) {
      this.pendingLessonId = lessonId;
      this.welcome.classList.remove('hidden');
      this.mainApp.classList.add('hidden');
      this.initWelcomeProfile();
      this.renderCoursePicker();
      this.toast('Elige tu apodo y avatar antes de continuar', 'info');
      return;
    }
    this.welcome.classList.add('hidden');
    this.mainApp.classList.remove('hidden');
    this.updateProfileUI();
    this.updateCourseBadge();
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar')?.classList.add('collapsed');
    }
    this.renderHelpContent();
    this.buildNav();
    this.goToLesson(lessonId);
    this.maybeShowOnboarding();
    this.maybeShowTour();
  }

  toggleFocusMode() {
    setFocusMode(!getFocusMode());
    this.applyPreferences();
    this.toast(getFocusMode() ? 'Modo enfoque activado' : 'Modo enfoque desactivado', 'info');
  }

  maybeShowTour() {
    const progress = loadProgress();
    if (progress.tourDone || !progress.onboardingDone) return;
    setTimeout(() => {
      this.showModal('tour', `
        <h2>🧭 Tour rápido</h2>
        <ol class="tour-list">
          <li><strong>Barra lateral</strong> — navega lecciones y reinicia módulos</li>
          <li><strong>Desglose de código</strong> — clic en cada línea del ejemplo</li>
          <li><strong>Pista x3</strong> — cada clic da más ayuda</li>
          <li><strong>Comprobar</strong> — valida con tests automáticos (timeout 5s)</li>
          <li><strong>❓</strong> — glosario y chuleta · <strong>⚙️</strong> — ajustes</li>
        </ol>
        <button type="button" class="btn btn--primary" id="btnTourDone">¡Entendido!</button>
      `);
      document.getElementById('btnTourDone')?.addEventListener('click', () => {
        setTourDone();
        this.closeModal();
      });
    }, 600);
  }

  renderHelpContent() {
    const glossaryEl = document.getElementById('helpGlossary');
    const cheatsheetEl = document.getElementById('helpCheatsheet');
    if (glossaryEl) {
      glossaryEl.innerHTML = GLOSSARY.map((g) => `
        <details class="glossary-item">
          <summary>${g.term}</summary>
          <p>${g.def}</p>
        </details>
      `).join('');
    }
    if (cheatsheetEl) {
      cheatsheetEl.innerHTML = CHEATSHEET.map((c) => `
        <div class="cheat-item">
          <h4>${c.cat}</h4>
          <pre data-highlight><code>${escapeHtml(c.code)}</code></pre>
        </div>
      `).join('');
      glossaryEl?.closest('.help-panel')?.querySelectorAll('[data-highlight]').forEach((el) => {
        el.innerHTML = highlightJS(el.textContent);
      });
      cheatsheetEl.querySelectorAll('[data-highlight]').forEach((el) => {
        el.innerHTML = highlightJS(el.textContent);
      });
    }
  }

  updateCourseBadge() {
    const meta = getCourseMeta(getActiveCourseId());
    const el = document.getElementById('topbarCourse');
    if (el) {
      el.textContent = meta.name;
      el.style.color = meta.color;
    }
    document.title = `${meta.name} — La Biblioteca del Saber`;
  }

  showCourseSwitcher() {
    const active = getActiveCourseId();
    const overview = getMultiCourseOverview();
    this.showModal('courses', `
      <h2>Añadir o cambiar saber</h2>
      <p class="modal-tip">Puedes estudiar varios temas a la vez. Cada uno guarda su progreso por separado.</p>
      ${overview.length ? `<div class="course-progress-list course-progress-list--compact">${renderStudyingCoursesHtml(overview)}</div>` : ''}
      <label class="course-combobox course-combobox--modal" for="modalCourseSelect">
        <span class="course-combobox__label">Elegir saber</span>
        <select id="modalCourseSelect" class="course-select" aria-label="Seleccionar saber"></select>
      </label>
      <button type="button" class="btn btn--primary" id="btnConfirmCourseSwitch">Empezar / cambiar</button>
    `);
    const select = document.getElementById('modalCourseSelect');
    populateCourseSelect(select, COURSES, active, { getProgress: getCourseProgressSummary });
    bindStudyingCourseActions(document.getElementById('modalBody'), (id) => this.switchToCourse(id));
    document.getElementById('btnConfirmCourseSwitch')?.addEventListener('click', () => {
      const id = select.value;
      if (!id) return;
      this.switchToCourse(id);
    });
  }

  maybeShowOnboarding() {
    const progress = loadProgress();
    if (progress.onboardingDone) return;
    const name = getDisplayName(progress.studentName);
    this.showModal('onboarding', `
      <div class="onboard-profile">
        ${renderAvatarHtml(progress.avatarId, getLevelTier(getLevel(progress.xp || 0)), 'lg')}
        <p class="onboard-profile__hi">¡Hola, <strong>${escapeHtml(name)}</strong>!</p>
      </div>
      <h2>Tu ruta de aprendizaje</h2>
      <div class="learn-path">
        <div class="learn-path__step"><span>1</span><div><strong>Teoría</strong><p>Conceptos claros con ejemplos</p></div></div>
        <div class="learn-path__step"><span>2</span><div><strong>Ejemplo</strong><p>Ejecuta código y mira qué pasa</p></div></div>
        <div class="learn-path__step"><span>3</span><div><strong>Ejercicio</strong><p>Practica tú — te guiamos si te atascas</p></div></div>
      </div>
      <p class="modal-tip">Atajos: <kbd>Ctrl</kbd>+<kbd>Enter</kbd> ejecutar · <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> comprobar · <kbd>?</kbd> ayuda</p>
      <button type="button" class="btn btn--primary" id="btnCloseOnboard">¡Empezar a aprender!</button>
    `);
    document.getElementById('btnCloseOnboard')?.addEventListener('click', () => {
      setOnboardingDone();
      this.closeModal();
    });
  }

  routeFromHash() {
    const id = location.hash.replace('#', '');
    if (!id || id === this.currentLessonId) return;
    if (getLessonById(id) && this.mainApp && !this.mainApp.classList.contains('hidden')) {
      this.goToLesson(id);
    }
  }

  buildNav() {
    const progress = loadProgress();
    this.navModules.innerHTML = '';

    for (const mod of getActiveCurriculum()) {
      const modLessons = mod.lessons.filter((l) =>
        !this.searchQuery || l.title.toLowerCase().includes(this.searchQuery)
      );
      if (!modLessons.length) continue;

      const doneInMod = mod.lessons.filter((l) => progress.completed.includes(l.id)).length;
      const section = document.createElement('section');
      section.className = 'nav-module';
      section.innerHTML = `
        <div class="nav-module__head">
          <h3>${mod.title}</h3>
          <div class="nav-module__actions">
            <span class="nav-module__progress">${doneInMod}/${mod.lessons.length}</span>
            ${doneInMod > 0 ? `<button type="button" class="btn-reset-mod" data-reset-mod="${mod.id}" title="Reiniciar módulo">↺</button>` : ''}
          </div>
        </div>
        <p>${mod.description}</p>
        <div class="nav-module__bar"><div class="nav-module__fill" style="width:${Math.round((doneInMod / mod.lessons.length) * 100)}%"></div></div>
      `;
      const list = document.createElement('ul');

      for (const lesson of modLessons) {
        const done = progress.completed.includes(lesson.id);
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `nav-lesson${lesson.id === this.currentLessonId ? ' active' : ''}${done ? ' done' : ''}`;
        btn.innerHTML = `<span class="nav-lesson__check">${done ? '✓' : '○'}</span><span>${lesson.title.replace(/^\d+\.\s*/, '')}</span>`;
        btn.addEventListener('click', () => {
          this.goToLesson(lesson.id, { tab: 'theory' });
          if (window.innerWidth <= 768) this.toggleSidebar();
        });
        li.appendChild(btn);
        list.appendChild(li);
      }

      section.appendChild(list);
      this.navModules.appendChild(section);
    }

    this.navModules.querySelectorAll('[data-reset-mod]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.confirmResetModule(btn.dataset.resetMod);
      });
    });

    this.updateProgressUI();
  }

  updateProgressUI() {
    const total = getTotalLessons();
    const progress = loadProgress();
    const pct = getCompletionRate(total);

    document.getElementById('globalProgress').style.width = `${pct}%`;
    document.getElementById('progressText').textContent = `${pct}%`;
    document.getElementById('sidebarProgress').textContent = `${progress.completed.length} de ${total} lecciones`;
    this.updateProfileUI();
  }

  goToLesson(id, options = {}) {
    const changingLesson = id !== this.currentLessonId;
    if (this.currentLessonId && this.lessonEnterTime) {
      addLessonTime(this.currentLessonId, Date.now() - this.lessonEnterTime);
    }
    // Nueva lección → siempre Teoría (salvo tab explícita, p.ej. desafío diario)
    if (changingLesson) {
      this.activeTab = options.tab || 'theory';
    } else if (options.tab) {
      this.activeTab = options.tab;
    }
    this.currentLessonId = id;
    this.lessonEnterTime = Date.now();
    this.hintUsedThisSession = false;
    this.hintLevelSession = getHintLevel(id);
    setLastLesson(id);
    if (location.hash.replace('#', '') !== id) {
      location.hash = id;
    }
    const lesson = getLessonById(id);
    if (!lesson) return;

    document.getElementById('topbarLesson').textContent = lesson.title;
    this.buildNav();
    this.renderLesson(lesson);
    this.content.scrollTop = 0;
  }

  renderStepBar(activeTab) {
    const idx = TAB_ORDER.indexOf(activeTab);
    return `
      <div class="step-bar" aria-label="Ruta de la lección">
        ${TAB_ORDER.map((tab, i) => `
          <button type="button" class="step-bar__item${tab === activeTab ? ' active' : ''}${i < idx ? ' done' : ''}" data-goto-tab="${tab}">
            <span class="step-bar__num">${i + 1}</span>
            <span class="step-bar__label">${TAB_LABELS[tab]}</span>
          </button>
          ${i < TAB_ORDER.length - 1 ? '<span class="step-bar__line"></span>' : ''}
        `).join('')}
      </div>
    `;
  }

  renderLesson(lesson) {
    const prev = getPrevLesson(lesson.id);
    const next = getNextLesson(lesson.id);
    const isQuiz = !isCodeCourse(getActiveCourseId());
    const draft = getCodeDraft(lesson.id) ?? lesson.exercise?.starterCode ?? '';
    const attempts = getAttempts(lesson.id);
    const isDone = isLessonComplete(lesson.id);
    const showSolution = !isQuiz && attempts >= 3 && lesson.exercise?.solution && !isDone;
    const aids = getLessonAids(lesson.id);
    const beginner = getBeginnerMode();
    const progress = loadProgress();
    const quizPassed = progress.quizzesPassed?.includes(lesson.id);

    destroyCodeEditor();

    const examplePanel = isQuiz
      ? `${renderExampleHtml(lesson.example)}<button type="button" class="btn btn--primary tab-cta" data-goto="exercise">Siguiente: ejercicio →</button>`
      : `
          <p class="panel-intro">${lesson.example?.explanation || ''}</p>
          ${beginner ? '<div class="tip-box">▶ Lee el <strong>desglose línea a línea</strong>, luego <strong>Ejecutar</strong>.</div>' : ''}
          ${renderCodeExplorer(lesson.id, lesson.example?.code || '')}
          ${lesson.id === 'l11-dom' ? renderDomPlayground() : ''}
          <div class="editor-block">
            <div class="editor-block__head">
              <span>Código completo</span>
              <button type="button" class="btn btn--sm btn--primary" id="btnRunExample">▶ Ejecutar <kbd>Ctrl↵</kbd></button>
            </div>
            <pre class="code-readonly" data-highlight><code>${escapeHtml(lesson.example?.code || '')}</code></pre>
          </div>
          <div class="output-block">
            <div class="output-block__head">Salida <span id="exampleTiming" class="output-timing"></span></div>
            <pre class="output" id="exampleOutput">Pulsa Ejecutar para ver el resultado</pre>
          </div>
          <button type="button" class="btn btn--primary tab-cta" data-goto="exercise">Siguiente: tu ejercicio →</button>`;

    const exercisePanel = isQuiz
      ? `
          <div class="exercise-box">
            <h3>✏️ Reto del Maestro Alebrije</h3>
            <p class="exercise-instructions">${lesson.exercise?.instructions || 'Responde correctamente.'}</p>
            ${!this.hintUsedThisSession ? '<p class="modal-tip">🏆 +15 XP extra si no usas pistas</p>' : ''}
          </div>
          ${renderQuizExercise(lesson.exercise, lesson.id, isDone)}
          <button type="button" class="btn btn--ghost btn--sm" id="btnHint">💡 Pista</button>
          <div class="feedback hidden" id="feedback"></div>`
      : `
          <div class="exercise-layout">
            <div class="exercise-layout__left">
              <div class="exercise-box">
                <h3>✏️ Reto de código — Maestro Alebrije</h3>
                <div class="prose">${lesson.exercise.instructions}</div>
              </div>
              ${aids.steps.length ? `<div class="steps-box"><h4>Pasos sugeridos</h4><ol>${aids.steps.map((s) => `<li>${s}</li>`).join('')}</ol></div>` : ''}
              ${renderCommonMistakes(lesson.id)}
              <div class="expected-box"><h4>🎯 Resultado esperado</h4><code>${escapeHtml(aids.expectedOutput)}</code></div>
              ${renderCompareOutput(aids.expectedOutput, '', false)}
              <div id="partialResults"></div>
              <div class="exercise-tips">
                <p>▶ <strong>Probar</strong> — ver consola sin validar</p>
                <p>✓ <strong>Comprobar</strong> — validar solución (+${XP_PER_LESSON} XP)</p>
                ${!this.hintUsedThisSession ? '<p>🏆 +15 XP extra si no usas pistas</p>' : ''}
              </div>
            </div>
            <div class="exercise-layout__right">
              <div class="editor-block editor-block--code">
                <div class="editor-block__head">
                  <span>Tu código</span>
                  <div class="editor-block__actions">
                    ${showSolution ? '<button type="button" class="btn btn--sm btn--ghost" id="btnSolution">📋 Ver solución</button>' : ''}
                    <button type="button" class="btn btn--sm btn--ghost" id="btnResetCode">↺ Código</button>
                    <button type="button" class="btn btn--sm btn--ghost" id="btnHint">💡 Pista <span id="hintLevel">${Math.min(this.hintLevelSession + 1, 3)}/3</span></button>
                    <button type="button" class="btn btn--sm btn--ghost" id="btnPartial">🔍 Tests parciales</button>
                    <button type="button" class="btn btn--sm btn--ghost" id="btnRunExercise">▶ Probar</button>
                    <button type="button" class="btn btn--sm btn--primary" id="btnCheck">✓ Comprobar</button>
                  </div>
                </div>
                <div class="code-editor-wrap code-editor-wrap--cm">
                  <textarea class="code-editor" id="codeEditor" spellcheck="false">${escapeHtml(draft)}</textarea>
                </div>
              </div>
              <div class="feedback hidden" id="feedback"></div>
              <div class="output-block">
                <div class="output-block__head">Consola <span id="exerciseTiming" class="output-timing"></span></div>
                <pre class="output" id="exerciseOutput">—</pre>
              </div>
            </div>
          </div>`;

    this.content.innerHTML = `
      <article class="lesson fade-in">
        <header class="lesson__header">
          <div class="lesson__header-top">
            <div>
              <span class="lesson__module">${lesson.moduleTitle}</span>
              <h1>${lesson.title}</h1>
            </div>
            <button type="button" class="btn btn--ghost btn--sm" id="btnResetLesson">↺ Reiniciar lección</button>
          </div>
          <div class="lesson__meta">
            <span class="lesson__maestro">🎨 Lección del Maestro Alebrije</span>
            <span class="lesson__duration">⏱ ${lesson.duration}</span>
            ${isDone ? '<span class="lesson__badge lesson__badge--done">✓ Completada</span>' : '<span class="lesson__badge lesson__badge--pending">En progreso</span>'}
            ${attempts > 0 ? `<span class="lesson__badge">Intentos: ${attempts}</span>` : ''}
          </div>
        </header>
        ${this.renderStepBar(this.activeTab)}
        <div class="tab-panel ${this.activeTab === 'theory' ? 'active' : ''}" id="panel-theory">
          ${aids.analogy && beginner ? `<div class="tip-box tip-box--analogy">🎨 <strong>Piensa así:</strong> ${aids.analogy}</div>` : ''}
          <div class="prose">${lesson.theory}</div>
          ${aids.summary.length ? `<div class="summary-box"><h3>📝 En resumen</h3><ul>${aids.summary.map((s) => `<li>${s}</li>`).join('')}</ul></div>` : ''}
          ${!isQuiz && renderQuizHtml(lesson.id, quizPassed)}
          <button type="button" class="btn btn--primary tab-cta" data-goto="example">Siguiente: ver ejemplo →</button>
        </div>
        <div class="tab-panel ${this.activeTab === 'example' ? 'active' : ''}" id="panel-example">${examplePanel}</div>
        <div class="tab-panel ${this.activeTab === 'exercise' ? 'active' : ''}" id="panel-exercise">${exercisePanel}</div>
        <nav class="lesson-nav">
          ${prev ? `<button type="button" class="btn btn--ghost" data-nav="${prev.id}">← ${prev.title.replace(/^\d+\.\s*/, '')}</button>` : '<span></span>'}
          ${next ? `<button type="button" class="btn btn--primary" data-nav="${next.id}">${next.title.replace(/^\d+\.\s*/, '')} →</button>` : `<button type="button" class="btn btn--primary" id="btnFinish">🎉 Curso completado</button>`}
        </nav>
      </article>
    `;

    this.highlightInContent();
    this.bindLessonEvents(lesson, isQuiz);
    if (!isQuiz) {
      const ta = document.getElementById('codeEditor');
      if (ta && window.CodeMirror) {
        initCodeEditor(ta, {
          theme: getTheme(),
          mode: getCourseMeta(getActiveCourseId()).editorMode || 'javascript',
          onChange: (val) => saveCodeDraft(lesson.id, val),
        });
      }
    }
  }

  highlightInContent() {
    this.content.querySelectorAll('[data-highlight]').forEach((el) => {
      if (el.querySelector('.hl-keyword, .hl-string, .hl-comment')) return;
      const code = el.textContent;
      el.innerHTML = `<code>${highlightJS(code)}</code>`;
    });
    this.content.querySelectorAll('.prose pre code').forEach((el) => {
      if (el.closest('[data-highlight]') || el.querySelector('.hl-keyword')) return;
      el.innerHTML = highlightJS(el.textContent);
    });
  }

  updateLineNumbers() {
    const editor = document.getElementById('codeEditor');
    const ln = document.getElementById('lineNumbers');
    if (!editor || !ln) return;
    const lines = editor.value.split('\n').length;
    ln.textContent = Array.from({ length: Math.max(lines, 1) }, (_, i) => i + 1).join('\n');
  }

  getCode() {
    return getEditorValue() || document.getElementById('codeEditor')?.value || '';
  }

  bindLessonEvents(lesson, isQuiz = !isCodeCourse(getActiveCourseId())) {
    this.content.querySelectorAll('[data-goto-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.dataset.gotoTab;
        this.renderLesson(lesson);
      });
    });

    this.content.querySelectorAll('[data-goto]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.dataset.goto;
        this.renderLesson(lesson);
      });
    });

    this.content.querySelectorAll('[data-nav]').forEach((btn) => {
      btn.addEventListener('click', () => this.goToLesson(btn.dataset.nav, { tab: 'theory' }));
    });

    document.getElementById('btnFinish')?.addEventListener('click', () => this.showCourseComplete());
    document.getElementById('btnResetLesson')?.addEventListener('click', () => {
      this.confirmResetLesson(lesson.id, lesson.title);
    });

    if (isQuiz) {
      if (!isLessonComplete(lesson.id)) {
        bindQuizExercise(this.content, lesson.exercise, {
          onPass: () => this.onQuizPass(lesson),
          onFail: () => recordAttempt(lesson.id, { success: false }),
        });
      }
      document.getElementById('btnHint')?.addEventListener('click', () => {
        this.hintUsedThisSession = true;
        recordHintUsed(lesson.id, 1);
        const hint = lesson.exercise?.hint || 'Repasa la teoría de esta lección.';
        this.showFeedback(false, `💡 ${hint}`);
      });
      return;
    }

    const explorer = this.content.querySelector('.code-explorer');
    if (explorer) bindCodeExplorer(explorer, lesson.id, lesson.example?.code || '');
    bindDomPlayground(this.content);
    bindQuiz(this.content, lesson.id, () => {
      markQuizPassed(lesson.id);
      this.toast('Quiz aprobado +10 XP', 'success');
      this.renderLesson(lesson);
    });

    const editor = document.getElementById('codeEditor');
    editor?.addEventListener('keydown', (e) => this.handleEditorKeys(e, lesson, editor));

    document.getElementById('btnRunExample')?.addEventListener('click', () => {
      const out = document.getElementById('exampleOutput');
      const timing = document.getElementById('exampleTiming');
      const result = runExample(lesson.example?.code || '');
      out.textContent = formatOutput(result);
      out.classList.toggle('output--error', !!result.error);
      if (timing) timing.textContent = result.ms != null ? `${result.ms}ms` : '';
    });

    document.getElementById('btnRunExercise')?.addEventListener('click', () => this.runExerciseCode(lesson, false));
    document.getElementById('btnCheck')?.addEventListener('click', () => this.runExerciseCode(lesson, true));

    document.getElementById('btnHint')?.addEventListener('click', () => {
      this.hintLevelSession = Math.min(this.hintLevelSession + 1, 3);
      this.hintUsedThisSession = true;
      recordHintUsed(lesson.id, this.hintLevelSession);
      const hint = getHintForLevel(lesson.id, lesson.exercise, this.hintLevelSession);
      const aids = getLessonAids(lesson.id);
      const hintEl = document.getElementById('hintLevel');
      if (hintEl) hintEl.textContent = `${this.hintLevelSession}/3`;
      this.showFeedback(false, `💡 Pista ${this.hintLevelSession}/3: ${hint}${aids.steps[0] ? `\n\n📋 Paso 1: ${aids.steps[0]}` : ''}`);
    });

    document.getElementById('btnPartial')?.addEventListener('click', () => this.runPartialTests(lesson));

    document.getElementById('btnResetCode')?.addEventListener('click', async () => {
      const ok = await confirmDialog({ title: 'Reiniciar código', message: '¿Volver al código inicial de la lección?', confirmText: 'Reiniciar' });
      if (ok) {
        saveCodeDraft(lesson.id, lesson.exercise.starterCode);
        this.renderLesson(lesson);
        this.toast('Código reiniciado', 'info');
      }
    });

    document.getElementById('btnSolution')?.addEventListener('click', async () => {
      if (!lesson.exercise?.solution) return;
      const ok = await confirmDialog({ title: 'Ver solución', message: 'No ganarás el bonus sin pistas. ¿Continuar?', confirmText: 'Ver solución' });
      if (ok) {
        this.hintUsedThisSession = true;
        recordHintUsed(lesson.id, 3);
        saveCodeDraft(lesson.id, lesson.exercise.solution);
        this.renderLesson(lesson);
      }
    });
  }

  onQuizPass(lesson) {
    if (isLessonComplete(lesson.id)) return;
    const prevLevel = getLevel(loadProgress().xp || 0);
    const { isNew } = markComplete(lesson.id, { usedHint: this.hintUsedThisSession });
    recordAttempt(lesson.id, { success: true });
    updateStudyStreak();
    this.buildNav();
    this.updateProfileUI();
    this.showFeedback(true, `¡Correcto! +${XP_PER_LESSON} XP`);
    if (isNew) {
      fireConfetti();
      const after = loadProgress();
      const newLevel = getLevel(after.xp || 0);
      this.toast(newLevel.tier > prevLevel.tier
        ? getMotivationalMessage(after.studentName, 'levelUp', newLevel.name)
        : getMotivationalMessage(after.studentName, 'complete'), 'success');
      if (!getNextLesson(lesson.id)) setTimeout(() => this.showCourseComplete(), 1200);
    }
    this.renderLesson(lesson);
  }

  async runPartialTests(lesson) {
    const code = this.getCode();
    const meta = getExerciseMeta(lesson.id);
    const tests = meta.partialTests?.length ? meta.partialTests : [
      { label: 'Sin errores de sintaxis', test: 'void 0;' },
    ];
    const results = [];
    for (const t of tests) {
      const r = await runPartialTest(code, t.test);
      results.push({ label: t.label, passed: r.passed });
    }
    const el = document.getElementById('partialResults');
    if (el) el.innerHTML = renderPartialResults(results);
  }

  handleEditorKeys(e, lesson) {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
      if (this.activeTab === 'example') {
        document.getElementById('btnRunExample')?.click();
      } else {
        this.runExerciseCode(lesson, e.shiftKey);
      }
    }
  }

  updateCompareOutput(expected, actual, hasError) {
    const col = document.getElementById('compareActual');
    if (col) {
      col.textContent = actual || '—';
      col.closest('.compare-col')?.classList.toggle('compare-col--ok', !hasError && actual);
    }
  }

  handleGlobalKeys(e) {
    if (e.key === '?' && !e.ctrlKey && document.activeElement?.tagName !== 'TEXTAREA') {
      e.preventDefault();
      this.toggleHelpPanel(true);
    }
    if (e.key === '/' && !e.ctrlKey && document.activeElement?.tagName !== 'TEXTAREA' && document.activeElement?.tagName !== 'INPUT') {
      e.preventDefault();
      this.focusSearch();
    }
    if (e.key === 'Escape') {
      this.closeModal();
      this.toggleHelpPanel(false);
    }
  }

  async runExerciseCode(lesson, check) {
    const out = document.getElementById('exerciseOutput');
    const timing = document.getElementById('exerciseTiming');
    const code = this.getCode();
    const aids = getLessonAids(lesson.id);

    if (!check) {
      const t0 = performance.now();
      const result = await runPreviewForLesson(code, lesson);
      result.ms = Math.round(performance.now() - t0);
      const text = formatOutput(result);
      out.textContent = text;
      out.classList.toggle('output--error', !!result.error);
      if (timing) timing.textContent = result.ms != null ? `${result.ms}ms` : '';
      this.updateCompareOutput(aids.expectedOutput, text, !!result.error);
      return;
    }

    const prevAttempts = getAttempts(lesson.id);

    const result = await runCodeWithTestsForLesson(code, lesson);

    recordAttempt(lesson.id, { success: !!result.success, message: (result.message || '').slice(0, 80) });
    const attempts = getAttempts(lesson.id);

    const text = formatOutput(result);
    out.textContent = text;
    out.classList.toggle('output--error', !result.success);
    if (timing) timing.textContent = result.ms != null ? `${result.ms}ms` : '';
    this.updateCompareOutput(aids.expectedOutput, text, !result.success);

    if (result.success) {
      if (prevAttempts === 0) markPerfectLesson(lesson.id);
      const prevLevel = getLevel(loadProgress().xp || 0);
      const { isNew } = markComplete(lesson.id, { usedHint: this.hintUsedThisSession });
      updateStudyStreak(loadProgress());
      this.buildNav();
      const bonus = this.hintUsedThisSession ? '' : ' (+15 XP bonus sin pistas)';
      this.showFeedback(true, `${result.message}${bonus}`);
      this.showLessonSummary(lesson);
      if (isNew) {
        if (getDailyChallenge().lessonId === lesson.id) markDailyChallengeDone();
        fireConfetti();
        const afterProgress = loadProgress();
        const newLevel = getLevel(afterProgress.xp || 0);
        if (newLevel.tier > prevLevel.tier) {
          this.toast(getMotivationalMessage(afterProgress.studentName, 'levelUp', newLevel.name), 'success');
        } else {
          this.toast(getMotivationalMessage(afterProgress.studentName, 'complete'), 'success');
        }
        const next = getNextLesson(lesson.id);
        if (getBeginnerMode() && next) {
          const ok = await confirmDialog({ title: '¡Lección completada!', message: `¿Ir a "${next.title}"?`, confirmText: 'Siguiente lección' });
          if (ok) this.goToLesson(next.id, { tab: 'theory' });
        } else if (!next) {
          setTimeout(() => this.showCourseComplete(), 1500);
        }
      }
    } else {
      let msg = result.message || result.error || 'Incorrecto';
      if (attempts >= 3 && lesson.exercise.solution) {
        msg += '\n\n🔓 Tras 3 intentos puedes usar "Ver solución".';
        this.renderLesson(lesson);
      } else if (attempts === 2) {
        msg += '\n\n💪 Un intento más y podrás ver la solución.';
      } else if (attempts === 1) {
        msg += '\n\n💡 Usa Pista (hasta 3 niveles) o Tests parciales.';
      }
      this.showFeedback(false, msg);
      await this.runPartialTests(lesson);
    }
  }

  showLessonSummary(lesson) {
    const aids = getLessonAids(lesson.id);
    const hist = getAttemptHistory(lesson.id);
    const progress = loadProgress();
    const msg = getMotivationalMessage(progress.studentName, 'complete');
    this.showModal('summary', `
      <div class="summary-profile">
        ${renderAvatarHtml(progress.avatarId, getLevelTier(getLevel(progress.xp || 0)), 'md')}
        <p class="summary-profile__msg">${escapeHtml(msg)}</p>
      </div>
      <h2>✅ ${lesson.title} completada</h2>
      <ul class="summary-list">
        ${aids.summary.map((s) => `<li>${s}</li>`).join('')}
      </ul>
      <p class="modal-tip">Intentos en esta lección: ${hist.length}</p>
      <button type="button" class="btn btn--primary" id="btnCloseSummary">Continuar</button>
    `);
    document.getElementById('btnCloseSummary')?.addEventListener('click', () => this.closeModal());
  }

  showFeedback(success, message) {
    const fb = document.getElementById('feedback');
    if (!fb) return;
    fb.classList.remove('hidden', 'feedback--ok', 'feedback--err');
    fb.classList.add(success ? 'feedback--ok' : 'feedback--err');
    fb.textContent = message;
  }

  confirmResetLesson(lessonId, title) {
    this.showModal('reset', `
      <h2>↺ Reiniciar lección</h2>
      <p>Se borrará el progreso de <strong>${escapeHtml(title)}</strong>:</p>
      <ul class="reset-list">
        <li>Marca como no completada</li>
        <li>Borra tu código guardado</li>
        <li>Reinicia contador de intentos</li>
        <li>Ajusta tu XP</li>
      </ul>
      <div class="modal-actions">
        <button type="button" class="btn btn--ghost" id="btnCancelReset">Cancelar</button>
        <button type="button" class="btn btn--primary btn--danger" id="btnConfirmResetLesson">Reiniciar lección</button>
      </div>
    `);
    document.getElementById('btnCancelReset')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btnConfirmResetLesson')?.addEventListener('click', () => {
      resetLesson(lessonId);
      this.activeTab = 'theory';
      this.closeModal();
      this.toast('Lección reiniciada', 'success');
      this.goToLesson(lessonId);
    });
  }

  confirmResetModule(moduleId) {
    const mod = getActiveCurriculum().find((m) => m.id === moduleId);
    if (!mod) return;
    const ids = mod.lessons.map((l) => l.id);
    this.showModal('reset', `
      <h2>↺ Reiniciar módulo</h2>
      <p>Se reiniciarán las <strong>${mod.lessons.length} lecciones</strong> de "${mod.title}":</p>
      <ul class="reset-list">${mod.lessons.map((l) => `<li>${l.title}</li>`).join('')}</ul>
      <div class="modal-actions">
        <button type="button" class="btn btn--ghost" id="btnCancelReset">Cancelar</button>
        <button type="button" class="btn btn--primary btn--danger" id="btnConfirmResetMod">Reiniciar módulo</button>
      </div>
    `);
    document.getElementById('btnCancelReset')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btnConfirmResetMod')?.addEventListener('click', () => {
      resetModule(ids);
      this.closeModal();
      this.toast(`Módulo "${mod.title}" reiniciado`, 'success');
      this.buildNav();
      if (ids.includes(this.currentLessonId)) {
        this.activeTab = 'theory';
        this.renderLesson(getLessonById(this.currentLessonId));
      }
    });
  }

  confirmResetCourse(fromWelcome = false) {
    this.showModal('reset', `
      <h2>↺ Reiniciar curso completo</h2>
      <p>Se borrará <strong>todo</strong> tu progreso:</p>
      <ul class="reset-list">
        <li>Todas las lecciones completadas</li>
        <li>XP, insignias y rachas</li>
        <li>Código guardado e intentos</li>
      </ul>
      <label class="reset-option"><input type="checkbox" id="keepName" checked> Conservar mi nombre</label>
      <label class="reset-option"><input type="checkbox" id="keepTheme" checked> Conservar tema claro/oscuro</label>
      <div class="modal-actions">
        <button type="button" class="btn btn--ghost" id="btnCancelReset">Cancelar</button>
        <button type="button" class="btn btn--primary btn--danger" id="btnConfirmResetCourse">Reiniciar todo</button>
      </div>
    `);
    document.getElementById('btnCancelReset')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btnConfirmResetCourse')?.addEventListener('click', () => {
      resetCourse({
        keepName: document.getElementById('keepName')?.checked ?? true,
        keepTheme: document.getElementById('keepTheme')?.checked ?? true,
      });
      this.closeModal();
      if (fromWelcome || this.mainApp.classList.contains('hidden')) {
        location.hash = '';
        location.reload();
      } else {
        this.toast('Curso reiniciado — ¡empecemos de nuevo!', 'success');
        this.activeTab = 'theory';
        this.enterApp(getAllLessons()[0].id);
      }
    });
  }

  showProfile() {
    const progress = loadProgress();
    const level = getLevel(progress.xp || 0);
    const tier = getLevelTier(level);
    const badges = getEarnedBadges(progress, getTotalLessons());
    const overview = getMultiCourseOverview();
    const aggregate = getAggregateStats();
    let editAvatar = progress.avatarId || 'alebrije';
    this.profileEditAvatarId = editAvatar;

    this.showModal('profile', `
      <div class="profile-modal">
        <div class="profile-modal__hero">
          ${renderAvatarHtml(progress.avatarId, tier, 'lg')}
          <div>
            <h2>${escapeHtml(getDisplayName(progress.studentName))}</h2>
            <p class="profile-modal__level">${level.name} · ${progress.xp || 0} XP en ${getCourseMeta(getActiveCourseId()).name}</p>
            ${overview.length > 1 ? `<p class="modal-tip">${aggregate.coursesCount} saberes · ${aggregate.totalXp} XP total · ${aggregate.totalCompleted} lecciones hechas</p>` : ''}
            ${level.nextAt ? `<div class="level-bar"><div class="level-bar__fill" style="width:${level.progress}%"></div></div>
              <p class="modal-tip">${level.progress}% hacia ${level.nextName} (${level.nextAt} XP)</p>` : '<p class="modal-tip">¡Nivel máximo alcanzado! 🏆</p>'}
          </div>
        </div>
        <div class="settings-group">
          <label class="profile-field" for="profileNickname"><span>Cambiar apodo</span>
            <input type="text" id="profileNickname" class="profile-input" maxlength="24" value="${escapeHtml(progress.studentName || '')}">
          </label>
        </div>
        <div class="settings-group">
          <span class="profile-field-label">Cambiar avatar</span>
          <div class="avatar-picker" id="profileAvatarPicker">${renderAvatarPicker(editAvatar)}</div>
        </div>
        <div class="profile-modal__courses">
          <div class="profile-modal__courses-head">
            <h3>Mis saberes</h3>
            <button type="button" class="btn btn--ghost btn--sm" id="btnProfileAddCourse">+ Añadir</button>
          </div>
          <p class="modal-tip">Estudia uno o varios a la vez. Pulsa un saber para cambiar el activo.</p>
          <div class="course-progress-list" id="profileCourseList">${renderStudyingCoursesHtml(overview)}</div>
        </div>
        <div class="profile-modal__stats">
          <span>🔥 ${progress.streak || 0} días</span>
          <span>🏅 ${badges.length} insignias</span>
          <span>📚 ${progress.completed.length} lecciones (${getCourseMeta(getActiveCourseId()).name})</span>
        </div>
        <button type="button" class="btn btn--primary" id="btnSaveProfile">Guardar perfil</button>
      </div>
    `);

    this.refreshAvatarPicker(document.getElementById('profileAvatarPicker'), editAvatar, 'profile');
    bindStudyingCourseActions(document.getElementById('profileCourseList'), (id) => this.switchToCourse(id));
    document.getElementById('btnProfileAddCourse')?.addEventListener('click', () => {
      this.closeModal();
      this.showCourseSwitcher();
    });

    document.getElementById('btnSaveProfile')?.addEventListener('click', () => {
      const nick = document.getElementById('profileNickname')?.value?.trim();
      if (!nick) {
        this.toast('El apodo no puede estar vacío', 'info');
        return;
      }
      setStudentName(nick);
      setAvatarId(this.profileEditAvatarId || editAvatar);
      setProfileSetupDone();
      this.updateProfileUI();
      this.buildNav();
      this.closeModal();
      this.toast(`Perfil actualizado, ${getDisplayName(nick)}`, 'success');
    });
  }

  showSettings() {
    const beginner = getBeginnerMode();
    const font = getFontSize();
    const summary = getBackupSummary();
    this.showModal('settings', `
      <h2>⚙️ Ajustes</h2>
      <div class="settings-group">
        <label class="settings-toggle">
          <input type="checkbox" id="toggleBeginner" ${beginner ? 'checked' : ''}>
          <span><strong>Modo principiante</strong><br><small>Explicaciones extra y confirmación al avanzar</small></span>
        </label>
      </div>
      <div class="settings-group">
        <label>Tamaño de fuente</label>
        <select id="fontSizeSelect" class="settings-select">
          <option value="sm" ${font === 'sm' ? 'selected' : ''}>Pequeña</option>
          <option value="md" ${font === 'md' ? 'selected' : ''}>Normal</option>
          <option value="lg" ${font === 'lg' ? 'selected' : ''}>Grande</option>
        </select>
      </div>
      <h3>📦 Copia de seguridad</h3>
      <p class="modal-tip">Guarda todo tu progreso, cursos, XP, ajustes y borradores en un archivo JSON para usarlo en otro dispositivo.</p>
      ${summary.totalCompleted > 0 ? `<p class="modal-tip">Actual: ${summary.coursesCount} saberes · ${summary.totalCompleted} lecciones · ${summary.totalXp} XP</p>` : ''}
      <div class="settings-actions">
        <button type="button" class="btn btn--primary btn--sm" id="btnSettingsExport">⬇ Exportar progreso</button>
        <button type="button" class="btn btn--ghost btn--sm" id="btnSettingsImport">⬆ Importar progreso</button>
      </div>
      <h3>Reiniciar progreso</h3>
      <div class="settings-actions">
        <button type="button" class="btn btn--ghost btn--sm" id="btnSettingsResetLesson">↺ Lección actual</button>
        <button type="button" class="btn btn--ghost btn--sm" id="btnSettingsResetCourse">↺ Curso completo</button>
      </div>
      <p class="modal-tip">Modo enfoque: botón 🎯 en la barra superior.</p>
      <h3>Información legal</h3>
      <div class="settings-actions settings-actions--legal">
        <button type="button" class="btn btn--ghost btn--sm" data-legal="notice">Aviso legal</button>
        <button type="button" class="btn btn--ghost btn--sm" data-legal="terms">Términos y condiciones</button>
        <button type="button" class="btn btn--ghost btn--sm" data-legal="disclaimer">Descargo de responsabilidad</button>
        <button type="button" class="btn btn--ghost btn--sm" data-legal="privacy">Privacidad</button>
        <button type="button" class="btn btn--ghost btn--sm" data-legal="donations">Donaciones voluntarias</button>
        <button type="button" class="btn btn--ghost btn--sm" data-legal="cookies">Cookies y almacenamiento</button>
        <button type="button" class="btn btn--ghost btn--sm" data-legal="ip">Propiedad intelectual</button>
        <button type="button" class="btn btn--ghost btn--sm" data-legal="reporting">Reportar errores</button>
      </div>
    `);
    /* data-legal: delegación global en #app */
    document.getElementById('toggleBeginner')?.addEventListener('change', (e) => {
      setBeginnerMode(e.target.checked);
      this.toast(e.target.checked ? 'Modo principiante ON' : 'Modo principiante OFF', 'info');
      if (this.currentLessonId) this.renderLesson(getLessonById(this.currentLessonId));
    });
    document.getElementById('fontSizeSelect')?.addEventListener('change', (e) => {
      setFontSize(e.target.value);
      this.applyPreferences();
    });
    document.getElementById('btnSettingsExport')?.addEventListener('click', () => this.exportProgress());
    document.getElementById('btnSettingsImport')?.addEventListener('click', () => {
      this.closeModal();
      this.triggerImport();
    });
    document.getElementById('btnSettingsResetLesson')?.addEventListener('click', () => {
      this.closeModal();
      if (this.currentLessonId) {
        this.confirmResetLesson(this.currentLessonId, getLessonById(this.currentLessonId)?.title);
      }
    });
    document.getElementById('btnSettingsResetCourse')?.addEventListener('click', () => {
      this.closeModal();
      this.confirmResetCourse();
    });
  }

  showDashboard() {
    const progress = loadProgress();
    const total = getTotalLessons();
    const level = getLevel(progress.xp || 0);
    const tier = getLevelTier(level);
    const badges = getEarnedBadges(progress, total);
    const stats = getStats(total);
    const overview = getMultiCourseOverview();
    const aggregate = getAggregateStats();
    const daily = getDailyChallenge();
    const dailyDone = isDailyChallengeDone();
    const name = getDisplayName(progress.studentName);

    this.showModal('dashboard', `
      <div class="dash-profile">
        ${renderAvatarHtml(progress.avatarId, tier, 'lg')}
        <div>
          <h2>Hola, ${escapeHtml(name)} 👋</h2>
          <p class="dash-profile__level">${level.name} · ${stats.xp} XP (${getCourseMeta(getActiveCourseId()).name})</p>
          ${overview.length > 1 ? `<p class="modal-tip">${aggregate.coursesCount} saberes activos · ${aggregate.totalXp} XP combinados</p>` : ''}
        </div>
      </div>
      ${overview.length ? `
        <h3>Mis saberes (${overview.length})</h3>
        <div class="course-progress-list course-progress-list--compact" id="dashCourseList">${renderStudyingCoursesHtml(overview)}</div>
        <button type="button" class="btn btn--ghost btn--sm" id="btnDashAddCourse">+ Añadir otro saber</button>
      ` : ''}
      <div class="dash-grid">
        <div class="dash-card"><span class="dash-card__val">${stats.completed}/${stats.total}</span><span class="dash-card__lbl">Lecciones</span></div>
        <div class="dash-card"><span class="dash-card__val">${stats.xp}</span><span class="dash-card__lbl">XP total</span></div>
        <div class="dash-card"><span class="dash-card__val">${stats.streak}🔥</span><span class="dash-card__lbl">Racha</span></div>
        <div class="dash-card"><span class="dash-card__val">${stats.totalTimeMin}m</span><span class="dash-card__lbl">Tiempo</span></div>
      </div>
      <div class="daily-challenge ${dailyDone ? 'daily-challenge--done' : ''}">
        <h3>📅 Desafío del día ${dailyDone ? '✓' : ''}</h3>
        <p>${daily.task}</p>
        ${dailyDone ? '' : `<button type="button" class="btn btn--sm btn--primary" id="btnGoDaily">Ir a la lección</button>`}
      </div>
      ${level.nextAt ? `<div class="level-bar"><div class="level-bar__fill" style="width:${level.progress}%"></div></div><p class="modal-tip">${level.name} → siguiente nivel a ${level.nextAt} XP</p>` : ''}
      <h3>Insignias (${badges.length}/${BADGES_COUNT})</h3>
      <div class="badges-grid">${badges.length ? badges.map((b) => `
        <div class="badge-item" title="${b.desc}"><span class="badge-item__icon">${b.icon}</span><span class="badge-item__name">${b.name}</span></div>
      `).join('') : '<p class="modal-tip">Completa lecciones para ganar insignias</p>'}</div>
      <p class="modal-tip">Quizzes: ${stats.quizzesPassed} · Intentos totales: ${stats.totalAttempts}</p>
      <button type="button" class="btn btn--ghost btn--sm" id="btnDashProfile">✏️ Editar perfil</button>
    `);
    document.getElementById('btnGoDaily')?.addEventListener('click', () => {
      this.closeModal();
      const l = getDailyChallengeLesson();
      if (l) this.goToLesson(l.id, { tab: 'exercise' });
    });
    bindStudyingCourseActions(document.getElementById('dashCourseList'), (id) => this.switchToCourse(id));
    document.getElementById('btnDashAddCourse')?.addEventListener('click', () => {
      this.closeModal();
      this.showCourseSwitcher();
    });
    document.getElementById('btnDashProfile')?.addEventListener('click', () => {
      this.closeModal();
      this.showProfile();
    });
  }

  showCourseComplete() {
    const progress = loadProgress();
    const course = getCourseMeta(getActiveCourseId());
    const total = getTotalLessons();
    const pct = getCompletionRate(total);
    const name = progress.studentName || 'Explorador/a';
    const date = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

    fireConfetti(4000);

    this.showModal('course-complete', `
      <div class="course-complete">
        <div class="course-complete__avatar">${renderAvatarHtml(progress.avatarId, getLevelTier(getLevel(progress.xp || 0)), 'lg')}</div>
        <p class="course-complete__badge">🎉 ¡Has terminado el curso!</p>
        <h2>${course.name}</h2>
        <p class="course-complete__text"><strong>${escapeHtml(name)}</strong> completó todas las lecciones de ${course.name}.</p>
        <p class="course-complete__stats">${progress.completed.length}/${total} lecciones · ${progress.xp || 0} XP · ${pct}%</p>
        <p class="course-complete__date">${date}</p>
        <p class="course-complete__note">Progreso personal en tu dispositivo — sin validez académica ni laboral.</p>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn--primary" id="btnCourseCompleteClose">Continuar explorando</button>
      </div>
    `);

    document.getElementById('btnCourseCompleteClose')?.addEventListener('click', () => this.closeModal());
  }

  showModal(id, html) {
    const overlay = document.getElementById('modalOverlay');
    const body = document.getElementById('modalBody');
    if (!overlay || !body) return;
    body.className = id === 'legal'
      ? 'modal modal--legal'
      : id === 'avatar-builder'
        ? 'modal modal--avatar-builder'
        : 'modal';
    body.innerHTML = html;
    overlay.classList.remove('hidden');
    overlay.dataset.modal = id;
  }

  closeModal() {
    document.getElementById('modalOverlay')?.classList.add('hidden');
  }

  bindLegalControls() {
    /* Delegación global en #app — ver init() */
  }

  showLegal(sectionId) {
    const html = getLegalModalHtml(sectionId);
    if (!html) return;
    this.showModal('legal', html);
  }

  exportProgress() {
    const json = exportBackupJson();
    const date = new Date().toISOString().slice(0, 10);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `biblioteca-del-saber-${date}.json`;
    a.click();
    URL.revokeObjectURL(url);
    const summary = getBackupSummary();
    this.toast(`Copia exportada · ${summary.coursesCount} saberes · ${summary.totalXp} XP`, 'success');
  }

  triggerImport() {
    const input = document.getElementById('backupFileInput');
    if (!input) return;
    input.value = '';
    input.click();
  }

  async handleImportFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    let text;
    try {
      text = await file.text();
    } catch {
      this.toast('No se pudo leer el archivo', 'error');
      return;
    }
    let data;
    try {
      data = parseBackupFile(text);
    } catch (err) {
      this.toast(err.message || 'Archivo inválido', 'error');
      return;
    }
    const courseCount = Object.keys(data.courses).length;
    const completed = Object.values(data.courses).reduce(
      (n, c) => n + (c.completed?.length || 0), 0,
    );
    const name = (data.profile?.studentName || '').trim() || 'Explorador/a';
    const ok = await confirmDialog({
      title: 'Importar progreso',
      message: `Se reemplazará tu progreso actual con la copia de ${name}.`,
      html: `<p><strong>${courseCount}</strong> saberes · <strong>${completed}</strong> lecciones completadas</p><p class="modal-tip">Perfil, XP, ajustes y borradores incluidos.</p>`,
      confirmText: 'Importar',
      danger: true,
    });
    if (!ok) return;
    importBackup(data);
    this.toast(`¡Progreso importado! Bienvenido de nuevo, ${name}`, 'success');
    setTimeout(() => location.reload(), 600);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatOutput(result) {
  if (result.error && !result.success) return `Error:\n${result.error}`;
  if (result.error) return `Error:\n${result.error}`;
  const lines = [];
  if (result.logs?.length) lines.push(...result.logs);
  if (result.errors?.length) lines.push(...result.errors.map((e) => `⚠ ${e}`));
  if (result.message && result.success) lines.push(`\n✓ ${result.message}`);
  return lines.length ? lines.join('\n') : '(sin salida en consola)';
}

window.__resetCurso = () => { resetCourse({ keepName: false, keepTheme: true }); location.reload(); };
