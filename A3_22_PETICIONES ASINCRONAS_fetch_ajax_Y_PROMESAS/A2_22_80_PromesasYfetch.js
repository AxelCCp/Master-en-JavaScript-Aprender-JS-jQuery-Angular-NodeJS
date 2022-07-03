'use strict';

// EL CODIGO ORIGINAL VIENE DE LA CLASE ANTERIOR
/*
var usuarios = [];
fetch('https://reqres.in/api/users')
    
    .then(data => data.json())
    
        //5 data
    .then(users => {
                   // 5 data
        usuarios = users.data;
        console.log(usuarios);
    });
*/
    
   //EL CÓDIGO SE DESACOPLA PARA QUE NO HAYAN FUNCIONES CALL BACK DENTRO DE OTRAS FUNCIONES CALLBACK. 
    
    var div_usuarios = document.querySelector("#usuarios");
    var div_janet = document.querySelector("#janet");
   
    
    getUsuarios()
        .then(function(data) {
        return data.json()
    }) 
    .then(function(users) {        
        listadoUsuarios(users.data);
        return getJanet(janet);
    })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);
        });

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    function listadoUsuarios(usuarios){
        usuarios.map((user,i) => {
            let nombre = document.createElement("h2");
            nombre.innerHTML = i + user.first_name + " " + user.last_name;
            div_usuarios.appendChild(nombre);
        });
    }

    function mostrarJanet(user){
            let nombre = document.createElement("h4");
            nombre.innerHTML = user.first_name + " " + user.last_name;
            div_janet.appendChild(nombre);
    }



