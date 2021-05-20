let display = document.querySelector('.display');
let operand;
let numbers = document.querySelectorAll('[data-number]');
let operations = document.querySelectorAll('[data-operation]');
let equals = document.querySelector('[data-equals]');
let clear = document.querySelector('[data-clear]');
let currentNumber = [];
let currentOperand = '';
let previousNumber;


// Math functions
function add(num1, num2) {
  let result = num1 + num2;
  display.innerHTML = result;
  currentOperand = result;
  return result;
}

function subtract(num1, num2) {
  let result = num1 - num2;
  display.innerHTML = result;
  currentOperand = result;
  return result;
}

function multiply(num1, num2) {
  let result = num1 * num2;
  display.innerHTML = result;
  currentOperand = result;
  return result;
}

function divide(num1, num2) {
  let result = num1 / num2;
  display.innerHTML = result;
  currentOperand = result;
  return result;
}

// Operate
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

// Number buttons
numbers.forEach(number => {
  number.addEventListener('click', function() {
    appendNumber(number);
    updateDisplay(number);
  })
})


// Update display
function updateDisplay(number) {
  display.innerText += number.innerText;
}

// Append Numbers
function appendNumber(number) {
  currentNumber.push(number.innerText);
  currentOperand = parseInt(currentNumber.join(''));
}

// Operation buttons
operations.forEach(operation => {
  operation.addEventListener('click', function() {
    action(operation);
  })
})


// Action
function action(operation) {
  if (currentOperand !== '') {
    operate(previousNumber, currentOperand, operand);
  }
  operand = operation.innerText;
  display.innerText += operation.innerText;
  previousNumber = currentOperand;
  currentNumber = [];
  console.log(display.innerText);
  console.log(operand);
  console.log(currentNumber);
  console.log(previousNumber);
}



// Equals
equals.addEventListener('click', function() {
  previousNumber = operate(previousNumber, currentOperand, operand);
  console.log(currentOperand);
  // Paspaudus equals resultatas turetu but priskirtas prie prevNumber
  // Vietoj to jis grizta kaip undifiend
  console.log(previousNumber);
})

// Clear
clear.addEventListener('click', function() {
  operand = '';
  display.innerHTML = '';
  currentNumber = [];
  currentOperand = '';
  previousNumber = '';
  console.log(operand);
  console.log(currentNumber);
  console.log(previousNumber);
  console.log(currentOperand);
})

