// Get elements
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');
const numberButtons = document.querySelectorAll('.button:not(#clear):not(#backspace):not(#divide):not(#multiply):not(#subtract):not(#add):not(#equals)');

// Variables
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Functions
function updateDisplay() {
  display.value = currentNumber;
}

function clearCalculator() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  updateDisplay();
}

function backspace() {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay();
}

function handleNumberButton(number) {
  currentNumber += number;
  updateDisplay();
}

function handleOperatorButton(op) {
  previousNumber = currentNumber;
  operator = op;
  currentNumber = '';
  updateDisplay();
}

function calculateResult() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      result = 0;
  }
  currentNumber = result.toString();
  updateDisplay();
}

// Event listeners
clearButton.addEventListener('click', clearCalculator);
backspaceButton.addEventListener('click', backspace);
divideButton.addEventListener('click', () => handleOperatorButton('/'));
multiplyButton.addEventListener('click', () => handleOperatorButton('*'));
subtractButton.addEventListener('click', () => handleOperatorButton('-'));
addButton.addEventListener('click', () => handleOperatorButton('+'));
equalsButton.addEventListener('click', calculateResult);

numberButtons.forEach(button => {
  button.addEventListener('click', () => handleNumberButton(button.textContent));
});

// Initialize display
updateDisplay();