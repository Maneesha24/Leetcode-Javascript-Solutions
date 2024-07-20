/**
 * @author maneeshavenigalla
 * There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.
 * The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a
 * building has an ocean view if all the buildings to its right have a smaller height. Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.
 * @param {number[]} heights
 * @return {number[]}
 */
const findBuildings = (heights) => {
  let result = [];

  let max = -1;

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      result.push(i);
    }

    max = Math.max(max, heights[i]);
  }

  return result.reverse();
};

module.exports = findBuildings;
