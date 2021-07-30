var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  

  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);

  bullet=createSprite(200,200,50,10);
  bullet.velocityX=5;

  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(255,255,255); 

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180){
      bullet.shapeColor="white";
    }
    if (deformation<180 && deformation>100){
      bullet.shapeColor="white";
    }
    if (deformation<100)
    bullet.shapeColor="white";
  }

  if(hasCollided(wall,bullet))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
  
    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
  
  
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
     bulletRightEdge=lbullet.x +bullet.width;
     wallLeftEdge=wall.x;
     if (bulletRightEdge>=wallLeftEdge)
     {
       return true
     }
     return false;
}


