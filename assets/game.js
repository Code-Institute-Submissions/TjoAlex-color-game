//Array of 6 colors
const colors = generateRandomColors(6);
//List of variables
const squares = document.querySelectorAll(".square");
const pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const square1 = document.querySelector(".square1");
const resetButton = document.querySelector("#reset");
const scores = document.querySelector("#score")

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
    for (const i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

//give squares different colors
for (const i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //Grab color of clicked square
        const clickedColor = this.style.backgroundColor;
        //Compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again!"
            scores.text += 1;
            changeColors(clickedColor);
            //square1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again"
        }

    });
}

function changeColors(color) {
    //loop through all squares
    for (const i = 0; i < squares.length; i++) {
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
    for (const i = 0; i < num; i++) {
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