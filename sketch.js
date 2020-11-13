var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1=createSprite(295,610,20,100);
	rect1.shapeColor="red";
	rect2=createSprite(380,650,150,20);
	rect2.shapeColor="red";
	rect3=createSprite(445,610,20,100);
	rect3.shapeColor="red";
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	rectBody1 = Bodies.rectangle(295, 610, 20, 100, {isStatic:true});
	World.add(world, rectBody1);

	rectBody2 = Bodies.rectangle(380, 650, 150, 50, {isStatic:true});
	World.add(world, rectBody2);

	rectBody3 = Bodies.rectangle(460, 610, 20, 100, {isStatic:true});
	World.add(world, rectBody3);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rect1.x=rectBody1.position.x
  rect1.y=rectBody1.position.y
  rect2.x=rectBody2.position.x
  rect2.y=rectBody2.position.y 
  rect3.x=rectBody3.position.x
  rect3.y=rectBody3.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}



