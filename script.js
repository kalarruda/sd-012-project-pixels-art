/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */

const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'blue';
  colors[3].style.backgroundColor = 'darkgreen';
}

function selectColor() {
  const getColors = document.getElementsByClassName('color');

  for (let index = 0; index < getColors.length; index += 1) {
    getColors[index].addEventListener('click', () => {
      if (getColors[index] === getColors[0]) {
        getColors[0].classList.add('selected');
        getColors[1].classList.remove('selected');
        getColors[2].classList.remove('selected');
        getColors[3].classList.remove('selected');
      } else if (getColors[index] === getColors[1]) {
        getColors[1].classList.add('selected');
        getColors[0].classList.remove('selected');
        getColors[2].classList.remove('selected');
        getColors[3].classList.remove('selected');
      } else if (getColors[index] === getColors[2]) {
        getColors[2].classList.add('selected');
        getColors[0].classList.remove('selected');
        getColors[1].classList.remove('selected');
        getColors[3].classList.remove('selected');
      } else if (getColors[index] === getColors[3]) {
        getColors[3].classList.add('selected');
        getColors[0].classList.remove('selected');
        getColors[1].classList.remove('selected');
        getColors[2].classList.remove('selected');
      }
    });
  }
}

selectColor();

function changeColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let indexColor = 0; indexColor < colors.length; indexColor += 1) {
    for (let indexPixels = 0; indexPixels < pixels.length; indexPixels += 1) {
      pixels[indexPixels].addEventListener('click', function () {
        if (colors[indexColor].className === 'color selected') {
          pixels[indexPixels].style.backgroundColor = colors[indexColor].style.backgroundColor;
        }
      });
    }
  }
}

changeColor();
