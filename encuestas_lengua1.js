// ════════════════════════════════════════════════════════════════
//  encuestas_lengua1.js  –  Lengua Parte 1 (14 temas)
//  Lectura · Escritura · Gramática · Vocabulario
//  BiblioMara – UEP Instituto Mara
// ════════════════════════════════════════════════════════════════

const ENCUESTAS_LENGUA1 = {

// ──────────────────────────────────────────────────────────────
// BLOQUE 1 – LECTURA
// ──────────────────────────────────────────────────────────────

"comprec": {
  titulo: "Comprensión Lectora",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué significa 'comprender' un texto?", ops: ["Copiarlo exactamente","Entender su mensaje e ideas","Leerlo en voz alta","Contar las palabras"], r: 1 },
    { p: "¿Cuál es la idea principal de un párrafo?", ops: ["La idea más corta","La idea que se repite más","La idea más importante que resume el párrafo","La última oración"], r: 2 },
    { p: "Las ideas secundarias en un texto sirven para:", ops: ["Reemplazar la idea principal","Confundir al lector","Apoyar y ampliar la idea principal","Resumir el texto"], r: 2 },
    { p: "Cuando relees un texto difícil, usas la estrategia de:", ops: ["Lectura selectiva","Relectura","Lectura en voz alta","Skimming"], r: 1 },
    { p: "¿Qué es un texto informativo?", ops: ["Uno que cuenta una historia inventada","Uno que da información real sobre un tema","Uno que tiene personajes y diálogos","Uno escrito en rima"], r: 1 },
    { p: "Inferir en la lectura significa:", ops: ["Leer entre líneas y deducir lo que no está escrito directamente","Copiar frases del texto","Buscar palabras desconocidas","Subrayar el texto"], r: 0 },
    { p: "El propósito de un texto narrativo es principalmente:", ops: ["Explicar un tema científico","Convencer al lector","Contar una historia o suceso","Dar instrucciones"], r: 2 },
    { p: "¿Qué es el tema de un texto?", ops: ["El título del libro","El asunto principal del que trata","El nombre del autor","La longitud del texto"], r: 1 },
    { p: "Los conectores como 'porque', 'entonces' y 'por lo tanto' sirven para:", ops: ["Enumerar ideas","Indicar causa o consecuencia","Describir personajes","Iniciar el texto"], r: 1 },
    { p: "Para saber el significado de una palabra desconocida en un texto puedes:", ops: ["Ignorarla y seguir leyendo","Usar el contexto de las oraciones cercanas","Cambiarla por otra","Borrarla"], r: 1 },
  ]
},

"tipostex": {
  titulo: "Tipos de Texto",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Cuál de estos es un texto narrativo?", ops: ["Una receta de cocina","Un cuento","Un afiche publicitario","Una noticia científica"], r: 1 },
    { p: "El texto descriptivo tiene como función principal:", ops: ["Contar eventos en orden","Dar las características de algo o alguien","Convencer de una opinión","Dar instrucciones paso a paso"], r: 1 },
    { p: "Una carta formal se diferencia de una informal porque:", ops: ["Tiene más palabras","Usa lenguaje respetuoso y estructura fija","Está escrita a mano","Tiene ilustraciones"], r: 1 },
    { p: "El texto instructivo aparece en:", ops: ["Novelas y cuentos","Poemas y canciones","Recetas, manuales y reglamentos","Fábulas y leyendas"], r: 2 },
    { p: "¿Qué tipo de texto es una noticia periodística?", ops: ["Narrativo literario","Expositivo-informativo","Instructivo","Poético"], r: 1 },
    { p: "Los textos argumentativos buscan:", ops: ["Entretener con una historia","Enseñar a hacer algo","Convencer o persuadir al lector","Describir un lugar"], r: 2 },
    { p: "¿Qué elemento NO pertenece a un cuento?", ops: ["Personajes","Ingredientes","Narrador","Desenlace"], r: 1 },
    { p: "Una fábula siempre termina con:", ops: ["Un suspenso","Una moraleja o enseñanza","Un diálogo","Un título largo"], r: 1 },
    { p: "El diálogo en un texto narrativo se identifica porque:", ops: ["Está escrito en cursiva","Usa comillas o rayas de diálogo","Va en mayúsculas","Tiene números"], r: 1 },
    { p: "Un afiche o cartel tiene como propósito principal:", ops: ["Narrar una historia larga","Comunicar un mensaje de forma breve y llamativa","Enseñar gramática","Describir personajes"], r: 1 },
  ]
},

