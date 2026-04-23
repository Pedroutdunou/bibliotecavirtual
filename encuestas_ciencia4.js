// ════════════════════════════════════════════════════════════════
//  encuestas_ciencia4.js  –  Ciencias Naturales Parte 4 (8 temas · 80 preguntas)
//  Bloque 5: higiene, alimenta, enfermed, primauxil, huerto
//  Bloque 6: metcien, exper, tecnol
//  BiblioMara – UEP Instituto Mara  |  Nivel: 4° grado primaria
// ════════════════════════════════════════════════════════════════

const ENCUESTAS_CIENCIA4 = {

// ──────────────────────────────────────────────────────────────
// BLOQUE 5 – SALUD INTEGRAL
// ──────────────────────────────────────────────────────────────

"higiene": {
  titulo: "Hábitos de Higiene",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Cuántas veces al día debemos lavarnos los dientes?", ops: ["Solo una vez","Dos o tres veces, después de cada comida","Una vez a la semana","Solo antes de dormir"], r: 1 },
    { p: "¿Por qué es importante lavarse las manos antes de comer?", ops: ["Para que la comida sepa mejor","Para eliminar gérmenes y bacterias que pueden enfermarnos","Para que las manos estén frías","Solo es un hábito sin importancia"], r: 1 },
    { p: "¿Con qué debemos lavarnos las manos correctamente?", ops: ["Solo con agua","Con agua y jabón durante al menos 20 segundos","Con agua muy caliente solamente","Con cualquier líquido"], r: 1 },
    { p: "¿Con qué frecuencia debemos bañarnos?", ops: ["Una vez por semana","Todos los días","Solo cuando hacemos ejercicio","Una vez al mes"], r: 1 },
    { p: "¿Qué debemos hacer para mantener limpio nuestro hogar?", ops: ["Barrer solo cuando haya visitas","Limpiar regularmente superficies, pisos y baños para eliminar gérmenes","No limpiar para no mover el polvo","Solo limpiar la cocina"], r: 1 },
    { p: "¿Para qué sirve el cepillo de dientes?", ops: ["Para peinarse","Para eliminar restos de comida y bacterias de los dientes","Para limpiar el oído","Para lavarse las manos"], r: 1 },
    { p: "¿Qué debemos hacer cuando tosemos o estornudamos?", ops: ["Toser hacia otras personas","Cubrirnos la boca y la nariz con el codo o un pañuelo","No hacer nada","Abrir la boca lo más posible"], r: 1 },
    { p: "¿Por qué debemos mantener las uñas cortas y limpias?", ops: ["Solo para verse bien","Porque debajo de las uñas largas se acumulan gérmenes y suciedad","Porque crece más rápido así","Solo es moda"], r: 1 },
    { p: "¿Con qué frecuencia debemos cambiar la ropa interior?", ops: ["Una vez por semana","Cada dos días","Todos los días","Solo cuando está muy sucia"], r: 3 },
    { p: "¿Cuál de estas acciones forma parte de una buena higiene bucal?", ops: ["Comer muchos dulces sin cepillarse","Usar hilo dental además del cepillo","Nunca visitar al dentista","Beber solo refrescos azucarados"], r: 1 },
  ]
},

