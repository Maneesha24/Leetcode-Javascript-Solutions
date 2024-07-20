const longestPalindromeSubseq = require("./index.js");

test("should pass all test cases", () => {
  expect(longestPalindromeSubseq("bbbab")).toEqual(4);
  expect(longestPalindromeSubseq("cbbd")).toEqual(2);
});
