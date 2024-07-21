const reorganizeString = require("./index.js");

test("should pass all test conditions", () => {
  expect(reorganizeString("aab")).toEqual("aba");
  expect(reorganizeString("aaab")).toEqual("");
});
