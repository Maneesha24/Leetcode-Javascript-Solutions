const myAtoi = require("./index.js");

test("should pass the test conditions", () => {
  expect(myAtoi("42")).toEqual(42);
  expect(myAtoi(" -042")).toEqual(-42);
  expect(myAtoi("1337c0d3")).toEqual(1337);
  expect(myAtoi("0-1")).toEqual(0);
});
