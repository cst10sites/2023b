let score = 0;
let clickCount = 0;
let cps = 0;
let startTime = new Date();
let timerInterval;

const scoreDisplay = document.getElementById('score');
const cpsDisplay = document.getElementById('cps');
const cookieImage = document.getElementById('cookie');
const resetButton = document.getElementById('reset');
const updateTimeDisplay = document.getElementById('updateTime');

cookieImage.addEventListener('click', incrementScore);
resetButton.addEventListener('click', resetScore);

function incrementScore() {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    clickCount++;;
    var audio = new Audio('sounds/crunch.mp3')
    audio.play();
}

setInterval(calculateCPS, 1000);

function calculateCPS() {
    cps = clickCount;
    cpsDisplay.textContent = 'CPS: ' + cps;
    clickCount = 0;
}

function resetScore() {
    score = 0;
    scoreDisplay.textContent = 'Score: ' + score;
}

function startTimer() {
    startTime = new Date();
    clearInterval(timerInterval);

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = new Date();
    const timeElapsed = currentTime - startTime;
    const secondsPassed = Math.floor(timeElapsed / 1000);
    updateTimeDisplay.textContent = 'Time: ' + secondsPassed + ' seconds';
}

window.addEventListener('load', startTimer);
