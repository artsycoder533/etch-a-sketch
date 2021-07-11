const container = document.querySelector('.container');


function createGrid(rows, col) {
    for (let i = 0; i < rows * col; i++){
        let div = document.createElement('DIV');
        div.style.borderColor = 'black';
        div.style.borderWidth = '1px';
        container.appendChild(div);
    }
}

createGrid(16, 16);