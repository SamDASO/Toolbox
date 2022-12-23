let hoursElements = document.getElementById('t_hour');
let minsElements = document.getElementById('t_minute');
let secElements = document.getElementById('t_second');
let btnStart = document.getElementById('t_start');
let btnStop = document.getElementById('t_stop');
let btnPause = document.getElementById('t_pause');
let btnReset = document.getElementById('t_reset');
let interval;
let pause = false;
let totalSeconds = 0;
let totalSecondsBackup = 0;

init();

function init() {
    btnPause.style.display = 'none';
    btnStop.style.display = 'none';
    btnReset.style.display = 'none';

    btnStart.addEventListener('click', () => {
        const hours = parseInt(hoursElements.value);
        const minutes = parseInt(minsElements.value);
        const sec = parseInt(secElements.value);

        totalSecondsBackup = totalSeconds = hours * 60 * 60 + minutes * 60 + sec;

        if (totalSeconds < 0) {
            return;
        }
        startTimer();

        btnPause.style.display = 'inline-block';
        btnStop.style.display = 'inline-block';
        btnReset.style.display = 'inline-block';
        btnStart.style.display = 'none';
    });

    btnPause.addEventListener('click', () => {
        pause = !pause;
        if (pause) {
            btnPause.innerText = 'Resume';
        } else {
            btnPause.innerText = 'Pause';
        }

    })

    btnStop.addEventListener('click', () => {
        stopTimer();
        totalSeconds = totalSecondsBackup;
        btnPause.innerText = 'Pause';
        pause = false;
        updateInputs();

        btnPause.style.display = 'none';
        btnStop.style.display = 'none';
        btnReset.style.display = 'none';
        btnStart.style.display = 'inline-block';

    })

    btnReset.addEventListener('click', () => {
        totalSeconds = totalSecondsBackup;
        if (pause = true) {
            btnPause.innerText = 'Pause';
            pause = !pause;
        }
    })

}


function startTimer() {
    interval = setInterval(() => {
        if (pause)
            return;
        totalSeconds--;
        updateInputs();
        if (totalSeconds <= 0) {
            stopTimer();
        }
    }, 1000)
}

function updateInputs() {
    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;

    hoursElements.value = hours;
    minsElements.value = minutes;
    secElements.value = sec;

}

function stopTimer() {
    interval = clearInterval(interval);
}

