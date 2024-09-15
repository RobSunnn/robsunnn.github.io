// Function to create the popup
export function getPopup(data) {
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
    content.textContent = data;

    // Append close button and content to popup
    popup.appendChild(closeBtn);
    popup.appendChild(heading);
    popup.appendChild(content);

    // Hide the popup when the close button is clicked
    closeBtn.addEventListener('click', function () {
        popup.remove();
        document.body.classList.remove('blur-image');

    });
    // Optional: Hide the popup if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.remove();
            document.body.classList.remove('blur-image');
        }
    });

    return popup;
}

export function getEmptyPopup() {
    document.body.classList.add('blur-image')
    // Create the popup div
    const popup = document.createElement('div');
    popup.classList.add('remove-blur')

    popup.id = 'popup';
    popup.classList.add('popup');
    popup.style.display = 'block';

    // Create the content paragraph
    const content = document.createElement('p');
    content.textContent = 'Getting your cool fact ...';

    popup.appendChild(content);

    return popup;
}
