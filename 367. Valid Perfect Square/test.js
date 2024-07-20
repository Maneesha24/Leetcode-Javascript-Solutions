const isPerfectSquare = require("./index.js");

test("should pass all test conditions", () => {
  expect(isPerfectSquare(16)).toEqual(true);
  expect(isPerfectSquare(14)).toEqual(false);
});
