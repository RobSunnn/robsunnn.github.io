import {fetchFact, createWeatherForecast, createSearchPopup, createRandomHobbyPopup} from "/js/fetchData.js";

export function generateHomeContent() {
    const showBtn = document.getElementById('show-button');
    const buttons = Array.from(document.getElementsByClassName('btn-link'));
    const cardHolder = Array.from(document.getElementsByClassName('card-item'));

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

    if (btn.textContent === 'Cool fact') {
        const handleClick = async () => {
            await fetchFact();                  // Create Popup with fact
            disableAllButtons();
        };

        // Attach the new click handler
        btn.addEventListener('click', handleClick);
        btn.clickHandler = handleClick;  // Store the reference for later removal

    } else if (btn.textContent === 'Weather Forecast') {
        const handleClick = async () => {
            await createSearchPopup();          // Create Search Popup
            disableAllButtons();
        };

        // Attach the new click handler
        btn.addEventListener('click', handleClick);
        btn.clickHandler = handleClick;
    } else if (btn.textContent === 'Check it out here') {
        const handleClick = async () => {
            await createRandomHobbyPopup();     // Create Hobby Popup
            disableAllButtons();
        };

        // Attach the new click handler
        btn.addEventListener('click', handleClick);
        btn.clickHandler = handleClick;
    }
}

// Function to remove all event listeners from buttons
function removeEventListeners(buttons) {
    buttons.forEach(btn => {
        if (btn.clickHandler) {
            // Remove the click event listener using the stored handler reference
            btn.removeEventListener('click', btn.clickHandler);
            delete btn.clickHandler;
        }
    });
}

function disableAllButtons() {
    Array.from(document.getElementsByClassName('btn-link')).forEach(btn => btn.setAttribute('disabled', ''))
}



