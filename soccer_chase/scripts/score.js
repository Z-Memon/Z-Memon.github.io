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

  // Call updateDisplayedScores function
  updateDisplayedScores(userId, this.id);
});
});

function updateDisplayedScores(userId, timeframe) {
  // Other code...

  if (timeframe === 'thisWeek') {
    const now = new Date();
    const currentWeekNumber = getWeekNumber(now);

    const lastUpdatedDate = new Date(localStorage.getItem('lastUpdatedDate'));
    const lastUpdatedWeekNumber = getWeekNumber(lastUpdatedDate);

    if (currentWeekNumber !== lastUpdatedWeekNumber) {
      localStorage.setItem('pointsEarned', '0');
      localStorage.setItem('lastUpdatedDate', now.toString());
    }
  }

  // Other code...
}

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return weekNo;
}



//function updateDisplayedScores(userId, timeframe) {
  //fetch(`/scores?userId=${userId}&timeframe=${timeframe}`)
   // .then(response => response.json())
    //.then(data => {
      // Assuming the server returns an object with the scores
      //document.querySelector('#points-earned').textContent = data.pointsEarned;
      //document.querySelector('#points-lost').textContent = data.pointsLost;
      //document.querySelector('#points-redeemed').textContent = data.pointsRedeemed;
      //document.querySelector('#overall-score').textContent = data.overallScore;

      // Store the updated scores in the local storage
      //localStorage.setItem('pointsEarned', data.pointsEarned);
      //localStorage.setItem('pointsLost', data.pointsLost);
      //localStorage.setItem('pointsRedeemed', data.pointsRedeemed);
      //localStorage.setItem('overallScore', data.overallScore);
    //})
    //.catch(error => console.error('Error:', error));
//}