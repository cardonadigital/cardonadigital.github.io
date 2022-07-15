/**
 * This class creates the object Question wich contains (4 answers, question,corrects answer )
 *
 * @version 1.0.0 15/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */

class Question {
  constructor(pregunta, a, b, c, d, respuesta) {
    this.pregunta = pregunta;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.respuesta = respuesta;
  }
}

/**
 * set the arrays for each level
 *
 * @version 1.0.0 15/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */


let nivel1 = [];
let nivel2 = [];
let nivel3 = [];
let nivel4 = [];
let nivel5 = [];
let pagina = [];

/**
 * create all(20) the Questions objects
 *
 * @version 1.0.0 15/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */

// questions level 1
const pregunta1Nivel1Data = new Question(
  "¿Cuál es el nombre del río más largo del mundo?",
  "Río Nilo",
  "Río Amazonas",
  "Río Danubio",
  "Río Magdalena",
  "Río Amazonas"
);

const pregunta2Nivel1Data = new Question(
  "¿Cuál es el océano más grande del mundo?",
  "Océano Índico",
  "Océano Pacífico",
  "Océano Atlántico",
  "Océano Antártico",
  "Océano Pacífico"
);
const pregunta3Nivel1Data = new Question(
  "¿Cuál es el país más grande del mundo?",
  "China",
  "Rusia",
  "India",
  "Nueva Zelanda",
  "Rusia"
);
const pregunta4Nivel1Data = new Question(
  "¿Cuál es el país que tiene forma de bota?",
  "España",
  "Honduras",
  "Italia",
  "Nueva Zelanda",
  "Italia"
);
const pregunta5Nivel1Data = new Question(
  "¿Cuál es el país más poblado de la tierra?",
  "Estados Unidos",
  "China",
  "Rusia",
  "Nueva Zelanda",
  "China"
);

// questions level 2

const pregunta1Nivel2Data = new Question(
  "¿Cuál es la ciudad de los rascacielos?",
  "Tokio",
  "New York",
  "Hong Kong",
  "Auclkand",
  "New York"
);
const pregunta2Nivel2Data = new Question(
  "¿En qué país se encuentra ubicada la Casa Rosada?",
  "Chile",
  "Argentina",
  "Mexico",
  "Colombia",
  "Argentina"
);
const pregunta3Nivel2Data = new Question(
  "¿Cuál es la capital de Nicaragua?",
  "Santiago",
  "Brasilia",
  "Managua",
  "Sincelejo",
  "Managua"
);
const pregunta4Nivel2Data = new Question(
  "¿En qué país está ubicada la ciudad de Monterrey?",
  "Colombia",
  "Venezuela",
  "Perú",
  "México",
  "México"
);
const pregunta5Nivel2Data = new Question(
  "¿En qué continente se encuentra Surinam?",
  "África",
  "América del Sur",
  "Oceanía",
  "Europa",
  "América del Sur"
);

// questions level 3

const pregunta1Nivel3Data = new Question(
  "¿¿Cuándo terminó la II Guerra Mundial?",
  "1945",
  "1947",
  "1997",
  "1991",
  "1945"
);
const pregunta2Nivel3Data = new Question(
  "¿En qué año llegó Cristobal Colón a América?",
  "1429",
  "1947",
  "1429",
  "1492",
  "1492"
);
const pregunta3Nivel3Data = new Question(
  "¿Quién es el padre del psicoanálisis?",
  "Carl Gustav Jung",
  "Skinner",
  "Sigmund Freud",
  "Platón",
  "Sigmund Freud"
);
const pregunta4Nivel3Data = new Question(
  "¿Quién escribió La Odisea?",
  "Virgilio",
  "Homero",
  "Cervantes",
  "Platón",
  "Homero"
);
const pregunta5Nivel3Data = new Question(
  "¿A qué se denomina séptimo arte?",
  "Pintura",
  "Escultura",
  "Cine",
  "Fotografía",
  "Cine"
);

