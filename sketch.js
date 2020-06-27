
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-10, width,40);
	groundSprite.shapeColor=color(255)
	var ground_options ={
        isStatic: true
    }


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
 
		console.log(ground);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 30 , {isStatic:true} );
 	World.add(world, ground);


	
  



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
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(packageBody.body,packageBody.position,{x:85,y:-85});
    
  }
}
