// window.addEventListener("load", generatePageAboutMe);
//
// const bodyElement = document.body;
//
// const storyButton = document.createElement('a');
// storyButton.setAttribute('id', 'story-btn');
// storyButton.href = '#';
// storyButton.textContent = 'Chuck Norris Joke';
//
// const timeButton = document.createElement('a');
// timeButton.setAttribute('id', 'story-btn');
// timeButton.href = '#';
// timeButton.textContent = 'If you want to see your ip address';
//
// const buttonsContainer = document.createElement('div');
// buttonsContainer.setAttribute('id', 'buttons');

export async function fetchQuote() {
    const ninjasURL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
    const divQuoteElement = document.getElementById('quotes');

    const messageLabel = document.createElement('h4');
    messageLabel.classList.add('typing-effect');

    divQuoteElement.append(messageLabel);

    messageLabel.innerText = 'Fetching random quote for you ...';
    await delay(2500);
    messageLabel.innerText = 'Your quote is';
    await delay(1000);
    divQuoteElement.innerText = '';

    messageLabel.remove();

    fetch(ninjasURL, {
        method: 'GET',
        headers: {'X-Api-Key': 'vfKiINKq6zKFpXY67KqgoA==l5Do7u177pE9NyO6'},
        contentType: 'application/json',
    })
        .then(res => res.json())
        .then(result => {
            const authorOfQuote = result[0].author;
            const quote = result[0].quote;

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

            if (quote.length > 270) {

                const quote = document.getElementById("quote");
                const currentFontSize = window.getComputedStyle(quote).fontSize;
                const currentFontSizeValue = parseFloat(currentFontSize);
                const reduction = 1.5;

                const newFontSize = currentFontSizeValue / reduction;

                quote.style.fontSize = `${newFontSize}px`;

            }

        });
}

// Function that returns a Promise that resolves after a given time
function delay(ms, message) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

// function getTime() {
//     const url = "http://worldtimeapi.org/api/timezone/Europe/Sofia";
//
//     fetch(url)
//         .then(res => res.json())
//         .then(result => {
//
//             const divContainerElement = document.createElement('div');
//             divContainerElement.className = 'timeAPI';
//
//             const dayOfYearParagraphElement = document.createElement('p');
//             dayOfYearParagraphElement.textContent = result.day_of_year;
//
//             const ipAddressParagraphElement = document.createElement('p');
//             ipAddressParagraphElement.textContent = result.client_ip;
//
//             divContainerElement.append(`Your IP Address is: ${ipAddressParagraphElement.textContent}\n`);
//             divContainerElement.append(`Today is - ${dayOfYearParagraphElement.textContent} day from this year.`);
//
//             const hideStoryButton = createHideButton();
//             hideButtons();
//
//             bodyElement.appendChild(divContainerElement);
//             bodyElement.appendChild(hideStoryButton);
//         });
//
//
// }
//
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