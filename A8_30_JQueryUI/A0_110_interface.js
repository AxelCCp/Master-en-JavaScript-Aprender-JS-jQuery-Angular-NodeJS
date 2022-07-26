'use strict'

$(document).ready(function(){
    console.log("hola");

    //MOVER ELEMENTO POR LA PÁGINA
    $(".elemento").draggable();

    //REDIMENSIONAR UN ELEMENTO
    $(".elemento").resizable();

    //SELECCIONAR ELEMENTOS
    //$(".lista-seleccionable").selectable();

    //ORDENAR ELEMENTOS
    $(".lista-seleccionable").sortable({
        update: function(event,ui){
            console.log("Ha cambiado la lista");
        }
    });

    //DROP
    $("elementoMovido").draggable();
    $("#area").droppable();


    //CLASE 116 EFECTOS
    $("#mostrar").click(function(){
        //$(".cajaEfectos").toggle("fade");
        //$(".cajaEfectos").fadeToggle();
        //$(".cajaEfectos").effect("explode");
        //$(".cajaEfectos").toggle("explode");
        //$(".cajaEfectos").toggle("blind");
        //$(".cajaEfectos").toggle("slide");
        //$(".cajaEfectos").toggle("drop");
        //$(".cajaEfectos").toggle("fold");
        //$(".cajaEfectos").toggle("puff");
        //$(".cajaEfectos").toggle("scale");
        //$(".cajaEfectos").toggle("shake");
        //$(".cajaEfectos").toggle("shake","slow");
        $(".cajaEfectos").toggle("shake",4000);
    });

});