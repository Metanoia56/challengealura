// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Agregando un filtro para que no se puedan ingresar campos vacíos
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    //Agregando una función para diferenciar nombres ya existentes
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("delete-button");
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSeleccionado}`;
}
