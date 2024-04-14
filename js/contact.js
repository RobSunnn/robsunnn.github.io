const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', sendMail);

function sendMail(e) {

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const validName = validateName(nameField.value);
    const validEmail = validateEmail(emailField.value);
    const validMessage = validateMessage(messageField.value);

    if (nameField.value === '' || emailField.value === '' || messageField.value === '' ||
    !validateName || !validEmail || !validateMessage) return;

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
        )
        .catch(err => console.log(err))
}

function validateEmail(input) {

  let validRegex = /^[A-Za-z0-9_-]+@[A-Za-z-]{2,}.[A-Za-z]{2,}$/gm;
  let validEmail = input.match(validRegex);

      if (validEmail) {
        return true;
      }

        alert("Invalid email address!");
        location.reload();

        return false;
}

function validateName(input) {

     let validRegex = /[A-Za-z0-9+_.-]{2,}/gm;
     let validName = input.match(validRegex);

          if (validName) {
            return true;
          }

     alert("Please enter your name. :-)");
     location.reload();
     return false;

}

function validateMessage(input) {
      let validRegex = /[A-Za-z0-9+_.-]{2,}/gm;
      let validMessage = input.match(validRegex);

          if (validMessage) {

             return true;
          }
      alert("You want to send me message so write something :) Thank you.");
      location.reload();

            return false;
}