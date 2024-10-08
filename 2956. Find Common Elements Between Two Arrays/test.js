const findIntersectionValues = require("./index.js");

test("should pass all test conditions", () => {
  expect(findIntersectionValues([2, 3, 2], [1, 2])).toEqual([2, 1]);
  expect(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])).toEqual([
    3, 4,
  ]);
  expect(findIntersectionValues([[3, 4, 2, 3]], [1, 5])).toEqual([0, 0]);
});
