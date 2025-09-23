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

let rows = 16;
const cellSize = 22;

container.style.width = `${rows * cellSize}px`;

//Grid generator logic, with functionality for random and painting mode

for (let i = 0; i < rows * rows; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";

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
