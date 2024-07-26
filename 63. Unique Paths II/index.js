/**
 * @author maneeshavenigalla
 * You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right
 * at any point in time. An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot
 * include any square that is an obstacle. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let paths = Array.from({ length: m }, () => new Array(n).fill(0));

    paths[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

    for (let j = 1; j < n; j++) {
        paths[0][j] = obstacleGrid[0][j] === 0 && paths[0][j - 1] === 1 ? 1 : 0;
    }

    for (let i = 1; i < m; i++) {
        paths[i][0] = obstacleGrid[i][0] === 0 && paths[i - 1][0] === 1 ? 1 : 0;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                paths[i][j] = (paths[i - 1][j] || 0) + (paths[i][j - 1] || 0);
            } else {
                paths[i][j] = 0;
            }
        }
    }

    return paths[m - 1][n - 1];
};

module.exports = uniquePathsWithObstacles;
