'use strict';
// Selecting Elements

const block = document.querySelector('#blocks');
const hole = document.querySelector('#hole');
const ball = document.querySelector('#ball');
const gameBox = document.querySelector('.game')



//Variables
let jumping = 0;


/////////////////////////////////////////////////////////////////

//Function

// Gravity
const gravity = function () {
    const ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    if (jumping = 0)
        ball.style.top = `${ballTop + 3}px`;
    console.log(window.getComputedStyle(ball).getPropertyValue("top"), ballTop)
}
gravity();


//  Stop Interval

const stopInterval = function () {
    clearInterval(gravity);
}


// Jump

const jump = function () {
    jumping = 1;
    const ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    ball.style.top = `${ballTop - 150}px`
}

/////////////////////////////////////////////////////////////////

// Event listeners

hole.addEventListener('animationiteration', () => {
    const random = - Math.floor(Math.random() * 300 + 150);
    hole.style.top = `${random}px`
})

setInterval(gravity, 100);

gameBox.addEventListener('click', jump);















