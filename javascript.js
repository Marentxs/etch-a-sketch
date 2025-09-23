const container = document.getElementById("container");
const grid = document.getElementsByClassName("grid");

const rows = 16;

const colorInput = document.getElementById("colorPicker");
let selectedColor = "#000000ff";

colorInput.addEventListener("input", (event) => {
  selectedColor = event.target.value;
});

let painting = true;

function getRandomColor() {
  const maxVal = 0xffffff;
  let randomNumber = Math.floor(Math.random() * maxVal);
  let hexColor = randomNumber.toString(16);
  hexColor = hexColor.padStart(6, "0");
  return `#${hexColor.toUpperCase()}`;
}

console.log(getRandomColor());

for (let i = 0; i < rows * rows; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";

  grid.addEventListener("click", () => {
    painting = !painting;
  });

  grid.addEventListener("mouseover", () => {
    if (painting) {
      grid.style.backgroundColor = selectedColor;
    }
  });

  container.appendChild(grid);
}
