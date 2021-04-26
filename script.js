let currentOperatorDisplay = document.querySelector('.current');
let previousOperatorDisplay = document.querySelector('.previous');
let operand;
let numbers = document.querySelectorAll('[data-number]');
let operations = document.querySelectorAll('[data-operation]');
let equals = document.querySelector('[data-equals]');
let clear = document.querySelector('[data-clear]');
let currentNumber;
let previousNumber;


// Math functions
function add(num1, num2) {
  let result = num1 + num2;
  currentOperatorDisplay.innerHTML = result;
  return result;
  console.log(result);
}

function subtract(num1, num2) {
  let result = num1 - num2;
  currentOperatorDisplay.innerHTML = result;
  console.log(result);
}

function multiply(num1, num2) {
  let result = num1 * num2;
  currentOperatorDisplay.innerHTML = result;
  console.log(result);
}

function divide(num1, num2) {
  let result = num1 / num2;
  currentOperatorDisplay.innerHTML = result;
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
  } else if(operator == '÷') {
    divide(num1, num2);
  }
}

// On click numbers
numbers.forEach(number => {
  number.addEventListener('click', function() {
    currentOperatorDisplay.innerHTML += number.innerHTML;
    currentNumber = parseInt(number.innerHTML);
  })
})

// On click operation
operations.forEach(operation => {
  operation.addEventListener('click', function() {
    previousOperatorDisplay.innerHTML = currentOperatorDisplay.innerHTML;
    currentOperatorDisplay.innerHTML = '';
    previousNumber = parseInt(previousOperatorDisplay.innerHTML);
    operand = this.innerHTML;

    // if(previousNumber != undefined || currentNumber != undefined) {
    //   previousOperatorDisplay = operate(previousNumber, currentNumber, operand);
    //   console.log(previousNumber, currentNumber);
    // }
  })
})

// Equals
equals.addEventListener('click', function() {
  operate(previousNumber, currentNumber, operand);
})

// Clear
clear.addEventListener('click', function() {
  currentOperatorDisplay.innerHTML = '';
  previousOperatorDisplay.innerHTML = '';
})









// Kad prieiti prie kito veiksmo reikia butinai paspausti lygybe.
// Reikia padaryti taip, kad paspaudus viena is zenklu paskutiniai du
// Skaitmenys butu sudedami ir paspaudus viena is zenglu kitas(trecias)
// Skaicius butu tarkim pridedamas jau prie paskutiniu skaiciu sumos