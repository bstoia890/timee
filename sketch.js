const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    
    engine = Engine.create();
    world = engine.world;
    

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Chicago");
    var responseType = await response.json();
    console.log(responseType);
    var dt = responseType.datetime;
    console.log(dt);
    var hr = dt.slice(11,13);
    console.log(hr);
    if (hr === 6){
        bg = "sunrise1.png";
    }
    if (hr === 7){
        bg = "sunrise2.png";
    }
    if (hr === 8){
        bg = "sunrise3.png";
    }
    if (hr === 9){
        bg = "sunrise4.png";
    }
    if (hr === 10){
        bg = "sunrise5.png";
    }
    if (hr === 11){
        bg = "sunrise6.png";
    }
    if (hr === 12){
        bg = "sunset7.png";
    }
    if (hr === 13){
        bg = "sunset8.png";
    }
    if (hr === 14){
        bg = "sunset9.png";
    }
    if (hr === 15){
        bg = "sunset10.png";
    }
    if(hr === 16){
        bg = "sunset11.png";
    }
    if (hr >= 17 || hr <=5){
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);






    // write code to fetch time from API
    //change the data in JSON format
    // write code slice the datetime
    // add conditions to change the background images from sunrise to sunset
    //load the image in backgroundImg variable here

}
