const arraySign = require("./index");

test("should pass all test conditions", () => {
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toEqual(1);
    expect(arraySign([1, 5, 0, 2, -3])).toEqual(0);
    expect(arraySign([-1, 1, -1, 1, -1])).toEqual(-1);
});
