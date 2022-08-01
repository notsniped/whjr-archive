var canvas= new fabric.Canvas('mycanvas');
var player_x= 10;
var player_y= 10;
var player_object= "";
var block_width = 30;
var block_height= 30;
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
player_object= Img;
player_object.scaleToWidth(100);
player_object.scaleToHeight(100);
player_object.set({
    top:player_y,
    left:player_x
});
    
    canvas.add(player_object);
  });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
      block_object= Img;
      block_object.scaleToWidth(block_width);
      block_object.scaleToHeight(block_height);
      block_object.set({
        top:player_y,
        left:player_x
      });
  
    canvas.add(block_object);
  });
}

window.addEventListener("keydown",key_down );
function key_down(e)
{
  var keypressed= e.keyCode;
  console.log(keypressed);
  if(e.shiftKey==true && keypressed=="80"){
    console.log("Shift and p pressed together");
    block_width= block_width+10;
    block_height= block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
  }

  if(e.shiftKey==true && keypressed=="77"){
    console.log("Shift and m pressed together");
    block_width= block_width-10;
    block_height= block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
  }

  if(keypressed=="38"){
    console.log("up");
    up();
  }

  if(keypressed=="40"){
    console.log("down");
    down();
  }

  if(keypressed=="37"){
    console.log("left");
    left();
  }

  if(keypressed=="39"){
    console.log("right");
   right();
  }

  if(keypressed=="70"){
    new_image("spiderman_face.png")
    console.log("f");
  }

  if(keypressed=="66"){
    new_image("hulkd_body.png")
    console.log("b");
  }

  if(keypressed=="76"){
    new_image("ironman_legs.png")
    console.log("l");
  }

  if(keypressed=="72"){
    new_image("captain_america_left_hand.png")
    console.log("h");
  }

  if(keypressed=="82"){
    new_image("thor_right_hand.png")
    console.log("r");
  }
}

function up(){
if(player_y>=0){
  player_y= player_y-block_height;
  console.log("Up key pressed x="+player_x+" y="+player_y);
  canvas.remove(player_object);
  player_update();
}
}

function down(){
  if(player_y<=500){
    player_y= player_y+block_height;
    console.log("Down key pressed x="+player_x+" y="+player_y);
    canvas.remove(player_object);
    player_update();
  }
  }

  function left(){
    if(player_x>=0){
      player_x= player_x-block_width;
      console.log("Left key pressed x="+player_x+" y="+player_y);
      canvas.remove(player_object);
      player_update();
    }
    }

    function right(){
      if(player_x<=950){
        player_x= player_x+block_width;
        console.log("Right key pressed x="+player_x+" y="+player_y);
        canvas.remove(player_object);
        player_update();
      }
      }
