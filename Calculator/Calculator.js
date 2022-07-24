createEvents();
let inputArea = document.getElementById("area");
function btnEvent(event) {
  const clickedValue = event.target.textContent;
  if (clickedValue === "C") {
    inputArea.textContent = "";
    return;
  }
  inputArea.textContent += event.target.textContent;

  return event.target.textContent;
}
var value = "";
function createEvents() {
  let buttons = document.getElementsByClassName("nums");
  let operators = document.getElementsByClassName("operators");
  for (const element of buttons) {
    element.onclick = btnEvent;
  }
  for (const element of operators) {
    element.onclick = btnEvent;
  }
}
const getNumbers = (inputStr = undefined) => {
  if (inputStr == undefined) {
    let value = inputArea.textContent;
    let numberString = value.split(/[+x-÷]/g);
    return numberString.map(Number);
  }
  let numberString = inputStr.split(/[+x-÷]/g);
  return numberString.map(Number);
};
const equalPressed = () => {
  let value = inputArea.textContent;
  let numbers = value.split(/[\x÷+-]+/).map(Number);
  var operators = value.replace(/[0-9]|\./g, "").split("");

  let multip = operators.indexOf("x");
  while (multip != -1) {
    numbers.splice(multip, 2, numbers[multip] * numbers[multip + 1]);
    operators.splice(multip, 1);
    multip = operators.indexOf("x");
  }
  let div = operators.indexOf("÷");
  while (div != -1) {
    numbers.splice(div, 2, numbers[div] / numbers[div + 1]);
    operators.splice(div, 1);
    div = operators.indexOf("/");
  }
  let sum = operators.indexOf("+");
  while (sum != -1) {
    numbers.splice(sum, 2, numbers[sum] + numbers[sum + 1]);
    operators.splice(sum, 1);
    sum = operators.indexOf("+");
  }
  let index = operators.indexOf("-");
  while (index != -1) {
    numbers.splice(index, 2, numbers[index] - numbers[index + 1]);
    operators.splice(index, 1);
    index = operators.indexOf("-");
  }
  inputArea.textContent = numbers[0];
};
