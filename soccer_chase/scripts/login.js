  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
 
  const login = document.getElementById('sign-in');
  login.addEventListener('click', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href = "new-home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  });






  function onSignIn(googleUser) {
    // ... (обработка информации пользователя)
    
    // Перенаправляем пользователя после входа
    window.location.href = 'https://z-memon.github.io/soccer_chase/new-home.html';
  }