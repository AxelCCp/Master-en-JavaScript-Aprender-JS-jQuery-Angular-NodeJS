'use strict'
	//ESTO VA EN EL INDEX PARA LLAMAR AL JS
	//<script type="text/javascript" src="B2_11_34_ejercicio2.js"></script>
	

/*
USANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NÚMEROS INTRODUCIDOS, HASTA INTRODUCIR UN NÚMERO NEGATIVO Y AHÍ MOSTRAR EL RESULTADO. 

*/

	
var suma = 0;
var contador = 0; 	


do{
		var numero = parseInt(prompt("introduce numeros hasta que metas uno negativo",0));
		if(isNaN(numero)){
			numero = 0;
		}else if(numero >= 0){
			//suma = suma + numero;
			suma += numero; 
			contador++;
		}
		console.log(suma);
		console.log(contador);
}while(numero >= 0);


alert("La suma de todos los números es = " + suma);
alert("La media de la suma de todos los números es = " + (suma/2));
alert("El promedio de la suma de todos los números es = " + (suma/contador));