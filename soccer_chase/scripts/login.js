document.addEventListener("DOMContentLoaded", function() {
    const userEmailInput = document.querySelector('.user-email input');
    const userPasswordInput = document.querySelector('.user-password input');
    const signInButton = document.querySelector('.sign-in');

    // Function to reset the background color and border of email and password fields
    function resetStyles() {
        const userEmailDiv = document.querySelector('.user-email');
        const userPasswordDiv = document.querySelector('.user-password');

        userEmailDiv.style.backgroundColor = 'transparent'; // Reset background color
        userEmailDiv.style.border = '1px solid var(--secondary-black)'; // Reset border

        userPasswordDiv.style.backgroundColor = 'transparent'; // Reset background color
        userPasswordDiv.style.border = '1px solid var(--secondary-black)'; // Reset border
    }

    // Function to reset the background color and border of email and password fields
    function resetBackground() {
        resetStyles();
        
        // Check if input fields are empty and inactive
        if (userEmailInput.value.trim() === '' && !userEmailInput.matches(':focus')) {
            userEmailDiv.style.backgroundColor = 'transparent'; // Reset background color
            userEmailDiv.style.border = '1px solid var(--secondary-black)'; // Reset border
        }
        if (userPasswordInput.value.trim() === '' && !userPasswordInput.matches(':focus')) {
            userPasswordDiv.style.backgroundColor = 'transparent'; // Reset background color
            userPasswordDiv.style.border = '1px solid var(--secondary-black)'; // Reset border
        }
    }

    // Add click event listeners to the email and password fields
    document.querySelector('.user-email').addEventListener('click', function() {
        resetStyles(); // Reset styles of all fields
        this.style.backgroundColor = 'rgba(113, 113, 113, 0.447)'; // Change background color to light gray
        document.querySelector('.user-email .text-wrapper-2').style.display = 'none'; // Hide text
        userEmailInput.style.display = 'block'; // Show input field
        this.style.border = 'none'; // Remove border
        userEmailInput.focus(); // Focus on the input field
    });

    // Add input event listener to the email input field
userEmailInput.addEventListener('input', function() {
    // Store the inputted username in local storage
    localStorage.setItem('username', this.value);
});

    document.querySelector('.user-password').addEventListener('click', function() {
        resetStyles(); // Reset styles of all fields
        this.style.backgroundColor = 'rgba(113, 113, 113, 0.447)'; // Change background color to light gray
        document.querySelector('.user-password .text-wrapper-2').style.display = 'none'; // Hide text
        userPasswordInput.style.display = 'block'; // Show input field
        this.style.border = 'none'; // Remove border
        userPasswordInput.focus(); // Focus on the input field
    });

    // Function to autofill username and password
    function autoFillCredentials(username, password) {
        userEmailInput.value = username;
        userPasswordInput.value = password;
    }

    // Add click event listener to the buttons for autofilling credentials
    document.querySelector('.continue-with').addEventListener('click', function() {
        autoFillCredentials('youremail@gmail.com', '************');
    });

    document.querySelector('.continue-with-google').addEventListener('click', function() {
        autoFillCredentials('youremail@gmail.com', '************');
    });

    document.querySelector('.continue-with-apple').addEventListener('click', function() {
        autoFillCredentials('youremail@gmail.com', '************');
    });

    // Function to check if both email and password fields are filled
    function checkFields() {
        return userEmailInput.value.trim() !== '' && userPasswordInput.value.trim() !== '';
    }

    // Add click event listener to the sign-in button
    signInButton.addEventListener('click', function() {
        if (!checkFields()) {
            return; // If fields are empty, do nothing
        }
        // Redirect to home page or perform further actions
        window.location.href = 'home.html'; // Change to your home page URL
    });

    // Add blur event listeners to the email and password input fields to reset background color
    userEmailInput.addEventListener('blur', resetBackground);
    userPasswordInput.addEventListener('blur', resetBackground);

    // Reset background color when the page loads
    resetBackground();
});
