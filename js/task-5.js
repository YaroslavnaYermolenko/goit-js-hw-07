const body = document.querySelector("body");
const button = document.querySelector('.change-color');
const text = document.querySelector(".color");
button.addEventListener('click', ()=>{
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
