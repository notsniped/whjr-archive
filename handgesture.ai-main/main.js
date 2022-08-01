prediction = "";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}
console.log("ml5 Version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wl03AFCK4/model.json", modalLoaded);
function modalLoaded() {
    console.log("Modal Loaded Successfully!");
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction = results[0].label;
        if(results[0].label == "Amazing!") {
            document.getElementById("result_gesture_name").innerHTML = "This is amazing!";
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "Best!") {
            document.getElementById("result_gesture_name").innerHTML = "This is the best!";
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "Victory!") {
            document.getElementById("result_gesture_name").innerHTML = "I have declared victory!";
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
    }
}
