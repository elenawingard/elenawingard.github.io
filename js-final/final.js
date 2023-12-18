let currentNumber = null;

function spinWheel() {
    const spinButton = document.querySelector('.spin');
    if (!spinButton.disabled) {
        spinButton.disabled = true;

        const randomDegree = Math.floor(Math.random() * 360);
        const finalRotation = 360 * 2 + randomDegree; 
        const numbers = document.getElementById('numbers');
 
        currentNumber = Math.floor((finalRotation % 360) / 36);

        const resultContainer = document.getElementById('result-container');
        resultContainer.innerText = `Selected Number: ${currentNumber}`;

        numbers.style.transition = 'transform 2s ease-out';
        numbers.style.transform = `rotate(${finalRotation}deg)`;
        
        setTimeout(() => {
            numbers.style.transition = 'none';
            numbers.style.transform = `rotate(${finalRotation}deg)`;
            document.querySelector('.spin').disabled = false;
        }, 2000);
    }
}

function saveNumber() {
    if (currentNumber !== null) {
        const numberSlots = document.querySelectorAll('.number-slot');
        for (const slot of numberSlots) {
            if (slot.innerText === '') {
                slot.innerText = currentNumber;
                break;
            }
        }
    }
}

function submit() {
    alert('Thank you for providing your phone number!');
}
