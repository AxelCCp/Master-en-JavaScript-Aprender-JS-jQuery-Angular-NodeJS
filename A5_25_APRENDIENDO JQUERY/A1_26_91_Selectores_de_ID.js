'use strict';
//1.-PARA USAR JQUERY LO PRIMERO QUE SE HACE ES COMPROBAR SI EL DOCUMENTO ESTÁ LISTO.
//2.-SELECCIONA ELEMENTOS CON JQUERY SELECTOR
//3.-CON CSS() SE PUEDE MODIFICAR UN ELEMENTO SELECCIONADO, SE LE PASA LA CLASE CSS Y UN VALOR.
//4.-

//SELECTORES DE id

//1
$(document).ready(function(){
    console.log("Estamos listos!!");

    //2
    //var rojo = $("#rojo");
    //console.log(rojo);

    //3
    var rojo = $("#rojo").css("background","red")
                         .css("color","white");
    console.log(rojo);

    var amarillo = $("#amarillo").css("background","yellow")
                                 .css("color","green");

    var verde = $("#verde").css("background","green")
                                 .css("color","blue");


    //SELECTORES DE CLASE 

    //4
    var miClase = $('.zebra');
    miClase.css("border", "5px dashed black");
    console.log(miClase);

    $('.sinBorde').click(function(){
        console.log("click dado");
        $(this).addClass('zebra');
    });

    //SELECTORES DE ETIQUETA
    var parrafos = $('p');
    parrafos.click(function(){
        console.log("otro click dado");
        $(this).removeClass('zebra');
    });


    //SELECTORES DE ATRIBUTOS
    //SELECCIONA TODOS LOS ELEMENTOS CON TITLE GOOGLE
    $('[title="Google"]').css('background','#ccc');
    $('[title="face"]').css('background','blue');


    //OTROS SELECTORES

    //SE LE PONE LA CLASE margen-superior A LOS ENLACES COMO A LOS PARRAFOS
    $('p,a').addClass('margen-superior');


    //DENTRO DEL DIV CAJA ENCUENTRA LOS ELEMENTOS QUE TIENEN LA CLASS RESALTADO
    var busqueda = $('#caja').find('.resaltado');
    console.log(busqueda);


});