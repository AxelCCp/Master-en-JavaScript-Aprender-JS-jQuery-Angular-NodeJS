'use strict';

$(document).ready(function(){

    alert("A2_27_96_eventosRaton_hover.js ... cargado");

    //MOUSE OVER - Y - MOUSE OUT
    var caja = $("#caja2");

    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    });


    //CLASE 98 : CLICK Y DOBLE CLICK
    caja.click(function(){
        $(this).css("background","blue").css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","pink").css("color","yellow");
    });


    //EVENTOS FOCUS Y BLUR
    var nombre = $("#nombre");
    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });

    nombre.blur(function(){
        $(this).css("border","2px solid #ccc");
                    //SE GUARDA EL VALOR DEL INPUT 
        $("#datos").text($(this).val()).show();
    });

});

