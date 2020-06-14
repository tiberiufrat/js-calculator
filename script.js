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

function countDecimals (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}

function display (number) {
    if (number.toString().length > 9) {
        displayArea.textContent = Number(number).toExponential(5);
    } else {
        displayArea.textContent = Math.round((Number(number) + Number.EPSILON) * 10e8) / 10e8;
    }
}

function displaySign (sign) {
    displaySignArea.textContent = sign;
}

function digitPressed (e) {
    var pressedNumber = Number(e.explicitOriginalTarget.value);
    if (!currentSign) {
        if (numberInMemory) {
            if (!decimalMode) {
                numberInMemory *= 10;
                numberInMemory += pressedNumber;
            } else {
                var multiplier = Math.pow(10, (countDecimals(numberInMemory)+1));
                console.log(multiplier);
                numberInMemory *= multiplier;
                numberInMemory += pressedNumber;
                numberInMemory /= multiplier;
            }
        } else {
            numberInMemory = pressedNumber;
        }
        display(numberInMemory);
    } else {
        if (newNumber) {
            if (!decimalMode) {
                newNumber *= 10;
                newNumber += pressedNumber;
            } else {
                var multiplier = Math.pow(10, (countDecimals(numberInMemory)+1));
                newNumber *= multiplier;
                newNumber += pressedNumber;
                newNumber /= multiplier;
            }
        } else {
            newNumber = pressedNumber;
        }
        display(newNumber);
    }
}

function operatorPressed (e) {
    decimalMode = false;
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

function enterPressed () {
    decimalMode = false;
    if (numberInMemory, currentSign, newNumber) {
        numberInMemory = operate(numberInMemory, newNumber, currentSign);
        console.log(numberInMemory);
        display(numberInMemory);
        displaySign('=');
        currentSign = null;
        newNumber = null;
    }
}

function clearPressed () {
    display(0);
    displaySign('CLEAR');
    decimalMode = false;
    numberInMemory = null;
    newNumber = null;
    currentSign = null;
}

function decimalPressed (e) {
    decimalMode = true;
}

let decimalMode = false;
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

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', decimalPressed);