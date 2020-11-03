
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof1, roof2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(400,700,35);
	bobObject2 = new Bob(375,700,35);
	bobObject3 = new Bob(425,700,35);
	bobObject4 = new Bob(450,700,35);
	bobObject5 = new Bob(350,700,35);

	roof1 = new Roof(400,800,800,15);
	roof2 = new Roof(400,300,600,30);

	rope1 = new Rope(bobObject1.body,roof2.body,0,0);
	rope2 = new Rope(bobObject2.body,roof2.body,-65,0);
	rope3 = new Rope(bobObject3.body,roof2.body,65,0);
	rope4 = new Rope(bobObject4.body,roof2.body,130,0);
	rope5 = new Rope(bobObject5.body,roof2.body,-130,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof1.display();
  roof2.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

}


