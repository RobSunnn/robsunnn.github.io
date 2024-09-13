import {createContactForm} from '/js/createContactForm.js';
import {fetchQuote} from '/js/fetchData.js';

const buttons = Array.from(document.getElementsByClassName('nav-link'));

buttons.forEach(button => button.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.textContent;
    const content = document.getElementById('content');

    let newContent = '';

    switch (page) {
        case 'Home':
            newContent = `
                    <h2>Home Page</h2>
                    <p>This is the home page content. Enjoy browsing!</p>
                `;
            break;
        case 'Contact':

            content.innerHTML = '';
            content.append(createContactForm());

            const fetchQuoteScript = document.createElement('script');
            fetchQuoteScript.src = '/js/fetchData.js';
            fetchQuoteScript.type = 'module';
            document.body.appendChild(fetchQuoteScript);
            fetchQuote();

            break;
        case 'Education':
            newContent = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
                aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
                aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
                aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9"
                aria-label="Slide 10"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10"
                aria-label="Slide 11"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11"
                aria-label="Slide 0"></button>
    </div>

    <!-- Carousel Items -->
    <div class="carousel-inner d-flex align-items-center justify-content-center">

        <div class="carousel-item active">
            <div class="carousel-card">
                <img src="images/certificates/spring-advanced.jpeg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/223730/0fcad70e">Spring Advanced</a>
                    </h5>
                    <p class="carousel-card-text">This comprehensive course dives deep into the Spring Framework,
                        focusing on
                        essential skills and advanced techniques for modern application development.
                        Throughout the course, we learn the principles of REST APIs, how to build and consume them,
                        how to
                        secure our applications by integrating Spring Security, how to handle errors effectively,
                        unit and integration tests.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/spring-fundamentals.jpg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/191514/eeadc9b7">Spring Fundamentals</a>
                    </h5>
                    <p class="carousel-card-text">In this course we started to build MVC projects using the Spring
                        Framework,
                        also we learned about the Spring MVC Controllers,
                        State management(cookies and sessions), http protocol and what is web server.
                        We were using Thymeleaf for Template Engine for dynamic generation of HTMLs, also how to
                        validate
                        fields in our HTML Forms using the Spring stereotype annotations.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/containers-and-cloud.jpeg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/224760/49044736">Containers and Cloud</a>
                    </h5>
                    <p class="carousel-card-text">This course offers a deep dive into modern DevOps practices, focusing
                        on
                        containers, cloud technologies, and infrastructure management. By the end of this course, we
                        have acquired the skills to efficiently deploy, manage, and monitor applications in a cloud
                        environment. We have learned about Containers and Docker, Docker Compose, Container
                        Orchestration, Cloud computing, Infrastructure as a code and how to use Terraform.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/software-engineering-and-DevOps.jpeg" class="d-block"
                     alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/219752/ebe2dc93">DevOps</a>
                    </h5>
                    <p class="carousel-card-text">This course provides an in-depth exploration of Software Engineering
                        practices and the DevOps culture, equipping us with the tools and techniques necessary to
                        streamline development and operations workflows. We have learned about, Version control with
                        Git, Automated Testing, Continuous Integration and Continuous Deployment.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/spring-data.jpg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/180536/5816b185">Spring Data Course</a>
                    </h5>
                    <p class="carousel-card-text">Spring Data course gave me knowledge how Application to Database
                        Connection
                        works. We have learned about ORM's and how they are build, also how to use Maven, Hibernate
                        framework, Java Persistence API, Spring Data, Spring Data Repositories, Spring Data Query
                        creation, Retrieving Data by Custom Queries, Java Persistence Query Language, Auto Mapping
                        Objects(Data Transfer objects, Model Mapping), JSON and XML processing and Custom
                        Configurations.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/mysql-cert.jpg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/172158/99896a3c">MySQL Course</a>
                    </h5>
                    <p class="carousel-card-text">In MySQL course, we started a long education over creating databases
                        and
                        how to
                        handle with databases.
                        We have learned about Data Definition and Data Types in MySQL, CRUD
                        operations, Built-in functions of MySQL, Data Aggregation, Table Relations, Subqueries and
                        JOINs, Transactions, Functions and Procedures.
                        This is the
                        certificate I acquired from this course.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/oop.jpg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/168988/1526a52d">Java OOP</a>
                    </h5>
                    <p class="carousel-card-text">Now it's getting interesting with the OOP course. Here we learned
                        about the
                        four pillars of Object-Oriented Programming — Abstraction, Encapsulation, Polymorphism, and
                        Inheritance. Also, we learned about Reflection and Annotation and how to use them. Exception
                        and
                        Error handling, Design Patterns, Unit Testing and Test-Driven Development were also part of
                        this course.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/advanced.jpg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/161836/67400029">Java Advanced</a>
                    </h5>
                    <p class="carousel-card-text">Java Advanced course gave me more advanced knowledge in the
                        programming
                        language Java. Here I learned how to use more advanced features like Multidimensional
                        Arrays,
                        Stacks and Queues, HashSet, TreeSet, LinkedHashSet And Maps, Streams, Generics Syntax,
                        Generic
                        Classes and Interfaces, Generic Methods, Iterators and Comparators. And this is my
                        certificate
                        from this course.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/fundamentals.jpg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/169293/1fb49d57">Java Fundamentals</a>
                    </h5>
                    <p class="carousel-card-text">In this course, we started to study more complex parts of the Java
                        programming
                        language like: Arrays, Lists, Methods, Associative Arrays, Text processing, Regular
                        Expressions,
                        Objects and Classes, and this gave me Fundamental knowledge in programming.
                        This is my certificate from this course.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/basics.jpg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/125160/ade37b33">Java Basics</a>
                    </h5>
                    <p class="carousel-card-text">This is how my education started with the Programming Basics course.
                        This
                        course gave me basic coding skills using Java and how to use IDE. Here we started to study
                        about
                        data types and variables, conditional statements, nested conditional statements, loops,
                        nested
                        loops, how to debug code, how to work with console. And this is my certificate from this
                        course.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/html-css.jpg" class="d-block" alt="Spring Advanced">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/205480/0e987753">HTML & CSS</a>
                    </h5>
                    <p class="carousel-card-text">This course was all about HTML & CSS and how to add CSS into our HTML
                        documents. We learned about HTML Tags and Attributes, CSS Syntax and Selectors, about the
                        Typography in CSS, CSS Properties and Units, Box Model and Position, CSS Layout, Forms and
                        working with Forms and Responsive Web Design. And this is how I got this idea to make a page
                        to
                        introduce myself in a proper way.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="carousel-card">
                <img src="images/certificates/js.jpg" class="d-block" alt="JS Front End">
                <div class="carousel-card-body">
                    <h5 class="card-title">
                        <a href="https://softuni.bg/certificates/details/212506/f08df490">JS Front-End</a>
                    </h5>
                    <p class="carousel-card-text">In this course, we learned about JavaScript and how
                        to use JavaScript at the front end of a web application.
                        We learned how to use
                        Arrays, Strings, Objects and Functions in JavaScript, also we learned about
                        Document Object Model and how to make events and to manipulate a DOM tree
                        and a little bit about Browser Object Model, also we learned about HTTP and
                        REST services and Asynchronous programming and how to use AJAX.</p>
                </div>
            </div>
        </div>
        <!-- Carousel controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
                `;
            break;
    }

    content.classList.remove('fadeIn');

    setTimeout(() => {
        content.scrollIntoView({behavior: 'smooth', block: 'center'});
    }, 50);

    setTimeout(() => {
        //Here I check for new content length because I need to know which button is pressed
        //to know which content to show
        if (newContent.length > 0) {
            content.innerHTML = newContent;
        }
        content.classList.add('fadeIn');
        content.scrollIntoView({behavior: 'smooth', block: 'center'});
    }, 500);
}))


