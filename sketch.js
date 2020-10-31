
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var groundA;
function preload()
{
	
}

function setup() {
	createCanvas(480,800);
	engine = Engine.create();
	world = engine.world;
  
	groundA = new Ground(width/2,height,width,20);
  
	for (var i =0; i<=innerWidth; i = i +80)
	{
	  divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight))
	}
	for (var p = 75; p <=width; p = p +50)
	{
	  plinkos.push(new Plinko(p, 75));
	}
	for (var p = 50; p <=width; p = p +50)
  {
    plinkos.push(new Plinko(p, 175));
  }

  for (var p = 75; p <=width; p = p +50)
  {
    plinkos.push(new Plinko(p, 275));
  }

  for (var p = 50; p <=width-10; p = p +50)
  {
    plinkos.push(new Plinko(p, 375));
  }
  }


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);
  groundA.display();
  for (var i = 0; i<divisions.length; i++)
  {
    divisions[i].display();
  }
  for (var p = 0; p<plinkos.length; p++)
  {
    plinkos[p].display();
  }
  if (frameCount%60 ===0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for (var j = 0; j<particles.length; j++)
  {
    particles[j].display();
  }
  
  drawSprites();
  

 
}



