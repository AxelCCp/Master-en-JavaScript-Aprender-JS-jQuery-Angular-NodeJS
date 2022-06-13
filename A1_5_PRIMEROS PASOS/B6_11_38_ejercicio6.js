'use strict'

/*QUE UN NÚMERO NOS DIGA SI ES PAR O IMPAR
  VENTANA PROMPT
  SI NO ES VÁLIDO, QUE NOS PIDA DE NUEVO EL NÚMERO
*/

//CÓDIGO MÍO --------------------------------------------------------------------


    
    var num1 = parseInt(prompt("introduce un  número: ", 0));

while(isNaN(num1)){
    
    var num1 = parseInt(prompt("introduce un  número: ", 0));

}

    if(num1%2==0){
        console.log("El número " + num1 + " es par");
    }else if(num1%2!=0){
        console.log("El número " + num1 + " es impar");
    }
