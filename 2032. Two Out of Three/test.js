const twoOutOfThree = require("./index.js");

test("should pass all test conditions", () => {
  expect(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])).toEqual([2, 3]);
  expect(twoOutOfThree([3, 1], [2, 3], [1, 2])).toEqual([3, 1, 2]);
  expect(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])).toEqual([]);
});
