const { encode, decode } = require("./index");

test("should pass the test cases", () => {
    expect(decode(encode("https://leetcode.com/problems/design-tinyurl"))).toBe("https://leetcode.com/problems/design-tinyurl");
});
