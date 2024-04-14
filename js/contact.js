const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', sendMail);

function sendMail(e) {

    e.preventDefault();

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    if (nameField.value === '' || emailField.value === '' || messageField.value === '') return;

    let params = {
        name: nameField.value,
        email: emailField.value,
        message: messageField.value,
    };

    const serviceID = 'service_3m9okqc';
    const templateID = 'template_gexa6zi';

    emailjs.send(serviceID, templateID, params)
        .then(
            (res) => {
                 name.value = '';
                 emailField.value = '';
                 messageField.value = '';
                console.log(res)
                alert('Your Message is Sent Successfully! Thank you :-)')
            }
        ).catch(err => console.log(err))
}