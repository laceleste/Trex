
var trex ,trex_running;
var score = 0


function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImage= loadImage('cloud.png')
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  trex_collided = loadImage("trex_collided.png")


}

function setup(){
  createCanvas(600,200)
  ground = createSprite(200,180,400,20)

  invisibleGround = createSprite(200,190,400,10)

  //crie um sprite de trex
  trex = createSprite(50,160,20,50);


 

  edges = createEdgeSprites()
  trex.scale = 0.5 
  trex.x=50


  // trex.setCollider("rectangle",0,0,400,trex.height)

}

function draw(){
  background("white")








  drawSprites();
}


function reset(){

  
}
function spawnObs(){





    // var rand = Math.round(random(1,6));
    // switch(rand) {
    //   case 1: obstacle.addImage(obstacle1);
              // break;

              
}
function spawnClouds(){





}