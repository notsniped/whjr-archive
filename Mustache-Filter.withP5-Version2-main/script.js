function preload() {

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 150);
    video = createCapture(VIDEO);
    video.size = (300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is initilazied");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
}
function take_snapshot() {
    save("mySnapshot.png");
}
