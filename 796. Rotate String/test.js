const rotateString = require("./index.js");

test("should pass all test conditions", () => {
  expect(rotateString("abcde", "cdeab")).toBe(true);
  expect(rotateString("abcde", "abced")).toBe(false);
});
