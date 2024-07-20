/**
 * @author maneeshavenigalla
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 * A shift on s consists of moving the leftmost character of s to the rightmost position.
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    goal = goal.slice(1) + goal.slice(0, 1);

    if (goal == s) {
      return true;
    }
  }

  return false;
};

module.exports = rotateString;
