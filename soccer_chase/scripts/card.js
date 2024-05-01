var firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyCEuVe3JZlNQpjbfKwu2tglXb-h6kU5HRo",
  authDomain: "soccer-chase-587aa.firebaseapp.com",
  projectId: "soccer-chase-587aa",
  storageBucket: "soccer-chase-587aa.appspot.com",
  messagingSenderId: "280880784635",
  appId: "1:280880784635:web:767a93850f056f448c7c5e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.onload = function() {
  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.href.includes(currentPage)) {
      item.classList.add('active');
    }
  });

  // Set an observer on the Auth object to listen for user state changes
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      firebase.database().ref(`scores/${user.uid}`).on('value', (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          // Update the text content and source of the corresponding HTML elements
          document.querySelector('#display-name').textContent = userData.displayName;
          document.querySelector('#overall-score').textContent = "Points: " + userData.overallScore;
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
};