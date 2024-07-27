const grayCode = require("./index.js");

test("should pass all test conditions", () => {
  expect(grayCode(2)).toStrictEqual([0, 1, 3, 2]);
  expect(grayCode(1)).toStrictEqual([0, 1]);
});
