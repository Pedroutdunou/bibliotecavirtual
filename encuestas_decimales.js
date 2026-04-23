// ═══════════════════════════════════════════════════════════
//  encuestas_decimales.js  –  Bloque: Decimales  –  BiblioMara
// ═══════════════════════════════════════════════════════════

var ENCUESTAS_DECIMALES = {

  decimal: {
    titulo: 'Décimas y Centésimas',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Qué representa el primer lugar después de la coma decimal?',
        ops: ['Centésimas','Milésimas','Décimas','Unidades'], r: 2 },
      { p: 'En el número 3,75 ¿qué dígito está en las centésimas?',
        ops: ['3','7','0','5'], r: 3 },
      { p: '¿Cuántas décimas tiene 1 entero?',
        ops: ['100','1 000','1','10'], r: 3 },
      { p: '¿Cómo se escribe "cuatro décimas" en número decimal?',
        ops: ['4,0','0,04','40,0','0,4'], r: 3 },
      { p: '¿Cuántas centésimas hay en 1 décima?',
        ops: ['1','100','1 000','10'], r: 3 }
    ]
  },

  lecdec: {
    titulo: 'Leer y Escribir Decimales',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cómo se lee el número 5,3?',
        ops: ['Cinco coma treinta','Cincuenta y tres','Cinco y tres décimas','Cinco con tres centésimas'], r: 2 },
      { p: '¿Cómo se escribe "doce con veinticinco centésimas"?',
        ops: ['1 225','12,025','12,25','12,250'], r: 2 },
      { p: '¿Cuál de estos números es mayor: 3,5 o 3,50?',
        ops: ['3,5','3,50','Son iguales','No se puede comparar'], r: 2 },
      { p: 'El número 0,07 se lee:',
        ops: ['Siete décimas','Siete milésimas','Siete centésimas','Cero punto siete'], r: 2 },
      { p: '¿Cuál es el valor del 4 en 2,45?',
        ops: ['4 unidades','4 centésimas','4 milésimas','4 décimas'], r: 3 }
    ]
  },

  opdec: {
    titulo: 'Suma y Resta de Decimales',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 2,5 + 1,3?',
        ops: ['3,8','4,8','3,18','2,8'], r: 0 },
      { p: '¿Cuánto es 5,00 − 2,75?',
        ops: ['3,35','2,25','2,35','3,25'], r: 1 },
      { p: 'Para sumar decimales, ¿qué debes alinear?',
        ops: ['Los numeradores','Las comas decimales','Las centésimas','Los enteros'], r: 1 },
      { p: '¿Cuánto es 0,8 + 0,35?',
        ops: ['0,43','1,15','0,115','1,35'], r: 1 },
      { p: '¿Cuánto es 3,60 − 1,45?',
        ops: ['2,25','2,15','1,25','2,05'], r: 1 }
    ]
  }

};

if (typeof window !== 'undefined') {
  window.ENCUESTAS_DECIMALES = ENCUESTAS_DECIMALES;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_DECIMALES);
}
