document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = [
        { element: document.querySelector('.info-about-me'), class: 'in-view' },
        { element: document.querySelector('.content-container'), class: 'in-view' },

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
    checkInView();
});

