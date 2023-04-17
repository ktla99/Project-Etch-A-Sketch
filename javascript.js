//Restart Etch-A-Sketch by removing everything
function clearGrid() {
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
}

function generateGrid(size = 16) {
    clearGrid();
    if (size > 100) {
        alert("Please only put in numbers between 0-100!")
    }
    