// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";


import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";



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

const logout = document.getElementById('logout');
logout.addEventListener('click', function () {
    signOut(auth).then(() => {
        window.location.href = "index.html";
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
});

