const firstUniqChar = require("./index");

test("should pass all test conditions", () => {
    expect(firstUniqChar("leetcode")).toEqual(0);
    expect(firstUniqChar("loveleetcode")).toEqual(2);
    expect(firstUniqChar("aabb")).toEqual(-1);
});
