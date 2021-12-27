"use strict";

// Elements

const add = document.querySelector(".add");
const input = document.querySelector(".input");
const tick = document.querySelectorAll(".tick");
const toDo = document.querySelector(".to-do");


//Event listener


add.addEventListener("click", function () {
    if (input.value !== "") {

        toDo.insertAdjacentHTML("beforeend",
            `<li class="list"><span class="tick"> </span>${input.value}<span class="close">x</span></li>`);

        input.value = ""
    } else {
        alert("Please write something to do")
    }
});



document.body.addEventListener('click', function (event) {

    if (event.target.classList.contains('close')) {
        event.target.parentNode.style.display = "none";
    }

    if (event.target.classList.contains('list')) {
        event.target.childNodes[0].innerHTML = "&#10003";
        // event.target.style.textDecoration = "line-through";
    }
})




