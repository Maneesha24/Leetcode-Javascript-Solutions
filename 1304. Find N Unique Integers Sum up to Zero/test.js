const sumZero = require("./index");

test("should pass all test conditions", () => {
  expect(sumZero(5)).toEqual([0, 4, -4, 2, -2]);
  expect(sumZero(3)).toEqual([0, 2, -2]);
  expect(sumZero(1)).toEqual([0]);
});
