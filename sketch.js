
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,200,20,20)
	ground = new Ground(350,700,800,50)
	bin1 = new Bin(500,600,200,150)
	//bin2 = new Bin(600,600,30,150)
	//bin3 = new Bin(550,660,130,30)
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("grey"); 
  paper.display()

  ground.display()
  //bin3.display()
  //bin2.display()
  bin1.display()
   text("You want to inculcate the habit of throwing the waste in the trash bin in young individuals and help keep your city clean",10,300)
   textSize(15)
   text("You have to be a model for others in throwing waste in the dustbin",100,350)
  text("Press UP ARROW KEY to throw the waste.Remember (in the green dustbin) GOOD LUCK ",70,400)

}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20})
	}
  }
