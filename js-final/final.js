// other idea: every time someone tries to type a number x, have it return x + 1, etc.

// or do "pick a random box"


function rotateFunction() {
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('numbers').style.transform ="rotate("+deg+"deg)";
}

var element = document.getElementById('even');
element.classList.remove('animate');

setTimeout(function() {
    element.classList.add('animate');
}, 5000);
