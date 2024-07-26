const addedInteger = require("./index.js");

test("should pass all test conditions", () => {
  expect(addedInteger([2, 6, 4], [9, 7, 5])).toEqual(3);
  expect(addedInteger([10], [5])).toEqual(-5);
  expect(addedInteger([1,1,1,1], [1,1,1,1])).toEqual(0);
});
