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


});