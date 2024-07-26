const sortJumbled = require("./index.js");

test("should pass all test conditions", () => {
  expect(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38])).toEqual([
    338, 38, 991,
  ]);
  expect(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123])).toEqual([
    123, 456, 789,
  ]);
  expect(
    sortJumbled([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
});
