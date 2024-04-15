window.addEventListener("load", generatePageAboutMe);

const bodyElement = document.body;

function generatePageAboutMe() {

const storyButton = document.createElement('a');
storyButton.setAttribute('id', 'story-btn');
storyButton.href = '#';
storyButton.textContent = 'Chuck Norris Joke';

bodyElement.appendChild(storyButton)

storyButton.addEventListener('click', () => {

    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(result => {

            let htmlDivElement = document.createElement('div');
            htmlDivElement.textContent = result.value;
            htmlDivElement.setAttribute('id', 'joke');
            let uncleChuck = document.createElement('img');
            uncleChuck.src = './images/chicho Chuck.jpg'
            bodyElement.appendChild(uncleChuck)


            storyButton.remove();

            let hideStoryButton = document.createElement('a');
            hideStoryButton.setAttribute('id', 'story-btn');
            hideStoryButton.textContent = 'Hide Joke';
            hideStoryButton.addEventListener('click', () => { location.reload()})

            bodyElement.appendChild(hideStoryButton);
            bodyElement.appendChild(htmlDivElement);
        });

});

}
