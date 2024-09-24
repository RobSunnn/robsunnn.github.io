export async function sendMail(e) {
    e.preventDefault();
    const url = 'https://robsunnn-api.azurewebsites.net/sendEmail';
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const validName = validateName(nameField.value);
    if (!validName) {
            return;
        }
    const validEmail = validateEmail(emailField.value);
    if (!validEmail) {
            return;
        }
    const validMessage = validateMessage(messageField.value);
    if (!validMessage) {
            return;
        }

    let params = {
        name: nameField.value,
        email: emailField.value,
        message: messageField.value,
    };

    try {
        // Send the POST request to your Spring Boot backend
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
            mode: 'cors'
        });

        // Check if the request was successful
        if (response.ok) {
            const result = await response.text(); // Or use response.json() if returning JSON
            alert('Your message has been sent successfully! Thank you.'); // Optional success message
            console.log(result); // Log the response
        } else {
            const errorMessage = await response.text();
            alert(`Failed to send email: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email.');
    }
}

function validateEmail(input) {
    if (input.length > 100) {
        alert("Your email is too long, please use different one.\nThank you.");
        return false;
    }
    let validRegex = /[A-Za-z0-9_-]+@[A-Za-z-]{2,}\.[A-Za-z]+/gm;
    let validEmail = input.match(validRegex);

    if (validEmail) {
        return true;
    }

    alert("-----=> Invalid email address! <=-----\n    -----=> Please enter a valid email... <=-----");

    return false;
}

function validateName(input) {
    // if (input.length > 100) {
    //     alert("Your name is too long, please write your name initials.\nThank you.");
    //     return false;
    // }
    let validRegex = /[A-Za-z0-9+_.-]{2,}/gm;
    let validName = input.match(validRegex);

    if (validName) {
        return true;
    }

    alert("------>    Please enter your name. :-)    <------");

    return false;
}

function validateMessage(input) {
    if (input.length > 400) {
        alert("Your message is too long, please write something shorter. :)\nThank you.");
        return false;
    }

    let validRegex = /[A-Za-z0-9+_.-]{2,}/gm;
    let validMessage = input.match(validRegex);

    if (validMessage) {
        return true;
    }
    alert("You want to send me message so write something :)\nThank you.");

    return false;
}

function clearForms(nameField, emailField, messageField) {
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
}