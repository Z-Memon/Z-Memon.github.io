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

  function updateScores(scoreType, todayScore, weekScore, allTimeScore) {
    // Retrieve the current scores
    let userScores = JSON.parse(localStorage.getItem(userId)) || {};
    let scores = userScores[scoreType] || {today: 0, thisWeek: 0, allTime: 0, lastUpdate: new Date().toISOString()};

    let currentDate = new Date().toISOString().split('T')[0];
    let currentWeek = getWeekNumber(new Date());

    // Get the last update date and week
    let lastUpdateDate = new Date(scores.lastUpdate).toISOString().split('T')[0];
    let lastUpdateWeek = getWeekNumber(new Date(scores.lastUpdate));

    // If the current date is different from the last update date, reset the 'today' score
    if (currentDate !== lastUpdateDate) {
        scores.today = 0;
    }

    // If the current week is different from the last update week, reset the 'thisWeek' score
    if (currentWeek !== lastUpdateWeek) {
        scores.thisWeek = 0;
    }

    // Update the scores
    scores.today += todayScore;
    scores.thisWeek += weekScore;
    scores.allTime += allTimeScore;

    // Update the last update date
    scores.lastUpdate = new Date().toISOString();

    // Store the updated scores
    userScores[scoreType] = scores;
    localStorage.setItem(userId, JSON.stringify(userScores));
}

// Function to get the week number of a date
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    let weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}

function updateDisplayedScores(userId, timePeriod) {
  const userScores = JSON.parse(localStorage.getItem(userId)) || {};
  const pointsEarned = userScores['pointsEarned'] || {today: 0, thisWeek: 0, allTime: 0};
  const pointsLost = userScores['pointsLost'] || {today: 0, thisWeek: 0, allTime: 0};
  const pointsRedeemed = userScores['pointsRedeemed'] || {today: 0, thisWeek: 0, allTime: 0};
  const overallScore = userScores['overallScore'] || {today: 0, thisWeek: 0, allTime: 0};
  
  document.querySelector('#points-earned').textContent = pointsEarned[timePeriod];
  document.querySelector('#points-lost').textContent = pointsLost[timePeriod];
  document.querySelector('#points-redeemed').textContent = pointsRedeemed[timePeriod];
  document.querySelector('#overall-score').textContent = overallScore[timePeriod];
}

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