// Character in a Grid

let gridDimensions = 10;
let grid;
let cellSize;
let level1;
let playerX = 0;
let playerY = 0;
let state = "rest";

function preload() {
  level1 = loadJSON("assets/level1.json");
}

function setup() {
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }

  // grid = createRandomArray(gridDimensions);
  grid = level1;
  cellSize = width / gridDimensions;

  //place player
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  moveByState();
  displayGrid();
}

function keyPressed() {
  if (state === "rest") {
    if (key === "s") {
      state = "down";
    }
    else if (key === "w") {
      state = "up";
    }
    else if (key === "d") {
      state = "right";
    }
    else if (key === "a") {
      state = "left";
    }
  }
}

function moveByState() {
  if (frameCount % 30 === 0) {
    let didMove;
    if (state === "right") {
      didMove = tryMovingTo(playerX+1, playerY);
    }
    else if (state === "left") {
      didMove = tryMovingTo(playerX-1, playerY);
    }
    else if (state === "up") {
      didMove = tryMovingTo(playerX, playerY-1);
    }
    else if (state === "down") {
      didMove = tryMovingTo(playerX, playerY+1);
    }

    if (!didMove) {
      state = "rest";
    }
  }
}

function tryMovingTo(newX, newY) {
  //make sure you're on the grid
  if (newX >= 0 && newY >= 0 && newX < gridDimensions && newY < gridDimensions) {
    //check if  new spot is empty
    if (grid[newY][newX] === 0) {
      //reset current spot to be empty
      grid[playerY][playerX] = 0;

      //move player
      playerX = newX;
      playerY = newY;

      //put player back in grid
      grid[newY][newX] = 9;

      return true; //so I know we moved
    }
  }

  return false; //no move happened
}

function mousePressed() {
  if (mouseX <= width && mouseY <= height) {
    let cellX = Math.floor(mouseX/cellSize);
    let cellY = Math.floor(mouseY/cellSize);
    
    swap(cellX, cellY);
  }
}

function swap(x, y) {
  if (x >= 0 && x < gridDimensions && y >= 0 && y < gridDimensions) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}

function displayGrid() {
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 9) {
        fill("red");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandomArray(howLarge) {
  let newArray = [];
  for (let y=0; y<howLarge; y++) {
    newArray.push([]);
    for (let x=0; x<howLarge; x++) {
      if (random(0, 100) > 50) {
        newArray[y].push(0);
      }
      else {
        newArray[y].push(1);
      }
    }
  }
  return newArray;
}