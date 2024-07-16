const isPalindrome = require("./index.js");

test("should pass the test conditions", () => {
  expect(isPalindrome(121)).toEqual(true);
  expect(isPalindrome(-121)).toEqual(false);
  expect(isPalindrome(10)).toEqual(false);
});
