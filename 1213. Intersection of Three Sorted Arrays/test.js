const arraysIntersection = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    arraysIntersection([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8])
  ).toEqual([1, 5]);
  expect(
    arraysIntersection(
      [197, 418, 523, 876, 1356],
      [501, 880, 1593, 1710, 1870],
      [521, 682, 1337, 1395, 1764]
    )
  ).toEqual([]);
});
