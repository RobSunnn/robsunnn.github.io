document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = [
        { element: document.querySelector('.info-about-me'), class: 'in-view' },

    ];

    function checkInView() {
        console.log(elementsToAnimate);
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

