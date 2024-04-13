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
