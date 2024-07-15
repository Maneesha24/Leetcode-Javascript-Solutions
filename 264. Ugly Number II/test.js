const nthUglyNumber = require("./index.js");

test("should pass the test conditions", () => {
  expect(nthUglyNumber(10)).toEqual(12);
  expect(nthUglyNumber(1)).toEqual(1);
});
