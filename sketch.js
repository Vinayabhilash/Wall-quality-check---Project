
var wall, thichkness;
var bullet, speed, weight;

function setup() {
  createCanvas(800,400);
  thickness = random(22, 83);
  wall = createSprite(350, 200, thickness, height/2);
  bullet = createSprite(50, 200, 20,10);
  speed = random(223, 321);
  weight = random(30, 52);
}

function draw() {
  background(255,255,255);
  createEdgeSprites();
  if(keyDown("SPACE")) {
    bullet.velocityX = 10;
  }
  if(hasCollided(bullet, wall)) {
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if(damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
  } 
  

  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }else 
  {   return false;
  }
}