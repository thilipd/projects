'use strict';


// Elements

const name1 = document.querySelector('.n1');
const name2 = document.querySelector('.n2');
const calcBtn = document.querySelector('.calc');


let name1Arr = [''];
let name2Arr = [''];


let x1, x2, y;
let count = {};

let num = [];
let nam = [];
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

    name1Arr = ['Rajan'];
    name2Arr = ['Rani'];

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
    let len = Math.trunc(alphaCount.length / 2);
    let z = alphaCount.length;
    console.log(len, z)



    for (let i = 0, j = z - 1; i < z - 1, j >= len; i++, j--) {

        if (i === j) {
            console.log(alphaCount[i] = alphaCount[i], i, j);
            ++c1;
        }
        else if (i !== j) {
            console.log(alphaCount[i] = alphaCount[i] + alphaCount[j], i, j);
            ++c1;
        }

        if (alphaCount.length !== c1) {
            for (let k = alphaCount.length - 1; k > c1; k--) {
                console.log(k);
            }
        }
    }





    console.log(y, count, nam, num, alphaCount, len)
})





