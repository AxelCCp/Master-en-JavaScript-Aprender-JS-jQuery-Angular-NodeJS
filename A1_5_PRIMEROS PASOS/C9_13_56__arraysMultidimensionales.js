'use strict'

var categorias = ['acción','terror','comedia'];
var peliculas = ['la verdad duele', 'la vida es bella','gran torino'];

var cine = [categorias,peliculas];

console.log(cine);

//PARA ACCEDER A LA CATEGORÍA TERROR
console.log(cine[0][1]);
//PARA ACCEDER A GRAN TORINO
console.log(cine[1][2]);
//PARA AGERGAR ELEMENTOS AL ARRAY
peliculas.push("batman");
console.log(cine);

//AGREGANDO PELICULAS DESDE LA VENTANA
var elemento = "";
do{
    elemento = prompt("introduce tu pelicula: ");
    peliculas.push(elemento);
}while(elemento != "acabar");

peliculas.pop(); //CON POP SE SACA EL ELEMENTO ACABAR DE ARRAY PARA QUE SOLO QUEDEN LAS PELIS.
console.log(peliculas);

//--------------------------------

//ELIMINAR UN ELEMENTO DEL ARRAY
var categorias2 = ['acción','terror','comedia'];
var peliculas2 = ['la verdad duele', 'la vida es bella','gran torino'];
var cine2 = [categorias2,peliculas2];
console.log(cine2);

//SE BUSCA EL ÍNDICE DE LO QUE SE QUEIRE ELIMINAR --- SE ELIMINARÁ GRAN TORINO.
var indice =peliculas2.indexOf('gran torino');
console.log(indice);
    //SE PONE MAYOR Q -1 , YA QUE SI ES -1 , QUIERE DECIR QUE NO ENCONTRÓ EL ÍNDICE DE LA PELI QUE SE ESTÁ BUSCANDO.
    //EL MÉTODO SPLICE PERMITE BORRAR TANTOS X NÚMEROS DE INDICES HACIA ADELANTE, DESDE EL ÍNDICE INDICADO. ESTO SE INDICA EN EL 2DO PARAMETRO.
if(indice > -1){
    peliculas2.slice(indice,1)
}


//CONVERTIR UN ARRAY A UN STRING SEPARADO POR COMAS
peliculas2_string = peliculas2.join();
console.log(peliculas2_string);


//CONVERTIR UNA CADENA EN UN ARRAY
var cadena1 = "texto1, texto2, texto3, texto4, texto5";
var cadena1_array = cadena1.split();
console.log(cadena1_array);


//CLASE59: ORDERNAR EL ARRAY
var categorias3 = ['acción','terror','comedia'];
var peliculas3 = ['la verdad duele', 'la vida es bella','gran torino'];
var cine3 = [categorias3,peliculas3];

//SE ORDENA EL ARRAY DE MANERA ALFABÉTICA
peliculas3.sort();
console.log(peliculas3);

//SE INVIERTE EL ORDEN DE LAS VARIABLES DENTRO DEL ARRAY
peliculas3.reverse();
console.log(peliculas3);


//CLASE60 : RECORRER EL ARRAY CON UN FOR IN
for(let peli in peliculas3){
    console.log(peliculas3[peli]);
}


//CLASE61 : BUSQUEDAS DENTRO DE UN ARRAY ... SE USA UNA FUNCIÓN CALL BACK

var busqueda = categorias3.find(function(cat){
    return cat == "terror";
});
console.log(busqueda);

//ESTO ES LO MISMO PERO ABREBIADO
var busqueda2 = categorias3.find(cat => cat == "terror");
console.log(busqueda2);


//METODO SOME, SI UN VALOR ES MAYOR , MENOR , IGUAL A...     ...AQUÍ SE PREGUNTA SI HAY UN VALOR MAYOR A 30  ...DEVUELVE BOOLEANO
var precios = [10, 20, 30, 60, 70, 90, 150];
var busquedaPrecio = precios.some(precio => precio > 30);
console.log(busquedaPrecio);