// Used for form validation and interactivity in the webpage
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('formMessage').textContent = 'Thank you for contacting me, ' + name + '!';
    } else {
        document.getElementById('formMessage').textContent = 'Please make sure all fields are filled out.';
    }
});
