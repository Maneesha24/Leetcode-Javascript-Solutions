const calPoints = require("./index.js");

test("should pass all test conditions", () => {
  expect(calPoints(["5", "2", "C", "D", "+"])).toEqual(30);
  expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toEqual(27);
  expect(calPoints(["1", "C"])).toEqual(0);
});
