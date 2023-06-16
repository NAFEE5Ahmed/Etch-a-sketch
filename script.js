// initializing variables and constants
const container = document.querySelector(".container");
const eraser = document.querySelector("#eraser");
const blackColor = document.querySelector("#black-color");
const multiColor = document.querySelector("#multi-color");
const clear = document.querySelector("#clear");
const gridSizeDisplay = document.querySelector(".grid-size-display");
let gridSizeRange = document.querySelector("#grid-size-range");
let gridSize = parseInt(gridSizeRange.value);

// controlling grid size
gridSizeRange.addEventListener("input", () => {
  gridSize = parseInt(gridSizeRange.value);
  gridDesigningHandling();
});

//  grids creation
function gridCreation() {
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-item");
    container.append(grid);
  }
}

//setting grid structure
function gridStructure() {
  const grids = document.querySelectorAll(".grid-item");
  for (const grid of grids) {
    grid.style.flexBasis = `calc(100% / ${gridSize})`;
    grid.style.height = `calc(100% / ${gridSize})`;
  }
}

// grid designing handling
function gridDesigningHandling() {
  container.innerHTML = "";
  gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;
  gridCreation();
  gridStructure();
}
gridDesigningHandling();

// generate random color
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 250) + 5;
  const green = Math.floor(Math.random() * 250) + 5;
  const blue = Math.floor(Math.random() * 250) + 5;
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}

// drawing the board using multi color
multiColor.addEventListener("click", drawingByMultiColor);
let multiDrawing = false; // Flag variable to track drawing state
function drawingByMultiColor() {
  const grids = document.querySelectorAll(".grid-item");
  for (const grid of grids) {
    grid.addEventListener("mouseenter", (e) => {
      if (multiDrawing) {
        e.target.style.background = randomColorGenerator();
      }
    });
  }
}
container.addEventListener("mousedown", () => {
  multiDrawing = true;
});
container.addEventListener("mouseup", () => {
  multiDrawing = false;
});

// drawing the board using black color
blackColor.addEventListener("click", drawingByBlackColor);
let blackDrawing = false;
function drawingByBlackColor() {
  const grids = document.querySelectorAll(".grid-item");
  for (const grid of grids) {
    grid.addEventListener("mouseenter", (e) => {
      if (blackDrawing) {
        e.target.style.background = "black";
      }
    });
  }
}
container.addEventListener("mousedown", () => {
  blackDrawing = true;
});
container.addEventListener("mouseup", () => {
  blackDrawing = false;
});

//erase the board
let isEraser = false;
eraser.addEventListener("click", drawingEraser)
function drawingEraser() {
  const grids = document.querySelectorAll(".grid-item");
  for (const grid of grids) {
    grid.addEventListener("mouseenter", (e) => {
      if (isEraser) {
        e.target.style.background = "white";
      }
    });
  }
}
container.addEventListener("mousedown", () => {
  isEraser = true;
});
container.addEventListener("mouseup", () => {
  isEraser = false;
});

//clear the board
clear.addEventListener("click", () => {
  const grids = document.querySelectorAll(".grid-item");
  for (grid of grids) {
    grid.style.background = "white";
  }
});