"alimenta": {
  titulo: "Alimentación Saludable",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Por qué necesitamos alimentarnos bien?", ops: ["Solo para crecer más alto","Para dar al cuerpo los nutrientes que necesita para crecer, funcionar y estar sano","Solo para no tener hambre","Para dormir más horas"], r: 1 },
    { p: "¿Cuáles son los grupos de nutrientes que necesita nuestro cuerpo?", ops: ["Solo proteínas y agua","Carbohidratos, proteínas, grasas, vitaminas, minerales y agua","Solo vitaminas y minerales","Solo carbohidratos y grasas"], r: 1 },
    { p: "¿Para qué sirven las proteínas en el cuerpo?", ops: ["Para dar energía rápida","Para construir y reparar los músculos y tejidos del cuerpo","Para limpiar el intestino","Solo para dar sabor a los alimentos"], r: 1 },
    { p: "¿Cuál de estos alimentos es una buena fuente de proteínas?", ops: ["El azúcar","El arroz blanco","El pollo, los huevos y las legumbres","Las papas fritas"], r: 2 },
    { p: "¿Para qué sirven los carbohidratos?", ops: ["Para construir los huesos","Darnos energía para movernos y pensar","Para limpiar la sangre","Para producir vitaminas"], r: 1 },
    { p: "¿Cuántos vasos de agua debemos tomar aproximadamente cada día?", ops: ["1 o 2","3 o 4","8 o más","Solo cuando tengamos sed"], r: 2 },
    { p: "¿Qué representa la pirámide o el plato alimenticio?", ops: ["Una receta para cocinar","Una guía visual de los grupos de alimentos y las porciones recomendadas","Un juego de cocina","La historia de los alimentos"], r: 1 },
    { p: "¿Cuál de estas opciones es un desayuno más saludable para un niño?", ops: ["Refresco y papas fritas","Leche, fruta y cereal integral","Solo jugo de fruta artificial","Solo dulces y chocolate"], r: 1 },
    { p: "¿Por qué debemos comer frutas y verduras todos los días?", ops: ["Solo para variar el menú","Porque aportan vitaminas, minerales y fibra esenciales para la salud","Porque son los únicos alimentos","Solo porque son baratos"], r: 1 },
    { p: "¿Qué alimentos debemos consumir con moderación?", ops: ["Las frutas y verduras","Los granos y legumbres","Los dulces, frituras y refrescos azucarados","El agua y la leche"], r: 2 },
  ]
},

"enfermed": {
  titulo: "Enfermedades Comunes",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué son los gérmenes?", ops: ["Insectos grandes","Microorganismos muy pequeños como virus y bacterias que pueden causarnos enfermedades","Tipos de plantas","Partículas de polvo solamente"], r: 1 },
    { p: "¿Cuál de estas es una enfermedad causada por un virus?", ops: ["La caries dental","El resfriado común o gripe","Una fractura de hueso","La anemia"], r: 1 },
    { p: "¿Cómo se contagia el resfriado?", ops: ["Por comer mucho azúcar","Por el contacto con secreciones de una persona enferma, al toser o estornudar","Por no dormir bien únicamente","Por hacer ejercicio"], r: 1 },
    { p: "¿Para qué sirven las vacunas?", ops: ["Para curar enfermedades ya existentes","Para preparar al cuerpo y protegerlo contra ciertas enfermedades antes de que lleguen","Para quitar el dolor","Para dar vitaminas"], r: 1 },
    { p: "¿Cuál de estas acciones ayuda a prevenir enfermedades?", ops: ["No lavarse las manos nunca","Lavarse las manos, vacunarse y comer bien","Compartir el vaso con personas enfermas","No ir al médico nunca"], r: 1 },
    { p: "¿Qué es la fiebre?", ops: ["Un tipo de tos fuerte","El aumento de la temperatura del cuerpo, señal de que el organismo está combatiendo una infección","Un dolor de cabeza leve","Una enfermedad de la piel"], r: 1 },
    { p: "Si tienes fiebre alta, ¿qué debes hacer?", ops: ["Ir a jugar al sol","Decírselo a un adulto y consultar al médico","Tomar medicamentos sin consultar","No hacer nada"], r: 1 },
    { p: "¿Qué es la diarrea y cuándo puede ser peligrosa?", ops: ["Un dolor de cabeza; nunca es peligrosa","Evacuaciones frecuentes y líquidas; es peligrosa si causa mucha deshidratación","Una enfermedad de los pulmones","Un tipo de fiebre alta"], r: 1 },
    { p: "¿Cómo podemos prevenir enfermedades transmitidas por el agua?", ops: ["Bebiendo agua de cualquier fuente","Bebiendo solo agua limpia, potable o hervida","Comiendo más dulces","Bañándose menos"], r: 1 },
    { p: "¿Por qué es importante ir al médico de manera preventiva aunque no estemos enfermos?", ops: ["Para tomar más medicamentos","Para detectar problemas a tiempo y mantenernos sanos","No es necesario ir si uno está bien","Solo para pedir días libres en la escuela"], r: 1 },
  ]
},

