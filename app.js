// Challenge: Amigo Secreto
//By Johny Israel Santacruz Vivas


//Declaración de varriables globales

//Lista donde se alamcenna los nombres 
let listaAmigos = [];
// Variable de control para la cantidad de nombres a ingresar
let limiteAmigos = 5;
let nombre;



function sortearAmigo(){

    if(listaAmigos.length == limiteAmigos){
        indiceNombreSorteado = Math.floor(Math.random() *limiteAmigos);
        console.log(indiceNombreSorteado);
        nombreSorteado = listaAmigos[indiceNombreSorteado];

        if(listaAmigos.length == 0){
            alert('Lista de amigos vacía, ingrese nombres de amigos')
        }else{
            nom = document.getElementById("resultado");
            nom.innerHTML = `Nombre Sorteado: ${nombreSorteado}`;
        }
    }else{
        asiganrTextoElemento('h2',`Aún no se asignan los nombres suficientes, faltan ${limiteAmigos - listaAmigos.length}`);
    }
    
}

function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
   
}

function agregarAmigo(){

    asiganrTextoElemento('h2','Digite el nombre de sus amigos');
    if(listaAmigos.length === limiteAmigos){
        asiganrTextoElemento('h2','Ya se asignaron la cantdad de nombres necesarios, procede a sortear un amigo');
        console.log(listaAmigos);
        limpiarCaja();
    }else{
        nombre = document.querySelector('#amigo').value;
        if(nombre == ""){
            alert('Ingrese un nombre válido');
            limpiarCaja();
        }else{
            if(listaAmigos.includes(nombre)){
                asiganrTextoElemento('h2','El nombre ya existe, ingresa otro nombre');
                limpiarCaja();
            }else{
                listaAmigos.push(nombre);
                console.log(listaAmigos);
                actualizarListaAmigos();
                limpiarCaja();
            }
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
    asiganrTextoElemento('h2',`Digite el nombre de sus amigos`); 
}

// LLamada a la función para ininiar el programa
condicionesIniciales();
