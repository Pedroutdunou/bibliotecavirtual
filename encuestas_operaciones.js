// ═══════════════════════════════════════════════════════════
//  encuestas_operaciones.js  –  Bloque: Operaciones  –  BiblioMara
// ═══════════════════════════════════════════════════════════

var ENCUESTAS_OPERACIONES = {

  suma: {
    titulo: 'Suma con Llevada',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 3 456 + 2 789?',
        ops: ['6 245','6 145','6 245','6 355'], r: 0 },
      { p: 'En una suma con llevada, ¿qué haces cuando la columna da 10 o más?',
        ops: ['Escribes solo el número grande','Llevas 1 a la columna siguiente','Empiezas de nuevo','Restan la diferencia'], r: 1 },
      { p: '¿Cuánto es 5 678 + 1 432?',
        ops: ['7 010','7 110','7 100','7 011'], r: 1 },
      { p: 'Si tienes 1 250 + 3 875, ¿cuánto suman?',
        ops: ['5 125','4 025','5 025','4 125'], r: 3 },
      { p: '¿En qué columna empiezas a sumar?',
        ops: ['Millares','Centenas','Decenas','Unidades'], r: 3 }
    ]
  },

  resta: {
    titulo: 'Resta con Préstamo',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 8 000 − 3 456?',
        ops: ['4 544','4 444','5 544','4 644'], r: 0 },
      { p: '¿Qué haces cuando el dígito de arriba es menor que el de abajo?',
        ops: ['Ignoras la columna','Pones un 0','Pides prestado a la columna siguiente','Sumas en su lugar'], r: 2 },
      { p: '¿Cuánto es 7 302 − 4 158?',
        ops: ['3 244','3 154','3 144','2 244'], r: 2 },
      { p: 'Comprueba: si 6 500 − 2 300 = 4 200, ¿cómo lo verificas?',
        ops: ['4 200 + 2 300 = 6 500','4 200 − 2 300 = 6 500','6 500 + 4 200 = 2 300','2 300 − 4 200 = 6 500'], r: 0 },
      { p: '¿Cuánto es 5 000 − 1?',
        ops: ['4 001','4 999','4 909','4 099'], r: 1 }
    ]
  },

  calmen: {
    titulo: 'Cálculo Mental',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 300 + 700 mentalmente?',
        ops: ['900','1 100','1 000','100'], r: 2 },
      { p: '¿Cuánto es 50 × 2 de cabeza?',
        ops: ['25','100','150','200'], r: 1 },
      { p: '¿Cuánto es 1 000 − 400 mentalmente?',
        ops: ['500','700','400','600'], r: 3 },
      { p: 'Calcula mentalmente: 25 + 25 + 25 + 25',
        ops: ['75','50','125','100'], r: 3 },
      { p: '¿Cuánto es 6 × 9 de cabeza?',
        ops: ['54','48','56','63'], r: 0 }
    ]
  },

  probsr: {
    titulo: 'Problemas Suma y Resta',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'Ana tenía 1 450 Bs y gastó 875 Bs. ¿Cuánto le queda?',
        ops: ['675 Bs','575 Bs','725 Bs','475 Bs'], r: 1 },
      { p: 'En el mercado había 3 200 naranjas. Vendieron 1 850. ¿Cuántas quedan?',
        ops: ['1 250','1 450','1 350','1 150'], r: 2 },
      { p: 'Pedro coleccionó 324 estampillas y Juan 216. ¿Cuántas tienen en total?',
        ops: ['530','540','640','550'], r: 1 },
      { p: '¿Qué operación usas para saber cuánto falta para llegar a una cantidad?',
        ops: ['Suma','Multiplicación','División','Resta'], r: 3 },
      { p: 'Un colegio tiene 1 200 alumnos. Se inscriben 350 más. ¿Cuántos hay ahora?',
        ops: ['1 450','1 650','1 550','1 500'], r: 2 }
    ]
  },

  tabmul: {
    titulo: 'Tablas de Multiplicar',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 7 × 8?',
        ops: ['54','56','48','63'], r: 1 },
      { p: '¿Cuánto es 9 × 6?',
        ops: ['45','63','54','72'], r: 2 },
      { p: '¿Cuánto es 4 × 7?',
        ops: ['21','32','28','35'], r: 2 },
      { p: '¿Cuánto es 8 × 8?',
        ops: ['56','72','64','48'], r: 2 },
      { p: '¿Cuánto es 6 × 9?',
        ops: ['45','54','63','72'], r: 1 }
    ]
  },

  mul2: {
    titulo: 'Multiplicar por 2 Cifras',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 23 × 12?',
        ops: ['256','276','286','266'], r: 1 },
      { p: '¿Cuánto es 45 × 20?',
        ops: ['800','850','900','950'], r: 2 },
      { p: 'Al multiplicar 34 × 15, ¿cuántos productos parciales obtienes?',
        ops: ['1','3','2','4'], r: 2 },
      { p: '¿Cuánto es 50 × 13?',
        ops: ['550','650','600','700'], r: 1 },
      { p: '¿Cuánto es 24 × 11?',
        ops: ['244','264','254','274'], r: 1 }
    ]
  },

  mul3: {
    titulo: 'Multiplicar por 3 Cifras',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 100 × 25?',
        ops: ['250','2 500','2 050','25 000'], r: 1 },
      { p: '¿Cuánto es 200 × 14?',
        ops: ['1 400','2 800','2 400','2 000'], r: 1 },
      { p: 'Al multiplicar por 3 cifras, ¿cuántos productos parciales hay?',
        ops: ['2','4','3','5'], r: 2 },
      { p: '¿Cuánto es 125 × 8?',
        ops: ['900','1 000','800','1 200'], r: 1 },
      { p: '¿Cuánto es 300 × 30?',
        ops: ['900','9 000','3 000','90 000'], r: 1 }
    ]
  },

  propmu: {
    titulo: 'Propiedades de la Multiplicación',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'La propiedad conmutativa dice que 3 × 5 es igual a:',
        ops: ['5 + 3','5 × 3','5 − 3','15 × 1'], r: 1 },
      { p: 'Cualquier número multiplicado por 0 es igual a:',
        ops: ['El mismo número','1','0','Imposible'], r: 2 },
      { p: 'La propiedad asociativa permite:',
        ops: ['Cambiar el orden de los factores','Agrupar factores de distinta manera','Sumar en lugar de multiplicar','Dividir los factores'], r: 1 },
      { p: '¿Cuánto es 7 × 1?',
        ops: ['0','1','7','8'], r: 2 },
      { p: '2 × (3 × 4) es lo mismo que:',
        ops: ['(2 × 3) + 4','2 + 3 × 4','(2 × 3) × 4','2 × 3 + 2 × 4'], r: 2 }
    ]
  },

  probmu: {
    titulo: 'Problemas de Multiplicación',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'Hay 6 cajas con 24 lápices cada una. ¿Cuántos lápices hay en total?',
        ops: ['124','144','134','154'], r: 1 },
      { p: 'Una tienda vende 15 artículos al día. ¿Cuántos vende en 7 días?',
        ops: ['95','115','105','125'], r: 2 },
      { p: 'Un libro tiene 48 páginas. ¿Cuántas páginas tienen 12 libros iguales?',
        ops: ['560','476','576','486'], r: 2 },
      { p: '¿Qué operación usas para saber el total de grupos iguales?',
        ops: ['Suma','Resta','División','Multiplicación'], r: 3 },
      { p: 'Si una caja pesa 3 kg, ¿cuánto pesan 25 cajas?',
        ops: ['65 kg','70 kg','75 kg','80 kg'], r: 2 }
    ]
  },

  div1: {
    titulo: 'División por 1 Cifra',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 72 ÷ 8?',
        ops: ['7','8','9','6'], r: 2 },
      { p: '¿Cuánto es 56 ÷ 7?',
        ops: ['6','7','8','9'], r: 2 },
      { p: 'En 45 ÷ 5, ¿cómo se llama el resultado?',
        ops: ['Dividendo','Divisor','Cociente','Resto'], r: 2 },
      { p: '¿Cuánto es 84 ÷ 4?',
        ops: ['18','22','21','24'], r: 2 },
      { p: '¿Cuánto es 90 ÷ 3?',
        ops: ['20','35','30','40'], r: 2 }
    ]
  },

  div2: {
    titulo: 'División por 2 Cifras',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuánto es 180 ÷ 12?',
        ops: ['12','14','15','16'], r: 2 },
      { p: '¿Cuánto es 240 ÷ 20?',
        ops: ['8','10','12','14'], r: 2 },
      { p: 'En una división, si el resto es 0, la división es:',
        ops: ['Inexacta','Imposible','Exacta','Incompleta'], r: 2 },
      { p: '¿Cuánto es 650 ÷ 25?',
        ops: ['24','26','28','22'], r: 1 },
      { p: '¿Cuánto es 300 ÷ 15?',
        ops: ['15','20','25','30'], r: 1 }
    ]
  },

  relmul: {
    titulo: 'Relación Multiplicación y División',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'Si 6 × 8 = 48, ¿cuánto es 48 ÷ 6?',
        ops: ['6','7','8','9'], r: 2 },
      { p: 'La multiplicación y la división son operaciones:',
        ops: ['Sin relación','Iguales','Inversas','Idénticas'], r: 2 },
      { p: 'Si 9 × 7 = 63, ¿cuánto es 63 ÷ 9?',
        ops: ['6','7','8','9'], r: 1 },
      { p: '¿Cuál es la familia de operaciones de 4, 5 y 20?',
        ops: ['4+5=9 / 9−4=5','4×5=20 / 20÷4=5','4+5+20','4−5=20'], r: 1 },
      { p: 'Si 36 ÷ 4 = 9, entonces 9 × 4 =',
        ops: ['13','27','36','45'], r: 2 }
    ]
  },

  probdi: {
    titulo: 'Problemas de División',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'Se reparten 96 galletas entre 8 niños. ¿Cuántas le tocan a cada uno?',
        ops: ['10','11','12','13'], r: 2 },
      { p: 'Hay 150 sillas en 6 filas iguales. ¿Cuántas sillas hay por fila?',
        ops: ['20','25','30','35'], r: 1 },
      { p: '¿Qué operación usas para repartir en partes iguales?',
        ops: ['Suma','Resta','División','Multiplicación'], r: 2 },
      { p: 'Si 5 amigos se reparten 85 Bs en partes iguales, ¿cuánto recibe cada uno?',
        ops: ['15 Bs','17 Bs','16 Bs','18 Bs'], r: 1 },
      { p: 'Tienes 200 canicas y las metes en bolsas de 25. ¿Cuántas bolsas necesitas?',
        ops: ['6','7','8','9'], r: 2 }
    ]
  }

};

// Registrar el catálogo para que matematicas.html lo detecte automáticamente
if (typeof window !== 'undefined') {
  window.ENCUESTAS_OPERACIONES = ENCUESTAS_OPERACIONES;
  // Fusionar con el objeto global de encuestas si existe
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_OPERACIONES);
}
