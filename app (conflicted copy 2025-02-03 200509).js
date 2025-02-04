// Challenge: Amigo Secreto
//By Johny Israel Santacruz Vivas


//Declaración de varriables globales

//Lista donde se alamcenna los nombres 
let listaAmigos = [];
// Variable de control para la cantidad de nombres a ingresar
let limiteAmigos = 2;


//Funcion para agregar amigo
function agregarAmigo(){
    alert("Entrando a la función agregar amigo");
    let nombre = document.querySelector('#amigo').value;
    alert(nombre);
    revisarNombreEnLista(nombre);
    
}

function sortearAmigo(){
    alert("Entrando a la función sortear amigo");
}


function revisarNombreEnLista(nombre){
    console.log(listaAmigos);
    console.log(nombre);
    if(listaAmigos.length == limiteAmigos){
        asiganrTextoElemento('h2','Ya se ingresaron la cantidad necesaria de amigos');
    }else{
        if(listaAmigos.includes(nombre)){
            asiganrTextoElemento('h2','El nombre ya existe');
            return revisarNombreEnLista();
        }else{
            listaAmigos.push(nombre);
        }
    }
    

}

// Asignar texto de manera dinamica a los headers
function asiganrTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para limpiar la caja de texto
function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo').value = '';
}

// Condiciones iniciales del programa 
function condicionesIniciales(){
    asiganrTextoElemento('h1','Amigo Secreto!');
    asiganrTextoElemento('h2',`Hola...Digite el nombre de sus amigos`); 
    nombre = agregarAmigo();
}

function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de inicio, intervalo de numeros
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);

}


// LLamada a la función para ininiar el programa
condicionesIniciales();
