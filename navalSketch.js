let yoff = 0.0;
function setup() {
  //alert should have instructions too
  alert("Poseidon's Wrath!\nMoving the mouse left to right will move the sun and create a beautiful sunset. But when you click on the canvas, Poseidon will flood the land and create a storm cloud. The more storm clouds on screen, the darker the sky gets and the more aggressive the ocean becomes. To calm the storm down and dry the land, press the BACKSPACE button.");
  createCanvas(windowWidth, windowHeight);
  oceanWaves = [];
  stormClouds = [];
}


function draw() {
  let xVal = map(mouseX, 0, width, 0, 255);
  if (stormClouds.length == 0) {
    background(xVal,200,255);
  }
  else {
    background(xVal - (10 * stormClouds.length), 200 - (10 * stormClouds.length), 255 - (11 * stormClouds.length));
  }
  drawSun();
  for(let i = 0; i < oceanWaves.length; i++) {
    oceanWaves[i].show();
  }
  for(let i = 0; i < stormClouds.length; i++) {
    //use length of array in draw function to multiply hue
    //multiply g value of RGB by number of clouds
    //make 0 a special case
    stormClouds[i].show();
  }
}

function mousePressed(){
  oceanWaves.push(new Wave(mouseY));
  stormClouds.push(new StormCloud(mouseX));
}

function keyPressed(){
  if(keyCode == BACKSPACE) {
    //removes the clouds and water to make the scene calm
    oceanWaves = shorten(oceanWaves);
    stormClouds = shorten(stormClouds);
  }
}


function drawSun() {
  fill(245, map(mouseX, 0, width, 187, 150), map(mouseX, 0, width, 87, 0));
  stroke(245, 187, 87);
  ellipse(mouseX, 0, 200, 200);
}

function Wave(waveHeight) {
  this.waveHeight = waveHeight;
  
  this.show = function() {
    fill(2, 124, map(this.waveHeight, 0, height, 125, 255));
    noStroke();
    beginShape();
    let xoff = 0;
    for(let x = 0; x < width; x += 25) {
      let y = map(noise(xoff, yoff), 0, 1, this.waveHeight, this.waveHeight + 100);
      vertex(x, y);
      //the waves become wider when you lower the xoff
      xoff += 0.4;
    }
    //adjust the yoff to control the wave's speed
    yoff += 0.0075;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }
}

function StormCloud(position) {
  this.position = position;
  
  this.show = function() {
    fill(126, 135, 150);
    stroke(126, 135, 150);
    ellipse(this.position, 20, 140, 140);
    ellipse(this.position+30, 20, 140, 140);
    ellipse(this.position+20, 50, 140, 140);
    ellipse(this.position+50, 40, 140, 140);
    ellipse(this.position+80, 30, 140, 140);
    ellipse(this.position+60, 10, 140, 140);
  }
}