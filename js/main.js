/* Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. */

// DOM refs
// Card container
const cardContainer = document.querySelector('.team-container');

// "Add a new member" inputs refs
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const imageInput = document.getElementById('image');

// 1. Creare Array di Oggetti per le card
const cards = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg',
    },
];

// 2a. Definizione funzione per stampare le card
function cardPrinter(dataArray, domRef) {
    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];
        domRef.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img
                src="${data.image}"
                alt="${data.name}"
              />
            </div>
            <div class="card-text">
              <h3>${data.name}</h3>
              <p>${data.role}</p>
            </div>
        </div>
        `;

    }
}

// 2b. Evocazione funzione per stampare le card già presenti nell'array di oggetti
cardPrinter(cards, cardContainer);

// 3. Funzione per aggiungere nuove card tramite input dell'utente