const AuthenticationManager = require("./index");

test("should pass the test cases", () => {
  let authManager = new AuthenticationManager(5);
  authManager.renew("aaa", 1);
  authManager.generate("aaa", 2);
  expect(authManager.countUnexpiredTokens(6)).toBe(1);
  authManager.generate("bbb", 7);
  authManager.renew("aaa", 8);
  authManager.renew("bbb", 10);
  expect(authManager.countUnexpiredTokens(15)).toBe(0);
});
