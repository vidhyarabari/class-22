const Engine =Matter.Engine
const World =Matter.World
const Bodies=Matter.Bodies






function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  var groptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,10,groptions)
  World.add(world,ground)
var balloptions = {
 restitution:1
}
  ball=Bodies.circle(200,100,30,balloptions);
  World.add(world,ball)
// console.log(ground);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER)
  rect (ground.position.x,ground.position.y,400,10)  ; 
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30)
}