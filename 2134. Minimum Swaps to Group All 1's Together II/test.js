const minSwaps = require("./index.js");

test("should pass all test conditions", () => {
  expect(minSwaps([0, 1, 0, 1, 1, 0, 0])).toEqual(1);
  expect(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0])).toEqual(2);
  expect(minSwaps([1, 1, 0, 0, 1])).toEqual(0);
});
