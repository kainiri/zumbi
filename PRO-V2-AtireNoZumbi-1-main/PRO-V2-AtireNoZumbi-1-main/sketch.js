var bg,bgImg;
var player, shooterImg, shooter_shooting;
var parede;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
 bg.addImage(bgImg);
 bg.scale= 1.1;

 player = createSprite(displayWidth-1150,displayHeight-300,50,50);
 player.addImage(shooterImg);
 player.scale=0.3;
 player.setCollider("rectangle",0,0,200,470);
 player.debug=false;

parede=createEdgeSprites();

}

function draw() {
  background(0); 
  if(keyDown("UP_ARROW")|| touches.length>0){
    player.y-=20;
  }
 if(keyDown("DOWN_ARROW")|| touches.length>0){
  player.y+=20;
 }
if(keyWentDown("SPACE")||touches.length>0){
player.addImage(shooter_shooting);
}
else if(keyWentUp("SPACE")||touches.length>0){
  player.addImage(shooterImg);
}
   player.collide(parede[2]);
   player.collide(parede[3]);
 drawSprites();

}
