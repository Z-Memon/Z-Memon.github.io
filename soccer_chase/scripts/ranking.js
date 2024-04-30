
// Initialize Firebase
var firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyBT7mB8uKFLA9UFjHsqNxInorgJDdGvFuc",
  authDomain: "soccer-chase-2.firebaseapp.com",
  projectId: "soccer-chase-2",
  storageBucket: "soccer-chase-2.appspot.com",
  messagingSenderId: "511702165893",
  appId: "1:511702165893:web:280ba273f8c2fd83113cec"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

window.onload = function() {
  const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.href.includes(currentPage)) {
        item.classList.add('active');
      }
    });
  // Retrieve scores from Firebase
  let scoresRef = database.ref('scores');
  scoresRef.once('value', function(snapshot) {
    let scores = snapshot.val();

    // Sort scores in descending order
    let sortedScores = Object.entries(scores).sort((a, b) => b[1].overallScore - a[1].overallScore);
    
    // Update ranks page with sorted scores
    let ranksContainer = document.querySelector('#ranks-container');
    ranksContainer.innerHTML = '';
    sortedScores.forEach(([userId, userData], index) => {
      let rankItem = document.createElement('div');
      rankItem.className = 'rank-item';
    
      let userInfo = document.createElement('div');
      userInfo.className = 'user-info';
    
      //let userEmail = document.createElement('p');
      //userEmail.textContent = `${userData.email}`;
      //userEmail.className = 'user-email';
      //userInfo.appendChild(userEmail);

      let userDisplayName = document.createElement('p');
      userDisplayName.textContent = `${userData.displayName}`;
      userDisplayName.className = 'user-display-name';
      userInfo.appendChild(userDisplayName);
    
      let userPoints = document.createElement('p');
      userPoints.textContent = `Points: ${userData.overallScore}`;
      userPoints.className = 'user-points';
      userInfo.appendChild(userPoints);
    
      rankItem.appendChild(userInfo);
    
      let rankNumber = document.createElement('p');
      rankNumber.textContent = `${index + 1}`;
      rankNumber.className = 'rank-number';
      rankItem.appendChild(rankNumber);
    
      rankItem.addEventListener('click', function() {
        localStorage.setItem('currentUserData', JSON.stringify(userData));
      // Navigate to the user stats page
      window.location.href = "score.html";
      });

      ranksContainer.appendChild(rankItem);
    });
  });
};

