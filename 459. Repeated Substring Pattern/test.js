const repeatedSubstringPattern = require("./index.js");

test("should pass the test conditions", () => {
  expect(repeatedSubstringPattern("abab")).toEqual(true);
  expect(repeatedSubstringPattern("aba")).toEqual(false);
  expect(repeatedSubstringPattern("abcabcabcabc")).toEqual(true);
  expect(repeatedSubstringPattern("ababab")).toEqual(true);
  expect(repeatedSubstringPattern("aaaa")).toEqual(true);
});
