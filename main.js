let secondsElement = document.querySelector('#seconds');
let minutesElement = document.querySelector('#minutes');
let hoursElement = document.querySelector('#hours');
let daysElement = document.querySelector('#days');


let totalSeconds = 
    (parseInt(daysElement.innerText) * 24 * 60 * 60) + 
    (parseInt(hoursElement.innerText) * 60 * 60) + 
    (parseInt(minutesElement.innerText) * 60) + 
    parseInt(secondsElement.innerText);

function countdown() {
    if (totalSeconds <= 0) {
        clearInterval(interval);
        return;
    }

    totalSeconds--;

    let days = Math.floor(totalSeconds / (24 * 60 * 60));
    let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    let seconds = totalSeconds % 60;

    daysElement.innerText = String(days).padStart(2, '0');
    hoursElement.innerText = String(hours).padStart(2, '0');
    minutesElement.innerText = String(minutes).padStart(2, '0');
    secondsElement.innerText = String(seconds).padStart(2, '0');
}

let interval = setInterval(countdown, 1000);
