const isCovered = require("./index");

test("should pass all test conditions", () => {
  expect(
    isCovered(
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      2,
      5
    )
  ).toBe(true);
  expect(
    isCovered(
      [
        [1, 10],
        [10, 20],
      ],
      21,
      21
    )
  ).toBe(false);
});
