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
  // Select the close icon div
  var closeIcon = document.querySelector('.close');

  // Add click event listener to the close icon
  closeIcon.addEventListener('click', function () {
    // Go back to the previous page
    window.history.back();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const editButtons = document.querySelectorAll('.edit');

  editButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Edit feature coming soon!');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Existing DOMContentLoaded content

  // Toggle event listeners
  document.getElementById('sound_toggle').addEventListener('change', function () {
    console.log('Sound setting: ' + (this.checked ? 'ON' : 'OFF'));
  });

  document.getElementById('notification_toggle').addEventListener('change', function () {
    console.log('Notification setting: ' + (this.checked ? 'ON' : 'OFF'));
  });
});
