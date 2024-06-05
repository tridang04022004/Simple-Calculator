const display = document.getElementById("display");
const displayOp = document.getElementById("displayOperation");

let op = "";

function appendToDisplay(input) {
  display.innerHTML += input;
  op += input;
}

function calculate() {
  displayOp.innerHTML = op;
  try {
    display.innerHTML = eval(display.innerHTML);
    op = "";
  } catch (e) {
    display.innerHTML = "Error";
    op = "";
    displayOp.innerHTML = op;
  }
}

function clearDisplay() {
  display.innerHTML = "";
  op = "";
}
