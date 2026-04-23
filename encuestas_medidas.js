// ═══════════════════════════════════════════════════════════
//  encuestas_medidas.js  –  Bloque: Medidas  –  BiblioMara
// ═══════════════════════════════════════════════════════════

var ENCUESTAS_MEDIDAS = {

  longit: {
    titulo: 'Longitud: cm, m, km',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuántos centímetros hay en 1 metro?',
        ops: ['10','1 000','100','500'], r: 2 },
      { p: '¿Cuántos metros hay en 1 kilómetro?',
        ops: ['100','10 000','10','1 000'], r: 3 },
      { p: '¿Qué unidad usarías para medir la distancia entre dos ciudades?',
        ops: ['Centímetros','Milímetros','Kilómetros','Metros'], r: 2 },
      { p: '2,5 metros equivalen a:',
        ops: ['25 cm','2 500 mm','250 cm','2 050 mm'], r: 2 },
      { p: '¿Con qué instrumento se mide la longitud de un objeto pequeño?',
        ops: ['Balanza','Termómetro','Regla o cinta métrica','Reloj'], r: 2 }
    ]
  },

  masa: {
    titulo: 'Masa: g y kg',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuántos gramos hay en 1 kilogramo?',
        ops: ['100','10 000','10','1 000'], r: 3 },
      { p: '¿Qué unidad usarías para pesar una sandía?',
        ops: ['Gramos','Milímetros','Kilogramos','Litros'], r: 2 },
      { p: '3 kg equivalen a:',
        ops: ['300 g','30 g','3 000 g','3 00 g'], r: 2 },
      { p: '¿Con qué instrumento se mide la masa?',
        ops: ['Termómetro','Regla','Balanza o báscula','Reloj'], r: 2 },
      { p: '500 g son la mitad de:',
        ops: ['2 kg','5 kg','100 g','1 kg'], r: 3 }
    ]
  },

  capac: {
    titulo: 'Capacidad: mL y L',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuántos mililitros hay en 1 litro?',
        ops: ['100','10','10 000','1 000'], r: 3 },
      { p: '¿Qué unidad usarías para medir el agua de una piscina?',
        ops: ['Gramos','Mililitros','Litros','Kilogramos'], r: 2 },
      { p: '2,5 litros equivalen a:',
        ops: ['250 mL','25 mL','2 500 mL','2 050 mL'], r: 2 },
      { p: '¿Con qué instrumento se mide la capacidad de un líquido?',
        ops: ['Balanza','Jarra graduada','Termómetro','Regla'], r: 1 },
      { p: 'Una botella tiene 500 mL. ¿Cuántas botellas llenan 1 litro?',
        ops: ['5','3','4','2'], r: 3 }
    ]
  },

  tiempo: {
    titulo: 'Unidades de Tiempo',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuántos minutos tiene 1 hora?',
        ops: ['30','100','120','60'], r: 3 },
      { p: '¿Cuántos segundos tiene 1 minuto?',
        ops: ['100','60','30','120'], r: 1 },
      { p: '¿Cuántos días tiene un año regular (no bisiesto)?',
        ops: ['360','366','356','365'], r: 3 },
      { p: '2 horas y 30 minutos equivalen a:',
        ops: ['130 min','230 min','150 min','120 min'], r: 2 },
      { p: '¿Cuántas horas tiene un día?',
        ops: ['12','48','36','24'], r: 3 }
    ]
  },

  temp: {
    titulo: 'Temperatura',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Con qué instrumento se mide la temperatura?',
        ops: ['Balanza','Termómetro','Regla','Reloj'], r: 1 },
      { p: '¿En qué unidad se mide la temperatura en Venezuela?',
        ops: ['Fahrenheit','Kelvin','Grados Celsius','Grados Newton'], r: 2 },
      { p: '¿A cuántos grados Celsius hierve el agua?',
        ops: ['0 °C','50 °C','75 °C','100 °C'], r: 3 },
      { p: '¿A cuántos grados Celsius se congela el agua?',
        ops: ['10 °C','-10 °C','0 °C','5 °C'], r: 2 },
      { p: 'Si ayer la temperatura fue 28 °C y hoy subió 4 °C, ¿cuánto marca hoy?',
        ops: ['24 °C','36 °C','30 °C','32 °C'], r: 3 }
    ]
  },

  sismtec: {
    titulo: 'Sistema Métrico Decimal',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuál es la unidad base de longitud en el sistema métrico?',
        ops: ['Kilómetro','Centímetro','Metro','Milímetro'], r: 2 },
      { p: '¿Cuál es la unidad base de masa en el sistema métrico?',
        ops: ['Gramo','Tonelada','Libra','Kilogramo'], r: 3 },
      { p: '¿Qué prefijo significa "mil"?',
        ops: ['Centi-','Mili-','Deci-','Kilo-'], r: 3 },
      { p: '¿Qué prefijo significa "centésima parte"?',
        ops: ['Kilo-','Deci-','Centi-','Mili-'], r: 2 },
      { p: '¿Por qué se llama "decimal" el sistema métrico?',
        ops: ['Porque usa decimales en los precios','Porque sus unidades se relacionan de 10 en 10','Porque fue creado en diciembre','Porque mide solo décimas'], r: 1 }
    ]
  },

  monetar: {
    titulo: 'Sistema Monetario',
    ptsCorrecta: 4, ptsPerfecto: 10,
    preguntas: [
      { p: '¿Cuál es la moneda oficial de Venezuela?',
        ops: ['Peso','Dólar','Bolívar','Sol'], r: 2 },
      { p: 'Si tienes 3 billetes de 10 Bs y 2 monedas de 1 Bs, ¿cuánto tienes en total?',
        ops: ['35 Bs','25 Bs','30 Bs','32 Bs'], r: 3 },
      { p: 'Un artículo cuesta 45 Bs y pagas con 50 Bs. ¿Cuánto es el cambio?',
        ops: ['10 Bs','15 Bs','5 Bs','95 Bs'], r: 2 },
      { p: '¿Qué operación usas para calcular el cambio o vuelto?',
        ops: ['Suma','Multiplicación','División','Resta'], r: 3 },
      { p: 'Si 3 cuadernos cuestan 18 Bs, ¿cuánto cuesta 1?',
        ops: ['9 Bs','6 Bs','3 Bs','15 Bs'], r: 1 }
    ]
  }

};

if (typeof window !== 'undefined') {
  window.ENCUESTAS_MEDIDAS = ENCUESTAS_MEDIDAS;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_MEDIDAS);
}
