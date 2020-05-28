
function createGrid() {
    let size = Number(prompt('How many boxes wide and long?', 16));
    let dimensions = 960 / size;
    let boxes = size * size;

    //change grid dimensions to given sizes
    let grid = document.getElementById('container');
    grid.style.gridTemplateColumns = `repeat(${size}, ${dimensions}px`;
    grid.style.gridTemplateRows = `repeat(${size}, ${dimensions}px`;
    
    // remove all old boxes from grid
    while(grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    //fill grid with new boxes
    for (i = 0; i < boxes; i++){
        let block = document.createElement('div');
        block.classList.add('block');
        block.addEventListener('mouseenter', () => {
            block.classList.add('hovered');
        });
        grid.appendChild(block);

    };

};

let button = document.getElementById('reset');
button.addEventListener('click', () =>{
    createGrid();
});

