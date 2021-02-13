
let lista = JSON.parse(sessionStorage.getItem("id"))||[];
function getSongs() {
    // Petició asíncrona
    fetch('./data/canciones.json')
        .then(result => result.json())
        .then((canciones) => {
            // Actualitza les dades de la llista de pelies
            const tabla = document.getElementById("contenidoTabla");
            for(let cancion of canciones){
              
               
                tabla.innerHTML +=`<tr class="fila" data-id="${cancion.id}">
                <td><audio controls><source src="./audios/${cancion.cancion}.mp3" type="audio/mp3">
       
       </audio> <a href=".mp3" type="audio"></a></td>
                <td><button>${printcor(cancion.id)}</button></td>
                <td>${cancion.titulo}</td>
                <td>${cancion.artista}</td>
                <td>${cancion.album}</td>
                <td>${cancion.fecha}</td>
                <td>${cancion.tiempo}</td>
                </tr>
              `;
          
            }
        });
       
}

getSongs();

const corazon = document.querySelector('#contenidoTabla');
corazon.addEventListener("click",cambiar);

 function cambiar(e){
     e.preventDefault();
     let node = e.target;
     let identificador = parseInt(node.parentNode.parentNode.getAttribute("data-id"));
     console.log(node)
    if(node.className == "far fa-heart"){
        node.className = "fas fa-heart"; 
        lista.push(identificador);

    }else if(node.className == "fas fa-heart"){
        node.className = "far fa-heart";
        lista = lista.filter(el=>el!=identificador);
      
    }else{
        return false;
    }
    console.log(lista);
    sessionStorage.setItem("id",JSON.stringify(lista));

 }

 function printcor(corazones){
     if(lista.indexOf(corazones)== -1){
         return "<i class='far fa-heart'></i>";
     }else{
        return "<i class='fas fa-heart'></i>";
     }

 }
 