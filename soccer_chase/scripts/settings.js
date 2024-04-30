document.addEventListener("DOMContentLoaded", function () {
  // Sound toggle initialization and event handling
  const soundToggle = document.getElementById('sound_toggle');
  const soundEnabled = localStorage.getItem('soundEnabled');

  if (soundEnabled === null) {
      localStorage.setItem('soundEnabled', 'true'); // Default to true if not set
      soundToggle.checked = true;
  } else {
      soundToggle.checked = (soundEnabled === 'true');
  }

  soundToggle.addEventListener('change', function () {
      localStorage.setItem('soundEnabled', this.checked.toString());
      console.log('Sound setting: ' + (this.checked ? 'ON' : 'OFF'));
  });

  // Notification toggle event handling
  const notificationToggle = document.getElementById('notification_toggle');
  notificationToggle.addEventListener('change', function () {
      console.log('Notification setting: ' + (this.checked ? 'ON' : 'OFF'));
  });

  // Handle close icon click
  const closeIcon = document.querySelector('.close');
  closeIcon.addEventListener('click', function () {
      window.history.back();
  });

  // Handle edit button alerts
  const editButtons = document.querySelectorAll('.edit');
  editButtons.forEach(button => {
      button.addEventListener('click', function () {
          alert('Edit feature coming soon!');
      });
  });

  // Highlight the current page in the navbar
  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
      if (item.href.includes(currentPage)) {
          item.classList.add('active');
      }
  });
});
