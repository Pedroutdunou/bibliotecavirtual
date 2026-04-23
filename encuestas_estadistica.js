// ═══════════════════════════════════════════════════════════
//  encuestas_estadistica.js  –  Bloque: Estadística  –  BiblioMara
// ═══════════════════════════════════════════════════════════

var ENCUESTAS_ESTADISTICA = {

  tablas: {
    titulo: 'Tablas de Datos',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Para qué sirve una tabla de datos?',
        ops: ['Para dibujar figuras','Para organizar y comparar información','Para medir longitudes','Para sumar fracciones'], r: 1 },
      { p: 'En una tabla, ¿cómo se llama cada línea horizontal?',
        ops: ['Columna','Celda','Fila','Título'], r: 2 },
      { p: 'Una tabla muestra que el lunes llovió 3 mm, el martes 7 mm y el miércoles 5 mm. ¿Cuánto llovió en total?',
        ops: ['13 mm','14 mm','15 mm','16 mm'], r: 2 },
      { p: '¿Qué dato de la tabla indica cuántas veces ocurrió algo?',
        ops: ['El título','La frecuencia','La columna','El encabezado'], r: 1 },
      { p: 'Una tabla tiene 4 filas y 3 columnas. ¿Cuántas celdas tiene en total?',
        ops: ['7','14','12','9'], r: 2 }
    ]
  },

  barras: {
    titulo: 'Gráficos de Barras',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Qué representa la altura de cada barra en un gráfico?',
        ops: ['El color del dato','La cantidad o valor del dato','El nombre del eje','El título'], r: 1 },
      { p: '¿Qué eje suele tener los números en un gráfico de barras vertical?',
        ops: ['Eje horizontal (X)','El título','Eje vertical (Y)','Las barras'], r: 2 },
      { p: 'Un gráfico muestra: Manzanas=8, Peras=5, Uvas=12. ¿Cuál fruta es la más popular?',
        ops: ['Manzanas','Peras','Todas igual','Uvas'], r: 3 },
      { p: '¿Para qué sirve el título de un gráfico de barras?',
        ops: ['Para decorar','Para indicar los colores','Para explicar qué información muestra','Para marcar los números'], r: 2 },
      { p: 'En el gráfico anterior, ¿cuántas frutas se contaron en total?',
        ops: ['20','25','23','28'], r: 1 }
    ]
  },

  picto: {
    titulo: 'Pictogramas',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Qué es un pictograma?',
        ops: ['Una tabla de números','Un tipo de suma','Un gráfico que usa imágenes para representar datos','Un mapa geográfico'], r: 2 },
      { p: 'En un pictograma, cada ⭐ representa 5 estudiantes. Si hay 4 estrellas, ¿cuántos estudiantes son?',
        ops: ['15','25','20','9'], r: 2 },
      { p: '¿Qué indica la clave o leyenda de un pictograma?',
        ops: ['El título del gráfico','Cuánto representa cada símbolo','El color de los dibujos','La suma total'], r: 1 },
      { p: 'Un pictograma muestra 3 🍎 para el lunes y 5 🍎 para el martes (cada 🍎 = 2). ¿Cuántas manzanas en total?',
        ops: ['8','14','16','18'], r: 2 },
      { p: '¿En qué se diferencia un pictograma de un gráfico de barras?',
        ops: ['El pictograma usa números, el de barras usa dibujos','El pictograma usa dibujos en lugar de barras','Son exactamente iguales','El pictograma es más difícil de leer'], r: 1 }
    ]
  },

  proba: {
    titulo: 'Probabilidad Básica',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Qué estudia la probabilidad?',
        ops: ['La suma de números','Las figuras geométricas','La posibilidad de que algo ocurra','La medida de objetos'], r: 2 },
      { p: 'Una bolsa tiene 3 bolas rojas y 1 azul. ¿Qué color es más probable sacar?',
        ops: ['Azul','Ambos igual','Rojo','Ninguno'], r: 2 },
      { p: '¿Cuál de estos eventos es IMPOSIBLE?',
        ops: ['Llover mañana','Sacar un 7 en un dado de 6 caras','Sacar cara en una moneda','Que salga el sol'], r: 1 },
      { p: '¿Cuál de estos eventos es SEGURO?',
        ops: ['Ganar un juego','El día sigue a la noche','Llover hoy','Sacar un número par en un dado'], r: 1 },
      { p: 'Al lanzar una moneda, ¿cuál es la probabilidad de que salga cara?',
        ops: ['1 de cada 4','1 de cada 3','1 de cada 2','Siempre sale cara'], r: 2 }
    ]
  }

};

if (typeof window !== 'undefined') {
  window.ENCUESTAS_ESTADISTICA = ENCUESTAS_ESTADISTICA;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_ESTADISTICA);
}
