document.querySelector("#timestamp").value =
    new Date().toISOString();

const menuBtn =
    document.querySelector("#menuBtn");

const navMenu =
    document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;