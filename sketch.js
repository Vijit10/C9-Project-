var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,10,10)
  box.x = box.position.x 
}

function draw() 
{
  background(30);
  
  if (keyDown(RIGHT_ARROW)) {
     box.x = box.x + 5 
  }
  if (keyDown(LEFT_ARROW)) {
    box.x = box.x - 5 
 }

  drawSprites()
}




