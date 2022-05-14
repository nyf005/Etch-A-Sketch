let squares;
let penToggle = false;
let isRandomActive = false;
let isDarkenActive = false;
let isLightenActive = false;
let isEraserActive = false;

const grid = document.querySelector(".grid");

const gridSizeInput = document.querySelector("#grid-size input");
const gridSizeInfos = document.querySelector("#grid-size span");

const btns = document.querySelectorAll("button");
const randomBtn = document.getElementById("random");
const darkenBtn = document.getElementById("darken");
const lightenBtn = document.getElementById("lighten");
const eraserBtn = document.getElementById("eraser");

createGrid(gridSizeInput.value);
drawOnGrid(squares);

gridSizeInput.addEventListener("change", (e) => {
  // Update grid size control infos
  gridSizeInfos.textContent = `${e.target.value} x ${e.target.value}`;

  clearGrid();
  createGrid(e.target.value);
  drawOnGrid(squares);
});

randomBtn.addEventListener("click", () => {
  isRandomActive = !isRandomActive;
  randomBtn.classList.toggle("clicked");

  isDarkenActive = false;
  darkenBtn.classList.remove("clicked");

  isLightenActive = false;
  lightenBtn.classList.remove("clicked");

  isEraserActive = false;
  eraserBtn.classList.remove("clicked");
});

darkenBtn.addEventListener("click", () => {
  isDarkenActive = !isDarkenActive;
  darkenBtn.classList.toggle("clicked");

  isRandomActive = false;
  randomBtn.classList.remove("clicked");

  isLightenActive = false;
  lightenBtn.classList.remove("clicked");

  isEraserActive = false;
  eraserBtn.classList.remove("clicked");
});

lightenBtn.addEventListener("click", () => {
  isLightenActive = !isLightenActive;
  lightenBtn.classList.toggle("clicked");

  isRandomActive = false;
  randomBtn.classList.remove("clicked");

  isDarkenActive = false;
  darkenBtn.classList.remove("clicked");

  isEraserActive = false;
  eraserBtn.classList.remove("clicked");
});

eraserBtn.addEventListener("click", (e) => {
  isEraserActive = !isEraserActive;
  eraserBtn.classList.toggle("clicked");

  isRandomActive = false;
  randomBtn.classList.remove("clicked");

  isDarkenActive = false;
  darkenBtn.classList.remove("clicked");

  isLightenActive = false;
  lightenBtn.classList.remove("clicked");
});

// FUNCTIONS

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      // Calculate the width and height of a square in %
      square.style.width = `${100 / size}%`;
      square.style.height = `${100 / size}%`;
      grid.appendChild(square);
    }
  }

  // Get current Nodelist of squares
  squares = document.querySelectorAll(".square");
}

function clearGrid() {
  penToggle = false;
  squares.forEach((square) => grid.removeChild(square));
}

// Allow to draw on the wholw grid
function drawOnGrid(squares) {
  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      togglePen(e.target);
    });

    square.addEventListener("mouseenter", (e) => {
      if (penToggle) {
        drawOnSquare(e.target);
      }
    });
  });
}

// Allow to change color of an individual square
function drawOnSquare(square) {
  if (isRandomActive) {
    square.style.backgroundColor = `rgb(${randomRGBVal()}, ${randomRGBVal()}, ${randomRGBVal()})`;
  } else if (isDarkenActive) {
    darkenSquare(square);
  } else if (isLightenActive) {
    lightenSquare(square);
  } else if (isEraserActive) {
    square.style.backgroundColor = "#ffffff";
  } else {
    square.style.backgroundColor = "black";
  }
}

function togglePen(square) {
  penToggle = !penToggle;

  // Change square color even when clicking to deactivate pen
  drawOnSquare(square);
}

function randomRGBVal() {
  return Math.floor(Math.random() * 255);
}

function darkenSquare(square) {
  let currentColorValues;
  // Get RGB values of current color
  currentColorValues = square.style.backgroundColor.slice(4, -1).split(",");
  if (currentColorValues == "") {
    currentColorValues[0] = 225.5;
    currentColorValues[1] = 225.5;
    currentColorValues[2] = 225.5;
  } else {
    currentColorValues[0] -= currentColorValues[0] * 0.1;
    currentColorValues[1] -= currentColorValues[1] * 0.1;
    currentColorValues[2] -= currentColorValues[2] * 0.1;
  }

  square.style.backgroundColor = `rgb(${currentColorValues[0]}, ${currentColorValues[1]}, ${currentColorValues[2]})`;
}

function lightenSquare(square) {
  let currentColorValues;
  // Get RGB values of current color
  var rgbColor = square.style.backgroundColor;
  // rgbArr = rgbColor
  //   .substring(4, rgbColor.length - 1)
  //   .replace(/ /g, "")
  //   .split(",");

  console.log(rgbColor);

  // currentColorValues = square.style.backgroundColor.slice(4, -1).split(",");
  // if (currentColorValues == "") {
  //   currentColorValues[0] = 5;
  //   currentColorValues[1] = 5;
  //   currentColorValues[2] = 5;
  // } else {
  //   currentColorValues[0] += currentColorValues[0] * 0.1;
  //   currentColorValues[1] += currentColorValues[1] * 0.1;
  //   currentColorValues[2] += currentColorValues[2] * 0.1;
  // }

  // square.style.backgroundColor = `rgb(${currentColorValues[0]}, ${currentColorValues[1]}, ${currentColorValues[2]})`;
}
