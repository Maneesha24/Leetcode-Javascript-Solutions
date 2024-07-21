const romanToInt = require("./index");

test("should pass all test conditions", () => {
  expect(romanToInt("III")).toEqual(3);
  expect(romanToInt("LVIII")).toEqual(58);
  expect(romanToInt("MCMXCIV")).toEqual(1994);
});
