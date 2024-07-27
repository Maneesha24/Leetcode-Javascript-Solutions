const ladderLength = require("./index.js");

test("should pass all test conditions", () => {
    expect(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])).toEqual(5);
    expect(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])).toEqual(0);
    expect(ladderLength("hit", "dog", ["hot","dog"])).toEqual(0);
});