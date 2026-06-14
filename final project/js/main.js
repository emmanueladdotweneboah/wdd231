// ======================================
// Anime Explorer
// main.js
// ======================================

// Mobile Navigation

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen =
            navigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}

// Close mobile menu when screen becomes large

window.addEventListener("resize", () => {

    if (window.innerWidth >= 768) {

        navigation?.classList.remove("open");

        menuButton?.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});

// Footer year (optional enhancement)

const footerCopyright =
    document.querySelector(".copyright");

if (footerCopyright) {

    footerCopyright.textContent =
        `© ${new Date().getFullYear()} Anime Explorer`;

}

// Smooth scroll support (optional)

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (targetId.length > 1) {

            event.preventDefault();

            const target =
                document.querySelector(targetId);

            target?.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});