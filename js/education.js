const bodyElement = document.body;

const educationButton = document.createElement('a');
educationButton.setAttribute('id', 'education-btn');
educationButton.href = '#';
educationButton.textContent = 'Education';

bodyElement.appendChild(educationButton)

educationButton.addEventListener('click', loadCards)

function loadCards() {
    generateAllCards(getAllCards())
    educationButton.remove()
    let hideButton = createHideButton();
    bodyElement.appendChild(hideButton)
}

function generateAllCards(cards) {
    const containerElement = document.createElement('div');
    containerElement.className = 'cards-container';
    cards.map(generateCard).forEach(card => containerElement.appendChild(card));
    bodyElement.appendChild(containerElement)
}

function generateCard(card) {

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.setAttribute('style', "width: 30rem;")

    const divTextContainer = document.createElement('div');
    divTextContainer.className = 'card-body';

    const h2Element = document.createElement('h2');


    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', card.anchor);
    anchorElement.textContent = card.name;

    const paragraphTextContent = document.createElement('p');
    paragraphTextContent.className = 'card-text';
    paragraphTextContent.textContent = card.pText;

    h2Element.appendChild(anchorElement);

    const divImageElement = document.createElement('div');
    divImageElement.className = 'image';

    const imgElement = document.createElement('img');
    imgElement.className = 'card-img-top'
    imgElement.src = card.imgSource;

    divImageElement.appendChild(imgElement);

    divTextContainer.appendChild(h2Element);
    divTextContainer.appendChild(paragraphTextContent)

    cardContainer.appendChild(divTextContainer);
    cardContainer.appendChild(divImageElement);


    return cardContainer;
}

function createHideButton() {


    const hideStoryButton = document.createElement('a');
    hideStoryButton.setAttribute('id', 'story-btn');
    hideStoryButton.textContent = 'Hide';
    hideStoryButton.addEventListener('click', () => {
        location.reload()
    });

    return hideStoryButton;
}

function getAllCards() {
    const cards = [];

    const basic = {
        name: 'Java Basic',
        anchor: 'https://softuni.bg/certificates/details/125160/ade37b33',
        pText: 'This is how my education started with the Programming Basics course. This course gave me basic coding skills using Java and how to use IDE. Here we started to study about data types and variables, conditional statements, nested conditional statements, loops, nested loops, how to debug code, how to work with console.   And this is my certificate from this course.',
        imgSource: 'images/basics.jpg'
    }

    const fundamentals = {
        name: 'Java Fundamentals',
        anchor: 'https://softuni.bg/certificates/details/169293/1fb49d57',
        pText: 'In this course we started to study more complex parts from the Java programming language like: Arrays, Lists, Methods, Associative Arrays, Text processing, Regular Expressions, Objects and Classes and this gave me Fundamental knowledge in programming. This is my certificate from this course.',
        imgSource: 'images/fundamentals.jpg'
    }

    const advanced = {
        name: 'Java Advanced',
        anchor: 'https://softuni.bg/certificates/details/161836/67400029',
        pText: 'Java Advanced course gave me more advanced knowledge in the programming language Java. Here I learned how to use more advanced features like Multidimensional Arrays, Stacks and Queues, HashSet, TreeSet, LinkedHashSet And Maps, Streams, Generics Syntax, Generic Classes and Interfaces, Generic Methods, Iterators and Comparators. And this is my certificate from this course.',
        imgSource: 'images/advanced.jpg'
    }

    const oop = {
        name: 'Java OOP',
        anchor: 'https://softuni.bg/certificates/details/168988/1526a52d',
        pText: `Now it's getting interesting with the OOP course. Here we learned about the four pillars of Object Oriented Programming - Abstraction, Encapsulation, Polymorphism, Inheritance. Also we learned about Reflection and Annotation and how to use them. Exception and Error handling, Design Patterns, Unit Testing and Test Driven Development were also part from this course.`,
        imgSource: 'images/oop.jpg'
    }

    const mysql = {
        name: 'MySQL',
        anchor: 'https://softuni.bg/certificates/details/172158/99896a3c',
        pText: 'In MySQL course we started long education over creating databases and how to handle with databases. We have learned about: Data Definition and Data Types in MySQL, CRUD operations, Built-in functions of MySQL, Data Aggregation, Table Relations, Subqueries and JOINs, Database Programmability and Transactions, Functions and Procedures. This is the certificate I acquired from this course.',
        imgSource: 'images/mysql-cert.jpg'
    }

    const springData = {
        name: 'Spring Data',
        anchor: 'https://softuni.bg/certificates/details/180536/5816b185',
        pText: `Spring Data course gave me knowledge how Application to Database Connection works. We have learned about ORM's and how they are build, also how to use Maven, Hibernate framework, Java Persistence API, Spring Data, Spring Data Repositories, Spring Data Query creation, Retrieving Data by Custom Queries, Java Persistence Query Language, Auto Mapping Objects(Data Transfer objects, Model Mapping), JSON and XML processing and Custom Configurations.`,
        imgSource: 'images/spring-data.jpg'
    }

    const springFundamentals = {
        name: 'Spring Fundamentals',
        anchor: 'https://softuni.bg/certificates/details/191514/eeadc9b7',
        pText: 'In this course we started to build MVC projects using the Spring Framework and how to deploy them.',
        imgSource: 'images/spring-fundamentals.jpg'
    }

    const htmlAndCss = {
        name: 'HTML & CSS',
        anchor: 'https://softuni.bg/certificates/details/191514/eeadc9b7',
        pText: 'This course was all about HTML & CSS and how to add CSS into our HTML documents. We learned about HTML Tags and Attributes, CSS Syntax and Selectors, about the Typography in CSS, CSS Properties and Units, Box Model and Position, CSS Layout, Forms and working with Forms and Responsive Web Design. And this is how I got this idea to make a page to introduce myself in a proper way.',
        imgSource: 'images/html-css.jpg'
    }

    const javascript = {
        name: 'JavaScript',
        anchor: 'https://softuni.bg/certificates/details/212506/f08df490',
        pText: '',
        imgSource: 'images/js.jpg'
    }

    cards.push(basic);
    cards.push(fundamentals);
    cards.push(advanced);
    cards.push(oop);
    cards.push(mysql);
    cards.push(springData);
    cards.push(springFundamentals);
    cards.push(htmlAndCss);
    cards.push(javascript);

    return cards;
}