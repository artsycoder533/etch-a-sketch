let container = document.querySelector('.container');
const btn = document.querySelector('.populate');
const btnErase = document.querySelector('.erase');

btn.addEventListener("click", function () {
    const dimension = prompt("how many squares per side?");
    while ((dimension > 100) && (dimension <= 0)) {
        prompt("Please choose an integer less than 100");
    }
        createDivs(dimension, dimension);
});

btnErase.addEventListener("click", function () {
    const erase = container.childNodes;
    for (const node of erase) {
        node.classList.remove('draw');
    }
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










