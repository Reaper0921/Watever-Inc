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
var x = 500;
var y = 450;

  //avatar but doesn't work
  // var avatar = new GameObject();
  // avatar.color = `blue`;
  // avatar.vx = 2;
  // avatar.vy = 2; 

// var enemy = new GameObject();
// enemy.color = "green";


function main()
{

   var myGamePiece = new GameObject();
 myGamePiece.color = `red`;
 myGamePiece.vx = 50;
 myGamePiece.vy = 50;
 myGamePiece.x = x;
 myGamePiece.y = y;
    //erases the screen
    context.clearRect(0, 0, canvas.width, canvas.height); 

    //moves the player if the variables in the controls.js are equal to true
     if(d==true){ myGamePiece.x = myGamePiece.x += myGamePiece.vx;}
     if(a==true){ myGamePiece.x = myGamePiece.x += -myGamePiece.vx;}
     if(w==true){ myGamePiece.y = myGamePiece.y += -myGamePiece.vy;}
     if(s==true){ myGamePiece.y = myGamePiece.y += myGamePiece.vy;}

    /*-----------collision detection--------------------
    collision detection ALWAYS goes before the render and...
    usually goes after the movement of the objects
    ---------------------------------------------------*/
    /*context.drawImage(myGamePiece, myGamePiece.x - myGamePiece.w / 2, myGamePiece.y - myGamePiece.h / 2, myGamePiece.w, myGamePiece.h); */


    //Keeps avatar on screen
     if(myGamePiece.x < 0 + myGamePiece.w/2){myGamePiece.x = 0 + myGamePiece.w/2;}
     if(myGamePiece.x > canvas.width + -myGamePiece.w/2){myGamePiece.x = canvas.width + -myGamePiece.w/2;}
     if(myGamePiece.y < 0 + myGamePiece.h/2){myGamePiece.y = 0 + myGamePiece.h/2;}
     if(myGamePiece.y > canvas.height + -myGamePiece.h/2){myGamePiece.y = canvas.height + -myGamePiece.h/2;}

  console.log(myGamePiece.y, myGamePiece.x);

    myGamePiece.render();

    
}

function Enemy(){

  Enemy.render[20];
  Enemy.x = Math.random()*(canvas.height - canvas.width) + canvas.width;
  Enemy.y = Math.random()*(canvas.height -canvas.width) + canvas.height;
  if (Enemy.x != myGamePiece.x){ Enemy.x += myGamePiece;}
  if (Enemy.y != myGamePiece.y){ Enemy.y += myGamePiece;}

}




