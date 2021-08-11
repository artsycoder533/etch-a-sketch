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

// add event listener for fade to black
changeColor.addEventListener('click', function () {
    eraseGrid();
	// select all divs inside the container
    const childDivs = container.children;
    // for each div, get the backround color
	for (const node of childDivs) {
		node.addEventListener("mouseenter", function () {
			// get current style
			const style = getComputedStyle(node);
			const backgroundColor = style.backgroundColor;
			// if div's background color is white, call get random
			if (backgroundColor === "rgb(255, 255, 255)") {
				const color = getRandomRGB();
				node.style.backgroundColor = color;
			}
			// if not white call fadeToBlack
            else {
                const darkerColor = fadeToBlack(backgroundColor);
                // set background color to darker color
				node.style.backgroundColor = darkerColor;
			}
		});
	}
});

// add event listener for rainbox
rainbowBtn.addEventListener('click', function () {
    rainbow();
})

// change color of squares
function rainbow() {
    eraseGrid();
    // select all divs inside the container
    const childDivs = container.children;
    // for every div, set its background color to a random rgb color
    for(const node of childDivs){
        node.addEventListener('mouseenter', function () {
            // get current style
            const style = getComputedStyle(node);
            const backgroundColor = style.backgroundColor;
            const color = getRandomRGB();
            node.style.backgroundColor = color;
        });
    }
}

// function rainbow() {
// 	eraseGrid();
// 	// for each div inside container
// 	const childDivs = container.children;
// 	for (const node of childDivs) {
// 		node.addEventListener("mouseenter", function () {
// 			// get current style
// 			const style = getComputedStyle(node);
// 			const backgroundColor = style.backgroundColor;
// 			// if div's background color is white, call get random
// 			if (backgroundColor === "rgb(255, 255, 255)") {
// 				const color = getRandomRGB();
// 				node.style.backgroundColor = color;
// 			}
// 			// if not call fadeToBlack
// 			else {
// 				const darkerColor = fadeToBlack(backgroundColor);
// 				node.style.backgroundColor = darkerColor;
// 			}
// 		});
// 	}
// }

// get random color, return formatted rgb
function getRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// darken div by 10% with each pass through
function fadeToBlack(color) {
    // extract just color values from string (trim off "rgb(" and ending ")" )
    const rgbString = color.substring(4, color.length - 1);
    // turn rbgString into an array, split at comma
    const colorArray = rgbString.split(",");
    // pass array to returnColor to format back into rgb syntax
    const newColor = returnColor(colorArray);
    return newColor;
}

// return formatted rgb color
function returnColor(arr) {
    // subtract 10% of each individual rgb color value
    const r = Math.floor(parseInt(arr[0]) - 0.1 * (parseInt(arr[0])));
    const g = Math.floor(parseInt(arr[1]) - 0.1 * parseInt(arr[1]));
    const b = Math.floor(parseInt(arr[2]) - 0.1 * parseInt(arr[2]));
    // return the new color
    return `rgb(${r}, ${g}, ${b})`;
}






