const longestCommonPrefix = require("./index");

test("should pass all test conditions", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl");
    expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
});
