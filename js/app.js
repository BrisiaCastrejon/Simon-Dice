const botonInicio = document.getElementById('btnEmpezar');

botonInicio.addEventListener('click', empezarJuego)

function empezarJuego () {
  botonInicio.classList.add('ocultar');
}