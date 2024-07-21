const reverseParentheses = require("./index.js");

test("should pass all test conditions", () => {
    expect(reverseParentheses("(abcd)")).toEqual("dcba");
    expect(reverseParentheses("(u(love)i)")).toEqual("iloveu");
    expect(reverseParentheses("(ed(et(oc))el)")).toEqual("leetcode");
});
