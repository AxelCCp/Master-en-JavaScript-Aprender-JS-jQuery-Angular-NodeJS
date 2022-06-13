'use strict'

//TABLA DE MULTIPLICAR DE UN NÚMERO INTRODUCIDO EN PANTALLA

//CÓDIGO MÍO --------------------------------------------------------------------
    
var num1 = parseInt(prompt("introduce un primer número: ", 0));

var multiplo1;
var multiplo2;

for(multiplo1=num1; multiplo1>=1; multiplo1--){
   
    if(num1%multiplo1==0){
        for(multiplo2=1; multiplo2<=num1; multiplo2++){
            if(multiplo2 * multiplo1 == num1){
                console.log(multiplo2 + " X " +multiplo1);
            }
           
        }
        
    }

}


