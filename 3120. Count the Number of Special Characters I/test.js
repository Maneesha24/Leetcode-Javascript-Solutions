const numberOfSpecialChars = require("./index.js");

test("should pass all test conditions", () => {
  expect(numberOfSpecialChars("aaAbcBC")).toEqual(3);
  expect(numberOfSpecialChars("abc")).toEqual(0);
  expect(numberOfSpecialChars("abBCab")).toEqual(1);
});
