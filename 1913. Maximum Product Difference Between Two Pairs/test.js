const maxProductDifference = require("./index");

test("should pass all test conditions", () => {
    expect(maxProductDifference([5, 6, 2, 7, 4])).toEqual(34);
    expect(maxProductDifference([4, 2, 5, 9, 7, 4, 8])).toEqual(64);
});
