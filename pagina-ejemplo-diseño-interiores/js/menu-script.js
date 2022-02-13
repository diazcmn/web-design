let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');
//variables para elemento id del html

btnMenu.addEventListener('click', function() {
    menu.classList.toggle('mostrar');
});

//listener llama al evento click gerendo una funcion, esa funcion es que al elemento menu se le agrega la clase (classlist.togle mostrar en css)