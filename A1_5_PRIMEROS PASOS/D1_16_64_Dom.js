'use strict'

//CLASE 64 : DOM  : DOCUMENT OBJECT MODEL


//1.-SE OBTIENE EL ELEMENTO CON ID MICAJA
var caja = document.getElementById("miCaja");
//console.log(caja);
var caja2 = document.getElementById("miCaja").innerHTML;
console.log(caja2);

//2.-SE MODIFICA EL ELEMENTO CON ID MICAJA
caja.innerHTML = "TEXTO EN LA CAJA DESDE EL JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
console.log(caja);

//3.-LLAMANDO A LA FUNCIÓN DESDE LA CONSOLA SE LE CAMBIA EL COLOR .... ASÍ SE LLAMA A LA FUNCTION DESDE LA CONSOLA : cambiaColor("green");
function cambiaColor(color){
    caja.style.background = color;
}


//4.-TABM SE LE PUEDEN AGREGAR OTROS ATRIBUTOS A UNA ETIQUETA HTML COMO UN CLASS
caja.className = "hola hola2";
console.log(caja);


//5.-......TAMBIEN SE PUEDE OBTENER UN ELEMENTO HTML CON QUERY SELECTOR........
// "#" : SE SELECCIONA A TRAVÉS DEL ID DEL ELEMENTO HTML.
// "." : SE SELECCIONA A TRAVES DEL ATRIBUTO CLASS DEL ELEEMENTO HTML.
var caja3 = document.querySelector("#miCaja");


//6.- SE CREA OTRA FUNCIÓN PARA CAMBAR STYLE, PERO ESTA VEZ USANDO CAJA3 QUE SE OBTUVO CON QUERY SELECTOR
function cambiaColor2(color){
    caja3.style.background = color;
}
