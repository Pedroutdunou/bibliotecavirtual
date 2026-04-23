// ════════════════════════════════════════════════════════════════
//  encuestas_ciencia2.js  –  Ciencias Naturales Parte 2 (8 temas · 80 preguntas)
//  Bloque 2: suelo, biodiven, contam, climacam
//  Bloque 3: materia, cammat, luzsom, sonido
//  BiblioMara – UEP Instituto Mara
// ════════════════════════════════════════════════════════════════

const ENCUESTAS_CIENCIA2 = {

// ──────────────────────────────────────────────────────────────
// BLOQUE 2 – EL AMBIENTE (continuación)
// ──────────────────────────────────────────────────────────────

"suelo": {
  titulo: "El Suelo",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿De qué está formado el suelo?", ops: ["Solo de arena","De roca, minerales, materia orgánica, agua y aire","Solo de arcilla y piedras","Solo de agua y arena"], r: 1 },
    { p: "¿Cuántas capas principales tiene el suelo?", ops: ["1","2","3","5"], r: 2 },
    { p: "¿Cómo se llama la capa superficial del suelo, rica en materia orgánica?", ops: ["Subsuelo","Roca madre","Horizonte A o capa vegetal","Horizonte C"], r: 2 },
    { p: "¿Qué es el humus?", ops: ["Un tipo de roca","La materia orgánica descompuesta que enriquece el suelo","Un mineral del subsuelo","Un tipo de arcilla"], r: 1 },
    { p: "¿Cuál es la principal función del suelo para las plantas?", ops: ["Darles color","Proporcionarles agua, nutrientes y soporte","Producir oxígeno para ellas","Darles luz solar"], r: 1 },
    { p: "¿Qué tipo de suelo retiene mejor el agua?", ops: ["Suelo arenoso","Suelo pedregoso","Suelo arcilloso","Suelo rocoso"], r: 2 },
    { p: "¿Qué causa la erosión del suelo?", ops: ["El riego controlado","La acción del viento, el agua y la deforestación","El abono orgánico","Plantar más árboles"], r: 1 },
    { p: "¿Para qué sirven los lombrices de tierra en el suelo?", ops: ["Para contaminar el suelo","Para airear y enriquecer el suelo con nutrientes","Para compactar la tierra","Para eliminar plantas"], r: 1 },
    { p: "¿Qué es la deforestación y cómo afecta al suelo?", ops: ["Plantar árboles; mejora el suelo","Tala de árboles; deja el suelo sin protección y favorece la erosión","Regar el suelo; lo compacta","Abonar la tierra; la contamina"], r: 1 },
    { p: "¿Cuál de estas prácticas ayuda a conservar el suelo?", ops: ["Quemar los campos agrícolas","La rotación de cultivos y el uso de abono orgánico","Usar muchos pesticidas","Dejar el suelo sin vegetación"], r: 1 },
  ]
},

"biodiven": {
  titulo: "Biodiversidad Venezolana",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Por qué Venezuela es considerada un país megadiverso?", ops: ["Por su gran extensión de desiertos","Por su altísima variedad de especies de flora y fauna","Por tener el río más largo","Por su clima muy frío"], r: 1 },
    { p: "¿Cuál es el río más largo e importante de Venezuela?", ops: ["El Nilo","El Orinoco","El Amazonas","El Caroní"], r: 1 },
    { p: "¿Qué son los tepuyes?", ops: ["Volcanes activos venezolanos","Mesetas de roca antigua con ecosistemas únicos, como el Roraima","Playas del Caribe venezolano","Selvas del sur del país"], r: 1 },
    { p: "El Salto Ángel, la cascada más alta del mundo, está en:", ops: ["Colombia","Brasil","Venezuela, en el Parque Nacional Canaima","Ecuador"], r: 2 },
    { p: "¿Cuál de estos animales es endémico o emblemático de Venezuela?", ops: ["El oso polar","El cóndor de los Andes venezolanos","El tonina o delfín de río del Orinoco","El tigre de Bengala"], r: 2 },
    { p: "¿Qué es una especie endémica?", ops: ["Una especie introducida de otro país","Una especie que solo existe en un lugar determinado del mundo","Una especie extinta","Una especie muy grande"], r: 1 },
    { p: "¿Cuál es la principal amenaza para la biodiversidad venezolana?", ops: ["El turismo controlado","La deforestación, la caza ilegal y la contaminación","Las lluvias intensas","Los parques nacionales"], r: 1 },
    { p: "¿Qué es el Parque Nacional Henri Pittier?", ops: ["Una playa venezolana","El parque nacional más antiguo de Venezuela, con gran biodiversidad de aves","Un parque temático en Caracas","Una reserva de agua potable"], r: 1 },
    { p: "Los Llanos venezolanos son famosos por su fauna, incluyendo:", ops: ["Pingüinos y focas","Caimanes, chigüires, garzas y anacondas","Osos polares y renos","Tigres y elefantes"], r: 1 },
    { p: "¿Por qué es importante proteger la biodiversidad de Venezuela?", ops: ["Solo por razones estéticas","Porque los ecosistemas equilibrados garantizan el bienestar de toda la vida incluyendo la humana","No es importante protegerla","Solo para el turismo"], r: 1 },
  ]
},

