/**
 * Resaltador seguro — tokeniza antes de envolver en spans (evita romper HTML)
 */
const KEYWORDS = new Set([
  'function', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case',
  'break', 'continue', 'const', 'let', 'var', 'class', 'extends', 'new', 'this',
  'async', 'await', 'try', 'catch', 'finally', 'throw', 'import', 'export',
  'from', 'default', 'typeof', 'instanceof', 'in', 'of', 'true', 'false',
  'null', 'undefined', 'void', 'delete',
]);

const BUILTINS = new Set([
  'console', 'document', 'Promise', 'JSON', 'Array', 'Object', 'String',
  'Number', 'Boolean', 'Math', 'Date', 'setTimeout', 'setInterval',
]);

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function span(cls, text) {
  return `<span class="${cls}">${escapeHtml(text)}</span>`;
}

export function highlightJS(code) {
  if (!code) return '';
  const tokens = tokenize(code);
  return tokens.map((tok) => {
    switch (tok.type) {
      case 'comment': return span('hl-comment', tok.value);
      case 'string': return span('hl-string', tok.value);
      case 'number': return span('hl-number', tok.value);
      case 'keyword': return span('hl-keyword', tok.value);
      case 'builtin': return span('hl-builtin', tok.value);
      case 'fn': return span('hl-fn', tok.value);
      case 'operator': return span('hl-op', tok.value);
      case 'punct': return span('hl-punct', tok.value);
      default: return span('hl-plain', tok.value);
    }
  }).join('');
}

function tokenize(code) {
  const tokens = [];
  let i = 0;

  while (i < code.length) {
    const rest = code.slice(i);

    // Comentario línea
    if (rest.startsWith('//')) {
      const end = code.indexOf('\n', i);
      const val = end === -1 ? code.slice(i) : code.slice(i, end);
      tokens.push({ type: 'comment', value: val });
      i += val.length;
      continue;
    }

    // Comentario bloque
    if (rest.startsWith('/*')) {
      const end = code.indexOf('*/', i);
      const val = end === -1 ? code.slice(i) : code.slice(i, end + 2);
      tokens.push({ type: 'comment', value: val });
      i += val.length;
      continue;
    }

    // Strings
    const strMatch = rest.match(/^(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
    if (strMatch) {
      tokens.push({ type: 'string', value: strMatch[0] });
      i += strMatch[0].length;
      continue;
    }

    // Números
    const numMatch = rest.match(/^\d+\.?\d*/);
    if (numMatch && /[\d.]/.test(rest[0])) {
      tokens.push({ type: 'number', value: numMatch[0] });
      i += numMatch[0].length;
      continue;
    }

    // Identificadores y palabras clave
    const idMatch = rest.match(/^[a-zA-Z_$][\w$]*/);
    if (idMatch) {
      const word = idMatch[0];
      const next = code[i + word.length];
      if (KEYWORDS.has(word)) {
        tokens.push({ type: 'keyword', value: word });
      } else if (BUILTINS.has(word)) {
        tokens.push({ type: 'builtin', value: word });
      } else if (next === '(') {
        tokens.push({ type: 'fn', value: word });
      } else {
        tokens.push({ type: 'plain', value: word });
      }
      i += word.length;
      continue;
    }

    // Operadores
    const opMatch = rest.match(/^(===|!==|==|!=|<=|>=|&&|\|\||=>|\+\+|--|[+\-*/%=<>!&|^~?:])/);
    if (opMatch) {
      tokens.push({ type: 'operator', value: opMatch[0] });
      i += opMatch[0].length;
      continue;
    }

    // Puntuación
    if (/[{}()[\].,;]/.test(rest[0])) {
      tokens.push({ type: 'punct', value: rest[0] });
      i += 1;
      continue;
    }

    // Espacios y saltos
    const wsMatch = rest.match(/^[\s]+/);
    if (wsMatch) {
      tokens.push({ type: 'plain', value: wsMatch[0] });
      i += wsMatch[0].length;
      continue;
    }

    tokens.push({ type: 'plain', value: rest[0] });
    i += 1;
  }

  return tokens;
}

export function highlightTokenType(type) {
  const map = {
    comment: 'hl-comment',
    string: 'hl-string',
    number: 'hl-number',
    keyword: 'hl-keyword',
    builtin: 'hl-builtin',
    fn: 'hl-fn',
    operator: 'hl-op',
    punct: 'hl-punct',
  };
  return map[type] || '';
}
