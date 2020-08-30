var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxBottom,boxLeftSide,BoxRightSide;
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

	boxBottom = createSprite(width/2,650,200,20);
	boxLeftSide = createSprite(width/2-100,610,20,100);
	BoxRightSide = createSprite(width/2+100,610,20,100);

	boxBottom.shapeColor = "red";
	boxLeftSide.shapeColor = "red";
	BoxRightSide.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	boxBottom = Bodies.rectangle(width/2, 650, 200, 50 , {isStatic:true} );
 	World.add(world, boxBottom);

	boxLeftSide = Bodies.rectangle(width/2-100, 620, 20, 100, {isStatic:true} );
 	World.add(world, boxLeftSide);

	BoxRightSide = Bodies.rectangle(width/2+100, 650, 20, 100 , {isStatic:true} );
 	World.add(world, BoxRightSide);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,isStatic=false);
  }
}



