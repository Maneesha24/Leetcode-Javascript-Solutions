const strStr = require("./index.js");

test("should pass the test conditions", () => {
  expect(strStr([1, 2, 3])).toEqual([1, 3, 2]);
  expect(strStr([3, 2, 1])).toEqual([1, 2, 3]);
  expect(strStr([1, 1, 5])).toEqual([1, 5, 1]);
  expect(strStr([1, 2])).toEqual([2, 1]);
});
