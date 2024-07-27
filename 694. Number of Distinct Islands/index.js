/**
 * @author maneeshavenigalla
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally
 * (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water. An island is considered
 * to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.
 * Return the number of distinct islands.
 * @param {number[][]} grid
 * @return {number}
 */
const numDistinctIslands = (grid) => {
  let seen = new Set();

  const traverse = (i, j, shape) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] !== 1
    ) {
      return 0;
    }

    grid[i][j] = 0;

    const up = traverse(i + 1, j, "U");
    const left = traverse(i - 1, j, "L");
    const right = traverse(i, j + 1, "R");
    const down = traverse(i, j - 1, "D");

    return shape + up + left + right + down;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        const shape = traverse(i, j, "X");
        seen.add(shape);
      }
    }
  }

  return seen.size;
};

module.exports = numDistinctIslands;
