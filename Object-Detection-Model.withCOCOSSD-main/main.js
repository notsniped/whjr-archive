results = ''
function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log('PoseNet successfully initialized.')
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)

    }
}
function draw() {
    background('#919191');
    textSize('20')
    fill('#0000FF')
}