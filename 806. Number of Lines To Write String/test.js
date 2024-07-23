const numberOfLines = require("./index.js");

test("should pass the test cases", () => {
  expect(
    numberOfLines(
      [
        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10, 10,
      ],
      "abcdefghijklmnopqrstuvwxyz"
    )
  ).toEqual([3, 60]);
  expect(
    numberOfLines(
      [
        4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10, 10,
      ],
      "bbbcccdddaaa"
    )
  ).toEqual([2, 4]);
});
