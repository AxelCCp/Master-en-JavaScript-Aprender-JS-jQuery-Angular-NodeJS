'use strict';
    
    //1.-SE CREA UNA FUNCIÓN CON UN OBJ JSON Y SE PASA A STRING.
    //2.-SE CREA UNA PROMESA. AL OBJ PROMESA SE LE PASA POR PARÁMETRO AAL CONSTRUCTOR,.. 
    //..UN CALLBACK RESOLVE Y REJECT. ES DECIR Q LA PROMESA SE A RESUELTO O NO SE A RESUELTO.
    //3.-SE LLAMA AL MÉTODO GETINFO().
    //4.-CON LA PROMESA YA DISPONIBLE SE HACE UN THEN CON UNA FUNCIÓN CALLBACK CON LOS ..
    //..DATOS QUE DEVUELVE.
    //CLASE 82 
    //5.-SE CAPTURA EL ERROR CON UN CATCH

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
            //3
            return getInfo();
        })
        .then(data => {
            console.log(data);
        })
       //5
        .catch(error => {
            console.log(error + "1234567");
            alert("ERROR EN LAS PETICIONES")
        });

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/222');
    }

    //1
    function getInfo(){
         //1.1
         var profesor = {
            nombre : 'Victor',
            apellidos : 'Robles',
            url : 'https://victorroblesweb.es' 
        };
        //2
        return new Promise((resolve, reject) => {
            var profesor_String = JSON.stringify(profesor);
            if(typeof profesor_String != 'string'){
                //DENEGAR LA PROMESA.
                return reject('Error');
            }else{
                //EXITO 
                return resolve(profesor_String);
            }

        });
       
        
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



