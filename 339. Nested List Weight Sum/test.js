const depthSum = require("./index.js");

class NestedInteger {
  constructor(value = null) {
    if (value === null) {
      this.isIntegerValue = false;
      this.list = [];
    } else if (Array.isArray(value)) {
      this.isIntegerValue = false;
      this.list = value;
    } else {
      this.isIntegerValue = true;
      this.value = value;
    }
  }

  isInteger() {
    return this.isIntegerValue;
  }

  getInteger() {
    if (this.isIntegerValue) {
      return this.value;
    } else {
      throw new Error("This NestedInteger is not an integer.");
    }
  }

  getList() {
    if (!this.isIntegerValue) {
      return this.list;
    } else {
      throw new Error("This NestedInteger is not a list.");
    }
  }
}

test("should pass all test conditions", () => {
  const nestedList = [
    new NestedInteger([new NestedInteger(1), new NestedInteger(1)]),
    new NestedInteger(2),
    new NestedInteger([new NestedInteger(1), new NestedInteger(1)]),
  ];

  expect(depthSum(nestedList)).toEqual(10);
});
