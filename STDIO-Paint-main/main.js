var mouseEvent="empty";
var last_x, last_y;

canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
width=2;

var width=screen.width;

    new_width=screen.width-70;
    new_height=screen.height-300;

if (width<992) {
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";
    }

   canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        color=document.getElementById("clr").value;
        width_of_line=document.getElementById("wid").value;

last_x=e.touches[0].clientX-canvas.offsetLeft;
last_y=e.touches[0].clientY-canvas.offsetTop;  
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         console.log("my_touchmove");
         current_position_of_mouse_x=e.touches[0].clientX-canvas.offsetLeft;
         current_position_of_mouse_y=e.touches[0].clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_x = current_position_of_mouse_x; 
        last_y = current_position_of_mouse_y;
    }

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

color=document.getElementById("clr").value;

 width=document.getElementById("wid").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    var cur_x=e.clientX-canvas.offsetLeft;
    var cur_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown") 
    {
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width;

      ctx.moveTo(last_x, last_y);

      ctx.lineTo(cur_x, cur_y);
      ctx.stroke();
    }

    last_x=cur_x;
    last_y=cur_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
   mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {
    mouseEvent="mouseleave";
}

function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}