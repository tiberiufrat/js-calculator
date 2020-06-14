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
        digitInMemory = Number(e.explicitOriginalTarget.value);
        display.textContent = digitInMemory;
    }
}

function operatorPressed (e) {
    if (digitInMemory !== null) {
        digitInMemory = Number(e.explicitOriginalTarget.value);
        display.textContent = digitInMemory;
    }
}

let currentSign = null;
let digitInMemory = null;
const display = document.querySelector('#display');

const digits = Array.from(document.querySelectorAll('.digit'));
digits.forEach(digit => digit.addEventListener('click', digitPressed));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(operator => operator.addEventListener('click', operatorPressed));