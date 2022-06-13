'use strict'

//MÉTODOS PARA BUSCAR DENTRO DE UN STRING
var numero = 444;
var texto1 = "Bienvenido al curso de javaScript de Victor Robles";
var texto2 = "ES MUY BUEN CURSO";

//ENTREGA EL ÍNDICE DONDE ESTA LA PALABRA CURSO
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

//ENTREGA EL ÍNDICE DONDE ESTÁ LA "ÚLTIMA" PALABRA CURSO 
var texto3 = "Bienvenido al curso de javaScript de ... curso ... Victor Robles";
console.log(texto3.lastIndexOf("curso"));


//OTRO MÉTODO PARA HACER BÚSQUEDAS
console.log(texto3.search("javaScript")); 


//MÉTODO MATCH DEVUELVE UN ARRAY CON LAS PALABRAS
console.log(texto3.match("Robles"));
//ESTE MÉTODO TAMBIÉN DEVUELVE LA CANTIDAD DE VECES QUE ESTÁ UNA PALABRA, USANDO /{palabra}/g
console.log(texto3.match(/de/g));

//MÉTODO QUE EXTRAE LA CANDIDAD DE LETRAS INDICADES DESDE EL ÍNDICE DE LETRAS INDICADO
console.log(texto3.substring(14,5));

//MÉTODO QUE EXTRAE UNA LETRA SEGÚN EL ÍNDICE INDICADO
console.log(texto.charAt(7));

//MÉTODO QUE DEVUELVE TRUE O FALSE SI EL STRING PARTE CON LAS PALABRAS INDICADAS
console.log(texto3.startsWith("Bienvenido al"));

//MÉTODO QUE DEVUELVE TRUE O FALSE SI EL STRING TERMINA CON LAS PALABRAS INDICADAS
console.log(texto3.endsWith("Robles"));

//MÉTODO QUE BUSCA UNA PALABRA EN UN STRING, DEVUELVE TRUE O FALSE
console.log(texto3.includes("Robles"));

//MÉTODO PARA REEMPLAZAR UNA PALABRA POR OTRA
console.log(texto3.replace("javaScript", "Symfony"));

//MÉTODO PARA CORTAR EL STRING E IMPRIMIR DESDE EL ÍNDICE INDICADO DE LA CADENA
console.log(texto3.slice(5));
    //TAMBN SE PUEDE CORTAR CON 2 INDICES
    console.log(texto3.slice(10, 20));

//METODO QUE PONE TODO EL STRING DENTRO DE UN ARRAY
console.log(texto3.split());
    //CON EL SPLIT TAMBÍÉN SE PUEDE HACER UN ARRAY CON VARIOS ELEMENTOS USANDO UN ESPACIO ENTRE LAS PALABRAS
    console.log(texto3.split(" "));

//MÉTODO PARA QUITAR LOS ESPACIOS QUE PUEDAN HABER DELANTE Y AL FINAL DE LA CADENA
console.log(texto3.trim());

