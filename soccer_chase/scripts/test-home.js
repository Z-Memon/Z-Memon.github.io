document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');

  function updateActiveItem() {
      const carouselRect = carousel.getBoundingClientRect();
      items.forEach(item => {
          const itemRect = item.getBoundingClientRect();
          const isActive = itemRect.left >= carouselRect.left && itemRect.right <= carouselRect.right;
          item.classList.toggle('active', isActive);
      });
  }

  function scaleDown(item, scale) {
      item.style.transform = `scale(${scale})`;
      item.style.opacity = `${0.5 + (scale - 0.8) * (1 / 0.2) * 0.5}`; // Adjust opacity based on scale
  }

  function updateCarouselItems() {
      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = (carouselRect.right + carouselRect.left) / 2;
      const itemWidth = items[0].getBoundingClientRect().width; // Assuming all items have the same width

      items.forEach((item, i) => {
          const itemRect = item.getBoundingClientRect();
          const itemCenter = (itemRect.right + itemRect.left) / 2;
          const distanceFromCenter = Math.abs(carouselCenter - itemCenter);
          const threshold = carouselRect.width * 0.5;

          // Calculate the scale based on distance from the center
          const scale = 1 - Math.min(distanceFromCenter / threshold, 0.2);
          scaleDown(item, scale);

          // Update z-index based on position in the carousel
          item.style.zIndex = String(1000 - Math.abs(i - Math.round(distanceFromCenter / itemWidth)));

          // Overlap and bring items closer as they move away from center
          const overlapDistance = 30; // The higher the number, the more overlap
          const offset = (i * -overlapDistance) + (carousel.scrollLeft / itemWidth) * overlapDistance;
          item.style.left = `${offset}px`;

          // Determine if an item is considered 'behind' based on its scale
          if (scale < 0.9) {
              item.classList.add('behind');
          } else {
              item.classList.remove('behind');
          }
      });

      // Special condition for the last item to ensure it scales up when in focus
      const lastItem = items[items.length - 1];
      const lastItemRect = lastItem.getBoundingClientRect();
      if (lastItemRect.right < carouselRect.right) {
          scaleDown(lastItem, 1);
          lastItem.classList.remove('behind');
          lastItem.style.zIndex = "1000";
      }

      updateActiveItem();
  }

  carousel.addEventListener('scroll', updateCarouselItems, { passive: true });
  updateCarouselItems();

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
          updateCarouselItems();
      });
  });

  document.querySelector('#All').click();

  const settingsIcon = document.querySelector('.settings_icon');
  settingsIcon?.addEventListener('click', function () {
      window.location.href = 'settings.html';
  });

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
