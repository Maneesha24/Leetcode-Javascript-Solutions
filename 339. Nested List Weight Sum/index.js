/**
 * @author maneeshavenigalla
 * You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may
 * also be integers or other lists. Return the sum of each integer in nestedList multiplied by its depth.
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
const depthSum = (nestedList) => {
    
  const dfs = (nestedList, depth) => {
    let sum = 0;
    const n = nestedList.length;

    for (let i = 0; i < n; i++) {
      if (nestedList[i].isInteger()) {
        sum += nestedList[i].getInteger() * depth;
      } else {
        sum += dfs(nestedList[i].getList(), depth + 1);
      }
    }

    return sum;
  };

  return dfs(nestedList, 1);
};

module.exports = depthSum;