"estlect": {
  titulo: "Estrategias de Lectura",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "Antes de leer un texto, ¿qué estrategia debes usar?", ops: ["Leer solo el final","Observar título, imágenes y hacer predicciones","Copiar el texto completo","Leer solo los verbos"], r: 1 },
    { p: "Subrayar las ideas importantes durante la lectura es una estrategia de:", ops: ["Lectura previa","Lectura activa","Lectura veloz","Lectura en silencio"], r: 1 },
    { p: "El 'skimming' consiste en:", ops: ["Leer cada palabra lentamente","Echar un vistazo rápido para captar la idea general","Memorizar el texto","Leer de atrás hacia adelante"], r: 1 },
    { p: "Hacer un resumen después de leer sirve para:", ops: ["Reescribir el texto completo","Fijar las ideas más importantes en la memoria","Cambiar la historia","Ampliar el texto"], r: 1 },
    { p: "Las preguntas que te haces mientras lees son parte de la estrategia de:", ops: ["Copia textual","Lectura pasiva","Lectura interrogativa o activa","Dictado"], r: 2 },
    { p: "¿Qué es un mapa mental aplicado a la lectura?", ops: ["Un dibujo del lugar del texto","Un esquema visual que organiza las ideas del texto","Una lista de palabras difíciles","Un resumen en forma de carta"], r: 1 },
    { p: "Releer una parte confusa del texto es útil porque:", ops: ["Hace el texto más largo","Ayuda a aclarar dudas y mejorar la comprensión","Es obligatorio en todos los textos","Cambia el significado"], r: 1 },
    { p: "La predicción lectora consiste en:", ops: ["Adivinar aleatoriamente","Anticipar de qué puede tratar el texto antes de leerlo","Leer sin pensar","Copiar las conclusiones del libro"], r: 1 },
    { p: "Para identificar el vocabulario nuevo en un texto, lo mejor es:", ops: ["Ignorar las palabras difíciles","Buscar en el diccionario o deducir por el contexto","Pedir que te lo expliquen siempre","Saltarse esas partes"], r: 1 },
    { p: "Un organizador gráfico como el cuadro sinóptico ayuda a:", ops: ["Decorar el cuaderno","Organizar y jerarquizar la información del texto","Copiar el texto en otro orden","Hacer el texto más corto"], r: 1 },
  ]
},

// ──────────────────────────────────────────────────────────────
// BLOQUE 2 – ESCRITURA
// ──────────────────────────────────────────────────────────────

