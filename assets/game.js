//Array of 6 colors
let colors = generateRandomColors(6);
//List of variables
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const square1 = document.querySelector(".square1");
const resetButton = document.querySelector("#reset");
const ss = document.getElementsByClassName('stopwatch');
const setTimer = setInterval(timers, 1000);


resetButton.addEventListener("click", function () {
    //generat all new colors
    colors = generateRandomColors(6);
    //pick new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "Get new rgb"

    messageDisplay.textContent = "";
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

//give squares different colors
for (let i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //Grab color of clicked square
        const clickedColor = this.style.backgroundColor;
        //Compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"; //want to add + "something holding and telling paused time"
            resetButton.textContent = "Play Again!" // here add something resetting & starting the timer again
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again"
        }

    });
}

function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    const arr = []
    //repeat num times
    for (let i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //Pick a "red" from 0-255
    const r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0-255
    const g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0-255
    const b = Math.floor(Math.random() * 256);
    "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// setInterval Timer
let totalSeconds = 0;

function timers() {
    ++totalSeconds;
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (seconds < 10)
        seconds = "0" + seconds;
    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}