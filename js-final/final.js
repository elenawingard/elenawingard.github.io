// other idea: every time someone tries to type a number x, have it return x + 1, etc.


// maybe search up how to make a spinning thing that returns an answer


const newBtn = document.querySelector('#js-new-button').addEventListener('click', getNumber);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// this will be the thing that spins 
// needs to spin clockwise...
// ...fast for 2 secs, slower for 1.5 secs, then it slows down...
// ... til it stops and reveals the number
class wheel {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }

  //  update() { ????

}