"parrafo": {
  titulo: "El Párrafo",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es un párrafo?", ops: ["Una sola oración muy larga","Un conjunto de oraciones relacionadas con una misma idea","Todo el texto escrito","Un diálogo entre personajes"], r: 1 },
    { p: "¿Cómo se identifica visualmente el inicio de un párrafo?", ops: ["Con una imagen","Con sangría o línea en blanco","Con mayúsculas en todas las palabras","Con un número"], r: 1 },
    { p: "La oración temática de un párrafo es:", ops: ["La última oración","La más corta","La que expresa la idea principal","La que tiene más adjetivos"], r: 2 },
    { p: "Las oraciones de desarrollo en un párrafo sirven para:", ops: ["Iniciar un nuevo tema","Explicar y ampliar la idea principal","Escribir el título","Cerrar el texto"], r: 1 },
    { p: "La oración de cierre de un párrafo cumple la función de:", ops: ["Presentar una idea nueva","Resumir o concluir la idea del párrafo","Repetir la oración temática exacta","Hacer una pregunta"], r: 1 },
    { p: "Un párrafo bien escrito debe tener:", ops: ["Solo una oración","Coherencia y unidad temática","Muchas ideas distintas","Solo descripciones"], r: 1 },
    { p: "¿Cuántas ideas principales debe tener un párrafo?", ops: ["Tres o cuatro","Ninguna","Una sola idea principal","Todas las que quepan"], r: 2 },
    { p: "La coherencia en un párrafo significa que:", ops: ["Las oraciones riman","Las ideas están relacionadas y tienen orden lógico","Hay muchos adjetivos","El párrafo es muy largo"], r: 1 },
    { p: "¿Qué son los conectores o palabras de enlace?", ops: ["Palabras que describen","Palabras que unen ideas dentro del párrafo","Palabras muy largas","Solo preposiciones"], r: 1 },
    { p: "Un párrafo descriptivo busca principalmente:", ops: ["Dar instrucciones","Narrar eventos en orden","Presentar las características de algo o alguien","Convencer al lector"], r: 2 },
  ]
},

"narracion": {
  titulo: "La Narración",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es un texto narrativo?", ops: ["El que explica cómo hacer algo","El que cuenta hechos o historias","El que describe un paisaje","El que da argumentos"], r: 1 },
    { p: "¿Cuáles son las tres partes de una narración?", ops: ["Título, desarrollo y final","Inicio, nudo y desenlace","Personajes, lugar y tiempo","Idea, argumento y conclusión"], r: 1 },
    { p: "El narrador es:", ops: ["El personaje principal","La voz que cuenta la historia","El autor del libro","El lector"], r: 1 },
    { p: "Cuando el narrador participa en la historia como personaje, se llama:", ops: ["Narrador omnisciente","Narrador testigo","Narrador protagonista","Narrador externo"], r: 2 },
    { p: "El nudo de una narración es:", ops: ["La presentación de los personajes","El problema o conflicto central de la historia","El final de la historia","El lugar donde ocurre"], r: 1 },
    { p: "Los conectores temporales como 'primero', 'luego', 'después' sirven para:", ops: ["Describir personajes","Dar el orden cronológico de los hechos","Expresar emociones","Hacer preguntas"], r: 1 },
    { p: "¿Qué es el desenlace de un cuento?", ops: ["El inicio de la historia","El conflicto principal","La solución o resolución de la historia","La presentación del escenario"], r: 2 },
    { p: "Los personajes principales de una narración son:", ops: ["Los que aparecen en la mayoría de los sucesos","Los que solo aparecen al final","Los que no hablan","Los animales de la historia"], r: 0 },
    { p: "El escenario en una narración incluye:", ops: ["Solo el tiempo","El lugar y el tiempo en que ocurre la historia","Solo los personajes","Los diálogos"], r: 1 },
    { p: "Para escribir un cuento original debes comenzar por:", ops: ["Escribir el final primero","Planificar personajes, lugar y conflicto antes de escribir","Copiar otro cuento","Escribir sin planificar"], r: 1 },
  ]
},

