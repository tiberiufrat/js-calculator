function add() {
    var args = Array.prototype.slice.call(arguments);
    var result = 0;
    args.forEach(argument => {
        result += argument;
    });
    return result;
}

function subtract() {
    var args = Array.prototype.slice.call(arguments);
    var result = args.shift();
    args.forEach(argument => {
        result -= argument;
    });
    return result;
}

function multiply() {
    var args = Array.prototype.slice.call(arguments);
    var result = 1;
    args.forEach(argument => {
        result *= argument;
    });
    return result;
}

function divide() {
    var args = Array.prototype.slice.call(arguments);
    var result = args.shift();
    args.forEach(argument => {
        result /= argument;
    });
    return result;
}

