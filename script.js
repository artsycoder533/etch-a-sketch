let container = document.querySelector('.container');
const changeGrid = document.querySelector('.change-grid');
const btnErase = document.querySelector('.erase');


// add onload event
window.addEventListener('DOMContentLoaded', function () {
    createDivs(16, 16);
});

changeGrid.addEventListener("click", function () {
    const dimension = prompt("how many squares per side? Choose a number between 1 & 99");
    while ((dimension > 100) && (dimension <= 0)) {
        prompt("Please choose an integer less than 100");
    }
        createDivs(dimension, dimension);
});

btnErase.addEventListener("click", function () {
    const erase = container.childNodes;
    erase.style.backgroundColor = "white";
})

//create divs
function createDivs(rows, cols) {
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