"descripcion": {
  titulo: "La Descripción",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "Describir significa:", ops: ["Contar eventos en orden","Dar las características detalladas de algo o alguien","Dar instrucciones","Argumentar una opinión"], r: 1 },
    { p: "Para describir una persona físicamente usas:", ops: ["Los conectores temporales","Adjetivos calificativos y los sentidos","Números y fechas","Verbos de acción"], r: 1 },
    { p: "Una descripción objetiva es la que:", ops: ["Incluye opiniones y emociones","Presenta datos y características sin valoraciones personales","Es muy corta","Está escrita en rima"], r: 1 },
    { p: "Una descripción subjetiva incluye:", ops: ["Solo medidas exactas","Las impresiones y sentimientos del que describe","Solo colores","Datos científicos"], r: 1 },
    { p: "Describir un lugar de lo más cercano a lo más lejano es un orden:", ops: ["Cronológico","Espacial","Alfabético","Aleatorio"], r: 1 },
    { p: "¿Qué sentidos puedes usar para describir un objeto?", ops: ["Solo la vista","Vista, olfato, tacto, gusto y oído","Solo el olfato","Solo el tacto"], r: 1 },
    { p: "El retrato literario es la descripción de:", ops: ["Un paisaje natural","Una persona, incluyendo físico y personalidad","Un objeto cotidiano","Un animal salvaje"], r: 1 },
    { p: "Los adjetivos en una descripción sirven para:", ops: ["Indicar acciones","Precisar y enriquecer las características del objeto descrito","Unir oraciones","Indicar tiempo"], r: 1 },
    { p: "Cuando describes el carácter de una persona haces una descripción:", ops: ["Física o prosopografía","Psicológica o etopeya","Espacial","Objetiva numérica"], r: 1 },
    { p: "¿Qué herramienta lingüística es más útil en un texto descriptivo?", ops: ["Verbos de movimiento","Adjetivos calificativos variados","Conectores temporales","Signos de exclamación"], r: 1 },
  ]
},

"redaccion": {
  titulo: "Redacción y Composición",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "La planificación antes de escribir sirve para:", ops: ["Perder tiempo","Organizar las ideas antes de redactar","Copiar lo que otros escriben","Evitar usar el diccionario"], r: 1 },
    { p: "¿Qué es un borrador?", ops: ["La versión final del texto","Una versión preliminar que se puede corregir y mejorar","Un tipo de texto informativo","Un cuadernillo de ortografía"], r: 1 },
    { p: "La revisión de un texto escrito incluye:", ops: ["Solo contar las palabras","Verificar ortografía, gramática, coherencia y claridad","Agregar dibujos","Escribir más rápido"], r: 1 },
    { p: "La cohesión en un texto se logra usando:", ops: ["Muchos signos de exclamación","Conectores y pronombres que relacionan las ideas","Solo verbos en pasado","Párrafos muy cortos"], r: 1 },
    { p: "¿Qué debe tener un texto bien redactado?", ops: ["Muchas palabras difíciles","Claridad, coherencia y corrección lingüística","Muchas páginas","Solo oraciones cortas"], r: 1 },
    { p: "El propósito comunicativo de un texto es:", ops: ["Su longitud","La intención del autor: informar, narrar, persuadir, etc.","El número de párrafos","El tamaño de la letra"], r: 1 },
    { p: "Para evitar repetir la misma palabra en un texto puedes usar:", ops: ["Inventar palabras nuevas","Sinónimos y pronombres","Dejar el espacio en blanco","Más signos de puntuación"], r: 1 },
    { p: "La introducción de un texto sirve para:", ops: ["Cerrar el tema","Presentar el tema y captar la atención del lector","Dar ejemplos detallados","Resumir las conclusiones"], r: 1 },
    { p: "El desarrollo de un texto es donde:", ops: ["Se presenta el tema brevemente","Se explican y amplían las ideas centrales","Se concluye","Se escribe el título"], r: 1 },
    { p: "La conclusión de un texto sirve para:", ops: ["Introducir un tema nuevo","Resumir las ideas y cerrar el texto","Copiar la introducción","Agregar más ejemplos"], r: 1 },
  ]
},

// ──────────────────────────────────────────────────────────────
// BLOQUE 3 – GRAMÁTICA
// ──────────────────────────────────────────────────────────────

