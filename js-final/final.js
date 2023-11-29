// other idea: every time someone tries to type a number x, have it return x + 1, etc.

// or do "pick a random box"


const wheel = document.getElementById('wheel');
const ticker = document.getElementById('ticker');
const spinButton = document.getElementById('spin');
const saveButton = document.getElementById('save');
const numbersContainer = document.getElementById('numbers-container');

let spinning = false;

    spinButton.addEventListener('click', spinWheel);
    saveButton.addEventListener('click', saveNumber);

    function spinWheel() {
        if (!spinning) {
            spinning = true;
        const spinDuration = Math.random() * 2 + 3;

        wheel.style.transition = `transform ${spinDuration}s ease-out`;
        ticker.style.transition = `transform ${spinDuration}s ease-out`;
        
        // rotate wheel
        const randomRotation = Math.floor(Math.random() * 360);
        wheel.style.transform = `rotate(${randomRotation}deg)`;
        ticker.style.transform = `rotate(-${randomRotation}deg)`;

        // clear the previous number
        numbersContainer.innerHTML = '';

        // wait for spin to finish
        setTimeout(() => {
            spinning = false;
            wheel.style.transition = 'none';
            ticker.style.transition = 'none';
            updateNumbers(randomRotation);
        }, spinDuration * 1000);
    }
 }

 function saveNumber() {
    const result = document.createElement('div');
    result.classList.add('number-slot');
    result.textContent = getCurrentNumber();
    numbersContainer.appendChild(result);
 }

 function getCurrentNumber() {
    const rotation = getWheelRotation();
    const numberOfSlots = 10;
    const anglePerSlot = 360/numberOfSlots;
    const currentNumber = Math.floor((rotation % 360) / anglePerSlot);
    
    return currentNumber;
 }

function updateNumbers(rotation) {
    const currentNumber = getCurrentNumber();
    const centerNumber = document.createElement('div');
    centerNumber.classList.add('number-slot');
    centerNumber.textContent = currentNumber;
    numbersContainer.appendChild(centerNumber);

    for (let i=0; i<9; i++){
        const number = document.createElement('div');
        number.classList.add('number-slot');
        number.textContent = (currentNumber + i + 1) % 10;
        numbersContainer.appendChild(number);
    }
}

function getWheelRotation() {
    const matrix = window.getComputedStyle(wheel).transform;
    const matrixValues = matrix.match(/matrix\(([^\)]+)\)/)[1].split(',');
    const angle = Math.atan2(matrixValues[1],matrixValues[0])*(180/Math.PI);
    return angle < 0 ? angle + 360 : angle;
}