/** Wrapper CodeMirror para el editor de ejercicios */

let cmInstance = null;

export function initCodeEditor(textarea, { onChange, theme = 'dark', mode = 'javascript' } = {}) {
  destroyCodeEditor();
  if (!window.CodeMirror || !textarea) return null;

  const cmTheme = theme === 'dark' ? 'material-darker' : 'default';
  cmInstance = window.CodeMirror.fromTextArea(textarea, {
    mode,
    theme: cmTheme,
    lineNumbers: true,
    tabSize: 2,
    indentWithTabs: false,
    lineWrapping: true,
    extraKeys: {
      Tab: (cm) => {
        if (cm.somethingSelected()) cm.indentSelection('add');
        else cm.replaceSelection('  ', 'end');
      },
    },
  });

  cmInstance.setSize(null, 240);
  if (onChange) cmInstance.on('change', () => onChange(cmInstance.getValue()));

  return cmInstance;
}

export function getEditorValue() {
  return cmInstance ? cmInstance.getValue() : '';
}

export function setEditorValue(code) {
  if (cmInstance) cmInstance.setValue(code);
}

export function destroyCodeEditor() {
  if (cmInstance) {
    cmInstance.toTextArea();
    cmInstance = null;
  }
}

export function refreshEditorTheme(theme) {
  if (cmInstance) {
    cmInstance.setOption('theme', theme === 'dark' ? 'material-darker' : 'default');
  }
}
