const inputBox = document.getElementById("inputBOX");
const buttons = Array.from(document.querySelectorAll("button"));
let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
      currentInput = "";
      operator = "";
      firstOperand = null;
      inputBox.value = "0";
    } else if (button.textContent === "DEL") {
      currentInput = currentInput.slice(0, -1);
      inputBox.value = currentInput || "0";
    } else if (button.textContent === "=") {
      if (firstOperand !== null && operator) {
        const secondOperand = parseFloat(currentInput);
        const result = calculate(firstOperand, secondOperand, operator);
        inputBox.value = result;
        currentInput = "";
        firstOperand = null;
        operator = "";
      }
    } else if (["+", "-", "*", "/", "%"].includes(button.textContent)) {
      if (currentInput !== "") {
        firstOperand = parseFloat(currentInput);
        operator = button.textContent;
        currentInput = "";
      }
    } else {
      currentInput += button.textContent;
      inputBox.value = currentInput;
    }
  });
});

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      return b;
  }
}
