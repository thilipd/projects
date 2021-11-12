'use strict';
//Sselecting Element

const block = document.querySelector('#blocks');
const hole = document.querySelector('#hole');
const ball = document.querySelector('#ball');
const gameBox = document.querySelector('.game');
const scr = document.querySelector('.scr');
const resetBtn = document.querySelector('.reset');
const startBtn = document.querySelector('.start')



//Variables

let jumping = 0;
let counter = 0;
let score = 0

/////////////////////////////////////////////////////////////////

//Function

// Gravity
const gravity = function () {

    const blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    const bTop = -(600 - ballTop);

    if (jumping === 0) {
        ball.style.top = `${ballTop + 3}px`;
    }

    if ((ballTop > 580) || ((blockleft < 20) && (blockleft > -50) && ((bTop < holeTop) || (bTop > holeTop + 130)))) {
        alert(`Game over score:${counter}`);
        ball.style.top = `200px`;
        counter = 0;
        block.style.left = `850px`;

    }
    //     console.log(blockleft, holeTop, ballTop, bTop)
}
gravity();




// Jump

const jump = function () {
    jumping = 1;
    let jumpCount = 0;
    const jumpInterval = setInterval(function () {

        const ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));

        if ((ballTop > 106) && (jumpCount < 15)) {

            ball.style.top = `${ballTop - 5}px`;

        }

        if (jumpCount > 20) {

            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }

        jumpCount++;

    }, 10)
}

/////////////////////////////////////////////////////////////////

// Event listeners




hole.addEventListener('animationiteration', () => {

    const random = - Math.floor(Math.random() * 300 + 150);
    hole.style.top = `${random}px`;
    score = counter++;
    scr.innerHTML = score;
})



gameBox.addEventListener('click', jump);

//start
startBtn.addEventListener('click', function () {

    block.style.animation = " b 2s infinite linear";
    hole.style.animation = "hole 2s infinite linear";
    const garvityInterval = setInterval(gravity, 10);

    // Reset

    resetBtn.addEventListener('click', function () {
        block.style.animation = "";
        hole.style.animation = "0";
        ball.style.top = "200px";
        clearInterval(garvityInterval);

    })
})

















