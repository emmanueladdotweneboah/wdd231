const apiKey = "8f5bf5cc19f87ec5eafec193e075c8fc";

const latitude = 5.6037;
const longitude = -0.1870;

const weatherURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;


async function getWeather() {

    const response =
        await fetch(weatherURL);

    const data =
        await response.json();

    displayWeather(data);

}

function displayWeather(data) {

    document.querySelector("#temp")
        .textContent =
        `Current: ${data.list[0].main.temp}°C`;

    document.querySelector("#description")
        .textContent =
        data.list[0].weather[0].description;

    const forecast =
        document.querySelector("#forecast");

    forecast.innerHTML = `

<p>Day 1:
${data.list[8].main.temp}°C</p>

<p>Day 2:
${data.list[16].main.temp}°C</p>

<p>Day 3:
${data.list[24].main.temp}°C</p>

`;

}

getWeather();



async function getSpotlights() {

    const response =
        await fetch("data/members.json");

    const data =
        await response.json();

    let filtered = data.filter(member =>

        member.membership >= 2
    );


    filtered.sort(() => Math.random() - 0.5);

    const selected =
        filtered.slice(0, 3);

    displaySpotlights(selected);

}

function displaySpotlights(members) {

    const container =
        document.querySelector("#spotlights");

    members.forEach(member => {

        const card =
            document.createElement("section");

        card.innerHTML = `

<img src="images/${member.image}"
alt="${member.name}">

<h3>${member.name}</h3>

<p>${member.phone}</p>

<p>${member.address}</p>

<a href="${member.website}"
target="_blank">

Visit Website

</a>

<p>

Membership:
${member.membership === 3 ?
                "Gold" : "Silver"}

</p>

`;

        container.appendChild(card);

    });

}

getSpotlights();



const menuBtn =
    document.querySelector("#menuBtn");

const navMenu =
    document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document.querySelector("#year")
    .textContent =
    new Date().getFullYear();

document.querySelector("#lastModified")
    .textContent =
    `Last Modified:
${document.lastModified}`;