const reverseVowels = require("./index.js");

test("should pass all test conditions", () => {
  expect(reverseVowels("hello")).toEqual("holle");
  expect(reverseVowels("leetcode")).toEqual("leotcede");
});
