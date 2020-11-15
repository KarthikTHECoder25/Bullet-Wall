var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50,200,60,20);
  wall = createSprite(1200,200,60,height/2)

 console.log(thickness);

}

function draw() {
  background("black");  

  bullet.velocityX = speed;
  bullet.shapeColor = color("white");
  wall.width = thickness;


  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness) ;
    if(damage<10)
    {
      wall.shapeColor = color("green");
    } 

    if(damage>10)
    {
      wall.shapeColor = color("red");
    }

  }

  drawSprites();
}