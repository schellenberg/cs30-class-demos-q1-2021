// Sudoku

let initialGrid;

let gridDimesions = 9;
let cellSize;
let grid;

function preload() {
  initialGrid = loadStrings("assets/level2.txt");
}

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth*0.8, windowWidth*0.8);
  }
  else {
    createCanvas(windowHeight*0.8, windowHeight*0.8);
  }

  initialGrid = convertedToIntGrid(initialGrid);

  grid = initialGrid;
  cellSize = width/gridDimesions;
}

function convertedToIntGrid(initialGrid) {
  //assume rectangular array
  let rows = initialGrid.length;
  let cols = initialGrid[0].length;

  let newGrid = [];
  for (let y=0; y<rows; y++) {
    newGrid.push([]);
    for (let x=0; x<cols; x++) {
      newGrid[y].push( int(initialGrid[y][x]) );
    }
  }
  return newGrid;
}

function draw() {
  background(220);
  displayGrid();
}

function windowResized() {
  setup();
}

function displayGrid() {
  for (let y=0; y<gridDimesions; y++) {
    for (let x=0; x<gridDimesions; x++) {
      fill("white");
      strokeWeight(1);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);

      if (grid[y][x] !== 0) {
        fill("black");
        textSize(cellSize*0.75);
        textAlign(CENTER, CENTER);
        text(grid[y][x], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
      }
    }
  }

  drawCageLines();
}

function drawCageLines() {
  strokeWeight(4);

  for (let location = 0; location <= 9; location += 3) {
    line(0, location*cellSize, width, location*cellSize);
    line(location*cellSize, 0, location*cellSize, height);
  }
}