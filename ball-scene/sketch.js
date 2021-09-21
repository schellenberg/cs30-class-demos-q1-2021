// Ball Scene

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let index = 0; index < 10; index++) {
    spawnBall();
  }

  //spawn a ball every 0.5 seconds
  window.setInterval(spawnBall, 500);
}

function draw() {
  background(220);

  moveBall();
  displayBall();
}

function mousePressed() {
  spawnBall();
  ballArray[ballArray.length-1].x = mouseX;
  ballArray[ballArray.length-1].y = mouseY;
}

function spawnBall() {
  let newBall = {
    x: random(width),
    y: random(height),
    radius: random(10, 30),
    ballColor: color(random(255), random(255), random(255), random(255)),
    dx: random(5, 10),
    dy: random(5, 10),
    xTime: random(1000),
    yTime: random(1000),
    timeChange: random(0.001, 0.01),
  };
  ballArray.push(newBall);
}

function moveBall() {
  for (let theBall of ballArray) {
    // theBall.x += theBall.dx;
    // theBall.y += theBall.dy;
    // theBall.dx = random(-5, 5);
    // theBall.dy = random(-5, 5); 

    theBall.x = noise(theBall.xTime) * width;
    theBall.y = noise(theBall.yTime) * height;

    theBall.xTime += theBall.timeChange;
    theBall.yTime += theBall.timeChange;
  }
}

function displayBall() {
  for (let ball of ballArray) {
    noStroke();
    fill(ball.ballColor);
    circle(ball.x, ball.y, ball.radius*2);
  }
}
