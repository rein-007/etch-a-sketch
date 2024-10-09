const buttons = document.querySelector('.buttons');
const clearButton = document.querySelector('.clear-button');
const gridButton = document.querySelector('.grid-button');
const container = document.querySelector('.container');
const sizes = 30;
let grid = 16;
var tempColor = 'red';

createDiv(grid, grid);

clearButton.addEventListener('click', () => {
    clearContent();
    createDiv(grid, grid);
});

gridClick();

gridButton.addEventListener('mouseout', () => {
    gridButton.textContent = 'CLICK ME!';
});

gridButton.addEventListener('mouseover', () => {
    gridButton.textContent = 'CLICK NOW!';
});

function gridClick() {
    gridButton.addEventListener('click', () => {
        grid = prompt('Enter number of squares per side: ', 16);
        if (grid>100) {
            alert('Number must not exceed 100.');
            gridClick();
        }
        if (isNaN(grid)) {
            grid = 16;
        }
        grid =  parseInt(grid);
        buttons.style.width = ((grid * sizes) + (grid * 2) - (grid / 3)) + 'px';
        createDiv(grid, grid);
    });
}

function clearContent() {
    while(container.firstChild) { 
        container.removeChild(container.firstChild); 
    }
    opac = 1;
}    

function createDiv(row, col) {
    clearContent();
    container.style.setProperty('grid-row', row);
    container.style.setProperty('grid-column', col);
    for (c = 0; c < (row * col); c++) {
        let cell = document.createElement("div");
        cell.style.height = sizes + 'px';
        cell.style.width = sizes + 'px';
        container.style.width = ((row * sizes) + (row * 2) - (row / 3)) + 'px';
        container.appendChild(cell).className = "item";
    }

    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.background = randomRGB();
            item.style.borderColor = item.style.background;
        });

        item.addEventListener('mousedown', () => {
            item.style.background = 'white';
        });

        item.addEventListener('mouseup', () => {
            item.style.background = 'white';
        });
    });
}

function randomNum() {
    return Math.floor(Math.random() * 256);
}
  
function randomRGB() {
    var red = randomNum();
    var green = randomNum();
    var blue = randomNum();
    var opac = 1;
    opac+='10%';
    tempColor = "rgb(" + red + ", " + green + ", " + blue + ", " + opac + ")";
    return tempColor;
}