"primauxil": {
  titulo: "Primeros Auxilios",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué son los primeros auxilios?", ops: ["La ayuda que da el médico en el hospital","La atención inmediata y básica que se da a alguien en una emergencia antes de que llegue ayuda médica","Un tipo de medicina","Solo para accidentes graves"], r: 1 },
    { p: "Si alguien tiene una herida pequeña con sangrado, ¿qué debes hacer primero?", ops: ["Dejarla sin limpiar","Lavar la herida con agua limpia y cubrir con una venda limpia","Ponerle tierra encima","Dejarla abierta al aire"], r: 1 },
    { p: "¿Qué debes hacer si alguien tiene una quemadura leve?", ops: ["Poner mantequilla o crema","Enfriar con agua fría durante varios minutos","Cubrir con tela caliente","Pinchar la zona afectada"], r: 1 },
    { p: "Si alguien se atraganta con comida, ¿qué NO se debe hacer?", ops: ["Pedir ayuda a un adulto","Dar palmadas en la espalda","Darle más comida para que la baje","Llamar a emergencias"], r: 2 },
    { p: "¿Qué número debemos llamar en caso de emergencia en Venezuela?", ops: ["911","171 (Protección Civil) o 112","100","999"], r: 1 },
    { p: "¿Cómo se debe actuar si alguien se golpea la cabeza con pérdida del conocimiento?", ops: ["Moverlo rápidamente","No moverlo, pedir ayuda y llamar a emergencias de inmediato","Darle agua","Dejarlo solo"], r: 1 },
    { p: "¿Para qué sirve el botiquín de primeros auxilios?", ops: ["Para guardar juguetes","Para tener a mano los materiales básicos para atender emergencias pequeñas","Para guardar la comida","Solo lo usan los médicos"], r: 1 },
    { p: "¿Qué debería haber en un botiquín básico?", ops: ["Solo pastillas de dulce","Gasas, vendas, antiséptico, tijeras y guantes","Solo termómetro","Solo agua"], r: 1 },
    { p: "Si alguien tiene un esguince (torcedura), ¿qué se debe aplicar primero?", ops: ["Calor intenso","Hielo o frío envuelto en una tela para reducir la inflamación","Aceite caliente","Nada, solo reposo"], r: 1 },
    { p: "¿Qué es lo más importante que debes hacer cuando ocurre una emergencia?", ops: ["Entrar en pánico","Mantener la calma, pedir ayuda a un adulto y llamar a emergencias","Alejarte del lugar rápidamente sin avisar","Intentar solucionar todo solo"], r: 1 },
  ]
},

"huerto": {
  titulo: "El Huerto Escolar",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Para qué sirve un huerto escolar?", ops: ["Solo para decorar la escuela","Para aprender a cultivar plantas, conocer de dónde viene la comida y cuidar el ambiente","Para guardar herramientas","Solo para los maestros"], r: 1 },
    { p: "¿Qué necesitan las plantas para crecer bien en el huerto?", ops: ["Solo agua","Luz solar, agua, tierra con nutrientes y cuidado","Solo tierra y sombra","Solo abono y nada más"], r: 1 },
    { p: "¿Qué es el abono orgánico o compost?", ops: ["Un producto químico de fábrica","Materia orgánica descompuesta (restos de frutas, verduras) que enriquece el suelo","Un tipo de pesticida","Solo tierra húmeda"], r: 1 },
    { p: "¿Qué herramientas se usan en el huerto?", ops: ["Lápices y cuadernos","Palita, regadera, rastrillo y guantes","Tijeras de cocina y cuchillos","Solo las manos"], r: 1 },
    { p: "¿Cuál de estas plantas es fácil de cultivar en un huerto escolar?", ops: ["Un árbol de mango adulto","Lechugas, tomates o hierbas como el cilantro","Plantas del fondo del mar","Cactus del desierto"], r: 1 },
    { p: "¿Con qué frecuencia debemos regar las plantas del huerto?", ops: ["Una vez al mes","Solo cuando llueve","Regularmente según la necesidad de cada planta, sin exceso ni falta","Cada cinco minutos"], r: 2 },
    { p: "¿Qué es la germinación?", ops: ["Cuando una planta muere","El proceso en que una semilla empieza a brotar y convertirse en planta","El proceso de regar las plantas","Cuando la planta da fruto"], r: 1 },
    { p: "¿Por qué es bueno usar compost en el huerto en lugar de químicos?", ops: ["Los químicos son mejores siempre","El compost es natural, mejora el suelo sin contaminar y recicla desechos","El compost es más difícil de conseguir","Solo porque huele bien"], r: 1 },
    { p: "¿Qué aprendemos al cuidar un huerto escolar?", ops: ["Solo a ensuciarnos","Responsabilidad, trabajo en equipo, paciencia y el ciclo de vida de las plantas","Solo a usar herramientas","Nada útil para la vida"], r: 1 },
    { p: "¿Cuál es el mejor momento del día para regar el huerto?", ops: ["Al mediodía, bajo el sol fuerte","Por la mañana temprano o por la tarde, para que el agua no se evapore rápido","A medianoche siempre","No importa la hora"], r: 1 },
  ]
},

