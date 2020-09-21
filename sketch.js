const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, box1, box2, box3, ground;

function preload(){
	
}

function setup() {
	createCanvas(1280, 605);

	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(1030, 455, 400, 40);
	box2 = new Dustbin(930, 415, 40, 200);
	box3 = new Dustbin(1130, 415, 40, 200);

	paper = new Paper(200, 400);

	ground = new Ground(640, 605, 1280, 280);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.position, {x: 315, y: -105});
	}
}
