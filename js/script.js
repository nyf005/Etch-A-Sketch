createGrid(100);

function createGrid(size) {
  const grid = document.querySelector(".grid");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.classList.add("square");

      // Calculate the width and height of a square in %
      square.style.width = `${100 / size}%`;
      square.style.height = `${100 / size}%`;
      grid.appendChild(square);
    }
  }
}
