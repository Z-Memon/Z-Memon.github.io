  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";


  import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


  import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";


  import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";



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
  const storage = getStorage(app);
 
  const login = document.getElementById('sign-up');
login.addEventListener('click', function(event){
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const profilePicture = document.getElementById('profile-picture').files[0]; // Assuming you have an input field with id 'profile-picture'

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      // Upload the profile picture
      const profilePictureRef = storageRef(storage, `profile_pictures/${user.uid}`);
const uploadTask = uploadBytesResumable(profilePictureRef, profilePicture);

uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            updateProfile(user, { displayName: username, photoURL: downloadURL })})
            .then(() => {
              // Profile updated
              // Redirect to the home page
              window.location.href = "test-home.html"; // Replace with the URL of your home page
            })
            .catch((error) => {
              // Handle errors
            });   
         });
        }
      );
    })