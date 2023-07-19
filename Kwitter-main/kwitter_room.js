//ADD YOUR FIREBASE LINKS HERE
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

user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() { 
	room_name = document.getElementById("room_name").value;
	firebase.database().ref("/").child(room_name).update({
		purpose : "adding room name" });
	localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
}
function getData() {
	firebase.database().ref("/").on('value', function(snapshot) {
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function(childSnapshot) {
			childKey = childSnapshot.key;
			Room_names = childKey; console.log("Room Name - " + Room_names);
			row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
			document.getElementById("output").innerHTML += row;
		});
	});
}
getData();
function redirectToRoomName(name) {
	console.log(name);
	localStorage.setItem("room_name", name);
	window.location = "kwitter_page.html";
}
function logout() {
	localStorage.removeItem("user_name");
	localStorage.removeItem("room_name");
	window.location = "index.html";
}