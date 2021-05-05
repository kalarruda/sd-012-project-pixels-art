window.onload = function () {
    let colorsList = [
        'black',
        'blue',
        'yellow',
        'pink'
      ];
    let pixelsColor = document.querySelectorAll('.color');

    setInitialColors();
    changeSelectedColor();

    function setInitialColors() {    
        for (index = 0; index < pixelsColor.length; index += 1) {
            pixelsColor[index].style.backgroundColor = colorsList[index];
            if(colorsList[index] === 'black'){
                pixelsColor[index].className += ' selected';
            };
        };
      };
    
      function changeSelectedColor(){
        for (index = 0; index < pixelsColor.length; index += 1) {
            let currentDiv = pixelsColor[index];
            currentDiv.addEventListener('click', nowSelected);
        };
      }

      function nowSelected(e){
        for (index = 0; index < pixelsColor.length; index += 1) {
           let currentDiv = pixelsColor[index];
           currentDiv.className = 'color';
        };

          e.target.className = 'color selected';
      };
    
};

