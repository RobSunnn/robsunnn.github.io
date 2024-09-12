import { sendMail } from '/js/sendMail.js';

export function createContactForm() {
    const contactFormContainer = document.createElement('div');

    // Dynamically append a script to the document


    const mailScript = document.createElement('script');
    mailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    mailScript.async = true;
    mailScript.type = 'text/javascript';
    document.body.appendChild(mailScript);

    // const aboutMeScript = document.createElement('script');
    // aboutMeScript.src = '/js/fetchData.js';
    // aboutMeScript.async = true;
    // document.body.appendChild(aboutMeScript);

    // Create the main heading
    const heading = document.createElement('h4');
    heading.innerText = 'If you want to contact me, you can email me from here, or you can use the links below.';
    contactFormContainer.appendChild(heading);

    // Create the form element
    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.id = 'contact';

    // Create Name section
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('mb-3');

    const nameLabel = document.createElement('h5');
    nameLabel.innerHTML = '<label for="name" class="form-label">Name:</label>';
    const nameHelp = document.createElement('h6');
    nameHelp.innerText = 'At least two characters ...';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('form-control');
    nameInput.id = 'name';
    nameInput.placeholder = 'Your name...';

    // Append Name elements
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameHelp);
    nameDiv.appendChild(nameInput);

    // Create Email section
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('mb-2');

    const emailLabel = document.createElement('h5');
    emailLabel.innerHTML = '<label for="email" class="form-label">Email address:</label>';
    const emailHelp = document.createElement('h6');
    emailHelp.innerText = 'Please enter a valid email ...';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.classList.add('form-control');
    emailInput.id = 'email';
    emailInput.placeholder = 'Your email...';

    // Append Email elements
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailHelp);
    emailDiv.appendChild(emailInput);

    // Create Message section
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('mb-4');

    const messageLabel = document.createElement('h5');
    messageLabel.innerHTML = '<label for="message">Message:</label>';
    const messageHelp = document.createElement('h6');
    messageHelp.innerText = 'Please at least say hi :-) ...';

    const messageTextarea = document.createElement('textarea');
    messageTextarea.classList.add('form-control');
    messageTextarea.rows = 2;
    messageTextarea.id = 'message';
    messageTextarea.placeholder = 'Enter your message here...';

    // Append Message elements
    messageDiv.appendChild(messageLabel);
    messageDiv.appendChild(messageHelp);
    messageDiv.appendChild(messageTextarea);

    // Append all sections to the form
    form.appendChild(nameDiv);
    form.appendChild(emailDiv);
    form.appendChild(messageDiv);

    // Create the button
    const sendButton = document.createElement('button');
    sendButton.type = 'submit';
    sendButton.classList.add('btn', 'btn-primary', 'btn-lg', 'send-btn');

    sendButton.innerText = 'Send mail';


    // Append the form and button to the container
    contactFormContainer.appendChild(form);
    contactFormContainer.appendChild(sendButton);

    sendButton.addEventListener('click', (e) => {
        sendMail(e)
    });

    // Create Random Quote section
    // const quoteHeading = document.createElement('h2');
    // quoteHeading.classList.add('text-center');
    // quoteHeading.innerText = 'Random Quote';
    //
    // const quotesDiv = document.createElement('div');
    // quotesDiv.classList.add('quotes');
    // quotesDiv.id = 'quotes';

    // Append Quote section
    // contactFormContainer.appendChild(quoteHeading);
    // contactFormContainer.appendChild(quotesDiv);

    return contactFormContainer;
}