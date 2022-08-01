function setup() {
    canvas = createCanvas(640, 580);
    canvas.position(150, 150)
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0 );
    stroke(255, 0, 0 );
    rect(50, 50, 450, 30);

    fill(255, 0, 0 );
    stroke(255, 0, 0 );
    rect(50, 500, 450, 30);

    fill(255, 0, 0 );
    stroke(255, 0, 0 );
    rect(50, 50, 30, 450);

    fill(255, 0, 0 );
    stroke(255, 0, 0 );
    rect(500, 50, 30, 480);

    fill(255, 0, 0 );
    stroke(255, 0, 0);
    circle(80, 90, 110);

    fill(255, 0, 0 );
    stroke(255, 0, 0);
    circle(80, 500, 110);

    fill(255, 0, 0 );
    stroke(255, 0, 0);
    circle(500, 80, 110);

    fill(255, 0, 0 );
    stroke(255, 0, 0);
    circle(500, 500, 110);   
}
function take_snapshot() {
    save('myEdit.png');
}