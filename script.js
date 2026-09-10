const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");
const clearBtn = document.querySelector("#clear-btn");

let currentSize = 16;

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

function createGrid(squaresPerSide) {
  container.innerHTML = "";
  currentSize = squaresPerSide;

  const totalSquares = squaresPerSide * squaresPerSide;
  const squareSize = 100 / squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;

    // Extra credit
    square.dataset.passes = "0";

    square.addEventListener("mouseenter", () => {
      let passes = Number(square.dataset.passes);

      if (passes === 0) {
        const { r, g, b } = getRandomRgb();
        square.dataset.baseR = r;
        square.dataset.baseG = g;
        square.dataset.baseB = b;
      }

      if (passes < 10) {
        passes += 1;
        square.dataset.passes = passes;

        const baseR = Number(square.dataset.baseR);
        const baseG = Number(square.dataset.baseG);
        const baseB = Number(square.dataset.baseB);

        // Reduce el valor RGB un 10% por pasada hacia negro (0, 0, 0)
        const factor = 1 - passes * 0.1;
        const currentR = Math.floor(baseR * factor);
        const currentG = Math.floor(baseG * factor);
        const currentB = Math.floor(baseB * factor);

        square.style.backgroundColor = `rgb(${currentR}, ${currentG}, ${currentB})`;
      }
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  const userInput = prompt("Enter the number of squares per side (max. 100):");

  if (userInput === null) return; // Si el usuario cancela

  const size = parseInt(userInput, 10);

  if (Number.isInteger(size) && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

clearBtn.addEventListener("click", () => {
  createGrid(currentSize);
});

createGrid(16);