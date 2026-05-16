const membersContainer = document.querySelector('#members');

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();

    displayMembers(data);
}

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement('section');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>${member.description}</p>
        `;

        membersContainer.appendChild(card);
    });
}

getMembers();

const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
});

document.querySelector('#year').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;