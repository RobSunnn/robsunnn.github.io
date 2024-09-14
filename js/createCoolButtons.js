function showCoolButtons() {
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
}

// Call the function to initialize the event listeners
showCoolButtons();

function attachEventListener(btn) {
    if(btn.textContent === 'Cool fact') {
        btn.addEventListener('click', async () => {
            fetchFact();
        })
    }

}


async function fetchFact() {
    const ninjasURL = 'https://api.api-ninjas.com/v1/facts';
    fetch(ninjasURL, {
        method: 'GET',
        headers: {'X-Api-Key': 'vfKiINKq6zKFpXY67KqgoA==l5Do7u177pE9NyO6'},
        contentType: 'application/json',
    })
        .then(res => res.json())
        .then(result => {
            const fact = result[0].fact;
            document.body.classList.add('blur-image')
        // Create the popup div
        const popup = document.createElement('div');
        popup.classList.add('remove-blur')

        popup.id = 'popup';
        popup.classList.add('popup');
        popup.style.display = 'block';
        const heading = document.createElement('h3');
        heading.textContent = "Your cool fact is:"

        // Create the close button
        const closeBtn = document.createElement('span');
        closeBtn.id = 'closeBtn';
        closeBtn.classList.add('close-btn');
        closeBtn.style.display = 'block';
        closeBtn.innerHTML = '&times;';  // HTML for "×"

        // Create the content paragraph
        const content = document.createElement('p');
        content.textContent = fact;

        // Append close button and content to popup
        popup.appendChild(closeBtn);
        popup.appendChild(heading);
        popup.appendChild(content);
        // Get the elements
        const triggerField = document.getElementById('triggerField');

        // Hide the popup when the close button is clicked
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
            document.body.classList.remove('blur-image')

        });
            // Optional: Hide the popup if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (event.target === popup) {
                console.log('event.target')
                popup.style.display = 'none';

            }
        });
//        // Show the popup by removing the 'invisible' class
//        setTimeout(() => {
//            popup.classList.remove('invisible');
//        }, 100);  // Delay to simulate the popup effect
//
//        // Close the popup when close button is clicked
//        closeBtn.addEventListener('click', () => {
//            popup.classList.add('invisible');  // Add invisible to hide
//        });
        // Append the popup to the main
        const main = document.querySelector('main');

       // Append the popup outside the body, directly to the <html> element
        document.documentElement.appendChild(popup);

        });



}
