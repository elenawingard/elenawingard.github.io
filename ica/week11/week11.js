    // use console.log to test to see if it works 
console.log("test");


    // const we define and they never change again
    // lets we can change 

const x = 2;
const y = 2;

    // use a conditional like an if statement to see if the consts are equal to one another
    // you see if it's true of not
    // then, if it's true, the javascript will do whatever is in the first set of curly brackets


if (x === y) {
    console.log("success");
    }
else {
    console.log("fail");
    }

    // grab an event listener to look for the button
    // so we'll define a variable 

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

    // looking for if the page has loaded
    // when it sees that we get an anonymous function that changes the size of the canvas
    // it'll make the canvas as wide and tall as the screen

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    });

    // every time we call this function it'll give us a random number

function random(number) {
    return Math.floor(Math.random () * number);
    }

    // when it clicks we run the draw function 

function draw(){
    // console.log("test");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // put conditions in parentheses
    for (let i = 0; i<100; i++) {
        ctx.beginPath();
        // generate 3 random colors that range from 0 to 255
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        // need to link stuff together so use let
        // this will give us random colors
        let color = "rgba("+red+","+green+","+blue+",0.5)"
        console.log(color);
        ctx.fillStyle = color;
        ctx.arc (
        random(canvas.width),
        random(canvas.height),
        random(100),
        0,
        2 * Math.PI,
        );
     ctx.fill();
    }

    // this is just the same as above but for another circle (the pink circle)
    for (let i = 0; i<100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(245, 40, 145, 0.8)";
        ctx.rect (
        random(canvas.width),
        random(canvas.height),
        random(50),
        random(50),
        0,
        2 * Math.PI,
        );
     ctx.fill();
    }
}

btn.addEventListener("click", draw);