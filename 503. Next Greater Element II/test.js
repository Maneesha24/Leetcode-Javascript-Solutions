const nextGreaterElements = require("./index.js");

test("should pass all test conditions", () => {
  expect(nextGreaterElements([1, 2, 1])).toEqual([2, -1, 2]);
  expect(nextGreaterElements([1, 2, 3, 4, 3])).toEqual([2, 3, 4, -1, 4]);
});
