function calculator(number) {
  if (!Number.isNaN(number)) {
    return Math.sqrt(number);
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
});
