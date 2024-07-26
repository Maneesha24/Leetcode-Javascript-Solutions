const threeSumClosest = require("./index.js");

test("should pass all test conditions", () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toEqual(2);
  expect(threeSumClosest([0, 0, 0], 1)).toEqual(0);
});
