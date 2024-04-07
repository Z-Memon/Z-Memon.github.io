document.addEventListener("DOMContentLoaded", function () {
    let username = ""; // Variable to store username input
    let password = ""; // Variable to store password input

    // Select the sign-in button
    const signInButton = document.querySelector('.sign-in');

    // Add click event listener to the sign-in button
    signInButton.addEventListener('click', function () {
        // Check if both username and password meet the minimum length requirement
        if (username.length >= 6 && password.length >= 6) {
            // Redirect to home page if both fields meet the requirement
            window.location.href = 'home.html';
        }
    });

    // Select the username or email field
    const usernameField = document.querySelector('.user-email .text-wrapper-2');

    // Add click event listener to the username field
    usernameField.addEventListener('click', function () {
        // Prompt the user to enter their username
        username = prompt("Please enter your username or email:");
        // Update the field with the entered username
        if (username) {
            usernameField.textContent = username;
        }
    });

    // Select the password field
    const passwordField = document.querySelector('.user-password .text-wrapper-2');

    // Add click event listener to the password field
    passwordField.addEventListener('click', function () {
        // Prompt the user to enter their password
        password = prompt("Please enter your password:");
        // Update the field with asterisks to indicate password input
        if (password) {
            passwordField.textContent = '*'.repeat(password.length);
        }
    });
});
