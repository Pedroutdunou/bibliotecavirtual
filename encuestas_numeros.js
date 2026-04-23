// ═══════════════════════════════════════════════════════════
//  encuestas_numeros.js  –  Bloque: Números  –  BiblioMara
//  Añade aquí las preguntas para cada tema del bloque Números.
//  Para otros bloques crea un archivo separado: encuestas_operaciones.js
// ═══════════════════════════════════════════════════════════

var ENCUESTAS_NUMEROS = {

  numnat: {
    titulo: 'Números Naturales',
    ptsCorrecta: 4,
    ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuál es el mayor número de 4 cifras?',
        ops: ['9 000','9 999','1 000','8 888'], r: 1 },
      { p: '¿Qué número sigue después del 3 999?',
        ops: ['3 998','4 000','3 990','4 001'], r: 1 },
      { p: '¿Cuántas cifras tiene el número 7 254?',
        ops: ['3','5','4','6'], r: 2 },
      { p: '¿Cuál de estos NO es un número natural?',
        ops: ['0','15','–3','100'], r: 2 },
      { p: 'El número cinco mil trescientos dos se escribe:',
        ops: ['5 032','5 302','5 320','530 2'], r: 1 }
    ]
  },

  valpos: {
    titulo: 'Valor Posicional',
    ptsCorrecta: 4,
    ptsPerfecto: 10,
    preguntas: [
      { p: 'En el número 6 847, ¿qué valor tiene el dígito 8?',
        ops: ['8','80','800','8 000'], r: 2 },
      { p: '¿Qué posición ocupa el 3 en 3 521?',
        ops: ['Unidades','Decenas','Centenas','Millares'], r: 3 },
      { p: 'El número 4 000 + 200 + 50 + 7 es igual a:',
        ops: ['4 275','4 257','4 725','4 527'], r: 1 },
      { p: 'En 9 036, ¿qué dígito está en las centenas?',
        ops: ['9','3','0','6'], r: 2 },
      { p: '¿Cuál es la forma desarrollada de 2 408?',
        ops: ['2000+40+8','2000+400+8','2000+408','200+40+8'], r: 1 }
    ]
  },

  compord: {
    titulo: 'Comparar y Ordenar',
    ptsCorrecta: 4,
    ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuál es el símbolo correcto? 3 452 ___ 3 425',
        ops: ['<','=','>','≤'], r: 2 },
      { p: 'Ordena de menor a mayor: 560, 506, 605, 650',
        ops: ['560,506,605,650','506,560,605,650','650,605,560,506','605,650,506,560'], r: 1 },
      { p: '¿Cuál es el número mayor? 7 090, 7 900, 7 009',
        ops: ['7 090','7 009','7 900','Todos iguales'], r: 2 },
      { p: 'Entre 4 500 y 4 050, ¿cuál es menor?',
        ops: ['4 500','4 050','Son iguales','No se puede saber'], r: 1 },
      { p: '¿Qué número está entre 2 999 y 3 001?',
        ops: ['2 998','3 002','3 000','3 100'], r: 2 }
    ]
  },

  parimp: {
    titulo: 'Pares e Impares',
    ptsCorrecta: 4,
    ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuál de estos números es PAR?',
        ops: ['137','245','384','901'], r: 2 },
      { p: '¿Cuál de estos números es IMPAR?',
        ops: ['200','318','476','753'], r: 3 },
      { p: 'El número 1 000 es:',
        ops: ['Impar','Par','Ni par ni impar','No se puede saber'], r: 1 },
      { p: '¿Qué tienen en común todos los números pares?',
        ops: ['Terminan en 0','Terminan en 5','Terminan en 0,2,4,6,8','Son mayores que 10'], r: 2 },
      { p: '¿Cuántos números pares hay entre 1 y 10?',
        ops: ['4','6','5','3'], r: 2 }
    ]
  },

  rectan: {
    titulo: 'Recta Numérica',
    ptsCorrecta: 4,
    ptsPerfecto: 10,
    preguntas: [
      { p: 'En la recta numérica, los números crecen hacia:',
        ops: ['La izquierda','Arriba','La derecha','Abajo'], r: 2 },
      { p: '¿Qué número está justo a la mitad entre 400 y 600?',
        ops: ['450','550','500','480'], r: 2 },
      { p: 'Si en la recta cada segmento vale 100, ¿qué número va después de 700?',
        ops: ['600','750','800','900'], r: 2 },
      { p: '¿Cuál es el número anterior de 1 000 en la recta?',
        ops: ['999','1 001','900','998'], r: 0 },
      { p: '¿Dónde se ubica el 0 en la recta numérica?',
        ops: ['Al extremo derecho','En el centro','Al extremo izquierdo','No aparece'], r: 1 }
    ]
  },

  numore: {
    titulo: 'Números Ordinales',
    ptsCorrecta: 4,
    ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cómo se escribe el ordinal del número 3?',
        ops: ['2do','4to','3ro','1ro'], r: 2 },
      { p: 'Si Ana llegó en el lugar número 10, ¿cuál es su ordinal?',
        ops: ['Novena','Décima','Undécima','Octava'], r: 1 },
      { p: '¿Cuál es el ordinal de 1?',
        ops: ['Segundo','Tercero','Primero','Cuarto'], r: 2 },
      { p: 'El 5to lugar se llama:',
        ops: ['Cuarto','Sexto','Quinto','Séptimo'], r: 2 },
      { p: '¿Qué ordinal viene después del séptimo?',
        ops: ['Sexto','Noveno','Octavo','Décimo'], r: 2 }
    ]
  },

  nurom: {
    titulo: 'Números Romanos',
    ptsCorrecta: 4,
    ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto vale V en números romanos?',
        ops: ['1','10','5','50'], r: 2 },
      { p: '¿Cómo se escribe 9 en números romanos?',
        ops: ['VIIII','VIII','IX','XI'], r: 2 },
      { p: '¿Cuánto vale XIV?',
        ops: ['16','14','11','4'], r: 1 },
      { p: '¿Cómo se escribe 40 en números romanos?',
        ops: ['XXXX','XL','LX','VVV'], r: 1 },
      { p: '¿Qué número romano representa 100?',
        ops: ['L','X','M','C'], r: 3 }
    ]
  }

};

// ── Registro de encuestas completadas (lee/escribe localStorage) ──
function getEncuestasLog() {
  try { return JSON.parse(localStorage.getItem('biblioEncuestas') || '{}'); }
  catch(e) { return {}; }
}
function saveEncuestasLog(log) {
  localStorage.setItem('biblioEncuestas', JSON.stringify(log));
}
function encuestaCompletada(topicId) {
  return !!getEncuestasLog()[topicId];
}
function marcarEncuesta(topicId, ptsGanados) {
  var log = getEncuestasLog();
  log[topicId] = { pts: ptsGanados, fecha: new Date().toISOString() };
  saveEncuestasLog(log);
}

// ── Añadir puntos a la sesión del estudiante ──────────────────
function sumarPuntosEncuesta(pts) {
  if (typeof window.actualizarPuntos === 'function') {
    return window.actualizarPuntos(pts);
  }
  try {
    var raw  = localStorage.getItem('biblioSesion');
    var data = raw ? JSON.parse(raw) : {};
    data.puntos = (data.puntos || 0) + pts;
    localStorage.setItem('biblioSesion', JSON.stringify(data));
    return data.puntos;
  } catch(e) { return 0; }
}

// Exportar a ENCUESTAS_ALL
if (typeof window !== 'undefined') {
  window.ENCUESTAS_NUMEROS = ENCUESTAS_NUMEROS;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_NUMEROS);
}
