const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;
var box13,box14;
var box15;
var constraintBody;
var striker;
var sling;
var gameState = 0;
var ground;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(540,350,250,10);
  constraintBody = new Polygon(100,100,50,60);
  box1 = new Box(460,320,40,40);
  box2 = new Box(500,320,40,40);
  box3 = new Box(540,320,40,40);
  box4 = new Box(580,320,40,40);
  box5 = new Box(620,320,40,40);
  box6 = new Box(480,270,40,40);
  box7 = new Box(520,270,40,40);
  box8 = new Box(560,270,40,40);
  box9 = new Box(600,270,40,40);
  box10 = new Box(500,220,40,40);
  box11 = new Box(540,220,40,40);
  box12 = new Box(580,220,40,40);
  box13 = new Box(520,170,40,40);
  box14 = new Box(560,170,40,40);
  box15 = new Box(540,120,40,40);
  sling = new Sling(constraintBody.body,{x:100,y:100});
}

function draw() {
  Engine.update(engine);
  background(0);  
  ground.display();
  box1.display("Green");
  box2.display("Green");
  box3.display("Green");
  box4.display("Green");
  box5.display("Green");
  box6.display("Blue");
  box7.display("Blue");
  box8.display("Blue");
  box9.display("Blue");
  box10.display("Yellow");
  box11.display("Yellow");
  box12.display("Yellow");
  box13.display("Red");
  box14.display("Red");
  box15.display("White");
  sling.display();
  constraintBody.display();
}
function mouseDragged(){
  if(gameState === 0){
  Matter.Body.setPosition(constraintBody.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  sling.fly();
  gameState = 1;
}