/*-------------------------------
Booleans to store whether a specific button is pressed or not
 --------------------------------*/
 var w = false;
 var a = false;
 var s = false;
 var d = false;
 var m1 = false;
 
 /*---Key Press Code-----------*/
 
 document.addEventListener(`keydown`, press);
 function press(e)
 {
     if(e.keyCode == 87){w = true;}
     if(e.keyCode == 83){s = true;}
     if(e.keyCode == 65){a = true;}
     if(e.keyCode == 68){d = true;}
     
 }
 
 /*---Key Release Code-----------*/
 document.addEventListener(`keyup`, release);
 function release(e)
 {
     if(e.keyCode == 87){w = false;}
     if(e.keyCode == 83){s = false;}
     if(e.keyCode == 65){a = false;}
     if(e.keyCode == 68){d = false;}
 }
 
 element.addEventListener('click', function(event) {
    // Check if the left button was clicked
    if (event.button === 0) {
      // Your code to handle the left click
      console.log('Left click detected');
    }
  });