// ════════════════════════════════════════════════════════════════
//  encuestas_ciencia1.js  –  Ciencias Naturales Parte 1 (8 temas · 80 preguntas)
//  Bloque 1: Seres Vivos (6 temas) + Bloque 2: Agua y Aire
//  BiblioMara – UEP Instituto Mara
// ════════════════════════════════════════════════════════════════

const ENCUESTAS_CIENCIA1 = {

// ──────────────────────────────────────────────────────────────
// BLOQUE 1 – SERES VIVOS
// ──────────────────────────────────────────────────────────────

"cuerpo": {
  titulo: "El Cuerpo Humano",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Cuántos sistemas principales tiene el cuerpo humano?", ops: ["3","5","11","20"], r: 2 },
    { p: "¿Cuál es la función principal del sistema digestivo?", ops: ["Transportar oxígeno","Transformar los alimentos en nutrientes","Proteger el cuerpo","Coordinar los movimientos"], r: 1 },
    { p: "¿Qué órgano bombea la sangre a todo el cuerpo?", ops: ["El pulmón","El riñón","El corazón","El hígado"], r: 2 },
    { p: "¿Cuál es la función del sistema respiratorio?", ops: ["Digerir los alimentos","Tomar oxígeno y eliminar dióxido de carbono","Filtrar la sangre","Producir hormonas"], r: 1 },
    { p: "Los huesos forman parte del sistema:", ops: ["Muscular","Nervioso","Óseo o esquelético","Circulatorio"], r: 2 },
    { p: "¿Qué sistema controla y coordina todas las funciones del cuerpo?", ops: ["Sistema digestivo","Sistema nervioso","Sistema circulatorio","Sistema muscular"], r: 1 },
    { p: "¿Cuál es el órgano más grande del cuerpo humano?", ops: ["El hígado","El cerebro","La piel","El intestino"], r: 2 },
    { p: "Los riñones forman parte del sistema:", ops: ["Digestivo","Respiratorio","Excretor o urinario","Circulatorio"], r: 2 },
    { p: "¿Qué función cumplen los músculos?", ops: ["Filtrar toxinas","Producir sangre","Permitir el movimiento del cuerpo","Transportar oxígeno"], r: 2 },
    { p: "El cerebro es el órgano principal del sistema:", ops: ["Circulatorio","Nervioso","Óseo","Digestivo"], r: 1 },
  ]
},

"sentidos": {
  titulo: "Los Cinco Sentidos",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Cuáles son los cinco sentidos?", ops: ["Vista, oído, habla, gusto, tacto","Vista, oído, olfato, gusto, tacto","Vista, pensamiento, olfato, gusto, tacto","Vista, oído, olfato, memoria, tacto"], r: 1 },
    { p: "¿Qué órgano corresponde al sentido de la vista?", ops: ["La nariz","El oído","Los ojos","La lengua"], r: 2 },
    { p: "El sentido del olfato nos permite:", ops: ["Sentir texturas","Escuchar sonidos","Detectar olores","Ver colores"], r: 2 },
    { p: "¿Qué órgano usamos para el sentido del gusto?", ops: ["La nariz","La lengua","Los ojos","La piel"], r: 1 },
    { p: "¿Qué sentido nos permite detectar sonidos?", ops: ["El olfato","El tacto","La vista","El oído"], r: 3 },
    { p: "La piel es el órgano del sentido del:", ops: ["Gusto","Olfato","Tacto","Oído"], r: 2 },
    { p: "¿Para qué sirven las papilas gustativas?", ops: ["Para oír sonidos","Para detectar sabores en la lengua","Para ver la luz","Para sentir temperatura"], r: 1 },
    { p: "¿Qué parte del ojo controla la cantidad de luz que entra?", ops: ["La cornea","La retina","La pupila","El nervio óptico"], r: 2 },
    { p: "¿Qué sentido nos ayuda a detectar el peligro a través del dolor?", ops: ["La vista","El oído","El tacto","El olfato"], r: 2 },
    { p: "Los receptores sensoriales envían información al:", ops: ["Estómago","Cerebro","Corazón","Hígado"], r: 1 },
  ]
},

