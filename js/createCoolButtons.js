import { fetchFact, createWeatherForecast, createSearchPopup, createRandomHobbyPopup } from "/js/fetchData.js";

export function generateHomeContent() {
    const showBtn = document.getElementById('show-button');
    const buttons = Array.from(document.getElementsByClassName('btn-link'));
    const cardHolder = Array.from(document.getElementsByClassName('card-item'));

    let areCardsVisible = false;  // Track whether buttons are currently visible

    showBtn.addEventListener('click', () => {
        if (areCardsVisible) {
            // Hide all cards
            cardHolder.forEach(card => card.classList.add("invisible"));
            cardHolder.forEach(card => card.classList.remove("typing-effect"));
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
            cardHolder.forEach(card => card.classList.add("typing-effect"));
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
            btn.setAttribute('disabled', '');  // Disable button to prevent multiple clicks
            await fetchFact();                  // Create Popup with fact
            btn.removeAttribute('disabled');  // Re-enable button after operation completes
        };

        // Attach the new click handler
        btn.addEventListener('click', handleClick);
        btn.clickHandler = handleClick;  // Store the reference for later removal

    } else if (btn.textContent === 'Weather Forecast') {
        const handleClick = async () => {
            btn.setAttribute('disabled', '');  // Disable button to prevent multiple clicks
            await createSearchPopup();          // Create Search Popup
            btn.removeAttribute('disabled');  // Re-enable button after popup is closed
        };

        // Attach the new click handler
        btn.addEventListener('click', handleClick);
        btn.clickHandler = handleClick;
    } else if (btn.textContent === 'Check it out here') {
        const handleClick = async () => {
                    btn.setAttribute('disabled', '');  // Disable button to prevent multiple clicks
                    await createRandomHobbyPopup();     // Create Hobby Popup
                    btn.removeAttribute('disabled');  // Re-enable button after popup is closed
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



