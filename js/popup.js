import {getWeatherInfo, fahrenheitToCelsius} from "/js/fetchData.js";

export function getPopup(data) {
    document.body.classList.add('blur-image');
    // Create the popup div
    const popup = document.createElement('div');
    popup.classList.add('remove-blur', 'typing-effect-2');
    popup.id = 'popup';
    popup.classList.add('popup');
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.justifyContent = 'center';
    popup.style.width = '90%';
    popup.style.height = '350px';

    const heading = document.createElement('h2');
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
    content.id = 'fact-text';

    // Append close button and content to popup
    popup.appendChild(closeBtn);
    popup.appendChild(heading);
    popup.appendChild(content);

    // Hide the popup when the close button is clicked
    closeBtn.addEventListener('click', function () {
        popup.remove();
        document.body.classList.remove('blur-image');
        document.getElementById('cool-fact').removeAttribute('disabled');
        Array.from(document.getElementsByClassName('btn-link')).forEach(btn => btn.removeAttribute('disabled'))
    });
    // Optional: Hide the popup if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.remove();
            document.getElementById('cool-fact').removeAttribute('disabled');
            document.body.classList.remove('blur-image');
            Array.from(document.getElementsByClassName('btn-link')).forEach(btn => btn.removeAttribute('disabled'))
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
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.justifyContent = 'center';

    // Create the close button
    const closeBtn = document.createElement('span');
    closeBtn.id = 'closeBtn';
    closeBtn.classList.add('close-btn');
    closeBtn.style.display = 'block';
    closeBtn.innerHTML = '&times;';  // HTML for "×"

    popup.appendChild(closeBtn);

     // Hide the popup when the close button is clicked
    closeBtn.addEventListener('click', function () {
        popup.remove();
        document.getElementById('weather-forecast').removeAttribute('disabled');
        document.body.classList.remove('blur-image');
        Array.from(document.getElementsByClassName('btn-link')).forEach(btn => btn.removeAttribute('disabled'))

    });

    return popup;
}

export async function createWeatherForecast(city) {
    try {
        const popup = getEmptyPopup();
        popup.classList.add('black-to-white');

        const weatherData = await getWeatherInfo(city);
        const weatherInfo = JSON.parse(weatherData);

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

        const currentTemperatureCelsiusElement = document.createElement('p');
        currentTemperatureCelsiusElement.textContent = currentTemperatureCelsius;
        currentTemperatureCelsiusElement.style.fontSize = '3.2em';

        const heading = document.createElement('div');
        heading.classList.add('cool-card-title');

        const firstRow = document.createElement('div');
        firstRow.classList.add('card-row');

        const description = document.createElement('div');
        description.classList.add('card-row', 'description');
        description.textContent = weatherInfo.description;
        description.style.fontSize = '2.3em';

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


            wrapper.appendChild(dateElement);
            wrapper.appendChild(iconElement)
            wrapper.appendChild(currentTemperatureElement)
            // Append temperature and icon to the longTermForecast div
            longTermForecast.appendChild(wrapper);

        }

        heading.appendChild(cardTitle);
        heading.appendChild(imgElement);
        firstRow.appendChild(temperatureElement);
        firstRow.append(currentTemperatureCelsiusElement);

        card.appendChild(heading);
        card.appendChild(firstRow);
        card.appendChild(description);
        card.appendChild(longTermForecast);

        popup.appendChild(card);
        document.documentElement.appendChild(popup);

    } catch (err) {
        document.body.classList.remove('blur-image');
        const failPopup = getEmptyPopup();
        console.log(err)
        const backBtn = document.createElement('button');
        backBtn.classList.add('btn', 'btn-info', 'mt-2', 'send-btn');
        backBtn.textContent = 'Back to Search';

        backBtn.addEventListener('click', async () => {
            await createSearchPopup();
            failPopup.remove();
        });

        failPopup.textContent = 'Please enter a valid city.';
        failPopup.style.color = 'red';
        failPopup.style.fontSize = '2em';
        failPopup.append(backBtn)

        document.documentElement.appendChild(failPopup)
    }

}

export async function createRandomHobbyPopup() {
    const popup = getEmptyPopup();
    popup.classList.add('black-to-white');
    popup.style.width = '90%';

    const apiURL = 'https://robsunnn-api.azurewebsites.net/hobby';
    fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    })
        .then(res => res.json())
        .then(result => {

            const heading = document.createElement('h1');
            heading.classList.add('mb-3');
            heading.textContent = 'Your Random Hobby Idea is';

            const info = document.createElement('div');
            info.classList.add('d-flex', 'justify-content-around');
            const hobby =  Object.keys(result)[0];
            const hobbyUrl = result[hobby];

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

export async function createSearchPopup() {

    const popup = getEmptyPopup();
    popup.classList.add('black-to-white');
    popup.style.height = '200px';
    popup.style.width = '90%';

    // Create the main heading
    const heading = document.createElement('h4');
    heading.innerText = 'Choose city.';

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.classList.add('form-control');
    cityInput.style.width = '70%';
    cityInput.style.margin = '0 auto';
    cityInput.id = 'city';
    cityInput.placeholder = 'Write city here';

    // Create the button
    const sendButton = document.createElement('button');
    sendButton.type = 'submit';
    sendButton.classList.add('btn', 'btn-primary', 'send-btn', 'mt-3');
    sendButton.innerText = 'Check weather';
    sendButton.addEventListener('click', () => {
        createWeatherForecast(cityInput.value.trim())
        popup.remove()
    })

    popup.appendChild(heading);
    popup.appendChild(cityInput);
    popup.appendChild(sendButton);

    document.documentElement.appendChild(popup);
}
