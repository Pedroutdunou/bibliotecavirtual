// ═══════════════════════════════════════════════════════════
//  encuestas_geometria.js  –  Bloque: Geometría  –  BiblioMara
// ═══════════════════════════════════════════════════════════

var ENCUESTAS_GEOMETRIA = {

  polig: {
    titulo: 'Polígonos y Figuras Planas',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuántos lados tiene un hexágono?',
        ops: ['5','7','8','6'], r: 3 },
      { p: '¿Cómo se llama un polígono de 3 lados?',
        ops: ['Cuadrado','Pentágono','Triángulo','Rombo'], r: 2 },
      { p: '¿Cuál de estas NO es una figura plana?',
        ops: ['Círculo','Triángulo','Esfera','Rectángulo'], r: 2 },
      { p: 'Un cuadrado tiene todos sus lados:',
        ops: ['Diferentes','Iguales y paralelos','Solo dos iguales','Perpendiculares únicamente'], r: 1 },
      { p: '¿Cuántos lados tiene un octágono?',
        ops: ['6','7','8','9'], r: 2 }
    ]
  },

  cuerpos3d: {
    titulo: 'Cuerpos Geométricos 3D',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuántas caras tiene un cubo?',
        ops: ['4','8','5','6'], r: 3 },
      { p: '¿Qué cuerpo geométrico tiene una base circular y termina en punta?',
        ops: ['Cilindro','Pirámide','Cono','Esfera'], r: 2 },
      { p: 'Una esfera tiene:',
        ops: ['6 caras planas','1 cara curva','2 bases circulares','4 vértices'], r: 1 },
      { p: '¿Cómo se llama el cuerpo con dos bases circulares paralelas?',
        ops: ['Cono','Prisma','Esfera','Cilindro'], r: 3 },
      { p: '¿Cuántos vértices tiene una pirámide cuadrangular?',
        ops: ['4','6','5','8'], r: 2 }
    ]
  },

  angulos: {
    titulo: 'Ángulos',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuántos grados mide un ángulo recto?',
        ops: ['45°','180°','60°','90°'], r: 3 },
      { p: 'Un ángulo agudo mide:',
        ops: ['Exactamente 90°','Más de 90°','Menos de 90°','180°'], r: 2 },
      { p: 'Un ángulo obtuso mide:',
        ops: ['Menos de 90°','Entre 90° y 180°','Exactamente 90°','Más de 360°'], r: 1 },
      { p: '¿Cómo se llama el ángulo que mide exactamente 180°?',
        ops: ['Recto','Agudo','Llano','Completo'], r: 2 },
      { p: '¿Con qué instrumento se miden los ángulos?',
        ops: ['Regla','Transportador','Compás','Escuadra'], r: 1 }
    ]
  },

  lineas: {
    titulo: 'Líneas Paralelas y Perpendiculares',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'Las líneas paralelas son las que:',
        ops: ['Se cruzan formando 90°','Nunca se cruzan','Se cruzan en un punto cualquiera','Son siempre curvas'], r: 1 },
      { p: 'Las líneas perpendiculares forman un ángulo de:',
        ops: ['45°','60°','180°','90°'], r: 3 },
      { p: '¿Cuál es un ejemplo de líneas paralelas en la vida real?',
        ops: ['Las agujas de un reloj','Los rieles de un tren','Las manecillas de un reloj','Un aspa de ventilador'], r: 1 },
      { p: 'Dos líneas que se cruzan formando ángulos rectos son:',
        ops: ['Paralelas','Secantes','Oblicuas','Perpendiculares'], r: 3 },
      { p: '¿Qué símbolo representa líneas paralelas?',
        ops: ['⊥','∥','≠','≈'], r: 1 }
    ]
  },

  perim: {
    titulo: 'Perímetro',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Qué es el perímetro de una figura?',
        ops: ['El espacio interior','La suma de todos sus lados','La altura de la figura','El número de ángulos'], r: 1 },
      { p: 'Un cuadrado tiene lados de 5 cm. ¿Cuál es su perímetro?',
        ops: ['10 cm','15 cm','25 cm','20 cm'], r: 3 },
      { p: 'Un rectángulo mide 8 cm de largo y 3 cm de ancho. ¿Cuál es su perímetro?',
        ops: ['11 cm','24 cm','22 cm','16 cm'], r: 2 },
      { p: 'Un triángulo equilátero tiene lados de 6 cm. ¿Cuánto mide su perímetro?',
        ops: ['12 cm','18 cm','36 cm','6 cm'], r: 1 },
      { p: '¿En qué unidad se mide el perímetro?',
        ops: ['cm²','m³','kg','cm o m'], r: 3 }
    ]
  },

  area: {
    titulo: 'Área',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Qué mide el área de una figura?',
        ops: ['La distancia alrededor','El espacio interior','La altura','Los ángulos'], r: 1 },
      { p: '¿Cuál es el área de un cuadrado de 4 cm de lado?',
        ops: ['8 cm²','12 cm²','16 cm²','20 cm²'], r: 2 },
      { p: '¿Cómo se calcula el área de un rectángulo?',
        ops: ['Base + Altura','Base × Altura','Base − Altura','(Base + Altura) × 2'], r: 1 },
      { p: 'Un rectángulo mide 6 cm de largo y 4 cm de ancho. ¿Cuál es su área?',
        ops: ['10 cm²','20 cm²','24 cm²','48 cm²'], r: 2 },
      { p: '¿En qué unidad se expresa el área?',
        ops: ['cm','cm²','cm³','kg'], r: 1 }
    ]
  },

  simetria: {
    titulo: 'Simetría',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Qué es un eje de simetría?',
        ops: ['Una línea que duplica la figura','Una línea que divide la figura en dos partes iguales','El borde de la figura','Una diagonal cualquiera'], r: 1 },
      { p: '¿Cuántos ejes de simetría tiene un cuadrado?',
        ops: ['2','8','4','1'], r: 2 },
      { p: '¿Cuántos ejes de simetría tiene un círculo?',
        ops: ['1','4','Infinitos','0'], r: 2 },
      { p: 'La letra "A" tiene:',
        ops: ['Dos ejes de simetría','Ningún eje','Un eje de simetría vertical','Cuatro ejes'], r: 2 },
      { p: '¿Cuántos ejes de simetría tiene un rectángulo (no cuadrado)?',
        ops: ['1','4','0','2'], r: 3 }
    ]
  },

  oresp: {
    titulo: 'Orientación Espacial',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuáles son los cuatro puntos cardinales?',
        ops: ['Arriba, abajo, izquierda, derecha','Norte, Sur, Este, Oeste','Norte, Sur, Arriba, Abajo','Este, Oeste, Alto, Bajo'], r: 1 },
      { p: 'Si estás mirando al Norte, ¿qué está a tu derecha?',
        ops: ['Sur','Oeste','Norte','Este'], r: 3 },
      { p: '¿Qué es un plano cartesiano?',
        ops: ['Un mapa de ciudades','Un sistema de dos ejes para ubicar puntos','Una figura geométrica','Un tipo de ángulo'], r: 1 },
      { p: 'El punto (0, 0) en el plano cartesiano se llama:',
        ops: ['Vértice','Centro','Origen','Punto inicial'], r: 2 },
      { p: 'Si un objeto está a 3 pasos al frente y 2 a la derecha, ¿cómo se describe su posición?',
        ops: ['3 izquierda, 2 atrás','3 adelante, 2 derecha','2 adelante, 3 derecha','3 atrás, 2 izquierda'], r: 1 }
    ]
  }

};

if (typeof window !== 'undefined') {
  window.ENCUESTAS_GEOMETRIA = ENCUESTAS_GEOMETRIA;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_GEOMETRIA);
}
