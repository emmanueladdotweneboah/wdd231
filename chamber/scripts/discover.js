import { places }
    from "../data/places.mjs";

const grid =
    document.querySelector("#discoverGrid");

places.forEach((place, index) => {

    const card =
        document.createElement("article");

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

<button>
Learn More
</button>

`;

    grid.appendChild(card);

});


// Local Storage Visit Message

const visitMessage =
    document.querySelector("#visitMessage");

const lastVisit =
    localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

}
else {

    const days =
        Math.floor(
            (now - lastVisit) /
            86400000
        );

    if (days < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    }
    else if (days === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    }
    else {

        visitMessage.textContent =
            `You last visited ${days} days ago.`;

    }

}

localStorage.setItem(
    "lastVisit",
    now
);


// Hamburger

const menuBtn =
    document.querySelector("#menuBtn");

const navMenu =
    document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


// Footer

document.querySelector("#year")
    .textContent =
    new Date().getFullYear();

document.querySelector("#lastModified")
    .textContent =
    `Last Modified:
${document.lastModified}`;