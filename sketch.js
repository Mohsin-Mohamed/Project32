const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, platform
var box, polygon
var sling, backgroundImg
var score = 0
var bg
function preload(){
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    //level 1
    box1 = new Box(340,270,40,50)
    box2 = new Box(380,270,40,50)
    box3 = new Box(420,270,40,50)
    box4 = new Box(460,270,40,50)
    box5 = new Box(500,270,40,50)
    box6 = new Box(540,270,40,50)
    box7 = new Box(580,270,40,50)
    box8 = new Box(620,270,40,50)
    box9 = new Box(660,270,40,50)
    //level 2
    box10 = new Box(360,220,40,50)
    box11 = new Box(400,220,40,50)
    box12 = new Box(440,220,40,50)
    box13 = new Box(480,220,40,50)
    box14 = new Box(520,220,40,50)
    box15 = new Box(560,220,40,50)
    box16 = new Box(600,220,40,50)
    box17 = new Box(640,220,40,50)
    //level 3
    box18 = new Box(380,170,40,50)
    box19 = new Box(420,170,40,50)
    box20 = new Box(460,170,40,50)
    box21 = new Box(500,170,40,50)
    box22 = new Box(540,170,40,50)
    box23 = new Box(580,170,40,50)
    box24 = new Box(620,170,40,50)
    //level 4
    box25 = new Box(400,120,40,50)
    box26 = new Box(440,120,40,50)
    box27 = new Box(480,120,40,50)
    box28 = new Box(520,120,40,50)
    box29 = new Box(560,120,40,50)
    box30 = new Box(600,120,40,50)

    ground = new Ground(450,height,900,20);
    platform = new Platform(500,300,360,10);
    polygon = new Polygon(150,190,70,70);
    sling = new SlingShot(polygon.body,{x:150,y:190})
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(30)
    fill("white")
    text("Score"+ score, 450, 50)
    Engine.update(engine)
    //Boxes...
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display()

    //Score
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();

    //Rest of them.
    ground.display()
    platform.display()
    polygon.display()
    sling.display()
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
      sling.attach(polygon.body);
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)

    if(hour>=06 && hour<18){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg=loadImage(bg)
}