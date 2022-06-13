'use strict'

//ARRAYS --- ARREGLOS --- MATRICEZ 
//COLECCIÓN DE TIPOS DE DATOS,  DE VALORES


var nombre = "Victor Robles";
var nombres = ["asda","sdfsf","werwer","cvxvc",77,true];

var lenguajes = new Array("PHP","JAVA","GO","JS","C++");


console.log(nombres);
console.log(lenguajes);


console.log(nombres[4]);
console.log(lenguajes[2]);

console.log(lenguajes.length);


var elemento = parseInt(prompt("Qué elemento del array quieres?",0));
alert(nombres[elemento]);
console.log(nombres[elemento]);


var elemento2 = parseInt(prompt("Que elemento del array lenguajes quieres?",0));

if(elemento2 > lenguajes.length){
    alert("ingresa un número menor o igual a " + lenguajes.length);
    var elemento2 = parseInt(prompt("Que elemento del array lenguajes quieres?",0));
}else if(isNaN(elemento2)){
    alert("favor ingresa un número");
    var elemento2 = parseInt(prompt("Que elemento del array lenguajes quieres?",0));
}
alert(nombres[elemento2]);
console.log(nombres[elemento2]);


//IMPRIME EL ARRAY CON BUCLE FOR --------------
document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

for(var i=0; i<=lenguajes.length;i++ ){
    document.write("<li>" + lenguajes[i] + "</li>");
    console.log(lenguajes[i]);
}
document.write("</ul>");


//IMPRIME EL ARRAY CON MÉTODO FOR EACH


lenguajes.forEach((elementoX,index,data) => {
    document.write("<li>" + elementoX + "</li>");
    console.log(index + " "+ elementoX);
});
document.write("</ul>");



