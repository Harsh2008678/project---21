//For declaring all the variables here so that it becomes GLOBAL VARIABLES.
 var bullet;
 var wall;
 var speed;
 var weight;
 var deformation;
 var thickness = random(22,83);

function setup() 
{
//For creating a canvas.
  createCanvas(1000,400);

//For creating CAR.
  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "white";

//Creating wall.
  wall = createSprite(950,200,thickness,height/2);

//creating speed & weight.
  speed=random(55,90);
  weight=random(400,700);
}

function draw() 
{
//For giving color to the canvas.
  background("black");  

//For giving VELOCITY to the CAR randomly as defined in the variable SPEED.
  bullet.velocityX = speed;

//Giving Collision.
 

//Displaying sprites.
  drawSprites();
}

function hasCollided(bullet,wall)
{
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2)
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  }
  if (damage > 10)
  {
    wall.shapeColor = (255,0,0);
  }
  if (damage < 10  )
  {
    wall.shapeColor = (0.255,0);
  }
}