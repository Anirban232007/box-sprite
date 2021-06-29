var box




function setup() {
  createCanvas(1000,1000);
  box=createSprite(500,500,50,30)
}

function draw() 
{
  
  background(30);
  if (keyDown(RIGHT_ARROW))
  {
    box.position.x=box.position.x+7
  }
  if (keyDown(LEFT_ARROW))
  {
    box.position.x=box.position.x-7
  }
  if (keyDown(UP_ARROW))
  {
    box.position.y=box.position.y-7
  }
  if (keyDown(DOWN_ARROW))
  {
    box.position.y=box.position.y+7
  }
  drawSprites()

}




