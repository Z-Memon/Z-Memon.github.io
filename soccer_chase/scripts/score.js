var firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyCEuVe3JZlNQpjbfKwu2tglXb-h6kU5HRo",
  authDomain: "soccer-chase-587aa.firebaseapp.com",
  projectId: "soccer-chase-587aa",
  storageBucket: "soccer-chase-587aa.appspot.com",
  messagingSenderId: "280880784635",
  appId: "1:280880784635:web:767a93850f056f448c7c5e"
};

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


  // Set an observer on the Auth object to listen for user state changes
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      firebase.database().ref(`scores/${user.uid}`).on('value', (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          // Update the text content and source of the corresponding HTML elements
          document.querySelector('#display-name').textContent = userData.displayName;
          document.querySelector('#overall-score').textContent =userData.overallScore;
          document.querySelector('#points-earned').textContent =userData.pointsEarned;
          document.querySelector('#points-lost').textContent =userData.pointsLost;
          document.querySelector('#profile-pic').src = userData.photoURL || userData.profilePic;
        } else {
          console.log("No such document!");
        }
      }, (error) => {
        console.log("Error getting data:", error);
      });
    } else {
      // User is signed out
      console.log("No user is signed in.");
    }
  });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in, display the user display name
        let displayNameElement = document.querySelector('#display-name'); 
        if (displayNameElement) {
          displayNameElement.textContent = user.displayName;
        }
        let profilePictureElement = document.querySelector('#profile-pic'); // Replace with the id of your profile picture element
        if (profilePictureElement) {
        profilePictureElement.src = user.photoURL;
        }
      } else {
        // No user is signed in
        console.log('No user is signed in');
      }
    });
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
