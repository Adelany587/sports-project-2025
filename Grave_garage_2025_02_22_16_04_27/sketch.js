let sportImg;

function preload() {
sportImg=loadImage("picture.jpg")
 
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(sportImg,1,1,400,400)
  stroke("lightblue")
  strokeWeight(10)
  fill('white');
  noStroke()
  textSize(30)
  textAlign(CENTER, CENTER);
  text("Are you read for a",200,185)
  text("Challenge?!",220,220)
  
}