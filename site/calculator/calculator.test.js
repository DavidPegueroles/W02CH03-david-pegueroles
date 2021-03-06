const calculatorResults = [];

function calculator(firstNumber, secondNumber) {
  if (
    typeof firstNumber === "number" &&
    !Number.isNaN(firstNumber) &&
    typeof secondNumber !== "number"
  ) {
    return Math.sqrt(firstNumber);
  }
  if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    calculatorResults.push(firstNumber + secondNumber);
    calculatorResults.push(firstNumber - secondNumber);
    calculatorResults.push(firstNumber * secondNumber);
    calculatorResults.push(firstNumber / secondNumber);

    return calculatorResults.join(",");
  }

  return new Error("It's not a number");
}

describe("Given a calculator function", () => {
  describe("When it receives a number", () => {
    test("Then it should calculate it's square root", () => {
      const number = 4;
      const expectedResult = 2;

      const squareRootResult = calculator(number);

      expect(squareRootResult).toBe(expectedResult);
    });
  });

  describe("When it receives 2 numbers", () => {
    test("Then it should return a sum", () => {
      const firstNumber = 10;
      const secondNumber = 10;
      const expectedResult = 20;

      const sumResult = calculator(firstNumber, secondNumber);

      expect(sumResult).toBe(expectedResult);
    });
  });

  describe("When it receives 2 numbers", () => {
    test.only("Then it should return an string of the results of the sum, rest, multiply and divide oprations to those 2 numbers respectively", () => {
      const firstNumber = 10;
      const secondNumber = 10;
      const expectedResult = "20,0,100,1";

      const operationsResult = calculator(firstNumber, secondNumber);

      expect(operationsResult).toBe(expectedResult);
    });
  });
});
