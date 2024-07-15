const reverseWords = require("./index.js");

test("should pass all test conditions", () => {
    expect(reverseWords("the sky is blue")).toEqual("blue is sky the");
    expect(reverseWords("  hello world  ")).toEqual("world hello");
    expect(reverseWords("a good   example")).toEqual("example good a");
});
