'use strict'


/*HACER UN PROGRAMA QUE MUESTRE TODOS LOS NÚMEROS ENTRE 2 NÚMEROS INGERSADOS POR EL USUARIO*/

//CÓDIGO MÍO --------------------------------------------------------------------

var numero1 = parseInt(prompt("Ingresa el primer número : "));
var numero2 = parseInt(prompt("Ingresa el segundo número: "));

console.log(numero1 + " y " + numero2);

var i = numero1;

while(i <= numero2 ){
    console.log(i);
    i++;
}


//CÓDIGO PROFESOR --------------------------------------------------------------------

var numero1 = parseInt(prompt("Ingresa el primer número : ",0));
var numero2 = parseInt(prompt("Ingresa el segundo número: ",0));


document.write("<h1>De " + numero1 + " a " + numero2 + " están estos números: </h1>");

for(var i=numero1 ; i<=numero2; i++){
    document.write(i + "<br>");
}


