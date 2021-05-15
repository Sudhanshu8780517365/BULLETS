var car, wall;
var speed, weight;
var thickness
function setup() {
  createCanvas(1600,400);
  car=createSprite (50, 200, 50, 50);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,windowHeight/2);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(0,0,0);
  car.velocityX=speed; 
  if(hasCollided(car,wall)){
   car.velocityX=0;
   var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(deformation>10){
    wall.shapeColor=color(255,0,0)
   }
   if(deformation<10){
     wall.shapeColor=color(0,255,0);
   }
   
  }
  drawSprites();
}
function hasCollided(car,wall){
 carRightEdge=car.x+car.width;
 wallLeftEdge=wall.x-wall.width;
 if(carRightEdge>wallLeftEdge){
   return true
 }
 return false
}