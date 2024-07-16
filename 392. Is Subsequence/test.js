const isSubsequence = require("./index");

test("should pass all test conditions", () => {
    expect(isSubsequence("abc", "ahbgdc")).toEqual(true);
    expect(isSubsequence("axc", "ahbgdc")).toEqual(false);
});
