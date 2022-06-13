'use strict'

//PARÁMETROS DE TIPO REST 

function listadoFrutas(fruta1, fruta2, fruta3, ...restoDeFrutas){
    console.log("fruta1: " + fruta1);
    console.log("fruta2: " + fruta2);
    console.log("fruta3: " + fruta3);
    console.log(restoDeFrutas);  //EL RESTO DE LAS FRUTAS LAS AGRUPA EN UN ARRAY
}

listadoFrutas("limon","pera","manzana","sandía","naranja","fresa");



//PARÁMETROS DE TIPO SPREAD 

var masFrutas = ["kiwi","melón","uva","papaya"]; 
listadoFrutas(...masFrutas,"limon","pera","manzana");