const subarraysDivByK = require("./index.js");

test("should pass all test conditions", () => {
  expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7);
  expect(subarraysDivByK([5], 9)).toBe(0);
});
