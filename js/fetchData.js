import { getPopup } from "/js/popup.js";

export async function fetchQuote() {
    const ninjasURL = 'https://robsunnn-api.azurewebsites.net/quote';
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

    fetch(ninjasURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
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
            authorLink.href = `https://google.com/search?q=${authorOfQuote}`; // Replace with the actual URL
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
    const ninjasURL = 'https://api.api-ninjas.com/v1/facts';
    fetch(ninjasURL, {
        method: 'GET',
        headers: {'X-Api-Key': 'vfKiINKq6zKFpXY67KqgoA==l5Do7u177pE9NyO6'},
        contentType: 'application/json',
    })
        .then(res => res.json())
        .then(result => {
            const fact = result[0].fact;
            const popup = getPopup(fact);
            // Append the popup outside the body, directly to the <html> element
            document.documentElement.appendChild(popup);
        });
}

export async function getWeatherInfo(city) {
    const weatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=CL3TK8NLC437CFJ3Z4EKVJR8T&contentType=json&iconSet=icons2`;
    const response = await fetch(weatherUrl, {
        method: 'GET',
        contentType: 'application/json',
    });
    return await response.json();
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