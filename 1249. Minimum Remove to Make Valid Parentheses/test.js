const minRemoveToMakeValid = require("./index");

test("should pass all test conditions", () => {
  expect(minRemoveToMakeValid("lee(t(c)o)de)")).toEqual("lee(t(c)o)de");
  expect(minRemoveToMakeValid("a)b(c)d")).toEqual("ab(c)d");
  expect(minRemoveToMakeValid("))((")).toEqual("");
});
