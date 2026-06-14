// ======================================
// Anime Explorer
// favorites.js
// ======================================

import {
    getFavorites,
    removeFavorite
} from "./storage.js";

const favoritesContainer =
    document.querySelector("#favoritesContainer");

/* ======================================
   LOAD FAVORITES
====================================== */

async function loadFavorites() {

    try {

        const response =
            await fetch("./data/anime.json");

        if (!response.ok) {

            throw new Error(
                "Unable to load anime data."
            );

        }

        const animeData =
            await response.json();

        const favoriteIds =
            getFavorites();

        const favoriteAnime =
            animeData.filter(anime =>
                favoriteIds.includes(anime.id)
            );

        displayFavorites(
            favoriteAnime
        );

    } catch (error) {

        console.error(error);

        favoritesContainer.innerHTML = `
            <p>
                Unable to load favorites.
            </p>
        `;

    }

}

/* ======================================
   DISPLAY FAVORITES
====================================== */

function displayFavorites(animeList) {

    favoritesContainer.innerHTML = "";

    if (animeList.length === 0) {

        favoritesContainer.innerHTML = `
            <p>
                No favorite anime saved yet.
            </p>
        `;

        return;

    }

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
                    class="remove-btn"
                    aria-label="Remove ${anime.title} from favorites">
                    Remove Favorite
                </button>

            </div>

        `;

        const removeButton =
            card.querySelector(".remove-btn");

        removeButton.addEventListener(
            "click",
            () => {

                removeFavorite(
                    anime.id
                );

                loadFavorites();

            }
        );

        favoritesContainer.appendChild(
            card
        );

    });

}

/* ======================================
   INITIALIZE PAGE
====================================== */

loadFavorites();