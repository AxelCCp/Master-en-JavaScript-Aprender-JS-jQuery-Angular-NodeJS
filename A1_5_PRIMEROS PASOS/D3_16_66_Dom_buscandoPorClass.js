'use strict'

var caja3 = document.querySelector("#miCaja");

//SE MODIFICA EL ELEMENTO CON ID MICAJA
caja3.innerHTML = "TEXTO EN LA CAJA DESDE EL JS!";
caja3.style.background = "green";
caja3.style.padding = "20px";
caja3.style.color = "white";
console.log(caja3);

//SE CREA OTRA FUNCIÓN PARA CAMBAR STYLE, PERO ESTA VEZ USANDO CAJA3 QUE SE OBTUVO CON QUERY SELECTOR
function cambiaColor2(color){
    caja3.style.background = color;
}

//CONSEGUIR ELEMENTOS POR SU ETIQUETA .... ESTO ENTREGA UNA VARIABLE QUE PUEDE SER UN ARRAY QUE DEPENDE DE LA CANTIDAD DE DIV QUE HAYA. 
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);
    //SE ACCEDE A UN DIV EN ESPECIAL Y SE MANDA A LA CONSOLA
    var contenidoTexto = todosLosDivs[2].textContent;
    console.log(contenidoTexto);
    //SE MANIPULA EL TEXTO DEL DIV  CON :
    var contenidoTexto2 = todosLosDivs[3];
    contenidoTexto2.innerHTML = "Otro texto para el cuarto div";
    console.log(contenidoTexto2);
    
    //SE RECORREN LOS DIVS CON UN FOR IN 
    var valor;
    for(valor in todosLosDivs){
        //SE CREA UN <P>
        var parrafo = document.createElement("p");
        //SE TOMA EL VALOR QUE LLEGUE DEL BUCLE DE CADA UNO DE LOS DIV
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        //SE METE EL TEXTO DENTRO DEL PARRAFO
        parrafo.appendChild(texto);
        //SE SELECCIONA LA ETIQUETA SECTION Y SE LE AÑADE EL PARRAFO
        document.querySelector("#miSeccion").appendChild(parrafo);
    }
    


//CLASE 66 CONSEGUIR ELEMENTOS POR SU CLASE  ----------------------

//CONSEGUIR LOS ELEMENTOS POR SU CLASS  DE CSS
var divRojos = document.getElementsByClassName("rojo");
console.log(divRojos); //IMPRIME UN ARRAY CON LOS DIVS QUE TIENEN EL NOMBRE DE LA CLASS = ROJO
divRojos[0].style.background = "red";   //SE PINTA EL DIV CON INDICE 0

//PINTA TODOS LOS DIV ROJOS DE AZUL. SE HACE CON UN IF PARA Q NO SE ERROR
for(var div in divRojos){
    if(divRojos[div].className == "rojo"){
        divRojos[div].style.background = "blue";
    }
}