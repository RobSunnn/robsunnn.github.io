document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = [
        { element: document.querySelector('.info-about-me'), class: 'in-view' },
        { element: document.querySelector('.carousel-container'), class: 'in-view' },
        { element: document.querySelector('.contact-form'), class: 'in-view'},
        { element: document.querySelector('.quotes'), class: 'in-view'}
    ];

    function checkInView() {
        elementsToAnimate.forEach(item => {
            const rect = item.element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.element.classList.add(item.class);
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    checkInView(); // Check initially in case any element is already in view
});

const educationBtn = document.getElementById("education-btn");
const contactBtn = document.getElementById("contact-btn");
const homeBtn = document.getElementById("home-btn");

const btnArr = [educationBtn, contactBtn, homeBtn];

btnArr.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        if (btn.id === "education-btn") {
            document.getElementById("carouselExampleIndicators").scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        } else if (btn.id === "contact-btn") {
            document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        } else {
            document.getElementById("name-and-title").scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        }
    })
})