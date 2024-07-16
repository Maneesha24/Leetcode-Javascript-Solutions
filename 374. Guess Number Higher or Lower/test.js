const guessNumber = require("./index");

test("should pass all test conditions", () => {
    expect(guessNumber(10)).toEqual(6);
    expect(guessNumber(20)).toEqual(6);
});
