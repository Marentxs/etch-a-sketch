const container = document.getElementById("container");
const grid = document.getElementsByClassName("grid");

const rows = 16;

for (let i = 0; i < rows * rows; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";

  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "black";
  });

  container.appendChild(grid);
}
