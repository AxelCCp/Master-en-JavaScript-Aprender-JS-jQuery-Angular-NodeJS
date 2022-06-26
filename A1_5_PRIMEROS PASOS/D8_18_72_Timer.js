'use strict'

window.addEventListener('load',function(){


    function intervalo(){
            //TIMERS
                    //setTimeout
        var tiempo = setInterval(function(){
            
            console.log("Set interval ejecutado");
            
            //DESPUÉS DE 3 SEG AUMENTARÁ TAMAÑO DE LETRA DEL 1ER H1
            
            var encabezado = document.querySelector("h1");

            if(encabezado.style.fontSize == "50px"){
                
                encabezado.style.fontSize ="20px";

            }else{

                encabezado.style.fontSize ="50px";
            }

        }, 500);

        return tiempo;
    }

    //SE CREA VARIABLE TIEMPO QYE LLAMA AL MÉTODO INTERVALO()
    var tiempo = intervalo();


    //BOTÓN PARA INICIAR PARPADEO
    var start = document.querySelector("#start");
    start.addEventListener('click', function(){
        alert("has iniciado el intervalo en bucle");
        intervalo();
    });

    //BOTÓN PARA PARAR PARPADEO
    var stop = document.querySelector("#stop");
    
    stop.addEventListener('click', function(){
        alert("has parado el intervalo en bucle");
        clearInterval(tiempo);
    });




});