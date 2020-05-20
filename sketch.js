//creating our snake and our food-the jelly
var snake,food;
//this scale is being used in many places, that's why defined it
var scl = 10;
var gameState = "start";
function setup() {
  createCanvas(500,500);
  //the game is too fast in its usual pace
  frameRate(10);
  snake = new Snake();
  //a function I had to add
  PICKUPPLACE();
  
}

function draw() {
  if(gameState === "start"){
    background(0);
    fill("red");
    textSize(15);
    textFont("CALIBRI");
    text("FAMILIAR WITH THE MOST POPULAR GAME - THE SNAKE???",5,200);
    text("IF NOT, FAMILIARIZE!!!",5,220);
    text("USE ARROWS TO GO THROUGH THE SPACE,EAT THE BLUE JELLY AND GROW",5,240);
    text("DON'T TOUCH THE EDGES, OR EAT YOURSELF... GOOD LUCK",5,260);
    fill("white");
    text("SPACE TO CONTINUE",5,280);

    
  }
  if(gameState === "play"){
    background(125); 
  
    snake.death();
    snake.update();
    snake.show();

    fill("blue");
    rect(food.x,food.y,10,10);

    if(snake.eat(food)){
      PICKUPPLACE();
    }
  }
  if(gameState === "end"){
    background(255);
    fill("black");
      text("OH NO, YOU'VE LOST, HIT SPACE TO RETRY",5,250);
    }
    console.log(gameState);
}

function keyPressed(){
  if(keyCode === 32){
    if(gameState === "start"){
        gameState = "play";
      } else if(gameState === "end"){
          gameState = "start";
        }
  }

  if(keyCode === UP_ARROW){
    snake.way(0,-1);
  }
  if(keyCode === DOWN_ARROW){
    snake.way(0,1);
  }
  if(keyCode === RIGHT_ARROW){
    snake.way(1,0);
  }
  if(keyCode === LEFT_ARROW){
    snake.way(-1,0);
  }
}function PICKUPPLACE(){
  var c = floor(width/scl);
  var r = floor(height/scl);
  //another way to make an object with two liner code- this and the rect function
  food = createVector(floor(random(c)),floor(random(r)));
  food.mult(scl);
}