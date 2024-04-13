 // score.js
 window.onload = function() {
  const username = localStorage.getItem('currentUsername');
const userScores = JSON.parse(localStorage.getItem(username)) || {
  pointsEarned: 0,
  pointsLost: 0,
  pointsRedeemed: 0,
  overallScore: 0
};

const pointsEarned = userScores.pointsEarned;
const pointsLost = userScores.pointsLost;
const pointsRedeemed = userScores.pointsRedeemed;
const overallScore = userScores.overallScore;

  document.querySelector('#points-earned').textContent = pointsEarned;
  document.querySelector('#points-lost').textContent = pointsLost;
  document.querySelector('#points-redeemed').textContent = pointsRedeemed;
  document.querySelector('#overall-score').textContent = overallScore;

  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.href.includes(currentPage)) {
      item.classList.add('active');
    }
  });

  document.querySelector('#thisWeek').addEventListener('click', function() {
    updateDisplayedScores(userId, 'thisWeek');
  });
  
  document.querySelector('#allTime').addEventListener('click', function() {
    updateDisplayedScores(userId, 'allTime');
  });
   // Trigger a click event on the 'today' button
document.querySelector('#today').click();
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
