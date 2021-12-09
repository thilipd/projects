"use strict";
// ELEMENTS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d")




//Varaiables

let speed = 4;
let tile = 20
const tileCount = 2 * tile;
const tileSize = canvas.width / tileCount - 2;


// Block
let x = 0;
let y = 0;
let xPos1 = 0;
let yPos1 = 0;
let xPos2 = 0;
let yPos2 = 0;
let xPos3 = 0;
let yPos3 = 0;
let xPos4 = 0;
let yPos4 = 0;


let random = Math.floor(Math.random() * 7 + 1)

const degArr = [0, 90, 180, 270]

let degRand = Math.floor(Math.random() * 4);


// functions

const drawGameBoard = function () {
    ctx.fillStyle = "black";
    ctx.fillRect(tileCount * 3, 0, (canvas.width / 1.5), (canvas.height));

}




const drawFullBlock = function () {
    blockGenerate();

    drawBlock(xPos1, yPos1);
    drawBlock(xPos2, yPos2);
    drawBlock(xPos3, yPos3);
    drawBlock(xPos4, yPos4);

}

const blockGenerate = function () {

    switch (random) {
        case 1:
            if (degRand === 0 || degRand === 1 || degRand === 2 || degRand === 3) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * y;
                xPos3 = tile * (x + 18);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 19));
                yPos4 = tile * (y + 1);
            }

            break;

        case 2:
            if (degRand === 0 || degRand === 2) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * y;
                xPos3 = tile * (x + 19);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 20));
                yPos4 = tile * (y + 1);
            } else if (degRand === 1 || degRand === 3) {
                xPos1 = tile * (x + 19);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 18));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 19);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 18));
                yPos4 = tile * (y + 2);
            }

            break;

        case 3:

            if (degRand === 0 || degRand === 2) {
                xPos1 = tile * (x + 19);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 20));
                yPos2 = tile * y;
                xPos3 = tile * (x + 18);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 19));
                yPos4 = tile * (y + 1);
            } else if (degRand === 1 || degRand === 3) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 18);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 19));
                yPos4 = tile * (y + 2);
            }

            break;

        case 4:

            if (degRand === 0) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 18));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 19);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 20));
                yPos4 = tile * (y + 1);
            } else if (degRand === 1) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * y;
                xPos3 = tile * (x + 18);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 18));
                yPos4 = tile * (y + 2);
            } else if (degRand === 2) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * y;
                xPos3 = tile * (x + 20);
                yPos3 = tile * y;
                xPos4 = (tile * (x + 20));
                yPos4 = tile * (y + 1);
            } else if (degRand === 3) {
                xPos1 = tile * (x + 19);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 19);
                yPos3 = tile * (y + 2);
                xPos4 = (tile * (x + 18));
                yPos4 = tile * (y + 2);
            }

            break;

        case 5:

            if (degRand === 0) {
                xPos1 = tile * (x + 20);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 18));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 19);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 20));
                yPos4 = tile * (y + 1);
            } else if (degRand === 1) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 18));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 18);
                yPos3 = tile * (y + 2);
                xPos4 = (tile * (x + 19));
                yPos4 = tile * (y + 2);
            } else if (degRand === 2) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * y;
                xPos3 = tile * (x + 20);
                yPos3 = tile * y;
                xPos4 = (tile * (x + 18));
                yPos4 = tile * (y + 1);;
            } else if (degRand === 3) {
                xPos1 = tile * (x + 19);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 19);
                yPos3 = tile * (y + 2);
                xPos4 = (tile * (x + 18));
                yPos4 = tile * y;
            }

            break;

        case 6:

            if (degRand === 0) {
                xPos1 = tile * (x + 19);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 18));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 19);
                yPos3 = tile * (y + 1);
                xPos4 = (tile * (x + 20));
                yPos4 = tile * (y + 1);
            } else if (degRand === 1) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 18));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 18);
                yPos3 = tile * (y + 2);
                xPos4 = (tile * (x + 19));
                yPos4 = tile * (y + 1);;
            } else if (degRand === 2) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * y;
                xPos3 = tile * (x + 20);
                yPos3 = tile * y;
                xPos4 = (tile * (x + 19));
                yPos4 = tile * (y + 1);;
            } else if (degRand === 3) {
                xPos1 = tile * (x + 19);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 19);
                yPos3 = tile * (y + 2);
                xPos4 = (tile * (x + 18));
                yPos4 = tile * (y + 1);
            }

            break;

        case 7:

            if (degRand === 0 || degRand === 2) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 19));
                yPos2 = tile * y;
                xPos3 = tile * (x + 20);
                yPos3 = tile * y;
                xPos4 = (tile * (x + 21));
                yPos4 = tile * y;
            } else if (degRand === 1 || degRand === 3) {
                xPos1 = tile * (x + 18);
                yPos1 = tile * y;
                xPos2 = (tile * (x + 18));
                yPos2 = tile * (y + 1);
                xPos3 = tile * (x + 18);
                yPos3 = tile * (y + 2);
                xPos4 = (tile * (x + 18));
                yPos4 = tile * (y + 3);
            }

            break;
    }

}

const drawBlock = function (xPos, yPos) {
    ctx.fillStyle = "red";
    ctx.fillRect(xPos, yPos, tileSize, tileSize);
}

const moveBlock = function (key) {
    console.log(xPos1, yPos1, xPos2, yPos2, xPos3, yPos3, xPos4, yPos4);
    if (xPos1 > 120 || xPos2 > 120 || xPos3 > 120 || xPos2 < 640 || xPos4 < 640) {
        if (key === "ArrowRight") x++;
        else if (key === "ArrowLeft") x--;
    }
}

const gravity = function () {
    y += 1;


    if (yPos4 > 760 || yPos3 > 760) {
        clearTimeout(draw);
    }
}


const draw = function () {



    drawGameBoard();
    drawFullBlock();
    gravity();

    setTimeout(draw, 1000 / speed);

}

draw();

const keyDown = function (e) {
    switch (e.key) {
        case "ArrowUp": console.log(e.key);
            break;
        case "ArrowDown": console.log(e.key);
            break;
        case "ArrowRight":
            moveBlock(e.key);
            break;
        case "ArrowLeft":
            moveBlock(e.key);
            break;
        case "a":
            degRand--;
            if (degRand < 0) {
                degRand = 3;
            };
            break;
        case "d":
            degRand++;
            if (degRand > 3) {
                degRand = 0;
            }
            break;
        default: console.log(e.key);
            break;

    }

}

document.addEventListener('keydown', keyDown)







