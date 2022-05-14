let squares;
let penToggle = false;
const grid = document.querySelector(".grid");

const gridSizeInput = document.querySelector("#grid-size input");
const gridSizeInfos = document.querySelector("#grid-size span");

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
  square.style.backgroundColor = "black";
}

function togglePen(square) {
  penToggle = !penToggle;

  // Change square color even when clicking to deactivate pen
  drawOnSquare(square);
}
