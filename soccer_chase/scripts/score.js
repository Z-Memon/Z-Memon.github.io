// score.js
 window.onload = function() {

  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.href.includes(currentPage)) {
      item.classList.add('active');
    }
  });

  document.querySelector('#today').addEventListener('click', function() {
    updateDisplayedScores(userId, 'today');
  });
  
  document.querySelector('#thisWeek').addEventListener('click', function() {
    updateDisplayedScores(userId, 'thisWeek');
  });
  
  document.querySelector('#allTime').addEventListener('click', function() {
    updateDisplayedScores(userId, 'allTime');
  });
   // Trigger a click event on the 'today' button
document.querySelector('#today').click();

  let currentUserData = JSON.parse(localStorage.getItem('currentUserData'));

  document.querySelector('#display-name').textContent = currentUserData.displayName;
  document.querySelector('#points-earned').textContent = currentUserData.pointsEarned;
  document.querySelector('#points-lost').textContent = currentUserData.pointsLost;
  document.querySelector('#overall-score').textContent = currentUserData.overallScore;
  document.querySelector('#profile-pic').src = currentUserData.photoURL || currentUserData.profilePic;
  console.log(currentUserData.photoURL);
  console.log(currentUserData);

  
};


const scoreButtons = document.querySelectorAll('.score_options button');

scoreButtons.forEach(btn => {
btn.addEventListener('click', function() {
  // Remove 'active-btn' class from all buttons
  scoreButtons.forEach(button => {
    button.classList.remove('active-btn');
  });

  // Add 'active-btn' class to the clicked button
  this.classList.add('active-btn');
});
});

function goBack() {
  window.history.back();
}
