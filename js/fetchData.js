import {getPopup} from "/js/popup.js";
import {getEmptyPopup} from "/js/popup.js";

export async function fetchQuote() {
    const ninjasURL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
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

export async function fetchFact() {
    const ninjasURL = 'https://api.api-ninjas.com/v1/facts';
    fetch(ninjasURL, {
        method: 'GET',
        headers: {'X-Api-Key': 'vfKiINKq6zKFpXY67KqgoA==l5Do7u177pE9NyO6'},
        contentType: 'application/json',
    })
        .then(res => res.json())
        .then(result => {
            //todo: fix this
            // const emptyPopup = getEmptyPopup();
            // document.documentElement.appendChild(emptyPopup);
            // delay(3500);
            // emptyPopup.remove();
            const fact = result[0].fact;
            const popup = getPopup(fact);
            // Append the popup outside the body, directly to the <html> element
            document.documentElement.appendChild(popup);
        });
}

export async function createWeatherForecast(city) {
    try {
        const popup = getEmptyPopup();
        popup.classList.add('black-to-white');

        const weatherInfo = await getWeatherInfo(city);

        const weather = weatherInfo.currentConditions;
        const currentTemperatureFahrenheit = weatherInfo.currentConditions.temp;
        const currentTemperatureCelsius = `${Math.round(fahrenheitToCelsius(currentTemperatureFahrenheit))}°C`;
        const place = weatherInfo.resolvedAddress;

        if (currentTemperatureFahrenheit > 86) {
            popup.style.background = 'red';
            popup.style.background = 'linear-gradient(93deg, rgba(255,0,0,1) 5%, rgba(255,2,0,1) 41%, rgba(191,37,36,1) 73%)';
        } else if (currentTemperatureFahrenheit > 68) {
            popup.style.background = 'orange';
            popup.style.background = 'linear-gradient(93deg, rgba(255,218,0,1) 0%, rgba(255,196,0,1) 49%, rgba(255,171,0,1) 78%)';
        } else if (currentTemperatureFahrenheit > 50) {
            popup.style.background = 'yellow';
            popup.style.background = 'linear-gradient(93deg, rgba(78,255,0,1) 0%, rgba(181,255,0,1) 29%, rgba(202,255,0,1) 58%, rgba(254,255,0,1)';
        } else {
            popup.style.background = 'linear-gradient(to bottom, #020024, #20208b, #00d4ff)';
        }


        const weatherIconCode = weatherInfo.currentConditions.icon;

        const iconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherIconCode}.png`;

        const card = document.createElement('div');
        card.classList.add('weather-card', 'd-flex');

        const cardTitle = document.createElement('h4');
        cardTitle.textContent = `The weather in ${place} is:`;

        const imgElement = document.createElement('img');
        imgElement.src = iconUrl;

        const temperatureElement = document.createElement('h4');
        temperatureElement.textContent = `Current temperature is:`;

        const heading = document.createElement('div');
        heading.classList.add('cool-card-title');

        const firstRow = document.createElement('div');
        firstRow.classList.add('card-row');

        const description = document.createElement('div');
        description.classList.add('card-row');
        description.textContent = weatherInfo.description;

        const longTermForecast = document.createElement('div');
        longTermForecast.classList.add('longterm-forecast');

       const nextDaysForecast = weatherInfo.days;

      for (let i = 1; i <= 5; i++) { // Start from 0
          const currentElement = nextDaysForecast[i];
          const currentElementTemperatureFahrenheit = currentElement.temp;
          const currentElementTemperatureCelsius = Math.round(fahrenheitToCelsius(currentElementTemperatureFahrenheit));
          const currentElementIconCode = currentElement.icon;
          const date = currentElement.datetime;

          const dateParts = date.split('-');
          // Extract the month and day
          const month = dateParts[1];
          const day = dateParts[2];
          const dateString = day + "/" + month;

          const wrapper = document.createElement('div');
          wrapper.classList.add('longterm-forecast-item');

          const currentIconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${currentElementIconCode}.png`;

          // Create an element for the temperature
          const currentTemperatureElement = document.createElement('p');
          currentTemperatureElement.textContent = `${currentElementTemperatureCelsius}°C`;

          // Create an img element for the weather icon
          const iconElement = document.createElement('img');
          iconElement.src = currentIconUrl;
          iconElement.alt = 'Weather Icon';

          const dateElement = document.createElement('p');
          dateElement.textContent = dateString;


          wrapper.appendChild(iconElement)
          wrapper.appendChild(currentTemperatureElement)
          wrapper.appendChild(dateElement);
          // Append temperature and icon to the longTermForecast div
          longTermForecast.appendChild(wrapper);

      }


        heading.appendChild(cardTitle);
        heading.appendChild(imgElement);
        firstRow.appendChild(temperatureElement);
        firstRow.append(currentTemperatureCelsius);

        card.appendChild(heading);
        card.appendChild(firstRow);
        card.appendChild(description);
        card.appendChild(longTermForecast);



        popup.appendChild(card);
        document.documentElement.appendChild(popup);
        //
        // const currentTemperature = Math.round(Number(weatherInfo.main.temp));
        // //TODO: add feels like
        // const feelsLikeTemperature = weatherInfo.main.feels_like;
        // const maxTemperatureForTheDay = Math.round(Number(weatherInfo.main.temp_max));
        // const minTemperatureForTheDay = weatherInfo.main.temp_min;
        // const pressure = weatherInfo.main.pressure;
        // const humidity = weatherInfo.main.humidity;
        //
        // const iconUrl = `http://openweathermap.org/img/wn/${weatherIconCode}.png`;
        //
        // const card = document.createElement('div');
        // card.classList.add('weather-card', 'd-flex');
        //
        // const cardRow = document.createElement('div');
        // cardRow.classList.add('card-row')
        //
        // const cardSecondRow = document.createElement('div');
        // cardSecondRow.classList.add('card-row')
        //
        // const cardTitle = document.createElement('h4');
        // cardTitle.textContent = `The weather in ${city} is:`;
        //
        // const imgElement = document.createElement('img');
        // imgElement.src = iconUrl;
        //
        // cardRow.appendChild(cardTitle);
        // cardRow.appendChild(imgElement);
        //
        // const currentTemperatureElement = document.createElement('h4');
        // currentTemperatureElement.textContent = "Current temperature is: ";
        //
        // const currentTemperatureValue = document.createElement('p');
        // currentTemperatureValue.textContent = `${currentTemperature}°C`;
        //
        // const cardThirdRow = document.createElement('div');
        // cardThirdRow.classList.add('card-row');
        //
        // const pressureElement = document.createElement('h4');
        // pressureElement.textContent = "Humidity is: ";
        //
        // const pressureValue = document.createElement('p');
        // pressureValue.textContent = `${humidity}%`;
        //
        // cardSecondRow.appendChild(currentTemperatureElement);
        // cardSecondRow.appendChild(currentTemperatureValue);
        //
        // cardThirdRow.appendChild(pressureElement);
        // cardThirdRow.appendChild(pressureValue);
        //
        // card.appendChild(cardRow);
        // card.appendChild(cardSecondRow);
        // card.appendChild(cardThirdRow);
        //
        //
        // popup.appendChild(card);
        // document.documentElement.appendChild(popup);
    } catch (err) {
        document.body.classList.remove('blur-image');
        const failPopup = getEmptyPopup();

        const backBtn = document.createElement('button');
        backBtn.classList.add('btn', 'btn-info', 'mt-2');
        backBtn.textContent = 'Back to Search';

        backBtn.addEventListener('click', async () => {
            await createSearchPopup();
            failPopup.remove();
        });

        failPopup.textContent = 'Please enter a valid city.';
        failPopup.style.color = 'red';
        failPopup.append(backBtn)

        document.documentElement.appendChild(failPopup)
    }

}

