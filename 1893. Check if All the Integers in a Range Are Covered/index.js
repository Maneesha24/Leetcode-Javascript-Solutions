/**
 * @author maneeshavenigalla
 * You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.
 * Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.
 * An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = (ranges, left, right) => {
  let rangeSet = new Set();

  for (const range of ranges) {
    const [left, right] = range;

    for (let i = left; i <= right; i++) {
      rangeSet.add(i);
    }
  }

  for (let i = left; i <= right; i++) {
    if (!rangeSet.has(i)) {
      return false;
    }
  }

  return true;
};

module.exports = isCovered;
