
let mins = document.getElementsByClassName('sw_mins');
let sw_start = document.getElementById('sw_start');
let sw_stop = document.getElementById('sw_stop');
let h = 0;
let min = 0;
let s = 0;
let ms = 0;


function update_sw() {
    ms += 1;
    if (ms == 10) {
        ms = 1;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        min += 1;
    }
    if (min == 60) {
        min = 0;
        h += 1;
    }
    mins[0].innerHTML = h + ":";
    mins[1].innerHTML = min + ":";
    mins[2].innerHTML = s + ":";
    mins[3].innerHTML = ms;

}

function start() {
    t = setInterval(update_sw, 100);
    sw_start.disabled = true;
}

function stop() {
    clearInterval(t);
    sw_start.disabled = false;
}

function reset() {
    clearInterval(t);
    sw_start.disabled = false;
    ms = 0, s = 0, min = 0, h = 0;
    mins[0].innerHTML = h + ":";
    mins[1].innerHTML = min + ":";
    mins[2].innerHTML = s + ":";
    mins[3].innerHTML = ms;

}
