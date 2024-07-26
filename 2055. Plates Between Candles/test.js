const platesBetweenCandles = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    platesBetweenCandles("**|**|***|", [
      [2, 5],
      [5, 9],
    ])
  ).toEqual([2, 3]);
  expect(
    platesBetweenCandles("***|**|*****|**||**|*", [
      [1, 17],
      [4, 5],
      [14, 17],
      [5, 11],
      [15, 16],
    ])
  ).toEqual([9, 0, 0, 0, 0]);
});
