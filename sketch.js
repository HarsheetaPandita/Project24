const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,stone,rubber;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(100,100);
	stone = new Stone(700,240,70,70);
	ground = new Ground(600,height,1200,20);
	rubber = new Rubber(600,320,30);

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background("purple");
  
  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
}