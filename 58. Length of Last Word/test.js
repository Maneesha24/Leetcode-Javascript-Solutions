const lengthOfLastWord = require("./index");

test("should pass all test conditions", () => {
    expect(lengthOfLastWord("Hello World")).toEqual(5);
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
    expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
});
