/* Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. */

// DOM refs
// Card container
const cardContainer = document.querySelector('.team-container');

// "Add a new member" refs
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const imageInput = document.getElementById('image');

const addMemberBtn = document.getElementById('addMemberButton');

// DATA cards
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

// Initial cards print
cardPrinter(cards, cardContainer);

// "Add Member Button" click event listener
addMemberBtn.addEventListener('click', () => addMember());


/**
 * FUNCTIONS
 */
function cardPrinter(dataArray, domRef) {
    let outputToPrint = '';
    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];
        outputToPrint += `
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
    domRef.innerHTML = outputToPrint;
}

function addMember() {
    if ((nameInput.value === '') || (roleInput.value === '') || (imageInput.value === '')) {
        alert('Completa tutti i campi!');
    } else {
        const member = {
            name: nameInput.value.trim(),
            role: roleInput.value.trim(),
            image: imageInput.value.trim(),
        };
        cards.push(member);
        cardPrinter(cards, cardContainer);
        nameInput.value = '';
        roleInput.value = '';
        imageInput.value = '';
    }
}