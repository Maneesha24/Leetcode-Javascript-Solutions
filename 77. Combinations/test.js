const combine = require("./index.js");

test("should pass all test conditions", () => {
    expect(combine(4, 2)).toStrictEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]);
    expect(combine(1, 1)).toStrictEqual([[1]]);
});
