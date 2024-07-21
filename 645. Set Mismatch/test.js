const findErrorNums = require("./index.js");

test("should pass all test conditions", () => {
  expect(findErrorNums([1, 2, 2, 4])).toEqual([2, 3]);
  expect(findErrorNums([1, 1])).toEqual([1, 2]);
  expect(findErrorNums([2, 2])).toEqual([2, 1]);
});
