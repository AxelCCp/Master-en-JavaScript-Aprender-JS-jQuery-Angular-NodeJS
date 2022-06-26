'use strict'

//EL LOCAL STORAGE ES UNA MEMORIA QUE SE VA ALMACENANDO EN EL NAVEGADOR

//PARA VER SI TENEMOS DISPONIBLE EL LOCAL STORAGE
 if(typeof(Storage) != 'undefined'){
     console.log("localStorage disponible")
 }else{
    console.log("localStorage NO disponible")
 }

//GUARDAR DATOS EN EL LOCAL STORAGE DEL NAVEGADOR
//                     key                 value
localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");


//SE RECUPERA ELEMENTO PARA PONERLO EN LA PÁGINA WEB
var titulo = localStorage.getItem("titulo");
console.log(titulo);

document.querySelector("#peliculas").innerHTML = titulo;

//GUARDAR OBJ JSON EN LOCAL STORAGE: 
//PARA ESTO SE TIENE QUE CONVERTIR EL OBJ JSON EN UN OBJ JSON STRING, PARA QUE SE GUARDE
//..BIEN EN EL LOCAL STORAGE.
var usuario = {
    nombre : "Bob Esponja",
    email: "bob@esponja.com",
    web: "bobEsponja.com"
};
//                              SE PASA A JSONstring
localStorage.setItem("usuario", JSON.stringify(usuario));

//IMPRIMIR EN LA CONSOLA EL OBJ JSONstring
console.log(localStorage.getItem("usuario"));


//RECUPERAR "OBJ" JSON DESDE EL JSONstring QUE ESTÁ EN EL LOCALSTORAGE
var userJs = JSON.parse(localStorage.getItem("usuario"));
console.log(userJs);

//SE CARGAN LOS DATOS DEL LOCAL STORAGE EN LA PAG 
document.querySelector("#datosLocalStorage")
    .append(userJs.nombre + " " + userJs.email + " " + userJs.web);

//PARA VACIAR EL LOCAL STORAGE
//localStorage.clear();
//localStorage.removeItem("usuario");