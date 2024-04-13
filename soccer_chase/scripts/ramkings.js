// rankings.js
window.onload = function() {
    const rankingsTable = document.querySelector('#rankingsTable');
  
    // Fetch the rankings data from your server or local storage
    // For this example, we'll use dummy data
    const rankingsData = [
      { rank: 1, user: 'User1', score: 100 },
      { rank: 2, user: 'User2', score: 90 },
      { rank: 3, user: 'User3', score: 80 },
      // ...
    ];
  
    // Populate the table with the fetched data
    rankingsData.forEach(data => {
      const row = rankingsTable.insertRow(-1);
      row.insertCell(0).textContent = data.rank;
      row.insertCell(1).textContent = data.user;
      row.insertCell(2).textContent = data.score;
    });
  };

  // Function to update rankings data in local storage
function updateRankingsData(newRankingsData) {
  // Convert the new data to a JSON string and store it in local storage
  localStorage.setItem('rankingsData', JSON.stringify(newRankingsData));
}

// Usage:
const newRankingsData = [
  { rank: 1, user: 'User4', score: 110 },
  { rank: 2, user: 'User1', score: 100 },
  { rank: 3, user: 'User2', score: 90 },
  // ...
];
updateRankingsData(newRankingsData);

function updateRanking(user, score) {
  // Retrieve the current rankings from local storage
  let rankings = localStorage.getItem('usernames');

  // Parse the rankings into an array if they exist, or create an empty array
  rankings = rankings ? JSON.parse(rankings) : [];

  // Add the new user's score to the array
  rankings.push({ user, score });

  // Sort the array by score in descending order
  rankings.sort((a, b) => b.score - a.score);

  // If the array length is more than 10, remove the last element
  if (rankings.length > 10) {
      rankings.pop();
  }

  // Store the updated rankings back to local storage
  localStorage.setItem('usernames', JSON.stringify(rankings));
}

// Usage:
updateRanking('User4', overallScore);