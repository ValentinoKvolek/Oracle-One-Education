// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){

    const input = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');

    const nombreAmigo = input.value.trim(); // trim para eliminar espacios.
    if(nombreAmigo =="") {
        alert("Coloca un nombre!");
        return;
    }

    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombreAmigo;
    nuevoAmigo.className = 'friend-item';
    lista.appendChild(nuevoAmigo); // agregando nuevo amigo a la lista.

    //limpiando el input.
    input.value = '';
        input.focus();
}

function sortearAmigo() {

    const listaElementos = document.querySelectorAll('#listaAmigos li'); // Obtener todos los elementos <li> de la lista de amigos
    const listaNombres = Array.from(listaElementos, item => item.textContent); // Extraer los nombres de los <li>

    if (listaNombres.length === 0) {
        alert("La lista está vacía. Agrega amigos primero.");
        return;
    }

    // Elegir un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const amigoSeleccionado = listaNombres[indiceAleatorio];

    // Mostrar el resultado en la lista con ID "resultado"
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpiar 
    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `Amigo secreto seleccionado: ${amigoSeleccionado}`;
    resultadoItem.className = 'result-item';
    resultadoLista.appendChild(resultadoItem);
}
