paletaDeCores();
quadroBranco();

function paletaDeCores (){
const paletaCores = document.getElementsByClassName('color');

paletaCores[0].style.backgroundColor = 'black';
paletaCores[1].style.backgroundColor = 'yellow';
paletaCores[2].style.backgroundColor = '#ff9933';
paletaCores[3].style.backgroundColor = '#009933';
}

function quadroBranco (){
   
    let colunas = 5;
    let linhas = 5;

    for (let index = 0; index < linhas; index += 1){
        const divQuadroBranco = document.getElementById('pixel-board');
        const criarDiv = document.createElement('div');

        criarDiv.className = ('pixel-line');
        divQuadroBranco.appendChild(criarDiv);
        
        for (let indice = 0; indice < colunas; indice += 1){
            const divPixelLine = document. querySelector('#pixel-board').lastElementChild;

            const criarDivPixel = document.createElement('div');

            criarDivPixel.className = ('pixel');
            divPixelLine.appendChild(criarDivPixel);
        }
    }
    
}