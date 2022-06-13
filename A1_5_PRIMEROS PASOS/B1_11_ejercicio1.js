
//ESTO VA EN EL INDEX PARA LLAMAR AL JS
//<script type="text/javascript" src="B1_11_ejercicio1.js"></script>


'use strict'

/*
CLASE 32: PROGRAMA QUE PIDA 2 NUMEROS Y QUE DIGA SI SON IGUALES	
CLASE 33: SI EL VALOR INGRESADO NO ES UN NUMERO O SON VALORES MENORES O IGUALES A 0, QUE VUELVA A PEDIR EL NUMERO.  
*/


	var numero1 =  parseInt(prompt("ingrea el primer número: ", 0));
	var numero2 = parseInt(prompt("ingresa el segundo número: ", 0));

	console.log(numero1,numero2);

	while(numero1<=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
		
		var numero1 =  parseInt(prompt("ingrea el primer número: ", 0));
		var numero2 = parseInt(prompt("ingresa el segundo número: ", 0));	
		
	}



	if(numero1 == numero2){
		alert("los números son iguales");
	}else if(numero1 >  numero2){
		alert("el número " + numero1 + " es mayor que el numero " +  numero2);
	}else if(numero1 <  numero2){
		alert("el número " + numero1 + " es menor que el numero " +  numero2);
	}else{
		alert("introduce números correctos")
	}




