window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.href.includes(currentPage)) {
        item.classList.add('active');
      }
    });

  
    
    let currentUserData = JSON.parse(localStorage.getItem('currentUserData'));

  console.log('currentUserData:', currentUserData);
  console.log('overall-score element:', document.querySelector('#overall-score'));

  document.querySelector('#display-name').textContent = currentUserData.displayName;
  document.querySelector('#overall-score').textContent = "Points:" + currentUserData.overallScore;
  document.querySelector('#profile-pic').src = currentUserData.photoURL || currentUserData.profilePic;
    };
