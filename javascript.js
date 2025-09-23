const container = document.getElementById("container");
const grid = document.getElementsByClassName("grid");

let rows = 16;

const colorInput = document.getElementById("colorPicker");
let selectedColor = "#000000ff";

colorInput.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  randomizer = false;
});

let painting = false;

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
