const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');


function countdown () {
    const futureDate = new Date("01/01/2023");
    const currentDate = new Date();;
    let difference = futureDate - currentDate;

    const numOfDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= (numOfDays * (1000 * 60 * 60 * 24));

    const differenceHours = Math.floor(difference / (1000 * 60 * 60));
    difference -= (differenceHours * (1000 * 60 * 60));

    const differenceMin = Math.floor(difference / (1000 * 60));
    difference -= (differenceMin * (1000 * 60));

    const differenceSec = Math.floor(difference / 1000)

    //display
    daysElem.textContent = formatTime(numOfDays);
    hoursElem.textContent = formatTime(differenceHours);
    minutesElem.textContent = formatTime(differenceMin);
    secondsElem.textContent = formatTime(differenceSec);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown()
setInterval(countdown, 1000)