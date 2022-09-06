let container = document.getElementById('gridSpace');
const num = document.querySelector('#num');
const clear = document.querySelector('#clear');
var slider = document.querySelector('#range');
makeGrid(10);

function color(){
        this.setAttribute("style","background-color: black");
}

function pixels(){
    let boxes = container.querySelectorAll('div')
    boxes.forEach(boxes => boxes.remove());
    makeGrid(slider.value);
}

function makeGrid(val) {
    let area = val * val;
      for (i=0; i<area; i++){
        let space = document.createElement("div");
        space.classList.add('square');
        document.getElementById('gridSpace').appendChild(space);
        container.style.gridTemplateColumns = `repeat(${val},1fr)`
        container.style.gridTemplateRows = `repeat(${val},1fr)`
        }
        const changed = container.querySelectorAll('div');
        changed.forEach(changed => changed.addEventListener('mouseover',color));
        changed.forEach(changed => changed.addEventListener('touchmove',color));
        };

function cleargrid(){
    let boxes = container.querySelectorAll('div');
    boxes.forEach(boxes => boxes.removeAttribute('style',"background-color"))
}        

slider.addEventListener('mouseup', pixels);
clear.addEventListener('click', cleargrid);