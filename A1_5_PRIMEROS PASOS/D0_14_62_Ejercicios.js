'use strict'

/*
PIDE 6 NÚMEROS POR PANTALLA Y PONLOS EN UN ARRAY.
MOSTRAR EL ARRAY EN LA CONSOLA Y EN UNA PAGINA.
ORDENARLO Y MOSTRARLO.
INVERTIR SU ORDEN Y MOSTRARLO.
MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY.
BUSCAR UN VALOR INTRODUCIDO POR EL USUARIO, QUE DIGA SI LO ENCUENTRA Y SU ÍNDICE.
*/


var num;
var numss=[];

for(var i=0; i<=6;i++){
   num = parseInt(prompt("Ingrega un numero: ",0)); 
   numss.push(num);
}
console.log(numss);


var texto1 = `<h2>ARRAY ORIGINAL</h2>
        <h3>${numss}</h3> 
        <h4>Cantidad de elementos del array : ${numss.length} </h4>
`;

document.write(texto1);

document.write("-----------------------");

var busqueda = parseInt(prompt("Busca un numero dentro del Array: ",0));

var resp = false;

for(var i=0;i<numss.length;i++){
    if(busqueda == numss[i]){
        resp = true;
    }   
}

if(resp == true){
    console.log("se encontró el elemento buscado " + busqueda);
}else{
    console.log("no se encontró el elemento buscado " + busqueda);
}



//----------------CÓDIGO DEL PROFE 


var numeros = new Array(6);
for(var i=0; i<=5;i++){
    numeros[i] = parseInt(prompt("ingresa un número",0));
}
console.log(numeros);

//SE RECORRE EL ARRAY CON FOR EACH
numeros.forEach((numero,index) => {
    document.write(numero);
    console.log(numero);
});

//ORDENAR LOS NÚMEROS ... A SORT SE LE PASA UNA FUNCIÓN DEL CALL BACK
numeros.sort(function(a,b){return a-b});
console.log(numeros);

numeros.reverse();
console.log(numeros);
console.log(numeros.length);

var busquedaX = parseInt(prompt("busca un número",0));
var posicion = numeros.findIndex(numero => numero == busquedaX);
if(posicion && posicion != -1){
    console.log("encontrado, está en la posición " + posicion);
}else{
    onsole.log("no encontrado");
}



