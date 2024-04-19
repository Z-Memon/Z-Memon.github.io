window.onload = function () {
  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.href.includes(currentPage)) {
      item.classList.add('active');
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  // Select the settings icon by its class
  var settingsIcon = document.querySelector('.settings_icon');

  // Check if the settingsIcon element exists
  if (settingsIcon) {
    // Add click event listener to the settings icon
    settingsIcon.addEventListener('click', function () {
      // Redirect to settings.html
      window.location.href = 'settings.html';
    });
  } else {
    console.error('Settings icon not found!');
  }
});

// This script will disable scrolling on input focus and re-enable it on input blur
document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function() {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    });
    inputs[i].addEventListener('blur', function() {
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  }
});