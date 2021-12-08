"use stric";

window.addEventListener("load", function () {

    //  elements

    const gameContainer = document.querySelector(".game-container");
    const menuButton = document.querySelectorAll("button");
    const homeContainer = document.querySelector(".home-container");
    const display = document.querySelector('.display');
    const scoreDisplay = document.querySelector('.score');
    const movesDisplay = document.querySelector('.moves');

    // Variables

    let card, gameTile, img;
    let len, sqrt, moves, score = 0;
    let x = [], y = [];


    console.log(scoreDisplay)
    // functions

    // Shuffle the images
    const shuffle = function (array) {
        array.sort(() => Math.random() - 0.5);
    }

    // Filp all tiles;

    const flipTile = function () {
        console.log(card);
        card.forEach(function (e) {
            console.log(e.childNodes[1])
            e.classList.remove("hidden")
            e.childNodes[1].style.transform = `rotateY(0deg)`;
        })
    }

    // Remove HTML element

    const removeTile = function () {
        card.forEach(function (e) {
            e.parentNode.remove(e.parentNode)
        })
    }


    // Game mode

    menuButton.forEach(button => {
        button.addEventListener('click', function () {

            gameContainer.classList.remove("hidden");
            homeContainer.classList.add("hidden");
            display.classList.remove("hidden");

            if (this.innerText === "Easy") {
                len = 16;


            }
            else if (this.innerText === "Intermediate") {
                len = 36;
            }
            else if (this.innerText === "Hard") {
                len = 64;
            }

            sqrt = Math.sqrt(len);

            // len = 16;
            moves = len / 2;
            scoreDisplay.value = score;
            movesDisplay.value = moves;


            let tileArr = new Array(16);
            let tempArr = new Array();

            for (let i = 0; i < (len / 2); i++) {
                tempArr[i] = i + 1;
            }

            tileArr = [...tempArr, ...tempArr]

            shuffle(tileArr);

            gameContainer.style.setProperty('grid-template-columns', `repeat(${len / sqrt}, 1fr)`);

            for (let j = len; j > 0; j--) {

                gameContainer.insertAdjacentHTML('beforeend',
                    ` <div class="game-tile tile-${j}">
                     <div class="card">
                         <div class="card-inner">
                             <div class="card-front">
        
                             </div>
                             <div class="card-back">
        
                             </div>
                         </div>
                     </div>
                 </div>`);

            }

            // Random picture generator in Tiles

            card = document.querySelectorAll(".card");
            gameTile = document.querySelectorAll(".game-tile");


            for (let j = 0; j < len; j++) {

                img = document.createElement("img");


                x[j] = `${tileArr[j]}`.padStart(3, 0);
                img.style.width = "100%"
                img.src = `${x[j]}.png`

                let tileImg = gameTile[j].childNodes[1].childNodes[1].childNodes[3];

                tileImg.appendChild(img);

            }



            // Event listener 

            let counter = 0;
            let tileOpenArr = [];
            let imgComp = [];
            let arr = [];


            card.forEach((cardTile, index, arrCard) => {




                cardTile.addEventListener("click", function () {



                    if (tileOpenArr.length < 2) {

                        let cardInner = this.childNodes[0].nextSibling
                        tileOpenArr[counter] = this.parentNode.getAttribute("class").slice(10);
                        counter++;
                        arr[counter] = index;
                        cardInner.style.transform = "rotateY(180deg)"

                        imgComp[counter] = this.childNodes[1].childNodes[3].childNodes[1].src.slice(22);

                        if (tileOpenArr[counter - 1] === tileOpenArr[counter]) {
                            counter = 1;
                            tileOpenArr.length = 1;
                            console.log(this.childNodes[1].childNodes[3].childNodes[1].src.slice(22))
                        } else if ((imgComp[counter - 1] !== imgComp[counter]) && counter == 2) {


                            setTimeout(function () {
                                for (let i = 1; i < arr.length; i++) {
                                    arrCard[arr[i]].childNodes[1].style.transform = "";

                                }
                                arr = [];
                                counter = 0;
                                tileOpenArr = [];

                                moves--;
                                movesDisplay.value = moves;

                                clearTimeout();

                            }, 1000);

                        }

                        else if (imgComp[counter - 1] === imgComp[counter]) {
                            for (let i = 1; i < arr.length; i++) {

                                score += 10;
                                scoreDisplay.value = score;
                                arrCard[arr[i]].classList.add("hidden");

                                y[counter] = (this.childNodes[1].style.transform);
                            };

                            arr = [];
                            counter = 0;
                            tileOpenArr = [];


                        }

                    }


                    if (moves < 1) {
                        alert(`Game over!!! /n ${score}`);
                        gameContainer.classList.add("hidden");
                        homeContainer.classList.remove("hidden");
                        display.classList.add("hidden");
                        flipTile();
                        removeTile();
                    }

                    card.forEach(function (c, i) {

                        console.log(c)

                    })

                })

            })

        });

    })

})


