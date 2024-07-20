const getEncryptedString = require("./index.js");

test("should pass all test conditions", () => {
  expect(getEncryptedString("dart", 3)).toEqual("tdar");
  expect(getEncryptedString("aaa", 1)).toEqual("aaa");
});
