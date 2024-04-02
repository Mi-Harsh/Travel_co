
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

 

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBwBywe0NYSCDlY-_k4K2eE5QCnn0gVjAA",
    authDomain: "travelco-84086.firebaseapp.com",
    projectId: "travelco-84086",
    storageBucket: "travelco-84086.appspot.com",
    messagingSenderId: "1048279516776",
    appId: "1:1048279516776:web:faade199ae704bab0ddddd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to database services 
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){

    set(ref(db, 'user/' + document.getElementById("name").value),
    {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        Address: document.getElementById("Address").value,
        Feedback: document.getElementById("Feedback").value
    });
    alert("Login Successfull")
  })