"plantas": {
  titulo: "Las Plantas",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Cuáles son las partes principales de una planta con flor?", ops: ["Tallo, hoja, fruto","Raíz, tallo, hojas, flor y fruto","Raíz, corteza y semilla","Tallo, semilla y agua"], r: 1 },
    { p: "¿Cuál es la función de la raíz?", ops: ["Producir flores","Realizar la fotosíntesis","Absorber agua y nutrientes del suelo","Transportar semillas"], r: 2 },
    { p: "La fotosíntesis es el proceso por el cual las plantas:", ops: ["Absorben agua","Producen su propio alimento usando luz solar","Liberan dióxido de carbono","Se reproducen"], r: 1 },
    { p: "¿Qué gas producen las plantas durante la fotosíntesis?", ops: ["Dióxido de carbono","Nitrógeno","Oxígeno","Vapor de agua"], r: 2 },
    { p: "¿Qué parte de la planta transporta el agua y los nutrientes?", ops: ["La flor","El tallo","La raíz","El fruto"], r: 1 },
    { p: "Las plantas se clasifican principalmente en:", ops: ["Animales y minerales","Con flores y sin flores","Verdes y amarillas","Grandes y pequeñas"], r: 1 },
    { p: "¿Qué es la clorofila?", ops: ["Una semilla especial","El pigmento verde que permite la fotosíntesis","Un tipo de raíz","Una flor sin pétalos"], r: 1 },
    { p: "La función de la flor en una planta es:", ops: ["Absorber agua","Producir oxígeno directamente","Participar en la reproducción","Sostener a la planta"], r: 2 },
    { p: "¿Qué contiene la semilla?", ops: ["Solo agua","El embrión de una nueva planta","Clorofila","Raíces adultas"], r: 1 },
    { p: "Las plantas que no tienen flores se reproducen por:", ops: ["Semillas con pétalos","Esporas, como los helechos y musgos","Solo por agua","Frutos maduros"], r: 1 },
  ]
},

"animales": {
  titulo: "Los Animales",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "Los animales vertebrados son los que:", ops: ["No tienen columna vertebral","Tienen columna vertebral","Solo viven en el agua","No tienen extremidades"], r: 1 },
    { p: "¿Cuáles son los cinco grupos de vertebrados?", ops: ["Insectos, arañas, cangrejos, gusanos, caracoles","Peces, anfibios, reptiles, aves y mamíferos","Peces, insectos, aves, reptiles, mamíferos","Mamíferos, aves, arañas, peces, gusanos"], r: 1 },
    { p: "¿A qué grupo vertebrado pertenece la rana?", ops: ["Reptil","Pez","Anfibio","Mamífero"], r: 2 },
    { p: "Los mamíferos se caracterizan por:", ops: ["Poner huevos y tener escamas","Alimentar a sus crías con leche materna","Tener sangre fría","Vivir solo en el agua"], r: 1 },
    { p: "¿Cuál de estos animales es un invertebrado?", ops: ["El perro","La serpiente","El pulpo","El águila"], r: 2 },
    { p: "Las aves se distinguen por tener:", ops: ["Escamas y aletas","Plumas y pico","Piel húmeda","Pelo y pezuñas"], r: 1 },
    { p: "¿Qué es un hábitat?", ops: ["El alimento de un animal","El lugar natural donde vive un animal","La forma de reproducirse","El nombre científico"], r: 1 },
    { p: "Los insectos son invertebrados que tienen:", ops: ["4 patas y 1 par de alas","6 patas y el cuerpo dividido en 3 partes","8 patas y cuerpo blando","10 patas y caparazón"], r: 1 },
    { p: "Los animales carnívoros se alimentan de:", ops: ["Solo plantas","Otros animales","Plantas y animales","Solo frutas"], r: 1 },
    { p: "¿Cómo se llaman los animales que se alimentan tanto de plantas como de animales?", ops: ["Herbívoros","Carnívoros","Omnívoros","Detritívoros"], r: 2 },
  ]
},

