  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCEuVe3JZlNQpjbfKwu2tglXb-h6kU5HRo",
    authDomain: "soccer-chase-587aa.firebaseapp.com",
    projectId: "soccer-chase-587aa",
    storageBucket: "soccer-chase-587aa.appspot.com",
    messagingSenderId: "280880784635",
    appId: "1:280880784635:web:767a93850f056f448c7c5e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);
 
  const login = document.getElementById('sign-up');
login.addEventListener('click', function(event){
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      // Set the display name
      return updateProfile(user, { displayName: username }).then(() => {
        // Update successful
        window.location.href = "test-home.html";
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
