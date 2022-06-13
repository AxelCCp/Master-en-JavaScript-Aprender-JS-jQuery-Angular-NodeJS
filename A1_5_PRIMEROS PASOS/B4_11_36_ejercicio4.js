'use strict'

/*MOSTRAR TODOS LOS NÚMEROS IMPARES INTRODUCIDOS ENTRE 2 NÚMEROS*/

//CÓDIGO MÍO --------------------------------------------------------------------

var num1 = parseInt(prompt("introduce un primer número: ", 0));
var num2 = parseInt(prompt("introduce un segundo número: ", 0));

console.log(num1 + " y " + num2);

for(var i=num1; i<=num2; i++){
    
    if(i % 2 != 0){
        console.log(i);
    }
}

//CÓDIGO PROFESOR ---------------------------------------------------------------

while(num1 < num2){
    num1++;
    if(num1 % 2 != 0){
        console.log("El " + num1 + " es impar.");
    }    
}