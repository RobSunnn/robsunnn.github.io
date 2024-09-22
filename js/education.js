export function createCarousel() {
    generateCarouselPopup();
    Array.from(document.getElementsByClassName('nav-link')).forEach(btn => btn.classList.add('disabled'))
}

function generateCarouselPopup() {

    document.body.classList.add('blur-image')

    // Create the popup div
    const popup = document.createElement('div');
    popup.classList.add('remove-blur')
    popup.id = 'popup';
    popup.classList.add('popup');
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.justifyContent = 'center';
    popup.style.backgroundColor = 'transparent';
    popup.style.border = 'none';
    popup.style.boxShadow = 'none';
    popup.style.width = '80%';
    popup.style.aspectRatio = '2 / 1';
    // Create the close button

    popup.appendChild(generateCarousel());
    document.documentElement.appendChild(popup);
}

// Function to generate the carousel
function generateCarousel() {
    const slides = getSlides();


    const carousel = document.createElement('div');
    carousel.id = 'carouselExampleIndicators';
    carousel.classList.add('carousel');
    carousel.setAttribute('data-bs-ride', 'carousel');


    // Create the indicators
    const indicators = document.createElement('div');
    indicators.classList.add('carousel-indicators');

    // Generate indicator buttons
    slides.forEach((slide, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('data-bs-target', '#carouselExampleIndicators');
        button.setAttribute('data-bs-slide-to', index.toString());
        button.setAttribute('aria-label', `Slide ${index + 1}`);
        if (index === 0) {
            button.classList.add('active');
            button.setAttribute('aria-current', 'true');
        }
        indicators.appendChild(button);
    });

    // Append indicators to the carousel
    carousel.appendChild(indicators);

    // Create the carousel-inner
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner', 'd-flex', 'align-items-center', 'justify-content-center');

    // Generate slides
    slides.forEach((slide, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        if (index === 0) {
            carouselItem.classList.add('active');
        }

        const carouselCard = document.createElement('div');
        carouselCard.classList.add('carousel-card');

        const imageAndButtonWrapper = document.createElement('div');
        imageAndButtonWrapper.style.position = 'relative'; // Wrapper relative for button positioning
        imageAndButtonWrapper.style.display = 'inline-block';
        imageAndButtonWrapper.style.width = '100%';

        const closeBtn = createCloseButton();

         // Hide the popup when the close button is clicked
        closeBtn.addEventListener('click', function () {
            popup.remove();
            document.body.classList.remove('blur-image');
            Array.from(document.getElementsByClassName('nav-link')).forEach(btn => btn.classList.remove('disabled'))
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') { // Check if the pressed key is Escape and close popup
                popup.remove();
                Array.from(document.getElementsByClassName('nav-link')).forEach(btn => btn.classList.remove('disabled'))
                document.body.classList.remove('blur-image');
            }
        });

        // Create image element
        const img = document.createElement('img');
        img.src = slide.imgSource;
        img.classList.add('d-block');
        img.alt = slide.name;

        const imageWrapper = document.createElement('div');
        imageWrapper.appendChild(img)

        const btnWrapper = document.createElement('div');
        btnWrapper.append(closeBtn);
        btnWrapper.style.zIndex = '10';

        imageAndButtonWrapper.appendChild(btnWrapper)
        imageAndButtonWrapper.appendChild(imageWrapper)

        // Create carousel-card-body
        const cardBody = document.createElement('div');
        cardBody.classList.add('carousel-card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');

        const cardLink = document.createElement('a');
        cardLink.href = slide.anchor;
        cardLink.textContent = slide.name;

        cardTitle.appendChild(cardLink);
        cardBody.appendChild(cardTitle);

        const cardText = document.createElement('p');
        cardText.classList.add('carousel-card-text');
        if (index === 0) {
            cardText.innerHTML = `${slide.pText}<br><br> This is the repository holding my project defence for this course: <a href="${"https://github.com/robsunnn/hotelapp"}" target="_blank">Hotel MS</a>`
        } else {
            cardText.textContent = slide.pText;
        }
        cardBody.appendChild(cardText);

        carouselCard.appendChild(imageAndButtonWrapper);
        carouselCard.appendChild(cardBody);

        carouselItem.appendChild(carouselCard);
        carouselInner.appendChild(carouselItem);
    });

    // Append carousel-inner to the carousel
    carousel.appendChild(carouselInner);

    // Create the navigation buttons (Previous and Next)
    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-control-prev');
    prevButton.type = 'button';
    prevButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
    prevButton.setAttribute('data-bs-slide', 'prev');
    prevButton.innerHTML = `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    `;

    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-control-next');
    nextButton.type = 'button';
    nextButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
    nextButton.setAttribute('data-bs-slide', 'next');
    nextButton.innerHTML = `
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    `;

    // Append the navigation buttons to the carousel
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    return carousel;
}

function createCloseButton() {
    const closeBtn = document.createElement('span');
    closeBtn.id = 'closeBtn';
    closeBtn.classList.add('carousel-close-btn');
    closeBtn.style.display = 'block';
    closeBtn.style.color = 'white';
    closeBtn.innerHTML = '&times;';  // HTML for "×"

    return closeBtn;
}

