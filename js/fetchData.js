import { getPopup } from "/js/popup.js";

export async function fetchQuote() {
    const apiURL = 'https://robsunnn-api.azurewebsites.net/quote';
    const token = sessionStorage.getItem('apiToken');

    const divQuoteElement = document.getElementById('quotes');
    divQuoteElement.scrollIntoView({behavior: 'smooth', block: 'center'});

    const messageLabel = document.createElement('h4');
    messageLabel.classList.add('typing-effect');

    divQuoteElement.append(messageLabel);

    messageLabel.innerText = 'Fetching random quote for you ...';
    await delay(3000);
    messageLabel.innerText = 'Your quote is';
    await delay(1300);
    divQuoteElement.innerText = '';

    messageLabel.remove();

    fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-token': token
        },
        mode: 'cors'
    })
        .then(res => res.json())
        .then(result => {
            const authorOfQuote =  Object.keys(result)[0];
            const quote = result[authorOfQuote];

            const authorElement = document.createElement('h3');
            authorElement.setAttribute('id', 'quote-author');
            // Create the anchor element for the hyperlink
            const authorLink = document.createElement('a');
            authorLink.href = `https://google.com/search?q=${authorOfQuote}`; // Set the href attribute
            authorLink.textContent = authorOfQuote; // Set the author name as the link text

            // Append the link to the author element
            authorElement.appendChild(authorLink);

            const quoteElement = document.createElement('p');
            quoteElement.setAttribute('id', 'quote');
            quoteElement.textContent = `"${quote}"`;


            divQuoteElement.appendChild(quoteElement);
            divQuoteElement.appendChild(authorElement);

            if (quote.length > 240) {

                const quote = document.getElementById("quote");
                const currentFontSize = window.getComputedStyle(quote).fontSize;
                const currentFontSizeValue = parseFloat(currentFontSize);
                const reduction = 1.5;

                const newFontSize = currentFontSizeValue / reduction;

                quote.style.fontSize = `${newFontSize}px`;

            }

        });
}

export async function fetchFact() {
    const apiURL = 'https://robsunnn-api.azurewebsites.net/fact';
    const token = sessionStorage.getItem('apiToken');

    fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-token': token
        },
        mode: 'cors',
    })
        .then(res => res.json())
        .then(result => {
            const fact = result[Object.keys(result)[0]];
            const popup = getPopup(fact);
            // Append the popup outside the body, directly to the <html> element
            document.documentElement.appendChild(popup);
        });
}

export async function getWeatherInfo(city) {
    const url = `https://robsunnn-api.azurewebsites.net/weather`;
        const token = sessionStorage.getItem('apiToken');

    if (city.length > 50) {
        throw new Error('Please enter a valid city name');
    }
    const formattedCity = city.replace(/\s+/g, '%20');
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-token': token
        },

        body: JSON.stringify({ city: formattedCity })  // Send the city as part of the request body
    });

    if (!response.ok) {
        throw new Error('Failed to fetch weather data from backend');
    }

    return await response.text();
}

// Function that returns a Promise that resolves after a given time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// function chuckNorris() {
//
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(res => res.json())
//         .then(result => {
//
//             let htmlDivElement = document.createElement('div');
//             htmlDivElement.textContent = result.value;
//             htmlDivElement.setAttribute('id', 'joke');
//             let uncleChuck = document.createElement('img');
//             uncleChuck.src = './images/chicho Chuck.jpg'
//
//             hideButtons();
//
//             const hideStoryButton = document.createElement('a');
//             hideStoryButton.setAttribute('id', 'story-btn');
//             hideStoryButton.textContent = 'Hide';
//             hideStoryButton.addEventListener('click', () => {
//                 htmlDivElement.remove()
//                 uncleChuck.remove()
//                 hideStoryButton.remove()
//             });
//
//             bodyElement.appendChild(uncleChuck)
//             bodyElement.appendChild(htmlDivElement);
//             bodyElement.appendChild(hideStoryButton);
//         });
// }
//
// function createHideButton() {
//
//     const hideStoryButton = document.createElement('a');
//     hideStoryButton.setAttribute('id', 'story-btn');
//     hideStoryButton.textContent = 'Hide';
//     hideStoryButton.addEventListener('click', () => {
//         location.reload()
//     });
//
//     return hideStoryButton;
// }
//
// function hideButtons() {
//     storyButton.remove();
//     timeButton.remove();
// }