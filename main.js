const Default_color = '#fff';
const Default_size = '16';
const Default_mode = 'color';

let picked_color = Default_color;
let picked_size = Default_size;
let picked_mod = Default_mode;


const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const SizeValue = document.getElementById('sizeValue');
const SizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

function setNewColor(newColor){
    picked_color = newColor;
}
function setNewSize(newSize) {
    picked_size = newSize;
}
function setNewMode(newMode) {
    changemode(newMode);
    picked_mod = newMode;
}





function clearGrid() {
    grid.innerHTML = '';
}

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for(let i = 0; i < size * size; i++){
            const gridMap = document.createElement('div');
            gridMap.classList.add('newgrid');
            gridMap.addEventListener('mouseover', changeColor);
            gridMap.addEventListener('mousedown', changeColor);
            grid.appendChild(gridMap);
    }
}

function changemode(){
    if(picked_mod === 'rainbow'){
        rainbowBtn.classList.remove('active');
    }
    else if(picked_mod === 'color'){
        colorBtn.classList.remove('active');
    }
    else if(picked_mod === 'eraser'){
        eraserBtn.classList.remove('active');
    }

    if(picked_mod === 'rainbow'){
        rainbowBtn.classList.add('active');
    }
    else if(picked_mod === 'color'){
        colorBtn.classList.add('active');
    }
    else if(picked_mod === 'eraser'){
        eraserBtn.classList.add('active');
    }
}