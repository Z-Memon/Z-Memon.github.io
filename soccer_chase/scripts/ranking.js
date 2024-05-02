
// Initialize Firebase
var firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyCEuVe3JZlNQpjbfKwu2tglXb-h6kU5HRo",

  authDomain: "soccer-chase-587aa.firebaseapp.com",

  databaseURL: "https://soccer-chase-587aa-default-rtdb.firebaseio.com",

  projectId: "soccer-chase-587aa",

  storageBucket: "soccer-chase-587aa.appspot.com",

  messagingSenderId: "280880784635",

  appId: "1:280880784635:web:767a93850f056f448c7c5e"


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

  let userDetails = document.createElement('div');
  userDetails.className = 'user-details';

  let userProfilePicture = document.createElement('img');
  userProfilePicture.src = userData.profilePicture || userData.profilePic;
  userProfilePicture.className = 'user-profile-picture';
  userInfo.appendChild(userProfilePicture);

      let username = document.createElement('div');
      username.className = 'username';    
      username.textContent = `${userData.displayName}`;
    
      let points = document.createElement('div');
      points.className = 'points';
      points.textContent = `Points: ${userData.overallScore}`;
    
      userDetails.appendChild(username);
      userDetails.appendChild(points);
      userInfo.appendChild(userDetails);
      rankItem.appendChild(userInfo);
    
      let rankNumber = document.createElement('p');
      rankNumber.textContent = `${index + 1}`;
rankNumber.className = 'rank-number';
rankItem.appendChild(rankNumber);

// Get the signed-in user's display name
let currentUserData = JSON.parse(localStorage.getItem('currentUserData'));
let currentDisplayName = currentUserData ? currentUserData.displayName : null;

rankItem.addEventListener('click', function() {
  // Check if the clicked rank item's display name matches the signed-in user's display name
  if (userData.displayName === currentDisplayName) {
    // The clicked rank item is the signed-in user's rank item
    // Save the user's data to local storage and navigate to the "score.html" page
    window.location.href = "score.html";
  } else {
    // The clicked rank item is not the signed-in user's rank item
    // Do nothing or display a message
    alert('You can only view your own stats.');
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in, fetch the user's data from the database
      firebase.database().ref('users/' + user.uid).once('value', function(snapshot) {
        let userData = snapshot.val();
        if (userData) {
          // Update the local storage with the current user's data
          localStorage.setItem('currentUserData', JSON.stringify(userData));
        }
      });
    } else {
      // No user is signed in
      console.log('No user is signed in');
    }
  });
});

ranksContainer.appendChild(rankItem);
    });
  });
};

    


       