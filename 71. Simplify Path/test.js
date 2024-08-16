const simplifyPath = require("./index.js");

test("should pass all test cases", () => {
  expect(simplifyPath("/home/")).toEqual("/home");
  expect(simplifyPath("/home//foo/")).toEqual("/home/foo");
  expect(simplifyPath("/home/user/Documents/../Pictures")).toEqual("/home/user/Pictures");
  expect(simplifyPath("/../")).toEqual("/");
  expect(simplifyPath("/.../a/../b/c/../d/./")).toEqual("/.../b/d");
});
