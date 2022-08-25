var towerImg, tower;
var zombieImg, zombie, zombieGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  cimiterioImg = loadImage("cimiterio.png");
  zombieImg = loadImage("zombie.png");
  ghostImg = loadImage("ghost-standing.png");
  
}

function setup() {
  createCanvas(600, 600);
  cimiterio = createSprite(300,300);
  cimiterio.addImage("cimiterio",cimiterioImg);
  cimiterio.velocityY = 1;
  
  ghost = createSprite(200, 200, 50, 50);
  ghost.scale = 0.3;
  ghost.addImage("ghost",ghostImg);

  zombieGroup = new Group();
}

function draw() {
  background(200);
  
  if(cimiterio.x > 400){
      tower.x = 300
    }
    if(keyDown(LEFT_ARROW)){
    ghost.x -= 3  
    }  
    if(keyDown(RIGHT_ARROW)){
      ghost.x += 3  
      }
    if(keyDown("space")){
      ghost.velocityY = -5 
      }
    ghost.velocityY += 0.6
  
  spawnzombie();
  if(zombieGroup.isTouching(ghost)){
  ghost.velocityY = 0;  
  }

if(zombieGroup.isTouching(ghost) || ghost.y > 600 ){
ghost.destroy();
}



  drawSprites();
}

function spawnzombie(){
if(frameCount % 240 == 0){
door = createSprite(200, -50, 20, 20);
door.addImage(doorImg);
door.x = Math.round(random(120,400));
door.velocityX = 1;
door.lifeTime = 800;
doorsGroup.add(door);



ghost.depth = zombie.depth +1;

invisibleBlock = createSprite(200, 15);
invisibleBlock.width = width;
invisibleBlock.height = 2
invisibleBlock.velocityY = 1;
invisibleBlock.lifeTime = 800;
invisibleBlock.visible = false;
invisibleBlockGroup.add(invisibleBlock)

}  

}

