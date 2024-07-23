const sortedArrayToBST = require("./index.js");

test("should pass all test conditions", () => {
  expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual({"left": {"left": {"left": null, "right": null, "val": -10}, "right": null, "val": -3}, "right": {"left": {"left": null, "right": null, "val": 5}, "right": null, "val": 9}, "val": 0});
  expect(sortedArrayToBST([1,3])).toEqual({"left": {"left": null, "right": null, "val": 1}, "right": null, "val": 3});
});
