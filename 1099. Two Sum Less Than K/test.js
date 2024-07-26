const twoSumLessThanK = require("./index.js");

test("should pass the test conditions", () => {
  expect(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60)).toEqual(58);
  expect(twoSumLessThanK([10, 20, 30])).toEqual(-1);
});
