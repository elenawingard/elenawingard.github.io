// set up canvas
const canvas = document.querySelector('canvas');
// setting the context of the canvas
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
// math.floor just rounds down (so no decimals)
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color every time we call this function
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// need to use a class
// define the class "ball"
// can call it over and over and each time will be a new iteration of it...
//...e.g., call ball 25 times and there will be 25 balls
class Ball {
    constructor(x, y, velX, velY, color, size) {
        // constructor passes info to the class
        // every time we make a new ball we use this constructor which...
        // ...initializes a ball with all the things we need for it to...
        // ...function (aka appear on screen and move)
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    // function we use to draw the ball on the screen
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }


// now we go to the console and type some javascript ????


update() {
// for the right side of the screen
if((this.x + this.size) >= width) {
    //it will take the velocity and make it negative
    this.velX = -(this.velX);
}
// for the left side of the screen
if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
}
// for the bottom of the screen
if((this.y + this.size) >= height) {
    //it will take the velocity and make it negative
    this.velY = -(this.velY);
}
// for the top of the screen
if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
}

// need to update position of ball
    this.x += this.velX;
    this.y += this.velY;
}

collisionDetect() {
    for(const ball of balls) {
        if(this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < this.size + ball.size) {
                ball.color = this.color = randomRGB();
            }
         }
        }
    }
}

const balls = [];
// while loop that's based on the condition of balls
while (balls.length < 1000) {
    // every ball will have a random size between 10 and 20
    const size = random(10, 20);
    const ball = new Ball(
        // (maximum number, minimum number)
        random(0+size, width-size),
        random(0+size, height-size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size, 
    );
    balls.push(ball);
    
}

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();