document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px)
        translateY(${y}px)`
    })
}

//Countdown timer 
//code from Jayesh Goyan https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
var myVar = setInterval(function () {
    myTimer()
}, 1000);
var secondlimit = 30;

function myTimer() {
    if (secondlimit == 0) {
        myStopFunction();
    }

    document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit, 2);
    secondlimit = secondlimit - 1;

}

function myStopFunction() {
    clearInterval(myVar);
}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

//Carousel 