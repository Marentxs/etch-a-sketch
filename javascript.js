const container = document.getElementById("container");
const grid = document.getElementsByClassName("grid");

const colorInput = document.getElementById("colorPicker");
let selectedColor = "#000000ff";

//Color picker

colorInput.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  randomizer = false;
});

let painting = false;

//Grid generator logic, with functionality for random and painting mode

function createGrid(rows) {
  container.innerHTML = "";

  const containerSize = 500;
  container.style.width = `${containerSize}px`;
  const cellSize = containerSize / rows;

  for (let i = 0; i < rows * rows; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";

    grid.style.width = `${cellSize}px`;
    grid.style.height = `${cellSize}px`;

    grid.addEventListener("click", () => {
      painting = !painting;
    });

    grid.addEventListener("mouseover", () => {
      if (painting) {
        if (randomizer) {
          grid.style.backgroundColor = getRandomColor();
        } else {
          grid.style.backgroundColor = selectedColor;
        }
      }
    });

    container.appendChild(grid);
  }
}

//Initial grid

createGrid(16);

//Random mode logic

const random = document.getElementById("random");

function getRandomColor() {
  let r = Math.floor(Math.random() * 256); // Red component (0-255)
  let g = Math.floor(Math.random() * 256); // Green component (0-255)
  let b = Math.floor(Math.random() * 256); // Blue component (0-255)
  return `rgb(${r}, ${g}, ${b})`;
}

let randomizer = false;

random.addEventListener("click", () => {
  randomizer = !randomizer;
});

//Clear button logic

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    grid.style.background = "white";
  });
});

//Logic for grid size slider

const size = document.getElementById("size");
const sizeValue = document.getElementById("size-value");
sizeValue.textContent = `${size.value} x ${size.value}`;

size.addEventListener("input", (event) => {
  createGrid(event.target.value);
  document.getElementById(
    "size-value"
  ).textContent = `${event.target.value} x ${event.target.value}`;
});
