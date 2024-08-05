$(document).ready(function(){

    //slider    
    if(window.location.href.indexOf('index') > 1){
        $('.slider').bxSlider(
            {
                mode : 'fade',
                captions : false,
                slideWidth : 1200,
                responsive : true,
            }
        );
    }
    

    //posts
    if(window.location.href.indexOf('index') > 1){
        var posts = [
            {
                title : 'prueba de titulo 1',
                date : moment().format('MMMM Do YYYY'),
                content : 'zzz Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum lectus, luctus vitae lacus in, ultrices suscipit felis. Nullam justo lectus, accumsan feugiat augue non, aliquam efficitur urna. Sed id turpis ex. Cras ullamcorper est elit, et eleifend tellus porta in. Sed iaculis nisl ac sem fermentum volutpat. Suspendisse finibus ultricies mi, in vulputate orci pulvinar bibendum. Curabitur interdum posuere odio, sit amet consequat sapien varius ut. Sed sit amet quam sit amet augue malesuada placerat quis non nulla. Integer at tincidunt tortor.'
            },
            {
                title : 'prueba de titulo 2',
                date : moment().format('MMMM Do YYYY'),
                content : 'zzz Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum lectus, luctus vitae lacus in, ultrices suscipit felis. Nullam justo lectus, accumsan feugiat augue non, aliquam efficitur urna. Sed id turpis ex. Cras ullamcorper est elit, et eleifend tellus porta in. Sed iaculis nisl ac sem fermentum volutpat. Suspendisse finibus ultricies mi, in vulputate orci pulvinar bibendum. Curabitur interdum posuere odio, sit amet consequat sapien varius ut. Sed sit amet quam sit amet augue malesuada placerat quis non nulla. Integer at tincidunt tortor.'
            },
            {
                title : 'prueba de titulo 3',
                date : moment().format('MMMM Do YYYY'),
                content : 'zzz Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum lectus, luctus vitae lacus in, ultrices suscipit felis. Nullam justo lectus, accumsan feugiat augue non, aliquam efficitur urna. Sed id turpis ex. Cras ullamcorper est elit, et eleifend tellus porta in. Sed iaculis nisl ac sem fermentum volutpat. Suspendisse finibus ultricies mi, in vulputate orci pulvinar bibendum. Curabitur interdum posuere odio, sit amet consequat sapien varius ut. Sed sit amet quam sit amet augue malesuada placerat quis non nulla. Integer at tincidunt tortor.'
            },
            {
                title : 'prueba de titulo 4',
                date : moment().format('MMMM Do YYYY'),
                content : 'zzz Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum lectus, luctus vitae lacus in, ultrices suscipit felis. Nullam justo lectus, accumsan feugiat augue non, aliquam efficitur urna. Sed id turpis ex. Cras ullamcorper est elit, et eleifend tellus porta in. Sed iaculis nisl ac sem fermentum volutpat. Suspendisse finibus ultricies mi, in vulputate orci pulvinar bibendum. Curabitur interdum posuere odio, sit amet consequat sapien varius ut. Sed sit amet quam sit amet augue malesuada placerat quis non nulla. Integer at tincidunt tortor.'
            },
            {
                title : 'prueba de titulo 5',
                date : moment().format('MMMM Do YYYY'),
                content : 'zzz Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum lectus, luctus vitae lacus in, ultrices suscipit felis. Nullam justo lectus, accumsan feugiat augue non, aliquam efficitur urna. Sed id turpis ex. Cras ullamcorper est elit, et eleifend tellus porta in. Sed iaculis nisl ac sem fermentum volutpat. Suspendisse finibus ultricies mi, in vulputate orci pulvinar bibendum. Curabitur interdum posuere odio, sit amet consequat sapien varius ut. Sed sit amet quam sit amet augue malesuada placerat quis non nulla. Integer at tincidunt tortor.'
            },
        ];


        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            console.log(post);
            $('#posts').append(post);
        });
    }


    //selector de tema
    var theme = $("#theme");
    $("#to-dark").click(function(){
        theme.attr("href", "css/dark.css");
    })
    $("#to-purple").click(function(){
        theme.attr("href", "css/purple.css");
    })
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    })


    //scroll arriba
    $('subir').click(function(){
        $('html, body').animate({scrollTop : 0}, 500);
        return false;
    });


    //login falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');

    if(form_name != null && form_name != 'undefined'){
        
        $('#about p').html('<strong>Welcome ' + form_name + '</strong>');

        var about_parrafo = $('#about p');

        about_parrafo.append("<a href='#' id='logout'>Logout</a>");

        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }


    //acordeon
    if(window.location.href.indexOf('about') > 1){
       $('#acordeon').accordion({
            'background' : '#242424',
       });
    }
    
    //reloj
    if(window.location.href.indexOf('reloj') > 1){
        setInterval(function(){
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
        
    }


    //validaciones para formularui de contacto
    if(window.location.href.indexOf('contact') > 1){

        //selecciona los campos input con nombre date,  los pasa a tipo datepicker y les formatea la fecha
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang : 'es',
            //errorMessagePosition: 'top',
            //scrollToTopOnError: true
        });
    }
});