// ──────────────────────────────────────────────────────────────
// BLOQUE 6 – CIENCIA Y TECNOLOGÍA
// ──────────────────────────────────────────────────────────────

"metcien": {
  titulo: "El Método Científico",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es el método científico?", ops: ["Una forma de cocinar","Una serie de pasos ordenados para investigar y responder preguntas sobre el mundo","Un tipo de experimento de magia","Un libro de ciencias"], r: 1 },
    { p: "¿Cuál es el primer paso del método científico?", ops: ["Sacar conclusiones","Hacer el experimento","Observar y hacer una pregunta","Escribir el informe"], r: 2 },
    { p: "¿Qué es una hipótesis?", ops: ["El resultado final de un experimento","Una suposición o respuesta posible a la pregunta que se investiga","Un tipo de instrumento","La conclusión final"], r: 1 },
    { p: "¿Qué hacemos cuando experimentamos?", ops: ["Solo leemos libros","Realizamos pruebas controladas para comprobar si nuestra hipótesis es correcta","Adivinamos el resultado","Copiamos el trabajo de otro"], r: 1 },
    { p: "¿Qué son los datos en un experimento?", ops: ["Las preguntas del experimento","La información y mediciones que recopilamos durante el experimento","La hipótesis inicial","El título del experimento"], r: 1 },
    { p: "¿Qué es la conclusión en el método científico?", ops: ["El primer paso","La respuesta final que obtenemos después de analizar los datos del experimento","La hipótesis sin comprobar","El material utilizado"], r: 1 },
    { p: "¿Por qué es importante repetir un experimento varias veces?", ops: ["Para gastar más materiales","Para asegurarse de que los resultados son confiables y no un error","Porque es una regla sin sentido","Para hacerlo más largo"], r: 1 },
    { p: "¿Qué es observar en el método científico?", ops: ["Imaginar cosas","Usar los sentidos para recoger información sobre algo del mundo real","Leer solo libros de texto","Adivinar el resultado"], r: 1 },
    { p: "¿Cuál es la diferencia entre un hecho y una opinión en ciencias?", ops: ["Son lo mismo","Un hecho puede comprobarse; una opinión es una idea personal que no siempre se puede comprobar","Una opinión es más importante","Solo los científicos adultos usan hechos"], r: 1 },
    { p: "¿Qué hace un científico cuando sus resultados no coinciden con su hipótesis?", ops: ["Cambia los datos para que coincidan","Acepta los resultados y forma una nueva hipótesis para seguir investigando","Abandona la ciencia","Busca un resultado diferente"], r: 1 },
  ]
},

"exper": {
  titulo: "Experimentos Sencillos",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "Si mezclas bicarbonato de sodio con vinagre, ¿qué ocurre?", ops: ["Nada","Se produce una reacción con burbujas y espuma (gas CO₂)","Se forma hielo","Se vuelve muy caliente y explota"], r: 1 },
    { p: "¿Por qué flota el hielo en el agua?", ops: ["Porque el hielo es más pesado que el agua","Porque el hielo es menos denso que el agua líquida","Porque el hielo es más caliente","Porque el agua lo empuja siempre"], r: 1 },
    { p: "Si pones un lápiz en un vaso de agua y lo miras de lado, ¿qué observas?", ops: ["Nada especial","El lápiz parece torcido o quebrado por la refracción de la luz","El lápiz se disuelve","El lápiz se parte en dos"], r: 1 },
    { p: "¿Qué demuestra el experimento de la planta en la oscuridad por varios días?", ops: ["Las plantas no necesitan luz","Las plantas se vuelven más fuertes sin luz","Sin luz las plantas no pueden hacer fotosíntesis y se ponen amarillas o mueren","Las plantas producen más oxígeno en la oscuridad"], r: 2 },
    { p: "Si soplas aire dentro de agua con cal (agua de cal), ¿qué ocurre?", ops: ["Nada cambia","El agua se pone azul","El agua se pone blanca/turbia por el CO₂ del aliento que reacciona con la cal","El agua se evapora"], r: 2 },
    { p: "¿Por qué un objeto de madera flota y un objeto de hierro del mismo tamaño se hunde?", ops: ["Por su color","Porque la madera es menos densa que el agua y el hierro es más denso","Porque el hierro es más grande","Por la temperatura del agua"], r: 1 },
    { p: "¿Qué ocurre con una semilla que ponemos entre algodón húmedo?", ops: ["No pasa nada","Se pudre de inmediato","Germina y empieza a brotar si tiene agua, calor y aire","Se convierte en planta sin raíces"], r: 2 },
    { p: "Si mezclas aceite y agua en un frasco, ¿qué observas?", ops: ["Se mezclan perfectamente","El aceite siempre flota sobre el agua porque son menos densos y no se mezclan","El agua flota sobre el aceite","Se convierten en un nuevo líquido"], r: 1 },
    { p: "¿Qué necesitamos siempre antes de hacer un experimento?", ops: ["Muchos materiales caros","Planificar los pasos, tener los materiales listos y pedir supervisión de un adulto","Solo ganas de hacerlo","Un laboratorio grande"], r: 2 },
    { p: "¿Para qué sirven los experimentos sencillos en la escuela?", ops: ["Solo para entretenerse","Para comprobar de forma práctica lo que aprendemos en clase","Para perder el tiempo","Solo para los niños que no entienden"], r: 1 },
  ]
},

