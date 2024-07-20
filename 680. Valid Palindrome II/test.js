const validPalindrome = require("./index.js");

test("should pass all test conditions", () => {
    expect(validPalindrome("aba")).toEqual(true);
    expect(validPalindrome("abca")).toEqual(true);
    expect(validPalindrome("abc")).toEqual(false);
});