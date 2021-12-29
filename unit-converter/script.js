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
<option value="smile">Square Mile(mi^2)</option>
<option value="syard">Square Yard(yd^2)</option>`

const tempFactors = `<option value="celsius">Celsius (C)</option>
<option value="fahrenhiet">Fahrenhiet (F)</option>
<option value="kelvin">Kelvin (K)</option>`

let x = 0;
let y = 0;

// Factor array;


const unit1 = ['meter', 'kilometer', 'millimeter', 'furlong', 'yard', 'foot', 'inch', 'mile'];
const fact1 = [1, 0.001, 1000, 0.0049709695, 1.09361, 3.28083, 39.36996, 0.00062136931818182];

const unit2 = ['smeter', 'skilometer', 'acre', 'hectare', 'sfoot', 'sinch', 'smile', 'syard'];
const fact2 = [1, 0.000001, 0.00024710538146717, 0.0001, 10.763910416709722, 1550.0031000062002, 3.8610217499077216e-7, 1.1959899890853953];

const unit3 = ['gram', 'kilogram', 'milligram', 'pound'];
const fact3 = [1, 0.001, 1000, 0.00220462];

// Functions

const convert = function () {


    if (property.value === "length") {

        if (inputFactor.value === outputFactor.value) {
            output.value = (input.value).toFixed(4)
        } else {

            for (let i = 0; i < unit1.length; i++) {

                if (unit1[i] === inputFactor.value) {
                    x = fact1[i];
                }
                if (unit1[i] === outputFactor.value) {
                    y = fact1[i]

                    if (inputFactor.value === "meter" || inputFactor.value === "kilometer" || inputFactor === "millimeter") {
                        output.value = (input.value * x * y).toFixed(4);
                    } else {
                        output.value = ((input.value * y) / x).toFixed(4);
                    }

                }

            }
        }
    }
    if (property.value === "area") {

        if (inputFactor.value === outputFactor.value) {
            output.value = input.value
        } else {

            for (let i = 0; i < unit2.length; i++) {

                if (unit2[i] === inputFactor.value) {
                    x = fact2[i];
                }
                if (unit2[i] === outputFactor.value) {
                    y = fact2[i]

                    if (inputFactor.value === "smeter") {
                        output.value = (input.value * x * y).toFixed(8);
                    } else {
                        output.value = ((input.value * y) / x).toFixed(8);
                    }

                }

            }
        }
    }
    if (property.value === "temperature") {

        let x = Number(input.value);

        if (inputFactor.value === outputFactor.value) {
            output.value = input.value
        } else {
            if (inputFactor.value === 'celsius') {
                if (outputFactor.value === 'fahrenhiet') {
                    output.value = ((x * 1.8) + 32).toFixed(3)
                }
                else {
                    output.value = (x + 273.15).toFixed(3);
                }
            } else if (inputFactor.value === 'fahrenhiet') {
                if (outputFactor.value === 'celsius') {
                    output.value = ((x - 32) / 1.8).toFixed(3);
                } else {
                    output.value = (((x - 32) / 1.8) + 273.15).toFixed(3);
                }
            } else if (inputFactor.value === 'kelvin') {
                if (outputFactor.value === 'celsius') {
                    output.value = (x - 273.15).toFixed(3);
                } else {
                    output.value = (((x - 273.15) * 1.8) + 32).toFixed(3)
                }
            }
        }
    }
    if (property.value === "mass") {

        if (inputFactor.value === outputFactor.value) {
            output.value = input.value
        } else {

            for (let i = 0; i < unit3.length; i++) {

                if (unit3[i] === inputFactor.value) {
                    x = fact3[i];
                }
                if (unit3[i] === outputFactor.value) {
                    y = fact3[i]

                    if (inputFactor.value === "gram") {
                        output.value = (input.value * x * y).toFixed(4);
                    } else {
                        output.value = (input.value * y / x).toFixed(4);
                    }

                }

            }
        }
    }

}


// Event listner

property.addEventListener('change', function () {

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

input.addEventListener('input', convert);
outputFactor.addEventListener('change', convert);
inputFactor.addEventListener('change', convert);