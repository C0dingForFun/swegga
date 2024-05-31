const fPrice = 150.95;
const mPrice = 180.85;
let fTotal = document.querySelectorAll('span')[1];
let mTotal = document.querySelectorAll('span')[3];
let total = document.querySelectorAll('span')[4]
let inputF = document.querySelectorAll('input')[0];
let inputM = document.querySelectorAll('input')[1];
let button = document.querySelector('button');

button.addEventListener('click',() => {
    fTotal.innerText = "R" + parseFloat(eval(`fPrice * ${inputF.value}`)).toFixed(2);
    mTotal.innerText = "R" + parseFloat(eval(`mPrice * ${inputM.value}`)).toFixed(2);
    total.innerText = "R" + parseFloat(eval(`fPrice * ${inputF.value} + (mPrice * ${inputM.value}) `)).toFixed(2);
})


