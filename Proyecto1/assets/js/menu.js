document.addEventListener("DOMContentLoaded", () => {
    const responsiveButton = document.querySelector(".layout__menu-toggle");
    const icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    const icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    const aside = document.querySelector(".layout__aside");
    const content = document.querySelector(".layout__content");

    responsiveButton.addEventListener("click", () => {
        const visible = document.querySelector(".layout__aside--visible");

        if (!visible) {
            aside.classList.add("layout__aside--visible");
            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1;
            content.style.overflow
        } else {
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }
    })

    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);

        if (size <= 1060) {
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;

        }
    })

})


