// ════════════════════════════════════════════════════════════════
//  encuestas_ciencia3.js  –  Ciencias Naturales Parte 3 (8 temas · 80 preguntas)
//  Bloque 3: petroven, fuentener, maqsimp
//  Bloque 4: tierra, atmosfera, movtie, luna, sistemsol
//  BiblioMara – UEP Instituto Mara  |  Nivel: 4° grado primaria
// ════════════════════════════════════════════════════════════════

const ENCUESTAS_CIENCIA3 = {

// ──────────────────────────────────────────────────────────────
// BLOQUE 3 – ENERGÍA Y MATERIA (últimos 3 temas)
// ──────────────────────────────────────────────────────────────

"petroven": {
  titulo: "El Petróleo Venezolano",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿De qué color es el petróleo que sale de la tierra?", ops: ["Azul","Rojo","Negro o café oscuro","Transparente"], r: 2 },
    { p: "¿Dónde se encuentra el petróleo?", ops: ["En las nubes","Debajo de la tierra o del mar, entre rocas","En los ríos","En la superficie de los volcanes"], r: 1 },
    { p: "¿Venezuela tiene una de las reservas de petróleo más grandes del mundo?", ops: ["No, es una de las más pequeñas","Sí, es uno de los países con más petróleo del mundo","Solo tiene gas natural","Solo en el mar"], r: 1 },
    { p: "¿Para qué se usa el petróleo?", ops: ["Solo para cocinar alimentos","Para fabricar gasolina, plásticos, medicamentos y muchos productos","Solo para hacer velas","Para regar las plantas"], r: 1 },
    { p: "¿Cómo se llama el proceso que separa las partes del petróleo en la refinería?", ops: ["La fotosíntesis","La destilación","La evaporación simple","La mezcla"], r: 1 },
    { p: "¿Cuál es el principal río cerca del cual se extrajo petróleo en Venezuela?", ops: ["El Amazonas","El Nilo","El Lago de Maracaibo y el río Orinoco","El Caroní"], r: 2 },
    { p: "¿El petróleo es un recurso renovable o no renovable?", ops: ["Renovable, se puede volver a hacer rápido","No renovable, tardó millones de años en formarse","Renovable cada 10 años","No renovable solo en invierno"], r: 1 },
    { p: "¿Qué problema ambiental puede causar el petróleo si se derrama?", ops: ["Mejora los océanos","Contamina el agua, el suelo y mata animales marinos","Ayuda a crecer las plantas","Produce lluvia"], r: 1 },
    { p: "¿Cómo se llama la empresa nacional del petróleo en Venezuela?", ops: ["PDVSA","PEMEX","Petrobras","ExxonMobil"], r: 0 },
    { p: "¿Por qué debemos buscar energías alternativas al petróleo?", ops: ["Porque el petróleo es muy barato","Porque el petróleo se agotará y contamina el ambiente","Porque el petróleo no sirve para nada","Porque no existe en Venezuela"], r: 1 },
  ]
},

"fuentener": {
  titulo: "Fuentes de Energía",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es una fuente de energía?", ops: ["Un tipo de comida","Todo lo que nos da energía para hacer trabajo o producir luz y calor","Un tipo de río","Solo la electricidad"], r: 1 },
    { p: "¿Cuáles son fuentes de energía renovables?", ops: ["El carbón y el petróleo","El Sol, el viento y el agua","Solo la gasolina","Solo el gas natural"], r: 1 },
    { p: "¿Cómo funciona la energía solar?", ops: ["Usando el agua de los ríos","Captando la luz del Sol con paneles solares y convirtiéndola en electricidad","Quemando petróleo","Usando el viento"], r: 1 },
    { p: "¿Cómo se obtiene la energía eólica?", ops: ["Del Sol","Del movimiento del viento a través de turbinas","Del calor de la Tierra","Del petróleo"], r: 1 },
    { p: "¿Qué es la energía hidráulica?", ops: ["Energía del Sol","Energía que se obtiene del movimiento del agua en ríos y cascadas","Energía del viento","Energía del petróleo"], r: 1 },
    { p: "¿Cuál de estas es una fuente de energía NO renovable?", ops: ["El Sol","El viento","El carbón y el petróleo","El agua de los ríos"], r: 2 },
    { p: "¿Por qué debemos ahorrar energía en casa?", ops: ["Para que haya más petróleo","Para reducir el gasto y cuidar el ambiente","Porque la energía no sirve","Porque es obligatorio siempre"], r: 1 },
    { p: "¿Qué podemos hacer en casa para ahorrar energía eléctrica?", ops: ["Dejar las luces encendidas toda la noche","Apagar las luces y aparatos que no usamos","Usar más aparatos eléctricos","Dejar el grifo del agua abierto"], r: 1 },
    { p: "La energía geotérmica viene de:", ops: ["El Sol","El viento","El calor del interior de la Tierra","El agua del mar"], r: 2 },
    { p: "¿Cuál es una ventaja de las energías renovables?", ops: ["Son muy contaminantes","No se agotan y son menos dañinas para el ambiente","Son más caras que el petróleo","Solo se usan en los países ricos"], r: 1 },
  ]
},

