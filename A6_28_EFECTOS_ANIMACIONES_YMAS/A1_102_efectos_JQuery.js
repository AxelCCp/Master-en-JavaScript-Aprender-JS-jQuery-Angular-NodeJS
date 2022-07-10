'use strict';
$(document).ready(function(){
    //alert("efectos");

    $("#mostrar").click(function(){
        //$("#caja").show("normal");
        $("#caja").fadeIn("normal");
    });

    $("#ocultar").click(function(){
        //$("#caja").hide("normal");
        $("#caja").fadeOut("normal");
    });


    $("#todoEnUno").click(function(){
       // $("#caja2").toggle('fast');
       $("#caja2").fadeToggle('fast');
    })

})