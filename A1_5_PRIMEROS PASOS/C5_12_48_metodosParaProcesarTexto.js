'use strict'

//TRANSFORMACIÓN DE TEXTOS
var numero = 444;
var texto1 = "Bienvenido al curso de javaScript de Victor Robles";
var texto2 = "ES MUY BUEN CURSO";

var dato = numero.toString();

console.log(dato);
console.log(typeof dato);

var dato2 = texto1.toUpperCase();
console.log(dato2);

var dato3 = texto2.toLowerCase();
console.log(dato3);


//CALCULAR LOGITUD DE UN STRING
var nombre = "ksjdflkjsakdfjsadlkf{";
console.log(nombre.length);

//CALCULAR LOS ELEMENTOS DE UN ARRAY
var array1 = ["perro","gato","elefante","tigre","oso"];
console.log(array1.length);


//CONCATENAR 
var textos1y2 = texto1 + " ... " + texto2;
console.log(textos1y2); 


var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal); 