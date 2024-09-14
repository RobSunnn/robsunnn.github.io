// Function to create and display the popup


export function getPopup() {
       // Get the elements
       const triggerField = document.getElementById('triggerField');
       const popup = document.getElementById('popup');
       const closeBtn = document.getElementById('closeBtn');

       // Show the popup when the field is clicked
       triggerField.addEventListener('click', function() {
           popup.style.display = 'block';
       });

       // Hide the popup when the close button is clicked
       closeBtn.addEventListener('click', function() {
           popup.style.display = 'none';
       });

       // Optional: Hide the popup if the user clicks outside of it
       window.addEventListener('click', function(event) {
           if (event.target === popup) {
               console.log('event.target')
               popup.style.display = 'none';
           }
       });
}
