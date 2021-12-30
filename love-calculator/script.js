'use strict';


// Elements

const name1 = document.querySelector('.n1');
const name2 = document.querySelector('.n2');
const calcBtn = document.querySelector('.calc');


let name1Arr = [''];
let name2Arr = [''];


let x1, x2;

// eventlistner

calcBtn.addEventListener('click', function () {

    // if (name1.value === '' || name2.value === '') {
    //     alert('Please enter the name')
    // } else {}

    // name1Arr = [name1.value];
    // name2Arr = [name2.value];

    name1Arr = ['Raja'];
    name2Arr = ['Rani'];

    x1 = name1Arr[0].split("");
    x2 = name2Arr[0].split("");

    // for (let i = 0, j = 0; i < x1)

    console.log(x1, x2)
})






