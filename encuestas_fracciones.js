// ═══════════════════════════════════════════════════════════
//  encuestas_fracciones.js  –  Bloque: Fracciones  –  BiblioMara
// ═══════════════════════════════════════════════════════════

var ENCUESTAS_FRACCIONES = {

  frac: {
    titulo: '¿Qué es una Fracción?',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Qué representa el numerador de una fracción?',
        ops: ['El total de partes','Las partes tomadas','El número mayor','El denominador'], r: 1 },
      { p: 'En la fracción 3/5, ¿cuántas partes tiene el entero?',
        ops: ['3','8','2','5'], r: 3 },
      { p: '¿Cuál de estas es una fracción propia?',
        ops: ['7/4','5/5','3/8','9/2'], r: 2 },
      { p: 'Si una pizza se corta en 8 partes y comes 3, ¿qué fracción comiste?',
        ops: ['8/3','5/8','3/8','3/5'], r: 2 },
      { p: 'Una fracción impropia es aquella donde el numerador es:',
        ops: ['Menor que el denominador','Igual a 1','Mayor o igual al denominador','Igual a 0'], r: 2 }
    ]
  },

  fracequiv: {
    titulo: 'Fracciones Equivalentes',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuál es equivalente a 1/2?',
        ops: ['2/3','3/4','2/4','3/6'], r: 2 },
      { p: '¿Cuál es equivalente a 2/3?',
        ops: ['4/9','4/6','6/4','3/2'], r: 1 },
      { p: 'Para obtener una fracción equivalente puedes:',
        ops: ['Sumar el mismo número arriba y abajo','Multiplicar numerador y denominador por el mismo número','Cambiar el numerador por el denominador','Restar el denominador del numerador'], r: 1 },
      { p: '¿Son equivalentes 3/4 y 6/8?',
        ops: ['No, son distintas','Sí, son equivalentes','Solo si el numerador es par','No se puede saber'], r: 1 },
      { p: 'La fracción simplificada de 6/9 es:',
        ops: ['3/4','2/4','2/3','1/3'], r: 2 }
    ]
  },

  compfrac: {
    titulo: 'Comparar Fracciones',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuál es mayor: 3/5 o 2/5?',
        ops: ['2/5','Son iguales','3/5','No se puede comparar'], r: 2 },
      { p: 'Si dos fracciones tienen el mismo denominador, ¿cuál es mayor?',
        ops: ['La de menor numerador','La de mayor numerador','Siempre son iguales','Depende del denominador'], r: 1 },
      { p: '¿Cuál es menor: 1/4 o 1/3?',
        ops: ['1/3','Son iguales','1/4','No se puede saber'], r: 2 },
      { p: 'Para comparar 2/3 y 3/4, ¿qué conviene hacer primero?',
        ops: ['Sumarlas','Restarlas','Hallar denominador común','Multiplicarlas'], r: 2 },
      { p: 'Ordena de menor a mayor: 1/2, 1/4, 3/4',
        ops: ['3/4, 1/2, 1/4','1/4, 3/4, 1/2','1/4, 1/2, 3/4','1/2, 1/4, 3/4'], r: 2 }
    ]
  },

  opfrac: {
    titulo: 'Suma y Resta de Fracciones',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 1/4 + 2/4?',
        ops: ['3/8','2/4','3/4','1/2'], r: 2 },
      { p: '¿Cuánto es 5/6 − 2/6?',
        ops: ['3/12','7/6','3/0','3/6'], r: 3 },
      { p: 'Para sumar fracciones con diferente denominador, primero debes:',
        ops: ['Sumar los numeradores','Igualar los denominadores','Multiplicar en cruz','Simplificar'], r: 1 },
      { p: '¿Cuánto es 1/3 + 1/6?',
        ops: ['2/9','1/2','2/6','3/6'], r: 1 },
      { p: '¿Cuánto es 7/8 − 3/8?',
        ops: ['4/0','10/8','4/16','4/8'], r: 3 }
    ]
  }

};

if (typeof window !== 'undefined') {
  window.ENCUESTAS_FRACCIONES = ENCUESTAS_FRACCIONES;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_FRACCIONES);
}