function getSlides() {
    return [

        {
            name: 'Spring Advanced',
            anchor: 'https://softuni.bg/certificates/details/223730/0fcad70e',
            pText: 'This comprehensive course dives deep into the Spring Framework, focusing on essential skills and advanced techniques for modern application development. Throughout the course, we learn the principles of REST APIs, how to build and consume them, how to secure our applications by integrating Spring Security, how to handle errors effectively, unit and integration tests.',
            imgSource: 'images/certificates/spring-advanced.jpeg'
        },

        {
            name: 'Spring Fundamentals',
            anchor: 'https://softuni.bg/certificates/details/191514/eeadc9b7',
            pText: 'In this course we started to build MVC projects using the Spring Framework, also we learned about the Spring MVC Controllers, State management(cookies and sessions), http protocol and what is web server. We were using Thymeleaf for Template Engine for dynamic generation of HTMLs, also how to validate fields in our HTML Forms using the Spring stereotype annotations.',
            imgSource: 'images/certificates/spring-fundamentals.jpg'
        },

        {
            name: 'Containers and Cloud',
            anchor: 'https://softuni.bg/certificates/details/224760/49044736',
            pText: 'This course offers a deep dive into modern DevOps practices, focusing on containers, cloud technologies, and infrastructure management. By the end of this course, we have acquired the skills to efficiently deploy, manage, and monitor applications in a cloud environment. We have learned about Containers and Docker, Docker Compose, Container Orchestration, Cloud computing, Infrastructure as a code and how to use Terraform.',
            imgSource: 'images/certificates/containers-and-cloud.jpeg'
        },

        {
            name: 'DevOps',
            anchor: 'https://softuni.bg/certificates/details/219752/ebe2dc93',
            pText: 'This course provides an in-depth exploration of Software Engineering practices and the DevOps culture, equipping us with the tools and techniques necessary to streamline development and operations workflows. We have learned about, Version control with Git, Automated Testing, Continuous Integration and Continuous Deployment.',
            imgSource: 'images/certificates/software-engineering-and-DevOps.jpeg'
        },

        {
            name: 'Spring Data',
            anchor: 'https://softuni.bg/certificates/details/180536/5816b185',
            pText: `Spring Data course gave me knowledge how Application to Database Connection works. We have learned about ORM's and how they are build, also how to use Maven, Hibernate framework, Java Persistence API, Spring Data, Spring Data Repositories, Spring Data Query creation, Retrieving Data by Custom Queries, Java Persistence Query Language, Auto Mapping Objects(Data Transfer objects, Model Mapping), JSON and XML processing and Custom Configurations.`,
            imgSource: 'images/certificates/spring-data.jpg'
        },

        {
            name: 'MySQL',
            anchor: 'https://softuni.bg/certificates/details/172158/99896a3c',
            pText: 'In MySQL course, we started a long education over creating databases and how to handle with databases. We have learned about Data Definition and Data Types in MySQL, CRUD operations, Built-in functions of MySQL, Data Aggregation, Table Relations, Subqueries and JOINs, Transactions, Functions and Procedures. This is the certificate I acquired from this course.',
            imgSource: 'images/certificates/mysql-cert.jpg'
        },

        {
            name: 'Java OOP',
            anchor: 'https://softuni.bg/certificates/details/168988/1526a52d',
            pText: `Now it's getting interesting with the OOP course. Here we learned about the four pillars of Object-Oriented Programming — Abstraction, Encapsulation, Polymorphism, and Inheritance. Also, we learned about Reflection and Annotation and how to use them. Exception and Error handling, Design Patterns, Unit Testing and Test-Driven Development were also part of this course.`,
            imgSource: 'images/certificates/oop.jpg'
        },

        {
            name: 'Java Advanced',
            anchor: 'https://softuni.bg/certificates/details/161836/67400029',
            pText: 'Java Advanced course gave me more advanced knowledge in the programming language Java. Here I learned how to use more advanced features like Multidimensional Arrays, Stacks and Queues, HashSet, TreeSet, LinkedHashSet And Maps, Streams, Generics Syntax, Generic Classes and Interfaces, Generic Methods, Iterators and Comparators. And this is my certificate from this course.',
            imgSource: 'images/certificates/advanced.jpg'
        },

        {
            name: 'Java Fundamentals',
            anchor: 'https://softuni.bg/certificates/details/169293/1fb49d57',
            pText: 'In this course, we started to study more complex parts of the Java programming language like: Arrays, Lists, Methods, Associative Arrays, Text processing, Regular Expressions, Objects and Classes, and this gave me Fundamental knowledge in programming. This is my certificate from this course.',
            imgSource: 'images/certificates/fundamentals.jpg'
        },

        {
            name: 'Java Basic',
            anchor: 'https://softuni.bg/certificates/details/125160/ade37b33',
            pText: 'This is how my education started with the Programming Basics course. This course gave me basic coding skills using Java and how to use IDE. Here we started to study about data types and variables, conditional statements, nested conditional statements, loops, nested loops, how to debug code, how to work with console. And this is my certificate from this course.',
            imgSource: 'images/certificates/basics.jpg'
        },

        {
            name: 'HTML & CSS',
            anchor: 'https://softuni.bg/certificates/details/205480/0e987753',
            pText: 'This course was all about HTML & CSS and how to add CSS into our HTML documents. We learned about HTML Tags and Attributes, CSS Syntax and Selectors, about the Typography in CSS, CSS Properties and Units, Box Model and Position, CSS Layout, Forms and working with Forms and Responsive Web Design. And this is how I got this idea to make a page to introduce myself in a proper way.',
            imgSource: 'images/certificates/html-css.jpg'
        },

        {
            name: 'JavaScript',
            anchor: 'https://softuni.bg/certificates/details/212506/f08df490',
            pText: 'In this course, we learned about JavaScript and how to use JavaScript at the front end of a web application. We learned how to use Arrays, Strings, Objects and Functions in JavaScript, also we learned about Document Object Model and how to make events and to manipulate a DOM tree and a little bit about Browser Object Model, also we learned about HTTP and REST services and Asynchronous programming and how to use AJAX.',
            imgSource: 'images/certificates/js.jpg'
        }

    ];

}
