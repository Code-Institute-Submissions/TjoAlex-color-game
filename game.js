//Array of 6 colors
var colors = [
    "rgb(255,0,0)",
    "rgb(255,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,255)",
    "rgb(0,0,255)",
    "rgb(255,0,255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay"); //display rgb in header

colorDisplay.textContent = pickedColor;

//give squares different colors
for (var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        alert("clicked a square");
    });
}