"contam": {
  titulo: "Contaminación Ambiental",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es la contaminación ambiental?", ops: ["La limpieza del ambiente","La presencia de sustancias dañinas en el ambiente que afectan a los seres vivos","El reciclaje de basura","La plantación de árboles"], r: 1 },
    { p: "¿Cuáles son los tres tipos principales de contaminación ambiental?", ops: ["Del agua, del aire y del suelo","De la luz, del sonido y del calor","Solo del agua y del suelo","Del fuego, del aire y del hielo"], r: 0 },
    { p: "¿Cuál de estas actividades contamina el agua?", ops: ["Filtrar el agua","Verter desechos industriales y aguas residuales en los ríos","Plantar árboles cerca de los ríos","Beber agua potable"], r: 1 },
    { p: "¿Qué son los residuos sólidos?", ops: ["Líquidos industriales","Los desechos sólidos como plásticos, vidrios y metales","Gases emitidos por fábricas","Agua contaminada"], r: 1 },
    { p: "¿Cuál es la regla de las 3R para el ambiente?", ops: ["Reciclar, Recuperar, Renovar","Reducir, Reutilizar, Reciclar","Reemplazar, Reforzar, Recobrar","Regar, Recubrir, Reforestar"], r: 1 },
    { p: "¿Qué daño causa el plástico en los océanos?", ops: ["Mejora el hábitat de los peces","Afecta y mata a la vida marina que lo confunde con alimento","Purifica el agua del mar","No tiene ningún efecto"], r: 1 },
    { p: "¿Qué es la lluvia ácida?", ops: ["Lluvia beneficiosa para las plantas","Lluvia contaminada con gases industriales que daña plantas, suelos y edificios","Lluvia muy abundante en verano","Lluvia de regiones polares"], r: 1 },
    { p: "¿Cuál de estas es una acción personal para reducir la contaminación?", ops: ["Comprar más productos de plástico desechable","Separar los residuos y reciclar en casa","Tirar basura en la calle","Desperdiciar el agua"], r: 1 },
    { p: "¿Qué ocurre con los ecosistemas acuáticos cuando se contaminan?", ops: ["Aumenta la biodiversidad","Mueren peces y plantas acuáticas, y se rompe el equilibrio del ecosistema","No cambia nada","Se vuelven más productivos"], r: 1 },
    { p: "La contaminación sonora es producida principalmente por:", ops: ["El canto de los pájaros","El ruido excesivo del tráfico, industrias y construcciones","Las cascadas y ríos","El viento"], r: 1 },
  ]
},

"climacam": {
  titulo: "Cambio Climático",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es el efecto invernadero?", ops: ["La refrigeración del planeta","El proceso natural por el que ciertos gases retienen calor en la atmósfera","La capa de ozono","La lluvia ácida"], r: 1 },
    { p: "¿Cuáles son los principales gases de efecto invernadero?", ops: ["Oxígeno y nitrógeno","Dióxido de carbono (CO₂), metano y vapor de agua","Argón y helio","Solo el ozono"], r: 1 },
    { p: "¿Qué es el calentamiento global?", ops: ["El enfriamiento de los polos","El aumento de la temperatura promedio de la Tierra por exceso de gases invernadero","Una tormenta tropical","El ciclo normal de estaciones"], r: 1 },
    { p: "¿Cuál de estas actividades humanas aumenta el CO₂ en la atmósfera?", ops: ["Plantar bosques","Quemar combustibles fósiles como petróleo y carbón","Usar energía solar","Reciclar papel"], r: 1 },
    { p: "¿Cuál es una consecuencia del cambio climático?", ops: ["Más glaciares y hielo polar","El derretimiento de los glaciares y la subida del nivel del mar","Más lluvias en los desiertos únicamente","Temperaturas más bajas en todo el planeta"], r: 1 },
    { p: "¿Qué es la huella de carbono?", ops: ["Una marca en el suelo","La cantidad total de gases de efecto invernadero que genera una persona o actividad","Un tipo de combustible","El rastro de los animales"], r: 1 },
    { p: "¿Qué podemos hacer para reducir el cambio climático?", ops: ["Usar más combustibles fósiles","Ahorrar energía, usar renovables y plantar árboles","Producir más plástico","Aumentar la deforestación"], r: 1 },
    { p: "¿Por qué se derriten los polos con el cambio climático?", ops: ["Porque el Sol se está apagando","Porque el aumento de temperatura global funde el hielo polar","Porque los vientos cambiaron de dirección","Por la lluvia ácida"], r: 1 },
    { p: "¿Qué acuerdo internacional busca reducir los efectos del cambio climático?", ops: ["El Tratado de Versalles","El Acuerdo de París","La Carta Magna","La Declaración de Independencia"], r: 1 },
    { p: "¿Cómo afecta el cambio climático a los animales?", ops: ["No los afecta en nada","Altera sus hábitats y puede llevar a la extinción de muchas especies","Los hace más grandes","Los hace más resistentes"], r: 1 },
  ]
},

