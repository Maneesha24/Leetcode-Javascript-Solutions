const strStr = require("./index.js");

test("should pass the test conditions", () => {
    expect(strStr("sadbutsad", "sad")).toEqual(0);
    expect(strStr("leetcode", "leeto")).toEqual(-1);
});
