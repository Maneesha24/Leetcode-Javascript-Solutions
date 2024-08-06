const maximumUnits = require("./index");

test("should pass all test conditions", () => {
  expect(
    maximumUnits(
      [
        [1, 3],
        [2, 2],
        [3, 1],
      ],
      4
    )
  ).toEqual(8);
  expect(
    maximumUnits(
      [
        [5, 10],
        [2, 5],
        [4, 7],
        [3, 9],
      ],
      10
    )
  ).toEqual(91);
});
