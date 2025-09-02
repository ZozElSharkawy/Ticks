let stopwatch = document.getElementById("stopwatch");

let timer = 0;
let running = false;
let startTime = 0;
let duration = 0;
function start() {
    if (!running) {
        startTime = Date.now() - duration; // continue from where left off
        timer = setInterval(update, 10); //update every 0.01 secs
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(timer);
        duration = Date.now() - startTime;
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    duration = 0;
    running = false;
    stopwatch.textContent = "00:00:00";
    
}

function update(){
    timeNow = Date.now()
    duration = timeNow - startTime


    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    let seconds = Math.floor((duration / 1000) % 60)
    let milliseconds = Math.floor((duration % 1000) / 10)

    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')
    milliseconds = String(milliseconds).padStart(2, '0')

    stopwatch.textContent = `${minutes}:${seconds}:${milliseconds}`
}
