let display = document.querySelector('.display');
let numbers = document.querySelectorAll('[data-number]');
let operations = document.querySelectorAll('[data-operation]');
let equals = document.querySelector('[data-equals]');
let clear = document.querySelector('[data-clear]');
let operand;
let currentNumber = [];
let currentOperand = '';
let previousNumber;


// Math functions
function add(num1, num2) {
  let result = num1 + num2;
  display.innerHTML = result;
  currentOperand = result;
}

function subtract(num1, num2) {
  let result = num1 - num2;
  display.innerHTML = result;
  currentOperand = result;
}

function multiply(num1, num2) {
  let result = num1 * num2;
  display.innerHTML = result;
  currentOperand = result;
}

function divide(num1, num2) {
  let result = num1 / num2;
  if (num2 === 0) {
    result = 'You can\'t do that here';
  }
  display.innerHTML = result;
  console.log(result);
}

// function countDecimals(result) {
//   count = result.toString().split('.')[1].length;
//   if (count > 5) {
//    result = parseFloat(result).toFixed(5);
//    console.log(result);
//  }
//  return result;
// }

function operate(num1, num2, operator) {
  if(operator == '+') {
    add(num1, num2);
  } else if(operator == '-') {
    subtract(num1, num2);
  } else if(operator == '*') {
    multiply(num1, num2);
  } else if(operator == '÷') {
    divide(num1, num2);
  }
}


function updateDisplay(number) {
  display.innerText += number.innerText;
}

function appendNumber(number) {
  currentNumber.push(number.innerText);
  currentOperand = parseInt(currentNumber.join(''));
}

function action(operation) {
  if (currentOperand !== '') {
    operate(previousNumber, currentOperand, operand);
  }
  operand = operation.innerText;
  display.innerText += operation.innerText;
  previousNumber = currentOperand;
  currentNumber = [];
}

// Buttons
operations.forEach(operation => {
  operation.addEventListener('click', function() {
    action(operation);
    console.log(currentOperand);
  })
})

numbers.forEach(number => {
  number.addEventListener('click', function() {
    appendNumber(number);
    updateDisplay(number);
  })
})

equals.addEventListener('click', function() {
  operate(previousNumber, currentOperand, operand);
  currentNumber = [];
  operand = '';
})

clear.addEventListener('click', function() {
  operand = '';
  display.innerHTML = '';
  currentNumber = [];
  currentOperand = '';
  previousNumber = '';
})



