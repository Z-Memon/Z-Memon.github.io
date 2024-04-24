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
// ... rest of your code ...

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

    var carousel = document.querySelector('.carousel');
var cards = document.querySelectorAll('.card');
var currentIndex = 0;

setInterval(function() {
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % cards.length; // Loop back to 0 when we've reached the end
    cards[currentIndex].classList.add('active');
    carousel.scrollLeft = cards[currentIndex].offsetLeft;
}, 5000); // Change card every 3 seconds
});

var navbarItems = document.querySelectorAll('.navbar a');
var cards = document.querySelectorAll('.card');

navbarItems.forEach(function(navbarItem) {
  navbarItem.addEventListener('click', function(e) {
    e.preventDefault();

    var category = this.getAttribute('data-category');

    cards.forEach(function(card) {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});