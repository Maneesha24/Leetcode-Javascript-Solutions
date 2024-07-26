const sumOfDigits = require("./index.js");

test("should pass the test conditions", () => {
  expect(sumOfDigits([34, 23, 1, 24, 75, 33, 54, 8])).toEqual(0);
  expect(sumOfDigits([99, 77, 33, 66, 55])).toEqual(1);
});
