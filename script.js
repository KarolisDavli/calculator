let currentOperatorDisplay = document.querySelector('.current');
let previousOperatorDisplay = document.querySelector('.previous');
let operand;
let numbers = document.querySelectorAll('[data-number]');
let operations = document.querySelectorAll('[data-operation]');
let equals = document.querySelector('[data-equals]');
let currentNumber;
let previousNumber;


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

// On click numbers
numbers.forEach(number => {
  number.addEventListener('click', function() {
    currentOperatorDisplay.innerHTML += number.innerHTML;
    currentNumber = currentOperatorDisplay.innerHTML;
    console.log('dog');
  })
})

// On click operation
operations.forEach(operation => {
  operation.addEventListener('click', function() {
    previousOperatorDisplay.innerHTML = currentOperatorDisplay.innerHTML;
    currentOperatorDisplay.innerHTML = '';
    previousNumber = previousOperatorDisplay.innerHTML;
    operand = this.innerHTML;
    console.log('pusi');
    console.log(this.innerHTML);
  })
})

// Equals
equals.addEventListener('click', function() {
  operate(currentNumber, previousNumber, operand);
  console.log('equality');
})



console.log('Inner html is:' + currentOperatorDisplay.innerHTML);
console.log(previousOperatorDisplay.innerHTML);
console.log(numbers);
console.log(currentNumber);
console.log(previousNumber);
console.log(operations.innerHTML);



//  Problema dabar tokia, kad num1 ir num2 yra sukeisti vietoj, 
// Tai vietoj 5 - 3 gaunas 3 - 5.
// Tai pat rezultatas nera displayinamas
// C mygtuko funcionalumas