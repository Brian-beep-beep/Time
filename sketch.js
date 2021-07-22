const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var response, responsetype, dt, hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();
}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
    background(backgroundImg);
}

    Engine.update(engine);

    // write code to display time in correct format here
textSize(30);
if(hour=>12){
    text(" T I M E : " + hour%12 + " PM ", 50,100)
    }
else if(hour==0){
    text(" T I M E : 12 AM " , 50,100)
}
else{
    text(" T I M E : " + hour%12 + " AM ", 50,100)
}
}

async function getBackgroundImg(){

    // write code to fetch time from API
    response = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");
    //change the data in JSON format
    ResponseType = await response.json()
    // write code slice the datetime
     dt = ResponseType.datetime
    hour = dt.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if(hour>=4 && hour<=6){
       bg = "sunrise1.png"; 
   }
   else if(hour>=06 && hour<=07){
       bg = "sunrise2.png";
   }
   else if(hour>=07 && hour<=08){
       bg = "sunrise3.png";
   }
   else if(hour>=08 && hour<=09){
       bg = "sunrise4.png";
   }
   else if(hour>=09 && hour<=11){
       bg = "sunrise5.png";
   }
   else if(hour>=11 && hour<=12){
       bg = "sunrise6.png";
   }
   else if(hour>=12 && hour<=18){
       bg = "sunset7.png";
   }
   else if(hour>=18 && hour<=19){
       bg = "sunset8.png";
   }
   else if(hour>=19 && hour<=20){
       bg = "sunset9.png";
   }
   else if(hour>=20 && hour<=21){
       bg = "sunset10.png";
   }
   else if(hour>=21 && hour<=22){
       bg = "sunset11.png";
   }
   else if(hour>=22 && hour<=00){
       bg = "sunset12.png" ;
   }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
