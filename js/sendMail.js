export function sendMail(e) {
    e.preventDefault();
    
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

    emailjs.init({
        publicKey: "BwzIjmmEVLNY7N-2r",
    });

    const serviceID = 'service_3m9okqc';
    const templateID = 'template_gexa6zi';

    emailjs.send(serviceID, templateID, params)
        .then(
            (res) => {
                clearForms(nameField, emailField, messageField);
                alert('@@@@@     Your Message is Sent Successfully! Thank you :-)     @@@@@')
            }
        ).catch(err => console.log(err))
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