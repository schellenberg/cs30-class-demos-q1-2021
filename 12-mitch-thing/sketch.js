let gridDimensions = 20;
let grid = createEmptyArray(gridDimensions);

function setup() {
  createCanvas(400, 400);
  grid = noiseThisGrid(grid);
}

function draw() {
  background(220);
}

function noiseThisGrid(grid) {
  let scalar = 0.05;
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++) {
      let theValue = round(noise(x*scalar, y*scalar)*4);
      grid[y][x] = theValue;
    }
  }
  return grid;
}

function createEmptyArray(howLarge) {
  let newArray = [];
  for (let y=0; y<howLarge; y++) {
    newArray.push([]);
    for (let x=0; x<howLarge; x++) {
      newArray[y].push(0);
    }
  }
  return newArray;
}