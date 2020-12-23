var fixedRect, movingRect;
var box1, box2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor ="  yellow"
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor =" yellow"
  movingRect.debug = true;
  box1=createSprite(100,100,50,50)
  box2=createSprite(200,100,50,50)
  box1.shapeColor="red"
  box2.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(istouching(movingRect,box2))
 {
   movingRect.shapeColor="blue"
   box2.shapeColor="blue"
 }
 else{
  movingRect.shapeColor="yellow"
  box2.shapeColor="yellow"
 }
  drawSprites();
}

