'use strict'


//UN CALLBACK ES UNA FUNCIÓN QUE SE EJECUTA DENTRO DE OTRA FUNCIÓN.

function sumame(num1,num2,sumaYmuestra,sumaPorDos){
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}


sumame(5,7,function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por 2 es: ", (dato*2));
});



/*
UNA FUNCIÓN CALL BACK ES UNA FUNCIÓN QUE SE PASA A OTRA FUNCIÓN 
COMO UN ARGUMENTO, Y QUE LUEGO SE INVOCA DENTRO DE LA FUNCIÓN EXTERNA
PARA COMPLETAR ALGÚN TIPO DE ACCIÓN.
*/

/*LAS FUNCIONES CALL BACK ASEGURAN QUE UN SEGUNDO CÓDIGO NO SE EJECUTE 
HASTA QUE UN PRIMER CÓDIGO NO HAYA TERMINADO DE EJECUTARSE.
*/

//EJ: 
function primero(segundo){            // setTimeout() es una función que
    setTimeout(function(){            // recibe en su 1er param una función 
        console.log("PRIMERO");       // que refiere a lo que queremos ejecutar
        segundo();                    // dentro del setTimeOut().
    }, 3000);  
}                                     // Mientras que el segundo parámetro lleva el tiempo.                        
                                      //
function segundo(){                        
    console.log("SEGUNDO");       
}

primero(segundo);