"maqsimp": {
  titulo: "Máquinas Simples",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Para qué sirven las máquinas simples?", ops: ["Para cocinar comida","Para hacer más fácil un trabajo usando menos fuerza","Para producir electricidad","Solo para jugar"], r: 1 },
    { p: "¿Cuál de estos es un ejemplo de palanca?", ops: ["Un tobogán","Un sube y baja del parque","Un espejo","Una regla"], r: 1 },
    { p: "¿Para qué sirve una polea?", ops: ["Para cortar objetos","Para levantar pesos pesados con menos esfuerzo usando una cuerda","Para medir temperaturas","Para mezclar líquidos"], r: 1 },
    { p: "¿Qué es un plano inclinado?", ops: ["Una superficie plana horizontal","Una superficie inclinada que permite subir objetos pesados con menos esfuerzo","Una palanca especial","Un tipo de rueda"], r: 1 },
    { p: "Una rampa para sillas de ruedas es un ejemplo de:", ops: ["Polea","Palanca","Plano inclinado","Rueda y eje"], r: 2 },
    { p: "¿Para qué sirve la rueda y el eje?", ops: ["Para cortar materiales","Para facilitar el movimiento y el transporte","Para medir el peso","Para levantar agua"], r: 1 },
    { p: "Las tijeras son un ejemplo de:", ops: ["Polea","Plano inclinado","Palanca de primer grado","Rueda y eje"], r: 2 },
    { p: "¿Cuál es la función de una cuña?", ops: ["Levantar objetos con cuerda","Separar o cortar materiales concentrando la fuerza en un punto","Mover objetos en círculo","Inclinar superficies"], r: 1 },
    { p: "Un tornillo es una máquina simple que funciona como:", ops: ["Una polea enrollada","Un plano inclinado enrollado alrededor de un cilindro","Una palanca recta","Una rueda sin eje"], r: 1 },
    { p: "¿Por qué usamos máquinas simples en la vida diaria?", ops: ["Porque son muy costosas","Porque nos facilitan el trabajo y reducen el esfuerzo necesario","Porque son obligatorias","Solo para uso industrial"], r: 1 },
  ]
},

// ──────────────────────────────────────────────────────────────
// BLOQUE 4 – LA TIERRA EN EL UNIVERSO
// ──────────────────────────────────────────────────────────────

"tierra": {
  titulo: "La Tierra",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué forma tiene la Tierra?", ops: ["Completamente plana","Esférica (como una pelota, aunque un poco achatada en los polos)","Cuadrada","Triangular"], r: 1 },
    { p: "¿Cuántas capas tiene la Tierra?", ops: ["1","2","3 principales: corteza, manto y núcleo","5"], r: 2 },
    { p: "¿En qué capa de la Tierra vivimos?", ops: ["En el manto","En el núcleo","En la corteza terrestre","En el centro"], r: 2 },
    { p: "¿Qué es el núcleo de la Tierra?", ops: ["La capa exterior donde vivimos","La parte más caliente y central de la Tierra","Una capa de agua","La parte más fría"], r: 1 },
    { p: "¿Qué porcentaje de la superficie terrestre está cubierto por agua?", ops: ["30%","50%","71%","90%"], r: 2 },
    { p: "¿Qué son los continentes?", ops: ["Grandes masas de agua","Las grandes masas de tierra que hay en la Tierra","Las montañas más altas","Los mares y océanos"], r: 1 },
    { p: "¿Cuántos continentes tiene la Tierra?", ops: ["4","5","6","7"], r: 3 },
    { p: "¿Qué es el campo magnético de la Tierra?", ops: ["Una capa de agua subterránea","Una fuerza invisible que actúa como imán y nos protege del Sol","Un tipo de viento fuerte","El calor del núcleo"], r: 1 },
    { p: "¿En qué continente está Venezuela?", ops: ["Europa","Asia","América del Sur","África"], r: 2 },
    { p: "¿Qué es la corteza terrestre?", ops: ["El núcleo de la Tierra","La capa más delgada y exterior donde están los continentes y el fondo del mar","El manto superior","La capa de lava"], r: 1 },
  ]
},

