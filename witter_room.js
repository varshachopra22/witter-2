const firebaseConfig = {
      apiKey: "AIzaSyAqRxNQeSb5rAYu2pZD0N3Ss3z7uFqgF3g",
      authDomain: "kwitter-9d02b.firebaseapp.com",
      databaseURL: "https://kwitter-9d02b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9d02b",
      storageBucket: "kwitter-9d02b.appspot.com",
      messagingSenderId: "585726830350",
      appId: "1:585726830350:web:bb884e6fd2c60db637995f"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