"tecnol": {
  titulo: "Tecnología en la Vida Diaria",
  ptsCorrecta: 3, ptsPerfecto: 10,
  preguntas: [
    { p: "¿Qué es la tecnología?", ops: ["Solo las computadoras e internet","El conjunto de herramientas, inventos y conocimientos que usamos para resolver problemas y mejorar la vida","Un tipo de ciencia espacial","Solo los celulares modernos"], r: 1 },
    { p: "¿Cuál de estos es un invento tecnológico que usamos todos los días?", ops: ["Una piedra del río","El bombillo eléctrico","Un árbol del parque","El agua del mar"], r: 1 },
    { p: "¿Para qué sirve el teléfono?", ops: ["Para cocinar comida","Para comunicarnos con personas que están lejos","Para medir el tiempo","Para producir electricidad"], r: 1 },
    { p: "¿Qué problema resolvió el invento del refrigerador?", ops: ["La falta de luz","Conservar los alimentos frescos por más tiempo sin que se dañen","La falta de agua","El calentamiento global"], r: 1 },
    { p: "¿Cómo nos ayuda la tecnología en la medicina?", ops: ["No tiene ningún uso en medicina","Con inventos como las radiografías, las vacunas y los equipos médicos que salvan vidas","Solo en operaciones difíciles","Solo en países ricos"], r: 1 },
    { p: "¿Qué es internet?", ops: ["Un tipo de televisión antigua","Una red mundial que conecta computadoras y permite compartir información","Un aparato electrónico","Solo juegos en línea"], r: 1 },
    { p: "¿Cuál fue uno de los inventos más importantes de la historia para la comunicación?", ops: ["La silla","La imprenta, que permitió reproducir libros y difundir el conocimiento","El tenedor","El paraguas"], r: 1 },
    { p: "¿Qué es la energía solar y cómo la usamos con tecnología?", ops: ["Energía de las olas del mar","Energía del Sol captada con paneles solares para producir electricidad","Energía de los volcanes","Solo sirve para calentar agua"], r: 1 },
    { p: "¿Qué debemos tener en cuenta al usar la tecnología de forma responsable?", ops: ["Usarla sin límites a toda hora","Usarla con moderación, para aprender, sin compartir datos personales y con supervisión","Compartir toda nuestra información personal en internet","Nunca usarla"], r: 1 },
    { p: "¿Cuál de estas afirmaciones sobre la tecnología es verdadera?", ops: ["La tecnología siempre es perjudicial","La tecnología usada correctamente mejora la educación, la salud y la calidad de vida","La tecnología no tiene ningún efecto en la vida","Solo los adultos pueden usar tecnología"], r: 1 },
  ]
},

}; // fin ENCUESTAS_CIENCIA4

if (typeof window !== 'undefined') {
  window.ENCUESTAS_CIENCIA4 = ENCUESTAS_CIENCIA4;
  if (typeof window.ENCUESTAS_ALL === 'undefined') window.ENCUESTAS_ALL = {};
  Object.assign(window.ENCUESTAS_ALL, ENCUESTAS_CIENCIA4);
}