// ──────────────────────────────────────────────────────────────
// BLOQUE 3 – ENERGÍA Y MATERIA (primeros 4 temas)
// ──────────────────────────────────────────────────────────────

"materia": {
  titulo: "La Materia",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es la materia?", ops: ["Solo los objetos que vemos","Todo lo que tiene masa y ocupa un lugar en el espacio","Solo los líquidos y gases","La energía del Sol"], r: 1 },
    { p: "¿Cuáles son los tres estados de la materia?", ops: ["Duro, blando y viscoso","Sólido, líquido y gaseoso","Frío, caliente y tibio","Pesado, liviano y mediano"], r: 1 },
    { p: "¿Cuál es la característica principal de los sólidos?", ops: ["No tienen forma definida","Tienen forma y volumen definidos","No tienen volumen fijo","Se expanden infinitamente"], r: 1 },
    { p: "¿Cómo se comporta un líquido respecto a su forma?", ops: ["Mantiene siempre la misma forma","Toma la forma del recipiente que lo contiene","No tiene volumen","Se expande igual que el gas"], r: 1 },
    { p: "¿Qué característica tienen los gases?", ops: ["Tienen forma fija","Tienen volumen fijo","No tienen forma ni volumen definidos; llenan el recipiente","Solo se encuentran en el aire"], r: 2 },
    { p: "¿Qué es la masa de un objeto?", ops: ["Su tamaño visual","La cantidad de materia que contiene","Su temperatura","Su color"], r: 1 },
    { p: "¿Cuál es la diferencia entre masa y peso?", ops: ["Son exactamente lo mismo","La masa es la cantidad de materia; el peso es la fuerza gravitacional sobre esa masa","El peso es siempre mayor que la masa","La masa cambia según el planeta, el peso no"], r: 1 },
    { p: "¿Cuál de estos es un ejemplo de materia en estado gaseoso?", ops: ["Hielo","Mercurio líquido","El vapor de agua","Un bloque de madera"], r: 2 },
    { p: "¿Cuál es la unidad de medida de la masa en el sistema internacional?", ops: ["El litro","El kilogramo","El metro","El newton"], r: 1 },
    { p: "¿Pueden coexistir los tres estados de la materia en la naturaleza?", ops: ["No, solo puede existir uno a la vez","Sí, por ejemplo en un vaso con agua, hielo y vapor","Solo en el laboratorio","Solo a temperaturas extremas"], r: 1 },
  ]
},

"cammat": {
  titulo: "Cambios de la Materia",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Cómo se llama el cambio del estado sólido al líquido?", ops: ["Evaporación","Sublimación","Fusión o derretimiento","Solidificación"], r: 2 },
    { p: "¿Cómo se llama el cambio del estado líquido al gaseoso?", ops: ["Fusión","Condensación","Solidificación","Evaporación o vaporización"], r: 3 },
    { p: "¿Cómo se llama el cambio del estado gaseoso al líquido?", ops: ["Evaporación","Condensación","Fusión","Sublimación"], r: 1 },
    { p: "¿Cómo se llama el cambio del estado líquido al sólido?", ops: ["Fusión","Evaporación","Solidificación o congelación","Sublimación"], r: 2 },
    { p: "¿Qué es la sublimación?", ops: ["El paso de líquido a gas","El paso de sólido a gas sin pasar por líquido","El paso de gas a sólido","El paso de sólido a líquido"], r: 1 },
    { p: "¿Qué necesita la materia para pasar de sólido a líquido?", ops: ["Perder calor","Ganar calor o energía","Perder masa","Cambiar de color"], r: 1 },
    { p: "El hielo que se derrite bajo el sol es un ejemplo de:", ops: ["Condensación","Sublimación","Solidificación","Fusión"], r: 3 },
    { p: "El vapor de agua que forma gotas en un vaso frío es:", ops: ["Evaporación","Fusión","Condensación","Sublimación"], r: 2 },
    { p: "¿Los cambios de estado son cambios físicos o químicos?", ops: ["Siempre químicos","Físicos, porque la sustancia no cambia su composición","Depende de la temperatura","No son cambios"], r: 1 },
    { p: "¿A qué temperatura se funde el hielo a presión normal?", ops: ["−10 °C","0 °C","100 °C","50 °C"], r: 1 },
  ]
},

