/*-------------------------------------------
Game Setup
 1. canvas 
 2. context
 3. frame rate
 4. animation timer runs main function 60 frames per second
-------------------------------------------*/
var c = document.querySelector(`MyCanvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)



var avatar = new GameObject();
avatar.color = `#ff0099`;
avatar.vx = 2;
avatar.vy = 2;



function updateGameArea() {
     var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    // if interacted with enemy stop game
     for (i = 0; i < myObstacles.length; i += 1) {
         if (myGamePiece.crashWith(myObstacles[i])) {
          myGameArea.stop();
          return;
        }
      }

    //the enemy
    // myObstacles.push(new component(10, height, "green", x, 0));
    // myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));


    function main()
{
    //erases the screen
    ctx.clearRect(0,0,c.width,c.height); 

    //moves the player if the variables in the controls.js are equal to true
    if(d==true){ avatar.x += avatar.vx; }
    if(a==true){ avatar.x += -avatar.vx;}
    if(w==true){ avatar.y += -avatar.vy;}
    if(s==true){ avatar.y += avatar.vy; }

    /*-----------collision detection--------------------
    collision detection ALWAYS goes before the render and...
    usually goes after the movement of the objects
    ---------------------------------------------------*/

    //Keeps avatar on screen
    if(avatar.x < 0 + avatar.w/2){avatar.x = 0 + avatar.w/2;}
    if(avatar.x > c.width + -avatar.w/2){avatar.x = c.width + -avatar.w/2;}
    if(avatar.y < 0 + avatar.h/2){avatar.y = 0 + avatar.h/2;}
    if(avatar.y > c.height + -avatar.h/2){avatar.y = c.height + -avatar.h/2;} 
}




}