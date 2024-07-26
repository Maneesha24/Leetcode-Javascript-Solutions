const removeVowels = require("./index.js");

test("should pass the test conditions", () => {
    expect(removeVowels("leetcodeisacommunityforcoders")).toEqual("ltcdscmmntyfrcdrs");
    expect(removeVowels("aeiou")).toEqual("");
});