'use strict';


'use strict';


// Elements

const name1 = document.querySelector('.n1');
const name2 = document.querySelector('.n2');
const calcBtn = document.querySelector('.calc');


let name1Arr = [''];
let name2Arr = [''];


let x1, x2, y;
let count = {};

let prop = [];
let num = [];
let c = 0;
let alphaCount = [];

let add = [];
let c1 = 0;
const luv = ['l', 'o', 'v', 'e'];

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

    y = [...x1, ...luv, ...x2]

    y.forEach(val => count[val] ? count[val] += 1 : count[val] = 1);

    for (let props in count) {
        prop[c] = count[props];
        num[c] = props;
        ++c;
    }

    alphaCount = [...prop];

    for (let i = 0; i < alphaCount.length; i++) {
        for (let j = alphaCount.length - 1; j >= 0; j--) {

            add[c1] = alphaCount[i] + alphaCount[j];
            alphaCount.shift();
            alphaCount.pop();

            j = alphaCount.length - 1;
            console.log(alphaCount);
        }
        ++c1;
        i = 0;
        console.log(add);
    }



    console.log(x1, x2, y, count, alphaCount, add)
})












