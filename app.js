// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
Declaración de variables
*/
let amigos = [];

/*
Declaración de funciones
*/
function asignarTextoElemento(id,texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}

function generarNumero(numeroAmigos) { 
    return Math.floor(Math.random() * numeroAmigos); 
}

function agregarAmigo() {
    if (document.querySelector("input").value === "") {
        alert("Debe ingresar un nombre para agregar a la lista de amigos");
    }
    else {
        nombreAmigo = document.querySelector("input").value;
        amigos.push(nombreAmigo);
        asignarTextoElemento("listaAmigos", amigos.join('\n'));
        document.querySelector("input").value = "";
    }
}


function sortearAmigo() {
    let numeroAmigos = amigos.length;
    let amigoSorteado = generarNumero(numeroAmigos);
    asignarTextoElemento("listaAmigos", "");
    asignarTextoElemento("resultado", `El amigo secreto sorteado es: ${amigos[amigoSorteado]}`);
}