"luzsom": {
  titulo: "La Luz y la Sombra",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es la luz?", ops: ["Un tipo de sonido","Una forma de energía que permite ver los objetos","Un gas especial","Un líquido invisible"], r: 1 },
    { p: "¿A qué velocidad viaja la luz en el vacío?", ops: ["300 km/h","300 000 km/s","1 000 m/s","150 000 km/s"], r: 1 },
    { p: "¿Qué es la reflexión de la luz?", ops: ["Cuando la luz atraviesa un objeto","Cuando la luz rebota al chocar con una superficie","Cuando la luz desaparece","Cuando la luz se dobla al pasar por el agua"], r: 1 },
    { p: "¿Qué es la refracción de la luz?", ops: ["Cuando la luz rebota","Cuando la luz se dobla o cambia de dirección al pasar de un medio a otro","Cuando la luz crea sombras","Cuando la luz se apaga"], r: 1 },
    { p: "¿Qué produce una sombra?", ops: ["La reflexión total de la luz","Un objeto opaco que bloquea el paso de la luz","Un espejo","La refracción de la luz"], r: 1 },
    { p: "¿Cuántos colores tiene el espectro visible de la luz blanca?", ops: ["3","5","7","10"], r: 2 },
    { p: "¿Qué instrumento óptico separa la luz blanca en los colores del arco iris?", ops: ["El telescopio","El microscopio","El prisma","La lupa"], r: 2 },
    { p: "Los objetos opacos son los que:", ops: ["Dejan pasar toda la luz","Dejan pasar parte de la luz","No dejan pasar la luz y producen sombras","Absorben todos los colores"], r: 2 },
    { p: "¿Cómo funciona un espejo plano?", ops: ["Refracta la luz","Absorbe la luz completamente","Refleja la luz produciendo una imagen simétrica","Produce colores del arco iris"], r: 2 },
    { p: "¿Por qué vemos de colores los objetos?", ops: ["Porque producen luz propia","Porque reflejan ciertos colores de la luz y absorben otros","Porque la luz no los toca","Porque son transparentes"], r: 1 },
  ]
},

"sonido": {
  titulo: "El Sonido",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué produce el sonido?", ops: ["La luz del Sol","Las vibraciones de los cuerpos","El movimiento del agua","El calor del fuego"], r: 1 },
    { p: "¿A través de qué medios puede propagarse el sonido?", ops: ["Solo por el aire","Solo por el agua","Por sólidos, líquidos y gases","Solo en el vacío"], r: 2 },
    { p: "¿Puede el sonido propagarse en el vacío del espacio?", ops: ["Sí, a gran velocidad","Sí, pero muy lento","No, necesita un medio material para propagarse","Solo si hay luz"], r: 2 },
    { p: "¿Qué es la frecuencia del sonido?", ops: ["El volumen del sonido","La cantidad de vibraciones por segundo, que determina el tono (agudo o grave)","La velocidad del sonido","El material que vibra"], r: 1 },
    { p: "Un sonido de alta frecuencia es:", ops: ["Grave y fuerte","Agudo","Lento y bajo","Silencioso"], r: 1 },
    { p: "¿Qué es el eco?", ops: ["Un sonido muy fuerte","La reflexión del sonido en una superficie que lo devuelve al emisor","Un sonido agudo","El sonido bajo el agua"], r: 1 },
    { p: "¿En qué medio se propaga más rápido el sonido?", ops: ["En el vacío","En el aire","En el agua","En los sólidos"], r: 3 },
    { p: "¿Qué unidad se usa para medir la intensidad del sonido?", ops: ["El hertz (Hz)","El metro (m)","El decibelio (dB)","El newton (N)"], r: 2 },
    { p: "¿A cuántos decibelios aproximadamente puede el sonido dañar el oído humano?", ops: ["30 dB","60 dB","85–90 dB o más","10 dB"], r: 2 },
    { p: "¿Qué instrumento usa las vibraciones del sonido para producir música?", ops: ["El termómetro","La guitarra, cuyas cuerdas vibran al pulsarlas","El microscopio","El reloj"], r: 1 },
  ]
},

}; // fin ENCUESTAS_CIENCIA2

if (typeof window !== 'undefined') {
  window.ENCUESTAS_CIENCIA2 = ENCUESTAS_CIENCIA2;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_CIENCIA2);
}
