const calculator = {
  displayValue: "0",
  firstOperand: null,
  secondOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  result.textContent = calculator.displayValue;
}

function inputDigit(digit) {
  const { displayValue } = calculator;
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
  calculator.firstOperand = calculator.displayValue;
  updateDisplay();
}

function inputDecimal() {
  calculator.displayValue += ".";
  updateDisplay();
}

function handleOperator(nextOperator) {
  calculator.operator = nextOperator;
  calculator.displayValue = String(calculator.displayValue);

  if (!calculator.displayValue.includes(nextOperator)) {
    calculator.displayValue += nextOperator;
  } else handleEquals();

  updateDisplay();
}

function calculate() {
  let { firstOperand, secondOperand, operator, displayValue } = calculator;

  firstOperand = displayValue.split(operator)[0];
  secondOperand = displayValue.split(operator).pop();

  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);

  if (calculator.operator === "+") {
    return firstOperand + secondOperand;
  }
  if (calculator.operator === "-") {
    return firstOperand - secondOperand;
  }
  if (calculator.operator === "x") {
    return firstOperand * secondOperand;
  }
  if (calculator.operator === "/") {
    return firstOperand / secondOperand;
  }
}

function handleReset() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  updateDisplay();
}

function handleEquals() {
  const result = calculate();
  console.log(result);
  calculator.displayValue = result;
  calculator.firstOperand = result;
  calculator.secondOperand = null;
  updateDisplay();
}

function handleDelete() {
  let newDisplay = String(calculator.displayValue.slice(0, -1));
  calculator.displayValue = newDisplay;

  if (calculator.displayValue.length == 0) calculator.displayValue = "0";
  updateDisplay();
}

export {
  calculator,
  inputDecimal,
  inputDigit,
  handleOperator,
  calculate,
  handleReset,
  handleEquals,
  handleDelete
};