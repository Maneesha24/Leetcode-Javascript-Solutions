const findTheDifference = require("./index");

test("should pass all test conditions", () => {
    expect(findTheDifference("abcd", "abcde")).toEqual("e");
    expect(findTheDifference("", "y")).toEqual("y");
    expect(findTheDifference("a", "aa")).toEqual("a");
});