export async function createSearchPopup() {

    const popup = getEmptyPopup();
    popup.classList.add('black-to-white');

    // Create the main heading
    const heading = document.createElement('h4');
    heading.innerText = 'Choose city.';

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.classList.add('form-control');
    cityInput.id = 'city';
    cityInput.placeholder = 'Write city here';

    // Create the button
    const sendButton = document.createElement('button');
    sendButton.type = 'submit';
    sendButton.classList.add('btn', 'btn-primary', 'send-btn', 'mt-3');
    sendButton.innerText = 'Check weather';
    sendButton.addEventListener('click', () => {
        createWeatherForecast(cityInput.value)
        popup.remove()
    })

    popup.appendChild(heading);
    popup.appendChild(cityInput);
    popup.appendChild(sendButton);

    document.documentElement.appendChild(popup);
}

export async function createRandomHobbyPopup() {
    const popup = getEmptyPopup();
    popup.classList.add('black-to-white')

    const ninjasURL = 'https://api.api-ninjas.com/v1/hobbies';
    fetch(ninjasURL, {
        method: 'GET',
        headers: {'X-Api-Key': 'vfKiINKq6zKFpXY67KqgoA==l5Do7u177pE9NyO6'},
        contentType: 'application/json',
    })
        .then(res => res.json())
        .then(result => {

            const heading = document.createElement('h1');
            heading.classList.add('mb-3');
            heading.textContent = 'Your Random Hobby Idea is';

            const info = document.createElement('div');
            info.classList.add('d-flex', 'justify-content-around');

            const hobby = result.hobby;
            const hobbyUrl = result.link;

            const hobbyElement = document.createElement('h2');
            hobbyElement.textContent = hobby;


            const hobbyLinkElement = document.createElement('a');
            hobbyLinkElement.href = hobbyUrl;
            hobbyLinkElement.style.fontSize = "1.7em";
            hobbyLinkElement.textContent = "Wikipedia";

            // Open the link in a new tab
            hobbyLinkElement.target = "_blank";

            info.appendChild(hobbyElement)
            info.appendChild(hobbyLinkElement)

            popup.appendChild(heading)
            popup.appendChild(info)
            document.documentElement.appendChild(popup);
        });

}

async function getWeatherInfo(city) {
    const weatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=CL3TK8NLC437CFJ3Z4EKVJR8T&contentType=json&iconSet=icons2`;
    const response = await fetch(weatherUrl, {
        method: 'GET',
        contentType: 'application/json',
    });
    const result = await response.json();
    return result;
}

// Function that returns a Promise that resolves after a given time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fahrenheitToCelsius(fahrenheit) {
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