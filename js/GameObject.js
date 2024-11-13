class GameObject
{
    constructor()
    {
    /*Object properties (or attributes)*/
    //object position
     this.x=canvas.width/2;
     this.y=canvas.height/2;
     //object angle
     this.angle = 0;
     //object dimensions
     this.w=100;
     this.h=100;
     //object velocity
     this.vx=0;
     this.vy=0;
    //object color
     this.color = `hotpink`  
    }

    //Draws a rectangle 
    render()
    {
        context.save();
        context.fillStyle = this.color
        context.translate(this.x, this.y)
        context.rotate(this.angle*Math.PI/180)
        context.fillRect(-this.w/2, -this.h/2, this.w, this.h)
        context.restore();
    }

    //Moves an object by adding it's velocity to it's position on each axis
    move()
    {
        this.x = this.x + this.vx
        this.y = this.y + this.vy
    }

    //Each function below returns a sides of this object's bounding box
    top()
    {
        return this.y - this.h/2;
    }
    bottom()
    {
        return this.y + this.h/2
    }
    left()
    {
        return this.x - this.w/2
    }
    right()
    {
        return this.x + this.w/2
    }

    /*-------Collision Function ----------------
    Used to check for collision between 2 objects
    This method checks to see where the various sides of one object are in relationship to another object's sides
    -------------------------------------------*/
    overlaps(_obj)
    {
        if(
            this.top() < _obj.bottom() &&
            this.bottom() > _obj.top() &&
            this.left() < _obj.right() &&
            this.right() > _obj.left()
        )
        {
            
            return true
        }
        return false;
    }
}