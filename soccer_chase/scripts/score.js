 // score.js
 window.onload = function() {
  const pointsEarned = Number(localStorage.getItem('pointsEarned')) || 0;
  const pointsLost = Number(localStorage.getItem('pointsLost')) || 0;
  const pointsRedeemed = Number(localStorage.getItem('pointsRedeemed')) || 0;
  const overallScore = Number(localStorage.getItem('overallScore')) || 0;

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