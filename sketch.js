
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,
	rope1,rope2,rope3,rope4,rope5,roof1;
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	var bobDiameter=100;
	//Create the Bodies Here.
	bobObject1 = new bob(200,550,50);
	bobObject2 = new bob(300,550,50);
	bobObject3 = new bob(400,550,50);
	bobObject4 = new bob(500,550,50);
	bobObject5 = new bob(600,550,50);
	roof1 = new roof(width/2,170,600,20);
	rope1 = new rope(bobObject1.body,roof1.body,-bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,roof1.body,-bobDiameter*2,0);
	rope3 = new rope(bobObject3.body,roof1.body,-bobDiameter*2,0);
	rope4 = new rope(bobObject4.body,roof1.body,-bobDiameter*2,0);
	rope5 = new rope(bobObject5.body,roof1.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed()
{
  if(keyCode == UP_ARROW){
    
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:140,y:-170});
  }
}


