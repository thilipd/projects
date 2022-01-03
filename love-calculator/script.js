'use strict';


// Elements

const name1 = document.querySelector('.n1');
const name2 = document.querySelector('.n2');
const calcBtn = document.querySelector('.calc');
const display = document.querySelector('.display');
const resultDisplay = document.querySelector('.result');
const inputContainer = document.querySelector('.input_container');
const resetBtn = document.querySelector('.reset');


let name1Arr = [''];
let name2Arr = [''];


let x1, x2, y;
let count = {};

let num = [];
let nam = [];
let c = 0;
let alphaCount = [];
let c1 = 0;
const luv = ['l', 'o', 'v', 'e'];

let result;

// eventlistner

calcBtn.addEventListener('click', function () {

    if (name1.value === '' || name2.value === '') {
        alert('Please enter the name')
    } else {

        name1Arr = [name1.value];
        name2Arr = [name2.value];



        x1 = name1Arr[0].split("");
        x2 = name2Arr[0].split("");

        y = [...x1, ...luv, ...x2];

        y.forEach((val, i) => y[i] = val.toLowerCase())

        y.forEach(val => count[val] ? count[val] += 1 : count[val] = 1);

        for (let props in count) {
            num[c] = count[props];
            nam[c] = props;
            ++c;
        }

        alphaCount = [...num]


        while (alphaCount.length !== 2) {

            for (let i = 0, j = alphaCount.length - 1; i < alphaCount.length - 1, j >= 0; i++, j--) {

                if (i === j) {
                    alphaCount[i] = alphaCount[i];
                    ++c1;
                }
                else if (i < j) {
                    alphaCount[i] = alphaCount[i] + alphaCount[j];
                    ++c1;
                } else if (i > j) {
                    alphaCount.pop();
                }

            }

        }
        if (alphaCount[0] > 9 || alphaCount[1] > 9) {

            result = alphaCount.reduce((a, b) => a + b);

        } else result = Number(alphaCount.join(""));


        resultDisplay.innerHTML = `${result}%`;
        display.classList.remove("hidden");
        inputContainer.classList.add("hidden");

    }
});

resetBtn.addEventListener('click', function () {
    name1Arr = [''];
    name2Arr = [''];
    x1, x2, y;
    count = {};

    num = [];
    nam = [];
    c = 0;
    alphaCount = [];
    c1 = 0;
    result;
    name1.value = "";
    name2.value = "";

    display.classList.add("hidden");
    inputContainer.classList.remove("hidden");

});



