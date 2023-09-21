const Default_color = '#333333';
const Default_size = '16';
const Default_mode = 'color';
const Default_bgcolor = '#ffffff';

let picked_color = Default_color;
let picked_size = Default_size;
let picked_mod = Default_mode;
let picked_bgcolor = Default_bgcolor;

const colorbgPicker = document.getElementById('colorbgPicker');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const changebgBtn = document.getElementById('changebgBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const SizeValue = document.getElementById('sizeValue');
const SizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

function setNewBgColor(newbgColor){
    picked_bgcolor = newbgColor;

}
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
changebgBtn.onclick = () => changebgcolorGrid();
colorPicker.oninput = (e) => setNewColor(e.target.value);
colorbgPicker.oninput = (e) => setNewBgColor(e.target.value);
colorBtn.onclick = () => setNewMode('color');
rainbowBtn.onclick = () => setNewMode('rainbow');
eraserBtn.onclick = () => setNewMode('eraser');
clearBtn.onclick = () => reload();
SizeSlider.onmousemove = (e) => updateSize(e.target.value)
SizeSlider.onchange = (e) => newSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function newSize(value) {
    setNewSize(value);
    updateSize(value);
    reload();
}

function updateSize(value){
    SizeValue.innerHTML = `${value} x ${value}`;
}

function reload(){
    clearGrid();
    createGrid(picked_size, picked_bgcolor);
}
function clearGrid() {
    grid.innerHTML = '';
}
function changebgcolorGrid(){
    reload();
}

function createGrid(size, color) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for(let i = 0; i < size * size; i++){
            const gridMap = document.createElement('div');
            gridMap.classList.add('newgrid');
            gridMap.style.backgroundColor = `${color}`;
            gridMap.addEventListener('mouseover', changeColor);
            gridMap.addEventListener('mousedown', changeColor);
            grid.appendChild(gridMap);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (picked_mod === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (picked_mod === 'color') {
      e.target.style.backgroundColor = picked_color;
    } else if (picked_mod === 'eraser') {
        e.target.style.backgroundColor = '#fefefe';
    }
}

function changemode(newMode){
    if(picked_mod === 'rainbow'){
        rainbowBtn.classList.remove('active');
    }
    else if(picked_mod === 'color'){
        colorBtn.classList.remove('active');
    }
    else if(picked_mod === 'eraser'){
        eraserBtn.classList.remove('active');
    }

    if(newMode === 'rainbow'){
        rainbowBtn.classList.add('active');
    }
    else if(newMode === 'color'){
        colorBtn.classList.add('active');
    }
    else if(newMode === 'eraser'){
        eraserBtn.classList.add('active');
    }
}
window.onload = () => {
    createGrid(Default_size, Default_bgcolor);
    changemode(Default_mode);
  }