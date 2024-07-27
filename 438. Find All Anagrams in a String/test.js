const findAnagrams = require("./index.js");

test("should pass all test conditions", () => {
  expect(findAnagrams("cbaebabacd", "abc")).toEqual([0, 6]);
  expect(findAnagrams("abab", "ab")).toEqual([0, 1, 2]);
});
