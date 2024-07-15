const largestNumber = require("./index.js");

test("should pass all test conditions", () => {
    expect(largestNumber([10, 2])).toEqual("210");
    expect(largestNumber([3, 30, 34, 5, 9])).toEqual("9534330");
    expect(largestNumber([0, 0])).toEqual("0");
});
