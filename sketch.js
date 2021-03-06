var starImg,bgImg;
var star, starBody;
var fairy,fairyImg, fairyBody;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadImage("fairy.png");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	//playSound("JoyMusic.mp3");
	//crea el sprite del hada, y agrega la animación para el hada


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.1;

	fairy = createSprite (300,500);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650,30,5, {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada

  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === LEFT_ARROW){
		fairy.x = fairy.x -10
	}
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x +10
	}
	//escribe el código para mover al hada a la izquierda y derecha
	
}
