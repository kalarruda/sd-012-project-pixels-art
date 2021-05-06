const colors = ['black', 'red', 'blue', 'green'];

function makePalette(arrayColor) {
  for (let index = 0; index < arrayColor.length; index += 1) {
    const divPalette = document.getElementById('color-palette');
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = arrayColor[index];
    divPalette.appendChild(divColor);
  }
}
makePalette(colors);

function makerBoardPixel(size) {
  for (let index = 0; index < size; index += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'pixel-line';
    for (let index2 = 0; index2 < size; index2 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.appendChild(divPixel);
    }
    const divBoard = document.querySelector('section');
    divBoard.appendChild(divLine);
  }
}
makerBoardPixel(5);

function selectFirstColor () {
const firstColor = document.querySelector('#color-palette').firstChild;
firstColor.classList.add('selected');
}
selectFirstColor();

// Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
const colorPalette = document.querySelector('#color-palette');
// adicionar uma escuta na div color-palette
colorPalette.addEventListener('click', (event) => {
  // criar condição de click, só pode receber a classe selected se já tiver a classe color
  if (event.target.className === 'color') {
    // buscar elemento pela classe selected
    const selectedColor = document.querySelector('.selected')
    // remover a classe do elemento
    selectedColor.classList.remove('selected')
    // identificar com o target de onde veio o click
    // atribuir a classe selected a cor que cliquei
    event.target.classList.add('selected')
  }
})
