'use strict'

window.addEventListener('load',function(){
    
    console.log("DOM cargado");

    //SE OBTIENE EL FORMULARIO
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");

    //SE OCULTA EL DASHED
    box_dashed.style.display = "none";

    //SE CAPTURA EL EVENTO SUBMIT
    formulario.addEventListener('submit',function(){
        console.log("Evento submit capturado");
       
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim()==null || nombre.trim().length==0){
            alert("El nombre no es válido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }
        if(apellidos.trim()==null || apellidos.trim().length==0){
            alert("Los apellidos no son válidos");
            return false;
        }
        if(edad==null || edad<=0 || isNaN(edad)){
            alert("La edad no es válida");
            return false;
        }
        
        //SE MUESTRA EL DASHED
        box_dashed.style.display = "block";

        var datosUsuario = [nombre, apellidos, edad];

        for(var i in datosUsuario){
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[i]);
            box_dashed.append(parrafo);
        }
        
       
       
    });


});