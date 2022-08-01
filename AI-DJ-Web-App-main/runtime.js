song = '';
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scorerightWrist = 0;
scoreleftWrist = 0;
function preload() {
    song = loadSound('music.mp3');
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        scorerightWrist = results[0].pose.keypoints[10].score;
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("Score Left Wrist = " + scoreleftWrist);
        console.log("Score Right Wrist = " + scorerightWrist);
        // Left Wrist
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('LeftWrist X = ' + leftWristX + '; LeftWrist Y = ' + leftWristY);
        // Right Wrist
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('RightWrist X = ' + rightWristX + '; RightWrist Y = ' + rightWristY);
    }
}
function modelLoaded() {
    console.log('PoseNet Initialized.');
}
function draw() {
    image(video, 0, 0, 600, 500);
    fill('#FF0000');
    stroke('#FF0000');
    if (scorerightWrist > 0.2) {
        circle(rightWristX, rightWristY, 20);
        if (rightWristY > 0 && rightWristY <= 100) {
            document.getElementById('speed').innerHTML = 'Speed = 0.5X';
            song.rate(0.5);
        }
        else if (rightWristY > 100 && rightWristY <= 200) {
            document.getElementById('speed').innerHTML = 'Speed = 1X';
            song.rate(1);
        }
        else if (rightWristY > 200 && rightWristY <= 300) {
            document.getElementById('speed').innerHTML = 'Speed = 1.5X';
            song.rate(1.5);
        }
        else if (rightWristY > 300 && rightWristY <= 400) {
            document.getElementById('speed').innerHTML = 'Speed = 2X';
            song.rate(2);
        }
        else if (rightWristY > 400 && rightWristY <= 500) {
            document.getElementById('speed').innerHTML = 'Speed = 2.5X';
            song.rate(2.5);
        }
    }
    if (scoreleftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimal = floor(InNumberleftWristY);
        volume = remove_decimal/1000;
        document.getElementById('volume').innerHTML = "Volume = " + volume;
        song.setVolume(volume);
    }
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}