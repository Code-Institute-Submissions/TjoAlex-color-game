// Declaring the numer of squares
let numSquares = 6;
//Array of colors
let colors = generateRandomColors(numSquares);
//List of variables
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const square1 = document.querySelector(".square1");
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
const ss = document.getElementById("stopwatch");
let end, tId;


const clock = function () {
    const now = new Date()
    const diff = parseInt((end.getTime() - now.getTime()) / 1000);
    // Display timer message
    ss.textContent = diff <= 0 ? "Over a minute" :
        diff + " second" + (diff === 1 ? "" : "s")
}

const reset = function () {
    end = new Date()
    // add 1 minute 
    end.setMinutes(end.getMinutes() + 1);
    clearInterval(tId)
    tId = setInterval(clock, 1000)
}

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected"); // display easy button selected
    numSquares = 3
    // 3 squares displaying
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected"); // display hard btn selected 
    easyBtn.classList.remove("selected");
    // Add number of squares
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

reset(); //start timer again
resetButton.addEventListener("click", function () {
    //generat all new colors
    colors = generateRandomColors(numSquares);
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
    reset();
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
            messageDisplay.textContent = "Correct! Your time left was:";
            resetButton.textContent = "Play Again!"
            changeColors(clickedColor);
            clearInterval(tId);
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