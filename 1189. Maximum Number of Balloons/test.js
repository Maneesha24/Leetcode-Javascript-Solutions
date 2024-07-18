const maxNumberOfBalloons = require("./index.js");

test("should pass the test conditions", () => {
    expect(maxNumberOfBalloons("nlaebolko")).toEqual(1);
    expect(maxNumberOfBalloons("loonbalxballpoon")).toEqual(2);
    expect(maxNumberOfBalloons("leetcode")).toEqual(0);
});