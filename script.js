'use strict';

const colorCode = document.querySelector('.text--code');
const btn = document.querySelector('.buttonClass');
const background = document.querySelector('.text--background');

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', function () {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }
  colorCode.textContent = hexColor;
  colorCode.classList.remove('hidden');
  document.body.style.backgroundColor = hexColor;
  background.textContent = 'Background Code : ';
});

function randomNumber() {
  const number = Math.trunc(Math.random() * hex.length);
  return number;
}
console.log(randomNumber());
