canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
background_image = "racing.jpg";

// For Car 1
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

// For Car 2
car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        console.log("Key up.");
        car1up();
    }
    if (keyPressed == "40") {
        console.log("Key down.");
        car1down();
    }
    if (keyPressed == "37") {
        console.log("Key left.");
        car1left();
    }
    if (keyPressed == "39") {
        console.log("Key right.");
        car1right();
    }

    if (keyPressed == "87") {
        console.log("Key up.");
        car2up();
    }
    if (keyPressed == "83") {
        console.log("Key down.");
        car2down();
    }
    if (keyPressed == "65") {
        console.log("Key left.");
        car2left();
    }
    if (keyPressed == "68") {
        console.log("Key right.");
        car2right();
    }
    if (car1_x > 700) {
        console.log("Car 1 is winner.");
        document.getElementById("Label_WinnerStatus").innerHTML = "Player 1 won the Game!";
    }
    else if (car2_x > 700) {
        console.log("Car 2 is winner.");
        document.getElementById("Label_WinnerStatus").innerHTML = "Player 2 won the Game!";
    }
}
function car1up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, X = " + car2_x + " | Y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2down() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, X = " + car2_x + " | Y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed, X = " + car2_x + " | Y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2right() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed, X = " + car2_x + " | Y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}