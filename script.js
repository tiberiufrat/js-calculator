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
    console.log(e.explicitOriginalTarget.value);
}

const display = document.querySelector('#display');
const digits = Array.from(document.querySelectorAll('.digit'));
digits.forEach(digit => digit.addEventListener('click', digitPressed));