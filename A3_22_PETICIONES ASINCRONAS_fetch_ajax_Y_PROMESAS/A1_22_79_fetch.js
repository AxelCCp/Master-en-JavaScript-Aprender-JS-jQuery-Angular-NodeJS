'use strict'

//https://jsonplaceholder.typicode.com
//https://jsonplaceholder.typicode.com/users
//https://reqres.in/api/users

// FETCH  Y PETICIONES A SERVICIOS / APIS REST
//FETCH ES UN MÉTODO SUSTITUTO QUE HACE PETICIONES AJAX.

//1.-AL CARGAR LA PÁGINA SE VA A REALIZAR UNA PETICIÓN AJAX CON FETCH A LA URL.
//1.1.-LA URL ES UNA PROMESA Y EN LA PROMESA SE TIENE EL MÉTODO THEN().
//2.-THEN() : RECOJE DATOS. RECIBE UNA FUNCIÓN CALLBACK QUE RECIBE UN PARÁMETRO DATA..
//..Y LO CONVIERTE A JSON.
//3.-SE VUELVE A EJECUTAR EL THEN(), SE RECOJE LA DATA DENUEVO. SE USA UNA NUEVA..
//..FUNCIÓN CALLBACK Y SE RECOGEN LOS DATOS DEL INTERIOR. DATA ES UN ARRAY.
//4.-SE DEFINE VARIABLE USUARIOS

//5.-CAMBIANDO POR users ... SE OBTIENE EL ARRAY DE USUARIOS LIMPIO.

//4
var usuarios = [];

//1
fetch('https://reqres.in/api/users')
    //2
    .then(data => data.json())
    //3
        //5 data
    .then(users => {
                   // 5 data
        usuarios = users.data;
        console.log(usuarios);
    });

    
    //6.- SE USA UNA FUNCIÓN MAP, QUE ES COMO UN FOR EACH PARA RECORRER EL ARRAY
    //first_name Y last_name,  VIENEN DEL JSON CON EL ARRAY.
    //7.-SE OBTIENE EL DIV DE USUARIOS DEL HTML
    //8.-SE PEGA LA WEA

    //7
    var div_usuarios = document.querySelector("#usuarios");
    var usuarios2 = [];
    fetch('https://reqres.in/api/users')
    .then(function(data) {
        return data.json()
    }) 
    .then(function(users) {        
        usuarios2 = users.data;
        console.log(usuarios2);
        //6
        usuarios.map((user,i) => {
            let nombre = document.createElement("h2");
            nombre.innerHTML = i + user.first_name + " " + user.last_name;
            //8
            div_usuarios.appendChild(nombre);
        });
    });



