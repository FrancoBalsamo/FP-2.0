function funcionMenuHamburguesa(){ //esta función se va a encargar de mostrar los elementos del menú al presionarlo

    //creamos una variable con el nombre x y le asignamos nuestro topnav
    var x = document.getElementById("topnavhome");

    //creamos un condicional para que diferencie el tipo de
    //menú a mostrar según lo establecido en el css

    //si la variable x contiene topnav debe crear el responsive
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}