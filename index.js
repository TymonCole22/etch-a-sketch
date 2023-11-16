const container = document.querySelector(".container");
const rows = document.querySelectorAll(".row");

function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(numRow, numCell) {
    // create num of grid rows
    for(let i = 0; i < numRow; i++) {
        const row = document.createElement("div");
        container.appendChild(row).classList.add("row");
        
        // create num of grid columns
        for(let j = 0; j < numCell; j++) {
            const cell = document.createElement("div");
            row.appendChild(cell).classList.add("cell");

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = randomColor();
            });
        }
    }
}

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const button = document.querySelector("button");
button.addEventListener('click', () => {
    let num = prompt("Enter a number of grid squares below 100");

    if(num < 100) {
        clearGrid();
        createGrid(num, num);
    }
});

console.log(randomColor);