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

    $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response);
    });

    $("#formulario").submit(function(){
        
    });

});