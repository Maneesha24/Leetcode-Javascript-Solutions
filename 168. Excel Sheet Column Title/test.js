const convertToTitle = require("./index.js");

test("should pass all test conditions", () => {
  expect(convertToTitle(1)).toEqual("A");
  expect(convertToTitle(28)).toEqual("AB");
  expect(convertToTitle(701)).toEqual("ZY");
});
