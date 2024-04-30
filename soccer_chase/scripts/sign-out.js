// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT7mB8uKFLA9UFjHsqNxInorgJDdGvFuc",
  authDomain: "soccer-chase-2.firebaseapp.com",
  projectId: "soccer-chase-2",
  storageBucket: "soccer-chase-2.appspot.com",
  messagingSenderId: "511702165893",
  appId: "1:511702165893:web:280ba273f8c2fd83113cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logout = document.getElementById('logout');
logout.addEventListener('click', function () {
    signOut(auth).then(() => {
        window.location.href = "index.html";
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
});

