
// Define operations
let plus = function (x,y) { return x + y };
let minus = function (x,y) { return x - y };
let mult = function (x,y) { return x * y };
let div = function (x,y) { return x / y };

let operations = {
  '+': plus,
  '-': minus,
  '*': mult,
  '/': div
};

// Display value
let displayValue = ''; 
let numberLeft = NaN;
let numberRight = NaN;
let operation;

// Save the numbers that will enter the operation;
function dis(val) {
    if (displayValue === '') {
        displayValue = val;
    } else {
        displayValue = displayValue + val;
    }
    document.getElementById("result").value = displayValue;
}

function setOperation(val) {
    operation = operations[val];
    if (isNaN(numberLeft)) {
        numberLeft = parseFloat(displayValue);
    } 
    displayValue = "";
} 

// Compute result 
let tempResult = function(left, right, operation) {
    return operation(left, right);
}

function equal() {
    numberRight = parseFloat(displayValue);
    numberLeft = tempResult(numberLeft, numberRight, operation);
    document.getElementById("result").value = numberLeft;
}

// Clear display cell
function clr() {
    document.getElementById("result").value = "";
    numberLeft = NaN;
    numberRight = NaN; 
    displayValue = "";
}