//adiciona cores à paleta.
let arrayColor = ['black', 'red', 'yellow', 'purple'];
for (let index = 0; index < 4; index += 1) {
  document.getElementsByClassName("color")[index].style.backgroundColor = arrayColor[index];
}

//cria tabela pixel board.
let pixelBoard = document.getElementById("pixel-board");
let createTable = document.createElement('table');
for (let i = 0; i < 5; i += 1) {
  let createRow = createTable.insertRow(0);
  for (let j = 0; j < 5; j += 1) {
    let createCell = createRow.insertCell(j);
  }
  createRow = '';
  createCell = '';
}
pixelBoard.appendChild(createTable);

//configura a tabela da pixel board.
let table = document.getElementsByTagName('table');
let td = document.getElementsByTagName('td');
table[0].style.width = 600 + "px";
table[0].style.height = 600 + "px";
for (i = 0; i < 25; i += 1) {
  td[i].style.border = 1 + 'px' + ' ' + 'solid' + ' ' + 'black';
  td[i].style.backgroundColor = "white";
  td[i].classList.add('pixel');
}
