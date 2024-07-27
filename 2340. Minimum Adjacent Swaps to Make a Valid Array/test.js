const minimumSwaps = require("./index.js");

test("should pass all test conditions", () => {
  expect(minimumSwaps([3, 4, 5, 5, 3, 1])).toEqual(6);
  expect(minimumSwaps([9])).toEqual(0);
});
