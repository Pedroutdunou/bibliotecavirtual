// ═══════════════════════════════════════════════════════════
//  encuestas_resolucion.js  –  Bloque: Resolución  –  BiblioMara
// ═══════════════════════════════════════════════════════════

var ENCUESTAS_RESOLUCION = {

  estrat: {
    titulo: 'Estrategias de Resolución',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuál es el primer paso para resolver un problema matemático?',
        ops: ['Hacer la operación','Escribir el resultado','Leer y entender el problema','Dibujar la figura'], r: 2 },
      { p: '¿Para qué sirve hacer un dibujo o diagrama al resolver un problema?',
        ops: ['Para decorar la hoja','Para visualizar mejor la situación','Para practicar el dibujo','Para ganar tiempo'], r: 1 },
      { p: 'Después de resolver un problema, ¿qué debes hacer?',
        ops: ['Empezar otro problema','Borrar los cálculos','Verificar que la respuesta tiene sentido','Cambiar los datos'], r: 2 },
      { p: '¿Qué estrategia usas cuando un problema tiene muchos pasos?',
        ops: ['Resolverlo de una sola vez','Dividirlo en pasos más pequeños','Ignorar los datos difíciles','Cambiar la pregunta'], r: 1 },
      { p: '¿Qué información debes identificar primero en un problema?',
        ops: ['La respuesta','Solo los números','Los datos conocidos y la pregunta','El título del libro'], r: 2 }
    ]
  },

  prob1op: {
    titulo: 'Problemas con 1 Operación',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'Luis tiene 245 figuritas y recibe 138 más. ¿Cuántas tiene ahora?',
        ops: ['373','383','393','403'], r: 1 },
      { p: 'En una caja hay 360 caramelos. Se reparten entre 9 niños por igual. ¿Cuántos recibe cada uno?',
        ops: ['30','40','50','45'], r: 1 },
      { p: 'Un libro tiene 184 páginas. María leyó 97. ¿Cuántas le faltan?',
        ops: ['97','87','77','107'], r: 1 },
      { p: 'Hay 6 bolsas con 35 naranjas cada una. ¿Cuántas naranjas hay en total?',
        ops: ['180','200','210','220'], r: 2 },
      { p: 'En una tienda había 520 Bs. Gastaron 175 Bs. ¿Cuánto queda?',
        ops: ['355 Bs','345 Bs','335 Bs','365 Bs'], r: 1 }
    ]
  },

  prob2op: {
    titulo: 'Problemas con 2 Operaciones',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'Ana compró 3 cuadernos a 12 Bs cada uno y pagó con 50 Bs. ¿Cuánto le devolverán?',
        ops: ['14 Bs','16 Bs','26 Bs','8 Bs'], r: 0 },
      { p: 'Pedro tenía 80 Bs, ganó 45 Bs más y luego gastó 30 Bs. ¿Cuánto tiene ahora?',
        ops: ['85 Bs','95 Bs','75 Bs','105 Bs'], r: 1 },
      { p: 'Hay 5 cajas con 24 lápices. Se usan 40. ¿Cuántos lápices quedan?',
        ops: ['70','80','60','90'], r: 0 },
      { p: 'Un granjero tiene 3 gallineros con 18 gallinas cada uno. Vende 15. ¿Cuántas quedan?',
        ops: ['49','39','44','54'], r: 1 },
      { p: 'Se compran 4 paquetes de 25 galletas y se comen 30. ¿Cuántas galletas quedan?',
        ops: ['60','70','80','90'], r: 1 }
    ]
  },

  probcot: {
    titulo: 'Problemas Cotidianos',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: 'El autobús sale a las 7:30 a.m. y tarda 45 minutos. ¿A qué hora llega?',
        ops: ['8:05 a.m.','8:15 a.m.','7:75 a.m.','8:30 a.m.'], r: 1 },
      { p: 'Una receta necesita 250 g de harina. Si vas a hacer el doble, ¿cuánta harina necesitas?',
        ops: ['400 g','600 g','500 g','300 g'], r: 2 },
      { p: 'Un niño mide 1,20 m y su papá 1,75 m. ¿Cuánto más alto es el papá?',
        ops: ['0,45 m','0,55 m','0,65 m','0,50 m'], r: 1 },
      { p: 'En el mercado, 1 kg de tomates cuesta 8 Bs. ¿Cuánto cuestan 3,5 kg?',
        ops: ['24 Bs','28 Bs','32 Bs','20 Bs'], r: 1 },
      { p: 'Una piscina tiene 2 400 litros. Se usan 750 litros. ¿Cuántos litros quedan?',
        ops: ['1 550 L','1 750 L','1 650 L','1 850 L'], r: 2 }
    ]
  }

};

if (typeof window !== 'undefined') {
  window.ENCUESTAS_RESOLUCION = ENCUESTAS_RESOLUCION;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_RESOLUCION);
}