"sustantivo": {
  titulo: "El Sustantivo",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es un sustantivo?", ops: ["Una palabra que expresa acción","Una palabra que nombra personas, animales, cosas o lugares","Una palabra que describe","Una palabra de enlace"], r: 1 },
    { p: "¿Cuál de estas palabras es un sustantivo propio?", ops: ["ciudad","perro","Venezuela","casa"], r: 2 },
    { p: "Los sustantivos comunes se escriben:", ops: ["Siempre con mayúscula","Con minúscula (excepto al inicio de oración)","Solo en plural","Siempre subrayados"], r: 1 },
    { p: "¿Cuál es el plural de 'lápiz'?", ops: ["lápizes","lápices","lápizs","lápicess"], r: 1 },
    { p: "Un sustantivo colectivo nombra:", ops: ["Una sola persona","Un conjunto o grupo de seres de la misma especie","Un lugar geográfico","Una emoción"], r: 1 },
    { p: "¿Cuál es el sustantivo colectivo de 'árboles'?", ops: ["Arboleda","Árboles juntos","Bosquecillo","Naturaleza"], r: 0 },
    { p: "Los sustantivos abstractos nombran:", ops: ["Objetos que puedes tocar","Ideas, sentimientos o cualidades que no se pueden tocar","Solo animales","Países y ciudades"], r: 1 },
    { p: "¿Cuál de estos es un sustantivo abstracto?", ops: ["Mesa","Felicidad","Perro","Río"], r: 1 },
    { p: "El género de los sustantivos puede ser:", ops: ["Solo masculino","Masculino o femenino","Neutro únicamente","Solo femenino"], r: 1 },
    { p: "¿Cuál es el femenino de 'actor'?", ops: ["actore","actora","actriz","actrice"], r: 2 },
  ]
},

"verbo": {
  titulo: "El Verbo",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué expresa un verbo?", ops: ["Una cualidad","Una acción, estado o proceso","Un nombre","Un lugar"], r: 1 },
    { p: "El infinitivo de los verbos en español termina en:", ops: ["-ando, -iendo","-ar, -er, -ir","-ado, -ido","-aba, -ía"], r: 1 },
    { p: "¿En qué tiempo verbal está: 'Los niños jugaron en el parque'?", ops: ["Presente","Futuro","Pasado (pretérito)","Condicional"], r: 2 },
    { p: "¿Cuál es el verbo en la oración 'María estudia matemáticas'?", ops: ["María","estudia","matemáticas","una"], r: 1 },
    { p: "La conjugación verbal cambia según:", ops: ["Solo el tiempo","La persona, el número y el tiempo","Solo el número","Solo la persona"], r: 1 },
    { p: "¿En qué persona está el verbo 'comemos'?", ops: ["Primera persona singular","Segunda persona plural","Primera persona plural","Tercera persona singular"], r: 2 },
    { p: "Los verbos regulares son los que:", ops: ["Cambian la raíz al conjugarse","Mantienen la misma raíz en toda la conjugación","No se pueden conjugar","Solo se usan en presente"], r: 1 },
    { p: "¿Cuál de estos es un verbo irregular?", ops: ["Cantar","Correr","Ser","Saltar"], r: 2 },
    { p: "El futuro simple de 'escribir' en primera persona singular es:", ops: ["escribía","escribiré","escribo","escribí"], r: 1 },
    { p: "Un verbo copulativo como 'ser' o 'estar' sirve para:", ops: ["Expresar movimiento","Unir el sujeto con sus características","Indicar lugar","Narrar acciones violentas"], r: 1 },
  ]
},

"adjetivo": {
  titulo: "Adjetivo y Artículo",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué hace un adjetivo calificativo?", ops: ["Sustituye al sustantivo","Expresa una cualidad o característica del sustantivo","Une oraciones","Indica acciones"], r: 1 },
    { p: "¿Cuál es el adjetivo en 'La flor amarilla huele bien'?", ops: ["La","flor","amarilla","huele"], r: 2 },
    { p: "Los artículos definidos en español son:", ops: ["un, una, unos, unas","el, la, los, las","mi, tu, su","este, ese, aquel"], r: 1 },
    { p: "Los artículos indefinidos son:", ops: ["el, la, los, las","un, una, unos, unas","al, del","lo, le, les"], r: 1 },
    { p: "El adjetivo debe concordar con el sustantivo en:", ops: ["Solo género","Solo número","Género y número","Solo persona"], r: 2 },
    { p: "¿Cuál es el femenino plural de 'bonito'?", ops: ["bonitos","bonita","bonitas","bonitaes"], r: 2 },
    { p: "Los adjetivos demostrativos como 'este', 'ese', 'aquel' indican:", ops: ["Cualidades del objeto","La distancia o cercanía del objeto al hablante","Posesión","Cantidad"], r: 1 },
    { p: "¿Cuál es un adjetivo posesivo?", ops: ["Grande","Azul","Mi","Tres"], r: 2 },
    { p: "Los adjetivos numerales indican:", ops: ["Color","Cantidad o lugar en una serie","Tamaño","Forma"], r: 1 },
    { p: "En la oración 'Tengo tres libros nuevos', los adjetivos son:", ops: ["Tengo y libros","Tres y nuevos","Solo nuevos","Solo tres"], r: 1 },
  ]
},

