const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16;
var sbox1, sbox2, sbox3, sbox4, sbox5, sbox6, sbox7, sbox8, sbox9;
var hex, heximg;
var launch;
var bg = 0;
var backgroundImg; 
var score = 0;

function preload()
{
    heximg = loadImage("polygon.png");
    backgroundImg = bg;
    getTime();
    
    
}


function setup()
{
    createCanvas(1600,800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,795,1600,10);
    stand1 = new Stand(700,650,300,10);
    stand2 = new Stand(1200,400,225,10);

    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    hex = Bodies.circle(150, 600, 20, options);
    World.add(world, hex);

    

    launch = new Launcher(this.hex,{x:150, y:600});

    //level 1
    box1 = new Box(580, 620, 40, 60);
    box2 = new Box(620, 620, 40, 60);
    box3 = new Box(660, 620, 40, 60);
    box4 = new Box(700, 620, 40, 60);
    box5 = new Box(740, 620, 40, 60);
    box6 = new Box(780, 620, 40, 60);
    box7 = new Box(820, 620, 40, 60);

    //level 2
    box8 = new Box(620, 560, 40, 60);
    box9 = new Box(660, 560, 40, 60);
    box10 = new Box(700, 560, 40, 60);
    box11 = new Box(740, 560, 40, 60);
    box12 = new Box(780, 560, 40, 60);

    //level 3
    box13 = new Box(660, 500, 40, 60);
    box14 = new Box(700, 500, 40, 60);
    box15 = new Box(740, 500, 40, 60);

    //level 4
    box16 = new Box(700, 440, 40, 60);

    //level 1
    sbox1 = new Box(1120, 360, 40, 60);
    sbox2 = new Box(1160, 360, 40, 60);
    sbox3 = new Box(1200, 360, 40, 60);
    sbox4 = new Box(1240, 360, 40, 60);
    sbox5 = new Box(1280, 360, 40, 60);

    //level 2
    sbox6 = new Box(1160, 300, 40, 60);
    sbox7 = new Box(1200, 300, 40, 60);
    sbox8 = new Box(1240, 300, 40, 60);

    //level 3
    sbox9 = new Box(1200, 240, 40, 60);

    Engine.run(engine);
    //console.log(box1.body.position.y);
}

function draw()
{   
    if(background(backgroundImg))
    background(backgroundImg);


    noStroke();
    textSize(35);
    fill("blue");
    text("Score : "+ score, width-300, 50);

    ground.display();
    stand1.display();
    stand2.display();

    imageMode(CENTER);
    image(heximg, hex.position.x, hex.position.y, 50, 50);

    //level 1
    stroke(0);
    strokeWeight(2);
    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();


    //level 2
    stroke(0);
    strokeWeight(2);
    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    //level 3
    stroke(0);
    strokeWeight(2);
    fill("lightgreen");
    box13.display();
    box14.display();
    box15.display();

    box13.score()
    box14.score()
    box15.score()
    
    stroke(0);
    strokeWeight(2);
    fill("lightyellow");
    box16.display();
    box16.score();

    //level 1
    stroke(0);
    strokeWeight(2);
    fill("lightblue");
    sbox1.display();
    sbox2.display();
    sbox3.display();
    sbox4.display();
    sbox5.display();

    sbox1.score();
    sbox2.score();
    sbox3.score();
    sbox4.score();
    sbox5.score();


    //level 2
    stroke(0);
    strokeWeight(2);
    fill("pink");
    sbox6.display();
    sbox7.display();
    sbox8.display();

    sbox6.score();
    sbox7.score();
    sbox8.score();


    //level 3
    stroke(0);
    strokeWeight(2);
    fill("lightgreen");
    sbox9.display();

    sbox9.score();
}


function mouseDragged()
{
	Matter.Body.setPosition(this.hex,{x: mouseX, y: mouseY})
}

function mouseReleased()
{
	launch.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        launch.attach(this.hex);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var daytime = responseJSON.datetime;
    var hour = daytime.slice(11, 13);
    console.log(hour);

    if(hour >= 6 && hour < 19)
    {
       bg = "lightblue";
    }
    else{
        bg = "black" ;
       
    }

    backgroundImg = bg;
}
