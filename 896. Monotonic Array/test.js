const isMonotonic = require("./index.js");

test("should pass all test conditions", () => {
  expect(isMonotonic([1, 2, 2, 3])).toEqual(true);
  expect(isMonotonic([6, 5, 4, 4])).toEqual(true);
  expect(isMonotonic([1, 3, 2])).toEqual(false);
});
