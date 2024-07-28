const longestOnes = require("./index.js");

test("should pass the test cases", () => {
  expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
  expect(
    longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
  ).toBe(10);
});
