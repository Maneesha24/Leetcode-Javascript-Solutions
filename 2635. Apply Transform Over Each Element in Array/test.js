const map = require("./index");

test("should pass all test conditions", () => {
    expect(map([1, 2, 3], function plusone(n) { return n + 1; })).toEqual([2, 3, 4]);
    expect(map([1, 2, 3], function plusI(n, i) { return n + i; })).toEqual([1, 3, 5]);
    expect(map([10, 20, 30], function constant() { return 42; })).toEqual([42, 42, 42]);
});
