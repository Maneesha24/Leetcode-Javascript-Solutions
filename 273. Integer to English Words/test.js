const numberToWords = require("./index.js");

test("should pass the test cases", () => {
  expect(numberToWords(123)).toEqual("One Hundred Twenty Three");
  expect(numberToWords(12345)).toEqual(
    "Twelve Thousand Three Hundred Forty Five"
  );
  expect(numberToWords(1234567)).toEqual(
    "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
  );
});
