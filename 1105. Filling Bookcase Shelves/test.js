const minHeightShelves = require("./index.js");

test("should pass the test conditions", () => {
  expect(
    minHeightShelves(
      [
        [1, 1],
        [2, 3],
        [2, 3],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 2],
      ],
      4
    )
  ).toEqual(6);
  expect(
    minHeightShelves(
      [
        [1, 3],
        [2, 4],
        [3, 2],
      ],
      6
    )
  ).toEqual(4);
});
