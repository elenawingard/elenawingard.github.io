// other idea: every time someone tries to type a number x, have it return x + 1, etc.




const wheel = document.getElementById('wheel');
const numberTable = document.getElementById('numberTable');
const row = document.getElementById('row');

function spinWheel() {
    const rotation = Math.floor(Math.random()*360);
    wheel.style.transform = `rotate(${rotation}deg)`;
    
    // make the wheel stop and then reset
    setTimeout(() => {
        wheel.style.transform = 'rotate(0deg)';
    }, 5000);

    // randomize the number each time it is returned
    const randomNumber = Math.floor(Math.random()* 100);
    const emptyCell = Array.from(row.children).find(cell => cell.innerHTML === '');
        if (emptyCell) {
        emptyCell.innerHTML = randomNumber;
        }

// fast for 2 secs, slower for 1.5 secs, then it slows down...
// ... til it stops and reveals the number
}


function saveNumber() {
    // want the numbers to be saved from left to right
    const randomNumber = Math.floor(Math.random()*100);
    const emptyCell = Array.from(row.children).find(cell => cell.innerHTML ==='');
        if (emptyCell) {
            emptyCell.innerHTML = randomNumber;
        }
}

