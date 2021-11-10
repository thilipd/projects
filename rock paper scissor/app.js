'use strict';

// Selecting elements
const btn = document.querySelectorAll('.btn');
const msg = document.querySelector('.message');
const playerScoreDisplay = document.querySelector('.player');
const computerScoreDisplay = document.querySelector('.computer');
const movesDisplay = document.querySelector('.moves')

// Assigning Variables

let score = [1, 1];
let computer = '';
let player = '';
let computerScore = score[1];
let playerScore = score[0];
let moves = 10;


// Functions
// Game functions
const game = (computer, player) => {
    if (computer === player) {



    } else if (computer != player) {

        if (player === "rock") {
            if (computer === "scissor") {
                playerScoreDisplay.value = playerScore++;
            } else if (computer === "paper") {
                computerScoreDisplay.value = computerScore++;
            }
        }
        if (player === "paper") {
            if (computer === "rock") {
                playerScoreDisplay.value = playerScore++;
            } else if (computer === "scissor") {
                computerScoreDisplay.value = computerScore++;
            }
        }
        if (player === "scissor") {
            if (computer === "paper") {
                playerScoreDisplay.value = playerScore++;
            } else if (computer === "rock") {
                computerScoreDisplay.value = computerScore++;
            }
        }
    }
}

// Reset functions
const delay = function () {
    setTimeout(() => {
        let score = [1, 1];
        let computer = '';
        let player = '';
        let computerScore = score[1];
        let playerScore = score[0];
        let moves = 10;
        movesDisplay.innerText = moves;
        playerScoreDisplay.value = 0;
        computerScoreDisplay.value = 0;
        msg.innerHTML = "Rock Paper Scissor"
    }, 3000)
};


// event listeners

btn.forEach(item => {

    item.addEventListener('click', function () {
        if (moves != 0) {
            movesDisplay.innerText = moves -= 1;

            player = item.classList[0]

            const random = Math.floor((Math.random() * 3) + 1)
            if (random === 1) {
                computer = "rock";
            } else if (random === 2) {
                computer = "paper";
            } else if (random === 3) {
                computer = "scissor";
            }
            msg.innerHTML = `Computer : ${computer} & Player : ${item.classList[0]}`

            game(computer, player)

        }
        else {
            if (computerScore < playerScore) msg.innerHTML = "Player wins";
            else if (computerScore > playerScore) msg.innerHTML = "Computer wins"
            else msg.innerHTML = "Match tied"

            delay();

        }
    })
})