"atmosfera": {
  titulo: "La Atmósfera y el Clima",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es la atmósfera?", ops: ["El núcleo de la Tierra","La capa de gases que rodea la Tierra y nos protege","El agua de los océanos","Las montañas más altas"], r: 1 },
    { p: "¿Cuál es la capa de la atmósfera más cercana a nosotros?", ops: ["La estratosfera","La ionosfera","La troposfera","La mesosfera"], r: 2 },
    { p: "¿Cuál es la diferencia entre tiempo atmosférico y clima?", ops: ["Son exactamente lo mismo","El tiempo es cómo está el cielo hoy; el clima es cómo suele ser durante muchos años","El clima es de hoy; el tiempo es de muchos años","No tienen relación"], r: 1 },
    { p: "¿Qué instrumento mide la temperatura del aire?", ops: ["El barómetro","El anemómetro","El termómetro","El pluviómetro"], r: 2 },
    { p: "¿Qué instrumento mide la lluvia?", ops: ["El termómetro","El barómetro","El anemómetro","El pluviómetro"], r: 3 },
    { p: "¿Qué son las nubes?", ops: ["Pequeñas montañas en el cielo","Masas de vapor de agua condensado que flotan en el cielo","Gases venenosos","Polvo espacial"], r: 1 },
    { p: "¿Cómo se forma el arco iris?", ops: ["Con el calor del Sol solamente","Cuando la luz del Sol pasa por las gotas de agua y se separa en colores","Con el viento y la lluvia","Solo en los trópicos"], r: 1 },
    { p: "¿Qué es la presión atmosférica?", ops: ["El peso de las nubes","La fuerza que ejerce el aire sobre la superficie terrestre","El calor del Sol","La velocidad del viento"], r: 1 },
    { p: "¿Qué tipo de clima tiene Venezuela en general?", ops: ["Frío y seco","Templado con nieve","Tropical, cálido y húmedo","Polar y muy frío"], r: 2 },
    { p: "¿Qué son los vientos?", ops: ["Agua que cae del cielo","El movimiento del aire de un lugar a otro","Nubes que se mueven","El calor que sube del suelo"], r: 1 },
  ]
},

"movtie": {
  titulo: "Movimientos de la Tierra",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Cuáles son los dos movimientos principales de la Tierra?", ops: ["Saltar y rodar","Rotación y traslación","Subir y bajar","Girar y flotar"], r: 1 },
    { p: "¿Qué es el movimiento de rotación?", ops: ["El viaje de la Tierra alrededor del Sol","El giro de la Tierra sobre su propio eje","El movimiento de la Luna","El giro de los planetas entre sí"], r: 1 },
    { p: "¿Cuánto dura un día completo (una rotación de la Tierra)?", ops: ["12 horas","24 horas","365 días","7 días"], r: 1 },
    { p: "¿Qué produce el movimiento de rotación de la Tierra?", ops: ["Las estaciones del año","La alternancia del día y la noche","Los eclipses de Luna","Las mareas"], r: 1 },
    { p: "¿Qué es el movimiento de traslación?", ops: ["El giro de la Tierra sobre su eje","El viaje de la Tierra alrededor del Sol","El movimiento de las nubes","El giro de la Luna"], r: 1 },
    { p: "¿Cuánto dura la traslación de la Tierra alrededor del Sol?", ops: ["24 horas","1 mes","365 días aproximadamente (1 año)","7 días"], r: 2 },
    { p: "¿Qué producen los movimientos de traslación e inclinación del eje terrestre?", ops: ["El día y la noche","Las estaciones del año (primavera, verano, otoño, invierno)","Los eclipses solares","Las tormentas"], r: 1 },
    { p: "¿Cuántas estaciones hay en un año?", ops: ["2","3","4","6"], r: 2 },
    { p: "¿Por qué en Venezuela no se notan mucho las cuatro estaciones?", ops: ["Porque está muy lejos del Sol","Porque está cerca del Ecuador, donde la temperatura varía poco durante el año","Porque la Tierra no gira allí","Por sus montañas"], r: 1 },
    { p: "¿Qué es el eje terrestre?", ops: ["Una línea real de metal que atraviesa la Tierra","Una línea imaginaria que pasa por los polos, alrededor de la cual gira la Tierra","Un río muy largo","Una montaña en el polo"], r: 1 },
  ]
},

