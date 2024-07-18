const maxLengthBetweenEqualCharacters = require("./index");

test("should pass all test conditions", () => {
    expect(maxLengthBetweenEqualCharacters("aa")).toEqual(0);
    expect(maxLengthBetweenEqualCharacters("abca")).toEqual(2);
    expect(maxLengthBetweenEqualCharacters("cbzxy")).toEqual(-1);
});
