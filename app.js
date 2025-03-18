// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
Declaración de variables
*/
let numeroAmigos = 0;
let amigos = [];
window.alert('sex')

/*
Declaración de funciones
*/
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumero(numeroAmigos) { 
    return Math.floor(Math.random() * numeroAmigos + 1); 
}

function agregarAmigo() {
    amigos.push(document.getElementById("amigos").value);
    console.log(amigos);
    asignarTextoElemento('ul', amigos);
}
function sortearAmigo() {
}