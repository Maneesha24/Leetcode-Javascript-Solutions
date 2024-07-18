const arrayStringsAreEqual = require("./index");

test("should pass all test conditions", () => {
    expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])).toEqual(true);
    expect(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])).toEqual(false);
    expect(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])).toEqual(true);
});
