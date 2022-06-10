'use strict'

//BUCLE WHILE
var year = 2018;

while(year<=2051){
   console.log("estamos en el año: " + year);    
   year++;
}


//BUCLE DO WHILE
var years = 20;
do{
   alert("SOLO CUANDO SEA DIFERENTE A 20");
   years++;
}while(years != 25);


//BREAK

while(year<=2051){
   console.log("estamos en el año: " + year);    
   year++;

   if(year == 2030){
      break;
   }
}