"luna": {
  titulo: "La Luna",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es la Luna?", ops: ["Una estrella que brilla de noche","El satélite natural de la Tierra","Un planeta pequeño","Una nube grande"], r: 1 },
    { p: "¿Cuánto tarda la Luna en dar una vuelta completa alrededor de la Tierra?", ops: ["24 horas","7 días","Aproximadamente 28-29 días (1 mes lunar)","1 año"], r: 2 },
    { p: "¿Cuántas fases principales tiene la Luna?", ops: ["2","3","4","7"], r: 2 },
    { p: "¿Cómo se llama la fase cuando vemos la Luna completamente iluminada?", ops: ["Luna nueva","Luna creciente","Luna llena","Luna menguante"], r: 2 },
    { p: "¿Cómo se llama la fase cuando no podemos ver la Luna?", ops: ["Luna llena","Luna creciente","Luna menguante","Luna nueva"], r: 3 },
    { p: "¿Produce la Luna luz propia?", ops: ["Sí, como el Sol","No, refleja la luz del Sol","Sí, pero solo de noche","Solo en Luna llena"], r: 1 },
    { p: "¿Qué es un eclipse de Luna?", ops: ["Cuando la Luna tapa al Sol","Cuando la Tierra se pone entre el Sol y la Luna, y la sombra cubre la Luna","Cuando la Luna desaparece","Cuando la Luna cambia de color permanentemente"], r: 1 },
    { p: "¿Hay atmósfera en la Luna?", ops: ["Sí, igual que en la Tierra","Sí, pero muy delgada","No tiene atmósfera, por eso no hay vida ni sonido","Solo hay oxígeno"], r: 2 },
    { p: "¿Qué influencia tiene la Luna sobre los océanos de la Tierra?", ops: ["Les da color azul","Produce las mareas con su fuerza gravitacional","Calienta el agua","No tiene ninguna influencia"], r: 1 },
    { p: "¿El ser humano ha llegado a la Luna?", ops: ["No, es imposible","Sí, por primera vez en 1969 con la misión Apolo 11","Solo en películas","Solo con robots, nunca personas"], r: 1 },
  ]
},

"sistemsol": {
  titulo: "El Sistema Solar",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué está en el centro del Sistema Solar?", ops: ["La Tierra","La Luna","El Sol","El planeta más grande"], r: 2 },
    { p: "¿Cuántos planetas tiene el Sistema Solar?", ops: ["7","8","9","10"], r: 1 },
    { p: "¿Cuál es el planeta más cercano al Sol?", ops: ["Venus","Marte","La Tierra","Mercurio"], r: 3 },
    { p: "¿Cuál es el planeta más grande del Sistema Solar?", ops: ["Saturno","Neptuno","Júpiter","Urano"], r: 2 },
    { p: "¿Cuál es el planeta conocido por sus hermosos anillos?", ops: ["Júpiter","Marte","Urano","Saturno"], r: 3 },
    { p: "¿En qué posición está la Tierra desde el Sol?", ops: ["Primera","Segunda","Tercera","Cuarta"], r: 2 },
    { p: "¿Qué es el Sol?", ops: ["Un planeta gigante","Una estrella que emite luz y calor","Un satélite natural","Una roca espacial"], r: 1 },
    { p: "¿Cuál de estos planetas es el planeta rojo?", ops: ["Venus","Júpiter","Marte","Neptuno"], r: 2 },
    { p: "¿Qué son los asteroides?", ops: ["Estrellas pequeñas","Planetas con anillos","Rocas y fragmentos que orbitan el Sol","Satélites de Júpiter"], r: 2 },
    { p: "¿Por qué la Tierra es especial entre los planetas del Sistema Solar?", ops: ["Es la más grande","Es la más cercana al Sol","Es el único planeta conocido con agua líquida y vida","Tiene los anillos más bonitos"], r: 2 },
  ]
},

}; // fin ENCUESTAS_CIENCIA3

if (typeof window !== 'undefined') {
  window.ENCUESTAS_CIENCIA3 = ENCUESTAS_CIENCIA3;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_CIENCIA3);
}
