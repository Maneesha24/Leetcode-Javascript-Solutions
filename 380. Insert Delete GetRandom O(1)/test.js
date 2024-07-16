const RandomizedSet = require("./index");

test("should pass the test cases", () => {
    const randomizedSet = new RandomizedSet(1, 1, 0);
    expect(randomizedSet.insert(1)).toBe(true);
    expect(randomizedSet.remove(2)).toBe(false);
    expect(randomizedSet.insert(2)).toBe(true);
    expect(randomizedSet.getRandom()).toBe(1);
    expect(randomizedSet.remove(1)).toBe(true);
    expect(randomizedSet.insert(2)).toBe(false);
    expect(randomizedSet.getRandom()).toBe(1);
});
