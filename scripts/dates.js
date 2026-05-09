const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.textContent = today.getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;