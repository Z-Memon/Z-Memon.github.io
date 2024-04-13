document.addEventListener("DOMContentLoaded", function() {
    const userEmailInput = document.querySelector('.user-email input');
    const userPasswordInput = document.querySelector('.user-password input');
    const signInButton = document.querySelector('.sign-in');
    const userEmailDiv = document.querySelector('.user-email');
    const userPasswordDiv = document.querySelector('.user-password');

    // Function to reset the background color and border of email and password fields
    function resetStyles() {
        userEmailDiv.style.backgroundColor = 'transparent';
        userEmailDiv.style.border = '1px solid var(--secondary-black)';
        userPasswordDiv.style.backgroundColor = 'transparent';
        userPasswordDiv.style.border = '1px solid var(--secondary-black)';
    }

    // Function to reset the background color and border of email and password fields
    function resetBackground() {
        resetStyles();
        
        if (userEmailInput.value.trim() === '' && !userEmailInput.matches(':focus')) {
            userEmailDiv.style.backgroundColor = 'transparent';
            userEmailDiv.style.border = '1px solid var(--secondary-black)';
        }
        if (userPasswordInput.value.trim() === '' && !userPasswordInput.matches(':focus')) {
            userPasswordDiv.style.backgroundColor = 'transparent';
            userPasswordDiv.style.border = '1px solid var(--secondary-black)';
        }
    }

    // Add click event listeners to the email and password fields
    userEmailDiv.addEventListener('click', function() {
        resetStyles();
        this.style.backgroundColor = 'rgba(113, 113, 113, 0.447)';
        document.querySelector('.user-email .text-wrapper-2').style.display = 'none';
        userEmailInput.style.display = 'block';
        this.style.border = 'none';
        userEmailInput.focus();
    });

    // Add input event listener to the email input field
    userEmailInput.addEventListener('input', function() {
        // Get the existing usernames from local storage or initialize an empty array if it doesn't exist
        let usernames = JSON.parse(localStorage.getItem('usernames')) || [];
        // Add the new username to the array if it doesn't already exist
        if (!usernames.includes(this.value)) {
            usernames.push(this.value);
            localStorage.setItem('usernames', JSON.stringify(usernames));
            console.log('Setting username in local storage:', this.value);
        } else {
            console.log('Username already exists in local storage:', this.value);
        }
    });

    // Add input event listener to the password input field
    userPasswordInput.addEventListener('input', function() {
        // Get the existing username from the email input field
        let username = userEmailInput.value;
        // Get the existing usernames from local storage or initialize an empty array if it doesn't exist
        let usernames = JSON.parse(localStorage.getItem('usernames')) || [];
        // Add the username to the array if it doesn't already exist
        if (!usernames.includes(username)) {
            usernames.push(username);
            localStorage.setItem('usernames', JSON.stringify(usernames));
            console.log('Setting username in local storage:', username);
        } else {
            console.log('Username already exists in local storage:', username);
        }
    });

    userPasswordDiv.addEventListener('click', function() {
        resetStyles();
        this.style.backgroundColor = 'rgba(113, 113, 113, 0.447)';
        document.querySelector('.user-password .text-wrapper-2').style.display = 'none';
        userPasswordInput.style.display = 'block';
        this.style.border = 'none';
        userPasswordInput.focus();
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
