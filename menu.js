document.addEventListener("DOMContentLoaded", function () {

    const burger = document.querySelector(".burger-nav");
    const menu = document.querySelector("header nav ul");

    // Stop if elements are not found
    if (!burger || !menu) {
        return;
    }


    // Open / close hamburger menu
    burger.addEventListener("click", function (event) {

        event.preventDefault();

        const isOpen = menu.classList.toggle("open");

        burger.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        burger.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    // Close menu after clicking a link
    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("open");

            burger.setAttribute(
                "aria-expanded",
                "false"
            );

            burger.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });


    // Reset menu when changing back to desktop
    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {

            menu.classList.remove("open");

            burger.setAttribute(
                "aria-expanded",
                "false"
            );

            burger.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    });

});
