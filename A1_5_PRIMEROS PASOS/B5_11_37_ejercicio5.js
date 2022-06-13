'use strict'

/* MUESTRA TODOS LOS NÚMEROS DIVISORES DE UN NÚMERO INGRESADO EN UN PROMPT */

//CÓDIGO MÍO --------------------------------------------------------------------

var num1 = parseInt(prompt("introduce un primer número: ", 0));

var divisor;

for(divisor=num1; divisor>=1; divisor--){
    if(num1 % divisor == 0){
        console.log(divisor);
    }
}

