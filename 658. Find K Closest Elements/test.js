const findClosestElements = require("./index");

test("should pass all test conditions", () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
    expect(findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
});
