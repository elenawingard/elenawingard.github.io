//change the placement of the buttons


let currentNumber = null;


function spinWheel () {
   const spinButton = document.querySelector('.spin');
   if (!spinButton.disabled) {
   spinButton.disabled = true;

    const randomDegree = Math.floor(Math.random() * 360);
    const finalRotation = 360 * 5 + randomDegree;
    const numbers = document.getElementById('numbers');
    // numbers.style.animation = `spin 5s ease-out 1 `;
    // numbers.style.transform = `rotate(${finalRotation}deg)`;

// restart the spin when button is pressed
// when pressed { numbers.style.animation = `spin 5s ease-out 1 `;}
// when pressed { numbers.style.transform = `rotate(${finalRotation}deg)`};

    currentNumber = Math.floor((finalRotation % 360) / 36);

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerText = `Selected Number: ${currentNumber}`;


   }
}


function saveNumber () {
    if (currentNumber !== null) {
        const numberSlots = document.querySelectorAll('.number-slot');
        for (const slot of numberSlots) {
            if (slot.innerText === '') {
                slot.innerText = currentNumber;
                break;
            }
        }
        document.querySelector('.spin').disabled = false;
       
    }
}


// need to make the wheel spin after each time the spin button is pressed
// maybe like reset the spin or something

//function reset () {
