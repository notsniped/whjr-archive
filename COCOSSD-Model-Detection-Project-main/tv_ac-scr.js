img = '';
status = false;
output = [];
function preload() {
    img = loadImage('ac_tv.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded() {
    console.log('Model successfully loaded.');
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        output = results
    }
}
function draw() {
    image(img, 0, 0, 640, 420);
    if (status != false) {
        document.getElementById('model-status').innerHTML = 'Status: Objects Detected';
        if (output.length == 1) {
            document.getElementById('model-info').innerHTML = 'Out of the following objects, cocossd model detected ' + output.length + ' object.';  
        }
        else {
            document.getElementById('model-info').innerHTML = 'Out of the following objects, cocossd model detected ' + output.length + ' objects.';
        }
        for (i = 0; i < output.length; i++) {
            fill('#FF0000');
            percent = floor(output[i].confidence * 100);
            text(output[i].label + ' [' + percent + '%]', output[i].x + 10, output[i].y + 15);
            noFill();
            stroke('#FF0000');
            rect(output[i].x, output[i].y, output[i].width, output[i].height);
        }
    }
}