// questions level 4

const pregunta1Nivel4Data = new Question(
  "¿Cuáles son las notas musicales?",
  "Do, Re, Mi",
  "Do, Re, Mi, Sol, La, Si, Do",
  "Do, Re, Mi, Fa, Sol, La, Si",
  "Do, Fa, Mi, re, Sol, Si, La",
  "Do, Re, Mi, Fa, Sol, La, Si"
);
const pregunta2Nivel4Data = new Question(
  "¿Quién escribió Cien años de soledad?",
  "Paulo Coehlo",
  "Camilo José Cela",
  "Mario Vargas Llosa",
  "Gabriel García Márquez",
  "Gabriel García Márquez"
);
const pregunta3Nivel4Data = new Question(
  "¿Quién es denominado el Rey del Rock and Roll en Estados Unidos?",
  "Bruce Springsteen",
  "Michael Jackson",
  "Elvis Presley",
  "Justin Beiber",
  "Elvis Presley"
);
const pregunta4Nivel4Data = new Question(
  "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
  "Oxígeno",
  "Nitrógeno",
  "Carbono",
  "Helio",
  "Oxígeno"
);
const pregunta5Nivel4Data = new Question(
  "¿Cómo se denomina al resultado de una multiplicación?",
  "Múltiplo",
  "Resultado",
  "Producto",
  "Divisor",
  "Producto"
);

// questions level 5

const pregunta1Nivel5Data = new Question(
  "¿A cuánto equivale el numero Pi?",
  "3.1614",
  "3.1416",
  "3.416",
  "3.1516",
  "3.1416"
);
const pregunta2Nivel5Data = new Question(
  "¿Cuál es el primero de los números primos?",
  "3",
  "0",
  "2",
  "1",
  "2"
);
const pregunta3Nivel5Data = new Question(
  "¿Cómo se denomina al tipo de triángulo que tiene sus tres lados iguales?",
  "Isósceles",
  "Equilátero",
  "Recto",
  "De Pascal",
  "Equilátero"
);
const pregunta4Nivel5Data = new Question(
  "¿Cuál es el gas que se encuentra en mayor cantidad en el aire que respiramos?",
  "Nitrógeno",
  "Oxígeno",
  "Carbono",
  "Helio",
  "Nitrógeno"
);
const pregunta5Nivel5Data = new Question(
  "¿Cuál es el símbolo químico del oro?",
  "Or",
  "Au",
  "Ao",
  "Fe",
  "Au"
);

/**
 * fill each level wich 5 Questions objects
 *
 * @version 1.0.0 15/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */

nivel1 = [
  pregunta1Nivel1Data,
  pregunta2Nivel1Data,
  pregunta3Nivel1Data,
  pregunta4Nivel1Data,
  pregunta5Nivel1Data,
];

nivel2 = [
  pregunta1Nivel2Data,
  pregunta2Nivel2Data,
  pregunta3Nivel2Data,
  pregunta4Nivel2Data,
  pregunta5Nivel2Data,
];

nivel3 = [
  pregunta1Nivel3Data,
  pregunta2Nivel3Data,
  pregunta3Nivel3Data,
  pregunta4Nivel3Data,
  pregunta5Nivel3Data,
];

nivel4 = [
  pregunta1Nivel4Data,
  pregunta2Nivel4Data,
  pregunta3Nivel4Data,
  pregunta4Nivel4Data,
  pregunta5Nivel4Data,
];

nivel5 = [
  pregunta1Nivel5Data,
  pregunta2Nivel5Data,
  pregunta3Nivel5Data,
  pregunta4Nivel5Data,
  pregunta5Nivel5Data,
];


//fill the page with the 5 leves
pagina = [nivel1, nivel2, nivel3, nivel4, nivel5];


//give a random number between 0 and 5
const randomQuestion = Math.floor(Math.random() * 5);

// exports
export { pagina, Question, randomQuestion };
