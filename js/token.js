function generateToken() {
    return Math.random().toString(36).substring(2);
}

document.addEventListener("DOMContentLoaded", function () {
    const token = generateToken();
    sessionStorage.setItem('apiToken', token);

    fetch('https://robsunnn-api.azurewebsites.net/store-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token })
    }).then(response => console.log(response));
});

// Send a request to the server to remove the token when the user closes the page
window.addEventListener("beforeunload", function () {
    const token = sessionStorage.getItem('apiToken');

    if (token) {
        navigator.sendBeacon('https://robsunnn-api.azurewebsites.net/remove-token', JSON.stringify({ token: token }));
    }
});

// Function to get CSRF token and store it in sessionStorage
function fetchCsrfToken() {
    fetch('https://robsunnn-api.azurewebsites.net/csrf-token', {
        credentials: 'include'
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

// Call the function on page load
window.onload = function() {
    fetchCsrfToken();
};
