//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCjHjtZZoE2-xF8i7_r6BHPQuGexV58Eq0",
    authDomain: "kwitter-engine.firebaseapp.com",
    databaseURL: "https://kwitter-engine-default-rtdb.firebaseio.com",
    projectId: "kwitter-engine",
    storageBucket: "kwitter-engine.appspot.com",
    messagingSenderId: "580656465083",
    appId: "1:580656465083:web:54e456bcd4d02f9c21559e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
    } });  }); }
getData();
