// ======================================
// Anime Explorer
// anime.js
// ======================================

import {
    saveFavorite,
    isFavorite
} from "./storage.js";

const animeContainer =
    document.querySelector("#animeContainer");

const searchInput =
    document.querySelector("#search");

const modal =
    document.querySelector("#animeModal");

const modalTitle =
    document.querySelector("#modalTitle");

const modalDescription =
    document.querySelector("#modalDescription");

const closeModal =
    document.querySelector("#closeModal");

let animeData = [];

/* ======================================
   FETCH DATA
====================================== */

async function getAnime() {

    try {

        const response =
            await fetch("./data/anime.json");

        if (!response.ok) {
            throw new Error(
                "Unable to load anime data."
            );
        }

        animeData =
            await response.json();

        displayAnime(animeData);

    } catch (error) {

        console.error(error);

        animeContainer.innerHTML = `
            <p>
                Unable to load anime data.
            </p>
        `;

    }

}

/* ======================================
   DISPLAY ANIME
====================================== */

function displayAnime(animeList) {

    animeContainer.innerHTML = "";

    animeList.forEach(anime => {

        const card =
            document.createElement("article");

        card.classList.add("anime-card");

        card.innerHTML = `

            <img
                src="${anime.image}"
                alt="${anime.title} poster"
                loading="lazy"
                width="300"
                height="450"
            >

            <div class="anime-info">

                <h2>${anime.title}</h2>

                <p>
                    <strong>Genre:</strong>
                    ${anime.genre}
                </p>

                <p>
                    <strong>Rating:</strong>
                    ${anime.rating}
                </p>

                <p>
                    <strong>Year:</strong>
                    ${anime.year}
                </p>

                <button
                    class="details-btn"
                    aria-label="View details for ${anime.title}">
                    Details
                </button>

                <button
                    class="favorite-btn"
                    aria-label="Save ${anime.title} to favorites">
                    ${isFavorite(anime.id)
                ? "Saved"
                : "Save Favorite"
            }
                </button>

            </div>
        `;

        /* DETAILS BUTTON */

        const detailsButton =
            card.querySelector(".details-btn");

        detailsButton.addEventListener(
            "click",
            () => {

                modalTitle.textContent =
                    anime.title;

                modalDescription.textContent =
                    anime.description;

                modal.showModal();

            }
        );

        /* FAVORITE BUTTON */

        const favoriteButton =
            card.querySelector(".favorite-btn");

        favoriteButton.addEventListener(
            "click",
            () => {

                saveFavorite(anime.id);

                favoriteButton.textContent =
                    "Saved";

                favoriteButton.disabled = true;

            }
        );

        animeContainer.appendChild(card);

    });

}

/* ======================================
   SEARCH
====================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            const searchText =
                event.target.value.toLowerCase();

            const filteredAnime =
                animeData.filter(anime =>
                    anime.title
                        .toLowerCase()
                        .includes(searchText)
                );

            displayAnime(filteredAnime);

        }
    );

}

/* ======================================
   MODAL
====================================== */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        () => {

            modal.close();

        }
    );

}

/* Close modal with Escape key */

window.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.open
        ) {

            modal.close();

        }

    }
);

/* ======================================
   INITIALIZE
====================================== */

getAnime();