"use strict";

// elements

const property = document.querySelector(".property");
const inputFactor = document.querySelector(".converter1");
const outputFactor = document.querySelector(".converter2");
const input = document.querySelector(".con1_input");
const output = document.querySelector(".con2_input")


// Factors HTML

const massFactors = `<option value="gram">Gram (g)</option>
<option value="kilogram">Kilogram (kg)</option>
<option value="milligram">Milligram (mg)</option>
<option value="pound">Pound (lb)</option>`;

const lengthFactors = `<option value="meter">Meter(m)</option>
<option value="kilometer">Kilometer (km)</option>
<option value="millimeter">Millimeter (mm)</option>
<option value="furlong">Furlong</option>
<option value="yard">Yard(yd)</option>
<option value="foot">foot/feet (ft)</option>
<option value="inch">Inch (in)</option>
<option value="mile">Mile(mi)</option>`;

const areaFactors = `<option value="smeter">Square Meter(m^2)</option>
<option value="skilometer">Square Kilometer (km^2)</option>
<option value="acre">Acre</option>
<option value="hectare">Hectare</option>
<option value="sfoot">Square foot/feet (ft^2)</option>
<option value="sinch">Square Inch (in^2)</option>
<option value="smile">Square Mile(mi^2)</option>`

const tempFactors = `<option value="celsius">Celsius (C)</option>
<option value="fahrenhiet">Fahrenhiet (F)</option>
<option value="kelvin">Kelvin (K)</option>`

let x = 0;
let y = 0;

// Factor array;


const unit1 = ['meter', 'kilometer', 'millimeter', 'furlong', 'yard', 'foot', 'inch', 'mile'];
const fact1 = [1, 1000, 0.001, 0.0049709695, 1.09361, 3.28083, 39.36996, 0.00062136931818182];


// Event listner

property.addEventListener('change', function () {
    console.log(this.value);

    inputFactor.innerHTML = '';
    outputFactor.innerHTML = '';

    if (this.value === "mass") {

        inputFactor.insertAdjacentHTML('afterbegin', massFactors);

        outputFactor.insertAdjacentHTML('afterbegin', massFactors);
    }
    if (this.value === "length") {

        inputFactor.insertAdjacentHTML('afterbegin', lengthFactors);

        outputFactor.insertAdjacentHTML('afterbegin', lengthFactors);
    }
    if (this.value === "area") {

        inputFactor.insertAdjacentHTML('afterbegin', areaFactors);

        outputFactor.insertAdjacentHTML('afterbegin', areaFactors);
    }
    if (this.value === "temperature") {

        inputFactor.insertAdjacentHTML('afterbegin', tempFactors);

        outputFactor.insertAdjacentHTML('afterbegin', tempFactors);
    }

});

input.addEventListener('input', function () {


    if (property.value === "length") {

        if (inputFactor.value === outputFactor.value) {
            output.value = input.value
        } else if (inputFactor.value !== outputFactor.value) {

            for (let i = 0; i < unit1.length; i++) {

                if (unit1[i] === inputFactor.value) {
                    x = fact1[i];

                }
                if (unit1[i] === outputFactor.value) {
                    y = fact1[i]
                    output.value = (input.value * x) / y;

                    console.log(input.value, x, y)
                }


            }
        }
    }


})