"pronombre": {
  titulo: "El Pronombre",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Para qué sirve el pronombre?", ops: ["Para describir personas","Para sustituir o referirse al sustantivo sin repetirlo","Para indicar acciones","Para unir oraciones"], r: 1 },
    { p: "¿Cuál de estos es un pronombre personal?", ops: ["Casa","Ellos","Correr","Grande"], r: 1 },
    { p: "Los pronombres personales de primera persona son:", ops: ["él, ella, ellos","yo, nosotros","tú, vosotros","se, me, te"], r: 1 },
    { p: "En la oración 'Ella trajo los libros', ¿a qué sustituye 'ella'?", ops: ["A los libros","A una persona femenina mencionada antes","Al verbo","A nada"], r: 1 },
    { p: "¿Cuál es el pronombre personal de segunda persona singular?", ops: ["yo","tú","él","nosotros"], r: 1 },
    { p: "Los pronombres demostrativos como 'este', 'ese', 'aquel' indican:", ops: ["Posesión","Distancia respecto al hablante","Solo género","Acciones"], r: 1 },
    { p: "Los pronombres posesivos como 'mío', 'tuyo', 'suyo' indican:", ops: ["Lugar","A quién pertenece algo","Tiempo","Cantidad"], r: 1 },
    { p: "¿Qué pronombre usas para referirte a ti mismo?", ops: ["Él","Usted","Yo","Nosotros"], r: 2 },
    { p: "En 'Juan y Pedro llegaron tarde. Ellos se disculparon.', el pronombre 'Ellos' sustituye a:", ops: ["Llegaron tarde","Juan y Pedro","Se disculparon","El maestro"], r: 1 },
    { p: "Los pronombres indefinidos como 'alguien', 'nadie', 'algo' se refieren a:", ops: ["Personas o cosas concretas y conocidas","Personas o cosas de manera vaga o imprecisa","Solo personas","Solo cosas"], r: 1 },
  ]
},

// ──────────────────────────────────────────────────────────────
// BLOQUE 5 – VOCABULARIO
// ──────────────────────────────────────────────────────────────

"sinoant": {
  titulo: "Sinónimos y Antónimos",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "Los sinónimos son palabras que:", ops: ["Tienen significados opuestos","Tienen significados iguales o muy parecidos","Suenan igual pero se escriben diferente","No tienen relación"], r: 1 },
    { p: "¿Cuál es un sinónimo de 'feliz'?", ops: ["Triste","Contento","Enojado","Cansado"], r: 1 },
    { p: "Los antónimos son palabras que:", ops: ["Tienen el mismo significado","Tienen significados contrarios u opuestos","Suenan igual","Son del mismo campo semántico"], r: 1 },
    { p: "¿Cuál es el antónimo de 'frío'?", ops: ["Helado","Fresco","Caliente","Tibio"], r: 2 },
    { p: "¿Cuál es un sinónimo de 'casa'?", ops: ["Escuela","Hogar","Tienda","Parque"], r: 1 },
    { p: "¿Cuál es el antónimo de 'rápido'?", ops: ["Veloz","Ágil","Lento","Activo"], r: 2 },
    { p: "Los sinónimos enriquecen la escritura porque:", ops: ["Hacen el texto más difícil","Evitan la repetición de palabras","Son palabras inventadas","Cambian el significado del texto"], r: 1 },
    { p: "¿Cuál es un sinónimo de 'comenzar'?", ops: ["Terminar","Pausar","Iniciar","Detener"], r: 2 },
    { p: "¿Cuál es el antónimo de 'alegría'?", ops: ["Júbilo","Gozo","Tristeza","Entusiasmo"], r: 2 },
    { p: "Las palabras 'oscuro' y 'claro' son:", ops: ["Sinónimos","Homófonos","Antónimos","Palabras sin relación"], r: 2 },
  ]
},

