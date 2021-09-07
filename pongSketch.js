function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle1 = new Paddle(30, 40, 10, 90);
    paddle2 = new Paddle(680, 250, 10, 90)
  }
  
  function draw() {
    background(0);
    paddle1.show();
    paddle2.show();
    rect(130, 132, 10, 10);
    
    rect(342, 20, 2, 50);
    rect(380, 20, 2, 50);
    
    //middle line
    line(360, 0, 360, 600);
    stroke(255, 255, 255);
    strokeWeight(6);
  }
  
  class Paddle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
    
    show() {
      rect(this.x, this.y, this.w, this.h);
    }
  }