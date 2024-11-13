let canvas;
let context;
/*-------------------------------------------
Game Setup
 1. canvas 
 2. context
 3. frame rate
 4. animation timer runs main function 60 frames per second
-------------------------------------------*/
canvas = document.getElementById(`myCanvas`);
context = canvas.getContext(`2d`);
var fps = 1000/60;
var timer = setInterval(main, fps);


  //avatar but doesn't work
  var avatar = new GameObject();
  avatar.color = `blue`;
  avatar.vx = 2;
  avatar.vy = 2; 

 


function main()
{
    //erases the screen
    context.clearRect(0,0,canvas.width,canvas.height); 

    //moves the player if the variables in the controls.js are equal to true
    if(d==true){ avatar.x += avatar.vx; }
    if(a==true){ avatar.x += -avatar.vx;}
    if(w==true){ avatar.y += -avatar.vy;}
    if(s==true){ avatar.y += avatar.vy; }

    /*-----------collision detection--------------------
    collision detection ALWAYS goes before the render and...
    usually goes after the movement of the objects
    ---------------------------------------------------*/
    context.drawImage(avatar, avatar.x - avatar.w / 2, avatar.y - avatar.h / 2, avatar.w, avatar.h); 


    //Keeps avatar on screen
    if(avatar.x < 0 + avatar.w/2){avatar.x = 0 + avatar.w/2;}
    if(avatar.x > canvas.width + -avatar.w/2){avatar.x = canvas.width + -avatar.w/2;}
    if(avatar.y < 0 + avatar.h/2){avatar.y = 0 + avatar.h/2;}
    if(avatar.y > canvas.height + -avatar.h/2){avatar.y = canvas.height + -avatar.h/2;}

    avatar.render();
}




