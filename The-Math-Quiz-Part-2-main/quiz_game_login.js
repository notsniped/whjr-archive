function addUser() {
    var p1 = document.getElementById("player1_name_input").value;
    var p2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("user1", p1);
    localStorage.setItem("user2", p2);
    window.location = "in_game.html";
}