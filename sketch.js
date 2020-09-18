
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(600,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(150,300,20,20)
	ball2 = new Ball(190,300,20,20)
	ball3 = new Ball(230,300,20,20)
	ball4 = new Ball(270,300,20,20)
	ball5 = new Ball(310,300,20,20)
	
	ground = new Ground(230,50,235,20);
	
	
	chain3=new Chain(ball3.body,ground.body,0,0);
	chain1=new Chain(ball.body,ground.body,-80,0);
	chain2=new Chain(ball2.body,ground.body,-40,0)
	chain4=new Chain(ball4.body,ground.body,40,0);
	chain5=new Chain(ball5.body,ground.body,80,0);
	
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  
  background(225);
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  ground.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y: -35});
	}
	
	
	}
	
	
	


