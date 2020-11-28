const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var slingShot,poly


function preload() {
  
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world= engine.world

  ground1=new Ground(400,400,800,30)
  ground2=new Ground(400,300,400,10)
  
  poly=new Polygon(200,200)
  block2=new Block(260,275,30,40)
  block3=new Block(310,275,30,40)
  block4=new Block(360,275,30,40)
  block5=new Block(410,275,30,40)
  block6=new Block(460,275,30,40)
  block7=new Block(510,275,30,40)
  block1=new Block( 560,275,30,40)
  block8=new Block(330,235,30,30)
  block9=new Block(360,235,30,30)
  block10=new Block(385,235,30,40)
  block11=new Block(435,235,30,40)
  block12=new Block(485,235,30,40)
  block13=new Block(535,235,30,40)
  block14=new Block(335,235,30,40)
  block15=new Block(410,195,30,40)
 
  block16=new Block(460,195,30,40)
  block17=new Block(360,195,30,40)

  ground3=new Ground(700,150,300,10)
  block18=new Block(750,125,30,40)
  block19=new Block(650,125,30,40)
  block20=new Block(600,125,30,40)
  block21=new Block(700,125,30,40)
  block22=new Block(675,85,30,40)
  block23=new Block(725,85,30,40)
  block24=new Block(625,85,30,40)
  block25=new Block(700,45,30,40)
  block26=new Block(650,45,30,40)
 
  
  slingShot=new SlingShot(poly.body,{x:100,y:200})
  Engine.run(engine);


}

function draw() {
  background(0);  
  ground1.display()
  ground2.display()
  ground3.display()
  poly.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()

  
}
function mouseDragged() {
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  slingShot.fly
}
