let timerInterval;
let timerSeconds = 0;
let stopwatchInterval;
let stopwatchSeconds = 0;
let lapCounter = 1;

function startTimer() {
    // Get the input values
    const hoursInput = document.getElementById('timer-hours');
    const minutesInput = document.getElementById('timer-minutes');
    const secondsInput = document.getElementById('timer-seconds');

    const totalSeconds =
        parseInt(hoursInput.value) * 3600 +
        parseInt(minutesInput.value) * 60 +
        parseInt(secondsInput.value);

    let remainingTime = totalSeconds;

    timerInterval = setInterval(() => {
        remainingTime--;

        if (remainingTime >= 0) {
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;

            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            document.getElementById('timer-display').textContent = formattedTime;
        } else {
            clearInterval(timerInterval);
            document.getElementById('timer-display').textContent = '00:00:00';
            alert("Time's Up!");
        }
    }, 1000);
}

function endTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer-display").textContent = "00:00:00";
}

function resetTimer() {
    // Clear the timer interval if running
    clearInterval(timerInterval);

    // Reset the timer display
    document.getElementById('timer-display').textContent = '00:00:00';

    // Reset the input fields
    document.getElementById('timer-hours').value = 0;
    document.getElementById('timer-minutes').value = 0;
    document.getElementById('timer-seconds').value = 0;
}

function startStopwatch() {
    stopwatchInterval = setInterval(function () {
        stopwatchSeconds++;

        const displayHours = Math.floor(stopwatchSeconds / 3600);
        const displayMinutes = Math.floor((stopwatchSeconds % 3600) / 60);
        const displaySeconds = stopwatchSeconds % 60;

        const formattedTime = `${padZero(displayHours)}:${padZero(displayMinutes)}:${padZero(displaySeconds)}`;
        document.getElementById("stopwatch").textContent = formattedTime;
    }, 1000);
}

function lap() {
    // Get the current stopwatch time
    const currentTime = document.getElementById('stopwatch').innerText;

    // Create a new list item for the lap time
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${currentTime}`;

    // Append the lap time to the lap list
    const lapList = document.getElementById('lap-list');
    lapList.appendChild(lapItem);

    // Increment the lap counter
    lapCounter++;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    document.getElementById("stopwatch").textContent = "00:00:00";
}

function padZero(value) {
    return value.toString().padStart(2, "0");
}
function resetStopwatch() {
    // Clear the stopwatch interval if running
    clearInterval(stopwatchInterval);

    // Reset the stopwatch display
    document.getElementById('stopwatch').textContent = '00:00:00';

    // Clear the lap list
    const lapList = document.getElementById('lap-list');
    lapList.innerHTML = '';

    // Reset the lap counter
    lapCounter = 1;
}