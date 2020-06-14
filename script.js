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

function display (number) {
    if (number > 9e19) {
        displayArea.textContent = Number(number).toPrecision(15);
    } else {
        displayArea.textContent = Math.round((Number(number) + Number.EPSILON) * 10000) / 10000;
    }
}

function displaySign (sign) {
    displaySignArea.textContent = sign;
}

function digitPressed (e) {
    if (!currentSign) {
        if (numberInMemory) {
            numberInMemory *= 10;
            numberInMemory += Number(e.explicitOriginalTarget.value);
        } else {
            numberInMemory = Number(e.explicitOriginalTarget.value);
        }
        display(numberInMemory);
    } else {
        if (newNumber) {
            newNumber *= 10;
            newNumber += Number(e.explicitOriginalTarget.value);
        } else {
            newNumber = Number(e.explicitOriginalTarget.value);
        }
        display(newNumber);
    }
}

function operatorPressed (e) {
    if (numberInMemory, currentSign, newNumber) {
        numberInMemory = operate(numberInMemory, newNumber, currentSign);
        currentSign = e.explicitOriginalTarget.value;
        displaySign(currentSign);
        display(numberInMemory);
        newNumber = null;
    }
    if (numberInMemory) {
        currentSign = e.explicitOriginalTarget.value;
        displaySign(currentSign);
    }
}

function enterPressed (e) {
    if (numberInMemory, currentSign, newNumber) {
        numberInMemory = operate(numberInMemory, newNumber, currentSign);
        console.log(numberInMemory);
        display(numberInMemory);
        displaySign('=');
        currentSign = null;
        newNumber = null;
    }
}

function clearPressed (e) {
    display(0);
    displaySign('CLEAR');
    numberInMemory = null;
    newNumber = null;
    currentSign = null;
}

let newNumber = null;
let currentSign = null;
let numberInMemory = null;

const displaySignArea = document.querySelector('#sign');
const displayArea = document.querySelector('#display');

const digits = Array.from(document.querySelectorAll('.digit'));
digits.forEach(digit => digit.addEventListener('click', digitPressed));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(operator => operator.addEventListener('click', operatorPressed));

const enter = document.querySelector('#enter');
enter.addEventListener('click', enterPressed);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearPressed);