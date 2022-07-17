var miliSecs = 00;
var secs = 00;
var mins = 00;
var hrs = 00;

var htmlMiliSecs = document.getElementById("mili-secs");
var htmlSecs = document.getElementById("secs");
var htmlMins = document.getElementById("mins");
var interval;
var count = 0;

var startStopBtn = document.getElementById("start-stop-btn");
var stopBtn = document.getElementById("stop-btn");
var resetBtn = document.getElementById("reset-btn");
var lapBtn = document.getElementById("lap-btn");
var laps = document.getElementById("laps");

var playStatus = "stopped";

// Don't display Hours if not needed
var htmlHrs = document.getElementById("hrs");
var htmlHrColon = document.getElementById("hr-colon");
htmlHrs.style.display = "none";
htmlHrColon.style.display = "none";

// Hide Reset and lap buttons
resetBtn.style.visibility = "hidden";
lapBtn.style.visibility = "hidden";

function timer() {
    miliSecs++;
    if (miliSecs / 100 === 1) {
        miliSecs = 00;
        secs++;
        if (secs / 60 === 1) {
            secs = 00;
            mins++;
            if (mins / 60 === 1) {
                mins = 00;
                hrs++;
                htmlHrs.style.display = "inline-block";
                htmlHrColon.style.display = "inline-block";
                htmlHrs.parentNode.classList.add("include-hrs");
                htmlHrs.parentNode.parentNode.classList.add("include-hrs-box");
                htmlHrs.parentNode.parentNode.lastElementChild.classList.add("hrs-box");
            }
        }
    }

//  Display time according to JS variables and add a leading 0 to single numbers
    if (miliSecs < 10) {
        htmlMiliSecs.innerHTML = "0" + miliSecs.toString();
    } else {
        htmlMiliSecs.innerHTML = miliSecs;
    }
    if (secs < 10) {
        htmlSecs.innerHTML = "0" + secs.toString();
    } else {
        htmlSecs.innerHTML = secs;
    }
    if (mins < 10) {
        htmlMins.innerHTML = "0" + mins.toString();
    } else {
        htmlMins.innerHTML = mins;
    }
    if (hrs < 10) {
        htmlHrs.innerHTML = "0" + hrs.toString();
    } else {
        htmlHrs.innerHTML = hrs;
    }

}

// Play/Pause button functionality
function startStop() {
    if (playStatus === "stopped") {

        interval = setInterval(timer, 10);
        resetBtn.style.visibility = "visible";
        lapBtn.style.visibility = "visible";
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        startStopBtn.className = "active";
        playStatus = "started";
        lapBtn.disabled = false;
        resetBtn.disabled = true;
        resetBtn.className = "disabled";
    } else {
        clearInterval(interval);
        startStopBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playStatus = "stopped";
        startStopBtn.classList.remove("active");
        lapBtn.disabled = true;
        lapBtn.className = "disabled";
        resetBtn.disabled = false;
    }
}

// Reset button functionality
function reset() {
    clearInterval(interval);
    mins = 00;
    secs = 00;
    miliSecs = 00;
    hrs = 00;
    htmlMiliSecs.innerHTML = "00";
    htmlSecs.innerHTML = "00";
    htmlMins.innerHTML = "00";
    htmlHrs.innerHTML = "00";
    startStopBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    playStatus = "stopped";
    laps.innerHTML = "";
    count = 0;
    lapBtn.disabled = true;
    lapBtn.className = "disabled";
    resetBtn.disabled = true;
    resetBtn.className = "disabled";
    htmlHrs.style.display = "none";
    htmlHrColon.style.display = "none";
    htmlHrs.parentNode.classList.remove("include-hrs");
    htmlHrs.parentNode.parentNode.classList.remove("include-hrs-box");
    htmlHrs.parentNode.parentNode.lastElementChild.classList.remove("hrs-box");
    startStopBtn.classList.remove("active");
    start_audio.pause();
}

// Add lap functionality
function lap() {
    var li = document.createElement("li");
    li.classList.add("lap-item");
    li.textContent = "#" + ++count + "\xa0\xa0\xa0\xa0" + htmlHrs.innerHTML + " : " + htmlMins.innerHTML + " : " + htmlSecs.innerHTML + " . " + htmlMiliSecs.innerHTML;
    laps.appendChild(li);
}

// Reset Button Sound Effect
const reset_audio = new Audio();
reset_audio.src = "./sounds/negative_beeps.mp3";

// Lap Button Sound Effect
const lap_audio = new Audio();
lap_audio.src = "./sounds/lap.mp3";

// Start Button Sound Effect
const start_audio = new Audio();
start_audio.src = "./sounds/tick tick.mp3";
start_audio.loop = true;

function soundPlayPause() {
    if (playStatus === "started") {
        start_audio.play();
    } else {
        start_audio.pause();
    }
}