const canPermutePalindrome = require("./index.js");

test("should pass the test conditions", () => {
  expect(canPermutePalindrome("code")).toEqual(false);
  expect(canPermutePalindrome("aab")).toEqual(true);
  expect(canPermutePalindrome("carerac")).toEqual(true);
});
