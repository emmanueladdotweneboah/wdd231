// ======================================
// Anime Explorer
// storage.js
// Handles Local Storage Operations
// ======================================

const STORAGE_KEY = "animeFavorites";

/**
 * Get all favorite anime IDs
 * @returns {number[]}
 */
export function getFavorites() {

    const favorites =
        localStorage.getItem(STORAGE_KEY);

    return favorites
        ? JSON.parse(favorites)
        : [];

}

/**
 * Save an anime ID to favorites
 * @param {number} id
 */
export function saveFavorite(id) {

    const favorites = getFavorites();

    if (!favorites.includes(id)) {

        favorites.push(id);

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(favorites)
        );

    }

}

/**
 * Remove an anime ID from favorites
 * @param {number} id
 */
export function removeFavorite(id) {

    const favorites = getFavorites();

    const updatedFavorites =
        favorites.filter(
            favoriteId =>
                favoriteId !== id
        );

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedFavorites)
    );

}

/**
 * Check if anime already exists
 * in favorites
 * @param {number} id
 * @returns {boolean}
 */
export function isFavorite(id) {

    const favorites =
        getFavorites();

    return favorites.includes(id);

}

/**
 * Clear all favorites
 * Useful for testing
 */
export function clearFavorites() {

    localStorage.removeItem(
        STORAGE_KEY
    );

}