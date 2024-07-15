const findDifference = require("./index.js");

test("should pass all test conditions", () => {
    expect(findDifference([1,2,3], [2,4,6])).toEqual([[1,3],[4,6]]);
    expect(findDifference([1,2,3,3], [1,1,2,2])).toEqual([[3],[]]);
});
