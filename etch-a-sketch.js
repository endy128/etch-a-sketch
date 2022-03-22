const container = document.querySelector('.container');
const numOfSquares = 0;

function drawBoxes(numOfSquares, width) {
    for (let i = 0; i < numOfSquares; i++) {
        const newBox = document.createElement('div');
        newBox.style.width =  `${width}px`;
        newBox.style.height = `${width}px`;
        newBox.classList.add('pixel');
        container.appendChild(newBox);
    }
}


function addHoverListener() {
    const pixels = Array.from(document.querySelectorAll('.pixel'));
    pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
        pixel.classList.add('activated');  // change the class of the pixel to change the bg color
        // pixel.setAttribute('style', 'background-color: black;');
    }));
}



const button = document.querySelector('.reset-button');
button.addEventListener('click', () => {
    const pixels = Array.from(document.querySelectorAll('.pixel'));
    pixels.forEach(pixel => pixel.classList.remove('activated'));
    let numBoxes = window.prompt('Please enter the number of squares per side: ', '26');
    if (numBoxes > 100) {
        numBoxes = 100;
    }
    deleteBoxes(container);
    drawBoxes((numBoxes * numBoxes), (624 / numBoxes));
    addHoverListener();
});


function deleteBoxes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


drawBoxes(676, 24);
addHoverListener();

