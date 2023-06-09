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
    let grid = document.querySelector(".grid");
    for(let i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.add("column");
        for(let j = 0; j < size; j++) {
            let row = document.createElement('div');
            row.classList.add("row");
            column.appendChild(row);
        }  
        grid.appendChild(column);
    }
    addEventListeners();
}

function changeSize() {
    let size = document.querySelector(".input-number");
    size = size.value;
    generateGrid(size);
}

function changeColor () {
    let color = document.querySelector(".input-color");
    color = color.value;
    this.style.backgroundColor = color;
}

function addEventListeners() {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) =>
        row.addEventListener("mouseover", changeColor)
        );
}
addEventListeners("onload", generateGrid());

function randomColor() {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => 
        row.addEventListener("mouseover", function() {
            let color = Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = '#' + color;
        })
        );
}
