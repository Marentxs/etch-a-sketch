const container = document.getElementById("container");
const grid = document.getElementsByClassName("grid");

const rows = 16;

const colorInput = document.getElementById("colorPicker");
let selectedColor = "#000000ff";

colorInput.addEventListener("input", (event) => {
  selectedColor = event.target.value;
});

for (let i = 0; i < rows * rows; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";

  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = selectedColor;
  });

  container.appendChild(grid);
}
