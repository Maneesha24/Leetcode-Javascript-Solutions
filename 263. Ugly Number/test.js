const isUgly = require("./index.js");

test("should pass the test conditions", () => {
  expect(isUgly(6)).toEqual(true);
  expect(isUgly(1)).toEqual(true);
  expect(isUgly(14)).toEqual(false);
  expect(isUgly(8)).toEqual(true);
});
