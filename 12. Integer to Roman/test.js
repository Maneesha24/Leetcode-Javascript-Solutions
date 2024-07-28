const intToRoman = require("./index");

test("should pass all test conditions", () => {
  expect(intToRoman(3749)).toEqual("MMMDCCXLIX");
  expect(intToRoman(58)).toEqual("LVIII");
  expect(intToRoman(1994)).toEqual("MCMXCIV");
});
