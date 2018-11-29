// botones del juego
const botonAzul = document.getElementById('azul');
const botonAmarillo = document.getElementById('amarillo');
const botonNaranja = document.getElementById('naranja');
const botonRosa = document.getElementById('rosa');

 //boton de inicio
const botonInicio = document.getElementById('btnEmpezar');

botonInicio.addEventListener('click', empezarJuego)

function empezarJuego () {
  botonInicio.classList.add('ocultar');
}