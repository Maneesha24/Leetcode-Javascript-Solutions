const replaceDigits = require("./index");

test("should pass all test conditions", () => {
  expect(replaceDigits("a1c1e1")).toEqual("abcdef");
  expect(replaceDigits("a1b2c3d4e")).toEqual("abbdcfdhe");
});
