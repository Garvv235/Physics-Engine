const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  var options = {
    isStatic:true
     }
  var options_2 = {
    restitution:  2
  }
  object = Bodies.rectangle(200,200,50,50,options_2);
  World.add(world,object);
  
  ground = Bodies.rectangle(400,390,800,50,options)
  World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
 rect(400,200,50,50);
rect(object.position.x,object.position.y,50,50);
 rect(ground.position.x,ground.position.y,800,50);
}