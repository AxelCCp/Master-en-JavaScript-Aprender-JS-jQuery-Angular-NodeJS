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


     $("#animame").click(function(){
       $("#caja3").animate({marginLeft:500}, 'slow');
    })

    $("#animame2").click(function(){
       $("#caja4").animate(
            {
                marginLeft:'500px', 
                fontSize: '40px',
                height: '110px'
            }
        , 'slow')
        .animate(
            {
                borderRadius: '90px',
                marginTop: '50px'
            }, 'slow'
        )
        .animate(
            {
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow'
        )
        .animate(
            {
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow'
        );

    })

    /*
    $("#caja4").slideUp('slow', function(){
        console.log('Master en javascript 3 ocultado');
    });
    */

});