var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectangle1,rectangle2,rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	var groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	 // create landing area
	 
	 rectangle1=Bodies.rectangle(340, 633, 10, 50, {isStatic:true});
	 World.add(world, rectangle1);

	 rectangle2=Bodies.rectangle(390, 660, 100, 10, {isStatic:true});
	 World.add(world, rectangle2);

	 rectangle3=Bodies.rectangle(440, 633, 10, 50, {isStatic:true});
	 World.add(world, rectangle3);

	 


	Engine.run(engine);

	rectangle1=createSprite(340,645,10,50);
	rectangle1.shapeColor="red";

	rectangle2=createSprite(390,665,100,10);
	rectangle2.shapeColor="red";

	rectangle3=createSprite(440,645,10,50);
	rectangle3.shapeColor="red";
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageBody.debug=true;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



