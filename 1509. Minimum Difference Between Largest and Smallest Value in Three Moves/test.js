const minDifference = require("./index.js");

test("should pass the test cases", () => {
  expect(minDifference([5, 3, 2, 4])).toBe(0);
  expect(minDifference([1, 5, 0, 10, 14])).toBe(1);
  expect(minDifference([3, 100, 20])).toBe(0);
});
