document.addEventListener("DOMContentLoaded", function() {
    const userEmailInput = document.querySelector('.user-email input');
    const userPasswordInput = document.querySelector('.user-password input');
    const signInButton = document.querySelector('.sign-in');

    // Add click event listeners to the email and password fields
    document.querySelector('.user-email').addEventListener('click', function() {
        this.style.backgroundColor = 'rgba(113, 113, 113, 0.447)'; // Change background color to light gray
        document.querySelector('.user-email .text-wrapper-2').style.display = 'none'; // Hide text
        userEmailInput.style.display = 'block'; // Show input field
    });

    document.querySelector('.user-password').addEventListener('click', function() {
        this.style.backgroundColor = 'rgba(113, 113, 113, 0.447)'; // Change background color to light gray
        document.querySelector('.user-password .text-wrapper-2').style.display = 'none'; // Hide text
        userPasswordInput.style.display = 'block'; // Show input field
    });

    // Function to check if both email and password fields are filled
    function checkFields() {
        return userEmailInput.value.trim() !== '' && userPasswordInput.value.trim() !== '';
    }

    // Add click event listener to the sign-in button
    signInButton.addEventListener('click', function() {
        if (checkFields()) {
            // Redirect to home page or perform further actions
            window.location.href = 'home.html'; // Change to your home page URL
        } else {
            alert('Please fill in both username/email and password.'); // Show an alert if fields are not filled
        }
    });
});
