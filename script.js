let currentOperator = document.querySelector('.current');
let previousOperator = document.querySelector('.previous');
let operand;
let numbers = document.querySelectorAll('[data-number]');


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
    currentOperator.innerHTML += number.innerHTML;
  })
})

console.log('Inner html is:' + currentOperator.innerHTML);
console.log(previousOperator.innerHTML);
console.log(numbers);