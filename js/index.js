import { pagina, randomQuestion } from "../model/modelQuestions.js";
/**
 * This class contains the logic and the elemnts to render in the index page
 *
 * @version 1.0.0 15/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */

// verify if the page have localstorage have the variables (pagina-puntaje)
// if the page doesn't have these variables the creates them
// if the page alerady have the variables get the value form the localstorage

if (window.localStorage.getItem("pagina") == null) {
  var Pagina = 0;
  var puntuacion = 0;
} else {
  var Pagina = parseInt(window.localStorage.getItem("pagina"));
  puntuacion = parseInt(window.localStorage.getItem("puntaje"));
}



// this variable contains the info of all the questions pagina[levels(5)][randoNumber(0-5)]
let info = pagina[Pagina][randomQuestion];

// captures the button that has been selected by the user
let respuestaUsuario;


// give you information about the question
console.log(info);

//give you input of which level you are
console.log("paginacion", Pagina);


/**
 * store the html contecnt into a variable and then assigns it to the container
 *
 * @version 1.0.0 15/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */

const container = document.querySelector("#container");
container.innerHTML = `
<div class="container mt-5">
<h2>Quien quiere ser millonario</h2>
<h4>Puntaje: ${puntuacion}</h4>
</div>
<div class="d-flex justify-content-center">
<div class="card col-md-8 mt-5 bg-dark">
<div class="container d-flex justify-content-center mt-5">
    <div class="card col-md-8 bg-info">
        <h3 class="text-center">Pregunta:</h3>
        <h5 class="text-center text-secondary">${info.pregunta}</h5>
    </div>
    <div class="container card mt-5">
        <h5 class="mt-2">Escoge la opción correcta</h5>
        <div class="col-md-8 d-flex justify-content-around mt-4">
            <button class="btn btn-primary col-md-4 respuesta">${info.a}</button>
            <button class="btn btn-primary col-md-4 respuesta">${info.b}</button>
        </div>
        <div class="col-md-8 d-flex justify-content-around mt-5 mb-5">
            <button class="btn btn-primary col-md-4 respuesta">${info.c}</button>
            <button class="btn btn-primary col-md-4 respuesta">${info.d}</button>
        </div>
    </div>
    <div class="mt-5 mb-5">
        <button class="btn btn-secondary" id="nextPage">Verificar respuesta</button>
    </div>
</div>
</div>
</div>
`;

/**
 * This function is used to get the required element of the page
 *
 * @version 1.0.0 14/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */
const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      e.preventDefault();
      handler(e);
    }
  });
};

/**
 * This function get the text of the element respuesta.
 *
 * @version 1.0.0 14/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */

on(document, "click", ".respuesta", (e) => {
  respuestaUsuario = e.target.textContent;
  console.log(respuestaUsuario);
});

// capture the response of the current question
let respuesta = info.respuesta;

/**
 * This function check if the user has been selected the right asnwer: ifTrue(adds up to the score and add +1 to the page)
 * if the user has been selected the right asnwer and reached the last level: redirect to winner page
 * if the user has been selected the wroog answer: redirect to lose page
 *
 * @version 1.0.0 14/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */

const siguientePagina = () => {
  if (respuesta == respuestaUsuario) {
    if (Pagina == 4) {
      window.location = "/pages/win.html";
    } else {
      let temp = Pagina + 1;
      let puntajeTemp = puntuacion + 5;
      window.localStorage.setItem("pagina", temp);
      window.localStorage.setItem("puntaje", puntajeTemp);
      location.reload();
      console.log("bien");
    }
  } else if (respuesta != respuestaUsuario) {
    console.log("mal");
    window.location = "/pages/lose.html";
  }
};

// when button is pressed call the function (siguientePagina)
const button = document.querySelector("#nextPage");
button.addEventListener("click", siguientePagina);
