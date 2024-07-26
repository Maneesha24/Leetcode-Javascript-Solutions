/**
 * @author maneeshavenigalla
 * There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string s consisting of characters
 * '*' and '|' only, where a '*' represents a plate and a '|' represents a candle. You are also given a 0-indexed 2D integer array queries
 * where queries[i] = [lefti, righti] denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the number of
 * plates between candles that are in the substring. A plate is considered between candles if there is at least one candle to its left and
 * at least one candle to its right in the substring.
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
const platesBetweenCandles = (s, queries) => {
  let candles = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      candles.push(i);
    }
  }

  for (let j = 0; j < queries.length; j++) {
    let left = indexFinder(candles, queries[j][0]);
    let right = indexFinder(candles, queries[j][1]);

    while (candles[right] > queries[j][1]) {
      right--;
    }

    while (candles[left] < queries[j][0]) {
      left++;
    }

    let ans;
    if (right <= left) {
      ans = 0;
    } else {
      ans = candles[right] - candles[left] - (right - left);
    }

    result.push(ans);
  }

  return result;
};

const indexFinder = function (candles, val) {
  let left = 0;
  let right = candles.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (candles[mid] === val) {
      left = mid;
      break;
    }
    if (candles[mid] > val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

module.exports = platesBetweenCandles;
