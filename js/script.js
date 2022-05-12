const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${500 / 16}px`;
    square.style.height = `${500 / 16}px`;
    grid.appendChild(square);
  }
}
