// Asks the user 2 numbers and converts the string value to a number if possible
const num1In = parseFloat(Window.prompt("Introduce a number"), 10);
const num2In = parseFloat(
  Window.prompt("Introduce another number (optional)"),
  10
);

const result = [];

// This fuction is the main calculator
function calculator(num1, num2) {
  if (Number.isNaN(num1)) {
    // If the first input is not a number
    result.push("Introduce a valid NUMBER.");
  } else if (!Number.isNaN(num1) && Number.isNaN(num2)) {
    // If the first input is a number but the 2nd is not
    result.push(`The square root of ${num1} is ${Math.sqrt(num1).toFixed(3)}`);
  } else {
    // If both inputs are a number
    result.push(`The result of the sum is ${(num1 + num2).toFixed(3)}`);
    result.push(`The result of the rest is ${(num1 - num2).toFixed(3)}`);
    result.push(
      `The result of the multiplication is ${(num1 * num2).toFixed(3)}`
    );
    result.push(`The result of the divison is ${(num1 / num2).toFixed(3)}`);
  }
}

calculator(num1In, num2In);

Window.alert(result.join(`\n`));

// SELF-NOTE: podría mirar de hacer el codigo más reducido pero así creo que se ve más claro
