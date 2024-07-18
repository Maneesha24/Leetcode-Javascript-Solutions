const countCharacters = require("./index.js");

test("should pass the test conditions", () => {
    expect(countCharacters(["cat", "bt", "hat", "tree"], "atach")).toEqual(6);
    expect(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")).toEqual(10);
});