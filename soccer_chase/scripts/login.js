// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEuVe3JZlNQpjbfKwu2tglXb-h6kU5HRo",

  authDomain: "soccer-chase-587aa.firebaseapp.com",

  databaseURL: "https://soccer-chase-587aa-default-rtdb.firebaseio.com",

  projectId: "soccer-chase-587aa",

  storageBucket: "soccer-chase-587aa.appspot.com",

  messagingSenderId: "280880784635",

  appId: "1:280880784635:web:767a93850f056f448c7c5e"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const provider = new GoogleAuthProvider();
const googleSignIn = document.getElementById('google-sign-in');

googleSignIn.addEventListener('click', function () {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // Save the user's information
    localStorage.setItem('currentUserData', JSON.stringify(user));
    // Create a new entry in the 'users' collection
    const userRef = ref(db, 'users/' + user.uid);
    set(userRef, {
      photoURL: user.photoURL
    });
    window.location.href = "test-home.html";
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});

const login = document.getElementById('sign-in');
login.addEventListener('click', function (event) {
    event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      window.location.href = "test-home.html";

      localStorage.setItem('currentUserData', JSON.stringify(user));
            window.location.href = "test-home.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
});