"familpal": {
  titulo: "Familias de Palabras",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "Una familia de palabras está formada por:", ops: ["Palabras que riman","Palabras con la misma raíz o lexema","Palabras del mismo largo","Palabras que empiezan igual"], r: 1 },
    { p: "¿Cuál de estas palabras NO pertenece a la familia de 'mar'?", ops: ["Marino","Mareas","Marítimo","Marco"], r: 3 },
    { p: "La raíz o lexema de las palabras de una familia es:", ops: ["El sufijo que se agrega","La parte común e invariable que comparten","La primera letra","El número de sílabas"], r: 1 },
    { p: "¿A qué familia de palabras pertenecen 'libro', 'librería', 'librero', 'libreto'?", ops: ["Familia de 'leer'","Familia de 'libro'","Familia de 'letra'","Familia de 'libre'"], r: 1 },
    { p: "Los prefijos son partículas que se colocan:", ops: ["Al final de la raíz","Al inicio de la raíz para modificar su significado","En el medio de la palabra","Son lo mismo que la raíz"], r: 1 },
    { p: "¿Qué significa el prefijo 'des-' en palabras como 'desorden'?", ops: ["Mucho","Negación o privación","Repetición","Pequeño"], r: 1 },
    { p: "Los sufijos se añaden:", ops: ["Antes de la raíz","Después de la raíz para formar nuevas palabras","En lugar de la raíz","Solo a los verbos"], r: 1 },
    { p: "¿Cuál es la familia de palabras de 'pan'?", ops: ["Pantalón, pantalla, panorama","Panadero, panadería, panecillo","Pandilla, pantano, pantera","Pana, pánico, pañuelo"], r: 1 },
    { p: "Las palabras derivadas se forman:", ops: ["Uniendo dos palabras independientes","Añadiendo prefijos o sufijos a una raíz","Inventando letras nuevas","Cambiando el orden de las letras"], r: 1 },
    { p: "Las palabras compuestas se forman:", ops: ["Con un prefijo solamente","Uniendo dos palabras independientes","Usando solo sufijos","Cambiando la raíz"], r: 1 },
  ]
}

}; // fin ENCUESTAS_LENGUA1

// ── Registro de encuestas (funciones compartidas con encuestas_numeros.js) ──
if (typeof getEncuestasLog === 'undefined') {
  window.getEncuestasLog     = function(){ try{return JSON.parse(localStorage.getItem('biblioEncuestas')||'{}');}catch(e){return{};} };
  window.saveEncuestasLog    = function(log){ try{localStorage.setItem('biblioEncuestas',JSON.stringify(log));}catch(e){} };
  window.encuestaCompletada  = function(id){ return !!getEncuestasLog()[id]; };
  window.marcarEncuesta      = function(id,pts){ var l=getEncuestasLog(); l[id]={pts:pts,fecha:new Date().toISOString()}; saveEncuestasLog(l); };
  window.sumarPuntosEncuesta = function(pts){ if(typeof window.actualizarPuntos==='function') return window.actualizarPuntos(pts); try{var r=localStorage.getItem('biblioSesion'),d=r?JSON.parse(r):{};d.puntos=(d.puntos||0)+pts;localStorage.setItem('biblioSesion',JSON.stringify(d));return d.puntos;}catch(e){return 0;} };
}

// ── Exportar a ENCUESTAS_ALL ─────────────────────────────────────────────────
if (typeof window !== 'undefined') {
  window.ENCUESTAS_LENGUA1 = ENCUESTAS_LENGUA1;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_LENGUA1);
}
