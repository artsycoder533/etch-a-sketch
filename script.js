const container = document.querySelector('.container');
const changeGrid = document.querySelector('.change-grid');
const changeColor = document.querySelector('.change-color');
const rainbowBtn = document.querySelector(".rainbow");
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
            node.style.backgroundColor = "rgb(255, 255, 255)";
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
        div.classList.add("child");
        container.appendChild(div);
        div.addEventListener('mouseenter', function () {
            // change background color to black
            // div.style.backgroundColor = "rgb(0, 0, 0)";
            div.classList.add("draw");
        });
        
    }   
}

// add event listener for change color
changeColor.addEventListener('click', rainbow);

// change color of squares
function rainbow() {
    eraseGrid();
    // for each div inside container
    const childDivs = container.children;
    for(const node of childDivs){
        node.addEventListener('mouseenter', function () {
            // get current style
            const style = getComputedStyle(node);
            const backgroundColor = style.backgroundColor;
            // if div's background color is white, call get random
            if (backgroundColor === "rgb(255, 255, 255)"){
                const color = getRandomRGB();
                node.style.backgroundColor = color;
            }
            // if not call fadeToBlack
            else {
                const darkerColor = fadeToBlack(backgroundColor);
                node.style.backgroundColor = darkerColor;
            }
            
            
            // if square already has a background color
            // lower each color by 10%?
        });
    }
}

// get random rgb color
function getRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// darken div by 10%
function fadeToBlack(color) {
    // extract each rgb color from the string
    // trim color to remove white space
    console.log("original color: " + color);
    const rgbString = color.substring(4, color.length - 1);
    // turn rbgString into an array
    const colorArray = rgbString.split(",");
    const r = Math.floor(parseInt(colorArray[0]) - 0.1 * (parseInt(colorArray[0])));
    console.log(r);
    const g = Math.floor(parseInt(colorArray[1]) - 0.1 * parseInt(colorArray[1]));
    console.log(g);
    const b = Math.floor(parseInt(colorArray[2]) - 0.1 * parseInt(colorArray[2]));
    console.log(b);
    console.log(` darker color: rgb(${r}, ${g}, ${b})`);
    return `rgb(${r}, ${g}, ${b})`;
}








