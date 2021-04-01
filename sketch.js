const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


//var engine , world, bodies;

TITLES = 0;
PLAY = 1;
gameState =0;

var canvas
var platform1,platform2,platform3,platform4,platform5;
var platform6,platform7,platform8,platform9,platform10;
var platform11,platform12,platform13;

var paper1

var a1 , a2



function preload()
{
   titleImg = loadImage("images/TitleScreen_BG_Final.jpg");
   gameImg = loadImage("images/game_bg.png");

  //p1 = loadImage("images/platform.png");
  //p2 = loadImage("images/platform1.png");

   titlescreenMusic = loadSound("sounds/Shattered-Reality.mp3")
}

function setup()

{
  engine = Engine.create();
  world = engine.world;
  
  canvas=createCanvas(700,700);

  player = createSprite(mouseX,mouseY,250,150);
  player.shapecolor = "red"
  


//platforms
 platform1 = new Ground(250, 625, 500, 150);
 platform2 = new Ground(475,50, 200,50);
 platform3 = new Ground(225,-100,250,250);
 platform4 = new Ground(450,50,400,200);
 platform5 = new Ground(525,50,450,80);
 platform6 = new Ground(500,10,550,40);
 platform7 = new Ground(675,-100,800,240);
 platform8 = new Ground(-2537,110,125,10);
 platform9 = new Ground(575,0,125,10);
 platform10 = new Ground(512,0,100,10);
 platform11 = new Ground(2450,-20,1200,120);
 
}

function draw()
{ 
console.log(gameState)
console.log(player.x,player.y)

//TitleScreen
  if(gameState === TITLES)
  {
    background(titleImg);
      if(keyDown("a"))
      {
        gameState = PLAY;
      }
  }
   

//*********************\\
//GAME
if(gameState === PLAY)
{

Engine.update(engine)
canvas.resize(4614,700)
 background("grey")
titlescreenMusic.stop(); 

//platform_displays
/*platform1.display();
platform2.display();
platform3.display();
platform4.display();
platform5.display();
platform6.display();
platform7.display();
platform8.display();
platform9.display();
platform10.display();
platform11.display();*/

//dummy for player

player.visible = true;

drawSprites();
}
//**********************\\

}

