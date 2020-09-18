
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground, invisibleGround
var bananaGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,150,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(50,180,600,5);
  ground.x = ground.width /2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("green");
  
  monkey.collide(invisibleGround);
  
  if(keyDown("space")&& monkey.y >=49) {
        monkey.velocityY = -13;
    }
    
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnBananas();
  spawnObstacles();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
 
  drawSprites();
}

  function spawnBananas() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,100));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.scale = 0.05;
    foodGroup.add(banana);
    }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.addImage("stone", obstacleImage);
   obstacle.velocityX = -6;         
   obstacle.scale = 0.15;
   obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);
 }
}
