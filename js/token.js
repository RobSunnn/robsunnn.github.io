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