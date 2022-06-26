'use strict'


var pelicula = {

    titulo : 'Batman vs superman',
    year : 2017,
    pais: "EEUU"
};

console.log(pelicula);


//PARA ACCEDER A UNA PROPIEDAD DEL JSON DESDE LA CONSOLA 
pelicula.pais

//CAMBIAR EL VALOR DE UNA PROPIEDAD EN LA CONSOLA
pelicula.titulo = "superman begins";


//SE CREA UNA ARRAY DE JSON
var peliculas = [
    {titulo: "la verdad duele", year: 2016, pais:"francia"},
    pelicula
];


var cajaPeliculas = document.querySelector("#peliculas");
//SE  RECORRE EL ARRAY
for(var index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year + " - " + peliculas[index].pais);
    cajaPeliculas.append(p);
}
