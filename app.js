let dimensionOfGrid = 5;
let amountOfCells = dimensionOfGrid*dimensionOfGrid;
let colorToChangeTo = 'green';
let oneHunnet = 100; 
let originalBrightness = 'brightness(' + oneHunnet.toString() + '%)'; 
let randomColorIsOn = false;
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

function createCells() {
    for (i=0; i<amountOfCells; i++) {
        let shadePerCent = 0;
        let cell = document.createElement('div');
        cell.className = 'cellBlock';
        let strungCellID = 'cell' + i.toString();
        cell.id = strungCellID;
        let cellParent = document.getElementById('gridSquare');
        cell.style.backgroundColor = 'blue';
        cell.style.borderColor = 'blue';
        cellParent.appendChild(cell);
        cell.style.filter = originalBrightness;
        cell.addEventListener('mouseenter', e => { 
          if (randomColorIsOn == true) {
            e.target.style.backgroundColor = randomColor();
        } else if (itShouldShade == true) { 
          shadePerCent += 1; 
          e.target.style.filter = 'brightness(' + (oneHunnet - shadePerCent*10).toString() + '%)';  
        } 
        else if (randomColorIsOn == false) {
          e.target.style.backgroundColor = colorToChangeTo;
        } 
      });
        let strungTheDimOfGrid = dimensionOfGrid.toString();
        let strungDimOfGridAndTemplate = 'repeat(' + strungTheDimOfGrid + ', 1fr)';
        document.getElementById("gridSquare").style.gridTemplateColumns = strungDimOfGridAndTemplate;
        document.getElementById('gridSquare').style.gridAutoRows = strungDimOfGridAndTemplate;
       }
}
createCells();

let colorOfHoverBTN = document.getElementById('colorOfHoverBTN');
let changeDimOfGridBTN = document.getElementById('changeDimOfGridBTN');
let randomColorBTN = document.getElementById('randomColorBTN');
let changeCellBorderColor = document.getElementById('changeCellBorderColor');
let tenPercentShadeBTN = document.getElementById('tenPercentShadeBTN');
let clearGridBTN = document.getElementById('clearGridBTN');

randomColorBTN.addEventListener('click', () => {
  itShouldShade = false;
  randomColorIsOn = !randomColorIsOn;
});

colorOfHoverBTN.addEventListener('click', () => {
    let color = prompt("Please enter the color you'd like the sketch to make:", "black");
  if (color == null || color == "") {
    alert("Please try again and declare a color.");
  } else {
    randomColorIsOn = false;
    itShouldShade = false;
    colorToChangeTo = color;
  }
});

function removeCells() {
    let parenT = document.getElementById('gridSquare');
    while (parenT.firstChild) {
        parenT.removeChild(parenT.firstChild);
    }
}
function recreateCells(amountOfNewCells) {
  for (i=0; i<amountOfNewCells; i++) {
      let shadePerCent = 0;
      let cell = document.createElement('div');
      cell.className = 'cellBlock';
      let strungCellID = 'cell' + i.toString();
      cell.id = strungCellID;
      let cellParent = document.getElementById('gridSquare');
      cell.style.backgroundColor = 'blue';
      cell.style.borderColor = 'blue';
      cellParent.appendChild(cell);
      cell.addEventListener('mouseenter', e => { 
        if (randomColorIsOn == true) {
          e.target.style.backgroundColor = randomColor();
      } else if (itShouldShade == true) { 
        shadePerCent += 1; 
        e.target.style.filter = 'brightness(' + (oneHunnet - shadePerCent*10).toString() + '%)';//
      } else if (randomColorIsOn == false) {
        e.target.style.backgroundColor = colorToChangeTo;
      }
    });
  }
}


changeDimOfGridBTN.addEventListener('click', () => {
    let dim = prompt('Please enter how many squares you would like the dimension of the grid to be. Please enter a non-zero positive integer under 64 to ensure the page loads in a timely manner.', '10');
    if (dim > 64 || dim == 0 || isNaN(dim)) {
      alert('Please try again and enter a number less than 64.');
      } else {
        let dimensionOfGrid = dim;
        let amountOfNewCells = dimensionOfGrid*dimensionOfGrid;
        removeCells();
        recreateCells(amountOfNewCells);
        let strungTheNewDimOfGrid = dimensionOfGrid.toString();
        let strungNewDimOfGridAndTemplate = 'repeat(' + strungTheNewDimOfGrid + ', 1fr)';
        document.getElementById("gridSquare").style.gridTemplateColumns = strungNewDimOfGridAndTemplate;
        document.getElementById('gridSquare').style.gridAutoRows = strungNewDimOfGridAndTemplate;
 
    } 
});

changeCellBorderColor.addEventListener('click', ()=> {
  let colorToChangeBordersTo = prompt('Please enter a valid color you would like the border of the cells to be.', 'black');
  let cellBlocksToChangeBorderColor;
  cellBlocksToChangeBorderColor = document.getElementsByClassName('cellBlock');
  for (i = 0; i < cellBlocksToChangeBorderColor.length; i++) {
    cellBlocksToChangeBorderColor[i].style.border = '1px solid ' + colorToChangeBordersTo;
  }
});

let itShouldShade = false;

tenPercentShadeBTN.addEventListener('click', () => {
  randomColorIsOn = false;
  itShouldShade = !itShouldShade;
});



