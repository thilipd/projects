'use strict';


//Selecting Elements

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

console.log(ctx)
//Varables

// Game background
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;


// Snake variables
let speed = 7;
let xHead = 10;
let yHead = 10;
let xVelocity = 0;
let yVelocity = 0;
const snakeParts = [];
let tailLength = 0;

class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


// food

let xfood = 5;
let yfood = 5;


// score

let score = 0;

// Sound

const sound = new Audio("./gulp.mp3");

// Functions


// game background
const clearScreen = function () {

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

// Snake position
const changeSnakePosition = function () {

    xHead += xVelocity;
    yHead += yVelocity;

}

// Snake
const drawSnake = function () {



    ctx.fillStyle = "goldenrod"
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    snakeParts.push(new SnakePart(xHead, yHead));
    if (snakeParts.length > tailLength) {
        snakeParts.shift();
    }

    ctx.fillStyle = "blue";
    ctx.fillRect(xHead * tileCount, yHead * tileCount, tileSize, tileSize)

}


// Food
const drawFood = function () {

    ctx.fillStyle = "red";
    ctx.fillRect(xfood * tileCount, yfood * tileCount, tileSize, tileSize)

}

// Collision

const checkCollision = function () {

    if ((xfood === xHead) && (yfood === yHead)) {
        xfood = Math.floor(Math.random() * tileCount + 1);
        yfood = Math.floor(Math.random() * tileCount + 1);
        tailLength++;
        score++;

        sound.play();
    }

}

// Score
const drawScore = function () {
    ctx.fillStyle = "white";
    ctx.font = "10px Verdana";
    ctx.fillText("Score: " + score, canvas.width - 50, 10);
}

// Game Over

const gameOver = function () {

    let gameOver = false;

    if ((xVelocity === 0) && (yVelocity === 0)) {
        return false;
    }

    if ((xHead < 0) || (xHead > 24) || (yHead < 0) || (yHead > 24)) {
        gameOver = true;
    }

    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if ((part.x === xHead) && (part.y === yHead)) {
            gameOver = true;
            break;
        }
    }

    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "50px Verdana"
        ctx.fillText("Game Over!", canvas.width / 5, canvas.height / 2);
    }

    return gameOver;
}


const draw = function () {


    changeSnakePosition();
    let result = gameOver();
    if (result) {
        return;
    }

    console.log(xHead, yHead)

    clearScreen();
    checkCollision();
    drawScore();
    if ((score > 5) && (score % 5 === 0)) {
        speed = speed + 0.1;
    }



    drawFood();
    drawSnake();
    setTimeout(draw, 1000 / speed);

}

draw();


const keyDown = function (e) {
    switch (e.key) {

        case ("ArrowUp"):
            if (yVelocity != 1) {
                yVelocity = -1;
                xVelocity = 0;
            }
            break;

        case "ArrowDown":
            if (yVelocity != -1) {
                yVelocity = 1;
                xVelocity = 0;
            }
            break;

        case "ArrowRight":
            if (xVelocity != -1) {
                yVelocity = 0;
                xVelocity = 1;
            }
            break;

        case "ArrowLeft":
            if (xVelocity != 1) {
                yVelocity = 0;
                xVelocity = -1;
            }
            break;
    }
}


// Event Listeners

document.body.addEventListener('keydown', keyDown);



