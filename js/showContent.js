import { createContactForm } from '/js/createContactForm.js';
import { fetchQuote } from '/js/fetchData.js';
import { generateHomeContent } from '/js/createCoolButtons.js';
import { createCarousel } from '/js/education.js';

const buttons = Array.from(document.getElementsByClassName('nav-link'));

buttons.forEach(button => button.addEventListener('click', async (e) => {
    e.preventDefault();
    const page = e.target.textContent;
    const content = document.getElementById('content');

    let newContent = '';

    switch (page) {
        case 'Home':
            newContent = `
                            <div class="text-center mb-2">
                                <h2>Home Page</h2>
                                <p>This is the home page content. Enjoy browsing!</p>
                            </div>
                            <section class="cards-wrapper">
                   
                                <div class="text-center mb-5">
                                    <button id="show-button" class="btn-link btn btn-primary">Show More Content</button>
                                </div>
                                <ul>

                                    <li class="card-item invisible">
                                        <div class="cool-card">
                                            <h5 class="cool-card-title">
                                                <button id="cool-fact" class="btn-link btn btn-secondary">Cool fact</button>
                                            </h5>
                                            <p class="cool-card-text">If you press this button a random fact from our world will appear.</p>
                                        </div>
                                    </li>
                                    <li class="card-item invisible">
                                        <div class="cool-card">
                                            <h5 class="cool-card-title">
                                                <button id="weather-forecast" class="btn-link btn btn-secondary">Weather Forecast</button>
                                            </h5>
                                            <p class="cool-card-text">This button will lead you to a place called Weather Forecast.</p>
                                        </div>
                                    </li>
                                    <li class="card-item invisible">
                                        <div class="cool-card">
                                            <h5 class="cool-card-title">
                                                <button class="btn-link btn btn-secondary">Check it out here</button>
                                            </h5>
                                            <p class="cool-card-text">If you feel bored, here is a random hobby generator.</p>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                `;

                setTimeout(() => {
                    generateHomeContent();
                }, 1000);

            break;
        case 'Contact':
            content.innerHTML = '';
            content.append(createContactForm());

            const fetchQuoteScript = document.createElement('script');
            fetchQuoteScript.src = '/js/fetchData.js';
            fetchQuoteScript.type = 'module';
            document.body.appendChild(fetchQuoteScript);
            await fetchQuote();

            break;
        case 'Education':
            createCarousel();
            break;
    }

    content.classList.remove('fadeIn');

    setTimeout(() => {
    }, 50);

    setTimeout(() => {
        //Here I check for new content length because I need to know which button is pressed
        //to know which content to show
        if (newContent.length > 0) {
            content.scrollIntoView({behavior: 'smooth', block: 'center'});
            content.innerHTML = newContent;
        }
        content.classList.add('fadeIn');
    }, 500);
}))


