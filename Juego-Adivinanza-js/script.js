//Acá el juego seleciona un número al azar para que adivines
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;

//Esta acción se va aejecutar cuando se toque el botón  chequear
function chequearResultado() {
  intentos++;
  intento.textContent = intentos;
  let numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Por favor, ingrese un número válido entre 1 y 100";
    mensaje.style.color = "red";
    return;
  }
  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = "¡Felicitaciones! ¡Has adivinado el número!";
    mensaje.style.color = "green";
    numeroAzar.disable = true;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "¡Más Alto! El número es mayor al que dijiste";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "¡Más bajo! El número es menor al que dijiste";
    mensaje.style.color = "red";
  }
}
