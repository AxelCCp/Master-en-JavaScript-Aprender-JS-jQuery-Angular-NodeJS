'use strict'

var formulario = document.querySelector("#formpeliculas");
//SE OBTIENE EL EVENTO SUBMIT
formulario.addEventListener('submit', function(){
    console.log("entró en la function");
    var titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >=1){
        localStorage.setItem(titulo,titulo)
    }
});

//SE RECORRE EL LOCAL STORAGE 
var ul = document.querySelector("#peliculas-list");
for(var i in localStorage){
   // console.log(localStorage[i]);
    if( typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }

}


//-----FORMULARIO PARA BORRAR------------------


var formulariob = document.querySelector("#formBorrarPeliculas");
//SE OBTIENE EL EVENTO SUBMIT
formulariob.addEventListener('submit', function(){
    console.log("entró en la function");
    var titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >=1){
        localStorage.removeItem(titulo)
    }
});

