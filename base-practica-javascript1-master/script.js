import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelector("a");
let tituloElemeto = document.getElementById("titulo");
let subTituloElemeto = document.getElementById("subtitulo");
let parrafoElemeto = document.getElementById("parafo");

enlaces.forEach(function (enlaces) {
  enlaces.addEventListener("click", fuincion());
});
