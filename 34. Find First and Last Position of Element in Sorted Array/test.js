const searchRange = require("./index.js");

test("should pass all test conditions", () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  expect(searchRange([], 0)).toEqual([-1, -1]);
});
