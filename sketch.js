var hr,min,sec;
var hrAngle, minAngle, secAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  var hr=hour();
  var min=minute();
  var sec=second();

  secAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map((hr%12),0,12,0,360);
  translate(200,200);
  rotate(-90);

  push();
  rotate(minAngle);
  stroke("purple");
  strokeWeight(4);
  line(0,0,70,0);
  pop();


  push();
  rotate(secAngle);
  stroke("white");
  strokeWeight(4);
  line(0,0,90,0);
  pop();


  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(4);
  line(0,0,50,0);
  pop();
 
  noFill();
  stroke("skyblue");
  strokeWeight(5);
  arc(0,0,250,250,PI*2,secAngle);

  

  stroke("red");
  strokeWeight(5);
  arc(0,0,220,220,PI*2,minAngle);

  

  stroke("green");
  strokeWeight(5);
  arc(0,0,190,190,PI*2,hrAngle);


  
  drawSprites();
}