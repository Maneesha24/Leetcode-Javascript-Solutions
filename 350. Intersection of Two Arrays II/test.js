const intersect = require("./index.js");

test("should pass all test conditions", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
    expect(intersect([1, 2, 2, 1], [2])).toEqual([2]);
});
