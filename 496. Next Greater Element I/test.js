const findTargetSumWays = require("./index.js");

test("should pass all test conditions", () => {
    expect(findTargetSumWays([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
    expect(findTargetSumWays([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
});