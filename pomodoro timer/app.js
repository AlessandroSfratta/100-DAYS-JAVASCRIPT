const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer")


let interval; let timeLeft = 1800;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime
}


function startTimer () {
    interval = setInterval(() => {
        timeLeft--
        updateTimer() 
        if(timeLeft === 0) {
            clearInterval(interval);
            alert("Il tempo è scaduto!");
            timeLeft = 1800; }}, 1000)
    
            console.log("start")}

function stopTimer () {
    clearInterval(interval)
    console.log("stop")
}
function resetTimer () {
    clearInterval(interval);
    timeLeft = 1800;
    updateTimer();
    console.log("reset")
}

startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)
