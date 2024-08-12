const findPairs = require("./index.js");

test("should pass all test cases", () => {
  expect(findPairs([3, 1, 4, 1, 5], 2)).toEqual(2);
  expect(findPairs([1, 2, 3, 4, 5], 1)).toEqual(4);
  expect(findPairs([1, 3, 1, 5, 4], 0)).toEqual(1);
});
