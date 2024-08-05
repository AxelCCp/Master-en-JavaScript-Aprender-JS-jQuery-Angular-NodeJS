
$(document).ready(function(){


$("#formulario").submit(function(e) {
    e.preventDefault();

    var usuario = {
        name : $('input[name = "name"]').val(),
        web : $('input[name = "web"]').val()
    };
    
    console.log(usuario);

    /*
    $.post($(this).attr("action"), usuario, function(response){ 
        console.log(response);
    }).done(function(){
        alert('usuario añadido correctamente');
    });
    */

    $.ajax({
        type:'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: $(this).attr("action"), 
        data: usuario,
        beforeSend: function() {
            console.log("enviando usuario...");
        },
        success: function() {
            console.log(response);
        },
        error: function() {
            console.log("ha ocurrido un error...");
        },
        timeout: 2000
    
    });

    return false;

    });

});

