var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run (event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        console.log("Taking selfie...");
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 400,
    height: 300,
    image_format: "jpeg",
    png_quality: 90
});
function take_snapshot() { Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; }); }
function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}