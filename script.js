function mostrarLetras(numero) {
  var letras = document.querySelectorAll('.letra');
  for (var i = 0; i < letras.length; i++) {
    if (letras[i].classList.contains('mostrar') && letras[i].classList.contains('numero-' + numero)) {
      letras[i].classList.remove('mostrar');
    } else if (letras[i].classList.contains('numero-' + numero)) {
      letras[i].classList.add('mostrar');
    } else if (letras[i].classList.contains('mostrar') && !letras[i].classList.contains('numero-' + numero)) {
      letras[i].classList.remove('mostrar');
    }
  }
}
