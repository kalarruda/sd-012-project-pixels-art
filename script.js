let boardSize = 5;

createBoard(boardSize);

function createBoard (boardSize) {

    for (let index = 0; index < boardSize; index += 1) {
        let line = document.createElement('div');
        line.className = 'line';
        document.querySelector('#pixel-board').appendChild(line);
    
    
        for (let index2 = 0; index2 < boardSize; index2 += 1) {
            
        let box = document.createElement('div');
        box.className = 'pixel';
        line.appendChild(box); 
        }        
    }
}

