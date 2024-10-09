function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const form = document.querySelector("#controls");
const btnCreate = form.children[1];
const btnDestroy = form.children[2];
const input = form.children[0];

btnCreate.addEventListener('click', () => {
  const inputValue = Number(input.value);
  if (inputValue > 0 && inputValue <= 100) {
    destroyBoxes();
    createBoxes(inputValue);
  } else {
    window.alert("Please, write a number from 1 to 100");
  }
});
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const container = [];
  let boxSize = 0;
  for (let i = 0; i < amount; i++) {
    const color= getRandomHexColor();
    boxSize = 30+10*i;
    container.push(`<div class="box" id="${i}" style="width:${boxSize}px; height:${boxSize}px; background-color:${color}"></div>`);
  }
  boxes.insertAdjacentHTML("beforeend", container.join(""));
  input.value="";
}

function destroyBoxes() {
  boxes.innerHTML="";
  input.value="";
}
