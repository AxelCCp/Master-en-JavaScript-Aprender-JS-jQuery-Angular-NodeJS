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