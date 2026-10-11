// Listas de imágenes
const listaCabezas = [
  "./assets/img/cabeza1.jpeg",
  "./assets/img/cabeza2.jpeg",
  "./assets/img/cabeza3.jpeg",
  "./assets/img/cabeza4.jpeg",
];
const listaTroncos = [
  "./assets/img/tronco1.jpeg",
  "./assets/img/tronco2.jpeg",
  "./assets/img/tronco3.jpeg",
  "./assets/img/tronco4.jpeg",
];
const listaPiernas = [
  "./assets/img/piernas1.jpeg",
  "./assets/img/piernas2.jpeg",
  "./assets/img/piernas3.jpeg",
  "./assets/img/piernas4.jpeg",
];
const listaPatas = [
  "./assets/img/patas1.jpeg",
  "./assets/img/patas2.jpeg",
  "./assets/img/patas3.jpeg",
  "./assets/img/patas4.jpeg",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const piernas = document.getElementById("piernas");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let piernasAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const mensaje = document.getElementById("mensajeVictoria");
mensaje.style.display = "none";
mensaje.textContent = "";

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  // Elegimos un índice aleatorio para cada parte
  const indiceCabeza = Math.floor(Math.random() * listaCabezas.length);
  const indiceTronco = Math.floor(Math.random() * listaTroncos.length);
  const indicePiernas = Math.floor(Math.random() * listaPiernas.length);
  const indicePatas = Math.floor(Math.random() * listaPatas.length);

  // Mostramos las imágenes seleccionadas
  cabeza.src = listaCabezas[indiceCabeza];
  tronco.src = listaTroncos[indiceTronco];
  piernas.src = listaPiernas[indicePiernas];
  patas.src = listaPatas[indicePatas];

  // Comprobamos si las cuatro partes tienen el mismo índice
  if (
    indiceCabeza === indiceTronco &&
    indiceTronco === indicePiernas &&
    indicePiernas === indicePatas
  ) {
    mostrarVictoria();
  }
}


function mostrarVictoria() {
  const mensaje = document.getElementById("mensajeVictoria");

  mensaje.textContent =
    "🎃 ¡DISFRAZ COMPLETO! Encontraste el disfraz legendario 🎃";

  mensaje.style.display = "block";

  reproducirSonido();
}

function reproducirSonido() {
  const sonido = new Audio("./assets/img/bruja.mp3");

   sonido.play().catch((error) => {
    console.error("No se pudo reproducir el audio:", error);

}
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
