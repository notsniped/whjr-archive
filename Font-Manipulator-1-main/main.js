var text_name;
difference=0;
leftWrist_x=0;
rightWrist_x=0;
function preload() {}
function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('nose', gotPoses)
}
function modelLoaded() {
    console.log('PoseNet successfully initialized.')
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
function draw() {
    background('#919191');
    document.getElementById("name_here").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE787');
    text('Text', 50, 400);
}
function submit(){
    text_name=document.getElementById("name_here").innerHTML;
    console.log(text_name);
}
