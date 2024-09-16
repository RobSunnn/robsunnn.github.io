// Checking the resolution with javascript

// Function to adjust the transform based on window width
function adjustTranslateY() {
    const element = document.querySelector('.translate-element');
    console.log(element)
    // Check the browser's width and height (resolution)
    const windowWidth = window.innerWidth;
    console.log(windowWidth)

    // You can adjust the logic here based on the resolution
    if (windowWidth > 1024) {
        // Large screens
        element.style.transform = 'translateY(0%)';
    } else {
        // Small screens
        element.style.transform = 'translateY(100%)';
    }
}

// Call the function on page load
window.onload = adjustTranslateY;

// Add event listener to detect window resize
window.addEventListener('resize', adjustTranslateY);
