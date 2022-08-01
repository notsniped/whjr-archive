var paddle2 =10,paddle1=10;
var paddle1X = 10,paddle1Height = 110;
var paddle2Y = 685,paddle2Height = 70;
var score1 = 0, score2 =0;
var paddle1Y;
var  playerscore =0;
var audio1;
var pcscore =0;
rightWrist_X = '';
rightWrist_Y = '';
rightWrist_Score = '';
video = '';
//ball x and y and speedx speed y and radius
var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

function setup(){
  canvas = createCanvas(700,600);
  canvas.parent('canvas');
  canvas.center();
  video = createCapture(VIDEO);
  video.size(550, 500);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log('PoseNet successfully initialized.');
}
function gotPoses(results) {
    console.log(results);
    if (results.length > 0) {
        rightWrist_X = results[0].pose.rightWrist.x;
        console.log('rightWrist_X: ' + rightWrist_X);
        rightWrist_Y = results[0].pose.rightWrist.y;
        console.log('rightWrist_Y: ' + rightWrist_Y);
        rightWrist_Score = results[0].pose.keypoints[10].score;
        console.log('Right Wrist Score: ' + rightWrist_Score);
    }
}
function draw() {
    image(video, 0, 0, 550, 500);
    background(0); 
    fill('#FF0000');
    stroke('#FF0000');
    fill("black");
    stroke("black");
    rect(680,0,20,700);
    if (rightWrist_Score > 0.2) {
        circle(rightWrist_X, rightWrist_Y, 20)
    }
    fill("black");
    stroke("black");
    rect(0,0,20,700);
 
    //funtion paddleInCanvas call 
    paddleInCanvas();
 
    //left paddle
    fill(250,0,0);
    stroke(0,0,250);
    strokeWeight(0.5);
    paddle1Y = mouseY; 
    rect(paddle1X,paddle1Y,paddle1,paddle1Height,100);
   
    //pc computer paddle
    fill("#FFA500");
    stroke("#FFA500");
    var paddle2y =ball.y-paddle2Height/2;  rect(paddle2Y,paddle2y,paddle2,paddle2Height,100);
    
    //function midline call
    midline();
    
    //funtion drawScore call 
    drawScore();
   
    //function models call  
    models();
   
    //function move call which in very important
    move();
}

//function reset when ball does notcame in the contact of paddle
function reset() {
   ball.x = width/2+100,
   ball.y = height/2+100;
   ball.dx=3;
   ball.dy =3;
   
}

//function midline draw a line in center
function midline() {
    for(i=0;i<480;i+=10) {
    var y = 0;
    fill("white");
    stroke(0);
    rect(width/2,y+i,10,480);
    }
}

//function drawScore show scores
function drawScore() {
    textAlign(CENTER);
    textSize(20);
    fill("white");
    stroke(250,0,0)
    text("Player:",100,50)
    text(playerscore,140,50);
    text("Computer:",500,50)
    text(pcscore,555,50)
}

//very important function of this game
function move(){
   fill(50,350,0);
   stroke(255,0,0);
   strokeWeight(0.5);
   ellipse(ball.x,ball.y,ball.r,20)
   ball.x = ball.x + ball.dx;
   ball.y = ball.y + ball.dy;
   if(ball.x+ball.r>width-ball.r/2){
       ball.dx=-ball.dx-0.5;       
   }
  if (ball.x-2.5*ball.r/2< 0){
  if (ball.y >= paddle1Y&& ball.y <= paddle1Y + paddle1Height) {
    ball.dx = -ball.dx+0.5; 
  }
  else{
    pcscore++;
    reset();
    navigator.vibrate(100);
  }
}
if(pcscore ==4){
    fill("#FFA500");
    stroke(0)
    rect(0,0,width,height-1);
    fill("white");
    stroke("white");
    textSize(25)
    text("Game Over!☹☹",width/2,height/2);
    text("Reload The Page!",width/2,height/2+30)
    noLoop();
    pcscore = 0;
}
   if(ball.y+ball.r > height || ball.y-ball.r <0){
       ball.dy =- ball.dy;
   }   
}

//width height of canvas speed of ball 
function models(){
    textSize(18);
    fill(255);
    noStroke();
    text("Width:"+width,135,15);
    text("Speed:"+abs(ball.dx),50,15);
    text("Height:"+height,235,15)
}

//this function help to not go the paddle out of canvas
function paddleInCanvas(){
  if(mouseY+paddle1Height > height){
    mouseY=height-paddle1Height;
  }
  if(mouseY < 0){
    mouseY =0;
  }  
}
