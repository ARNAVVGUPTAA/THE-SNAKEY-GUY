class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.speedX = 1;
        this.speedY = 0;
        this.len = 0;
        this.tail = [];
    }

    update(){
        //added this so that the snaake shifts its place when moving, this makes the adding of another block easier
        for(var i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[ i + 1];
        }
        //made another object- like this way, gonna use this
        this.tail[this.len - 1] = createVector(this.x,this.y);
        //multiplied it with scl, just to make the changes easier
        this.x = this.x + this.speedX*scl;
        this.y = this.y + this.speedY*scl; 
//ahahahahahahah
        //alternative to collide()
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }    

    show(){
        fill("red");
        //this to display every part of the array
        for(var i = 0; i < this.len; i++){
            rect(this.tail[i].x,this.tail[i].y,10,10);
        }

        rect(this.x,this.y,10,10);
    }

    way(x,y){
        this.speedX = x;
        this.speedY = y;
    }

    eat(pos){
        //this whole thing is the replacement of isTouching(), for non sprite objects- kinda like it
        var d = dist(food.x,food.y,snake.x,snake.y);
        if(d<1){
            this.len++;
            return true;
        }   else    {   return false;   }
    }
    death(){
        //now, we want that every part of snake' position should be counted, so this loop
        for(var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            //again, isTouching()
            var d = dist(this.x,this.y,pos.x,pos.y)
            if(d < 1){
               // console.log("yess");
                this.len = 0;
                this.tail = [];
                gameState = "end";
            }
            
    
        }
    }
}