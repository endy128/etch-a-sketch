const container = document.querySelector('.container');
const numOfSquares = 0;

function drawBoxes(numOfSquares) {
    for (let i = 0; i < numOfSquares; i++) {
        const newBox = document.createElement('div');
        // newBox.setAttribute('style', 'background-color: pink;');
        newBox.classList.add('pixel');
        container.appendChild(newBox);
    }
}

drawBoxes(576);


const pixels = Array.from(document.querySelectorAll('.pixel'));
pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
    pixel.classList.add('activated');
    // pixel.setAttribute('style', 'background-color: black;');
}));

