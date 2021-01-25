var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,rec,rope,hex,backgroundImg,score,grd;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 600);
 
  

	engine = Engine.create();
	world = engine.world;

    hex= new Hex(60,400,50,50);
ground= new Ground(500,500,300,30);
box1= new Box(400,300,50,50);
box2= new Box(450,300,50,50);
box3= new Box(500,300,50,50);
box4= new Box(550,300,50,50);
box5= new Box(600,300,50,50);
box6= new Box(450,250,50,50);
box7= new Box(500,250,50,50);
box8= new Box(550,250,50,50);
box9= new Box(475,200,50,50);
box10= new Box(525,200,50,50);
box11= new Box(500,150,50,50);
rec =new Ground( 100,400,2,2);
grd= new Ground(400,590,12000,20);
rope= new Chain(hex.body,rec.body);

score=0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  GetTime();
  if(backgroundImg){
  
      background(backgroundImg);
  
  
  }
 textSize(20);
  stroke(6);
 




 box1.display();
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
rec.display();
hex.display();
rope.display();
grd.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
 rope.fly();
 
 
}

async function GetTime(){

  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json();
  console.log(responseJSON.datetime);
  var datetime=responseJSON.datetime
  
  var hour=datetime.slice(11,13);
  
  if(hour>=6 && hour<=18){
   bg="bg.png"
  }
  else{
      bg="bg2.png"
  }
  backgroundImg=loadImage(bg);
  
  }

