function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const container = document.querySelector("#boxes");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const inputNumber = document.querySelector(".input-number");

createButton.addEventListener("click", createDiv);
destroyButton.addEventListener("click", destroyBoxes);
function createDiv() {
  if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    return createBoxes(inputNumber.value);
  }
}

function createBoxes(amount) {
  container.innerHTML = "";
  let width = 30;
  let height = 30;
  let boxesCode = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;

    boxesCode += `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`;
    width += 10;
    height += 10;
  }
  container.innerHTML = boxesCode;
  inputNumber.value = "";
}

function destroyBoxes() {
  container.innerHTML = "";
  inputNumber.value = "";
}
