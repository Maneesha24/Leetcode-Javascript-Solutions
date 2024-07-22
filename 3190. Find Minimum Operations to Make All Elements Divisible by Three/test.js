const minimumOperations = require("./index.js");

test("should pass all test conditions", () => {
  expect(minimumOperations([1, 2, 3, 4])).toEqual(3);
  expect(minimumOperations([3,6,9])).toEqual(0);
});
