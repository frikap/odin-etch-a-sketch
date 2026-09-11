const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");
const clearBtn = document.querySelector("#clear-btn");
const modeBtn = document.querySelector("#mode-btn");
const darkenBtn = document.querySelector("#darken-btn");

let currentSize = 16;
let currentMode = "rainbow"; 
let isDarkening = true;

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

function createGrid(squaresPerSide) {
  container.innerHTML = "";
  currentSize = squaresPerSide;
  
  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

  const totalSquares = squaresPerSide * squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.dataset.passes = "0";

    square.addEventListener("mouseenter", () => {
      if (currentMode === "black") {
        square.style.backgroundColor = "rgb(0, 0, 0)";
        return;
      }

      if (!isDarkening) {
        const { r, g, b } = getRandomRgb();
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        return;
      }

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

modeBtn.addEventListener("click", () => {
  if (currentMode === "rainbow") {
    currentMode = "black";
    modeBtn.textContent = "Mode: Black";
    darkenBtn.disabled = true;
    darkenBtn.textContent = `Darkening: ON`
  } else {
    currentMode = "rainbow";
    modeBtn.textContent = "Mode: Rainbow";
    darkenBtn.disabled = false;
  }
});

darkenBtn.addEventListener("click", () => {
  isDarkening = !isDarkening;
  darkenBtn.textContent = `Darkening: ${isDarkening ? "ON" : "OFF"}`;
});

resizeBtn.addEventListener("click", () => {
  const userInput = prompt("Enter the number of squares per side (max. 100):");

  if (userInput === null) return;

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