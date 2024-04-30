document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('.carousel');
  const items = Array.from(carousel.querySelectorAll('.carousel-item'));

  function scaleItem(item, scale) {
    item.style.transform = `scale(${scale})`;
    item.style.opacity = `${0.5 + 0.5 * scale}`; // Change opacity in relation to scale
  }

  function updateCarousel() {
    const carouselRect = carousel.getBoundingClientRect();

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const carouselCenter = carouselRect.left + carouselRect.width / 2;
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distanceFromCenter = Math.abs(carouselCenter - itemCenter);
      const maxScaleDistance = carouselRect.width / 2;
      const scaleFactor = Math.max(1 - distanceFromCenter / maxScaleDistance, 0.7);

      scaleItem(item, scaleFactor);
      item.style.zIndex = Math.floor(scaleFactor * 1000);

      if (index < items.length - 1) {
        item.style.marginRight = `${-30}px`;
      }
    });

    const lastItem = items[items.length - 1];
    if (lastItem) {
      const lastItemRect = lastItem.getBoundingClientRect();
      if (lastItemRect.right < carouselRect.right) {
        scaleItem(lastItem, 1);
        lastItem.style.zIndex = "1000";
        lastItem.style.marginRight = "0px";
      }
    }
  }

  carousel.addEventListener('scroll', updateCarousel);
  window.addEventListener('resize', updateCarousel);
  updateCarousel();

  // Navbar interactivity
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const currentPage = window.location.pathname.split('/').pop();
    if (item.href.includes(currentPage)) {
      item.classList.add('active');
    }
  });

  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      navbarLinks.forEach(l => l.classList.remove('active-2'));
      link.classList.add('active-2');
      const category = link.dataset.category;
      items.forEach(item => {
        item.style.display = item.dataset.category === category || category === 'all' ? 'block' : 'none';
      });
      updateCarousel();
    });
  });

  // Initial click to set active category
  document.querySelector('#All')?.click();

  // Settings icon click
  const settingsIcon = document.querySelector('.settings_icon');
  if (settingsIcon) {
    settingsIcon.addEventListener('click', function () {
      window.location.href = 'settings.html';
    });
  }

  // Input focus and blur handling for disabling/enabling scrolling
  const inputs = document.getElementsByTagName('input');
  Array.from(inputs).forEach(input => {
    input.addEventListener('focus', function () {
      document.body.style.overflow = 'hidden';
    });
    input.addEventListener('blur', function () {
      document.body.style.overflow = '';
    });
  });
});
