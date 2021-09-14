/*/*asigna las constantes id**/
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
/*escucha el evento click y dispara una funcion*/
btnMenu.addEventListener("click", function () {
    /* agrega una clase mostrar(Se crea mostrar en CSS)*/
    menu.classList.toggle("mostrar");


});


/*no puedo trabajar por id por que son varios submenu trabajo con clases*/

const subMenuBtn = document.querySelectorAll(".submenu-btn");

/*Recorrido para detectar cual de los submenu se le ha dado click */
for (let i = 0; i < subMenuBtn.length; i++) {
    /*Detecte que submenu dio click*/
    subMenuBtn[i].addEventListener("click", function () {
        /* Para que funcione cuando el ancho de de la venta es menor a 1024*/
        if (window.innerWidth < 1024) {
            /* Seleciona al elemento siguiente del que le di click */
            const subMenu = this.nextElementSibling;
            /*el alto de ese elemento*/
            const height = subMenu.scrollHeight;
            /*Se agrega una clase directamente desplegar*/
            if (subMenu.classList.contains("desplegar")) {
              
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");

            } else {
                /*si  la tiene le remueve la clase desplegar y le coloca la altura del subMenu*/
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";

            }

        }


    });




}


