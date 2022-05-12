let penToggle = false;
const grid = document.querySelector(".grid");

createGrid(24);

// Get Nodelist of squares
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    togglePen(e.target);
  });

  square.addEventListener("mouseenter", (e) => {
    if (penToggle) {
      changeColor(e.target);
    }
  });
});

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
}

function changeColor(square) {
  square.style.backgroundColor = "blue";
}

function togglePen(square) {
  penToggle = !penToggle;
  changeColor(square);
}