"ecosist": {
  titulo: "Ecosistemas",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es un ecosistema?", ops: ["Un tipo de animal","El conjunto de seres vivos y el ambiente en que viven","Solo los animales de una región","Una planta de gran tamaño"], r: 1 },
    { p: "¿Qué es una cadena alimentaria?", ops: ["Una colección de recetas","La secuencia en que los seres vivos se alimentan unos de otros","Una lista de animales","El ciclo del agua"], r: 1 },
    { p: "En una cadena alimentaria, los productores son:", ops: ["Los animales que cazan","Las plantas, que producen su propio alimento","Los descomponedores","Los animales más grandes"], r: 1 },
    { p: "¿Qué son los consumidores en una cadena alimentaria?", ops: ["Las plantas","Los organismos que se alimentan de otros seres vivos","Los minerales del suelo","Las nubes"], r: 1 },
    { p: "Los descomponedores como los hongos y bacterias:", ops: ["Producen oxígeno","Descomponen materia orgánica y devuelven nutrientes al suelo","Cazan animales","Realizan fotosíntesis"], r: 1 },
    { p: "¿Cuál de estos es un ecosistema?", ops: ["Una piedra","Un bosque tropical","Un libro de ciencias","Una mesa"], r: 1 },
    { p: "La biodiversidad se refiere a:", ops: ["Solo la cantidad de árboles","La variedad de seres vivos en un ecosistema","Solo los animales en peligro","El número de ríos"], r: 1 },
    { p: "¿Qué ocurre si desaparece un eslabón de la cadena alimentaria?", ops: ["Nada cambia","Se afecta el equilibrio de todo el ecosistema","Solo cambia el clima","Los productores aumentan indefinidamente"], r: 1 },
    { p: "¿Qué tipo de ecosistema es el Amazonas venezolano?", ops: ["Desierto","Ecosistema marino","Selva tropical","Tundra"], r: 2 },
    { p: "¿Qué relación existe entre el zorro y el conejo si el zorro caza al conejo?", ops: ["Mutualismo","Parasitismo","Depredación","Comensalismo"], r: 2 },
  ]
},

"reprod": {
  titulo: "Reproducción de Seres Vivos",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Por qué es importante la reproducción para los seres vivos?", ops: ["Para crecer más rápido","Para garantizar la continuidad de la especie","Para alimentarse mejor","Para moverse más lejos"], r: 1 },
    { p: "La reproducción sexual se caracteriza por:", ops: ["No necesitar dos organismos","La unión de células reproductoras de dos organismos","Producir solo una cría","Ocurrir solo en plantas"], r: 1 },
    { p: "La reproducción asexual se caracteriza por:", ops: ["Necesitar dos organismos","Producir un nuevo ser a partir de uno solo","Siempre producir huevos","Ocurrir solo en animales"], r: 1 },
    { p: "¿Cuál de estos es un ejemplo de reproducción asexual?", ops: ["La reproducción de los humanos","La gemación de las levaduras","La fecundación de los peces","El cortejo de las aves"], r: 1 },
    { p: "Las plantas con flores se reproducen principalmente a través de:", ops: ["Esporas","Semillas formadas tras la polinización","Fragmentos de hojas","El viento solamente"], r: 1 },
    { p: "¿Qué es la polinización?", ops: ["El proceso de regar las plantas","La transferencia de polen entre flores para la fecundación","La caída de las hojas","El crecimiento de la raíz"], r: 1 },
    { p: "Los animales ovíparos son los que:", ops: ["Dan a luz crías vivas","Se reproducen asexualmente","Se reproducen poniendo huevos","No tienen crías"], r: 2 },
    { p: "¿Cuál de estos animales es vivíparo?", ops: ["La gallina","La tortuga","La serpiente","La vaca"], r: 3 },
    { p: "Los helechos y musgos se reproducen por medio de:", ops: ["Semillas","Flores","Esporas","Frutos"], r: 2 },
    { p: "¿Qué es la metamorfosis?", ops: ["Un tipo de reproducción asexual","La transformación de un ser vivo durante su desarrollo, como la rana","El proceso de fotosíntesis","La forma de alimentarse"], r: 1 },
  ]
},

// ──────────────────────────────────────────────────────────────
// BLOQUE 2 – EL AMBIENTE (primeros 2 temas)
// ──────────────────────────────────────────────────────────────

