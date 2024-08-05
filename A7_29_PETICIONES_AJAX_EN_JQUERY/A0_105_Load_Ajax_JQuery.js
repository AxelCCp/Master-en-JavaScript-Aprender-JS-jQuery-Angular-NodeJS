$(document).ready(function(){
    console.log("hola");
     $("#datos").load("https://reqres.in");
    
    //GET Y POST    

    //GET
    //          URL                        PARAMS   CALLBACK PARA RECOGER RESULTADO
    $.get("https://reqres.in/api/users", {page : 2}, function(response){
        
        console.log(response);

        response.data.forEach((element, index) => {
            $("#datos2").append("<p>" + element.first_name +"</p>");
        });
    });


    //POST

    var usuario = {
        name : "Androide 17",
        web : "asjdsaklsd.com"
    }

    //las 2 sirven
    //$.post($(this).attr("action"), usuario, function(response){ 
    /*$.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response);
    });*/

    $("#formulario").submit(function(e){
        //para q no redirija el formulario.
        e.preventDefault(); 

        var usuario =
            {
                name : $('input[name = "name"]').val(),
                web : $('input[name = "web"]').val()
            };
        console.log(usuario);

        $.post($(this).attr("action"), usuario, function(response){ 
            console.log(response);
        }).done(function(){
            alert('usuario añadido correctamente');
        });
        //para q no redirija el formulario.
        return false;
    });

});