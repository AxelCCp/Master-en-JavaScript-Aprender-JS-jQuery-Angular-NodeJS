'use strict'

$(document).ready(function(){

    reloadLinks();

   console.log($('a').length);

    $('a').each(function(index){
        console.log($(this));
    });

    //IMPRIME LO ENLACES
    $('a').each(function(index){
        console.log($(this).attr("href"));
    });


    function reloadLinks(){
        
        $('a').each(function(index){
            var that = $(this);
            var enlace = that.attr("href");
            that.text(enlace);
        });
    }



    $("#add_button").click(function(){
        console.log($("#add_link").val());
                //after()
                //before()
                //.html()
                //.prepend()
        $("#menu").append('<a href=' + $("#add_link").val() + '"></a>');
        reloadLinks();
    });

});