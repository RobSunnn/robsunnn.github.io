// Function to get CSRF token and store it in sessionStorage
function fetchCsrfToken() {
    fetch('https://robsunnn-api.azurewebsites.net/csrf-token', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            sessionStorage.setItem('csrfToken', data.token); // Store CSRF token in sessionStorage
            console.log('CSRF Token fetched and stored:', data.token);
        })
        .catch(error => {
            console.error('Error fetching CSRF token:', error);
        });
}

window.addEventListener("beforeunload", function () {
    const csrfToken = sessionStorage.getItem('csrfToken');

    if (csrfToken) {
        navigator.sendBeacon('https://robsunnn-api.azurewebsites.net/remove-token', JSON.stringify({ token: csrfToken }));
    }
});

// Call the function on page load
window.onload = function() {
    fetchCsrfToken();
};
