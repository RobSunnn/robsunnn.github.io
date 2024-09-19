import {sendMail} from '/js/sendMail.js';

export function createContactForm() {
    const contactFormContainer = document.createElement('div');
    contactFormContainer.classList.add('content');

    // Dynamically append a script to the document
    const mailScript = document.createElement('script');
    mailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    mailScript.type = 'text/javascript';
    document.body.appendChild(mailScript);

    // Create the main heading
    const heading = document.createElement('h4');
    heading.innerText = 'You can email me from here, or you can use the links below.';

    // Create the form element
    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.id = 'contact';
    form.appendChild(heading);

    // Create Name section
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('mb-3');

    const nameLabel = document.createElement('h6');
    nameLabel.innerHTML = '<label for="name" class="form-label">Name:</label>';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('form-control');
    nameInput.id = 'name';
    nameInput.placeholder = 'Your name...';

    // Append Name elements
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    // Create Email section
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('mb-2');

    const emailLabel = document.createElement('h6');
    emailLabel.innerHTML = '<label for="email" class="form-label">Email address:</label>';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.classList.add('form-control');
    emailInput.id = 'email';
    emailInput.placeholder = 'Your email...';

    // Append Email elements
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    // Create Message section
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('mb-4');

    const messageLabel = document.createElement('h6');
    messageLabel.innerHTML = '<label for="message">Message:</label>';

    const messageTextarea = document.createElement('textarea');
    messageTextarea.classList.add('form-control');
    messageTextarea.rows = 2;
    messageTextarea.id = 'message';
    messageTextarea.placeholder = 'Enter your message here...';

    // Append Message elements
    messageDiv.appendChild(messageLabel);
    messageDiv.appendChild(messageTextarea);

    // Append all sections to the form
    form.appendChild(nameDiv);
    form.appendChild(emailDiv);
    form.appendChild(messageDiv);

    // Create the button
    const sendButton = document.createElement('button');
    sendButton.type = 'submit';
    sendButton.classList.add('btn', 'btn-primary', 'send-btn');

    sendButton.innerText = 'Send mail';

    const quote = document.createElement('div');
    quote.classList.add('quote');
    quote.id = 'quotes';

    // Append the form and button to the container
    form.appendChild(sendButton);
    contactFormContainer.appendChild(form);
    contactFormContainer.appendChild(quote);

    sendButton.addEventListener('click', async (e) => {
        await sendMail(e)
    });

    return contactFormContainer;
}