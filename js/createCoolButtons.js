import {fetchFact} from "/js/fetchData.js";
import {createSearchPopup, createRandomHobbyPopup} from "/js/popup.js";

export function generateHomeContent() {
    const showBtn = document.getElementById('show-button');
    const buttons = Array.from(document.getElementsByClassName('btn-link'));
    const cardHolder = Array.from(document.getElementsByClassName('card-item'));
    showBtn.scrollIntoView({behavior: 'smooth', block: 'center'});

    let areCardsVisible = false;  // Track whether buttons are currently visible

    showBtn.addEventListener('click', () => {
        if (areCardsVisible) {
            // Hide all cards
            cardHolder.forEach(card => card.classList.add("invisible"));
            cardHolder.forEach(card => card.classList.remove("black-to-white"));
            showBtn.textContent = 'Show More Content';
        } else {

            // Show all cards
            cardHolder.forEach(card => {
                card.classList.remove("invisible");
            });
            // Attach event listeners only once
            buttons.forEach(btn => {
                attachEventListener(btn);
            });
            cardHolder.forEach(card => card.classList.add("black-to-white"));
            showBtn.textContent = 'Hide content';
            showBtn.classList.remove("btn-success");
            showBtn.classList.add("btn-danger");
        }

        // Toggle the visibility state
        areCardsVisible = !areCardsVisible;
    });
}

function attachEventListener(btn) {
    // Remove any previously attached event listener
    if (btn.clickHandler) {
        btn.removeEventListener('click', btn.clickHandler);
    }
    if (btn.textContent === 'Weather Forecast') {
        btn.scrollIntoView({behavior: 'smooth', block: 'center'});
    }

    if (btn.textContent === 'Cool fact') {
        const handleClick = async () => {
            await fetchFact();
            Array.from(document.getElementsByClassName('nav-link')).forEach(btn => btn.classList.add('disabled'));
            disableAllButtons();
        };

        // Attach the new click handler
        btn.addEventListener('click', handleClick);
        btn.clickHandler = handleClick;  // Store the reference for later removal

    } else if (btn.textContent === 'Weather Forecast') {
        const handleClick = async () => {
            await createSearchPopup();
            Array.from(document.getElementsByClassName('nav-link')).forEach(btn => btn.classList.add('disabled'));
            disableAllButtons();
        };

        // Attach the new click handler
        btn.addEventListener('click', handleClick);
        btn.clickHandler = handleClick;
    } else if (btn.textContent === 'Check it out here') {
        const handleClick = async () => {
            await createRandomHobbyPopup();
            Array.from(document.getElementsByClassName('nav-link')).forEach(btn => btn.classList.add('disabled'));
            disableAllButtons();
        };

        // Attach the new click handler
        btn.addEventListener('click', handleClick);
        btn.clickHandler = handleClick;
    }
}

function disableAllButtons() {
    Array.from(document.getElementsByClassName('btn-link')).forEach(btn => btn.setAttribute('disabled', ''))
}



