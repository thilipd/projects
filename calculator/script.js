'use strict';

// Element Selection

let y;
const daysDisplay = document.querySelector('.days');
const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


//   Count down timer

const x = function () {

    const tick = function () {
        const randomDate = new Date(2021, 10, 15, 0, 0);
        const todayDate = new Date();
        let timeInMillisecond = randomDate.getTime() - todayDate.getTime();


        const timerDays = Math.floor(timeInMillisecond / (1000 * 60 * 60 * 24))
        const timerHours = Math.floor((timeInMillisecond / (1000 * 60 * 60)) % 24);
        const timerMinutes = Math.floor((timeInMillisecond / (1000 * 60)) % 60);
        const timerSeconds = Math.floor((timeInMillisecond / 1000) % 60);


        daysDisplay.innerText = `${timerDays}`.padStart(2, 0);
        hoursDisplay.innerText = `${timerHours}`.padStart(2, 0);
        minutesDisplay.innerText = `${timerMinutes}`.padStart(2, 0);
        secondsDisplay.innerText = `${timerSeconds}`.padStart(2, 0);


        timeInMillisecond -= 1000;

        if (timeInMillisecond < 0) {
            clearInterval(y);

        }

    }

    tick();

    y = setInterval(tick, 1000);

    return y

}

x();










