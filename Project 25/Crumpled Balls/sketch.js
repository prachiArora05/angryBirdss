const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Dustbin, Ground, world, Paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	Ground = new ground(width/2, 670, width, 20);
	Dustbin = new dustbin(1200, 650);
	Paper = new paper(200, 450, 70);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	})

	Engine.run(engine);
	Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background(230);
  
  Ground.display();
  Paper.display();
  Dustbin.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(Paper.body, Paper.body.position, {x: 130, y: -145});
	}
}