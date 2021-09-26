let noiseScale = 0.02;
function setup() {
  alert("When you click on the screen, a ball will pop up. To change to   square mode, press the 's' key on the keyboard. To go back to ball mode, press the 'b' key. To clean up any garbage in the ocean, press the backspace button. You can only clean up in a certain mode however.");
  //alert should have instructions too
  createCanvas(windowWidth, windowHeight);
  balls = [];
  squares = [];
  //ball flies off the screen
  ballMode = true;
  squareMode = false;
  var r;
  var g;
  var b;
}


function draw() {
  let xVal = map(mouseX, 0, width, 0, 255);
  background(xVal,206,235);
  for(let x = 0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(color((2 + balls.length + squares.length), 124, 180));
    line(x, mouseY+noiseVal*80, x, height);
  }
  for(let i = 0; i < balls.length; i++) {
    //balls[i].update();
    //balls[i].show();
    balls[i].updateAndShow();
  }
  for (let i = 0; i < squares.length; i++) {
    //squares[i].update();
    //squares[i].show();
    squares[i].updateAndShow();
  }
  drawSun();
}

function mousePressed(){
  r = random(255);
  g = random(255);
  b = random(255);
  if(ballMode == true) {
    balls.push(new Ball(mouseX, mouseY));
  }
  else if (squareMode == true) {
    squares.push(new Square(mouseX, mouseY));
  }
}

function keyPressed(){
  if (keyCode == BACKSPACE){
    if(ballMode == true) {
      balls = shorten(balls);
    }
    else if (squareMode == true) {
      squares = shorten(squares);
    }
  }
  if (key == 'b' || key == 'B') {
    ballMode = true;
    squareMode = false;
  }
  if (key == 's' || key == 'S') {
    ballMode = false;
    squareMode = true;
  }
}

function Ball(x, y) {
  this.pos = createVector(x,y);

  this.dir = createVector(random(-1, 1), random(-1, 1));
  this.speed = (10, 10);
  

  this.update = function(){
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);

    if (this.pos.x < 0 || this.pos.x > windowWidth) {this.dir.x *= -1}
    if (this.pos.y < 0 || this.pos.y > windowHeight) {this.dir.y *= -1}

  }

  this.show = function(){
    stroke(10);
    strokeWeight(3);
    //seizure warning
    //updating color palette
    //fill and show
    //fill(random(0, 255), random(0, 255), random(0, 255));
    fill(255, 255, 255);
    ellipse(this.pos.x, this.pos.y, 50, 50)
  }
  
  this.updateAndShow = function(){
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);

    if (this.pos.x < 0 || this.pos.x > windowWidth) {this.dir.x *= -1}
    if (this.pos.y < 0 || this.pos.y > windowHeight) {this.dir.y *= -1}
    
    stroke(10);
    strokeWeight(3);
    //seizure warning
    //updating color palette
    //fill and show
    fill(r, g, b);
    ellipse(this.pos.x, this.pos.y, 50, 50)
  }
}

function Square(x, y) {
  this.pos = createVector(x,y);

  this.dir = createVector(random(-1, 1), random(-1, 1));
  this.speed = (10, 10);
  

  this.update = function(){
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);

    if (this.pos.x < 0 || this.pos.x > windowWidth) {this.dir.x *= -1}
    if (this.pos.y < 0 || this.pos.y > windowHeight) {this.dir.y *= -1}

  }

  this.show = function(){
    stroke(10);
    strokeWeight(3);
    //seizure warning
    //updating color palette
    //fill and show
    //fill(random(0, 255), random(0, 255), random(0, 255));
    fill(255, 255, 255);
    square(this.pos.x, this.pos.y, 50);
  }
  
  this.updateAndShow = function(){
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);

    if (this.pos.x < 0 || this.pos.x > windowWidth) {this.dir.x *= -1}
    if (this.pos.y < 0 || this.pos.y > windowHeight) {this.dir.y *= -1}
    
    stroke(10);
    strokeWeight(3);
    //seizure warning
    //updating color palette
    //fill and show
    fill(r, g, b);
    //fill(255, 255, 255);
    square(this.pos.x, this.pos.y, 50);
  }
}

function drawSun() {
  fill(245, 187, 87);
  stroke(245, 187, 87);
  ellipse(windowWidth - 30, 0, 200, 200);
}