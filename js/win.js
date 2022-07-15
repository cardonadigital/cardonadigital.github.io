/**
 * Contains the info and logic of the page win
 *
 * @version 1.0.0 14/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */

let puntaje = window.localStorage.getItem("puntaje");
if (puntaje == null) {
  puntaje = 0;
}

/**
 * store the html contecnt into a variable and then assigns it to the container
 *
 * @version 1.0.0 15/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */
const container = document.querySelector("#container");
container.innerHTML = `
    <div class="card container d-flex justify-content-center mt-5">
        <h4 class="mt-5">puntaje total: ${puntaje}</h4>
        <div class="container mb-3">
            <h3>Felicidades has ganado</h3>
            <p>Gracias por participar, ahora puedes acercarte a nuestra sucursal mas cercana y reclamar el premio de un millon de bolivares. Felicitaciones.</p>
            <button class="btn btn-info" id="regresar">Vover a intentarlo</button>
        </div>
    </div>
`;

/**
 * clear the local storage and redirect to index page
 *
 * @version 1.0.0 15/07/2022
 * @author Daniel David Cardona Moreno
 * @since 1.0.0
 */
const regresar = () => {
  console.log("clear");
  window.localStorage.clear();
  window.location = "../index.html";
};

// when button is pressed execute function (regresar)
const boton = document.querySelector("#regresar");
boton.addEventListener("click", regresar);
