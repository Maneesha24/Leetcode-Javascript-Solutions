const findSpecialInteger = require("./index");

test("should pass all test conditions", () => {
  expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).toEqual(6);
  expect(findSpecialInteger([1, 1])).toEqual(1);
});
