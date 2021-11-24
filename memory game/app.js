//  elements

const card = document.querySelectorAll(".card");
const gameTile = document.querySelectorAll(".game-tile");




// functions

const shuffle = function (array) {
    array.sort(() => Math.random() - 0.5);
}


// Random picture generator in Tiles

window.addEventListener("load", function () {

    let tileArr = new Array(16);
    let tempArr = [];

    for (let i = 0; i < 8; i++) {
        tempArr[i] = i + 1;
    }


    shuffle(tileArr = [...tempArr, ...tempArr])

    for (let j = 0; j < 16; j++) {
        let tileImg = gameTile[j].childNodes[1].childNodes[1].childNodes[3];
        let id = document.createAttribute("id")
        let img = document.createElement("img");
        id.value = j
        tileImg.setAttributeNode(id)
        img.style.width = "100%"
        img.src = `./ball-${tileArr[j]}.png`
        tileImg.appendChild(img)

        console.log(tileImg)
    }


});

// Event listener 
let counter = 0;
let tileOpenCount = 0;
console.log(card)

card.forEach(cardTile => {
    cardTile.addEventListener("click", function () {

        let cardInner = this.childNodes[0].nextSibling

        counter++;
        cardInner.style.transform = "rotateY(180deg)"
        let arr = [];
        let a = [];
        card.forEach((ele, i) => {

            let eleAtt = ele.parentNode.childNodes[1].childNodes[1].style.transform;

            arr[i] = [eleAtt]
            a = [...arr]
            if (i % 2) {

            }
            console.log()
        })


    })
})