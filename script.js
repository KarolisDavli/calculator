let currentOperator = document.getElementsByClassName('current');
let previousOperator = document.getElementsByClassName('previous');
let operand;


// Math functions
function add(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

function subtract(num1, num2) {
  let result = num1 - num2;
  console.log(result);
}

function multiply(num1, num2) {
  let result = num1 * num2;
  console.log(result);
}

function divide(num1, num2) {
  let result = num1 / num2;
  console.log(result);
}

// Operate
function operate(num1, num2, operator) {
  if(operator == '+') {
    add(num1, num2);
  } else if(operator == '-') {
    subtract(num1, num2);
  } else if(operator == '*') {
    multiply(num1, num2);
  } else if(operator == '/') {
    divide(num1, num2);
  }
}

console.log(currentOperator);
console.log(previousOperator);