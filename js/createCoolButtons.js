import {fetchFact} from "/js/fetchData.js";

const showBtn = document.getElementById('show-button');
const buttons = Array.from(document.getElementsByClassName('btn-link'));
const buttonsHolder = Array.from(document.getElementsByClassName('btn-item'));

let areButtonsVisible = false;  // Track whether buttons are currently visible

showBtn.addEventListener('click', () => {
    if (areButtonsVisible) {
        // Hide all buttons except the first one
        buttons.slice(1).forEach(btn => btn.classList.add("invisible"));
        buttonsHolder.forEach(btn => btn.classList.remove("typing-effect"));
        showBtn.textContent = 'Show buttons';
    } else {
        buttons.forEach(btn => {
            btn.classList.remove("invisible");
            attachEventListener(btn);
        });
        buttonsHolder.forEach(btn => btn.classList.add("typing-effect"));
        showBtn.textContent = 'Hide buttons';
    }

    // Toggle the visibility state
    areButtonsVisible = !areButtonsVisible;
});


function attachEventListener(btn) {
    if (btn.textContent === 'Cool fact') {
        btn.addEventListener('click', async () => {
            console.log("fetching data")
            await fetchFact();
        })
    }
}



