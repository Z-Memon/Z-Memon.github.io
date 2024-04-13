// Function to update scores for the current user
function updateCurrentUserScores(pointsEarned, pointsLost, pointsRedeemed) {
  // Retrieve current username from local storage
  const username = localStorage.getItem('username');

  // If username exists, update scores for that username
  if (username) {
      // Retrieve existing scores from local storage or initialize an empty object if it doesn't exist
      let userScores = JSON.parse(localStorage.getItem('userScores')) || {};

      // Update scores for the current username
      userScores[username] = {
          pointsEarned: pointsEarned,
          pointsLost: pointsLost,
          pointsRedeemed: pointsRedeemed,
          overallScore: pointsEarned - pointsLost - pointsRedeemed
      };

      // Store the updated scores back in local storage
      localStorage.setItem('userScores', JSON.stringify(userScores));
  } else {
      console.error('Username not found in local storage');
  }
}

// Function to retrieve scores for the current user
function getCurrentUserScores() {
  // Retrieve current username from local storage
  const username = localStorage.getItem('username');

  // If username exists, retrieve scores for that username
  if (username) {
      // Retrieve scores object from local storage
      let userScores = JSON.parse(localStorage.getItem('userScores')) || {};

      // Return scores for the current username, or empty scores if the username doesn't exist
      return userScores[username] || { pointsEarned: 0, pointsLost: 0, pointsRedeemed: 0, overallScore: 0 };
  } else {
      console.error('Username not found in local storage');
      return { pointsEarned: 0, pointsLost: 0, pointsRedeemed: 0, overallScore: 0 }; // Return empty scores
  }
}

// Example usage:
const pointsEarned = 10;
const pointsLost = 5;
const pointsRedeemed = 2;

// Update scores for the current user
updateCurrentUserScores(pointsEarned, pointsLost, pointsRedeemed);

// Retrieve scores for the current user
const currentUserScores = getCurrentUserScores();
console.log(currentUserScores); // Output the scores for the current user
