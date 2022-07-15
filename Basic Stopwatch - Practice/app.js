// Practice 
var count = 00;
var intervalOne;

function timerOne() {
    count++;
    console.log(count);
}
intervalOne = setInterval(timerOne, 1000);

setTimeout(function() {
    clearInterval(intervalOne)
}, 5000);




// Stopwatch functionality
var miliSecs = 00;
var secs = 00;
var mins = 00;

var htmlMiliSecs = document.getElementById("mili-secs");
var htmlSecs = document.getElementById("secs");
var htmlMins = document.getElementById("mins");
var interval;

var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");
var resetBtn = document.getElementById("reset-btn");

function timer() {
    miliSecs++;
    htmlMiliSecs.innerHTML = miliSecs;
    if (miliSecs == 100) {
        secs++;
        htmlSecs.innerHTML = secs;
        miliSecs = 00;
    } else if (secs == 60) {
        secs = 00;
        mins++;
        htmlMins.innerHTML = mins;
    }
}

function start() {
    interval = setInterval(timer, 10);
    // stopBtn.style.visibility = "visible";    // CSS visibility property could also be used
    stopBtn.disabled = false;
    stopBtn.className = "enabled";

    startBtn.disabled = true;
    startBtn.className = "disabled";

    resetBtn.disabled = false;
    resetBtn.className = "enabled";
}

function stop() {
    clearInterval(interval);
    // stopBtn.style.visibility = "hidden";
    stopBtn.disabled = true;
    stopBtn.className = "disabled";

    startBtn.innerHTML = "Resume";
    startBtn.disabled = false;
    startBtn.className = "enabled";

}

function reset() {
    stop();
    mins = 00;
    secs = 00;
    miliSecs = 00;
    htmlMiliSecs.innerHTML = "00";
    htmlSecs.innerHTML = "00";
    htmlMins.innerHTML = "00";
    startBtn.innerHTML = "Start";

    resetBtn.disabled = true;
    resetBtn.className = "disabled";
}
