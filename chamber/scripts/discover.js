import { places } from "../data/places.mjs";

const grid = document.querySelector("#discoverGrid");

places.forEach((place, index) => {

    const card = document.createElement("article");

    card.classList.add(`card${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img
                src="images/${place.image}"
                alt="${place.name}"
                loading="lazy"
                width="300"
                height="200">
        </figure>

        <address>
            ${place.address}
        </address>

        <p>
            ${place.description}
        </p>

        <button
            type="button"
            aria-label="Learn more about ${place.name}">
            Learn More
        </button>
    `;

    grid.appendChild(card);

});


// VISITOR MESSAGE

const visitMessage =
    document.querySelector("#visitMessage");

const lastVisit =
    localStorage.getItem("lastVisit");

const currentVisit =
    Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const milliseconds =
        currentVisit - Number(lastVisit);

    const days =
        Math.floor(milliseconds / 86400000);

    if (days < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (days === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${days} days ago.`;

    }

}

localStorage.setItem(
    "lastVisit",
    currentVisit
);


// HAMBURGER MENU

const menuBtn =
    document.querySelector("#menuBtn");

const navMenu =
    document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


// FOOTER

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;