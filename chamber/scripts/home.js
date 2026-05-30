const apiKey = "YOUR_API_KEY_HERE";

const latitude = 5.6037;
const longitude = -0.1870;

const weatherURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();

        document.querySelector("#temp").textContent =
            `Current: ${data.list[0].main.temp}°C`;

        document.querySelector("#description").textContent =
            data.list[0].weather[0].description;

        document.querySelector("#forecast").innerHTML = `
            <p>Day 1: ${data.list[8].main.temp}°C</p>
            <p>Day 2: ${data.list[16].main.temp}°C</p>
            <p>Day 3: ${data.list[24].main.temp}°C</p>
        `;
    } catch (error) {
        console.error("Weather error:", error);
    }
}

getWeather();

async function getSpotlights() {

    const response = await fetch("data/members.json");
    const data = await response.json();

    // ONLY SILVER + GOLD (fix requirement)
    let filtered = data.filter(m => m.membership >= 2);

    // RANDOMIZE
    filtered.sort(() => Math.random() - 0.5);

    const selected = filtered.slice(0, 3);

    displaySpotlights(selected);
}

function displaySpotlights(members) {

    const container = document.querySelector("#spotlights");
    container.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
            <img 
                src="images/${member.image}" 
                alt="${member.name}"
                loading="lazy"
                width="220"
                height="140">

            <h3>${member.name}</h3>

            <p>${member.phone}</p>
            <p>${member.address}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>
                Membership: ${member.membership === 3 ? "Gold" : "Silver"}
            </p>
        `;

        container.appendChild(card);
    });
}

getSpotlights();

/* HAMBURGER MENU FIX */
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

/* FOOTER DATES */
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;