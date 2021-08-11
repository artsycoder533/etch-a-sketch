const container = document.querySelector('.container');
const changeGrid = document.querySelector('.change-grid');
const changeColor = document.querySelector('.change-color');
const btnErase = document.querySelector('.erase');


// add onload event
window.addEventListener('DOMContentLoaded', function () {
    createDivs(16, 16);
});

// add event listener for change grid 
changeGrid.addEventListener("click", function () {
    const dimension = prompt("how many squares per side? Choose a number between 1 & 99");
    while ((dimension > 100) && (dimension <= 0)) {
        prompt("Please choose an integer less than 100");
    }
    eraseGrid();
    createDivs(dimension, dimension);
});

// add event listener for erase
btnErase.addEventListener("click", eraseGrid);

function eraseGrid() {
    const clearGrid = container.children;
			for (const node of clearGrid) {
				if (node.classList.contains("draw")) {
					node.classList.add("erase");
				}
			}
}

//create divs
function createDivs(rows, cols) {
    //remove all children of container to get rid of lines at the bottom
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${cols}, 1fr)`;
    //loop through to create rows*columns number of divs
    for (let i = 0; i < rows * cols; i++){
        const div = document.createElement('DIV');
        div.addEventListener('mouseenter', draw);
        div.classList.add('child');
        container.appendChild(div);
    }   
}

function draw() {
    this.classList.add('draw');
}

// add event listener for change color
changeColor.addEventListener('click', rainbow);

// change color of squares
function rainbow() {
    // for each div inside container
    const childDivs = container.children;
    for(const node of childDivs){
        node.addEventListener('mouseenter', function () {
            const color = getRandomRGB();
            console.log(color);
            node.style.backgroundColor = color;
        });
    }
}

// get random rgb color
function getRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue}`;
}










