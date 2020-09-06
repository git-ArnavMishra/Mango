const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyIMG;
var boySprite;
var tree;
var ground;
var man1;
var man2;
var man3;
var man4;
var man5;
var man6;
var man7;
var man8;
var man9;
var man10;
var man11;
var stone;
var  slingShot;
function preload()
{
	boyIMG = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1820, 980);
	engine = Engine.create();
	world = engine.world;
	stone= new Stone(500,400);
	boySprite = createSprite((width/2)-610, 500, 1,1);
	

	
	
	boySprite.scale = 0.2;
	tree = new Tree(1220, 350,1000,1000);
	ground = new Ground(1820/2,920,1820,80)
	man1 = new Mango(1000,200,300,300);
	man2 = new Mango(1200,150,300,300);
	man3 = new Mango(1280,200,300,300);
	man4 = new Mango(900,170,300,300);
	man5 = new Mango(1300,280,300,300);
	man6 = new Mango(1400,200,300,300);
	man7 = new Mango(1500,100,300,300);
	man8 = new Mango(1200,90,300,300);
	man9 = new Mango(1000,100,300,300);
	man10 = new Mango(1000,200,300,300);
	man11= new Mango(1000,200,300,300);
	man11= new Mango(1000,200,300,300);
	
	slingShot = new SlingShot(stone.body,{x:180, y:400});
	//Create the Bodies Here.


  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(12,100,255);
  tree.display();
  ground.display();
  man1.display();
  man2.display();
  man3.display();
  man4.display();
  man5.display();
  man6.display();
  man7.display();
  man8.display();
  man9.display();
  man10.display();
  man11.display();
  detectCollision(stone,man1);
  detectCollision(stone,man2);
  detectCollision(stone,man3);
  detectCollision(stone,man4);
  detectCollision(stone,man5);
  detectCollision(stone,man6);
  detectCollision(stone,man7);
  detectCollision(stone,man8);
  detectCollision(stone,man9);
  detectCollision(stone,man10);
  
  detectCollision(stone,man11);
  textSize(32);
text('Press Space to get another chance', 10, 30);
fill(0, 102, 153);


 
  stone.display();
  boySprite.addImage(boyIMG);		
  slingShot.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420});
    slingShot.attach(stone.body);      
    }
}
function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  console.log(distance,mango.r,stone.r);
  if(distance<=mango.width+stone.width){
		Matter.Body.setStatic(mango.body,false);
    }
}