"agua": {
  titulo: "El Agua",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿En qué estados puede encontrarse el agua en la naturaleza?", ops: ["Solo líquido y sólido","Líquido, sólido y gaseoso","Solo líquido","Solo gaseoso y sólido"], r: 1 },
    { p: "¿Cómo se llama el proceso por el cual el agua líquida pasa a vapor?", ops: ["Condensación","Solidificación","Evaporación","Precipitación"], r: 2 },
    { p: "¿Cómo se llama el proceso por el cual el vapor de agua se convierte en agua líquida?", ops: ["Evaporación","Condensación","Fusión","Infiltración"], r: 1 },
    { p: "¿Cuál es la cobertura aproximada de agua en la superficie terrestre?", ops: ["30%","50%","71%","90%"], r: 2 },
    { p: "¿Qué porcentaje del agua de la Tierra es agua dulce disponible?", ops: ["Menos del 3%","50%","71%","25%"], r: 0 },
    { p: "¿Cuáles son las etapas del ciclo del agua?", ops: ["Evaporación, condensación, precipitación e infiltración","Solo lluvia y evaporación","Congelación y fusión únicamente","Filtración y ebullición"], r: 0 },
    { p: "¿Qué es la precipitación en el ciclo del agua?", ops: ["El agua que se evapora","La caída del agua desde las nubes (lluvia, nieve, granizo)","El agua que se filtra en el suelo","La formación de nubes"], r: 1 },
    { p: "¿Cuál de estas propiedades tiene el agua pura?", ops: ["Es de color azul","Es incolora, inodora e insípida","Tiene sabor dulce","Siempre es caliente"], r: 1 },
    { p: "¿Por qué es importante cuidar el agua?", ops: ["Porque es infinita","Porque es un recurso escaso vital para todos los seres vivos","Solo sirve para beber","Porque cuesta mucho dinero"], r: 1 },
    { p: "¿Qué es la infiltración del agua?", ops: ["La evaporación del mar","El agua que penetra en el suelo y forma aguas subterráneas","La formación de nubes","La lluvia que cae en el océano"], r: 1 },
  ]
},

"aire": {
  titulo: "El Aire",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿De qué está compuesto principalmente el aire?", ops: ["100% oxígeno","78% nitrógeno, 21% oxígeno y otros gases","50% oxígeno y 50% dióxido de carbono","Solo dióxido de carbono"], r: 1 },
    { p: "¿Cuál es el gas más abundante en el aire?", ops: ["Oxígeno","Dióxido de carbono","Nitrógeno","Argón"], r: 2 },
    { p: "¿Para qué necesitan los seres vivos el oxígeno del aire?", ops: ["Para hacer fotosíntesis únicamente","Para respirar y obtener energía","Solo para moverse","Para producir lluvia"], r: 1 },
    { p: "¿Qué capa de la atmósfera nos protege de los rayos ultravioleta del Sol?", ops: ["La troposfera","La capa de ozono","La estratosfera baja","La ionosfera"], r: 1 },
    { p: "¿Qué es la contaminación del aire?", ops: ["La lluvia que cae","La presencia de sustancias dañinas en el aire","El viento fuerte","La formación de nubes"], r: 1 },
    { p: "¿Cuál de estas actividades humanas contamina el aire?", ops: ["Plantar árboles","La quema de combustibles fósiles","Reciclar basura","Usar energía solar"], r: 1 },
    { p: "El viento se produce cuando:", ops: ["El agua se evapora","El aire caliente sube y el aire frío ocupa su lugar","Llueve intensamente","El suelo se calienta uniformemente"], r: 1 },
    { p: "¿Qué función cumple el aire en el ciclo del agua?", ops: ["Filtra el agua","Transporta el vapor de agua que forma las nubes","Enfría directamente los ríos","Produce precipitación sin nubes"], r: 1 },
    { p: "¿Cuál es una consecuencia de la contaminación del aire para la salud?", ops: ["Mejora la respiración","Enfermedades respiratorias como el asma","Hace el agua más limpia","No tiene efectos en la salud"], r: 1 },
    { p: "¿Qué podemos hacer para reducir la contaminación del aire?", ops: ["Quemar más basura","Usar más vehículos a gasolina","Usar transporte público, bicicleta y energías renovables","Talar más árboles"], r: 2 },
  ]
},

}; // fin ENCUESTAS_CIENCIA1

if (typeof window !== 'undefined') {
  window.ENCUESTAS_CIENCIA1 = ENCUESTAS_CIENCIA1;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_CIENCIA1);
}
