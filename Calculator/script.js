let display = document.getElementById('display');

// Function to append numbers and operators to the display
function appendToDisplay(value) {
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Function to clear the display
function clearDisplay() {
  display.innerText = '0';
}

// Function to evaluate the expression
function calculateResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}
