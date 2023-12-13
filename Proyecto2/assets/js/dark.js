document.addEventListener("DOMContentLoaded", () => {
    const darkSwitch = document.querySelector(".switcher__btn");
    const lightIcon = document.querySelector(".switcher__icon-light");
    const darkIcon = document.querySelector(".switcher__icon-dark");
    const logo = document.querySelector(".navbar__logo-img");
    const mobileLogo = document.querySelector(".menu-mobile__logo");

    darkSwitch.addEventListener("click", () => {
        let head = document.head;
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "assets/css/dark.css";
        link.id = "theme-dark";

        let dark = document.querySelector("#theme-dark")

        if (dark) {
            head.removeChild(dark);
            logo.src = "assets/img/logo1.webp";
            mobileLogo.src = "assets/img/logo1.webp";
            lightIcon.style.display = "block";
            darkIcon.style.display = "none";
        } else {
            head.appendChild(link);
            logo.src = "assets/img/logo2.webp";
            mobileLogo.src = "assets/img/logo2.webp";
            lightIcon.style.display = "none";
            darkIcon.style.display = "block";
        }
    })
})
