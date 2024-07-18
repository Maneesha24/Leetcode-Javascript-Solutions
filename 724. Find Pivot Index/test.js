const pivotIndex = require("./index.js");

test("should pass all test conditions", () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
    expect(pivotIndex([1, 2, 3])).toEqual(-1);
    expect(pivotIndex([2, 1, -1])).toEqual(0);
});
