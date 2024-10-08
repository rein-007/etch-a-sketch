const container = document.querySelector('.container');
const sizes = 30;
const grid = prompt('Number of squares: ');

createDiv(grid, grid);

const items = document.querySelectorAll('.item');
items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.background = 'red';
    });

    item.addEventListener('mousedown', () => {
        item.style.background = 'white';
    });

    item.addEventListener('mouseup', () => {
        item.style.background = 'white';
    });
});

function createDiv(row, col) {
    container.style.setProperty('grid-row', row);
    container.style.setProperty('grid-column', col);
    for (c = 0; c < (row * col); c++) {
        let cell = document.createElement("div");
        cell.style.height = sizes + 'px';
        cell.style.width = sizes + 'px';
        container.style.width = ((row * sizes) + (row * 2) - (row / 3)) + 'px';
        container.appendChild(cell).className = "item";
    }
}