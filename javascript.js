let container = document.querySelector('#container');

function createGrid() {
    for (let boxes = 0; boxes < (16*16); boxes ++) {
        let grid = document.createElement('div');
        container.appendChild(grid);
        grid.style.height = 50 + 'px';
        grid.style.width = 50 + 'px';
        grid.style.flexShrink = '0';
        grid.style.border = '1px solid blue';
    }
}
createGrid();