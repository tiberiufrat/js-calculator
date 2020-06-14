function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(a, b, sign="+") {
    a = Number(a);
    b = Number(b);
    switch (sign) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function digitPressed (e) {
    if (!currentSign) {
        if (numberInMemory) {
            numberInMemory *= 10;
            numberInMemory += Number(e.explicitOriginalTarget.value);
        } else {
            numberInMemory = Number(e.explicitOriginalTarget.value);
        }
        display.textContent = numberInMemory;
    } else {
        if (newNumber) {
            newNumber *= 10;
            newNumber += Number(e.explicitOriginalTarget.value);
        } else {
            newNumber = Number(e.explicitOriginalTarget.value);
        }
        display.textContent = newNumber;
    }
}

function operatorPressed (e) {
    if (numberInMemory, currentSign, newNumber) {
        numberInMemory = operate(numberInMemory, newNumber, currentSign);
        display.textContent = numberInMemory;
        currentSign = e.explicitOriginalTarget.value;
        displaySign.textContent = currentSign;
        newNumber = null;
    }
    if (numberInMemory) {
        currentSign = e.explicitOriginalTarget.value;
        displaySign.textContent = currentSign;
    }
}

function enterPressed (e) {
    if (numberInMemory, currentSign, newNumber) {
        numberInMemory = operate(numberInMemory, newNumber, currentSign);
        display.textContent = numberInMemory;
        displaySign.textContent = '=';
        currentSign = null;
        newNumber = null;
    }
}

function clearPressed (e) {
    display.textContent = 0;
    displaySign.textContent = 'CLEAR';
    numberInMemory = null;
    newNumber = null;
    currentSign = null;
}

let result = null;
let newNumber = null;
let currentSign = null;
let numberInMemory = null;

const displaySign = document.querySelector('#sign');
const display = document.querySelector('#display');

const digits = Array.from(document.querySelectorAll('.digit'));
digits.forEach(digit => digit.addEventListener('click', digitPressed));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(operator => operator.addEventListener('click', operatorPressed));

const enter = document.querySelector('#enter');
enter.addEventListener('click', enterPressed);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearPressed);