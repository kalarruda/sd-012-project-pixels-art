window.onload = function () {
//5
const pixelBoard = document.getElementById('pixel-board');
nPixels = 5;

for (let i = 0; i < nPixels; i += 1) {
  const pixelLines = document.createElement('div');
  pixelLines.classList.add('pixel-line');
  pixelBoard.appendChild(pixelLines);
  const eachPixel = document.createElement('div');
  eachPixel.classList.add('pixel');
  pixelLines.appendChild(eachPixel);
  for (let i2 = 1; i2 < nPixels; i2 += 1) {
    const eachPixel = document.createElement('div');
    eachPixel.classList.add('pixel');
    pixelLines.appendChild(eachPixel);
  }
}
//6
const colors = document.querySelectorAll('.color');
const black = colors[0];
const color2 = colors[1];
const color3 = colors[2];
const color4 = colors[3];
black.classList.add('selected');

//7 
function getColor(event) {
  const currentSelectedColor = document.querySelector('.color.selected');
  currentSelectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', getColor);
color2.addEventListener('click', getColor);
color3.addEventListener('click', getColor);
color4.addEventListener('click', getColor);

//8 
function putColor(event) {
  const selectedColor = document.querySelector('.selected');
  const colorOfSelectedColor = window.getComputedStyle(selectedColor); //MDN Web DOcs utilizado.
  event.target.style.backgroundColor = colorOfSelectedColor.getPropertyValue('background-color');
}

const clickedPixel = document.querySelectorAll('.pixel');
for (let i = 0; i < clickedPixel.length; i += 1) {
  clickedPixel[i].addEventListener('click', putColor);
}

//9 
const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
document.body.insertBefore(clearButton, pixelBoard);
clearButton.innerText = 'Limpar desenho';
clearButton.style.margin = '10px';
clearButton.style.padding = '5px';

function cleanBoard() {
  for (let i = 0; i < clickedPixel.length; i += 1) {
    clickedPixel[i].style.backgroundColor = 'white';
  } 
}
clearButton.addEventListener('click', cleanBoard);
}