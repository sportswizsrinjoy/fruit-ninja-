var knife;
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameOverImg;
var gameOver;
var gameOverSound;
var score=0;
var enemy,enemyGroup,enemy1,enemy2;
var fruitGroup,fruit1,fruit2,fruit3,fruit4;

function preload(){
  knifeImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  enemy1=loadImage("alien1.png");
  enemy2=loadImage("alien2.png");
gameOverImg=loadImage("gameover.png");
gameOverSound=loadSound("gameover.mp3")
  
  

 
}
function setup(){
  createCanvas(600,600);
  knife=createSprite(400,100,20,20);
  knife.addImage("knifeImage",knifeImage);
  knife.scale=0.5;
  score=0;
  fruitGroup=new Group();
  enemyGroup=new Group();
 gameOver= createSprite(300,300,20,20);
  gameOver.addImage("gameOverimg",gameOverImg);
  
  
  
  
  
  
  
}

function draw(){
  background("green")
  knife.y=World.mouseY;
  knife.x=World.mouseX;
  
 
  text("score :"+score,500,50);
  if(gameState===PLAY){
    gameOver.visible=false;
    if(enemyGroup.isTouching(knife)){
      gameState=END;
      gameOverSound.play()
    }
    if(fruitGroup.isTouching(knife)){
      score=score+1;
      fruitGroup.destroyEach();
    }
     spawnEnemy()
  spawnfruit()
  }
   else if(gameState===END){
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
  }
  
 
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 drawSprites(); 
} 
  function spawnfruit(){
  if(frameCount% 60===0){
    var fruit = createSprite(400,165,10,40);
    fruit.velocityX=-4;
    var rand=Math.round(random(1,4));
    switch(rand){
     case 1:fruit.addImage(fruit1);
        break;
        case 2:fruit.addImage(fruit2);
        break;
        case 3:fruit.addImage(fruit3);
        break;
        case 4:fruit.addImage(fruit4);
        break;
        default:break;
    }
    fruit.scale=0.3;
    fruit.lifetime=300;
    fruitGroup.add(fruit);
    
  }
  }

function spawnEnemy(){
  if(frameCount% 80===0){
    var enemy = createSprite(350,150,10,40);
    enemy.velocityX=-4;
    var rand=Math.round(random(1,5));
    switch(rand){
      case 1:enemy.addImage(enemy1);
        break;
        case 2:enemy.addImage(enemy2);
        break;
        default:break;
    }
    enemy.scale=0.9;
    enemy.lifetime=300;
    enemyGroup.add(enemy);
  }
}
    
        
    

        
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



