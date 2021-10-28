import {
  calculator,
  inputDecimal,
  inputDigit,
  handleOperator,
  handleReset,
  handleEquals,
  handleDelete,
} from "./calculator.js";

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

  preferences = localStorage.getItem("theme") == undefined ? 1 : localStorage.getItem("theme");
  document.documentElement.className = `theme${preferences}`;
  radios[Number(preferences) - 1].checked = true;
};

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const resetButton = document.querySelector("[data-reset]");
const dotButton = document.querySelector("#_dot");
const radios = document.getElementsByClassName("themesRadio");

let result = document.querySelector("[data-result]");
result.textContent = calculator.displayValue;
let preferences;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inputDigit(button.textContent);
  });
});

dotButton.addEventListener("click", () => {
  inputDecimal();
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleOperator(button.textContent);
  });
});

equalsButton.addEventListener("click", () => {
  handleEquals();
});

deleteButton.addEventListener("click", () => {
  handleDelete();
});

resetButton.addEventListener("click", () => {
  handleReset();
});

let selected = 1;
for (let index = 0; index < radios.length; index++) {
  const element = radios[index];
  element.addEventListener("click", () => {
    selected = element.value;
    if (selected == 1) {
      document.documentElement.className = "theme1";
      localStorage.setItem("theme", selected.toString());
    }
    if (selected == 2) {
      document.documentElement.className = "theme2";
      localStorage.setItem("theme", selected.toString());
    }
    if (selected == 3) {
      document.documentElement.className = "theme3";
      localStorage.setItem("theme", selected.toString());
    }
  });
}
