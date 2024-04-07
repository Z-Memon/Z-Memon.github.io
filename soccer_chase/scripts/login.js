document.addEventListener("DOMContentLoaded", function () {
    // Flag to track if the username and password fields have been modified
    let fieldsModified = false;

    // Select all the divs you want to trigger the script
    const signInButtons = document.querySelectorAll('.sign-in, .continue-with, .continue-with-google, .continue-with-apple');

    // Add click event listener to each div
    signInButtons.forEach(function(signInButton) {
        signInButton.addEventListener('click', function () {
            // If fields were modified once, navigate to home-page.html on second click
            if (fieldsModified) {
                window.location.href = 'home.html';
            } else {
                // Change user-email background color
                const userEmailDiv = document.querySelector('.user-email');
                userEmailDiv.style.backgroundColor = 'rgba(113, 113, 113, 0.447)';

                // Change password background color
                const userPasswordDiv = document.querySelector('.login .user-password');
                userPasswordDiv.style.backgroundColor = 'rgba(113, 113, 113, 0.447)';

                fieldsModified = true; // Set the flag to true after fields are modified once
            }
        });
    });

    // Select the username or email field
    const usernameField = document.querySelector('.user-email .text-wrapper-2');

    // Add click event listener to the username field
    usernameField.addEventListener('click', function () {
        // Allow users to directly type their username or email
        usernameField.contentEditable = true;
        usernameField.focus();
        // Make the placeholder text disappear
        usernameField.textContent = '';
    });

    // Select the password field
    const passwordField = document.querySelector('.user-password .text-wrapper-2');

    // Add click event listener to the password field
    passwordField.addEventListener('click', function () {
        // Allow users to directly type their password
        passwordField.contentEditable = true;
        passwordField.focus();
        // Make the placeholder text disappear
        passwordField.textContent = '';
    });
});
