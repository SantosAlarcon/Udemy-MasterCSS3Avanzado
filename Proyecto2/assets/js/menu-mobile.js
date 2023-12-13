document.addEventListener("DOMContentLoaded", () => {
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");
    let btn_close = document.querySelector(".menu-mobile__close");

    // Al pulsar el botón del menú móvil se muestra el menú de navegación
    mobile_btn.addEventListener("click", () => {
        let show = document.querySelector(".menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
            document.body.style.overflowX = "visible";
        } else {
            mobile_menu.classList.add("menu-mobile--show");
            document.body.style.overflowX = "hidden";
        }
    })

    // Se oculta el menú cuando la anchura es igual o superior a los 1000 píxeles.
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if (window_width >= 1000) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    })

    // Ocultar menú al pulsar el bottón de cerrar
    btn_close.addEventListener("click", () => {
        mobile_menu.classList.remove("menu-mobile--show");
    })

    // Desplegar submenús
    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;
            
            if (submenu.className === "menu-mobile__submenu-mobile") {
                if (submenu.style.display === "block") {
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";
                }
            }
        })
    })
})
