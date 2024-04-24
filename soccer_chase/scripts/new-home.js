window.onload = function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.href.includes(currentPage)) {
            item.classList.add('active');
        }
    });

    // Get all the links in the navbar
    var navbarLinks = document.querySelectorAll('.navbar a');

    // Loop through the links
    for (var i = 0; i < navbarLinks.length; i++) {
        // Add a click event listener to each link
        navbarLinks[i].addEventListener('click', function () {
            // Remove the 'active' class from all links
            for (var i = 0; i < navbarLinks.length; i++) {
                navbarLinks[i].classList.remove('active-2');
            }
            // Add the 'active' class to the clicked link
            this.classList.add('active-2');
        });
    }

    // Simulate a click on the '#All' element after all event listeners have been set up
    document.querySelector('#All').click();
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

  document.querySelectorAll('.navbar a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const category = a.dataset.category;
        document.querySelectorAll('.carousel-item').forEach(item => {
            if (category === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = item.dataset.category === category ? 'block' : 'none';
            }
        });
    });
});



        