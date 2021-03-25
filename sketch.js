var canvas;
var music;
var b1,b2,b3,b4;
var ball,edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1=createSprite(0,570,360,30)
b1.shapeColor="blue"
b2=createSprite(295,570,200,30)
b2.shapeColor="green"
b3=createSprite(520,570,200,30)
b3.shapeColor="black"
b4=createSprite(720,570,200,30)
b4.shapeColor="pink"
    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=5;
ball.velocityY=6;
}

function draw() {
    background(rgb(169,169,169));
edges=createEdgeSprites()
ball.bounceOff(edges)
if(b1.isTouching(ball)&&ball.bounceOff(b1)){
    ball.shapeColor="blue"
    music.play()
}

if(b2.isTouching(ball)&&ball.bounceOff(b2)){
    ball.shapeColor="green"
    ball.setVelocity(0,0);
    music.stop()
}
if(b3.isTouching(ball)&&ball.bounceOff(b3)){
    ball.shapeColor="black"
}
if(b4.isTouching(ball)&&ball.bounceOff(b4)){
    ball.shapeColor="pink"
}
drawSprites()
    //add condition to check if box touching surface and make it box
}
