const numberOfSubarrays = require("./index.js");

test("should pass all test conditions", () => {
    expect(numberOfSubarrays([1, 1, 2, 1, 1], 3)).toEqual(2);
    expect(numberOfSubarrays([2, 4, 6], 1)).toEqual(0);
    expect(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toEqual(16);
});
