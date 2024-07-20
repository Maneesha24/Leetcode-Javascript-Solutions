const moveZeroes = require("./index.js");

test("should pass the test cases", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  expect(moveZeroes([0])).toEqual([0]);
});
