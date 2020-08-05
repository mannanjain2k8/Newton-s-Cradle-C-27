
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Bar1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bar1 = new Bar(380,200,200,40);

  
  BobObject1 = new BobObject(300,420,35);
  BobObject2 = new BobObject(340,420,35);
  BobObject3 = new BobObject(380,420,35);
  BobObject4 = new BobObject(420,420,35);
  BobObject5 = new BobObject(460,420,35);

  Rope1 = new Rope(BobObject1.body,Bar1.body,-80,-10);
  Rope2 = new Rope(BobObject2.body,Bar1.body,-40,-10);
  Rope3 = new Rope(BobObject3.body,Bar1.body,0,-10);
  Rope4 = new Rope(BobObject4.body,Bar1.body,40,-10);
  Rope5 = new Rope(BobObject5.body,Bar1.body,80,-10);

 
 


 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Bar1.display();
  BobObject1.display();
  BobObject2.display();
  BobObject3.display();
  BobObject4.display();
  BobObject5.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  drawSprites();
 
}


function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
      Matter.Body.setStatic(BobObject5.body,false);
      Matter.Body.setStatic(BobObject1.body,false);
      Matter.Body.setStatic(BobObject2.body,false);
      Matter.Body.setStatic(BobObject3.body,false);
      Matter.Body.setStatic(BobObject4.body,false);
            Matter.Body.applyForce(BobObject5.body,BobObject5.body.position,{x:-50,y:-45});
     
	
  }

  

}
